export function isObject<T extends Record<string, any> = Record<string, any>>(
	value: unknown,
): value is T {
	return Object.prototype.toString.call(value) === '[object Object]' && Object(value) === value;
}
