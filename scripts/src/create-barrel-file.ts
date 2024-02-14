import fs from 'fs/promises';
import path from 'path';
import {format_ts} from './format-ts';

export type BarrelItem =
	| {
			path: string;
			type?: boolean;
			modules:
				| string[]
				| Array<{
						as?: string;
						name: string;
						type?: boolean;
				  }>;
			exportAll?: false;
	  }
	| {
			path: string;
			type?: boolean;
			modules?: never;
			exportAll: true;
	  };

export async function create_barrel_file(directory: string, content: BarrelItem[]) {
	const c = content
		.map((item) => {
			if (item.exportAll) return `export ${typeOnly(item.type)} * from '${item.path}';`;

			const m = item.modules
				.map((mod) => {
					return typeof mod === 'string'
						? `${typeOnly(item.type)} ${mod}`
						: mod.as
						  ? `${typeOnly(mod.type)} ${mod.name} as ${mod.as}`
						  : `${typeOnly(mod.type)} ${mod.name}`;
				})
				.join();

			return `export ${typeOnly(item.type)} {${m}} from '${item.path}';`;
		})
		.join('\n');

	await fs.writeFile(path.join(directory, 'index.ts'), await format_ts(c), {encoding: 'utf-8'});
}

function typeOnly(guard?: boolean) {
	return guard ? 'type' : '';
}
