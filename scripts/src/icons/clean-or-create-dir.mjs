// @ts-check

import fs from 'fs/promises';

/**
 * @param {string} location
 */
export async function clean_or_create_dir(location) {
	await fs.rm(location, {force: true, recursive: true});
	await fs.mkdir(location, {recursive: true});
}
