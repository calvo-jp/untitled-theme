import {createAnatomy} from '@ark-ui/anatomy';
import {defineSlotRecipe} from '@pandacss/dev';

const stepperAnatomy = createAnatomy('stepper', [
  'root',
  'step',
  'title',
  'description',
  'indicator',
  'separator',
  'icon',
  'number',
]);

export const stepper = defineSlotRecipe({
  slots: stepperAnatomy.keys(),
  className: 'stepper',
});
