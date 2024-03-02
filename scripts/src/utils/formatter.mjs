import path from 'node:path';
import prettier from 'prettier';
import {get_workspace_root} from './get-workspace-root.mjs';

/** @type {import('prettier').Options | null} */
let previously_loaded_config = null;

async function get_config() {
  if (previously_loaded_config) return previously_loaded_config;

  const config = await prettier.resolveConfig(path.join(get_workspace_root(), '.pretterrc'));

  previously_loaded_config = config;

  return config;
}

/**
 * @param {string} code
 */
export async function format_typescript(code) {
  return await prettier.format(code, {...(await get_config()), parser: 'typescript'});
}

/**
 * @param {string} code
 */
export async function format_html(code) {
  return await prettier.format(code, {...(await get_config()), parser: 'html'});
}

/**
 * @param {string} code
 */
export async function format_json(code) {
  return await prettier.format(code, {...(await get_config()), parser: 'json'});
}
