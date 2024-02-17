// @ts-check

import fs from 'fs';
import path from 'path';
import {workspace_root} from './workspace-root.mjs';

/**
 * @typedef {Object} Icon
 * @property {string} fullpath
 * @property {string} basename
 * @property {string} filename
 * @property {string} extension
 * @property {string} content
 */

const assets_dir = path.join(workspace_root, 'assets/icons');

/**
 * @returns {Icon[]}
 */
export function get_icons() {
	return fs
		.readdirSync(assets_dir, {encoding: 'utf-8'})
		.filter((filename) => filename.endsWith('svg'))
		.map((filename) => {
			const details = path.parse(filename);
			const fullpath = path.join(assets_dir, filename);
			const content = fs.readFileSync(fullpath, {encoding: 'utf-8'});

			return {
				content,
				fullpath,
				basename: details.base,
				filename: details.name,
				extension: details.ext,
			};
		});
}
