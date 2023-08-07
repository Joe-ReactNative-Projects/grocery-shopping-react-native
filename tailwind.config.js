/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,jsx,ts,tsx}",
		"./src/**/*.{js,jsx,ts,tsx}",
		"./App.{js,jsx,ts,tsx}",
	],
	theme: {
		colors: {
			lightblue: "#2A4BA0",
			darkblue: "#153075",
			darkyellow: "#F9B023",
			lightyellow: "#FFC83A",
			greyb: "#1E222B",
			greyb1: "#3E4554",
			greyb1: "#3E4554",
			greyb2: "#616A7D",
			greyb3: "#8891A5",
			greyb5: "#F8F9FB",
			greyb6: "#FAFBFD",
			// white: "#fff",
			black: "#000",
		},
		extend: {
			fontFamily: {
				manrope: ["Manrope", "sans-serif"],
			},
		},
	},
	plugins: [],
};
