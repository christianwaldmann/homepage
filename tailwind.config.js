const colors = require("tailwindcss/colors");

module.exports = {
	mode: "jit",
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,
			gray: colors.trueGray,
			indigo: colors.indigo,
			red: colors.rose,
			yellow: colors.amber,
			teal: colors.teal,
			blue: colors.blue,
			pink: colors.pink,
			green: colors.green,
			sky: colors.sky,
		},
		extend: {
			width: {
				70: "280px",
				94: "376px",
				130: "520px",
				192: "768px",
				200: "800px",
				220: "880px",
				230: "920px",
			},
			screens: {
				sm: "576px",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
