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
			fileName(_, name) {
				return `${name}.js`;
			},
		},
		rollupOptions: {
			external: ['react', 'react/jsx-runtime', 'react-dom'],
			output: {
				preserveModules: true,
			},
		},
	},
});
