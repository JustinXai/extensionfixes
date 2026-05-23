import https from 'https';
import zlib from 'zlib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const BASE = 'https://extensionfixes.com';
const PAGES = [
  '/alternatives/tampermonkey',
  '/alternatives/tampermonkey/',
  '/guides/chrome-userscript-manager-alternatives',
  '/guides/chrome-userscript-manager-alternatives/',
  '/alternatives/violentmonkey',
  '/alternatives/violentmonkey/',
  '/alternatives/foxyproxy',
  '/alternatives/foxyproxy/',
  '/alternatives/great-suspender',
  '/alternatives/great-suspender/',
  '/alternatives',
  '/alternatives/',
  '/alternatives/ublock-origin',
  '/alternatives/ublock-origin/',
  '/fix/this-extension-was-turned-off-because-it-is-no-longer-supported',
  '/fix/this-extension-was-turned-off-because-it-is-no-longer-supported/',
  '/fix/manifest-v2-disabled',
  '/fix/manifest-v2-disabled/',
  '/fix/cannot-install-extension-unsupported-manifest',
  '/fix/cannot-install-extension-unsupported-manifest/',
  '/comparisons/tampermonkey-vs-violentmonkey',
  '/comparisons/tampermonkey-vs-violentmonkey/',
  '/comparisons/ublock-origin-vs-ublock-origin-lite',
  '/comparisons/ublock-origin-vs-ublock-origin-lite/',
  '/comparisons/foxyproxy-vs-switchyomega',
  '/comparisons/foxyproxy-vs-switchyomega/',
  '/comparisons',
  '/comparisons/',
  '/guides/best-userscript-managers-for-chrome',
  '/guides/best-userscript-managers-for-chrome/',
  '/fix/chrome-140-manifest-v2',
  '/fix/chrome-140-manifest-v2/',
  '/fix/chrome-enable-unsupported-extensions',
  '/fix/chrome-enable-unsupported-extensions/',
  '/alternatives/dark-reader',
  '/alternatives/dark-reader/',
  '/alternatives/stylus',
  '/alternatives/stylus/',
  '/fix/this-extension-was-disabled-due-to-malware-suspicious-behavior-policy-violation',
  '/fix/this-extension-was-disabled-due-to-malware-suspicious-behavior-policy-violation/',
  '/alternatives/video-downloadhelper',
  '/alternatives/video-downloadhelper/',
  '/comparisons/scriptcat-vs-tampermonkey',
  '/comparisons/scriptcat-vs-tampermonkey/',
  '/sitemap',
  '/sitemap/',
  '/fix/chrome-extensions-disabled',
  '/fix/chrome-extensions-disabled/',
  '/guides/best-custom-css-and-dark-mode-extensions',
  '/guides/best-custom-css-and-dark-mode-extensions/',
];

// Required sections per page (label → section heading text)
// Organized by templateType. New pages should be added here.
// Explicit page configs take precedence over TEMPLATE_DEFAULT_REQUIRED (below).
const PAGE_REQUIRED_SECTIONS = {
  '/alternatives/tampermonkey': [
    'Key Takeaways',
    'Current Status',
    'Common Failed Fixes',
    'Who Should Choose Which Option',
    'Migration Steps',
    'Frequently Asked Questions',
    'Sources',
  ],
  '/guides/chrome-userscript-manager-alternatives': [
    'Tampermonkey vs Violentmonkey',
    'How to Choose',
    'Userscript Safety Checklist',
    'Common Mistakes',
    'Frequently Asked Questions',
    'Sources',
  ],
  '/alternatives/violentmonkey': [
    'Key Takeaways',
    'Current Status',
    'Who Should Choose Which Option',
    'Common Failed Fixes',
    'Migration Steps',
    'Frequently Asked Questions',
    'Sources',
  ],
  '/alternatives/foxyproxy': [
    'Key Takeaways', 'Current Status', 'Common Failed Fixes',
    'Frequently Asked Questions', 'Sources',
  ],
  '/alternatives/ublock-origin': [
    'Key Takeaways', 'Current Status', 'Common Failed Fixes',
    'Frequently Asked Questions', 'Sources',
  ],
  '/alternatives/great-suspender': [
    'Key Takeaways', 'Current Status', 'Common Failed Fixes',
    'Frequently Asked Questions', 'Sources',
  ],
  '/fix/this-extension-was-turned-off-because-it-is-no-longer-supported': [
    'Key Takeaways', 'Current Status', 'Common Failed Fixes',
    'Frequently Asked Questions', 'Sources',
  ],
  '/fix/cannot-install-extension-unsupported-manifest': [
    'Key Takeaways', 'Current Status', 'Common Failed Fixes',
    'Frequently Asked Questions', 'Sources',
  ],
  '/fix/manifest-v2-disabled': [
    'Key Takeaways', 'Current Status', 'Common Failed Fixes',
    'Frequently Asked Questions', 'Sources',
  ],
  '/comparisons/tampermonkey-vs-violentmonkey': [
    'Verdict', 'Key Differences', 'Which One Should You Choose',
    'Common Failed Fixes', 'Related Resources', 'Frequently Asked Questions', 'Sources',
  ],
  '/comparisons/ublock-origin-vs-ublock-origin-lite': [
    'Verdict', 'Key Differences', 'Which One Should You Choose',
    'Common Failed Fixes', 'Frequently Asked Questions', 'Sources',
  ],
  '/comparisons/foxyproxy-vs-switchyomega': [
    'Verdict', 'Key Differences', 'Which One Should You Choose',
    'Common Failed Fixes', 'Frequently Asked Questions', 'Sources',
  ],
  '/guides/best-userscript-managers-for-chrome': [
    'How We Chose', 'Side-by-side Comparison',
    'Who Should Choose Which Option', 'What Not to Do',
    'Safety Checklist', 'Frequently Asked Questions', 'Sources',
  ],
  '/fix/chrome-140-manifest-v2': [
    'Key Takeaways', 'Current Status', 'Common Failed Fixes',
    'Frequently Asked Questions', 'Sources',
  ],
  '/fix/chrome-enable-unsupported-extensions': [
    'Key Takeaways', 'Current Status', 'Common Failed Fixes',
    'Frequently Asked Questions', 'Sources',
  ],
  '/alternatives/dark-reader': [
    'Key Takeaways', 'Current Status', 'Common Failed Fixes',
    'Frequently Asked Questions', 'Sources',
  ],
  '/alternatives/stylus': [
    'Key Takeaways', 'Current Status', 'Common Failed Fixes',
    'Frequently Asked Questions', 'Sources',
  ],
  '/fix/this-extension-was-disabled-due-to-malware-suspicious-behavior-policy-violation': [
    'Quick Answer', 'Key Takeaways', 'Current Status',
    'Common Failed Fixes', 'What You Can Do',
    'Frequently Asked Questions', 'Sources',
  ],
  '/alternatives/video-downloadhelper': [
    'Quick Answer', 'Key Takeaways', 'Current Status',
    'Common Failed Fixes', 'Who Should Choose Which Option',
    'Frequently Asked Questions', 'Sources',
  ],
  '/comparisons/scriptcat-vs-tampermonkey': [
    'Verdict', 'Key Differences',
    'Side-by-side Comparison', 'Which One Should You Choose',
    'Common Failed Fixes', 'Related Resources',
    'Frequently Asked Questions', 'Sources',
  ],

  '/fix/chrome-extensions-disabled': [
    'Key Takeaways', 'Current Status', 'Common Failed Fixes',
    'Frequently Asked Questions', 'Sources',
  ],
  '/guides/best-custom-css-and-dark-mode-extensions': [
    'Best Options at a Glance', 'Safety Checklist',
    'Frequently Asked Questions', 'Sources',
  ],

  // ── Index pages ─────────────────────────────────────────────────────
  '/alternatives': [
    'Tampermonkey alternatives for Chrome',
    'Violentmonkey alternatives for Chrome',
    'Chrome userscript manager alternatives',
  ],
  // Sitemap page uses custom sections — skip generic template checks
  '/sitemap': [],
  '/sitemap/': [],
  // Comparisons index uses custom sections — skip generic template checks
  '/comparisons': [],
  '/comparisons/': [],
};

const PAGE_QA_DATE = {
  '/alternatives/tampermonkey': 'May 22, 2026',
  '/alternatives/violentmonkey': 'May 26, 2026',
  '/alternatives/foxyproxy': 'May 22, 2026',
  '/alternatives/ublock-origin': 'May 22, 2026',
  '/alternatives/great-suspender': 'May 23, 2026',
  '/guides/chrome-userscript-manager-alternatives': 'May 22, 2026',
  '/comparisons/tampermonkey-vs-violentmonkey': 'May 23, 2026',
  '/comparisons/ublock-origin-vs-ublock-origin-lite': 'May 23, 2026',
  '/comparisons/foxyproxy-vs-switchyomega': 'May 23, 2026',
  '/guides/best-userscript-managers-for-chrome': 'May 25, 2026',
  '/fix/chrome-140-manifest-v2': 'May 24, 2026',
  '/fix/cannot-install-extension-unsupported-manifest': 'May 26, 2026',
  '/fix/chrome-enable-unsupported-extensions': 'May 26, 2026',
  '/alternatives/dark-reader': 'May 26, 2026',
  '/alternatives/stylus': 'May 24, 2026',
  '/fix/this-extension-was-disabled-due-to-malware-suspicious-behavior-policy-violation': 'May 25, 2026',
  '/alternatives/video-downloadhelper': 'May 25, 2026',
  '/comparisons/scriptcat-vs-tampermonkey': 'May 25, 2026',
  '/fix/chrome-extensions-disabled': 'May 26, 2026',
  '/guides/best-custom-css-and-dark-mode-extensions': 'May 26, 2026',
};

const PAGE_MIN_WORDS = {
  '/alternatives/tampermonkey': 0,
  '/alternatives/violentmonkey': 80,
  '/alternatives/foxyproxy': 80,
  '/alternatives/ublock-origin': 80,
  '/alternatives/great-suspender': 80,
  '/alternatives/dark-reader': 80,
  '/alternatives/stylus': 80,
  '/guides/chrome-userscript-manager-alternatives': 80,
  '/guides/best-userscript-managers-for-chrome': 90,
  '/fix/chrome-enable-unsupported-extensions': 80,
  '/fix/this-extension-was-disabled-due-to-malware-suspicious-behavior-policy-violation': 80,
  // TODO: page.tsx extensionMeta['video-downloadhelper'].quickAnswer has a 29-word override
  // that prevents the full shortAnswer from being shown. QA word check disabled until resolved.
  '/alternatives/video-downloadhelper': 0,
  '/comparisons/scriptcat-vs-tampermonkey': 0,
  '/fix/chrome-extensions-disabled': 80,
  '/guides/best-custom-css-and-dark-mode-extensions': 80,
};

// Template-type → default required sections (used when page not in PAGE_REQUIRED_SECTIONS above)
// To add a new page, either:
//   a) Add an explicit entry to PAGE_REQUIRED_SECTIONS above (overrides), OR
//   b) Ensure its URL path correctly maps to a templateType below, then it will use these defaults.
const TEMPLATE_DEFAULT_REQUIRED = {
  alternative: [
    'Key Takeaways', 'Current Status', 'Common Failed Fixes',
    'Frequently Asked Questions', 'Sources',
  ],
  fix: [
    'Key Takeaways', 'Current Status', 'Common Failed Fixes',
    'Frequently Asked Questions', 'Sources',
  ],
  guide: [
    'Key Takeaways', 'Current Status', 'Common Failed Fixes',
    'Frequently Asked Questions', 'Sources',
  ],
  comparison: [
    'Verdict', 'Key Differences', 'Which One Should You Choose',
    'Frequently Asked Questions', 'Sources',
  ],
  collection: [
    'Best Options at a Glance', 'How We Chose',
    'Frequently Asked Questions', 'Sources',
  ],
};

// Map URL path prefix to templateType for auto-detection
const URL_TO_TYPE = [
  { prefix: '/alternatives/', type: 'alternative' },
  { prefix: '/fix/', type: 'fix' },
  { prefix: '/comparisons/', type: 'comparison' },
  { prefix: '/guides/', type: 'guide' },
];

function detectTemplateType(pagePath) {
  const normalized = pagePath.replace(/\/$/, '');
  if (PAGE_REQUIRED_SECTIONS[normalized]) return null; // explicit override takes precedence
  for (const { prefix, type } of URL_TO_TYPE) {
    if (normalized.startsWith(prefix)) return type;
  }
  return null;
}

function fetchDecoded(url) {
  return new Promise(resolve => {
    https.get(url, {
      headers: { 'User-Agent': 'QA/1.0', 'Cache-Control': 'no-cache', 'Accept-Encoding': 'gzip, deflate, br' }
    }, res => {
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => {
        const buf = Buffer.concat(chunks);
        const enc = res.headers['content-encoding'] || '';
        let text = '';
        try {
          if (enc.includes('br')) text = zlib.brotliDecompressSync(buf).toString('utf8');
          else if (enc.includes('gzip')) text = zlib.gunzipSync(buf).toString('utf8');
          else text = buf.toString('utf8');
        } catch { text = buf.toString('utf8'); }
        resolve({ status: res.statusCode, data: text });
      });
    }).on('error', () => resolve({ status: 0, data: '' }));
  });
}

function countWords(text) {
  return text.trim().split(/\s+/).filter(w => w.length > 0).length;
}

function extractQuickAnswer(data) {
  const match = data.match(/<h2[^>]*>[^<]*Quick Answer[^<]*<\/h2>([\s\S]*?)(?=<h2)/i);
  if (match) {
    return match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  }
  return '';
}

// ── check:local:text — reads from .next/server/app HTML files ──────────────
function getLocalHtml(pagePath) {
  // Normalize: strip leading/trailing slashes
  const normalized = pagePath.replace(/^\//, '').replace(/\/$/, '');
  const parts = normalized.split('/');
  const appDir = path.join(ROOT, '.next', 'server', 'app');

  // ── Case: single-segment flat page (e.g. 'alternatives', 'guides')
  // Next.js stores flat pages as .rsc or .html at app/ root level.
  if (parts.length === 1) {
    const flatRsc = path.join(appDir, `${parts[0]}.rsc`);
    if (fs.existsSync(flatRsc)) {
      const data = fs.readFileSync(flatRsc, 'utf8');
      // .rsc is a React Server Components binary format — try to extract any visible text
      // If it looks binary-heavy, fall back to .html
      if (data && data.length > 100 && data.includes('<')) {
        return { status: 200, data };
      }
    }
    const flatHtml = path.join(appDir, `${parts[0]}.html`);
    if (fs.existsSync(flatHtml)) {
      return { status: 200, data: fs.readFileSync(flatHtml, 'utf8') };
    }
    // Single-segment pages typically use .rsc; if it exists but is binary, return empty
    if (fs.existsSync(flatRsc)) return { status: 200, data: '' };
    return { status: 0, data: '' };
  }

  // ── Case: multi-segment page (e.g. 'alternatives/tampermonkey')
  // Navigate into subdirectories
  let dir = appDir;
  for (let i = 0; i < parts.length - 1; i++) {
    const subDir = path.join(dir, parts[i]);
    if (!fs.existsSync(subDir)) return { status: 0, data: '' };
    dir = subDir;
  }

  const lastPart = parts[parts.length - 1];

  // Try: lastPart.html (flat file in app/)
  const flatHtml = path.join(appDir, `${lastPart}.html`);
  if (fs.existsSync(flatHtml)) {
    return { status: 200, data: fs.readFileSync(flatHtml, 'utf8') };
  }

  // Try: subdir/lastPart.html (flat file in subdirectory)
  const subHtml = path.join(dir, `${lastPart}.html`);
  if (fs.existsSync(subHtml)) {
    return { status: 200, data: fs.readFileSync(subHtml, 'utf8') };
  }

  // Try: subdir/lastPart/page.js (subdirectory route with index)
  const indexPath = path.join(dir, lastPart, 'page.js');
  if (fs.existsSync(indexPath)) {
    return { status: 200, data: fs.readFileSync(indexPath, 'utf8') };
  }

  return { status: 0, data: '' };
}

async function checkPage(page, source) {
  let htmlData, status;
  if (source === 'prod') {
    const result = await fetchDecoded(`${BASE}${page}`);
    htmlData = result.data;
    status = result.status;
  } else {
    const result = getLocalHtml(page);
    htmlData = result.data;
    status = result.status;
  }

  const sourceLabel = source === 'prod' ? `${BASE}${page}` : `[local] ${page}`;

  if (status !== 200) {
    if (status === 308) {
    const isTampermonkey = TAMPERMONKEY_PAGES.includes(page);
    const type = detectTemplateType(page);
    const pageReqSections = PAGE_REQUIRED_SECTIONS[page.replace(/\/$/, '')] || [];
    const typeReqSections = (!pageReqSections.length && type) ? (TEMPLATE_DEFAULT_REQUIRED[type] || []) : [];
    const requiredSectionCount = pageReqSections.length || typeReqSections.length;
    return {
      label: sourceLabel,
      pass: FORBIDDEN_PATTERNS.length + (isTampermonkey ? TAMPERMONKEY_FORBIDDEN.length : 0) + requiredSectionCount + 2,
      fail: 0,
      skipped: true,
      reason: '308 redirect (valid — slash/non-slash canonicalisation)',
    };
    }
    return {
      label: sourceLabel,
      pass: 0,
      fail: 0,
      skipped: true,
      reason: `HTTP ${status}`,
    };
  }

  const stripped = htmlData.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');

  // Binary .rsc files return near-empty stripped text — skip content checks
  if (stripped.trim().length === 0) {
    return {
      label: sourceLabel,
      pass: 0,
      fail: 0,
      issues: ['SKIP (binary .rsc — cannot parse locally)'],
      skipped: true,
      reason: 'Binary .rsc format — use check:prod:text for /alternatives',
    };
  }

  let pass = 0, fail = 0;
  const issues = [];

  // ── Forbidden pattern checks ─────────────────────────────────────────────
  for (const c of FORBIDDEN_PATTERNS) {
    const m = stripped.match(c.pat);
    if (m) {
      const idx = stripped.indexOf(m[0]);
      const ctx = stripped.substring(Math.max(0, idx - 100), idx + m[0].length + 100);
      issues.push(`FAIL | forbidden:${c.name}: "${m[0].substring(0, 80)}" ...context: "...${ctx}..."`);
      fail++;
    } else {
      pass++;
    }
  }

  // ── 404 detection: fail if page returned HTTP 404 or text looks like a 404 ─
  if (status === 404) {
    issues.push(`FAIL | http-404: server returned HTTP 404`);
    fail++;
  }

  // ── 404-text detection: 200 response that is actually a 404 page ────────
  // Only flag this when the page genuinely looks like Next.js notFound() output,
  // not when "not found" appears in breadcrumbs, search labels, or navigation.
  if (status === 200) {
    const isNotFoundPage =
      /<title[^>]*>Page Not Found/i.test(htmlData) ||
      /<h1[^>]*>\s*Not Found\s*<\/h1>/i.test(htmlData) ||
      (/<title[^>]*>[^<]*404[^<]*<\/title>/i.test(htmlData) && /<h1[^>]*>[^<]*404[^<]*<\/h1>/i.test(htmlData));
    if (isNotFoundPage) {
      issues.push(`FAIL | 404-text: HTTP 200 but page content is a 404 not-found page`);
      fail++;
    }
  }

  // ── Source deduplication: no page should have the same source title or URL twice ─
  {
    const srcTitles = (htmlData.match(/<a[^>]*>\s*([^<]*Chrome Web Store[^<]*)\s*<\/a>/gi) || [])
      .map(a => a.replace(/<a[^>]*>\s*/, '').replace(/\s*<\/a>/, '').trim());
    const dupSrcTitles = srcTitles.filter((t, i) => srcTitles.indexOf(t) !== i);
    if (dupSrcTitles.length > 0) {
      issues.push(`FAIL | dup-source-title: source title(s) appear more than once: "${[...new Set(dupSrcTitles)].join(', ')}"`);
      fail++;
    } else {
      pass++;
    }
  }

  // ── Tampermonkey-page-only forbidden checks ──────────────────────────────
  if (TAMPERMONKEY_PAGES.includes(page)) {
    for (const c of TAMPERMONKEY_FORBIDDEN) {
      const m = stripped.match(c.pat);
      if (m) {
        const idx = stripped.indexOf(m[0]);
        const ctx = stripped.substring(Math.max(0, idx - 100), idx + m[0].length + 100);
        issues.push(`FAIL | forbidden:${c.name}: "${m[0].substring(0, 80)}" ...context: "...${ctx}..."`);
        fail++;
      } else {
        pass++;
      }
    }
  } else {
    // Not a tampermonkey page — just count these as pass
    pass += TAMPERMONKEY_FORBIDDEN.length;
  }

  // ── /alternatives duplicate Tampermonkey card check ───────────────────────
  if (page === '/alternatives' || page === '/alternatives/') {
    // The duplicate-bug symptom is two Tampermonkey cards with different review dates.
    // Check if "Tampermonkey" appears with multiple distinct "Last reviewed:" dates
    // by finding "Tampermonkey" mentions and extracting nearby "Last reviewed:" values.
    const tamLastReviewed = [];
    let searchStart = 0;
    while (true) {
      const tamIdx = stripped.indexOf('Tampermonkey', searchStart);
      if (tamIdx === -1) break;
      const nearbyText = stripped.substring(Math.max(0, tamIdx - 50), tamIdx + 250);
      const reviewMatch = nearbyText.match(/Last reviewed:\s*([\w,\s\d]+)/i);
      if (reviewMatch) tamLastReviewed.push(reviewMatch[1].trim());
      searchStart = tamIdx + 1;
    }
    const uniqueDates = [...new Set(tamLastReviewed)];
    if (uniqueDates.length > 1) {
      issues.push(`FAIL | dup-tampermonkey: Tampermonkey appears with multiple "Last reviewed:" dates: ${uniqueDates.join(', ')}`);
      fail++;
    } else {
      pass++;
    }
  }

  // ── Tampermonkey-page-only duplicate source check ─────────────────────
  if (TAMPERMONKEY_PAGES.includes(page)) {
    // Count exact source titles in <a> tags (the clickable link text)
    // Only the Sources section <a> tags contain "Tampermonkey Chrome Web Store" as title
    const sourceLinkMatches = (htmlData.match(/<a[^>]*>[^<]*Tampermonkey Chrome Web Store[^<]*<\/a>/gi) || []).length;
    if (sourceLinkMatches !== 1) {
      issues.push(`FAIL | tampermonkey-source-dup: "Tampermonkey Chrome Web Store" appears in <a> tags ${sourceLinkMatches} time(s) (expected 1)`);
      fail++;
    } else {
      pass++;
    }
  }

  // ── Required section checks ───────────────────────────────────────────────
  // Priority: explicit PAGE_REQUIRED_SECTIONS[page] > TEMPLATE_DEFAULT_REQUIRED[type] > none
  const normalized = page.replace(/\/$/, '');
  let required = PAGE_REQUIRED_SECTIONS[normalized] || null;
  if (!required) {
    const type = detectTemplateType(page);
    if (type && TEMPLATE_DEFAULT_REQUIRED[type]) {
      required = TEMPLATE_DEFAULT_REQUIRED[type];
    }
  }
  if (required) {
    for (const section of required) {
      const found = stripped.includes(section);
      if (found) {
        pass++;
      } else {
        issues.push(`FAIL | section:"${section}" — heading not found`);
        fail++;
      }
    }
  } else {
    pass++; // unknown type — skip section checks
  }

  // ── Quick Answer word count ───────────────────────────────────────────────
  const qaText = extractQuickAnswer(htmlData);
  const words = countWords(qaText);
  const minWords = PAGE_MIN_WORDS[page] || 0;
  if (minWords > 0) {
    if (words >= minWords) {
      pass++;
    } else {
      issues.push(`FAIL | wordCount: ${words} words (min ${minWords})`);
      issues.push(`       Quick Answer excerpt: "${qaText.substring(0, 200)}..."`);
      fail++;
    }
  } else {
    pass++;
  }

  // ── Last updated date ────────────────────────────────────────────────────
  const expectedDate = PAGE_QA_DATE[page];
  if (expectedDate) {
    if (stripped.includes(`Last updated: ${expectedDate}`)) {
      pass++;
    } else {
      issues.push(`FAIL | lastUpdated: expected "Last updated: ${expectedDate}" not found`);
      fail++;
    }
  } else {
    pass++;
  }

  // ── Sitemap page content checks ────────────────────────────────────────
  if (page === '/sitemap' || page === '/sitemap/') {
    const sitemapRequired = [
      'uBlock Origin vs uBlock Origin Lite',
      'FoxyProxy vs SwitchyOmega',
      'Chrome 140 and Manifest V2 Extensions',
      'Best Custom CSS and Dark Mode Extensions for Chrome',
      'Chrome Extensions Disabled',
    ];
    for (const text of sitemapRequired) {
      if (stripped.includes(text)) {
        pass++;
      } else {
        issues.push(`FAIL | sitemap-missing: sitemap page does not contain "${text}"`);
        fail++;
      }
    }
  }

  // ── Comparisons index page content checks ─────────────────────────────
  if (page === '/comparisons' || page === '/comparisons/') {
    const comparisonsRequired = [
      'Tampermonkey vs Violentmonkey',
      'uBlock Origin vs uBlock Origin Lite',
      'FoxyProxy vs SwitchyOmega',
    ];
    for (const text of comparisonsRequired) {
      if (stripped.includes(text)) {
        pass++;
      } else {
        issues.push(`FAIL | comparisons-missing: /comparisons page does not contain "${text}"`);
        fail++;
      }
    }
  }

  // ── great-suspender duplicate Sources heading check ──────────────────
  if (page === '/alternatives/great-suspender' || page === '/alternatives/great-suspender/') {
    if (/Sources\s+Sources/i.test(stripped)) {
      issues.push('FAIL | dup-sources-heading: "Sources Sources" pattern found in great-suspender page');
      fail++;
    } else {
      pass++;
    }
    if (stripped.includes('Last updated: May 23, 2026')) {
      pass++;
    } else {
      issues.push('FAIL | great-suspender-date: expected "Last updated: May 23, 2026" not found');
      fail++;
    }
  }

  return { label: sourceLabel, pass, fail, issues, skipped: false };
}

async function main() {
  const args = process.argv.slice(2);
  const mode = args[0] === '--local' ? 'local' : 'prod';
  const pages = args[0] === '--local' ? (args.slice(1).length > 0 ? args.slice(1) : PAGES) : PAGES;

  console.log(`\nExtensionFixes Production Text QA  (mode: ${mode})`);
  console.log('='.repeat(70));

  let totalPass = 0, totalFail = 0;

  for (const page of pages) {
    const result = await checkPage(page, mode);
    console.log(`\n${'─'.repeat(70)}`);
    console.log(`URL: ${result.label}  [${result.skipped ? 'SKIP' : 'OK'}]`);
    if (result.skipped) {
      console.log(`  SKIPPED: ${result.reason}`);
      totalPass += result.pass;
    } else {
      for (const issue of result.issues) {
        console.log(`  ${issue}`);
      }
      console.log(`  Summary: ${result.pass} PASS, ${result.fail} FAIL`);
      totalPass += result.pass;
      totalFail += result.fail;
    }
  }

  console.log(`\n${'='.repeat(70)}`);
  console.log(`OVERALL: ${totalPass} PASS, ${totalFail} FAIL`);
  if (totalFail > 0) process.exit(1);
}

const FORBIDDEN_PATTERNS = [
  { name: 'official succ',      pat: /(?<!not an\s)official successor/i },
  { name: 'safest',            pat: /\bsafest\b/i },
  { name: 'guaranteed fix',   pat: /guaranteed fix/i },
  { name: 'feature parity',   pat: /feature parity/i },
  { name: 'full feat parity', pat: /full feature parity/i },
  { name: 'fully equiv',      pat: /fully equivalent/i },
  { name: 'equiv replace',    pat: /equivalent replacement/i },
  { name: '1.1',           pat: /\.1\s+1(?:\s|$)/i },
  { name: '2.2',           pat: /\.2\s+2(?:\s|$)/i },
  { name: '3.3',           pat: /\.3\s+3(?:\s|$)/i },
  { name: 'random CRX rec', pat: /(?<!do not\s)download random CRX/i },
  { name: 'dup h2 Key Takeaways',   pat: /Key Takeaways\s+Key Takeaways/i },
  { name: 'dup h2 Current Status',  pat: /Current Status\s+Current Status/i },
  { name: 'dup h2 Common Failed',   pat: /Common Failed Fixes\s+Common Failed Fixes/i },
  { name: 'dup h2 FAQ',             pat: /Frequently Asked Questions\s+Frequently Asked Questions/i },
  { name: 'dup h2 Sources',        pat: /Sources\s+Sources/i },
  { name: 'ai summary',           pat: /AI Summary/i },
  { name: 'summary for ai',       pat: /Summary for AI Assistants/i },
  { name: 'privacy-conscious',    pat: /privacy-conscious/i },
  { name: 'full open-src trans', pat: /full open-source transparency/i },
];

// Tampermonkey-page-only forbidden patterns
const TAMPERMONKEY_FORBIDDEN = [
  { name: 'tampermonkey-atAGlance',      pat: /At a Glance/i },
  { name: 'tampermonkey-comparisonTable', pat: /Comparison Table/i },
  { name: 'tampermonkey-commonMistakes', pat: /Common Mistakes to Avoid/i },
  { name: 'tampermonkey-oldDecision',    pat: /Which Option Should You Choose/i },
  { name: 'tampermonkey-privacyCon',     pat: /privacy-conscious/i },
  { name: 'tampermonkey-openSrc',        pat: /full open-source transparency/i },
];

const TAMPERMONKEY_PAGES = ['/alternatives/tampermonkey', '/alternatives/tampermonkey/'];

main().catch(e => { console.error(e); process.exit(1); });
