/**
 * ExtensionFixes Production URL Verification Script
 * Checks all published URLs on the production site.
 *
 * Checks: HTTP status, redirect (308), title, description, canonical,
 *         H1, Quick Answer section, noindex tag, sitemap inclusion.
 *
 * Usage:
 *   npm run check:prod
 *   BASE_URL=https://example.com npm run check:prod
 *
 * Note: Failures on new pages (404) are expected before deploying Sprint 2/3 changes.
 *       Run after deploying to verify all pages are live.
 */

import http from 'http';
import https from 'https';
import { URL } from 'url';

const BASE_URL = process.env.BASE_URL || 'https://extensionfixes.com';
const protocol = BASE_URL.startsWith('https') ? https : http;

const RESULTS = { pass: 0, fail: 0, total: 0 };
const FAILURES = [];

// ── Helpers ────────────────────────────────────────────────────────────────────

function extractMeta(html, pattern) {
  const match = html.match(pattern);
  return match ? match[1].trim() : null;
}

function extractContent(html, selector) {
  // Simple tag content extraction (no DOM parser needed)
  // Use [\s\S]*? to match across newlines and handle nested HTML comments in React SSR
  const tagMatch = html.match(new RegExp(`<${selector}[^>]*>([\\s\\S]*?)<\\/${selector}>`, 'i'));
  if (!tagMatch) return null;
  // Strip React SSR comments (e.g. <!-- -->)
  const stripped = tagMatch[1].replace(/<!--[\s\S]*?-->/g, '').trim();
  return stripped.length > 0 ? stripped : null;
}

function checkNoindex(html) {
  // meta robots with noindex
  const noindex = /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex[^"']*["']/i.test(html) ||
    /<meta[^>]+content=["'][^"']*noindex[^"']*["'][^>]+name=["']robots["']/i.test(html) ||
    /<meta[^>]+name=["']googlebot["'][^>]+content=["'][^"']*noindex[^"']*["']/i.test(html);
  return noindex;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ── Fetch with redirect following ───────────────────────────────────────────────

async function fetchPage(path, options = {}) {
  return new Promise((resolve) => {
    const url = new URL(path, BASE_URL);
    const reqOptions = {
      hostname: url.hostname,
      port: url.port,
      path: url.pathname + url.search,
      method: 'GET',
      headers: {
        'User-Agent': 'ExtensionFixes-ProdCheck/1.0',
        ...options.headers,
      },
    };

    const req = protocol.request(reqOptions, (res) => {
      // Follow redirects manually (max 3 hops)
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const redirectTo = new URL(res.headers.location, BASE_URL).toString();
        fetchPage(redirectTo, options).then(resolve);
        return;
      }

      let body = '';
      res.on('data', (chunk) => { body += chunk; });
      res.on('end', () => {
        resolve({ status: res.statusCode, headers: res.headers, html: body });
      });
    });

    req.on('error', (err) => {
      resolve({ status: 0, headers: {}, html: '', error: err.message });
    });

    req.setTimeout(15000, () => {
      req.destroy();
      resolve({ status: 0, headers: {}, html: '', error: 'timeout' });
    });

    req.end();
  });
}

// ── Check a single URL ──────────────────────────────────────────────────────────

async function checkPage(urlPath) {
  RESULTS.total++;
  process.stdout.write(`  ${urlPath}...`);

  const { status, html, error } = await fetchPage(urlPath);

  if (error || status === 0) {
    console.log(` ERROR (${error || 'no response'})`);
    RESULTS.fail++;
    FAILURES.push({ url: urlPath, issue: `HTTP error: ${error || '0'}` });
    return;
  }

  const checks = {};

  // HTTP status
  checks.status = status;

  // Title
  checks.title = extractMeta(html, /<title[^>]*>([^<]+)<\/title>/i) || extractContent(html, 'title');
  checks.titleOk = !!(checks.title && checks.title.length > 0 && !checks.title.includes('404') && !checks.title.includes('Not Found'));

  // Description
  checks.description = extractMeta(html, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i) ||
    extractMeta(html, /<meta[^>]+content=["']([^"']+)["'][^>]+name=["']description["']/i);
  checks.descriptionOk = !!(checks.description && checks.description.length > 0);

  // Canonical
  checks.canonical = extractMeta(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i) ||
    extractMeta(html, /<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i);
  checks.canonicalOk = !!(checks.canonical &&
    checks.canonical.startsWith('https://extensionfixes.com') &&
    !checks.canonical.includes('/fix/chrome-extension-disabled'));

  // H1
  checks.h1 = extractContent(html, 'h1');
  checks.h1Ok = !!(checks.h1 && checks.h1.length > 0);

  // Quick Answer
  checks.quickAnswer = html.includes('Quick Answer');
  checks.quickAnswerOk = checks.quickAnswer;

  // noindex
  checks.noindex = checkNoindex(html);
  checks.noindexOk = !checks.noindex;

  // Pass/fail
  const pass = status === 200 &&
    checks.titleOk &&
    checks.descriptionOk &&
    checks.canonicalOk &&
    checks.h1Ok &&
    checks.quickAnswerOk &&
    checks.noindexOk;

  if (pass) {
    console.log(` PASS (${status})`);
    RESULTS.pass++;
  } else {
    console.log(` FAIL (${status})`);
    RESULTS.fail++;
    const issues = [];
    if (!checks.titleOk) issues.push(`title:${checks.title || 'MISSING'}`);
    if (!checks.descriptionOk) issues.push('no-description');
    if (!checks.canonicalOk) issues.push(`canonical:${checks.canonical || 'MISSING'}`);
    if (!checks.h1Ok) issues.push('no-h1');
    if (!checks.quickAnswerOk) issues.push('no-quick-answer');
    if (checks.noindex) issues.push('has-noindex');
    FAILURES.push({ url: urlPath, status, issues });
  }
}

// ── Fetch sitemap URLs ─────────────────────────────────────────────────────────

async function getSitemapUrls() {
  const { status, html } = await fetchPage('/sitemap.xml');
  if (status !== 200) return [];
  const matches = html.match(/<loc>([^<]+)<\/loc>/g) || [];
  return matches
    .map((m) => m.replace(/<\/?loc>/g, ''))
    .filter((url) => url.startsWith(BASE_URL))
    .map((url) => url.replace(BASE_URL, ''));
}

// ── Check redirect ─────────────────────────────────────────────────────────────

async function checkRedirect() {
  console.log('\n  Checking redirect: /fix/chrome-extension-disabled → /fix/chrome-disabled-extension');
  return new Promise((resolve) => {
    const url = new URL('/fix/chrome-extension-disabled', BASE_URL);
    const req = protocol.request({
      hostname: url.hostname,
      port: url.port,
      path: url.pathname,
      method: 'GET',
      headers: { 'User-Agent': 'ExtensionFixes-ProdCheck/1.0' },
    }, (res) => {
      const location = res.headers.location;
      if (res.statusCode >= 300 && res.statusCode < 400 && location) {
        // Verify the destination URL resolves to a 200
        const destUrl = new URL(location, BASE_URL);
        const followReq = protocol.request({
          hostname: destUrl.hostname,
          port: destUrl.port,
          path: destUrl.pathname,
          method: 'GET',
          headers: { 'User-Agent': 'ExtensionFixes-ProdCheck/1.0' },
        }, (followRes) => {
          let body = '';
          followRes.on('data', (chunk) => { body += chunk; });
          followRes.on('end', () => {
            // Check destination has h1 (proves it's the right page)
            const hasH1 = /<h1/i.test(body);
          // 200 = normal page; 308 = trailingSlash redirect (also valid)
            const destPath = destUrl.pathname.replace(/\/$/, '') || '/';
            const expected = '/fix/chrome-disabled-extension';
            if ((destPath === expected || destPath === expected + '/') && hasH1 && (followRes.statusCode === 200 || followRes.statusCode === 308)) {
              console.log(`    PASS: ${res.statusCode} → ${location} (resolves to ${followRes.statusCode} with h1)`);
              RESULTS.pass++;
            } else {
              console.log(`    FAIL: redirected to ${location} but status=${followRes.statusCode} h1=${hasH1}`);
              RESULTS.fail++;
              FAILURES.push({ url: '/fix/chrome-extension-disabled', status: res.statusCode, issues: [`redirect destination: status=${followRes.statusCode} h1=${hasH1}`] });
            }
            resolve();
          });
        });
        followReq.on('error', (err) => {
          console.log(`    ERROR following redirect: ${err.message}`);
          RESULTS.fail++;
          FAILURES.push({ url: '/fix/chrome-extension-disabled', status: res.statusCode, issues: [err.message] });
          resolve();
        });
        followReq.end();
      } else {
        console.log(`    FAIL: no redirect (status ${res.statusCode}, location: ${location || 'none'})`);
        RESULTS.fail++;
        FAILURES.push({ url: '/fix/chrome-extension-disabled', status: res.statusCode, issues: ['no redirect'] });
        resolve();
      }
    });
    req.on('error', (err) => {
      console.log(`    ERROR: ${err.message}`);
      RESULTS.fail++;
      FAILURES.push({ url: '/fix/chrome-extension-disabled', status: 0, issues: [err.message] });
      resolve();
    });
    req.end();
  });
}

// ── Check sitemap inclusion ────────────────────────────────────────────────────

async function checkSitemap(urlPath) {
  RESULTS.total++;
  const { status, html } = await fetchPage('/sitemap.xml');
  if (status !== 200) {
    RESULTS.fail++;
    FAILURES.push({ url: urlPath, issue: 'cannot fetch sitemap' });
    return;
  }
  const expected = `${BASE_URL}${urlPath}`.replace(/\/$/, '');
  const found = html.includes(expected) || html.includes(expected.replace(/\/$/, ''));
  if (found) {
    RESULTS.pass++;
  } else {
    RESULTS.fail++;
    FAILURES.push({ url: urlPath, issue: 'not in sitemap' });
  }
}

// ── Main ────────────────────────────────────────────────────────────────────────

async function main() {
  console.log('ExtensionFixes Production URL Verification');
  console.log('==========================================');
  console.log(`Base URL : ${BASE_URL}`);
  console.log(`Time     : ${new Date().toISOString()}`);
  console.log('');

  // Check redirect
  await checkRedirect();
  console.log('');

  // Get sitemap URLs
  console.log('Fetching sitemap...');
  const sitemapUrls = await getSitemapUrls();
  console.log(`Found ${sitemapUrls.length} URLs in sitemap`);
  console.log('');

  // Check sitemap inclusion for all URLs
  console.log('Checking sitemap inclusion...');
  for (const url of sitemapUrls) {
    await checkSitemap(url);
    await sleep(50); // gentle rate limiting
  }
  console.log('');

  // Full page checks (skip sitemap.xml and other non-HTML)
  const htmlPages = sitemapUrls.filter(
    (url) => !url.endsWith('.xml') && !url.endsWith('.txt') && !url.endsWith('.json')
  );

  console.log(`Checking ${htmlPages.length} HTML pages...`);
  for (const url of htmlPages) {
    await checkPage(url);
    await sleep(100); // gentle rate limiting
  }

  // Summary
  console.log('');
  console.log('==========================================');
  console.log('SUMMARY');
  console.log('==========================================');
  console.log(`Total checks: ${RESULTS.total}`);
  console.log(`Passed      : ${RESULTS.pass}`);
  console.log(`Failed      : ${RESULTS.fail}`);
  console.log(`Pass rate   : ${RESULTS.total > 0 ? Math.round(RESULTS.pass / RESULTS.total * 100) : 0}%`);

  if (FAILURES.length > 0) {
    console.log('');
    console.log('Failures:');
    for (const f of FAILURES) {
      if (f.issues) {
        console.log(`  ${f.url}: [${f.status || '?'}] ${f.issues.join(' | ')}`);
      } else {
        console.log(`  ${f.url}: ${f.issue}`);
      }
    }
  }

  console.log('');
  console.log(`Status: ${RESULTS.fail === 0 ? 'ALL PASS' : `${RESULTS.fail} FAILURES`}`);
  process.exit(RESULTS.fail === 0 ? 0 : 1);
}

main().catch((err) => {
  console.error('Script error:', err);
  process.exit(1);
});
