#!/usr/bin/env node
import * as p from '@clack/prompts';
import fs from 'node:fs/promises';
import path from 'node:path';
import {getWorkspaceRoot} from '../utils/get-workspace-root.js';
import {generateColorsCore} from './generate-colors-core.js';
import {generateColorsPanda} from './generate-colors-panda.js';
import {generateColorsVanilla} from './generate-colors-vanilla.js';
import {generateColorsVars} from './generate-colors-vars.js';

const outdir = path.join(getWorkspaceRoot(), 'packages/core/colors/src');

async function generateColors() {
	const spinner = p.spinner();

	spinner.start('Generating colors...');

	await fs.rm(outdir, {force: true, recursive: true});
	await fs.mkdir(outdir, {recursive: true});

	await Promise.all([
		generateColorsCore(),
		generateColorsPanda(),
		generateColorsVars(),
		generateColorsVanilla(),
	]);

	spinner.stop('Colors generated!');
}

generateColors();
