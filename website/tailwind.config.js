// @ts-check

import colors from '@untitled-theme/colors';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		colors,
		fontFamily: {
			sans: 'var(--font-sans)',
			mono: 'var(--font-mono)',
		},
		extend: {
			zIndex: {
				hide: '-1',
				auto: 'auto',
				base: '0',
				docked: '10',
				dropdown: '1000',
				sticky: '1100',
				banner: '1200',
				overlay: '1300',
				modal: '1400',
				popover: '1500',
				skipLink: '1600',
				toast: '1700',
				tooltip: '1800',
			},
			keyframes: {
				'fade-in': {
					'0%': {opacity: '0'},
					'100%': {opacity: '1'},
				},
				'fade-out': {
					'0%': {opacity: '1'},
					'100%': {opacity: '0'},
				},
				'slide-up': {
					'0%': {transform: 'translateY(100%)'},
					'100%': {transform: 'translateY(0)'},
				},
				'slide-down': {
					'0%': {transform: 'translateY(0)'},
					'100%': {transform: 'translateY(100%)'},
				},
			},
			animation: {
				'fade-in': 'fade-in 250ms ease-in-out',
				'fade-out': 'fade-out 150ms ease-in-out',
				'slide-up': 'slide-up 250ms ease-in-out',
				'slide-down': 'slide-down 150ms ease-in-out',
			},
			data: {
				open: 'state="open"',
				closed: 'state="closed"',
				selected: 'selected',
				highlighted: 'highlighted',
			},
			aria: {
				'current-page': 'current="page"',
			},
		},
	},
	plugins: [],
};
