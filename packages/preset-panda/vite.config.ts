import react from '@vitejs/plugin-react-swc';
import path from 'path';
import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';
import packageJson from './package.json';

export default defineConfig({
	plugins: [
		react(),
		dts({
			include: './lib',
			rollupTypes: true,
		}),
	],
	server: {
		port: 3000,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'styled-system': path.resolve(__dirname, './styled-system'),
		},
	},
	build: {
		lib: {
			name: 'preset-panda',
			entry: path.resolve(__dirname, './lib/index.ts'),
			formats: ['es', 'cjs'],
			fileName: (format, name) => (format === 'es' ? `${name}.esm.js` : `index.js`),
		},
		sourcemap: true,
		copyPublicDir: false,
		rollupOptions: {
			external: Object.keys(packageJson.devDependencies),
		},
	},
});
