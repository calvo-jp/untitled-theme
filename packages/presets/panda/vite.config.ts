import react from '@vitejs/plugin-react-swc';
import {defineConfig, type Plugin} from 'vite';
import dts from 'vite-plugin-dts';

const libConfig = defineConfig({
	plugins: [
		dts({
			include: ['src/lib'],
		}) as Plugin,
	],
	build: {
		copyPublicDir: false,
	},
});

const devConfig = defineConfig({
	plugins: [react()],
});

export default defineConfig(({mode}) => {
	return mode === 'library' ? libConfig : devConfig;
});
