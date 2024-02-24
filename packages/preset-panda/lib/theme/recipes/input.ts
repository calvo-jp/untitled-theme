import {defineRecipe} from '@pandacss/dev';

// ref: https://www.figma.com/file/5OtZ9gq2jAPCYkmVI2Dd8e/%E2%9D%96-PREVIEW-%E2%9D%96-Untitled-UI-%E2%80%93-PRO-VARIABLES-(v4.0)?type=design&node-id=85-1269&mode=design&t=Ov2eP4J6MJmSJxEi-0
export const input = defineRecipe({
	className: 'input',
	base: {
		outline: 'none',
		rounded: '0.5rem',
		display: 'inline-block',
		_placeholder: {
			color: 'gray-light.500',
		},
	},
	variants: {
		variant: {
			outline: {
				colorPalette: 'brand',
				borderWidth: '1px',
				borderStyle: 'solid',
				borderColor: 'gray-light.300',
				transitionDuration: 'normal',
				transitionProperty: 'border-color, box-shadow',
				_focus: {
					boxShadow: '0 0 0 4px var(--shadow-color)',
					boxShadowColor: 'colorPalette.500/25',
					borderColor: 'colorPalette.300',
				},
				_invalid: {
					borderColor: 'error.300',

					_focus: {
						boxShadow: '0 0 0 4px var(--shadow-color)',
						boxShadowColor: 'error.500/25',
						borderColor: 'error.300',
					},
				},
			},
		},
		size: {
			sm: {
				h: '2.5rem',
				px: '0.875rem',
				gap: '0.25rem',
				fontSize: 'sm',
			},
			md: {
				h: '2.75rem',
				px: '1rem',
				gap: '0.375rem',
				fontSize: 'md',
			},
			lg: {
				h: '3rem',
				px: '1.125rem',
				gap: '0.375rem',
				fontSize: 'lg',
			},
		},
	},
	defaultVariants: {
		size: 'md',
		variant: 'outline',
	},
});
