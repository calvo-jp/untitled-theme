import path from 'node:path';
import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';
import solid from 'vite-plugin-solid';

export default defineConfig({
	plugins: [solid(), dts()],
	build: {
		lib: {
			name: 'icons-solid',
			entry: path.resolve(__dirname, 'src/index.ts'),
			formats: ['es', 'cjs'],
			fileName: (format, name) =>
				format === 'cjs' ? `${name}.cjs` : `${name}.js`,
		},
		sourcemap: 'inline',
		rollupOptions: {
			external: ['solid-js', 'solid-js/web'],
			output: {
				preserveModules: true,
			},
		},
	},
});
