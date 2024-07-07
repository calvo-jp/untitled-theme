import {expect, test} from 'vitest';
import {toVars} from '../src/vars/utils.js';

test('Converts original colors shape to css variables compatible', () => {
	expect(
		toVars({
			red: '',
			blue: {
				dark: '',
				light: '',
			},
		}),
	).toEqual({
		'--red': '',
		'--blue-dark': '',
		'--blue-light': '',
	});
});
