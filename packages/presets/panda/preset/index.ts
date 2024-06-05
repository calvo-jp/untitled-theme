import {definePreset} from '@pandacss/dev';
import {conditions} from './conditions';
import {globalCss} from './global-css';
import {recipes, slotRecipes} from './recipes';
import {breakpoints} from './theme/breakpoints';
import {keyframes} from './theme/keyframes';
import {textStyles} from './theme/text-styles';
import {tokens} from './tokens';

export const preset = definePreset({
	theme: {
		extend: {
			breakpoints,
			keyframes,
			recipes,
			slotRecipes,
			textStyles,
			tokens,
		},
	},
	globalCss,
	conditions,
});

export default preset;
