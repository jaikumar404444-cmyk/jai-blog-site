export function withBase(path: string) {
	if (/^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith('#')) return path;

	const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
	return `${base}${path.replace(/^\//, '')}`;
}
