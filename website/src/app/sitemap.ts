import type {MetadataRoute} from 'next';
import {getIcons} from './icons/utils';

const url = 'https://untitled-theme-docs.vercel.app';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const icons = await getIcons();

	return [
		{
			url,
			priority: 1,
			lastModified: new Date(),
			changeFrequency: 'monthly',
		},

		...icons.map<MetadataRoute.Sitemap[number]>((icon) => ({
			url: `${url}/icons/${icon.slug}`,
			priority: 0.8,
			lastModified: new Date(),
			changeFrequency: 'monthly',
		})),
	];
}
