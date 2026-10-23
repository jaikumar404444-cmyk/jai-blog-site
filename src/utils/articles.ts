import { getCollection, type CollectionEntry } from 'astro:content';
import { withBase } from './urls';

export type Article = CollectionEntry<'writing'>;

export async function getPublishedArticles() {
	const entries = await getCollection('writing', ({ data }) => !data.draft);
	return entries.sort((first, second) => second.data.date.getTime() - first.data.date.getTime());
}

export function articleUrl(article: Article) {
	return withBase(`/writing/${article.data.slug}`);
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
		.filter((candidate) => candidate.id !== article.id)
		.map((candidate) => ({
			candidate,
			score:
				(candidate.data.topic === article.data.topic ? 2 : 0) +
				candidate.data.tags.filter((tag) => article.data.tags.includes(tag)).length,
		}))
		.filter(({ score }) => score > 0)
		.sort((first, second) => second.score - first.score || second.candidate.data.date.getTime() - first.candidate.data.date.getTime())
		.map(({ candidate }) => candidate)
		.slice(0, 3);
}
