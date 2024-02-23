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

// ref: https://www.figma.com/file/5OtZ9gq2jAPCYkmVI2Dd8e/%E2%9D%96-PREVIEW-%E2%9D%96-Untitled-UI-%E2%80%93-PRO-VARIABLES-(v4.0)?type=design&node-id=214-0&mode=design&t=Ov2eP4J6MJmSJxEi-0
export const table = defineSlotRecipe({
	slots: tableAnatomy.keys(),
	className: 'table',
});
