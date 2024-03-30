import path from 'node:path';

let workspaceRoot: string | null = null;

export function getWorkspaceRoot() {
  if (workspaceRoot) return workspaceRoot;

  const w = path.resolve(process.cwd(), '..');
  workspaceRoot = w;
  return w;
}
