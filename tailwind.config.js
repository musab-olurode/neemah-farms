/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				text: '#808080',
				primary: '#31AD5D',
				tundora: '#404040',
			},
		},
	},
	plugins: [],
};
