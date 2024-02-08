import {dialogAnatomy} from '@ark-ui/anatomy';
import {defineSlotRecipe} from '@pandacss/dev';

export const dialog = defineSlotRecipe({
  slots: dialogAnatomy.keys(),
  className: 'dialog',
});
