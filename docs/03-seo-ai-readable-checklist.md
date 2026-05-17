# SEO & AI Readable Checklist

Run this checklist before every page publish and every content update.

## MUST Pass (gate for publishing)

- [ ] **H1 matches primary keyword intent.** Extract the primary keyword from search console / GSC. The H1 must be an exact or near-exact match. Do not proceed if H1 diverges from intent.
- [ ] **EPSB is present and complete.** Extension pages: the EPSB block must appear as the second content element. Must include: name, developer, last update, store URL, rating, user count. Rendered server-side.
- [ ] **First 300 words answer the query.** Read the first 300 words aloud. If someone asked "what is this page about?" would the answer be there? If not, rewrite the lead.
- [ ] **Canonical URL is correct.** HTTPS, www-less, correct path. No redirect chain.
- [ ] **Structured data is present and valid.** Use Google's Rich Results Test. Valid JSON-LD for Article, FAQPage, or HowTo.
- [ ] **All content claims have Source Tier tags.** Every factual claim (version, last update, MV3/MV2, security verdict) must cite T1. User reports must cite T3 with "unverified — community report" label.
- [ ] **FAQ section exists with 3+ questions.** Source questions from People Also Ask and "Searches related to." Each answer must be substantive (2+ sentences).
- [ ] **Internal links >= 3.** At least 3 contextually relevant internal links per 1000 words.
- [ ] **Outbound links to T1 sources >= 1.** At least one link to Chrome Web Store, AMO, or official source.

## SHOULD Pass (review before publishing)

- [ ] **Title tag <= 60 characters.** Includes primary keyword near the start.
- [ ] **Meta description <= 160 characters.** Unique per page. Includes call to action.
- [ ] **Image alt text present.** Extension icon and screenshots have descriptive alt text.
- [ ] **URL slug is short (< 50 chars) and descriptive.** No stop words, no dates.
- [ ] **Paragraph length <= 4 sentences.** Long paragraphs split.
- [ ] **Heading hierarchy is correct.** H1 → H2 → H3. No skipped levels.
- [ ] **No orphan pages.** All pages reachable from homepage within 3 clicks.
- [ ] **sitemap.xml updated.** `lastmod` reflects actual content change date.

## AI Readable Quality (SGE / Search Generative Experience)

- [ ] **Clear entity markup.** Extension pages should use `ItemList` or structured data identifying the specific extension.
- [ ] **Answer is above the fold.** The direct answer to the primary query must appear before any table or collapsible section.
- [ ] **No key information in images only.** All critical facts (version, MV3/MV2, last update) must be in text, not just in screenshots.
- [ ] **Tables have `<caption>` or `aria-label`.** Tables are readable by screen readers and parsing systems.
- [ ] **`<details>` elements have `<summary>` with keywords.** Collapsible sections must have descriptive summary text.
- [ ] **No blocking interstitials.** Do not block content behind consent banners or "click to accept" walls.
- [ ] **Schema types match content type.** FAQPage for Q&A content, HowTo for step-by-step guides, Article for news/updates.
