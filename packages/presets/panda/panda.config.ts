import {defineConfig} from '@pandacss/dev';
import preset from './preset';

export default defineConfig({
	preflight: true,
	include: ['./src/**/*.{ts,tsx}'],
	exclude: [],
	presets: ['@pandacss/preset-base', preset],
	clean: true,
	outdir: 'styled-system',
	jsxFramework: 'react',
});
