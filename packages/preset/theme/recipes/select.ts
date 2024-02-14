import {selectAnatomy} from '@ark-ui/anatomy';
import {defineSlotRecipe} from '@pandacss/dev';

export const select = defineSlotRecipe({
  slots: selectAnatomy.keys(),
  className: 'select',
});
