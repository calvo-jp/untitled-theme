import {ratingGroupAnatomy} from '@ark-ui/anatomy';
import {defineSlotRecipe} from '@pandacss/dev';

export const ratingGroup = defineSlotRecipe({
  slots: ratingGroupAnatomy.keys(),
  className: 'ratingGroup',
});
