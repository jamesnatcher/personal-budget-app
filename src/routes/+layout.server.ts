import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals, route, url }) => {
	const session = await locals.getSession();

	if (!session && route.id !== '/auth' && route.id !== '/') {
		throw redirect(307, '/auth');
	}
	const origin = url.origin;
	return { session, origin };
}) satisfies LayoutServerLoad;
