import type {MetadataRoute} from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			allow: '/',
			userAgent: '*',
		},
		sitemap: 'https://untitled-theme-docs.vercel.app/sitemap.xml',
	};
}
