// @ts-check

import fs from 'fs/promises';

/**
 * @param {string} location
 */
export async function create_dir_clean(location) {
	await fs.rm(location, {force: true, recursive: true});
	await fs.mkdir(location, {recursive: true});
}
