vi.mock(
	'node:fs/promises',
	async (importOriginal): Promise<typeof import('node:fs/promises')> => {
		const original = await importOriginal<typeof import('node:fs/promises')>();

		return {
			...original,
		};
	},
);

vi.mock(
	'node:path',
	async (importOriginal): Promise<typeof import('node:path')> => {
		const original = await importOriginal<typeof import('node:path')>();

		return {
			...original,
		};
	},
);

vi.mock(
	'node:buffer',
	async (importOriginal): Promise<typeof import('node:buffer')> => {
		const original = await importOriginal<typeof import('node:buffer')>();

		return {
			...original,
		};
	},
);

vi.mock('svgo', async (): Promise<typeof import('svgo')> => {
	return {
		optimize: vi.fn().mockImplementation((input) => input),
		loadConfig: vi.fn().mockResolvedValue({}),
	};
});
