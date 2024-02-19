#!/usr/bin/env node
// @ts-check

import * as p from '@clack/prompts';
import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';
import {generate_icons_react} from './generate-icons-react.mjs';
import {generate_icons_svelte} from './generate-icons-svelte.mjs';

const Framework = {
	React: 'react',
	Svelte: 'svelte',
};

const frameworks = Object.values(Framework);

async function generate_icons() {
	p.intro('Generate icons');

	const argv = await yargs(hideBin(process.argv))
		.option('framework', {
			type: 'array',
			alias: 'f',
			choices: frameworks,
		})
		.parse();

	/** @type {string[]} */
	const initialValues = [];
	const selectedFrameworks = argv.framework?.length
		? argv.framework
		: await p.multiselect({
				message: 'Select frameworks:',
				options: frameworks.map((value) => ({
					value,
					label: value,
				})),
				initialValues,
				required: true,
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

	if (selectedFrameworks.includes(Framework.React)) promises.push(generate_icons_react());
	if (selectedFrameworks.includes(Framework.Svelte)) promises.push(generate_icons_svelte());

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
