# JAI-BLOG — INFORMATION ARCHITECTURE v1

## 1. Purpose

JAI-BLOG is a personal digital publication / editorial journal rather than a conventional chronological blog.

The information architecture should make the writing feel like a coherent body of work while remaining simple to navigate.

Core principle:

> The reader should be able to discover, read, browse, and return to work without feeling trapped inside a conventional blog template.

## 2. Primary Navigation

The primary navigation should stay small and memorable.

Initial top-level destinations:

- Home
- Writing
- Archive
- About
- Search

The navigation may later expose categories or thematic areas, but these should not compete with the primary destinations.

## 3. Home

Purpose: establish the publication's identity and guide the reader toward the most important work.

The homepage is not a feed. It should be an editorial composition containing a changing selection of content.

Possible content zones:

1. Publication identity / introduction
2. Featured piece
3. Selected or recent writing
4. Secondary editorial stories
5. Research / special work
6. Additional discovery area
7. Footer / site navigation

Exact section count and ordering remain subject to visual prototyping.

Rule:

> The homepage should curate attention rather than display everything.

## 4. Writing

`/writing`

Purpose: the primary index of published written work.

It should allow readers to browse the body of writing without requiring them to understand the author's internal organization first.

Potential filters:

- Type
- Topic
- Year
- Search

The page should support both visual discovery and efficient scanning.

## 5. Article

Each article receives its own URL.

Suggested structure:

`/writing/[slug]`

An article may contain:

- category/type
- title
- deck or subtitle
- author
- publication date
- estimated reading time where useful
- hero image where appropriate
- body content
- headings
- links
- quotations / pull quotes
- captions
- related work
- article navigation
- footer

The article presentation is allowed to vary by article type.

## 6. Article Types

The content system should support multiple presentation modes without duplicating the underlying content.

### Essay
Long-form personal or literary writing.

### Research
Research-driven work with stronger source/reference structure.

### Analysis
Argument, interpretation, criticism, or analytical writing.

### Visual Essay
Writing where imagery and visual sequencing are central.

### Experimental
Unusual or art-directed work that does not fit a conventional article structure.

These are content/presentation categories, not separate websites.

## 7. Archive

`/archive`

Purpose: present the full body of published work as a catalogue.

The archive should prioritize chronology and long-term discoverability.

Possible organization:

- Year
- Month
- Title
- Type
- Topic

The archive should remain useful even after dozens or hundreds of articles exist.

Design principle:

> The archive should feel like a publication index, not a database dump.

## 8. Topics / Categories

Categories should exist only where they genuinely improve discovery.

They should not become an elaborate taxonomy.

A future category could contain:

- category introduction
- featured work
- complete related work
- related topics

Potential themes may emerge naturally from the author's actual writing rather than being invented in advance.

## 9. Search

`/search`

Purpose: fast discovery across the publication.

Search should eventually support:

- title
- excerpt / summary
- topic
- type
- tags where justified

The visual interaction can be expressive, but the underlying experience must remain fast and understandable.

Search results should link directly to the canonical article URLs.

## 10. About

`/about`

Purpose: explain who is behind the publication and what the publication is about.

Potential sections:

- short author statement
- publication philosophy
- interests / areas of work
- selected work
- contact / relevant links

The page should remain editorial rather than becoming a conventional resume page unless that is deliberately introduced later.

## 11. Footer

The footer is a persistent secondary navigation layer.

It may contain:

- site navigation
- archive
- search
- about
- social / external links where appropriate
- copyright
- small publication statement

It should remain visually quiet.

## 12. Reader Journeys

### Discovery

Home → Featured work → Article → Related work

### Browsing

Home → Writing → Filter / browse → Article

### Returning to older work

Home → Archive → Year / Month → Article

### Searching

Any page → Search → Results → Article

### Learning about the author

Any page → About

The system should always provide a clear next step without aggressively forcing the reader through a funnel.

## 13. URL Philosophy

URLs should be:

- short
- readable
- stable
- descriptive
- independent of visual layout

Recommended patterns:

`/`
`/writing`
`/writing/article-slug`
`/archive`
`/about`
`/search`

Categories or topics should receive dedicated URLs only when they become useful enough to justify them.

## 14. Content vs Presentation

This is a core architectural rule.

The content model must not depend on the current visual layout.

Conceptually:

Content
→ metadata
→ article type
→ layout selection
→ reusable components
→ visual system

Changing the article design should not require rewriting the article itself.

## 15. Scalability

The initial site may have only a small number of articles, but the IA must remain valid when the publication has:

- 10 articles
- 50 articles
- 100+ articles

The archive, search, filtering, and category structures should therefore be designed as systems rather than one-off pages.

## 16. What Is Deliberately Not Decided Yet

The following remain open until later phases:

- final category names
- exact homepage section order
- exact article layouts
- exact search interaction
- whether every article type gets a distinct visual layout
- whether tags are necessary
- whether a newsletter is included
- whether comments are included
- exact external/social destinations
- future interactive or experimental pages

These should be decided from actual content needs, not invented simply to make the site appear feature-rich.

## 17. Core IA Principle

> JAI-BLOG should feel like a coherent publication with multiple doors into the work: curated discovery through Home, efficient browsing through Writing and Archive, direct discovery through Search, and context through About.
