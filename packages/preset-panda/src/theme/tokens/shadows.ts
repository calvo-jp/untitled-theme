import {defineTokens} from '@pandacss/dev';

export const shadows = defineTokens.shadows({
  xs: {value: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)'},
  sm: {value: '0px 1px 3px 0px rgba(16, 24, 40, 0.1)'},
  md: {value: '0px 4px 8px -2px rgba(16, 24, 40, 0.1)'},
  lg: {value: '0px 12px 16px -4px rgba(16, 24, 40, 0.08)'},
  xl: {value: '0px 20px 24px -4px rgba(16, 24, 40, 0.08)'},
  '2xl': {value: '0px 24px 48px -12px rgba(16, 24, 40, 0.18)'},
  '3xl': {value: '0px 32px 64px -12px rgba(16, 24, 40, 0.14)'},
});
