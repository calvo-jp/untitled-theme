'use client';

import {Icon} from '@/lib/icon';
import {Link} from '@/lib/link';
import {Menu, MenuContent, MenuItem, MenuItemGroup, MenuPositioner, MenuTrigger} from '@/lib/menu';
import {Flex} from '@/styled-system/jsx';
import {MenuIndicator} from '@ark-ui/react';
import {ChevronDownIcon} from '@untitled-theme/icons-react';
import {usePathname} from 'next/navigation';

export function NavbarLogo() {
	const pathname = usePathname();

	return (
		<Flex fontFamily="mono" display="flex" alignItems="center" gap="2">
			<Link
				href={pathname}
				fontWeight="semibold"
				letterSpacing="tighter"
				color={{
					base: 'brand.700',
					_dark: 'brand.500',
				}}
			>
				Untitled Theme
			</Link>

			<Menu
				positioning={{
					placement: 'bottom',
				}}
			>
				<MenuTrigger
					css={{
						bg: {
							base: 'gray-true.100',
							_dark: 'gray-true.800/30',
						},
						color: {
							base: 'gray-true.600',
							_dark: 'gray-true.400',
						},
						px: '1.5',
						py: '1',
						cursor: 'pointer',
						rounded: 'sm',
						fontSize: 'sm',
						lineHeight: 'none',
						letterSpacing: 'tight',
						display: 'flex',
						alignItems: 'center',
						gap: '0.5',
					}}
				>
					{pathname.startsWith('/icons') && 'icons'}
					{pathname.startsWith('/colors') && 'colors'}

					<MenuIndicator asChild>
						<Icon
							w="4"
							h="4"
							transitionProperty="transform"
							transitionDuration="fast"
							_open={{
								transform: 'rotate(180deg)',
							}}
						>
							<ChevronDownIcon />
						</Icon>
					</MenuIndicator>
				</MenuTrigger>
				<MenuPositioner zIndex="dropdown">
					<MenuContent
						bg={{
							base: 'white',
							_dark: 'gray-true.900',
						}}
						rounded="md"
						borderWidth="1px"
						p="2"
						_open={{
							animation: 'fade-in',
						}}
						_closed={{
							animation: 'fade-out',
						}}
					>
						<MenuItemGroup>
							{links.map((link) => (
								<MenuItem key={link.href} value={link.href} asChild>
									<Link
										href={link.href}
										px="2"
										py="1"
										display="flex"
										alignItems="center"
										gap="4"
										cursor="pointer"
										rounded="md"
										fontSize="sm"
										_highlighted={{
											bg: {
												base: 'gray-true.50',
												_dark: 'gray-true.800/25',
											},
										}}
									>
										{link.label}
									</Link>
								</MenuItem>
							))}
						</MenuItemGroup>
					</MenuContent>
				</MenuPositioner>
			</Menu>
		</Flex>
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
