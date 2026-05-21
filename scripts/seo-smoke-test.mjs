/**
 * SEO Smoke Test Script
 * Runs basic checks on the Extension Fixes site
 *
 * Usage:
 *   npm run seo:smoke
 *   BASE_URL=https://example.com npm run seo:smoke
 */

const BASE_URL = process.env.BASE_URL || 'https://extensionfixes.com';
const REQUIRED_PAGE = '/chrome-extension-error-messages';

async function fetchHtml(url) {
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'SEO-Smoke-Test/1.0',
    },
  });
  return {
    status: response.status,
    html: await response.text(),
  };
}

function extractMeta(html, name) {
  const patterns = [
    new RegExp(`<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']+)["']`, 'i'),
    new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+name=["']${name}["']`, 'i'),
  ];
  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match) return match[1];
  }

  // Next.js 14+ doesn't output <meta name="title">; fall back to <title> tag / og:title
  if (name === 'title') {
    const titleTag = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    if (titleTag) return titleTag[1];
    const ogTitle = html.match(/<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)["']/i)
      || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:title["']/i);
    if (ogTitle) return ogTitle[1];
  }

  return null;
}

function extractCanonical(html) {
  const match = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
  return match ? match[1] : null;
}

function checkForIssues(html) {
  const issues = [];

  // Only scan the <head> section — the React RSC payload in <script> tags
  // contains null/$undefined from React internals and is not page content.
  const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  const headContent = headMatch ? headMatch[1] : html;

  // "undefined" appearing in the visible <head> is almost always a bug.
  if (headContent.includes('undefined')) {
    issues.push('Contains "undefined" in <head>');
  }
  if (headContent.includes('NaN')) {
    issues.push('Contains "NaN" in <head>');
  }

  // null is rare in <head> metadata; flag only if there are more than a few.
  const nullMatches = headContent.match(/null(?![^<]*>)/g);
  if (nullMatches && nullMatches.length > 3) {
    issues.push(`Contains ${nullMatches.length} "null" strings in <head>`);
  }
  return issues;
}

async function checkUrl(url) {
  const fullUrl = `${BASE_URL}${url}`;
  console.log(`\nChecking: ${fullUrl}`);

  const { status, html } = await fetchHtml(fullUrl);

  if (status !== 200) {
    return {
      url,
      status,
      pass: false,
      issues: [`HTTP ${status}`],
    };
  }

  const title = extractMeta(html, 'title');
  const description = extractMeta(html, 'description');
  const canonical = extractCanonical(html);
  const issues = checkForIssues(html);

  const pass = status === 200 && title && title.length > 0 && !issues.length;

  return {
    url,
    status,
    title: title || 'MISSING',
    description: description ? 'present' : 'MISSING',
    canonical: canonical || 'MISSING',
    canonicalOk: canonical ? canonical.startsWith('https://extensionfixes.com') : false,
    issues,
    pass,
  };
}

async function main() {
  console.log('='.repeat(60));
  console.log('Extension Fixes - SEO Smoke Test');
  console.log('='.repeat(60));
  console.log(`Base URL: ${BASE_URL}`);
  console.log(`Time: ${new Date().toISOString()}`);

  // Fetch sitemap
  console.log('\nFetching sitemap...');
  let sitemapUrls = [];

  try {
    const { status, html } = await fetchHtml(`${BASE_URL}/sitemap.xml`);

    if (status === 200) {
      // Extract URLs from sitemap
      const urlMatches = html.match(/<loc>([^<]+)<\/loc>/g);
      if (urlMatches) {
        sitemapUrls = urlMatches
          .map((m) => m.replace(/<\/?loc>/g, ''))
          .filter((url) => url.startsWith(BASE_URL))
          .map((url) => url.replace(BASE_URL, ''));
      }
      console.log(`Found ${sitemapUrls.length} URLs in sitemap`);
    } else {
      console.log(`Sitemap returned HTTP ${status}`);
    }
  } catch (error) {
    console.log(`Error fetching sitemap: ${error.message}`);
  }

  // Check required page
  console.log(`\nChecking required page: ${REQUIRED_PAGE}`);
  const requiredResult = await checkUrl(REQUIRED_PAGE);

  // Check additional key pages
  const additionalPages = [
    '/',
    '/alternatives',
    '/guides',
    '/tools/extension-search',
    '/foxyproxy-alternative-for-chrome',
    '/the-great-suspender-malware',
  ];

  console.log('\nChecking additional key pages...');
  const additionalResults = await Promise.all(
    additionalPages.map((url) => checkUrl(url))
  );

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('SUMMARY');
  console.log('='.repeat(60));

  console.log('\nRequired Page Check:');
  console.log(`  URL: ${requiredResult.url}`);
  console.log(`  Status: ${requiredResult.status}`);
  console.log(`  Title: ${requiredResult.title}`);
  console.log(`  Description: ${requiredResult.description}`);
  console.log(`  Canonical: ${requiredResult.canonical}`);
  console.log(`  Canonical OK: ${requiredResult.canonicalOk ? 'YES' : 'NO'}`);
  if (requiredResult.issues.length) {
    console.log(`  Issues: ${requiredResult.issues.join(', ')}`);
  }

  console.log('\nKey Pages:');
  for (const result of additionalResults) {
    const statusIcon = result.pass ? 'PASS' : 'FAIL';
    console.log(`  [${statusIcon}] ${result.url} - ${result.status} - "${result.title}"`);
    if (result.issues.length) {
      console.log(`         Issues: ${result.issues.join(', ')}`);
    }
  }

  // Final verdict
  const allPass = requiredResult.pass && requiredResult.canonicalOk &&
                  additionalResults.every((r) => r.pass);

  console.log('\n' + '='.repeat(60));
  if (allPass) {
    console.log('RESULT: PASS');
    console.log('='.repeat(60));
    process.exit(0);
  } else {
    console.log('RESULT: FAIL');
    console.log('='.repeat(60));
    process.exit(1);
  }
}

main().catch((error) => {
  console.error('Error running smoke test:', error);
  process.exit(1);
});
