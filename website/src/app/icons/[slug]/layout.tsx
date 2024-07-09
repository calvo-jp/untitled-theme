import {Icon} from '@/lib/icon';
import {type HTMLArkProps, ark} from '@ark-ui/react';
import {ChevronRightIcon, HomeLineIcon} from '@untitled-theme/icons-react';
import Link from 'next/link';
import {type ReactNode, forwardRef} from 'react';
import {twMerge} from 'tailwind-merge';
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
			<Breadcrumb className="mb-8 lg:mb-16">
				<BreadcrumbItems>
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link href="/">
								<span className="sr-only">Home</span>
								<Icon className="size-5">
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

const Breadcrumb = forwardRef<HTMLElement, HTMLArkProps<'nav'>>((props, ref) => {
	return <ark.nav ref={ref} aria-label="Breadcrumb" {...props} />;
});

const BreadcrumbItems = forwardRef<HTMLOListElement, HTMLArkProps<'ol'>>((props, ref) => {
	return (
		<ark.ol ref={ref} {...props} className={twMerge('flex items-center gap-2', props.className)} />
	);
});

const BreadcrumbItem = forwardRef<HTMLLIElement, HTMLArkProps<'li'>>((props, ref) => {
	return (
		<ark.li ref={ref} {...props} className={twMerge('flex items-center gap-2', props.className)} />
	);
});

const BreadcrumbLink = forwardRef<HTMLAnchorElement, HTMLArkProps<'a'>>((props, ref) => {
	return (
		<ark.a
			ref={ref}
			{...props}
			className={twMerge(
				'[&[href]]:hover:underline',
				'[&[href]]:hover:underline-offset-2',
				'aria-current-page:text-brand-700',
				'dark:aria-current-page:text-brand-500',
				props.className,
			)}
		/>
	);
});

const BreadcrumbSeparator = forwardRef<SVGSVGElement, HTMLArkProps<'svg'>>((props, ref) => {
	return (
		<ark.svg
			ref={ref}
			strokeWidth="1.66667"
			asChild
			{...props}
			className={twMerge('w-4 h-4 text-gray-true-400 dark:text-gray-true-700', props.className)}
		/>
	);
});

Breadcrumb.displayName = 'Breadcrumb';
BreadcrumbItems.displayName = 'BreadcrumbItems';
BreadcrumbItem.displayName = 'BreadcrumbItem';
BreadcrumbLink.displayName = 'BreadcrumbLink';
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';
