import editorial from './editorial.json';

export const site = editorial.site;
export const home = editorial.home;

export const navigation = [
	{ href: '/', label: 'Home' },
	{ href: '/writing', label: 'Writing' },
	{ href: '/archive', label: 'Archive' },
	{ href: '/about', label: 'About' },
	{ href: '/search', label: 'Search' },
];

export const articleTypes = {
	essay: 'Essay',
	research: 'Research',
	analysis: 'Analysis',
	'visual-essay': 'Visual essay',
	experimental: 'Experimental',
} as const;

