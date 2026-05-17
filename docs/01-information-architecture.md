# Information Architecture

## MUST

- URL structure must reflect the information hierarchy: `/extensions/[name]/` for extension pages, `/tools/[category]/` for tool pages, `/guides/[topic]/` for guides.
- The homepage must serve two audiences: users landing from search (answer immediately) and users exploring (guide them deeper).
- All pages must be reachable within 3 clicks from the homepage.
- Every extension page must link to at least one relevant tool page and one relevant guide.
- Navigation must surface the top 5 query clusters prominently (unsupported extension warning, FoxyProxy/proxy, Great Suspender, uBlock Origin Lite, Manifest V2).
- Canonical URLs must always use HTTPS and the www-less `extensionfixes.com` domain.
- XML sitemap must include all public pages with `lastmod` reflecting the last content update date.

## SHOULD

- Breadcrumb navigation should appear on all non-homepage pages.
- Related pages should be suggested at the bottom of every article using a maximum of 3 contextually relevant links.
- Category pages (tool pages) should list extensions alphabetically or by ranking score — never by random order.
- Pages should have a consistent section order: H1 → EPSB → problem statement → solution → alternatives → FAQ.

## NEVER

- Never create a page without defining its URL path and verifying it does not conflict with an existing route.
- Never put a redirect chain longer than 1 hop (A → B, never A → B → C).
- Never use date-based URLs (e.g., `/2024/03/...`) — they signal stale content.
- Never nest deeper than 3 levels (e.g., `/extensions/category/name/` is forbidden).

---

## Site Structure

```
extensionfixes.com/
├── / (Homepage)
├── /extensions/
│   ├── /extensions/ublock-origin-lite/
│   ├── /extensions/great-suspender/
│   ├── /extensions/foxyproxy/
│   └── ...
├── /tools/
│   ├── /tools/ad-blockers/
│   ├── /tools/proxy-switchers/
│   ├── /tools/password-managers/
│   └── ...
├── /guides/
│   ├── /guides/manifest-v2-vs-v3/
│   ├── /guides/extension-not-loading/
│   └── ...
└── /tools/extension-search/ (internal search tool)
```

## Page Types

| Page Type | Route Pattern | Primary Intent | Content Template |
|-----------|---------------|----------------|-----------------|
| Extension Page | `/extensions/[slug]/` | Does this extension work? Is it safe? | EPSB + problem → solution → alternatives → FAQ |
| Tool Page | `/tools/[category]/` | What is the best option for X? | Direction B+C hybrid: ranked top-3 + comparison table |
| Guide | `/guides/[slug]/` | How do I solve X? | Step-by-step + context + related tools |
| Homepage | `/` | Entry point for all audiences | Hero → top clusters → recent updates → sitemap links |
| Search Tool | `/tools/extension-search/` | Find extension by name/keyword | Simple search input + results list |
