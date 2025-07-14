import {defineConfig} from 'vitest/config';

export default defineConfig({
	test: {
		watch: false,
		globals: true,
		include: ['tests/**/*.{test,spec}.{js,ts}'],
		setupFiles: 'vitest.setup.ts',
		environment: 'node',
		passWithNoTests: true,
	},
});
