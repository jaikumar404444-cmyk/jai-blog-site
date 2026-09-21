import type { APIRoute } from 'astro';
import { getPublishedArticles } from '../utils/articles';

export const prerender = true;

function xmlEscape(value: string) {
	return value.replace(/[<>&'\"]/g, (character) => ({
		'<': '&lt;',
		'>': '&gt;',
		'&': '&amp;',
		"'": '&apos;',
		'"': '&quot;',
	}[character] ?? character));
}

export const GET: APIRoute = async () => {
	const origin = import.meta.env.PUBLIC_SITE_URL;

	if (!origin) {
		return new Response('<!-- Set PUBLIC_SITE_URL during deployment to generate absolute sitemap URLs. -->', {
			headers: { 'Content-Type': 'application/xml; charset=utf-8' },
		});
	}

	const base = origin.replace(/\/$/, '');
	const articles = await getPublishedArticles();
	const routes = [
		{ path: '/', lastmod: undefined },
		{ path: '/writing', lastmod: undefined },
		{ path: '/archive', lastmod: undefined },
		{ path: '/about', lastmod: undefined },
		{ path: '/search', lastmod: undefined },
		...articles.map((article) => ({ path: `/writing/${article.data.slug}`, lastmod: article.data.date.toISOString().slice(0, 10) })),
	];
	const urls = routes.map((route) => `<url><loc>${xmlEscape(`${base}${route.path}`)}</loc>${route.lastmod ? `<lastmod>${route.lastmod}</lastmod>` : ''}</url>`).join('');

	return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' },
	});
};
