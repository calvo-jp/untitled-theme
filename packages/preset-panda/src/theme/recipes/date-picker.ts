import {datePickerAnatomy} from '@ark-ui/anatomy';
import {defineSlotRecipe} from '@pandacss/dev';

export const datePicker = defineSlotRecipe({
	slots: datePickerAnatomy.keys(),
	className: 'datePicker',
});
