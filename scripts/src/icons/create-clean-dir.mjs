import fs from 'node:fs';

/**
 * @param {string} location
 */
export function create_clean_dir(location) {
  fs.rmSync(location, {force: true, recursive: true});
  fs.mkdirSync(location, {recursive: true});
}
