# GitHub Actions Workflow

## Overview

ExtensionFixes uses GitHub Actions CI to gate all merges to `main`. Every pull request and every push to `main` triggers the same quality gate. There is no separate staging environment — the `main` branch deploys directly to production via Vercel.

## CI Pipeline

```
push to main → GitHub Actions CI → all checks pass → Vercel auto-deploy
                          ↑
pull_request to main → GitHub Actions CI → all checks pass → merge allowed
```

## What Runs in CI

| Step | Command | Purpose |
|------|---------|---------|
| Lint | `npm run lint` | ESLint — catches syntax and style errors |
| Build | `npm run build` | Next.js static build + HTML conflict cleanup |
| Content review | `npm run review` | Custom extensionfixes-review script |
| Local text QA | `npm run check:local:text` | Text consistency checks against local build |

## What Does NOT Run in CI

- `npm run check:prod:text` — targets production URLs; not valid against a PR branch.
- `npm run seo:smoke` — smoke test targets live site; skipped in CI.
- Vercel production deploy (`vercel --prod`) — only triggered by Vercel on `main` push.
- Any artifact uploads — no build outputs are archived in CI.

## Workflow Configuration

`.github/workflows/ci.yml` runs on:

- `push` to `main`
- `pull_request` targeting `main`

Concurrency group ensures only one CI run is active per branch ref. Older runs are cancelled.

Node.js version: **20** (LTS)

Timeout: **15 minutes**

## Local Development

Before pushing, run the same checks locally:

```powershell
npm run lint
npm run build
npm run review
npm run check:local:text
```

If CI fails on a PR, reproduce locally first — do not push fixes blindly.

## PR Template

All pull requests must complete `.github/pull_request_template.md` before merging. The template covers:

- Change type (content page, fix, docs, infrastructure, etc.)
- Affected production URLs
- Template type used (alternative / fix / guide / comparison / collection)
- Files changed
- GSC query source that triggered the change
- Content quality checklist
- Safety / SEO claim checks
- Local CI check results

## Branch Protection

`main` is a protected branch. Direct pushes are disabled. All changes must come through pull requests with passing CI.

## Failure Handling

If CI fails:

1. Do not force-push to bypass CI.
2. Fix the underlying issue locally and push.
3. If the failure is in `check:local:text`, review the script at `scripts/check-production-text.mjs --local` and understand the rule before suppressing it.
4. If the failure is in `npm run review`, follow the guidance in `docs/04-cursor-workflow.md` — do not suppress warnings without understanding them.
