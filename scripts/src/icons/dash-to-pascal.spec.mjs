// @ts-check

import {describe, expect, it} from 'vitest';
import {dash_to_pascal} from './dash-to-pascal.mjs';

describe('dash_to_pascal', () => {
	it('converts a dash cased string to pascal case', () => {
		expect(dash_to_pascal('dash-to-pascal')).toBe('DashToPascal');
	});
});
