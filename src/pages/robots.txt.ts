import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = () => {
	const origin = import.meta.env.PUBLIC_SITE_URL?.replace(/\/$/, '');
	const body = origin
		? `User-agent: *\\nAllow: /\\nSitemap: ${origin}/sitemap.xml\\n`
		: 'User-agent: *\\nAllow: /\\n# Set PUBLIC_SITE_URL during deployment to advertise the sitemap.\\n';

	return new Response(body, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
