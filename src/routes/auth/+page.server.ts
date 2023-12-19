import type { Actions, PageServerLoad } from '../$types';
import { redirect } from '@sveltejs/kit';

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
				redirectTo: `http://localhost:5173/auth/callback`
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
				redirectTo: `http://localhost:5173/auth/callback`
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
