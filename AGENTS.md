# JAI-BLOG — AGENTS.md

## Mission

Build and maintain JAI-BLOG as a custom-coded contemporary digital publication.

North star:

> A real publication that happens to be personal.

The site should feel intelligent, cultured, artistic, considered, human, quietly dramatic, distinctive, readable, and fast.

Do not replace the established art direction with generic AI-generated aesthetics.

## Source of Truth

Before making major changes, inspect these project documents:

- `02_DESIGN/DESIGN_DIRECTION.md`
- `02_DESIGN/DESIGN_SYSTEM.md`
- `04_PROJECT_SPEC/INFORMATION_ARCHITECTURE.md`
- `04_PROJECT_SPEC/CONTENT_ARCHITECTURE.md`
- `04_PROJECT_SPEC/TECHNICAL_ARCHITECTURE.md`
- `04_PROJECT_SPEC/PROJECT_SPECIFICATION.md`

Use this file as the implementation-level summary of those decisions.

If an implementation detail is unspecified, choose the simplest maintainable solution consistent with the documents and record meaningful assumptions.

## Core Design Rules

- Treat the website as a publication, not a generic blog.
- Use editorial hierarchy to distinguish importance.
- Typography is a primary visual system.
- Use controlled asymmetry, not random irregularity.
- Preserve generous whitespace.
- Treat imagery as editorial material.
- Avoid repetitive card-grid layouts.
- Motion must have a purpose.
- Accessibility, usability, and performance outrank novelty.

Avoid:

- generic blog templates
- SaaS/dashboard aesthetics
- excessive rounded UI
- gratuitous gradients
- decorative glassmorphism
- animation for its own sake
- unnecessary dependencies
- unnecessary backend infrastructure

## Stack

Use:

- Astro
- Markdown / MDX
- TypeScript where useful
- CSS / CSS custom properties
- Git
- GitHub
- GitHub Pages

Prefer static generation.
Use client-side JavaScript only where genuinely required.

## Routes

Implement the core routes:

- `/`
- `/writing`
- `/writing/[slug]`
- `/archive`
- `/about`
- `/search`

Do not invent major public routes without a concrete requirement.

## Content Model

Use Astro content collections with schema validation.

Required conceptual fields:

```yaml
title:
slug:
date:
type:
draft:
```

Recommended:

```yaml
description:
topic:
```

Optional:

```yaml
featured:
hero:
layout:
seoTitle:
seoDescription:
socialImage:
references:
related:
```

Supported article types:

- Essay
- Research
- Analysis
- Visual Essay
- Experimental

Possible presentation variants:

- Standard
- Longform
- Research
- Visual
- Experimental

Content flow must remain:

`Content -> Validated Schema -> Article Type -> Layout -> Components -> Design System`

Do not hard-code article content into components.

## Authoring

Markdown is the default.
Use MDX only when a piece genuinely needs richer editorial composition.

Potential MDX components include:

- `PullQuote`
- `ImageFigure`
- `ImageGallery`
- `Caption`
- `Callout`
- `Footnote`
- `ComparisonBlock`
- `InteractiveModule`

Use these sparingly.

## Component Architecture

Prefer meaningful reusable components such as:

- `SiteHeader`
- `SiteFooter`
- `ArticleCard`
- `FeatureStory`
- `EditorialTile`
- `CompactStory`
- `ImageStory`
- `TextStory`
- `StoryList`
- `ArticleMeta`
- `ArticleBody`
- `ImageFigure`
- `PullQuote`
- `SearchInterface`
- `SearchResult`
- `ArchiveList`
- `ThemeToggle`

Do not create pointless micro-components.
Do not create a giant universal component that controls unrelated visual systems.

## Styling

Use semantic design tokens / CSS custom properties for:

- colors
- typography
- spacing
- widths
- borders
- transitions
- shared structural values

Avoid unexplained magic numbers scattered throughout CSS.
Avoid structural layouts based on excessive absolute positioning.

## Typography

Use a small intentional type system.

Conceptual roles:

- display serif: editorial personality
- supporting sans-serif: navigation, metadata, utility, clarity

Create consistent semantic roles for display titles, headings, body, metadata, captions, labels, and controls.

Do not select fonts merely because they are trendy.

## Layout

Support:

- strong hierarchy
- generous whitespace
- deliberate alignment
- controlled asymmetry
- large editorial statements
- meaningful image/text relationships
- varied editorial modules

The underlying grid should remain systematic even when the composition looks unconventional.

## Imagery

Images are first-class content.

Support:

- hero images
- inline images
- full-bleed images
- sequences
- galleries
- captions
- credits

Meaningful images need meaningful alt text.
Optimize image delivery and avoid layout instability.

## Themes

Implement a deliberate light and dark environment using semantic theme tokens.

Dark mode should not simply invert colors.
Do not duplicate entire pages for theme variants.

## Motion

Possible motion includes:

- page transitions
- image reveals
- text reveals
- search expansion
- menu transitions
- hover states
- restrained scroll effects

Rules:

- purposeful
- lightweight
- non-blocking
- reduced-motion aware
- usable on lower-powered devices

Respect `prefers-reduced-motion`.

## Navigation

Primary navigation:

`Home / Writing / Archive / About / Search`

Keep the default navigation restrained and clear.
Expanded states may be more expressive.

All navigation must be keyboard accessible and mobile friendly.

## Search

Search should remain static-site friendly in v1.

Initial searchable fields:

- title
- description/excerpt
- type
- topic

Do not add a database/backend merely to provide search.

## Archive

The archive should organize work primarily by:

`Year -> Month -> Article`

It must remain useful as the collection grows.

## Responsive Design

Design for:

- desktop
- tablet
- mobile

Mobile is a designed composition, not merely stacked desktop content.
Reconsider typography, spacing, grids, images, navigation, and interaction targets.

## Accessibility

Treat accessibility as a build requirement.

Must include:

- semantic HTML
- logical heading hierarchy
- keyboard navigation
- visible focus states
- accessible labels
- correct interaction semantics
- meaningful alt text
- sufficient contrast
- reduced-motion support

## SEO

Implement:

- page titles
- meta descriptions
- canonical URLs
- Open Graph metadata
- social preview support where appropriate
- semantic article metadata
- sitemap
- appropriate robots configuration
- clean URLs

Derive metadata from content when possible.

## Performance

Prioritize:

1. Static HTML
2. Minimal client-side JavaScript
3. Optimized images
4. Efficient fonts
5. Few third-party scripts
6. Limited dependencies
7. Stable layouts
8. Intentional CSS

## Dependency Policy

Every dependency must earn its place.

Before adding a package, check whether Astro, HTML, CSS, browser APIs, or a small local utility can solve the problem.

Do not install libraries simply because they are popular.

## Codebase Structure

Target architecture:

```text
JAI-BLOG/
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── src/
│   ├── components/
│   ├── content/
│   │   └── writing/
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

Keep content, routing, layouts, components, styling, and client interaction separate.

## Development Sequence

Work in controlled phases:

1. Foundation
2. Core publication
3. Editorial system
4. Interaction
5. Responsive refinement
6. Accessibility / SEO / performance / validation
7. Visual polish

Do not attempt to generate the entire application in one uncontrolled change.

## Working Method

Before modifying code:

1. Inspect the existing repository.
2. Read relevant project documents.
3. Identify the smallest coherent change.
4. Make the change.
5. Run appropriate checks.
6. Inspect the result locally.
7. Fix regressions before continuing.

Prefer small, reviewable changes over giant rewrites.

## Git

Use Git from implementation start.

Workflow:

`Change -> Check -> Preview -> Commit -> Push`

Never commit credentials, API keys, private data, or unnecessary generated output.

## Deployment

Initial target:

`GitHub -> GitHub Actions -> Astro build -> GitHub Pages`

Keep deployment reproducible from the repository.

## Quality Gate

A feature is not done until:

- design direction is respected
- desktop works
- mobile works
- relevant keyboard interaction works
- content remains structured
- build succeeds
- obvious console errors are absent
- accessibility has been considered
- performance has been considered
- architecture remains maintainable

## Anti-Patterns

Never:

- replace the established art direction with generic AI design
- make every section a repeated card grid
- hard-code article content into UI components
- scatter arbitrary styling values everywhere
- use structural absolute positioning unnecessarily
- introduce a backend without a concrete requirement
- introduce a CMS in v1 without justification
- add animation without purpose
- add dependencies without need
- sacrifice accessibility for visual effect
- sacrifice performance for novelty
- over-engineer simple functionality

## Decision Hierarchy

When trade-offs occur, prioritize:

1. Content integrity
2. Accessibility
3. Usability
4. Established design direction
5. Maintainability
6. Performance
7. Visual polish
8. Novelty

## Important Boundary

Do not invent final visual decisions merely to fill unspecified gaps.
Where exact values remain open, build a flexible structure that allows refinement.

Do not silently make major product/design decisions contrary to the project specification.

## Final Standard

The final result should feel authored, not assembled.

Target feeling:

> editorial confidence + literary character + visual intelligence + usability

The website should feel like a real publication that happens to be personal.
