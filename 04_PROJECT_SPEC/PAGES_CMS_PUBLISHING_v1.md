# Pages CMS publishing workflow

## Purpose

JAI-BLOG remains a static Astro publication. Pages CMS is the visual, GitHub-backed editor for normal Markdown articles and publication settings. It does not add a database, an application login, client credentials, or a backend.

## Content model

- Normal articles live in `src/content/writing/*.md` and are edited in the **Writing** collection.
- `src/content/writing/a-small-atlas-of-attention.mdx` remains an MDX source because it contains Astro components. It is deliberately exposed as an advanced code editor rather than converted or risked through a Markdown rich-text editor.
- `draft: true` is the only publication gate. `getPublishedArticles()` filters drafts before route generation, homepage modules, the writing list, archive, related content, and the static search index are made.
- `tags` is an optional validated list. It improves related-article selection and static search. Explicit `related` selections still take priority.
- Images uploaded in the CMS go to `public/images/uploads/` and are written into content as `/images/uploads/...`, which Astro serves unchanged in the static build.
- `src/data/editorial.json` contains editable publication identity and homepage copy. Homepage article choices are not edited manually: the first published `featured: true` article is the feature, with the newest remaining work filling the other modules.
- The Pages CMS editor uses rich Markdown for ordinary article bodies. Cover-image and image-sequence fields provide the publication's supported caption and credit treatment; the single existing MDX visual essay stays an advanced source because it uses Astro components.
- The CMS preserves unmodeled frontmatter while saving structured entries and attributes CMS commits to the authenticated GitHub user.

## CMS setup

1. Push this repository, including `.pages.yml`, to the branch used for production.
2. Open `https://app.pagescms.org`, sign in with GitHub, and install/authorize the Pages CMS GitHub App for the repository owner or organization.
3. Grant the app access only to this repository, then open the repository and its production branch in Pages CMS.
4. GitHub repository collaborators with write access can edit through the CMS; control access in GitHub rather than in the public website.

Pages CMS commits edits to the selected branch. `.github/workflows/deploy-pages.yml` validates and deploys every push to `master` through GitHub Pages, using the GitHub Pages URL and project base path at build time. This checkout has no remote, so the workflow cannot be enabled or verified until the repository owner pushes it to GitHub and turns on GitHub Pages.

## Preview boundary

The hosted Pages CMS editor provides a visual rich-text editing surface, including immediate image previews during upload. GitHub Pages has no private, per-draft site-preview environment, so a `draft: true` entry is intentionally excluded from the deployed public site. A full page-in-design preview for unpublished work would require an additional preview host or pull-request deployment service, neither of which is part of this static GitHub Pages v1. Editors can review the rich-text content in Pages CMS, then publish by switching **Keep as draft** off.

## Editorial acceptance test

1. In **Writing**, create a new entry. Fill in the required fields, upload a cover image, provide useful alt text, and leave **Keep as draft** on.
2. Save. Confirm the committed Markdown file has `draft: true`, then run or wait for the production build. The article must be absent from `/writing`, `/archive`, `/search`, related modules, the homepage, and `/writing/<slug>`.
3. Turn **Keep as draft** off and save. After the host deploys the commit, confirm the individual page, writing index, archive, search, and any matching tag/category related modules include the article. Turn on **Feature this article on the homepage** to make it the homepage feature.
4. Edit the content or turn **Keep as draft** back on and save. After deployment, confirm public routes and lists follow the new state.

## Operational assumptions

- GitHub Pages must be set to **GitHub Actions** as its build source after the workflow is pushed.
- A current GitHub remote must be supplied by the repository owner before Pages CMS authorization and production deployment can be verified.
- Use Markdown for regular articles. Use the MDX source only when an existing rich Astro component is genuinely required.
