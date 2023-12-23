import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from '../$types';
import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { db } from '$lib/database/database.server';
import { userProfile } from '$lib/database/schema';
import { eq } from 'drizzle-orm';

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

const updateUserProfileSchema = z.object({
	firstName: z.string().min(1, 'First name is requrired'),
	nickName: z.string().nullable(),
	lastName: z.string().min(1, 'Last name is requrired'),
	phoneNumber: z.string().regex(phoneRegex, 'Invalid Number!')
});

export const load = (async (event) => {
	const { user } = await event.locals.getSession();
	const updateUserProfileForm = await superValidate(event, updateUserProfileSchema);

	const result = await db
		.select({
			firstName: userProfile.firstName,
			lastName: userProfile.lastName,
			nickName: userProfile.nickName,
			phoneNumber: userProfile.phone
		})
		.from(userProfile)
		.where(eq(userProfile.id, user.id));

	const { firstName, lastName, nickName, phoneNumber } = result[0];

	updateUserProfileForm.data = {
		firstName: firstName ?? '',
		lastName: lastName ?? '',
		nickName: nickName ?? '',
		phoneNumber: phoneNumber ?? ''
	};

	return {
		updateUserProfileForm
	};
}) satisfies PageServerLoad;

export const actions = {
	updateUserProfile: async (event) => {
		const { user } = await event.locals.getSession();
		const updateUserProfileForm = await superValidate(event, updateUserProfileSchema);

		if (!updateUserProfileForm.valid) {
			return fail(400, {
				updateUserProfileForm
			});
		}
		const validValues = updateUserProfileForm.data;
		await db
			.update(userProfile)
			.set({
				firstName: validValues.firstName,
				nickName: validValues.nickName,
				lastName: validValues.lastName,
				phone: validValues.phoneNumber
			})
			.where(eq(userProfile.id, user.id));
		throw redirect(302, '/profile');
	}
} satisfies Actions;
