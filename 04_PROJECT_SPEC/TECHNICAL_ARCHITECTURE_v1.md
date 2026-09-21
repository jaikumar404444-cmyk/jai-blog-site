# JAI-BLOG — TECHNICAL ARCHITECTURE v1

## 1. Technical Goal

JAI-BLOG should be a custom-coded, content-driven editorial website that is fast, maintainable, responsive, accessible, SEO-friendly, easy to publish to, highly customizable, inexpensive to host, and capable of growing without architectural rewrites.

The first implementation should favor simplicity and static delivery over unnecessary backend infrastructure.

## 2. Core Stack

### Framework
Astro

Responsible for:
- page generation
- routing
- layouts
- components
- content integration
- static builds

### Content
Markdown + MDX

Markdown is the default authoring format. MDX is used only when an article genuinely needs richer components.

### Styling
CSS, using a deliberate token-based architecture rather than a large UI framework.

### Language
TypeScript where application logic benefits from typing.

### Version control
Git + GitHub

### Hosting
GitHub Pages initially.

The architecture should remain portable enough to move to another static host later.

## 3. Rendering Strategy

Default strategy: static generation.

```text
Markdown / MDX
      ↓
Astro content collections
      ↓
Astro components + layouts
      ↓
Build
      ↓
Static HTML / CSS / JS / assets
      ↓
GitHub Pages
```

Use client-side JavaScript only where interaction genuinely requires it.

Rule:
> Prefer HTML and CSS first; add JavaScript where it creates meaningful functionality or interaction.

## 4. Eventual Project Structure

```text
JAI-BLOG/
│
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── src/
│   ├── components/
│   ├── content/
│   │   └── writing/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   ├── data/
│   └── utils/
│
├── tests/
│
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── AGENTS.md
└── README.md
```

The exact folders may evolve during implementation, but separation of concerns should remain.

## 5. Components

Components represent reusable pieces of interface.

Examples:

```text
SiteHeader
SiteFooter
ArticleCard
FeatureStory
StoryList
ArticleMeta
ArticleBody
ImageFigure
PullQuote
SearchInterface
SearchResult
ArchiveList
CategoryNavigation
ThemeToggle
```

Do not create a component for every tiny HTML fragment. Create one when it provides meaningful reuse, logic, semantics, or visual identity.

## 6. Layouts

Layouts define larger page structures.

Possible initial layouts:

```text
BaseLayout
ArticleLayout
ArchiveLayout
CategoryLayout
```

Article presentation may later include controlled variants:

```text
StandardArticleLayout
LongformArticleLayout
VisualArticleLayout
ResearchArticleLayout
ExperimentalArticleLayout
```

Do not duplicate complete pages when only presentation changes.

## 7. Pages and Routing

Core routes:

```text
/
/writing
/writing/[slug]
/archive
/about
/search
```

Additional topic/category routes should be introduced only when justified by the content model.

URLs must remain stable and human-readable.

## 8. Content Collections

Use Astro's content system for structured writing content.

The content layer should validate the article schema and catch problems such as missing titles, invalid dates, missing types, missing slugs, invalid frontmatter, or malformed structured metadata.

Critical content errors should fail the build clearly.

## 9. Data Flow

Preferred flow:

```text
Content
  ↓
Validated schema
  ↓
Query / filter
  ↓
Page or layout
  ↓
Reusable components
  ↓
CSS / interaction
```

Components should not independently duplicate article data unnecessarily.

## 10. Styling Architecture

Use CSS custom properties / design tokens for shared values including:
- colors
- typography
- spacing
- borders
- layout widths
- transition durations
- layering / z-index

Conceptually:

```css
:root {
  --color-bg: ...;
  --color-text: ...;
  --font-display: ...;
  --font-body: ...;
  --space-1: ...;
}
```

Exact values are finalized during implementation and prototyping.

Avoid scattering arbitrary values across hundreds of selectors.

## 11. Responsive Architecture

The site must be intentionally designed across desktop, tablet, and mobile.

Prefer:
- fluid typography where appropriate
- flexible grids
- flexible image sizing
- CSS layout primitives
- intentional breakpoint changes

Avoid desktop-only assumptions, structural absolute positioning, and excessive breakpoint overrides.

## 12. Dark / Light Theme

Theme support should use semantic design tokens rather than duplicated pages.

Conceptually:

```text
semantic token
      ↓
light value
 dark value
```

Theme preference should persist where appropriate and should avoid an obvious incorrect-theme flash on initial load.

## 13. Images

Images are a first-class technical concern.

Consider:
- appropriate formats
- responsive sizing
- lazy loading for non-critical images
- eager loading only when justified
- meaningful alt text
- layout stability
- intentional cropping

Hero images and below-the-fold images may need different loading treatment.

## 14. Search Architecture

The first search implementation should remain lightweight.

For a static publication, search can use a generated search index plus client-side or lightweight search logic.

Do not introduce a server/database simply because a search box exists.

Initial indexed fields:
- title
- description/excerpt
- type
- topic
- article URL

## 15. JavaScript Philosophy

Use JavaScript intentionally.

Good reasons include:
- search behavior
- theme interaction
- navigation transitions
- progressive enhancement
- meaningful editorial interactions

Do not use client-side JavaScript to recreate standard HTML/CSS behavior.

The site should retain as much functionality as practical when JavaScript is unavailable.

## 16. Accessibility

Accessibility is a core requirement.

Use:
- semantic HTML
- logical heading hierarchy
- keyboard navigation
- visible focus states
- accessible labels
- semantic controls
- meaningful alt text
- sufficient color contrast
- reduced-motion support

Animations must respect `prefers-reduced-motion`.

Accessibility should be designed into components from the beginning.

## 17. SEO

Every public article should have appropriate:
- `<title>`
- meta description
- canonical URL
- Open Graph metadata
- social preview data where applicable
- semantic article metadata

The site should also provide a sitemap, robots configuration as appropriate, clean URLs, and correct heading structure.

SEO values should derive from content metadata by default, with controlled manual overrides.

## 18. Performance

Performance priorities:

1. Static HTML where possible
2. Minimal JavaScript
3. Optimized images
4. Efficient font loading
5. Limited third-party scripts
6. Avoid unnecessary dependencies
7. Prevent layout shift
8. Keep CSS intentional and maintainable

Do not sacrifice publication quality for arbitrary performance numbers, but do not add heavy technology without a clear reason.

## 19. Fonts

The final font strategy should support the editorial direction with a small, intentional font system.

Consider:
- licensing
- performance
- variable fonts where appropriate
- fallbacks
- loading behavior
- consistency

Exact font choices remain a design-system decision.

## 20. Dependency Philosophy

Every dependency should earn its place.

Before adding a package, determine whether the functionality can be handled cleanly with Astro, HTML, CSS, browser APIs, or small local utilities.

Avoid dependency accumulation simply because a package exists.

## 21. Third-Party Services

The first version should minimize external services.

Possible later services include analytics, newsletter, comments, external search, or CMS.

Do not introduce them preemptively.

## 22. Git Workflow

Recommended basic workflow:

```text
change
  ↓
run checks
  ↓
preview locally
  ↓
commit
  ↓
push
```

Commits should describe meaningful changes.

Do not commit generated secrets, private credentials, or unnecessary build output.

## 23. Secrets and Configuration

No credentials or secrets should be hard-coded into source files.

Use environment variables when future external services require secrets.

Public configuration and private secrets must remain separated.

## 24. Testing / Quality Checks

Before a feature is complete, verify at minimum:

- build succeeds
- routes work
- article content renders
- images load correctly
- mobile layout works
- keyboard navigation works
- theme switching works where present
- search works
- no obvious console errors
- no broken internal links

Automated checks can be introduced progressively.

## 25. Deployment

Initial deployment target:

```text
GitHub
   ↓
GitHub Actions
   ↓
Astro build
   ↓
GitHub Pages
```

The repository should produce the deployed build through automation rather than manually uploading generated files.

Custom domain support can be added later.

## 26. Local Development

The eventual development workflow should resemble:

```text
VS Code
  ↓
terminal
  ↓
npm install
  ↓
npm run dev
  ↓
local browser
  ↓
edit
  ↓
hot reload
```

Production verification should include the project's build command.

## 27. Architecture Boundaries

Keep these concerns separate:

```text
CONTENT
  ↓
CONTENT SCHEMA
  ↓
ROUTING
  ↓
LAYOUTS
  ↓
COMPONENTS
  ↓
DESIGN TOKENS / CSS
  ↓
CLIENT INTERACTION
```

Do not solve presentation problems by corrupting content data. Do not solve content problems by hard-coding article-specific data into components.

## 28. Future Extensibility

The architecture should leave room for:
- additional article types
- additional layouts
- better search
- newsletter integration
- analytics
- interactive essays
- project pages
- multimedia content
- custom editorial tools
- a future CMS

Future possibilities should not create unnecessary complexity in version one.

## 29. Technical North Star

> Static at the core. Flexible at the surface. Structured underneath. Minimal where possible. Powerful where necessary.

The site should be understandable and modifiable from VS Code without becoming dependent on a complicated stack.

## 30. Current Decision Boundary

Technical direction is established, but exact packages, search library, font loading method, Astro integrations, and deployment configuration should be finalized during the project-specification / implementation stage.

Do not let an agent make these decisions arbitrarily without reference to this architecture.
