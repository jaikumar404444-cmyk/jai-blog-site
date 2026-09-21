import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const imageSchema = z.object({
	src: z.string().min(1),
	alt: z.string().min(1),
	caption: z.string().optional(),
	credit: z.string().optional(),
});

const writing = defineCollection({
	loader: glob({ base: './src/content/writing', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string().min(1),
		slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Use a lowercase URL-safe slug.'),
		description: z.string().min(1),
		date: z.coerce.date(),
		type: z.enum(['essay', 'research', 'analysis', 'visual-essay', 'experimental']),
		topic: z.string().min(1),
		draft: z.boolean(),
		demo: z.boolean().default(false),
		featured: z.boolean().default(false),
		hero: imageSchema.optional(),
		gallery: z.array(imageSchema).optional(),
		layout: z.enum(['standard', 'longform', 'research', 'visual', 'experimental']).default('standard'),
		related: z.array(z.string()).default([]),
		references: z
			.array(
				z.object({
					title: z.string().min(1),
					author: z.string().optional(),
					publication: z.string().optional(),
					url: z.url().optional(),
				})
			)
			.default([]),
		seoTitle: z.string().optional(),
		seoDescription: z.string().optional(),
		socialImage: z.string().optional(),
		readingTime: z.number().int().positive().optional(),
	}),
});

export const collections = { writing };
