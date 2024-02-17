import {createAnatomy} from '@ark-ui/anatomy';
import {defineSlotRecipe} from '@pandacss/dev';

const badgeAnatomy = createAnatomy('badge', ['root', 'label', 'indicator']);

// ref: https://www.figma.com/file/5OtZ9gq2jAPCYkmVI2Dd8e/%E2%9D%96-PREVIEW-%E2%9D%96-Untitled-UI-%E2%80%93-PRO-VARIABLES-(v4.0)?type=design&node-id=1046-3819&mode=design&t=Ov2eP4J6MJmSJxEi-0
export const badge = defineSlotRecipe({
	slots: badgeAnatomy.keys(),
	className: 'badge',
});
