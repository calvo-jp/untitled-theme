import fs from 'fs/promises';
import path from 'path';
import {format_ts} from './format-ts';

export type BarrelItem = {
	path: string;
	type?: boolean;
} & (
	| {
			modules: string[] | {as?: string; name: string; type?: boolean}[];
			exportAll?: false;
	  }
	| {
			modules?: never;
			exportAll: true;
	  }
);

export async function create_barrel_file(directory: string, content: BarrelItem[]) {
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

function typeOnly(guard?: boolean) {
	return guard ? 'type' : '';
}
