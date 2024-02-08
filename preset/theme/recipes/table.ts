import {createAnatomy} from '@ark-ui/anatomy';
import {defineSlotRecipe} from '@pandacss/dev';

const tableAnatomy = createAnatomy('table');

export const table = defineSlotRecipe({
  slots: tableAnatomy.keys(),
  className: 'table',
});
