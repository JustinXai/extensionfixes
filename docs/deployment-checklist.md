# ExtensionFixes Deployment Checklist

## Standard Release Flow

Every content change must go through this sequence:

```bash
# 1. Quality checks (all must pass)
npm run lint
npm run build
npm run review
npm run check:local:text

# 2. Review changes before committing
git status --short
git diff --stat

# 3. Commit and push
git add <changed-files>
git commit -m "Descriptive commit message"
git push origin main
```

## Vercel Auto-Deploy Verification

After pushing, verify Vercel Git Integration is working:

1. Go to **Vercel Dashboard** → Project Settings → **Git**
2. Confirm:
   - Connected repo is `github.com/JustinXai/extensionfixes`
   - Production Branch is `main`
   - GitHub App has access to JustinXai/extensionfixes
3. Check **Ignored Build Step** — must not accidentally skip builds

## Production Verification Command

After pushing, always verify the live site:

```bash
curl -L https://extensionfixes.com/comparisons/tampermonkey-vs-violentmonkey | grep -E "Quick Answer|Comparisons|current extension source availability|Partial \(core is open source\)|Guides"
```

### Verification Standards

**Must include:**
- `Quick Answer`
- `Comparisons` (breadcrumb)
- `current extension source availability`

**Must NOT include:**
- `Home / Guides / Comparison`
- `Partial (core is open source)`

## If Vercel Did Not Auto-Deploy

1. Check **Vercel Deployments** page — look for the latest commit hash
2. If the commit does not appear:
   - Verify Git Integration settings
   - Check if Vercel App has repo permissions in GitHub
3. If commit appears but not promoted to production:
   - Use "Promote to Production" button in Vercel Dashboard
4. If neither works, force a manual deploy:

```bash
npx vercel --prod
```

## GSC Submission Only After Production PASS

Only submit to Google Search Console **after** production verification PASSES:

- https://extensionfixes.com/sitemap.xml
- https://extensionfixes.com/fix/cannot-install-extension-unsupported-manifest
- https://extensionfixes.com/comparisons/tampermonkey-vs-violentmonkey
- https://extensionfixes.com/alternatives/dark-reader

## Common Failure Points

| Symptom | Likely Cause | Fix |
|---------|-------------|-----|
| "Quick Answer" missing in production | Vercel did not deploy latest commit | `npx vercel --prod` |
| CSS/JS chunks unchanged after deploy | Build cache stale | Vercel Dashboard → Deployments → Clear Cache |
| Old breadcrumb persists | Vercel serving cached HTML | `npx vercel --prod` |
| GitHub Actions passes but site stale | Vercel Git Integration disabled | Check Project Settings → Git |
| Manual `vercel --prod` fails | Not linked to project | `vercel link` first |

## Key Lesson

> Local build passing + GitHub push confirmed = Vercel production may still be stale.

Always run the production verification curl before reporting success.

Last automatic deployment test: 2026-05-26

## Historical SEO Template Error Prevention

This section documents real bugs that occurred in production so they do not recur.

### 1. Template SEO Gate

**Problem:** Comparison pages had no `<h1>` tag (Bing Webmaster Tools flagged "H1 missing").
**Root cause:** `ComparisonPageTemplate` did not render a page-level heading.
**Rule:** Every indexable page must render exactly **one real `<h1>`** in production HTML. Templates must not rely solely on `<title>`, breadcrumb, or section headings to convey the page topic.

### 2. Rendered Related-Link Gate

**Problem:** `/alternatives/switchyomega` Related Resources showed generic labels "Extension" and "Comparison" instead of semantic names.
**Root cause:** `page.tsx` hardcoded label fallbacks without a slug-to-label mapping.
**Rule:** `relatedPages` must render semantic labels in production HTML. The fallback labels "Extension", "Comparison", and "Guide" are forbidden in rendered output. Use a slug-to-label map that covers all slugs referenced by any page.

### 3. Cross-Page Wording Gate

**Problem:** FoxyProxy's open-source status was inconsistent:
- `/alternatives/foxyproxy` table: `No`
- `/alternatives/switchyomega` table: `Partial`
- `/comparisons/foxyproxy-vs-switchyomega` table: `Partial`

**Root cause:** Same data (`extensions.ts`) not used consistently; no cross-page review after edits.
**Rule:** Before any commit that changes a shared field value, check all pages that reference that entity. Sensitive fields include: open-source status, MV3 support, official relationship, successor wording, and safety claims. Changes must be consistent across all pages.

### 4. Stale-Content Gate

**Problem:** Old content (e.g., "Partial") persisted in production even after data-file fixes, because Vercel was still serving a cached/stale deployment.
**Root cause:** Vercel auto-deploy has propagation lag; production curl can return cached old HTML.
**Rule:** Production verification must include both:
- **Must include** checks (new content is present)
- **Must not include** checks (old content is absent)

Always wait for Vercel to finish deploying before running production curl.

### 5. Multi-Page Template Gate

**Problem:** Fixing `ComparisonPageTemplate` (adding `<h1>`) required verifying all 5 comparison pages, not just the one that was reported.
**Root cause:** Shared templates affect every page that uses them; a fix for one page may be incomplete without checking others.
**Rule:** When changing a shared template:
- **ComparisonPageTemplate** → verify all 5 `/comparisons/*` pages
- **AlternativePageTemplate** → verify all affected `/alternatives/*` pages
- **FixPageTemplate** → verify all affected `/fix/*` pages
- **GuidePageTemplate** → verify all affected `/guides/*` pages

At minimum, check h1 count and key content on a representative sample.

### 6. validate:content Stability Rule

**Problem:** `validate:content` was producing false positives and blocking CI.
**Rule:** `validate:content` is **not production-ready**. It must not be re-enabled in CI, added to `package.json` scripts, or used as a blocking gate until the team explicitly approves it. Local runs are fine; automated enforcement is blocked.

### 7. Hotfix Scope Discipline

**Rule:** During page/content hotfixes, do not modify:
- `package.json`, `package-lock.json`
- CI configuration files (`.github/workflows/`, `.vercel/`, etc.)
- `scripts/` directory (unless the fix is specifically about scripts)
- Template files (unless the fix is specifically about templates)

If scope creep is needed, stop and ask before proceeding.

### Standard Production Verification Template

Replace vague "Production curl PASS" with explicit checks:

```
Must include:
- <h1
- [semantic page title]

Must not include:
- [old/fallback label 1]
- [old/fallback label 2]
- [stale content]

For pages sharing a template, check at least:
- [page 1]
- [page 2]
- [page N] (for template-wide changes)
```
