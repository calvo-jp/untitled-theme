'use client';

import {Icon} from '@/lib/icon';
import {Menu} from '@ark-ui/react';
import {ChevronDownIcon} from '@untitled-theme/icons-react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

export function NavbarLogo() {
	const pathname = usePathname();

	return (
		<div className="font-mono flex items-center gap-2">
			<Link
				href={pathname}
				className="font-semibold tracking-tighter text-brand-700 dark:text-brand-500"
			>
				Untitled Theme
			</Link>

			<Menu.Root
				positioning={{
					placement: 'bottom',
				}}
			>
				<Menu.Trigger className="px-1.5 py-1 cursor-pointer rounded text-sm leading-none tracking-tight flex items-center gap-0.5 bg-gray-true-100 dark:bg-gray-true-800/30 text-gray-true-600 dark:text-gray-true-400">
					{pathname.startsWith('/icons') && 'icons'}
					{pathname.startsWith('/colors') && 'colors'}

					<Menu.Indicator asChild>
						<Icon className="w-4 h-4 data-open:rotate-180 transition-transform duration-150">
							<ChevronDownIcon />
						</Icon>
					</Menu.Indicator>
				</Menu.Trigger>
				<Menu.Positioner className="z-dropdown">
					<Menu.Content className="rounded-md border p-2 bg-white dark:bg-gray-true-900 data-open:animate-fade-in data-closed:animate-fade-out">
						{links.map((link) => (
							<Menu.Item key={link.href} value={link.href} asChild>
								<Link
									href={link.href}
									className="px-2 py-1 flex items-center gap-4 cursor-pointer rounded-md text-sm data-highlighted:bg-gray-true-50 dark:data-highlighted:bg-gray-true-800/25"
								>
									{link.label}
								</Link>
							</Menu.Item>
						))}
					</Menu.Content>
				</Menu.Positioner>
			</Menu.Root>
		</div>
	);
}

const links = [
	{
		label: 'icons',
		href: '/icons',
	},
	{
		label: 'colors',
		href: '/colors',
	},
];
