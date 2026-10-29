# JAI-BLOG — Master Codex Specification

## Purpose

JAI-BLOG is a static, custom-coded contemporary editorial journal: a real publication that happens to be personal. It must feel intelligent, literary, art-directed, readable, and fast—not like a generic blog, portfolio, or product interface.

## Implementation decisions

- Build with the existing Astro project, TypeScript, Markdown-first content collections, CSS custom properties, and static generation.
- Keep content in `src/content/writing`, validate it with an Astro schema, and keep layouts/components independent of article prose.
- Use one `article` content type for all published writing. Categories and tags organise subjects such as Design, Finance, Books, Theology, and History; they do not create separate content systems. Existing presentation layouts remain available internally for already-authored work, while normal CMS entries use the standard layout.
- Required article metadata: title, slug, date, type, and draft. Support description, topic, featured, hero/caption/credit, gallery, layout, related work, references, and SEO overrides.
- Publish only non-draft entries to home, writing, archive, search, and generated public routes.
- Implement `/`, `/writing`, `/writing/[slug]`, `/archive`, `/about`, and `/search`. Do not introduce a backend, CMS, contact submission endpoint, or additional public route family.
- Compose the homepage as a curated editorial sequence: identity, a feature, selected articles, and a quiet footer. Do not create dedicated research, notes, observations, or experimental sections.
- Use a two-role type system: expressive serif display typography and restrained sans-serif utility typography. Use semantic tokens for colors, type, spacing, rules, layout widths, and motion.
- Use a systematic editorial grid with controlled asymmetry, visual pauses, thin rules, varied story modules, and varied image ratios. Do not rely on repeated cards or structural absolute positioning.
- Treat meaningful images as content: stable dimensions, meaningful alt text, appropriate loading, hero/caption/credit support, and visual sequences/galleries where a story needs them.
- Implement deliberate light and dark token sets. Persist a reader-selected theme and respect the system theme by default without layout shifts.
- Keep interaction selective: native mobile navigation, theme switching, and static-index client search. Respect reduced-motion preferences.
- Meet the accessibility baseline: semantic landmarks, a single logical heading hierarchy per page, visible focus, keyboard-accessible controls, labels, contrast, and responsive touch targets.
- Generate title/description/canonical/OG metadata from page and article data. Canonical URLs use `PUBLIC_SITE_URL` when it is configured; no production domain is assumed in this repository.
- Generate a static sitemap and robots route without adding a search service or backend.

## Provisional implementation assumptions

- No final biography, social links, real article copy, or licensed imagery has been supplied. Demo content is explicitly labelled as such and makes no claims about the site owner.
- Original SVG editorial studies are used for demo imagery rather than repurposing the supplied reference screenshots.
- The type system uses locally hosted, variable **Newsreader** (display and reading) and **Instrument Sans** (navigation, metadata, and UI). Both are available under the SIL Open Font License 1.1; the font assets and licence notice are included in `public/fonts/`. Semantic font tokens keep a resilient fallback stack.
- Astro reserves raw MDX frontmatter named `layout` for a legacy page-layout import. MDX articles therefore omit that raw field when the default would apply; the article renderer derives the visual presentation from `type: visual-essay`. Markdown articles retain the explicit `layout` field.

## Quality bar

The finished site must statically build, have no broken internal links among the core routes and sample articles, keep search and theme controls keyboard accessible, and remain deliberately composed on desktop, tablet, and mobile.

## Refinement decisions — 2026-09-21

- Keep page composition and content architecture intact while making navigation, search, theme selection, hover/focus feedback, and reading transitions more legible.
- The header remains visually quiet but stays available while reading. Mobile navigation becomes a full-height, keyboard-dismissible panel so its open state is unambiguous and does not leave underlying controls exposed.
- Motion is intentionally limited to a brief page/image arrival, menu reveal/dismissal, image-scale feedback on pointer devices, link state changes, and an optional native theme crossfade. All motion is disabled for readers who request reduced motion.
- Search remains a local static index. It now opens focused from navigation, supports `/` to focus and `Escape` to clear or leave the field, offers index-derived starting points, and supplies an actionable no-results state.

## Layout refinement — 2026-10-10

- Use a shared 82rem desktop page frame with a 40rem long-form reading measure. Article variants may vary their span within that frame but must not introduce unrelated container widths.
- Keep the editorial spacing scale generous but bounded so adjacent homepage sections read as a sequence rather than isolated screens.
- Use balanced two-column editorial grids for the current four-item writing collection and two-item discovery section; retain variation through module composition rather than empty grid cells.
- Keep placeholder notes within sample article content where transparency is necessary, while removing framework-facing demo language from navigation, page introductions, metadata labels, and artwork.
- Keep original SVG studies, but restrict their prominent colours to the publication's paper, ink, brick, olive, and muted-stone family.

## No-code publishing — 2026-10-10

- Pages CMS is the GitHub-connected visual editor for normal Markdown articles and publication settings. The configuration lives at the repository root in `.pages.yml`.
- Article bodies remain Markdown-first. Pages CMS exposes one unified Articles collection for normal authoring; the existing MDX source remains in the repository to preserve its rendered article treatment, but is not a second CMS workflow.
- Uploaded editorial images are stored at `public/images/uploads/` and published at `/images/uploads/...`.
- `draft: true` remains the single public publication gate. Tags are optional metadata used by static search and automatic related-work matching; explicit related links take priority.
- Homepage article modules remain automatic. The feature is the first published entry marked `featured: true`; remaining published content is selected from the collection.

## Unified articles — 2026-10-29

- The publication now uses one general Article type. Type labels have been removed from public metadata, archive entries, search results, and CMS authoring.
- `topic` and optional `tags` are the organisational metadata for all articles and drive search and automatic related-work matching.
- The demo article “The Slow Index” is retained as `draft: true`, so it remains available locally but is absent from all generated public output.
