/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				roboto: ['Roboto Mono', ' monospace']
			},
			screens: {
				md: '768px',
				lg: '1024px'
			}
		}
	},
	plugins: []
};
