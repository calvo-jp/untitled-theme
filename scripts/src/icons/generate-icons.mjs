#!/usr/bin/env node

import * as p from '@clack/prompts';
import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';
import {generate_icons_react} from './generate-icons-react.mjs';
import {generate_icons_svelte} from './generate-icons-svelte.mjs';

const REACT = 'react';
const SVELTE = 'svelte';

async function generate_icons() {
	const argv = await yargs(hideBin(process.argv))
		.option('framework', {
			type: 'array',
			alias: 'f',
			choices: [REACT, SVELTE],
		})
		.parseAsync();

	p.intro('Generate icons');

	const selectedFrameworks = argv.framework?.length
		? argv.framework
		: await p.multiselect({
				message: 'Select frameworks:',
				options: [
					{
						label: 'React',
						value: REACT,
					},
					{
						label: 'Svelte',
						value: SVELTE,
					},
				],
				required: true,
				initialValues: argv.framework ?? [],
			});

	if (p.isCancel(selectedFrameworks)) {
		p.cancel('Cancelled');
		process.exit(0);
	}

	/**
	 * @type {Promise<void>[]}
	 */
	const promises = [];
	const spinner = p.spinner();

	spinner.start('Generating icons');

	if (selectedFrameworks.includes(REACT)) promises.push(generate_icons_react());
	if (selectedFrameworks.includes(SVELTE)) promises.push(generate_icons_svelte());

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
