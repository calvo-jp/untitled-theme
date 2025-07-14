import type {MetadataRoute} from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://untitled-theme-docs.vercel.app',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: 'https://untitled-theme-docs.vercel.app/colors',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
	];
}
