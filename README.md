# JAI

A static Astro publication built as a contemporary editorial journal: readable, art-directed, structured, and deliberately lightweight.

The current collection contains clearly labelled demo pieces only. Replace those files with owner-approved writing and imagery before public launch.

## Development

```sh
npm install
npm run dev
npm run check
npm run build
npm run preview
```

Set `PUBLIC_SITE_URL` in the deployment environment to emit absolute canonical URLs and a complete sitemap.

## Content authoring

Published articles live in `src/content/writing/` and are validated by `src/content.config.ts`.

Markdown is the default. Use MDX only when an article needs one of the restrained editorial components in `src/components/editorial/`, such as a pull quote or a full-bleed figure.

### Required frontmatter

```yaml
title: "Article title"
slug: "article-title"
description: "A useful article deck."
date: 2026-09-20
type: "essay" # essay | research | analysis | visual-essay | experimental
topic: "Topic"
draft: false
```

Supported optional fields include `featured`, `hero`, `gallery`, `layout`, `related`, `references`, `readingTime`, `seoTitle`, `seoDescription`, and `socialImage`.

Draft entries are deliberately excluded from every public index, archive, search result, and generated article route.

> Astro reserves `layout` in raw MDX frontmatter for a legacy page-layout import. For MDX visual essays, leave it out and the article renderer derives the visual presentation from `type: visual-essay`. Markdown articles support the explicit layout field.

## Architecture

- `src/content/writing/` — validated article content
- `src/components/` — reusable publication and editorial modules
- `src/layouts/` — document shell and SEO metadata
- `src/pages/` — static routes
- `src/styles/` — semantic tokens and global styling
- `src/utils/articles.ts` — collection querying, date formatting, related-work selection
- `public/images/demo/` — original placeholder SVG studies; replace with licensed or owner-provided work

See [MASTER_CODEX_SPECIFICATION.md](MASTER_CODEX_SPECIFICATION.md) for the implementation decisions consolidated from the project documents.

