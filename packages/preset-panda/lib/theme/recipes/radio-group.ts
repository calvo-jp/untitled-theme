import {radioGroupAnatomy} from '@ark-ui/anatomy';
import {defineSlotRecipe} from '@pandacss/dev';

export const radioGroup = defineSlotRecipe({
	slots: radioGroupAnatomy.keys(),
	className: 'radioGroup',
});
