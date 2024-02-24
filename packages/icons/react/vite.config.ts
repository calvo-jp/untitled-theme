import react from '@vitejs/plugin-react-swc';
import path from 'path';
import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';
import pkg from './package.json';

export default defineConfig({
	plugins: [
		react(),
		dts({
			include: './lib',
			exclude: './src',
		}),
	],
	resolve: {
		alias: {
			'@lib': path.resolve(__dirname, 'lib'),
		},
	},
	root: path.resolve(__dirname),
	build: {
		lib: {
			name: 'icons-react',
			entry: path.resolve(__dirname, 'lib/index.ts'),
			formats: ['es'],
			fileName: (format, name) => `${name}.js`,
		},
		sourcemap: 'inline',
		copyPublicDir: false,
		rollupOptions: {
			external: [...Object.keys(pkg.devDependencies), 'react/jsx-runtime'],
			output: {
				preserveModulesRoot: 'lib',
				preserveModules: true,
			},
		},
	},
});
