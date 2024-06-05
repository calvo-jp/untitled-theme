import {defineConfig} from '@pandacss/dev';

export default defineConfig({
	preflight: true,
	include: ['./src/**/*.{ts,tsx}'],
	exclude: [],
	theme: {
		extend: {},
	},
	clean: true,
	outdir: 'styled-system',
	jsxFramework: 'react',
});
