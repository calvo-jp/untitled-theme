import {defineConfig} from '@pandacss/dev';
import {preset} from './preset';

export default defineConfig({
  preflight: true,
  presets: ['@pandacss/preset-base', preset],
  include: ['./src/**/*.{ts,tsx}'],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        fonts: {
          sans: {
            value: 'var(--font-sans)',
          },
        },
      },
    },
  },
  jsxFramework: 'react',
  outdir: 'styled-system',
});
