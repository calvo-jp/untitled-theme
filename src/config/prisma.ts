import {Prisma, PrismaClient} from '@prisma/client';

function createClient() {
	return new PrismaClient().$extends({
		model: {
			$allModels: {
				async exists<T>(this: T, where: Prisma.Args<T, 'findFirst'>['where']) {
					const context = Prisma.getExtensionContext(this) as any;
					const result = await context.findFirst({where});
					return result !== null;
				},
			},
		},
	});
}

/* prettier-ignore */
const $global = globalThis as unknown as {prisma: ReturnType<typeof createClient>;};
const $prisma = $global.prisma ?? createClient();

const $debug = process.env.NODE_ENV === 'development';

if ($debug) $global.prisma = $prisma;

export const prisma = $prisma;
