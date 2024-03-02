#!/usr/bin/env node

import * as p from '@clack/prompts';
import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';
import {generate_icons_react} from './generate-icons-react.mjs';
import {generate_icons_solid} from './generate-icons-solid.mjs';
import {generate_icons_svelte} from './generate-icons-svelte.mjs';

const REACT = 'react';
const SVELTE = 'svelte';
const SOLID = 'solid';

async function generate_icons() {
  const argv = yargs(hideBin(process.argv))
    .option('framework', {
      type: 'array',
      alias: 'f',
      choices: [REACT, SVELTE, SOLID],
    })
    .parseSync();

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

  try {
    if (selectedFrameworks.includes(REACT)) generate_icons_react();
    if (selectedFrameworks.includes(SVELTE)) generate_icons_svelte();
    if (selectedFrameworks.includes(SOLID)) generate_icons_solid();
  } catch {
    spinner.message('Something went wrong');
  } finally {
    spinner.stop('Icons generated');
    p.outro('Goodbye!');
  }
}

generate_icons();
