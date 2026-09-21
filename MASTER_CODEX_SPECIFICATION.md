# JAI-BLOG — Master Codex Specification

## Purpose

JAI-BLOG is a static, custom-coded contemporary editorial journal: a real publication that happens to be personal. It must feel intelligent, literary, art-directed, readable, and fast—not like a generic blog, portfolio, or product interface.

## Implementation decisions

- Build with the existing Astro project, TypeScript, Markdown-first content collections, CSS custom properties, and static generation.
- Keep content in `src/content/writing`, validate it with an Astro schema, and keep layouts/components independent of article prose.
- Support `essay`, `research`, `analysis`, `visual-essay`, and `experimental` article types; layouts are `standard`, `longform`, `research`, `visual`, and `experimental`.
- Required article metadata: title, slug, date, type, and draft. Support description, topic, featured, hero/caption/credit, gallery, layout, related work, references, and SEO overrides.
- Publish only non-draft entries to home, writing, archive, search, and generated public routes.
- Implement `/`, `/writing`, `/writing/[slug]`, `/archive`, `/about`, and `/search`. Do not introduce a backend, CMS, contact submission endpoint, or additional public route family.
- Compose the homepage as a curated editorial sequence: identity, a feature, selected work, a secondary text-led module, special/research work, discovery, and a quiet footer.
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
