import {accordionAnatomy} from '@ark-ui/anatomy';
import {defineSlotRecipe} from '@pandacss/dev';

export const accordion = defineSlotRecipe({
	slots: accordionAnatomy.keys(),
	className: 'accordion',
});
