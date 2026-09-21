# JAI-BLOG — DESIGN DIRECTION v1

Status: Working direction derived from the inspiration collection. This is not the final Codex specification.

## 01. Core Identity

JAI-BLOG is a contemporary digital editorial journal: a personal publication for ideas, essays, research, observations, creative work, and curated thinking.

The site should feel like a publication someone entered, not a template someone filled.

Primary character:
- Intelligent
- Cultured
- Artistic
- Quietly dramatic
- Curious
- Human
- Deliberately curated

Conceptual territory:
Editorial publication × literary journal × art/cultural magazine × personal intellectual archive.

## 02. Design Thesis

The site should achieve sophistication through hierarchy, composition, typography, imagery, whitespace, and restraint—not through decorative UI effects.

The design should feel authored. Components may be reusable, but the resulting pages must not feel component-assembled.

## 03. Seven Design Principles

### 1. Editorial Authority
Content is presented as curated material with clear hierarchy and intentional sequencing.

### 2. Typographic Personality
Typography is a primary visual system. Display typography should carry emotion and editorial authority; utility typography should provide structural clarity.

### 3. Controlled Asymmetry
Layouts may break the ordinary grid when doing so strengthens hierarchy or meaning. Asymmetry must feel intentional, never accidental.

### 4. Visual Silence
Whitespace is an active design element. Dense information should be balanced by periods of visual quiet.

### 5. Art-Directed Imagery
Images are editorial material, not decorative thumbnails. Scale, crop, aspect ratio, placement, and captions all matter.

### 6. Restrained Interaction
Motion should guide attention, establish rhythm, reveal information, or communicate state. It must never exist merely because animation is possible.

### 7. Publication Coherence
The whole website should feel like one publication, while individual pages and article types may have distinct compositions.

## 04. Homepage Direction

The homepage should behave like an editorial table of contents or curated issue rather than a conventional blog feed.

Desired qualities:
- Strong featured-story hierarchy
- Clear distinction between major and minor stories
- Alternation of dense and quiet sections
- Typography-led section introductions
- Editorial grids and asymmetric compositions where useful
- Visual interruptions using imagery or large type
- Avoid repetitive identical cards

The homepage should not become a vertical stack of interchangeable content cards.

## 05. Article System Direction

Articles should be content-first but presentation-flexible.

The architecture should support multiple layouts without duplicating content:
- Standard Essay
- Longform
- Visual Essay
- Research / Analysis
- Experimental

Content should remain independent from presentation.

Conceptual architecture:
Structured Content → Layout → Components → Design System

An article's layout should be selected through structured metadata rather than manually rebuilding pages.

## 06. Typography Direction

Typography should create the primary editorial voice.

Desired hierarchy:
- Expressive serif or equivalent editorial display face for major headings/titles
- Restrained sans-serif or equivalent utility face for navigation, metadata, controls, and supporting information
- Strong contrast between display and utility roles
- Large, confident display scales where appropriate
- Comfortable long-form reading measure
- Carefully controlled tracking, leading, and paragraph rhythm

Avoid choosing fonts merely because they are fashionable. The final type system must be evaluated for hierarchy, readability, character, and performance.

## 07. Navigation Direction

Default navigation should be quiet, legible, and highly usable.

Interaction states may become more expressive and editorial.

The system should support:
- Clear primary navigation
- Search access
- Category/topic access
- Strong mobile navigation
- Subtle but deliberate transitions

Do not sacrifice discoverability for cleverness.

## 08. Archive Direction

The archive should feel like a catalogue of the body of work, not a database dump.

Potential organizing concepts:
- Year
- Month
- Category
- Type
- Chronological sequence

The final archive should combine functional discoverability with editorial visual identity.

## 09. Search Direction

Search is both a utility and a possible signature interaction.

The experience may transform spatially or typographically when activated, but the core priorities remain:
1. Fast access
2. Clear query state
3. Useful results
4. Readable result hierarchy
5. Easy exit/reset

Animation must remain subordinate to usability.

## 10. Content Modules / Cards

Avoid a single universal card used everywhere.

The component system should support a family of editorial modules, for example:
- Feature
- Editorial Tile
- Compact Story
- Image Story
- Text Story
- List Story
- Numbered Story

These should share the same underlying content model while allowing different visual compositions.

## 11. Image Direction

Images should function as editorial punctuation and narrative material.

Support intentionally varied:
- Aspect ratios
- Crops
- Scale
- Full-bleed moments
- Editorial grids
- Captions
- Image/text pairings

Do not force every image into a uniform card ratio.

## 12. Dark Mode Direction

Dark mode should feel like a distinct atmospheric edition of the publication, not simply inverted colours.

The future system should consider:
- Soft off-black / near-black surfaces where appropriate
- Comfortable text contrast
- Muted secondary text
- Image behaviour
- Borders and dividers
- Accent treatment

The dark palette must preserve the same editorial character as light mode.

## 13. Motion Direction

Motion vocabulary should be restrained and purposeful.

Potential uses:
- Page transitions
- Image reveals
- Text reveals
- Hover states
- Navigation transitions
- Search transformation
- Scroll-linked emphasis where justified

Avoid:
- Constant movement
- Decorative animation everywhere
- Slow interactions that obstruct reading
- Motion that harms accessibility or performance

## 14. Responsive Direction

Mobile must be treated as an authored composition, not merely a collapsed desktop layout.

The system should preserve:
- Typographic hierarchy
- Editorial rhythm
- Image personality
- Clear navigation
- Readable long-form text

Responsive rules should be designed intentionally for desktop, tablet, and mobile.

## 15. Anti-Patterns

Do not drift toward:
- Generic WordPress blog aesthetics
- Repetitive template card grids
- Excessive rounded-corner UI
- SaaS/dashboard visual language
- Decorative gradients without purpose
- Glassmorphism by default
- Excessive animation
- Arbitrary font variety
- Novelty layouts that damage readability
- A visual style that changes radically from page to page

The site should never feel like it is trying to prove that it is creative.

## 16. Current Working Direction

Working label: Contemporary Editorial Journal

Influence blend:
- Contemporary editorial design
- Literary publication
- Art/cultural magazine
- Digital archive
- Modern web interaction

This label is descriptive, not a final brand name.

## 17. What Is Deliberately NOT Decided Yet

Do not prematurely lock:
- Exact typefaces
- Final colour palette
- Exact grid measurements
- Breakpoints
- Exact homepage section order
- Exact navigation behaviour
- Exact animation timings
- Final logo/wordmark treatment
- Final category taxonomy
- Final article layouts

These should be decided in the next design-system and information-architecture passes.

## 18. Next Design Decisions

1. Define the visual design system: type roles, scale, spacing, grid, colour, borders, imagery rules, interaction states.
2. Define the information architecture: pages, navigation, archive, categories, search, article taxonomy.
3. Define the content model: article metadata, images, authorship, categories, tags, layout variants.
4. Define the technical architecture for Astro and the component/content structure.
5. Combine all of the above into the Master Product + Design + Technical Specification.
6. Convert the specification into the project AGENTS.md used by Codex.

## 19. Non-Negotiable Architectural Principle

Content must never become trapped inside the visual design.

The website should be able to change typography, layouts, components, page compositions, and visual treatments without requiring the underlying article content to be rewritten.
