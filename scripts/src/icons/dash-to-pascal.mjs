// @ts-check

/**
 * @param {string} subject
 */
export function dash_to_pascal(subject) {
	return subject
		.split(/-/g)
		.map((word) => word[0].toUpperCase() + word.substring(1))
		.join('');
}
