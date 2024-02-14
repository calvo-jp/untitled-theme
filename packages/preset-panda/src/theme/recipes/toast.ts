import {toastAnatomy} from '@ark-ui/anatomy';
import {defineSlotRecipe} from '@pandacss/dev';

export const toast = defineSlotRecipe({
  slots: toastAnatomy.keys(),
  className: 'toast',
});
