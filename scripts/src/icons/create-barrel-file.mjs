// @ts-check

import fs from 'node:fs/promises';
import path from 'node:path';
import {format_ts} from './format.mjs';

/**
 * @typedef {Object} Module
 * @property {string} [as]
 * @property {'default' | (string & {})} name
 * @property {boolean} [type]
 */

/**
 * @typedef {Object} BarrelItem_0
 * @property {string} path
 * @property {boolean} [type]
 * @property {(string|Module)[]} modules
 * @property {false} [exportAll]
 */

/**
 * @typedef {Object} BarrelItem_1
 * @property {string} path
 * @property {boolean} [type]
 * @property {never} [modules]
 * @property {true} exportAll
 */

/**
 * @typedef {(BarrelItem_0|BarrelItem_1)} BarrelItem
 */

/**
 * @param {string} directory
 * @param {BarrelItem[]} content
 */
export async function create_barrel_file(directory, content) {
	const c = content
		.map((o) => {
			if (o.exportAll) return `export ${typeOnly(o.type)} * from '${o.path}';`;

			const m = o.modules
				.map((mod) => {
					return typeof mod === 'string'
						? `${typeOnly(o.type)} ${mod}`
						: mod.as
							? `${typeOnly(mod.type)} ${mod.name} as ${mod.as}`
							: `${typeOnly(mod.type)} ${mod.name}`;
				})
				.join();

			return `export ${typeOnly(o.type)} {${m}} from '${o.path}';`;
		})
		.join('\n');

	await fs.writeFile(path.join(directory, 'index.ts'), await format_ts(c), {encoding: 'utf-8'});
}

/**
 * @param {boolean} [guard]
 */
function typeOnly(guard) {
	return guard ? 'type' : '';
}
