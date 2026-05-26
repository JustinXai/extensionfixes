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
