'use client';

import {Menu} from '@ark-ui/react';
import {ChevronDownIcon} from '@untitled-theme/icons-react';
import {usePathname, useRouter} from 'next/navigation';

const links = [
	{
		label: 'icons',
		href: '/',
	},
	{
		label: 'colors',
		href: '/colors',
	},
];

export function NavbarLogo() {
	const router = useRouter();
	const pathname = usePathname();

	return (
		<div className="flex items-center gap-2 font-mono">
			<h1 className="font-heading text-gray-800 lg:text-xl dark:text-gray-50">
				UT
			</h1>

			<Menu.Root
				positioning={{
					placement: 'bottom',
				}}
				onSelect={(detail) => {
					router.push(detail.value);
				}}
			>
				<Menu.Trigger className="flex cursor-pointer items-center gap-0.5 rounded bg-neutral-100 px-1.5 py-1 text-sm leading-none tracking-tight text-neutral-600 dark:bg-neutral-800/30 dark:text-neutral-400">
					{pathname.startsWith('/colors') ? 'colors' : 'icons'}

					<Menu.Indicator className="ui-open:rotate-180 transition-transform duration-150">
						<ChevronDownIcon className="size-4" />
					</Menu.Indicator>
				</Menu.Trigger>
				<Menu.Positioner className="z-dropdown">
					<Menu.Content className="ui-open:animate-fade-in ui-closed:animate-fade-out rounded-md border border-neutral-300 bg-white p-2 dark:border-neutral-800 dark:bg-neutral-900">
						{links.map((link) => (
							<Menu.Item
								key={link.href}
								value={link.href}
								className="ui-highlighted:bg-neutral-50 dark:ui-highlighted:bg-neutral-800/25 flex cursor-pointer items-center gap-4 rounded-md px-2 py-1 text-sm"
								onMouseOver={() => router.prefetch(link.href)}
							>
								{link.label}
							</Menu.Item>
						))}
					</Menu.Content>
				</Menu.Positioner>
			</Menu.Root>
		</div>
	);
}
