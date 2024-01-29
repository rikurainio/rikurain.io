/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        onyx: "#0f0f0f",
        whitesmoke: "#F8F8FF",
      }
    },
	},
	plugins: [],
}
