import colors from '@untitled-theme/colors';
import type {Config} from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors,
    fontFamily: {
      sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
      mono: ['var(--font-mono)', ...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [],
};

export default config;
