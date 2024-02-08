import {createAnatomy} from '@ark-ui/anatomy';
import {defineSlotRecipe} from '@pandacss/dev';

const breadcrumbsAnatomy = createAnatomy('breadcrumbs');

export const breadcrumbs = defineSlotRecipe({
  slots: breadcrumbsAnatomy.keys(),
  className: 'breadcrumbs',
});
