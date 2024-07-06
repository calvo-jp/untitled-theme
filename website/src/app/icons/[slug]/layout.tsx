import {Icon} from '@/lib/icon';
import {VisuallyHidden, styled} from '@/styled-system/jsx';
import {ark} from '@ark-ui/react';
import {ChevronRightIcon, HomeLineIcon} from '@untitled-theme/icons-react';
import Link from 'next/link';
import type {ReactNode} from 'react';
import {getIcon} from '../../utils';

interface Props {
	children: ReactNode;
	params: {
		slug: string;
	};
}

export default async function Layout({params, children}: Readonly<Props>) {
	const icon = await getIcon(params.slug);

	return (
		<>
			<Breadcrumb
				mb={{
					base: '8',
					lg: '16',
				}}
			>
				<BreadcrumbItems>
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link href="/">
								<VisuallyHidden>Home</VisuallyHidden>
								<Icon w="5" h="5">
									<HomeLineIcon />
								</Icon>
							</Link>
						</BreadcrumbLink>
						<BreadcrumbSeparator>
							<ChevronRightIcon />
						</BreadcrumbSeparator>
					</BreadcrumbItem>
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link href="/icons">icons</Link>
						</BreadcrumbLink>
						<BreadcrumbSeparator>
							<ChevronRightIcon />
						</BreadcrumbSeparator>
					</BreadcrumbItem>
					<BreadcrumbItem>
						<BreadcrumbLink aria-current="page">{icon?.name.pascal}</BreadcrumbLink>
					</BreadcrumbItem>
				</BreadcrumbItems>
			</Breadcrumb>

			{children}
		</>
	);
}

const Breadcrumb = styled(
	ark.nav,
	{},
	{
		defaultProps: {
			'aria-label': 'Breadcrumb',
		},
	},
);

const BreadcrumbItems = styled(ark.ol, {
	base: {
		display: 'flex',
		alignItems: 'center',
		gap: '2',
	},
});

const BreadcrumbItem = styled(ark.li, {
	base: {
		display: 'flex',
		alignItems: 'center',
		gap: '2',
	},
});

const BreadcrumbLink = styled(ark.a, {
	base: {
		'&[href]': {
			_hover: {
				textDecoration: 'underline',
				textUnderlineOffset: '2px',
			},
		},
		_currentPage: {
			color: {
				base: 'brand.700',
				_dark: 'brand.500',
			},
		},
	},
});

const BreadcrumbSeparator = styled(
	ark.svg,
	{
		base: {
			w: '4',
			h: '4',
			color: {
				base: 'gray-true.400',
				_dark: 'gray-true.700',
			},
		},
	},
	{
		shouldForwardProp(key) {
			return ['strokeWidth'].includes(key);
		},
		defaultProps: {
			asChild: true,
			strokeWidth: '1.66667',
		},
	},
);
