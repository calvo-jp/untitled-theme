import {numberInputAnatomy} from '@ark-ui/anatomy';
import {defineSlotRecipe} from '@pandacss/dev';

export const numberInput = defineSlotRecipe({
  slots: numberInputAnatomy.keys(),
  className: 'numberInput',
});
