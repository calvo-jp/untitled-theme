import {defineConfig} from '@pandacss/dev';

export default defineConfig({
	preflight: true,
	presets: ['@pandacss/preset-base', '@untitled-theme/preset-panda'],
	include: ['./src/**/*.{js,jsx,ts,tsx}'],
	exclude: [],
	theme: {
		extend: {},
	},
	outdir: 'styled-system',
	polyfill: true,
	jsxFramework: 'react',
});
