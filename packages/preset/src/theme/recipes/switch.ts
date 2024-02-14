import {switchAnatomy} from '@ark-ui/anatomy';
import {defineSlotRecipe} from '@pandacss/dev';

export const switchRecipe = defineSlotRecipe({
  slots: switchAnatomy.keys(),
  className: 'switch',
});
