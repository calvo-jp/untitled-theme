import path from 'node:path';
import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [dts()],
	build: {
		lib: {
			name: 'colors',
			entry: {
				index: path.resolve(__dirname, 'src/index.ts'),
				panda: path.resolve(__dirname, 'src/panda.ts'),
			},
			formats: ['es'],
			fileName: (_, name) => `${name}.js`,
		},
		sourcemap: 'inline',
	},
});
