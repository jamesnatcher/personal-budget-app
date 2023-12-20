import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { DEV_ROOT_URL, PROD_ROOT_URL } from '$env/static/private';

export const load = (async ({ locals, route }) => {
	const session = await locals.getSession();
	const { MODE } = import.meta.env;
	const callBackRootURL = MODE === 'development' ? DEV_ROOT_URL : PROD_ROOT_URL;

	if (!session && route.id !== '/auth' && route.id !== '/') {
		throw redirect(307, '/auth');
	}
	return { session, callBackRootURL };
}) satisfies LayoutServerLoad;
