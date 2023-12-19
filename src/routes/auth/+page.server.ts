import type { Actions, PageServerLoad } from '../$types';
import { redirect } from '@sveltejs/kit';
import { DEV_ROOT_URL, PROD_ROOT_URL } from '$env/static/private';

const { MODE } = import.meta.env;
const callBackRootURL = MODE === 'development' ? DEV_ROOT_URL : PROD_ROOT_URL;

export const load = (async ({ locals }) => {
	const session = await locals.getSession();

	if (session !== null) {
		throw redirect(302, '/home');
	}
}) satisfies PageServerLoad;

export const actions = {
	discordAuth: async ({ locals }) => {
		const { data, error } = await locals.supabase.auth.signInWithOAuth({
			provider: 'discord',
			options: {
				redirectTo: `${callBackRootURL}/auth/callback`
			}
		});
		if (error) {
			throw redirect(307, '/');
		}
		throw redirect(302, data.url);
	},
	githubAuth: async ({ locals }) => {
		const { data, error } = await locals.supabase.auth.signInWithOAuth({
			provider: 'github',
			options: {
				redirectTo: `${callBackRootURL}/auth/callback`
			}
		});
		if (error) {
			throw redirect(307, '/');
		}
		throw redirect(302, data.url);
	},
	signOut: async ({ locals }) => {
		const { error } = await locals.supabase.auth.signOut();

		if (error) {
			throw redirect(307, '/home');
		}
		throw redirect(302, '/');
	}
} satisfies Actions;
