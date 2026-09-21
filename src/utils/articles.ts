import { getCollection, type CollectionEntry } from 'astro:content';

export type Article = CollectionEntry<'writing'>;

export async function getPublishedArticles() {
	const entries = await getCollection('writing', ({ data }) => !data.draft);
	return entries.sort((first, second) => second.data.date.getTime() - first.data.date.getTime());
}

export function articleUrl(article: Article) {
	return `/writing/${article.data.slug}`;
}

export function formatDate(date: Date) {
	return new Intl.DateTimeFormat('en', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	}).format(date);
}

export function formatMonth(date: Date) {
	return new Intl.DateTimeFormat('en', {
		month: 'long',
		year: 'numeric',
	}).format(date);
}

export function readingTime(article: Article) {
	return article.data.readingTime ?? 5;
}

export function relatedArticles(article: Article, articles: Article[]) {
	const explicit = article.data.related
		.map((slug) => articles.find((candidate) => candidate.data.slug === slug))
		.filter((candidate): candidate is Article => Boolean(candidate));

	if (explicit.length) return explicit.slice(0, 3);

	return articles
		.filter((candidate) => candidate.id !== article.id && candidate.data.topic === article.data.topic)
		.slice(0, 3);
}
