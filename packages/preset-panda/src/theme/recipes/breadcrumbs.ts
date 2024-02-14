import {createAnatomy} from '@ark-ui/anatomy';
import {defineSlotRecipe} from '@pandacss/dev';

const breadcrumbsAnatomy = createAnatomy('breadcrumbs', ['root', 'link', 'item', 'separator']);

export const breadcrumbs = defineSlotRecipe({
	slots: breadcrumbsAnatomy.keys(),
	className: 'breadcrumbs',
});
