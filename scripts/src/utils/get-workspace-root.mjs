import path from 'path';

/** @type {string|null} */
let workspace_root = null;

export function get_workspace_root() {
  if (workspace_root) return workspace_root;

  const w = path.resolve(process.cwd(), '..');
  workspace_root = w;
  return w;
}
