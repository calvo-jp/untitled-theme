import {pinInputAnatomy} from '@ark-ui/anatomy';
import {defineSlotRecipe} from '@pandacss/dev';

export const pinInput = defineSlotRecipe({
	slots: pinInputAnatomy.keys(),
	className: 'pinInput',
});
