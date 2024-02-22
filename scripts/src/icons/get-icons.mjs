// @ts-check

import fs from 'node:fs/promises';
import path from 'node:path';
import {get_workspace_root} from './get-workspace-root.mjs';

/**
 * @typedef {Object} Icon
 * @property {string} fullpath
 * @property {string} basename
 * @property {string} filename
 * @property {string} extension
 * @property {string} content
 */

const assets_dir = path.join(get_workspace_root(), 'assets/icons');

/**
 * @returns {Promise<Icon[]>}
 */
export async function get_icons() {
	const filenames = await fs.readdir(assets_dir, {encoding: 'utf-8'});

	return Promise.all(
		filenames
			.filter((filename) => filename.endsWith('svg'))
			.map(async (filename) => {
				const details = path.parse(filename);
				const fullpath = path.join(assets_dir, filename);
				const content = await fs.readFile(fullpath, {encoding: 'utf-8'});

				return {
					content,
					fullpath,
					basename: details.base,
					filename: details.name,
					extension: details.ext,
				};
			}),
	);
}
