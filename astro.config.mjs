// @ts-check
import { env } from 'node:process';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
	output: 'static',
	site: env.PUBLIC_SITE_URL,
	base: env.BASE_PATH || undefined,
	integrations: [mdx()],
});
