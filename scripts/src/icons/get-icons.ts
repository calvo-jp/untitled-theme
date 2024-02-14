import fs from 'fs';
import path from 'path';
import {workspace_root} from './workspace-root';

export interface Icon {
	/**
	 * @example "C://johndoe/documents/hello-world-app/index.html"
	 */
	fullpath: string;
	/**
	 * @example "index.html"
	 */
	basename: string;
	/**
	 * @example "index"
	 */
	filename: string;
	/**
	 * @example ".html"
	 */
	extension: string;
	content: string;
}

const assets_dir = path.join(workspace_root, 'assets/icons');

export function get_icons() {
	return fs
		.readdirSync(assets_dir, {encoding: 'utf-8'})
		.filter((filename) => filename.endsWith('svg'))
		.map<Icon>((filename) => {
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
