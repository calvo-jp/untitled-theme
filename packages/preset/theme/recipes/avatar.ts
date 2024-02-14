import {avatarAnatomy} from '@ark-ui/anatomy';
import {defineSlotRecipe} from '@pandacss/dev';

export const avatar = defineSlotRecipe({
  slots: avatarAnatomy.keys(),
  className: 'avatar',
});
