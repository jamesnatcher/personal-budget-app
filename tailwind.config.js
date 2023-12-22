/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'dark-purple': '#1F2041',
				purple: '#4B3F72',
				viridian: '#417B5A',
				bone: '#D0CEBA',
				pink: '#1F2041'
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['lemonade', 'dracula', 'cyberpunk']
	}
};
