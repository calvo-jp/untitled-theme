import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

const libConfig = defineConfig({
	plugins: [
		dts({
			include: ['src/lib'],
		}),
	],
	build: {
		copyPublicDir: false,
		emptyOutDir: true,
		sourcemap: true,
		lib: {
			name: 'preset-panda',
			entry: path.resolve(__dirname, 'src/lib/index.ts'),
			formats: ['es'],
			fileName(_, name) {
				return `${name}.js`;
			},
		},
	},
});

const devConfig = defineConfig({
	plugins: [react(), tsconfigPaths()],
	server: {
		port: 4200,
	},
});

export default defineConfig(({mode}) => {
	return mode === 'library' ? libConfig : devConfig;
});
