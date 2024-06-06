import {defineConfig} from '@pandacss/dev';
import colors from '@untitled-theme/colors/panda';

export default defineConfig({
	preflight: true,
	include: ['./src/**/*.{ts,tsx}'],
	exclude: [],
	theme: {
		extend: {
			tokens: {
				colors,
				fonts: {
					sans: {value: 'var(--font-sans)'},
					mono: {value: 'var(--font-mono)'},
				},
				zIndex: {
					hide: {value: '-1'},
					auto: {value: 'auto'},
					base: {value: '0'},
					docked: {value: '10'},
					dropdown: {value: '1000'},
					sticky: {value: '1100'},
					banner: {value: '1200'},
					overlay: {value: '1300'},
					modal: {value: '1400'},
					popover: {value: '1500'},
					skipLink: {value: '1600'},
					toast: {value: '1700'},
					tooltip: {value: '1800'},
				},
				animations: {
					'fade-in': {value: 'fade-in 250ms ease-in-out'},
					'fade-out': {value: 'fade-out 150ms ease-in-out'},
					'slide-up': {value: 'slide-up 250ms ease-in-out'},
					'slide-down': {value: 'slide-down 150ms ease-in-out'},
				},
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
		},
	},
	hash: {
		cssVar: false,
		className: true,
	},
	watch: true,
	clean: true,
	outdir: 'styled-system',
	jsxFramework: 'react',
	conditions: {
		extend: {
			light: '[data-theme=light] &',
			dark: '[data-theme=dark] &',
		},
	},
});
