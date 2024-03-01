import prettier from '@prettier/sync';
import path from 'node:path';

/** @type {import('prettier').Options | null} */
let config = null;

function get_config() {
  if (config) return config;

  const c = prettier.resolveConfig(path.join(process.cwd(), '.prettierrc'));
  config = c;
  return c;
}

/**
 * @param {string} content
 */
export function format_html(content) {
  return prettier.format(content, {...get_config(), parser: 'html'});
}

/**
 * @param {string} content
 */
export function format_ts(content) {
  return prettier.format(content, {...get_config(), parser: 'typescript'});
}

/**
 * @param {string} content
 */
export function format_json(content) {
  return prettier.format(content, {...get_config(), parser: 'json'});
}
