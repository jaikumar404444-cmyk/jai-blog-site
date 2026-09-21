# JAI-BLOG — PROJECT SPECIFICATION v1

## Purpose
This document consolidates the current product, design, content, IA, and technical decisions for JAI-BLOG. It is the pre-implementation blueprint.

## Product
JAI-BLOG is a custom-coded personal digital publication: contemporary editorial journal + literary publication + cultural/art-directed web experience.

It should feel intelligent, cultured, artistic, considered, human, quietly dramatic, distinctive, readable, and fast.

## Principles
1. Publication over generic blog.
2. Editorial hierarchy over repetitive cards.
3. Typography is a primary visual system.
4. Composition should feel art-directed.
5. Controlled asymmetry is preferred.
6. Whitespace is active design.
7. Images are editorial material.
8. Motion has purpose.
9. Accessibility is foundational.
10. Content is independent from presentation.

## Core routes
/
 /writing
 /writing/[slug]
 /archive
 /about
 /search

Possible future routes are intentionally excluded from v1 unless justified.

## Homepage
The homepage is an editorial composition rather than a chronological feed.

Conceptual sequence:
Publication identity → Featured work → Selected/recent work → Secondary editorial modules → Research/special work → Additional discovery → Footer.

Exact section order can be refined during visual implementation.

## Writing
`/writing` is the main browseable index of published work. It may support type, topic, and year filtering when useful.

## Articles
`/writing/[slug]`

Conceptual metadata:
- title
- slug
- date
- type
- topic
- description/deck
- draft state
- hero image where appropriate
- body
- references where needed
- related work

Types:
- Essay
- Research
- Analysis
- Visual Essay
- Experimental

Possible presentation layouts:
- Standard
- Longform
- Research
- Visual
- Experimental

## Archive
`/archive` presents the long-term body of work by year/month, with optional metadata. It should feel like a publication catalogue.

## Search
`/search` should provide fast discovery across title, description, type, and topic. The interaction may be visually expressive but must remain easy and keyboard accessible.

## About
`/about` provides author statement, publication philosophy, interests, selected work, and relevant links where appropriate.

## Navigation
Initial global navigation:
Home / Writing / Archive / About / Search

Default state should be restrained; expanded interaction may become more expressive.

## Visual direction
Working direction: **Contemporary Editorial Journal**

Influences:
Digital Editorial + Literary Publication + Art/Cultural Magazine + Archival Catalogue + Modern Web Art Direction.

Avoid:
- generic blog styling
- template-like card repetition
- excessive rounded UI
- SaaS/dashboard aesthetics
- gratuitous gradients
- decorative glassmorphism
- animation for its own sake

## Typography
Conceptual system:
Display serif → editorial personality
Supporting sans-serif → navigation, metadata, utility, clarity

Use a small intentional type system. Final fonts must consider readability, licensing, performance, availability, and loading.

## Layout
Support asymmetry, generous whitespace, strong alignment, large editorial statements, deliberate image/text relationships, and controlled grid variation.

Keep the underlying grid systematic. Avoid excessive absolute positioning.

## Colour
Use restrained neutrals, sophisticated accents, high legibility, and a fully designed dark environment. Use semantic colour tokens.

## Imagery
Support hero, inline, full-bleed, sequences, galleries, captions, and credits. Images are first-class content and should be optimized. Meaningful images require meaningful alt text.

## Story modules
Avoid one universal card. The system may include FeatureStory, EditorialTile, CompactStory, ImageStory, TextStory, and StoryList. All should use the same content model.

## Dark mode
Dark mode is a complete alternate editorial environment. It needs semantic colors, contrast, image compatibility, accessible controls, persistence where appropriate, and minimal theme flash.

## Motion
Possible motion:
- page transitions
- image reveals
- text reveals
- search expansion
- menu transitions
- hover states
- restrained scroll effects

Motion must be purposeful, non-blocking, reduced-motion aware, and lightweight.

## Mobile
Mobile is a designed composition, not desktop stacked vertically. Reconsider type, spacing, images, grids, navigation, article structure, and touch targets.

## Content model
Required:
`title`, `slug`, `date`, `type`, `draft`

Recommended:
`description`, `topic`

Optional:
`featured`, `hero`, `layout`, SEO fields, social image, references, related articles.

Markdown is the default authoring format; MDX is available for genuinely richer editorial components.

## Content flow
Content → validated schema → article type → layout → reusable components → visual system.

Published content must not contain visual CSS or depend on specific positioning.

## Editorial MDX components
Potential:
PullQuote, ImageFigure, ImageGallery, Caption, Callout, Footnote, ComparisonBlock, InteractiveModule.

Use sparingly.

## Technical stack
- Astro
- Markdown / MDX
- TypeScript where useful
- CSS / CSS custom properties
- Git
- GitHub
- GitHub Pages

Default rendering strategy: static generation. Use client-side JavaScript only where needed.

## Technical pipeline
Markdown/MDX → Astro content system → validated content → layouts → components → CSS/selective JS → static build → GitHub Pages.

## Eventual codebase
```text
JAI-BLOG/
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── src/
│   ├── components/
│   ├── content/writing/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   ├── data/
│   └── utils/
├── tests/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── AGENTS.md
└── README.md
```

## Implementation requirements
Use structured content collections and schema validation. Keep routing, content, layouts, components, styling, and interaction concerns separate.

Use CSS custom properties/design tokens for shared values. Avoid arbitrary magic values throughout the codebase.

Search should remain static-site friendly in v1. Do not introduce a database/backend merely for search.

Accessibility must include semantic HTML, heading hierarchy, keyboard navigation, visible focus, labels, alt text, contrast, and reduced-motion support.

SEO should include titles, descriptions, canonical URLs, Open Graph/social metadata, sitemap, and clean semantic markup.

Performance priorities:
1. Static HTML
2. Minimal JS
3. Optimized images
4. Efficient fonts
5. Few third-party scripts
6. Limited dependencies
7. Stable layouts
8. Intentional CSS

## Development phases
### 1. Foundation
Initialize Astro, configuration, routes, content schema, tokens, styles, base layout.

### 2. Core publication
Header, footer, homepage, writing index, article page, archive, about.

### 3. Editorial system
Article variants, story modules, imagery, typography refinement, topics/types.

### 4. Interaction
Search, theme switching, navigation interaction, purposeful motion.

### 5. Responsive refinement
Mobile/tablet composition, responsive typography, interaction sizing.

### 6. Quality
Accessibility, SEO, performance, validation, broken-link checks, production build.

### 7. Polish
Typography, spacing, animation, consistency, cross-browser testing.

## Definition of done
A feature is complete when it follows the established direction, works on desktop/mobile, supports relevant keyboard interaction, keeps content structured, builds successfully, has no obvious console errors, considers accessibility/performance, and avoids unnecessary technical debt.

## Agent prohibitions
The eventual coding agent must not:
- replace the art direction with generic AI aesthetics
- turn every section into a card grid
- hard-code content into components
- scatter arbitrary styling values
- add unnecessary dependencies
- create a backend without a real requirement
- add a CMS in v1 without justification
- add purposeless animation
- sacrifice accessibility/performance for novelty
- over-engineer simple features
- silently contradict this specification

When unspecified, choose the simplest maintainable solution consistent with this document and document significant assumptions.

## Decision hierarchy
1. Content integrity
2. Accessibility
3. Usability
4. Established design direction
5. Maintainability
6. Performance
7. Visual polish
8. Novelty

## North star
**JAI-BLOG should feel like a real publication that happens to be personal—not a personal blog decorated to look like a magazine.**
