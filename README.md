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
type: "article"
topic: "Topic"
draft: false
```

Supported optional fields include `tags`, `featured`, `hero`, `gallery`, `related`, `references`, `readingTime`, `seoTitle`, `seoDescription`, and `socialImage`. Categories and tags organise all articles; there are no separate research, notes, or experimental publishing paths.

Draft entries are deliberately excluded from every public index, archive, search result, and generated article route. Optional `tags` improve related-work matching and static search.

> Normal CMS articles use the standard article presentation. The existing MDX source remains as a preserved advanced example and is not part of the normal authoring workflow.

## No-code publishing

Normal Markdown articles and publication settings can be managed in [Pages CMS](https://app.pagescms.org) after the repository is connected to GitHub. The root `.pages.yml` provides the editor fields and sends uploaded images to `public/images/uploads/`.

The GitHub Pages workflow in `.github/workflows/deploy-pages.yml` validates and deploys every push to `master`. After pushing the repository, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**, then authorize the Pages CMS GitHub App for this repository. See [the publishing workflow](04_PROJECT_SPEC/PAGES_CMS_PUBLISHING_v1.md) for the acceptance test and editorial process.

## Architecture

- `src/content/writing/` — validated article content
- `src/components/` — reusable publication and editorial modules
- `src/layouts/` — document shell and SEO metadata
- `src/pages/` — static routes
- `src/styles/` — semantic tokens and global styling
- `src/utils/articles.ts` — collection querying, date formatting, related-work selection
- `public/images/demo/` — original placeholder SVG studies; replace with licensed or owner-provided work

See [MASTER_CODEX_SPECIFICATION.md](MASTER_CODEX_SPECIFICATION.md) for the implementation decisions consolidated from the project documents.

