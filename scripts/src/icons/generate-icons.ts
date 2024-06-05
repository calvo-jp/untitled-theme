#!/usr/bin/env node
import * as p from '@clack/prompts';
import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';
import {generateIconsReact} from './generate-icons-react.js';
import {generateIconsSolid} from './generate-icons-solid.js';
import {generateIconsSvelte} from './generate-icons-svelte.js';

const REACT = 'react';
const SVELTE = 'svelte';
const SOLID = 'solid';

async function generateIcons() {
	const argv = await yargs(hideBin(process.argv))
		.option('framework', {
			type: 'array',
			alias: 'f',
			choices: [REACT, SVELTE, SOLID],
		})
		.parse();

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
					{
						label: 'Solid',
						value: SOLID,
					},
				],
				required: true,
				initialValues: argv.framework ?? [],
			});

	if (p.isCancel(selectedFrameworks)) {
		p.cancel('Cancelled');
		process.exit(0);
	}

	const spinner = p.spinner();
	spinner.start('Generating icons');

	const promises: Promise<void>[] = [];

	try {
		if (selectedFrameworks.includes(REACT)) promises.push(generateIconsReact());
		if (selectedFrameworks.includes(SVELTE)) promises.push(generateIconsSvelte());
		if (selectedFrameworks.includes(SOLID)) promises.push(generateIconsSolid());

		await Promise.all(promises);
	} catch {
		spinner.message('Something went wrong');
	} finally {
		spinner.stop('Icons generated');
		p.outro('Goodbye!');
	}
}

generateIcons();
