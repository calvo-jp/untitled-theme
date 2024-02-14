import {definePreset} from '@pandacss/dev';
import {conditions} from './conditions';
import {globalCss} from './global-css';
import {theme} from './theme';
import {utilities} from './utilities';

export const preset = definePreset({
  theme,
  conditions,
  globalCss,
  utilities,
});
