import type { Actions, PageServerLoad } from '../$types';
import { db } from '$lib/database/database.server';
import { userProfile } from '$lib/database/schema';
import { eq } from 'drizzle-orm';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ locals }) => {
	const session = await locals.getSession();
	const currentUser = session.user;
	const profile = await db.select().from(userProfile).where(eq(userProfile.id, currentUser.id));

	if (!profile || profile.length <= 0) {
		throw redirect(307, '/profile/update');
	}
}) satisfies PageServerLoad;

export const actions = {} satisfies Actions;
