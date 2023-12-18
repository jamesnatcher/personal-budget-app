import { db } from '$lib/database/database.server';
import { user } from '$lib/database/schema';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const result = await db.select().from(user);
	return {
		result
	};
}) satisfies PageServerLoad;
