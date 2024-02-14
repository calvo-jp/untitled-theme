export function dash_to_pascal(subject: string) {
	return subject
		.split(/-/g)
		.map((word) => word[0].toUpperCase() + word.substring(1))
		.join('');
}
