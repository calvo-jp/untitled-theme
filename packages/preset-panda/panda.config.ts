import {defineConfig} from '@pandacss/dev';
import preset from './lib';

export default defineConfig({
	preflight: true,
	presets: ['@pandacss/preset-base', preset],
	include: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			tokens: {
				fonts: {
					sans: {
						value: "'Inter', sans-serif",
					},
				},
			},
		},
	},
	outdir: 'styled-system',
	jsxFramework: 'react',
	globalCss: {
		body: {
			fontFamily: 'sans',
		},
	},
});
