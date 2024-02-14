import {popoverAnatomy} from '@ark-ui/anatomy';
import {defineSlotRecipe} from '@pandacss/dev';

export const popover = defineSlotRecipe({
	slots: popoverAnatomy.keys(),
	className: 'popover',
});
