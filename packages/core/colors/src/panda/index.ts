import originalColors from '../index.js';
import {toPanda} from './utils.js';

/**
 * @example
 * ```ts
 * // panda.config.js
 * import colors from '@untitled-theme/colors/panda';
 * import {defineConfig} from '@pandacss/dev';
 *
 * export default defineConfig({
 *  theme: {
 *    extend: {
 *      tokens: {
 *        colors,
 *      },
 *    },
 *  },
 * });
 * ```
 */
const colors = toPanda(originalColors);

export default colors;
