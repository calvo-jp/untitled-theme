/**
 * @template Key, Value
 * @typedef {Object} LruCache
 * @property {function(Key): Value | undefined} get
 * @property {function(Key, Value): void} set
 */

/**
 * @template Key, Value
 * @param {number} max_cache_size
 * @returns {LruCache<Key, Value>}

 */
export function create_lru_cache(max_cache_size) {
  if (max_cache_size < 1) {
    return {
      get: () => undefined,
      set: () => {},
    };
  }

  let cache_size = 0;
  /**
   * @type {Map<Key, Value>}
   */
  let cache = new Map();
  /**
   * @type {Map<Key, Value>}
   */
  let previous_cache = new Map();

  /**
   *
   * @param {Key} key
   * @param {Value} value
   */
  function update(key, value) {
    cache.set(key, value);
    cache_size++;

    if (cache_size > max_cache_size) {
      cache_size = 0;
      previous_cache = cache;
      cache = new Map();
    }
  }

  return {
    get(key) {
      let value = cache.get(key);

      if (value !== undefined) {
        return value;
      }
      if ((value = previous_cache.get(key)) !== undefined) {
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
