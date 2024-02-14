import {defineTextStyles} from '@pandacss/dev';

export const textStyles = defineTextStyles({
  text: {
    xs: {value: {fontSize: 'xs', lineHeight: '1.125rem'}},
    sm: {value: {fontSize: 'sm', lineHeight: '1.25rem'}},
    md: {value: {fontSize: 'md', lineHeight: '1.5rem'}},
    lg: {value: {fontSize: 'lg', lineHeight: '1.75rem'}},
    xl: {value: {fontSize: 'xl', lineHeight: '1.875rem'}},
  },
  display: {
    xs: {value: {fontSize: '2xl', lineHeight: '2rem'}},
    sm: {value: {fontSize: '3xl', lineHeight: '2.375rem'}},
    md: {
      value: {
        fontSize: '4xl',
        lineHeight: '2.75rem',
        letterSpacing: '-0.02em',
      },
    },
    lg: {
      value: {
        fontSize: '5xl',
        lineHeight: '3.75rem',
        letterSpacing: '-0.02em',
      },
    },
    xl: {
      value: {
        fontSize: '6xl',
        lineHeight: '4.5rem',
        letterSpacing: '-0.02em',
      },
    },
    '2xl': {
      value: {
        fontSize: '7xl',
        lineHeight: '5.625rem',
        letterSpacing: '-0.02em',
      },
    },
  },
});
