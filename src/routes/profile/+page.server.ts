import type { Actions, PageServerLoad } from '../$types';
import { db } from '$lib/database/database.server';
import { databaseRole, userProfile } from '$lib/database/schema';
import { eq } from 'drizzle-orm';

export const load = (async ({ locals }) => {
	const { user } = await locals.getSession();

    const result = await db
		.select({
            firstName: userProfile.firstName,
            nickName: userProfile.nickName,
            lastName: userProfile.lastName,
            phoneNumber: userProfile.phone,
            role: databaseRole.role,
        })
		.from(userProfile).leftJoin(databaseRole, eq(userProfile.roleId, databaseRole.id)).where(eq(userProfile.id, user.id));


    const profile = result[0]

    return { profile }
}) satisfies PageServerLoad;

export const actions = {} satisfies Actions;
