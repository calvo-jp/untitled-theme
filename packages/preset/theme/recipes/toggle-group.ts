import {toggleGroupAnatomy} from '@ark-ui/anatomy';
import {defineSlotRecipe} from '@pandacss/dev';

export const toggleGroup = defineSlotRecipe({
  slots: toggleGroupAnatomy.keys(),
  className: 'toggleGroup',
});
