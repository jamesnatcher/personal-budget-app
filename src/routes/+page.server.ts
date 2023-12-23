import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals, parent }) => {
	await parent();
	const session = await locals.getSession();

	if (session) {
		throw redirect(302, '/home');
	}
}) satisfies PageServerLoad;
