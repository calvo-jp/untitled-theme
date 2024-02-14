import fs from 'fs/promises';
import path from 'path';

export async function clean_or_create_dir(location: string) {
	try {
		const files = await fs.readdir(location);
		await Promise.all(files.map((file) => fs.unlink(path.join(location, file))));
	} catch {
		await fs.mkdir(location);
	}
}
