import {generateIconsReact} from '../src/icons/generate-icons-react.js';

describe('React Icons Generator', () => {
	it('generates react icons', async () => {
		await generateIconsReact();
	});
});

function isValidReactComponent(content: string) {}
