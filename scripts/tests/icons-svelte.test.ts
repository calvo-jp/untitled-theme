import {generateIconsSvelte} from '../src/icons/generate-icons-svelte.js';

describe('Svelte Icons Generator', () => {
	it('generates svelte icons', async () => {
		await generateIconsSvelte();
	});
});

function isValidSvelteComponent(content: string) {}
