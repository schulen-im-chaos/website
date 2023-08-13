/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	safelist: [
		{
			pattern: /^(from|via|to)-.*-[456]00$/
		},
		{
			pattern: /^bg-.*-[67]00$/,
			variants: ["hover"]
		}
	],

	theme: {
		extend: {},
		fontSize: {
			tn: "12px",
			sm: "16px",
			base: "18px",
			medium: "18px",
			lg: "24px",
			xl: "28px",
			"2xl": "30px",
			"3xl": "32xl"
		}
	},

	darkMode: "media",

	plugins: [require("@tailwindcss/forms")]
};
