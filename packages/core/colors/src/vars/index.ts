import originalColors from '../index.js';
import {toVars} from './utils.js';

/**
 * @example
 * ```jsx
 * // layout.jsx
 * import colors from '@untitled-theme/colors/vars';
 *
 * export default function RootLayout({ children }) {
 *  return (
 *    <html style={colors}>
 *      <body>{children}</body>
 *    </html>
 *  );
 * }
 * ```
 */
const colors = toVars(originalColors);

export default colors;
