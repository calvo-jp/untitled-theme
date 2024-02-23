import {defineTokens} from '@pandacss/dev';
import {spacing} from './spacing';

export const sizes = defineTokens.sizes({
	...spacing,

	'1/4': {value: '25%'},
	'1/3': {value: '33.3333333333%'},
	'1/2': {value: '50%'},
	'2/3': {value: '66.6666666667%'},
	'3/4': {value: '75%'},

	full: {value: '100%'},
	min: {value: 'min-content'},
	max: {value: 'max-content'},
	fit: {value: 'fit-content'},
});
