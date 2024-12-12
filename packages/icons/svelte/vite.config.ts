import {svelte} from '@sveltejs/vite-plugin-svelte';
import {defineConfig} from 'vite';

export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        runes: true,
      },
    }),
  ],
  build: {
    /* issue: https://github.com/sveltejs/kit/issues/7792 */
    sourcemap: 'inline',
  },
});
