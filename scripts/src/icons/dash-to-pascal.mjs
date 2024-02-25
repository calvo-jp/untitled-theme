import {create_lru_cache} from './create-lru-cache.mjs';

/** @type {import('./create-lru-cache.mjs').LruCache<string, string>} */
const cache = create_lru_cache(1000);

/**
 * @param {string} subject
 */
export function dash_to_pascal(subject) {
	let v = cache.get(subject);

	if (v) return v;

	v = subject
		.split(/-/g)
		.map((word) => word[0].toUpperCase() + word.substring(1))
		.join('');

	cache.set(subject, v);

	return v;
}
