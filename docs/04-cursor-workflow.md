# Cursor Workflow

## MUST

- Before writing any page, read the Product Constitution (docs/00-product-constitution.md) and verify the page type.
- Run the SEO AI Readable Checklist (docs/03-seo-ai-readable-checklist.md) before marking any page as complete.
- Every new page must be added to the sitemap with correct `lastmod`.
- All code changes must pass `npm run lint` and `npm run build` before merging.
- Never commit directly to main. Work in feature branches. Squash-merge to main.
- Every commit message must reference the relevant docs/ ticket or decision.

## SHOULD

- Use `npx next-dev` to test locally before pushing.
- Use the SEO smoke test script (`scripts/seo-smoke-test.mjs`) to validate pages before deployment.
- Keep PR descriptions short: what changed, why, what to test.
- Update docs/06-current-state.md when page count changes or new query clusters emerge.
- Review GSC data weekly. Flag pages where CTR drops > 20% week-over-week for content review.

## NEVER

- Never skip the lint and build step before committing.
- Never push to main without running `npm run build`.
- Never create a new page without first checking the IA (docs/01-information-architecture.md) for conflicts.
- Never delete or rename an existing page without a 301 redirect strategy.
- Never add dark mode or alternate themes — this is out of scope.
- Never add new API routes — this is out of scope.

---

## Branch Naming

```
feature/pages/[slug]       — new content page
feature/update/[slug]      — content update to existing page
feature/fix/[description]   — bug fix
docs/[name]                — governance doc update
```

## Commit Message Format

```
[type] short description

[type] = page | update | fix | docs
Example: page/extensions/great-suspender
Example: update/guides/manifest-v2-vs-v3
Example: fix/epsb-render-missing-data
Example: docs/product-constitution-v2
```

## Page Creation Checklist

1. Verify URL does not conflict with existing route (docs/01)
2. Determine page type: Extension / Tool / Guide (docs/01)
3. Write H1 matching primary keyword intent
4. Insert EPSB (extension pages only) — server-side rendered (docs/00 Decision 1)
5. Follow content template for page type (docs/02)
6. Tag all claims with Source Tier (docs/00 Decision 3)
7. Add FAQ section with PAA-sourced questions
8. Add internal links to related pages
9. Add structured data (JSON-LD)
10. Update sitemap.xml with new page and correct `lastmod`
11. Run SEO AI Readable Checklist (docs/03)
12. Run `npm run lint` — fix all errors
13. Run `npm run build` — must succeed
14. Run `scripts/seo-smoke-test.mjs`
15. Update docs/06-current-state.md if page count changed

## Deployment

```
main branch → Vercel auto-deploy
Cloudflare DNS → Vercel
Rollback: Vercel dashboard → Redeploy previous production deployment
```

## Monitoring

- GSC: check weekly for CTR, position, and impressions changes on top 10 pages.
- Bing Webmaster: check weekly for crawl errors.
- If any page loses > 30% impressions week-over-week with no known cause: investigate immediately.
