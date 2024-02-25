import {createLruCache} from './lru-cache.mjs';

/** @type {import('./lru-cache.mjs').LruCache<string, string>} */
const cache = createLruCache(1000);

/**
 * @param {string} subject
 */
export function dash_to_pascal(subject) {
	let d = cache.get(subject);

	if (d) return d;

	d = subject
		.split(/-/g)
		.map((word) => word[0].toUpperCase() + word.substring(1))
		.join('');

	cache.set(subject, d);

	return d;
}
