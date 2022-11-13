const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				'space-grotesk': ['var(--font-space-grotesk)', ...fontFamily.sans],
				aeonik: ['var(--font-aeonik)', ...fontFamily.sans],
			},
			colors: {
				text: '#808080',
				primary: '#31AD5D',
				tundora: '#404040',
			},
			animation: {
				reveal: 'fade-bottom 0.5s linear',
				'reveal-1': 'fade-bottom 0.75s linear',
				'reveal-2': 'fade-bottom 1s linear',
			},
			keyframes: {
				'fade-bottom': {
					'0%': {
						transform: 'translateY(40px) scale3d(1, 1, 1)',
						opacity: '0',
					},
					'100%': {
						transform: 'translateY(0) scale3d(1, 1, 1)',
						opacity: '1',
					},
				},
			},
		},
	},
	plugins: [],
};
