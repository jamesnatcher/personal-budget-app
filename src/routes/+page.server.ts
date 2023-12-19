import { db } from '$lib/database/database.server';
import { user } from '$lib/database/schema';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals, parent }) => {
	await parent();
	const users = await db.select().from(user);
	const session = await locals.getSession();
	return {
		users: users,
		session: session
	};
}) satisfies PageServerLoad;
