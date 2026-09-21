export const site = {
	name: 'JAI',
	tagline: 'A journal for attentive thinking',
	description:
		'An independent editorial journal for essays, research, analysis, visual studies, and experiments.',
};

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

