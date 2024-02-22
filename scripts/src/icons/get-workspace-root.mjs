// @ts-check

import path from 'node:path';

export function get_workspace_root() {
	return path.resolve(process.cwd(), '..');
}
