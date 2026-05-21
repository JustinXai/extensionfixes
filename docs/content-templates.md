# Content Templates — ExtensionFixes

## Overview

ExtensionFixes uses five standardized page templates. Every new content page is created by adding a data record — **not** by modifying route files.

| Template | Route | File |
|---|---|---|
| Alternative | `/alternatives/[slug]` | `src/components/templates/AlternativePageTemplate.tsx` |
| Fix | `/fix/[slug]` | `src/components/templates/FixPageTemplate.tsx` |
| Guide | `/guides/[slug]` | `src/components/templates/GuidePageTemplate.tsx` |
| Comparison | `/comparisons/[slug]` | `src/components/templates/ComparisonPageTemplate.tsx` |
| Collection | `/guides/[slug]` (templateType: `collection`) | `src/components/templates/CollectionPageTemplate.tsx` |

---

## Workflow: Add a New Page

### Step 1 — Choose `templateType`

- Is it an extension/tool alternatives page? → `alternative`
- Is it a browser error/fix page? → `fix`
- Is it a thematic hub/guide? → `guide`
- Is it an A vs B comparison? → `comparison`
- Is it a best-N list? → `collection`

### Step 2 — Add Data Record

| templateType | Data file |
|---|---|
| `alternative` | `src/data/extensions.ts` |
| `fix` | `src/data/errors.ts` |
| `guide` | `src/data/landingPages.ts` |
| `comparison` | `src/data/comparisons.ts` |
| `collection` | `src/data/landingPages.ts` with `templateType: 'collection'` |

Add a single record. All five templates require these base fields on every record:

```
templateType    — string (required)
slug            — string (must be unique across ALL data files)
title           — string
metaTitle       — string
metaDescription — string
quickAnswer     — string (or shortAnswer for alternative pages)
lastUpdated     — string (YYYY-MM-DD)
faqs            — array (>= 5 items)
sources         — array (>= 2 items)
```

### Step 3 — Run Validations

```bash
npm run lint
npm run build
npm run review
npm run check:local:text
```

### Step 4 — Deploy

```bash
vercel --prod
```

### Step 5 — Production QA

```bash
npm run check:prod:text
```

### Step 6 — Submit to GSC

Only submit the URL in Google Search Console after `check:prod:text` shows **0 FAIL**.

---

## Template Checklists

### Alternative Page Checklist

- [ ] `slug` — unique, kebab-case, matches filename
- [ ] `shortAnswer` or `quickAnswer` — at least 80 words
- [ ] `whatHappened` — array, at least 2 items
- [ ] `migrationSteps` — array, at least 2 items
- [ ] `keyTakeaways` — array, at least 3 items
- [ ] `currentStatus` — array, at least 3 `{label, value}` entries
- [ ] `commonFailedFixes` — array, at least 3 entries
- [ ] `faqs` — array, at least 5 `{question, answer}` entries
- [ ] `sources` — array, at least 2 items, no duplicate titles
- [ ] `lastUpdated` — string, ISO date
- [ ] No forbidden claims in any text field
- [ ] Decision guide title is "Who Should Choose Which Option" (not "Which Option Should You Choose")
- [ ] Failed fixes section title is "Common Failed Fixes" (not "Common Mistakes to Avoid")

### Fix Page Checklist

- [ ] `slug` — unique
- [ ] `quickAnswer` — at least 80 words
- [ ] `whyItHappens` — array, at least 2 items
- [ ] `whatYouCanDo` — array, at least 2 items
- [ ] `whatNotToDo` — array, at least 2 items
- [ ] `keyTakeaways` — array, at least 3 items
- [ ] `currentStatus` — array, at least 3 entries
- [ ] `commonFailedFixes` — array, at least 3 entries
- [ ] `relatedExtensionSlugs` — array, at least 2 valid slugs from extensions.ts
- [ ] `faqs` — array, at least 5 entries
- [ ] `sources` — array, at least 2 items, no duplicate titles
- [ ] `lastUpdated` — ISO date
- [ ] No forbidden claims

### Guide Page Checklist

- [ ] `slug` — unique
- [ ] `quickAnswer` — at least 80 words
- [ ] `keyTakeaways` — array, at least 3 items
- [ ] `currentStatus` — array, at least 3 entries
- [ ] `comparisonTable` or `mainComparison` — array, at least 3 rows (if applicable)
- [ ] `decisionGuide` — array, at least 2 items (if applicable)
- [ ] `faqs` — array, at least 5 entries
- [ ] `sources` — array, at least 2 items
- [ ] `lastUpdated` — ISO date

### Comparison Page Checklist

- [ ] `slug` — unique
- [ ] `quickAnswer` — at least 80 words
- [ ] `comparedItems` — exactly 2 or 3 strings
- [ ] `verdict` — string, uses "best for X" language, no "winner"
- [ ] `keyDifferences` — array, at least 3 items
- [ ] `comparisonTable` — array, at least 3 rows
- [ ] `decisionGuide` — array, at least 3 items
- [ ] `faqs` — array, at least 5 entries
- [ ] `sources` — array, at least 2 items
- [ ] `lastUpdated` — ISO date

### Collection Page Checklist

- [ ] `slug` — unique
- [ ] `quickAnswer` — at least 80 words
- [ ] `selectionCriteria` — array, at least 3 items explaining why options were chosen
- [ ] `options` — array, at least 3 items with `{name, bestFor, pros, cons}`
- [ ] `comparisonTable` — array, at least 3 rows (recommended)
- [ ] `faqs` — array, at least 5 entries
- [ ] `sources` — array, at least 2 items
- [ ] `lastUpdated` — ISO date

---

## Forbidden Claims

These phrases must not appear in any page content:

| Phrase | Why forbidden |
|---|---|
| `official successor` | Implies endorsement; rarely accurate |
| `safest` | Subjective superlative; unverifiable |
| `guaranteed fix` | Overstates reliability |
| `feature parity` | Rarely true; use specific trade-off language |
| `full feature parity` | Same as above |
| `fully equivalent` | Overclaim |
| `equivalent replacement` | Overclaim |
| `privacy-conscious users` | Use "Users who prefer open-source tooling" |
| `full open-source transparency` | Use "Users who prefer transparent extension code" |

---

## Forbidden Section Titles

These section titles are legacy and must not be used in new templates:

- ~~At a Glance~~ — use Current Status
- ~~Common Mistakes to Avoid~~ — use Common Failed Fixes
- ~~Which Option Should You Choose~~ — use Who Should Choose Which Option
- ~~AI Summary~~ — do not use
- ~~Summary for AI Assistants~~ — do not use

---

## Source Requirements

- Every page must have at least 2 sources.
- Source titles must be unique within a page.
- Source URLs must be unique within a page.
- At least one source should have `reliability: 'primary'`.
- `reliability: 'discovery'` sources should not be used as safety proof.
- Sources are rendered by `SourceList.tsx` which auto-deduplicates by title.

---

## Cursor Daily Content Workflow

When adding daily content:

1. Pick the correct `templateType` for the page.
2. Add one record to the correct data file (`extensions.ts`, `errors.ts`, `landingPages.ts`, or `comparisons.ts`).
3. **Do not modify route files** (`src/app/alternatives/[slug]/page.tsx`, etc.) — route files delegate to templates and should not need changes.
4. If a new page needs special metadata, add an entry to the page-level `meta` config (e.g., `extensionMeta` in `alternatives/[slug]/page.tsx`).
5. Run: `npm run lint && npm run build && npm run review && npm run check:local:text`
6. Deploy: `vercel --prod`
7. Run: `npm run check:prod:text`
8. Submit in GSC only after 0 FAIL.

---

## Existing Templates vs New Templates

| Old (inline) | New (template) | Status |
|---|---|---|
| `alternatives/[slug]/page.tsx` | `AlternativePageTemplate.tsx` | **Migrated** |
| `fix/[slug]/page.tsx` | `FixPageTemplate.tsx` | **Migrated** |
| `guides/[slug]/page.tsx` | `GuidePageTemplate.tsx` | Uses `LandingPageTemplate` — planned |
| `/comparisons/[slug]` | `ComparisonPageTemplate.tsx` | **Route ready, no data yet** |
| `/guides/[best-xxx]` | `CollectionPageTemplate.tsx` | **Template ready, no data yet** |
