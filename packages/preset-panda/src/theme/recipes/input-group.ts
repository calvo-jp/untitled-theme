import {createAnatomy} from '@ark-ui/anatomy';
import {defineSlotRecipe} from '@pandacss/dev';

const inputGroupAnatomy = createAnatomy('inputGroup', [
  'root',
  'leftAddon',
  'rightAddon',
  'leftElement',
  'rightElement',
]);

export const inputGroup = defineSlotRecipe({
  slots: inputGroupAnatomy.keys(),
  className: 'inputGroup',
});
