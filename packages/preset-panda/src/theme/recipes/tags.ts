import {createAnatomy} from '@ark-ui/anatomy';
import {defineSlotRecipe} from '@pandacss/dev';

const tagsAnatomy = createAnatomy('tags', ['root', 'label', 'closeButton']);

export const tags = defineSlotRecipe({
	slots: tagsAnatomy.keys(),
	className: 'tags',
});
