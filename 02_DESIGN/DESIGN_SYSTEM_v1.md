# JAI-BLOG — DESIGN SYSTEM v1

Status: Working design system derived from the inspiration analysis and DESIGN_DIRECTION.md.
This is an implementation-ready direction, not yet the final Codex specification.

## 01. System Philosophy

The design system should create consistency without making every page look identical.

Core rule:

> Consistency belongs in the rules; variation belongs in the composition.

Reusable components, type roles, spacing, colour tokens, image behaviour, and motion vocabulary should remain coherent while individual pages can compose them differently.

The system should feel editorial rather than component-library-first.

---

## 02. Visual Vocabulary

Primary qualities:
- Editorial
- Literary
- Cultured
- Art-directed
- Quietly dramatic
- Precise
- Human
- Contemporary

Avoid visual language associated primarily with:
- SaaS dashboards
- startup landing pages
- generic blogging templates
- excessive rounded UI
- decorative glassmorphism
- gratuitous gradients
- noisy motion

---

## 03. Typography System

### Role architecture

Use a two-family system unless a later typography study proves a better alternative:

1. Display family
   - Major article titles
   - Homepage feature headlines
   - Section statements
   - Large editorial moments

2. Utility family
   - Navigation
   - Metadata
   - Categories
   - Controls
   - Search UI
   - Captions where appropriate

### Typographic principle

The contrast between the two roles is more important than the specific font names.

Display type should communicate personality, authority, and literary character.
Utility type should communicate clarity, neutrality, and structure.

### Hierarchy

The implementation should define named roles rather than arbitrary font sizes scattered through components:

- Display XL
- Display L
- Display M
- Heading L
- Heading M
- Heading S
- Body L
- Body M
- Body S
- Label
- Metadata
- Caption

### Long-form reading

Body text must prioritize:
- comfortable line length
- generous line-height
- clear paragraph rhythm
- strong contrast
- excellent readability on mobile

Do not optimize article text for maximum density.

---

## 04. Layout System

The site should use a responsive editorial grid rather than a rigid card grid.

### Layout principles

- Establish a strong page frame.
- Allow content to occupy different spans within that frame.
- Use asymmetric placement deliberately.
- Preserve alignment anchors even when compositions become unusual.
- Allow large empty areas when they improve rhythm.
- Avoid placing every section inside the same bordered container.

### Conceptual layout roles

- Full-width
- Wide
- Reading column
- Editorial column
- Split composition
- Multi-column grid
- Offset composition
- Full-bleed image

Exact measurements should be tuned during implementation and visual QA rather than guessed now.

---

## 05. Spacing System

Whitespace is a primary design material.

Use a consistent spacing scale rather than arbitrary one-off margins.

Conceptual tokens:

- 1 — micro
- 2 — tight
- 3 — compact
- 4 — standard
- 5 — relaxed
- 6 — section
- 7 — dramatic
- 8 — structural

The larger spacing values should be used strategically around major editorial transitions.

Spacing must communicate hierarchy:

small gap → related elements
medium gap → separate information groups
large gap → new editorial beat
very large gap → major visual pause

---

## 06. Colour System

The palette should remain restrained and editorial.

### Light mode roles

- Canvas
- Surface
- Primary text
- Secondary text
- Muted text
- Border/divider
- Accent
- Accent-contrast

### Dark mode roles

- Dark canvas
- Dark surface
- Primary light text
- Secondary light text
- Muted light text
- Dark divider
- Accent
- Accent-contrast

Do not define colours by component. Define semantic colour roles so themes can evolve without rewriting components.

### Accent philosophy

Accent colour should be used sparingly for:
- links
- active states
- key metadata
- subtle highlights
- selected interaction states

The accent must never overpower the editorial hierarchy.

The exact palette remains provisional until the visual identity pass.

---

## 07. Borders, Rules & Dividers

Dividers should behave like editorial rules rather than UI decoration.

Preferred qualities:
- thin
- restrained
- aligned to content structure
- used to separate editorial groups

Avoid excessive card borders.

---

## 08. Image System

Images must support editorial hierarchy.

Supported presentation modes:

- Hero image
- Full-bleed image
- Editorial portrait
- Landscape feature
- Compact thumbnail
- Image-text split
- Image sequence
- Gallery

### Cropping

Cropping should be intentional and context-aware.

Do not globally force one aspect ratio for all images.

### Image treatment

The default image treatment should remain clean and authentic.

Effects such as overlays, monochrome treatments, colour grading, or masking should only appear where they contribute to a specific editorial purpose.

---

## 09. Content Modules

There should be a family of modules rather than a single universal card.

Initial conceptual set:

- Feature
- Editorial Tile
- Compact Story
- Image Story
- Text Story
- Numbered Story
- List Story
- Quote / Statement
- Section Intro

Modules should consume structured content and expose presentation options.

They should not contain duplicated article data.

---

## 10. Component Principles

A component should exist because it represents a repeatable design behaviour, not merely because a chunk of HTML can be extracted.

Components should be:
- reusable
- composable
- accessible
- responsive
- visually coherent
- independently testable where practical

Avoid creating dozens of tiny components that obscure the editorial structure.

---

## 11. Navigation System

Base navigation:
- quiet
- legible
- compact enough not to dominate
- immediately understandable

Expanded/mobile navigation may become more expressive.

Required states:
- default
- hover
- focus
- active
- expanded
- mobile

Keyboard and screen-reader access must be first-class requirements.

---

## 12. Search System

Search should have two layers:

### Utility layer
Fast, obvious, readable, functional.

### Editorial layer
The activated state may become spatially or typographically expressive.

Required states:
- idle
- active
- typing
- results
- no results
- clear/reset
- keyboard interaction

Animation must never block search use.

---

## 13. Archive System

The archive should support both discovery and catalogue feeling.

Potential metadata:
- year
- month
- category
- content type
- title
- date

Visual presentation can vary by archive section while remaining recognizable as one system.

---

## 14. Dark Mode System

Dark mode is a full theme, not a filter.

Principles:
- preserve hierarchy
- maintain comfortable contrast
- protect image quality
- soften extreme black/white relationships where appropriate
- preserve accent logic
- keep the same editorial identity

Theme switching should not cause layout shifts.

---

## 15. Motion System

Motion vocabulary should be small and reusable.

Primary motion roles:
- reveal
- enter
- exit
- transform
- emphasis
- navigation transition

Motion should be:
- quick enough to preserve responsiveness
- subtle enough not to distract from reading
- consistent across equivalent interactions
- disabled/reduced when user preferences request reduced motion

Do not attach custom animation to every component.

---

## 16. Responsive System

Responsive behaviour should be composition-aware.

### Desktop
Highest compositional freedom.

### Tablet
Reduce complexity while preserving hierarchy.

### Mobile
Recompose rather than merely stack.

Rules:
- preserve display hierarchy
- preserve reading comfort
- simplify navigation intentionally
- reduce decorative complexity before reducing content clarity
- keep image crops deliberate
- never allow horizontal overflow

Exact breakpoints are an implementation decision and must be validated against actual content.

---

## 17. Accessibility Baseline

Accessibility is part of the design system, not post-production polish.

Required baseline:
- semantic HTML
- visible keyboard focus
- sufficient colour contrast
- logical heading hierarchy
- descriptive image alternatives where needed
- reduced-motion support
- usable interactive target sizes
- search and navigation accessible without relying solely on hover

---

## 18. Design Token Strategy

All recurring visual values should eventually be represented through named tokens.

Token categories:

- typography
- colour
- spacing
- layout
- radius
- border
- shadow
- motion
- z-index

Prefer semantic names such as:

`color.text.primary`
`color.surface.canvas`
`space.section.large`
`type.display.xl`
`motion.transition.editorial`

rather than component-specific names such as:

`homepageCardTitleBlue`

This keeps the system adaptable.

---

## 19. Current Decisions vs Open Decisions

### Decided
- Two-role typographic system
- Restrained editorial palette philosophy
- Responsive editorial grid
- Semantic colour roles
- Varied image treatment
- Multiple editorial modules
- Purposeful motion
- Full dark theme
- Accessibility baseline
- Content/presentation separation

### Still open
- Exact font families
- Exact type scale values
- Exact colour hex values
- Exact grid dimensions
- Exact spacing values
- Exact breakpoints
- Exact border weights
- Exact corner/radius policy
- Exact motion durations/easing
- Final accent colour

These decisions should be made during visual prototyping and implementation, not invented inside the final Codex prompt without testing.

---

## 20. Non-Negotiable Design Rules

1. Do not make everything a card.
2. Do not use typography as decoration at the expense of reading.
3. Do not introduce visual effects without a communicative purpose.
4. Do not make every page look identical.
5. Do not let experimental composition break usability.
6. Do not let mobile become an afterthought.
7. Do not hard-code design decisions into individual components when a semantic token should control them.
8. Do not allow the design system to become generic in pursuit of reuse.
9. Do not copy a reference; extract the principle behind it.
10. Preserve the feeling of a designed publication throughout the entire system.
