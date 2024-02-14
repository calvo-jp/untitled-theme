import {defineConfig} from '@pandacss/dev';

export default defineConfig({
	preflight: true,
	presets: ['@pandacss/preset-base', '@untitled-theme/preset'],
	include: ['./src/**/*.{ts,tsx,js,jsx}'],
	exclude: [],
	theme: {
		extend: {},
	},
	outdir: 'styled-system',
	jsxFramework: 'react',
});
