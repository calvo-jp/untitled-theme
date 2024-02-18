// @ts-check

import fs from 'fs/promises';

/**
 * @param {string} location
 */
export async function clean_or_create_dir(location) {
	try {
		await fs.rm(location, {
			force: true,
			recursive: true,
		});
	} catch {
		//
	} finally {
		await fs.mkdir(location);
	}
}
