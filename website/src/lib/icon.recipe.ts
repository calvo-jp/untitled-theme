import {tv, type VariantProps} from 'tailwind-variants';

export const iconRecipe = tv({
  variants: {
    size: {
      sm: 'size-3',
      md: 'size-4',
      lg: 'size-5',
      xl: 'size-6',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export type IconRecipeProps = VariantProps<typeof iconRecipe>;
