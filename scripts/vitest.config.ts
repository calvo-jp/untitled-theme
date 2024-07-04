/// <reference types="vitest" />
import {defineConfig} from 'vite';

export default defineConfig({
	test: {
		watch: false,
		include: ['src/**/*.{spec,test}.{js,ts}'],
		globals: true,
		passWithNoTests: true,
	},
});
