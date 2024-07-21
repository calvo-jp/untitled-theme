function isObject(value: unknown): value is Record<string, any> {
	return Object.prototype.toString.call(value) === '[object Object]' && Object(value) === value;
}

export function flatten(subject: Record<string, unknown>) {
	const result: {
		keys: string[];
		value: any;
	}[] = [];

	function fn(obj: Record<string, unknown>, previousKeys: string[] = []) {
		for (const currentKey in obj) {
			const value = obj[currentKey];

			if (isObject(value)) {
				fn(value, [...previousKeys, currentKey]);
			} else {
				result.push({
					keys: [...previousKeys, currentKey],
					value,
				});
			}
		}
	}

	fn(subject);

	return result;
}

export function unflatten(subject: {keys: string[]; value: any}[]) {
	const result: Record<string, any> = {};

	subject.forEach((item) => {
		const keys = [...item.keys];
		const value = item.value;

		let current = result;

		const lastKey = keys.pop() as string;

		for (const key of keys) {
			if (!current[key]) {
				current[key] = {};
			}

			current = current[key];
		}

		current[lastKey] = value;
	});

	return result;
}
