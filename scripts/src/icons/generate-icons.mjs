// @ts-check

import * as p from '@clack/prompts';
import {generate_icons_react} from './generate-icons-react.mjs';
import {generate_icons_svelte} from './generate-icons-svelte.mjs';

async function generate_icons() {
	p.intro('Generate icons');

	const frameworks = await p.multiselect({
		message: 'Select frameworks:',
		options: [
			{
				value: 'react',
				label: 'React',
			},
			{
				value: 'svelte',
				label: 'Svelte',
			},
		],
		required: true,
	});

	if (p.isCancel(frameworks)) {
		p.cancel('Cancelled');
		process.exit(0);
	}

	/**
	 * @type {Promise<void>[]}
	 */
	const promises = [];
	const spinner = p.spinner();

	spinner.start('Generating icons');

	if (frameworks.includes('react')) promises.push(generate_icons_react());
	if (frameworks.includes('svelte')) promises.push(generate_icons_svelte());

	try {
		await Promise.all(promises);
	} catch {
		spinner.message('Something went wrong');
	} finally {
		spinner.stop('Icons generated');
		p.outro('Goodbye!');
	}
}

await generate_icons();
