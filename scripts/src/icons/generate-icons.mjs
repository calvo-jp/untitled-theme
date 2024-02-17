// @ts-check

import * as p from '@clack/prompts';
import {generate_icons_react} from './generate-icons-react.mjs';
import {generate_icons_svelte} from './generate-icons-svelte.mjs';

async function generate_icons() {
	const spinner = p.spinner();

	const frameworks = await p.multiselect({
		message: 'Select frameworks to generate icons for:',
		options: [
			{value: 'react', label: 'React'},
			{value: 'svelte', label: 'Svelte'},
		],
		required: true,
	});

	spinner.start('Generating icons');

	/**
	 * @type {Promise<void>[]}
	 */
	const promises = [];

	if (Array.isArray(frameworks)) {
		if (frameworks.includes('react')) promises.push(generate_icons_react());
		if (frameworks.includes('svelte')) promises.push(generate_icons_svelte());
	}

	try {
		await Promise.all(promises);
	} catch {
		spinner.message('Something went wrong generating icons');
	} finally {
		spinner.stop('Done');
	}
}

await generate_icons();
