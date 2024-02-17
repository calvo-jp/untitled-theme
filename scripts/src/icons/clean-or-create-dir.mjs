// @ts-check

import fs from 'fs/promises';
import path from 'path';

/**
 * @param {string} location
 */
export async function clean_or_create_dir(location) {
	try {
		const files = await fs.readdir(location);
		await Promise.allSettled(files.map((file) => fs.unlink(path.join(location, file))));
	} catch {
		await fs.mkdir(location);
	}
}
