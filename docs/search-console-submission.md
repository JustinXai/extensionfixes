# Search Console Submission

How to submit ExtensionFixes.com URLs to Google Search Console and Bing Webmaster Tools.

## Google Search Console

### 1. Submit Sitemap

1. Go to [Google Search Console](https://search.google.com/search-console) and select the ExtensionFixes.com property.
2. Navigate to **Sitemaps** in the left sidebar.
3. Enter the sitemap URL:

```
https://extensionfixes.com/sitemap.xml
```

4. Click **Submit**.

### 2. Request Indexing for Core URLs

After submitting the sitemap, manually request indexing for high-priority pages to speed up discovery.

Navigate to **URL Inspection** in the top bar. Paste each URL and click **Request Indexing**.

Core URLs to submit:

```
https://extensionfixes.com/
https://extensionfixes.com/tools/extension-search/
https://extensionfixes.com/chrome-extension-error-messages/
https://extensionfixes.com/fix/manifest-v2-disabled/
https://extensionfixes.com/fix/chrome-disabled-extension/
https://extensionfixes.com/fix/extension-removed-from-chrome-web-store/
https://extensionfixes.com/alternatives/ublock-origin/
https://extensionfixes.com/alternatives/proxy-switchyomega/
https://extensionfixes.com/alternatives/tampermonkey/
https://extensionfixes.com/alternatives/foxyproxy/
```

## Bing Webmaster Tools

### 1. Submit Sitemap

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters) and sign in.
2. Add and verify the ExtensionFixes.com property if not already added.
3. Navigate to **Sitemaps** under the property.
4. Submit:

```
https://extensionfixes.com/sitemap.xml
```

### 2. Submit Core URLs

Use **Submit URLs** to directly submit the same core URLs listed above.

## Review Cadence

| Day | Action |
|---|---|
| 0 | Submit sitemap + all core URLs to GSC and Bing |
| 3–7 | Check indexed status in GSC URL Inspection and Bing Webmaster |
| 14 | Review impressions and average position in GSC Performance report |
| 30 | Decide title / description updates for pages with impressions but low CTR |

## Do Not Panic

- New pages may take several days to appear in index after submission.
- No impressions in the first week is normal — Google needs to crawl and rank first.
- Do not rewrite titles or descriptions before data exists.
- Prioritize pages that show impressions but have low CTR for improvement.

## Updating the Monitoring Table

After each submission round, update `reports/index-monitoring.md`:

- Set **Submitted to GSC** / **Submitted to Bing** to `Submitted`
- Set **Indexed status** once confirmed
- Log the **First impression date** when impressions first appear
- Update **Clicks**, **Impressions**, **Avg position**, **CTR** from GSC Performance report
- Set **Next action** based on data (monitor, update title, improve content)
