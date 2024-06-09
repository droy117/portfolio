/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			"blueText": "rgba(24, 182, 255, 0.9)",
 			"orangeText": "rgba(255, 149, 40, 0.9)",
 			"yellowText": "rgba(221, 221, 37, 0.9)",
			"greenText": "rgba(27, 235, 158, 0.9)",
			"purpleText": "rgba(180, 98, 255, 0.9)",
			"blackText": "#1a1a1a",
			"whiteText": "#ffffff",
			"grayText": "#818181"
		}
	},
	plugins: [],
}
