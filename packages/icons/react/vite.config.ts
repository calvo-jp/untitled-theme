import path from 'node:path';
import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [dts()],
	build: {
		lib: {
			name: 'icons-react',
			entry: path.resolve(__dirname, 'src/index.ts'),
			formats: ['es', 'cjs'],
			fileName: (format, name) =>
				format === 'cjs' ? `${name}.cjs` : `${name}.js`,
		},
		sourcemap: 'inline',
		rollupOptions: {
			external: ['react', 'react-dom', 'react/jsx-runtime'],
			output: {
				preserveModules: true,
			},
		},
	},
});
