import path from 'path';
import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [dts()],
	build: {
		lib: {
			name: 'icons-react',
			entry: path.resolve(__dirname, 'src/index.ts'),
			formats: ['es'],
			fileName: (_, name) => `${name}.js`,
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
