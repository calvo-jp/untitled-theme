import fs from 'node:fs/promises';
import path from 'node:path';
import {formatTypescript} from '../utils/formatter.js';

interface Module {
	as?: string;
	name: 'default' | (string & {});
	type?: boolean;
}

export type BarrelItem =
	| {
			path: string;
			type?: boolean;
			modules: (string | Module)[];
			exportAll?: false;
	  }
	| {
			path: string;
			type?: boolean;
			modules?: never;
			exportAll: true;
	  };

export async function createBarrelFile(directory: string, content: BarrelItem[]) {
	const code = content
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

	await fs.writeFile(path.join(directory, 'index.ts'), await formatTypescript(code), 'utf-8');
}

function typeOnly(guard?: boolean) {
	return guard ? 'type' : '';
}
