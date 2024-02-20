// @ts-check

import path from 'path';

export function get_workspace_root() {
	return path.resolve(process.cwd(), '..');
}
