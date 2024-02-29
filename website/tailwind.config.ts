import colors from '@untitled-theme/colors';
import type {Config} from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors,
    fontFamily: {
      sans: ['var(--font-geist-sans)', ...defaultTheme.fontFamily.sans],
      mono: ['var(--font-geist-mono)', ...defaultTheme.fontFamily.mono],
    },
    zIndex: {
      hide: '-1',
      auto: 'auto',
      base: '0',
      docked: '10',
      dropdown: '1000',
      sticky: '1100',
      banner: '1200',
      overlay: '1300',
      modal: '1400',
      popover: '1500',
      skipLink: '1600',
      toast: '1700',
      tooltip: '1800',
    },
    extend: {
      data: {
        open: 'state="open"',
        closed: 'state="closed"',
        selected: 'selected',
        highlighted: 'highlighted',
      },
      keyframes: {
        'fade-in': {
          from: {opacity: '0'},
          to: {opacity: '1'},
        },
        'fade-out': {
          from: {opacity: '1'},
          to: {opacity: '0'},
        },
        'slide-up': {
          from: {transform: 'translateY(100%)'},
          to: {transform: 'translateY(0%)'},
        },
        'slide-down': {
          from: {transform: 'translateY(0%)'},
          to: {transform: 'translateY(100%)'},
        },
        'scalefade-in': {
          from: {transform: 'scale(0.5)', opacity: '0'},
          to: {transform: 'scale(1)', opacity: '1'},
        },
        'scalefade-out': {
          from: {transform: 'scale(1)', opacity: '1'},
          to: {transform: 'scale(0.5)', opacity: '0'},
        },
      },
      animation: {
        'slide-up': 'slide-up 250ms ease-in-out',
        'slide-down': 'slide-down 250ms ease-in-out',
        'fade-in': 'fade-in 250ms ease-in-out',
        'fade-out': 'fade-out 250ms ease-in-out',
        'scale-in': 'scale-in 250ms ease-in-out',
        'scale-out': 'scale-in 250ms ease-in-out',
        'scalefade-in': 'scalefade-in 250ms ease-in-out',
        'scalefade-out': 'scalefade-out 250ms ease-in-out',
      },
    },
  },
  plugins: [
    plugin(({addUtilities, theme}) => {
      addUtilities({
        '.shadow-outline': {
          transitionProperty: 'border-color, box-shadow',
          transitionDuration: '200ms',
          transitionTimingFunction: 'cubic-bezier(0.2, 0, 0, 1)',

          '&:focus-visible': {
            'box-shadow': '0 0 0 1px black',
            'border-color': 'black',
          },
        },
      });
    }),
  ],
};

export default config;
