// @ts-check

import fs from 'fs/promises';

/**
 * @param {string} location
 */
export async function create_clean_dir(location) {
	await fs.rm(location, {force: true, recursive: true});
	await fs.mkdir(location, {recursive: true});
}
