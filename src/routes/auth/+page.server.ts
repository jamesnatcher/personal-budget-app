import type { Actions, PageServerLoad } from '../$types';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ locals }) => {
	const session = await locals.getSession();
	
	if (session !== null) {
		throw redirect(302, '/home');
	}
}) satisfies PageServerLoad;

export const actions = {
	discordAuth: async ({ locals, url }) => {
		const { data, error } = await locals.supabase.auth.signInWithOAuth({
			provider: 'discord',
			options: {
				redirectTo: `${url.origin}/auth/callback`
			}
		});
		if (error) {
			throw redirect(307, '/home');
		}
		throw redirect(302, data.url);
	},
	githubAuth: async ({ locals, url }) => {
		const { data, error } = await locals.supabase.auth.signInWithOAuth({
			provider: 'github',
			options: {
				redirectTo: `${url.origin}/auth/callback`
			}
		});
		if (error) {
			throw redirect(307, '/home');
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
