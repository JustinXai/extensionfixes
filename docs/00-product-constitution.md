# Product Constitution

## MUST

- Every page must solve exactly one browser extension problem.
- Every page must include an Extension Page Signal Block (EPSB) as the first content element after the hero.
- Every page must have canonical URL pointing to extensionfixes.com domain.
- Every page must include structured data: Article, FAQPage, or HowTo depending on content type.
- Every page must answer the question "does this extension work in my browser?" in the first 200 words.
- Every page must end with a clear next action or related tool recommendation.
- EPSB must contain: extension name, developer, last update, Chrome Web Store / AMO / Edge Add-ons URL, rating, user count.
- EPSB must use `<aside>` with `aria-label="extension-info"` and class `extension-signal-block`.
- EPSB must render server-side. No client-side fetch for core extension data.

## SHOULD

- Pages targeting Chrome users should assume Manifest V3 unless the extension explicitly supports Manifest V2.
- Tool pages should include a "Best for" tagline and a comparison table when alternatives exist.
- Every page should have an H1 that mirrors the search query intent (exact-match keyword in H1).
- Internal links should use descriptive, keyword-rich anchor text.
- Pages should be updated within 30 days of an extension's major version change.

## NEVER

- Never publish a page without verifying the extension's current Chrome Web Store / AMO status.
- Never claim an extension is "safe" or "malware-free" without citing a verifiable source.
- Never use affiliate links or sponsored content without disclosure.
- Never duplicate content across pages to game internal linking.
- Never remove content from the index without a 301 redirect to the nearest relevant page.
- Never create a page targeting a query with zero documented search intent (pure keyword stuffing).

---

## Hard Decisions (Human-Approved)

### Decision 1 — Extension 建页强信号规则

**Condition:** The page is about a specific browser extension (not a general topic).

**Rule:** The EPSB (Extension Signal Block) must appear as the second content block (first after the hero). This is a hard structural requirement — not optional, not deferrable. No extension page is published without it. The block must contain: extension name, developer, last-updated date, store URL (CWS/AMO/Edge), star rating, and approximate user count.

**Rationale:** Users arriving from search are evaluating "should I install this?" — giving them the signal block immediately satisfies intent before they scroll. Secondary benefit: structured data completeness supports SGE summarization.

### Decision 2 — Tool Page 产品化方向 B + C

**Condition:** The page covers a category of extensions (e.g., "best ad blockers") rather than a single extension.

**Direction:** Combine Direction B (specific, scoped recommendations with product logic) and Direction C (structured comparison tables, filter UI, clear winner) into a hybrid:

- Open with a ranked top-3 recommendation with clear "best for" labels.
- Mid-section: a markdown table comparing 5–8 extensions across维度: platform support, MV3/MV2, last update, rating, user count.
- Close with use-case branching: "Need MV3?" / "Need free only?" / "Need open source?" → anchor link to relevant table row.

**What we do NOT do:** We do not build a dynamic filter UI in v1. The table is static markdown. Upgrade path is a client-side JS filter.

### Decision 3 — Source Tier + Claim Type 规则

**Rule:** Every content claim must map to one of three Source Tiers:

| Tier | Label | Examples | When allowed |
|------|-------|----------|--------------|
| T1 | Primary Source | Chrome Web Store, AMO, Edge Add-ons, official changelog | Always — required for all factual product claims |
| T2 | Verified Third Party | Wikipedia (established articles), MDN, official blog with byline | Allowed only when T1 is unavailable or insufficient |
| T3 | Community / Unverified | Reddit, GitHub issues, forum posts, user reviews | Allowed only for "user reports" sections, clearly labeled as unverified |

**Claim Type mapping:**

| Claim Type | Example | Required Source Tier |
|------------|---------|----------------------|
| Factual product info (version, last update, permissions, MV2/MV3) | "uBlock Origin 1.70+ supports Manifest V3" | T1 |
| Security verdict | "Flagged as malware by Google" | T1 (must link to report) |
| Performance claim | "Blocks X ads" | T2 or higher — no raw numbers from T3 |
| User sentiment | "Users report X bug" | T3, labeled as community report |
| Historical fact | "The Great Suspender was removed from the Chrome Web Store in 2021" | T1 (store archive) or T2 (Wikipedia) |

**Enforcement:** Every page's content audit must list each claim, its type, and its source tier before publication.
