/**
 * @template Key, Value
 * @typedef {Object} LruCache
 * @property {function(Key): Value | undefined} get
 * @property {function(Key, Value): void} set
 */

/**
 * @template Key, Value
 * @param {number} maxCacheSize
 * @returns {LruCache<Key, Value>}

 */
export function createLruCache(maxCacheSize) {
	if (maxCacheSize < 1) {
		return {
			get: () => undefined,
			set: () => {},
		};
	}

	let cacheSize = 0;
	/**
	 * @type {Map<Key, Value>}
	 */
	let cache = new Map();
	/**
	 * @type {Map<Key, Value>}
	 */
	let previousCache = new Map();

	/**
	 *
	 * @param {Key} key
	 * @param {Value} value
	 */
	function update(key, value) {
		cache.set(key, value);
		cacheSize++;

		if (cacheSize > maxCacheSize) {
			cacheSize = 0;
			previousCache = cache;
			cache = new Map();
		}
	}

	return {
		get(key) {
			let value = cache.get(key);

			if (value !== undefined) {
				return value;
			}
			if ((value = previousCache.get(key)) !== undefined) {
				update(key, value);
				return value;
			}
		},
		set(key, value) {
			if (cache.has(key)) {
				cache.set(key, value);
			} else {
				update(key, value);
			}
		},
	};
}
