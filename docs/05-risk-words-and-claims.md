# Risk Words and Claims

This document governs what language is permitted on extensionfixes.com when discussing browser extensions, security, performance, and alternatives.

## MUST

- Use "reportedly" or "reported by users" when citing unverified claims from T3 sources.
- Always link to the primary source when making a security verdict claim.
- Use "as of [date]" as a qualifier for any version-specific or ecosystem-state claim.
- Clearly distinguish between "the extension was removed from the Chrome Web Store" (verified fact) and "users report it is unsafe" (unverified claim).

## SHOULD

- Prefer "compatible" / "incompatible" over "works" / "doesn't work" — precise and defensible.
- Use "available for" when describing platform support. Use "not available for" instead of "doesn't support."
- Use "last updated [date]" rather than "recently updated" or "outdated."
- When comparing extensions, use measurable dimensions: platform, MV3/MV2, last update date, user count, rating.
- Use "known issue" with a date and source when describing bugs or problems.

## NEVER

| Phrase | Why Forbidden | Substitute |
|--------|---------------|------------|
| "best" (without criteria) | Non-verifiable superlative | "best for [specific use case]" |
| "safest" | Subjective, legally risky | "has [specific permission] — review before installing" |
| "malware" (without T1 citation) | Defamatory if unverified | "flagged by [scanner name] on [date] — [source link]" |
| "100% safe" | Impossible to guarantee | "no known security issues as of [date]" |
| "free" (ambiguous) | May exclude Freemium nuance | "free tier available" or "free and open source" |
| "guaranteed" | Cannot guarantee | "typically" or "in most cases" |
| "never" / "always" | Absolute claims are rarely defensible | "rarely" / "usually" / "as of [date]" |
| "ultimate guide" | Superlative fluff | "complete guide to [topic]" |
| "top X" without criteria | Arbitrary ranking | "3 recommended [category] extensions" |
| "compatible with all browsers" | Rarely true | "compatible with Chrome, Firefox, and Edge" |

## Security Claims

### Allowed

- "uBlock Origin is available on the Chrome Web Store with 10M+ users."
- "Great Suspender was removed from the Chrome Web Store on January 4, 2021 — [source]."
- "This extension requests the following permissions: [list]. Review them before installing."

### Forbidden

- "This extension is malware." (no source)
- "This extension is completely safe to use." (cannot guarantee)
- "It will never steal your data." (absolute claim)

## Performance Claims

### Allowed

- "uBlock Origin reportedly blocks ads across most websites according to its project page."
- "In testing on Chrome 124, page load time improved by approximately Xms with [extension]."

### Forbidden

- "Blocks 100% of ads." (unverifiable)
- "Makes your browser 10x faster." (vague, unverifiable)
- Any performance number without a date, test environment, and source.

## Source Tier Quick Reference

| Tier | What you can say | What you cannot say |
|------|-----------------|---------------------|
| T1 | Any factual product claim with direct citation | Nothing without a link |
| T2 | Well-sourced performance/security claims | Raw user numbers, unverified reports |
| T3 | "Users report that..." with clear label | Direct security verdicts, factual product claims |
