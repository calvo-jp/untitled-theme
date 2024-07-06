import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {IconDetails} from '../../icon-details';
import {getIcon, getIcons} from '../../utils';

export async function generateStaticParams() {
	const icons = await getIcons();
	const params = icons.map(({slug}) => ({slug}));
	return params;
}

export async function generateMetadata({params}: {params: {slug: string}}): Promise<Metadata> {
	const icon = await getIcon(params.slug);

	if (!icon) return {};

	return {
		title: icon.name.pascal,
	};
}

export default async function IconDetailsPage({params}: {params: {slug: string}}) {
	const icon = await getIcon(params.slug);

	return !icon ? notFound() : <IconDetails data={icon} />;
}
