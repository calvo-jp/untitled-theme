import {generateIconsSolid} from '../src/icons/generate-icons-solid.js';

describe('Solid Icons Generator', () => {
	it('generates solid icons', async () => {
		await generateIconsSolid();
	});
});

function isValidSolidComponent(content: string) {}
