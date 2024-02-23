import {defineGlobalStyles} from '@pandacss/dev';

export const globalCss = defineGlobalStyles({
	html: {
		lineHeight: 1.5,
		MozOsxFontSmoothing: 'grayscale',
		textRendering: 'optimizeLegibility',
		WebkitFontSmoothing: 'antialiased',
		WebkitTextSizeAdjust: '100%',
		scrollBehavior: 'smooth',
	},
	body: {
		bg: 'white',
		color: 'gray.light.800',
	},
	'*, *::before, *::after': {
		borderColor: 'gray.light.300',
		borderStyle: 'solid',
		boxSizing: 'border-box',
	},
	'*::placeholder': {
		opacity: 1,
		color: 'gray.light.500',
	},
});
