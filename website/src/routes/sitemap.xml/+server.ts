import {getIcons} from '$lib/icons';
import type {RequestHandler} from '@sveltejs/kit';

export const GET: RequestHandler = async ({url: {origin}}) => {
	const icons = await getIcons();

	const urls = [
		`${origin}/icons`,
		`${origin}/colors`,
		...icons.map((icon) => `${origin}/icons/${icon.name.kebab}`),
	];

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((url) => `<url><loc>${url}</loc></url>`).join('')}</urlset>`,
		{
			headers: {
				'Content-Type': 'application/xml',
			},
		},
	);
};
