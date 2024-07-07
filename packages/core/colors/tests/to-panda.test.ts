import {expect, test} from 'vitest';
import {toPanda} from '../src/panda/utils.js';

test('Converts original colors shape to panda compatible', () => {
	expect(
		toPanda({
			red: '',
			blue: {
				dark: '',
				light: '',
			},
		}),
	).toEqual({
		red: {value: ''},
		blue: {
			dark: {value: ''},
			light: {value: ''},
		},
	});
});
