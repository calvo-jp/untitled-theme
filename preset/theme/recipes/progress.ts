import {progressAnatomy} from '@ark-ui/anatomy';
import {defineSlotRecipe} from '@pandacss/dev';

export const progress = defineSlotRecipe({
  slots: progressAnatomy.keys(),
  className: 'progress',
});
