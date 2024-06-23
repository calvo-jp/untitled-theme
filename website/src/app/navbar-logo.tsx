'use client';

import {Link} from '@/lib/link';
import {Flex, styled} from '@/styled-system/jsx';
import {ark} from '@ark-ui/react';
import {usePathname} from 'next/navigation';

export function NavbarLogo() {
	const pathname = usePathname();

	return (
		<Flex fontFamily="mono" display="flex" alignItems="center" gap="2">
			<Link
				href="/"
				fontWeight="semibold"
				letterSpacing="tighter"
				color={{
					base: 'brand.700',
					_dark: 'brand.500',
				}}
			>
				Untitled Theme
			</Link>

			{pathname.startsWith('/icons') && (
				<Tag asChild>
					<Link href="/icons">icons</Link>
				</Tag>
			)}

			{pathname.startsWith('/colors') && (
				<Tag asChild>
					<Link href="/colors">colors</Link>
				</Tag>
			)}
		</Flex>
	);
}

const Tag = styled(ark.span, {
	base: {
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
		rounded: 'sm',
		fontSize: 'sm',
		lineHeight: 'none',
		letterSpacing: 'tight',
	},
});
