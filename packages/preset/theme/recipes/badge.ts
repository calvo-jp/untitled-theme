import {createAnatomy} from '@ark-ui/anatomy';
import {defineSlotRecipe} from '@pandacss/dev';

const badgeAnatomy = createAnatomy('badge', ['root', 'label', 'indicator']);

export const badge = defineSlotRecipe({
  slots: badgeAnatomy.keys(),
  className: 'badge',
});
