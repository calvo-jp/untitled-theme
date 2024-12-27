import path from 'node:path';
import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      include: ['src'],
    }),
  ],
  publicDir: 'src/css',
  build: {
    lib: {
      name: 'colors',
      entry: {
        index: path.resolve(__dirname, 'src/index.ts'),
        panda: path.resolve(__dirname, 'src/panda/index.ts'),
        vars: path.resolve(__dirname, 'src/vars/index.ts'),
      },
      formats: ['es', 'cjs'],
      fileName: (format, name) => {
        return format === 'cjs' ? `${name}.js` : `${name}.mjs`;
      },
    },
    sourcemap: true,
  },
});
