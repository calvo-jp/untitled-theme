import {defineConfig} from '@pandacss/dev';

export default defineConfig({
	preflight: true,
	include: ['./src/**/*.{js,jsx,ts,tsx}'],
	exclude: [],
	theme: {
		extend: {
			tokens: {
				fonts: {
					sans: {
						value: 'var(--font-sans)',
					},
				},
			},
		},
	},
	outdir: 'styled-system',
	polyfill: true,
	jsxFramework: 'react',
});
