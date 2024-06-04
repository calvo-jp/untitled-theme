import {defineConfig} from '@pandacss/dev';
import colors from '@untitled-theme/colors/panda';

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{ts,tsx}'],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors,
        fonts: {
          sans: {value: 'var(--font-sans)'},
          mono: {value: 'var(--font-mono)'},
        },
        zIndex: {
          hide: {value: '-1'},
          auto: {value: 'auto'},
          base: {value: '0'},
          docked: {value: '10'},
          dropdown: {value: '1000'},
          sticky: {value: '1100'},
          banner: {value: '1200'},
          overlay: {value: '1300'},
          modal: {value: '1400'},
          popover: {value: '1500'},
          skipLink: {value: '1600'},
          toast: {value: '1700'},
          tooltip: {value: '1800'},
        },
      },
    },
  },
  clean: true,
  outdir: 'styled-system',
  jsxFramework: 'react',
  conditions: {
    extend: {
      light: '[data-theme=light] &',
      dark: '[data-theme=dark] &',
    },
  },
});
