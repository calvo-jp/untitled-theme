// @ts-check

import spinners from 'cli-spinners';
import ora from 'ora';
import {generate_icons_react} from './generate-icons-react.mjs';
import {generate_icons_svelte} from './generate-icons-svelte.mjs';

const spinner = ora(spinners.dots);

// TODO: allow to specify which icons to generate using @clack/prompt

async function generate_icons() {
	try {
		spinner.start('Generating icons...');
		await Promise.allSettled([generate_icons_react(), generate_icons_svelte()]);
		spinner.succeed('Icons generated');
	} catch (error) {
		spinner.fail('Error generating icons');
	} finally {
		spinner.stop();
	}
}

generate_icons();
