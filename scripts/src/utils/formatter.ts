import path from 'node:path';
import prettier, {Options} from 'prettier';
import {getWorkspaceRoot} from './get-workspace-root.js';

let previouslyLoadedConfig: Options | null = null;

async function getConfig() {
  if (previouslyLoadedConfig) return previouslyLoadedConfig;

  const config = await prettier.resolveConfig(path.join(getWorkspaceRoot(), '.pretterrc'));

  previouslyLoadedConfig = config;

  return config;
}

export async function formatTypescript(code: string) {
  return await prettier.format(code, {...(await getConfig()), parser: 'typescript'});
}

export async function formatHtml(code: string) {
  return await prettier.format(code, {...(await getConfig()), parser: 'html'});
}

export async function formatJson(code: string) {
  return await prettier.format(code, {...(await getConfig()), parser: 'json'});
}
