import {createAnatomy} from '@ark-ui/anatomy';
import {defineSlotRecipe} from '@pandacss/dev';

const tableAnatomy = createAnatomy('table', [
  'root',
  'header',
  'body',
  'footer',
  'row',
  'cell',
  'heading',
  'caption',
  'container',
]);

export const table = defineSlotRecipe({
  slots: tableAnatomy.keys(),
  className: 'table',
});
