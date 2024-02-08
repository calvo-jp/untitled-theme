import {defineRecipe} from '@pandacss/dev';

export const button = defineRecipe({
  className: 'button',
  base: {
    outline: 'none',
    cursor: 'pointer',
    rounded: '0.5rem',
    fontWeight: 'semibold',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transitionDuration: 'normal',
    transitionProperty: 'background, border-color, color, box-shadow',
    _disabled: {
      cursor: 'not-allowed',
      opacity: '0.5',
    },
  },
  variants: {
    variant: {
      solid: {
        colorPalette: 'brand',
        bg: 'colorPalette.600',
        color: 'white',
        _hover: {
          bg: 'colorPalette.700',
        },
        _focus: {
          boxShadow: '0 0 0 3px var(--shadow-color)',
          boxShadowColor: 'colorPalette.500/25',
        },
      },
      outline: {
        colorPalette: 'gray.dark',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'colorPalette.300',
        color: 'colorPalette.700',
        _hover: {
          bg: 'colorPalette.50',
          color: 'colorPalette.700',
        },
        _focus: {
          boxShadow: '0 0 0 3px var(--shadow-color)',
          boxShadowColor: 'colorPalette.900/5',
        },
      },
      ghost: {
        colorPalette: 'brand',
        color: 'colorPalette.700',
        _hover: {
          bg: 'colorPalette.50',
          color: 'colorPalette.800',
        },
      },
    },
    size: {
      sm: {
        h: '2.25rem',
        px: '0.75rem',
        gap: '0.25rem',
        fontSize: 'sm',
      },
      md: {
        h: '2.5rem',
        px: '0.875rem',
        gap: '0.25rem',
        fontSize: 'sm',
      },
      lg: {
        h: '2.75rem',
        px: '1rem',
        gap: '0.375rem',
        fontSize: 'md',
      },
      xl: {
        h: '3rem',
        px: '1.125rem',
        gap: '0.375rem',
        fontSize: 'md',
      },
      '2xl': {
        h: '3.75rem',
        px: '1.375rem',
        gap: '0.625rem',
        fontSize: 'lg',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'solid',
  },
});
