import path from 'node:path';
import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [dts()],
	build: {
		lib: {
			name: 'colors',
			entry: path.resolve(__dirname, 'src/index.ts'),
			formats: ['es'],
			fileName: (_, name) => `${name}.js`,
		},
		sourcemap: 'inline',
	},
});
