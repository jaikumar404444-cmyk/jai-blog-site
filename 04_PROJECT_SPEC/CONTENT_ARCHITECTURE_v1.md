# JAI-BLOG — CONTENT ARCHITECTURE v1

## 1. Purpose

The content architecture defines how JAI-BLOG stores, describes, organizes, and presents its written work.

Core principle:

> Write once. Structure cleanly. Present flexibly.

An article's content and metadata must remain independent from its visual presentation.

---

## 2. Canonical Content Unit

The primary publishing unit is an **Article**.

Each article should have:

- unique ID where useful internally
- title
- slug
- publication date
- article type
- topic/category
- excerpt or deck
- body content
- optional cover/hero image
- optional supporting images
- optional references
- optional related articles
- optional custom presentation/layout
- optional SEO metadata

Not every field must be visible on the page.

---

## 3. Article Frontmatter

The content system should support structured frontmatter similar to:

```yaml
---
title: "Article Title"
slug: "article-title"
description: "Short description of the article."
date: 2026-09-12
type: "essay"
topic: "literature"
featured: false
draft: false
hero:
  src: "/images/article-title/hero.jpg"
  alt: "Description of the image"
layout: "standard"
---
```

The exact schema may evolve during implementation.

---

## 4. Required vs Optional Metadata

### Required

- `title`
- `date`
- `type`
- `slug`
- `draft`

### Strongly recommended

- `description`
- `topic`

### Optional

- `featured`
- `hero`
- `layout`
- reading-time override
- SEO title
- SEO description
- social image
- references
- related articles
- custom theme flags

The implementation should validate required fields.

---

## 5. Article Types

The initial content types are:

### Essay

Personal, literary, reflective, or argumentative long-form writing.

### Research

Evidence-led writing with sources, references, and stronger structural organization.

### Analysis

Interpretive, critical, explanatory, or analytical work.

### Visual Essay

Work in which images and visual sequencing are an important part of the argument or experience.

### Experimental

Work that intentionally breaks conventional article structure.

These types should influence presentation without creating separate content systems.

---

## 6. Body Content

The body should be authored primarily in Markdown with MDX available when richer composition is genuinely necessary.

Basic content should remain simple:

- paragraphs
- headings
- lists
- quotations
- links
- emphasis
- images

MDX components may support richer editorial elements such as:

- pull quotes
- image spreads
- image galleries
- captions
- callouts
- footnotes
- comparison blocks
- interactive elements
- special typography

Rule:

> MDX should enhance editorial expression, not turn ordinary writing into a pile of custom markup.

---

## 7. Headings and Structure

Articles should support a consistent semantic heading hierarchy.

Conceptually:

```text
H1 — Article title

H2 — Major section

H3 — Subsection
```

The article body should not depend on visual font sizes being manually selected.

Visual hierarchy belongs to the design system.

---

## 8. Images

Images are first-class content assets.

An article may include:

- hero image
- inline image
- image sequence
- gallery
- full-bleed image
- captioned image
- decorative image where editorially justified

Each meaningful image should have appropriate alternative text.

Image metadata may include:

- source
- photographer/creator
- copyright/credit
- caption
- alt text
- focal point where needed
- display treatment

---

## 9. References and Sources

Research-oriented content should support references without forcing every essay to look academic.

A future structured reference system may include:

- source title
- author
- publication
- date
- URL where applicable
- access date where needed
- notes

The visual treatment should remain consistent with the publication's editorial identity.

---

## 10. Related Content

Articles may link to related work.

Relationships should be based on meaningful connections such as:

- same topic
- same type
- manually selected related articles
- thematic relationship

Manual selection should be supported because editorial judgement is more valuable than blindly automated recommendations.

---

## 11. Featured Content

An article may be marked as `featured`.

Featured status is a publishing decision, not a permanent content type.

Featured content may appear:

- prominently on Home
- in selected sections
- occasionally in category/topic pages

The same article should still function normally in the Writing index and Archive.

---

## 12. Drafts

Articles should support a draft state.

Draft content:

- must not appear in public indexes
- must not appear in search
- must not appear in Archive
- should be usable during development

This allows articles to be written and previewed before publication.

---

## 13. Publishing Dates

The publication date should represent the canonical publication date.

The system may later support:

- updated date
- revision history
- scheduled publication

but these are not required for the first version.

---

## 14. Slugs and URLs

Every published article should have a stable slug.

Recommended pattern:

`/writing/article-slug`

Slugs should be:

- lowercase
- readable
- stable
- based on the article title unless there is a good editorial reason otherwise

Changing a slug after publication should be treated as a deliberate URL migration rather than an ordinary edit.

---

## 15. Taxonomy

Keep taxonomy intentionally small.

Initial primary dimensions:

### Type

Essay / Research / Analysis / Visual Essay / Experimental

### Topic

A meaningful subject area derived from the actual body of work.

### Tags

Tags should only be introduced when they provide genuine discovery value.

Avoid creating dozens of micro-tags.

Rule:

> Taxonomy should help readers discover work, not describe every possible characteristic of it.

---

## 16. Content File Organization

A scalable conceptual structure:

```text
src/
└── content/
    └── writing/
        ├── article-one.md
        ├── article-two.md
        └── article-three.mdx
```

Images should remain organized separately from article files where practical:

```text
public/
└── images/
    └── article-one/
        ├── hero.jpg
        ├── image-01.jpg
        └── image-02.jpg
```

The final Astro content-collection implementation may refine this structure.

---

## 17. Presentation Independence

An article's content should never require a specific visual component to remain valid.

Conceptually:

```text
ARTICLE CONTENT
      ↓
STRUCTURED METADATA
      ↓
ARTICLE TYPE
      ↓
LAYOUT
      ↓
COMPONENTS
      ↓
DESIGN SYSTEM
```

This permits redesigning the site without rewriting the publication itself.

---

## 18. Editorial Layout Selection

The content system may expose a controlled `layout` field.

Examples:

```text
standard
longform
visual
research
experimental
```

The layout should be interpreted by the rendering system.

Authors should not manually encode CSS or visual positioning into ordinary article content.

---

## 19. SEO / Social Metadata

The content system should eventually support:

- canonical URL
- SEO title
- SEO description
- social sharing image
- structured article metadata

Defaults should be derived from normal article fields whenever possible.

Manual overrides should exist for articles that require them.

---

## 20. Reading Time

Reading time may be calculated automatically from article text.

A manual override may be supported for unusual formats.

Reading time should remain a secondary convenience, not a dominant visual element.

---

## 21. Future Content Types

The architecture should leave room for future formats without requiring a rewrite.

Possible future directions:

- interview
- review
- poem
- notes
- project case study
- curated collection
- multimedia piece

These should be added only when real content needs emerge.

---

## 22. Content Quality Rules

The publishing system should encourage:

- meaningful titles
- useful descriptions
- valid image alt text
- clean semantic structure
- stable URLs
- deliberate categories
- proper source attribution where required

It should not encourage metadata for metadata's sake.

---

## 23. Core Content Philosophy

JAI-BLOG is not a database of posts.

It is a growing body of authored work.

Therefore:

> Structure the content rigorously enough for the system to scale, but loosely enough for the writing to remain human.

The CMS/content layer should stay invisible to the reader. The reader experiences the publication; the architecture supports it underneath.
