# Content Playbook

## MUST

- Every page must have a unique H1 that matches the primary search query intent.
- Every page must answer the user's question in the first 300 words without requiring a scroll.
- Every page must include an FAQ section with at least 3 questions derived from "People Also Ask" and related searches.
- Every extension page must include the EPSB block as specified in the Product Constitution.
- Every content claim must be tagged with a Source Tier (T1/T2/T3) per the Product Constitution.
- Every page must be reviewed against the SEO AI Readable Checklist before publishing.
- Every page must have its `lastmod` date updated in the sitemap when content changes.

## SHOULD

- Target word count: 800–1500 words for extension pages, 1200–2000 words for tool pages and guides.
- Use short paragraphs (2–4 sentences max). Use `<ul>` and `<ol>` for lists of more than 3 items.
- Use `<blockquote>` for direct quotes or important callouts. Use `<strong>` sparingly — only for truly critical warnings.
- Include at least one image (extension icon or screenshot) with descriptive `alt` text.
- Link out to authoritative sources (Chrome Web Store, AMO, official blogs) — outbound links to T1 sources signal credibility.
- Internal links should appear at least 3 times per 1000 words.

## NEVER

- Never publish without running the SEO AI Readable Checklist (docs/03-seo-ai-readable-checklist.md).
- Never change the H1 after a page is indexed — if intent shifts, create a new page.
- Never remove a page from the index without a 301 redirect to its nearest replacement.
- Never pad word count with fluff — every paragraph must advance the user's understanding.
- Never use "this page was last updated" as a substitute for actual content freshness.

---

## Content Section Order

### Extension Page Template

1. **H1** — Exact-match keyword query (e.g., "Great Suspender: Does It Still Work in 2026?")
2. **EPSB** — Extension Signal Block (name, developer, last update, store URL, rating, users)
3. **Lead** — 2–3 sentences: what the extension is, why it matters now, whether it works
4. **Problem** — What went wrong / why users are searching (Manifest V2 deprecation, removal from store, etc.)
5. **Solution** — Step-by-step or direct recommendation
6. **Alternatives** — 2–3 alternatives with brief comparison
7. **FAQ** — 3–5 questions from PAA and related searches
8. **Internal Links** — Related extensions and tools

### Tool Page Template

1. **H1** — Category + intent (e.g., "Best Ad Blockers for Chrome in 2026")
2. **Lead** — 2–3 sentences: what this category solves, the current state of the ecosystem
3. **Top 3 Recommendations** — Ranked with "Best for" labels and a 2-sentence pitch each
4. **Comparison Table** — 5–8 extensions, columns: Name, Platform, MV3/MV2, Last Update, Rating, Users
5. **Use-Case Branching** — "Need MV3?" / "Need free only?" / "Need open source?" → anchor to table rows
6. **FAQ** — Category-level questions
7. **Internal Links** — Individual extension pages

### Guide Page Template

1. **H1** — Action-oriented query (e.g., "How to Fix Extension Not Loading in Chrome")
2. **Lead** — What this guide solves, who it is for
3. **Prerequisites** — What the user needs before starting
4. **Steps** — Numbered step-by-step, each step is one clear action
5. **Troubleshooting** — Common failure modes and how to fix them
6. **Related Tools** — Extensions that help with the topic
7. **FAQ** — 3–5 questions

---

## Writing Style

- Voice: direct, expert, practical. No hype, no fluff.
- Sentence length: max 20 words average. Break long sentences.
- Use active voice. Avoid passive voice.
- Numbers: spell out one through nine, use digits for 10+.
- Browser names: "Chrome," "Firefox," "Edge" — always capitalized.
- Extension names: bold on first mention.
- Never use: "best," "top," "ultimate," "ultimate guide," "comprehensive" unless verifiable.
