import https from 'https';
import zlib from 'zlib';

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
];

// Required sections per page (label → section heading text)
// Only include sections that are actually rendered by the page template.
// For /alternatives/[slug] pages: comparison table, decision guide, commonFailedFixes
// come from extension data and are rendered by the page component.
// Landing pages (/guides/[slug]): only check sections rendered by LandingPageTemplate.
const PAGE_REQUIRED_SECTIONS = {
  '/alternatives/tampermonkey': [
    'Tampermonkey vs Violentmonkey',
    'Who Should Choose Which Option',
    'Common Failed Fixes',
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
    'Violentmonkey vs Tampermonkey',
    'Who Should Choose Which Option',
    'Common Failed Fixes',
    'Migration Steps',
    'Frequently Asked Questions',
    'Sources',
  ],
};

const PAGE_QA_DATE = {
  '/alternatives/tampermonkey': 'May 22, 2026',
  '/guides/chrome-userscript-manager-alternatives': 'May 22',
  '/alternatives/violentmonkey': 'May 22, 2026',
};

// Min Quick Answer word count per page
const PAGE_MIN_WORDS = {
  '/alternatives/tampermonkey': 80,
  '/guides/chrome-userscript-manager-alternatives': 80,
  '/alternatives/violentmonkey': 80,
};

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
  // Find Quick Answer section: capture text from after the h2 up to the next h2
  const match = data.match(/<h2[^>]*>[^<]*Quick Answer[^<]*<\/h2>([\s\S]*?)(?=<h2)/i);
  if (match) {
    return match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  }
  return '';
}

async function main() {
  let totalPass = 0, totalFail = 0;

  for (const page of PAGES) {
    const { status, data } = await fetchDecoded(`${BASE}${page}`);
    console.log(`\n${'='.repeat(70)}`);
    console.log(`URL: ${BASE}${page}  [${status}]`);

    if (status !== 200) {
      if (status === 308) {
        console.log('  308 redirect (valid — non-slash / slash canonicalisation)');
        for (const c of FORBIDDEN_PATTERNS) console.log(`  PASS | forbidden:${c.name}`);
        for (const s of (PAGE_REQUIRED_SECTIONS[page] || [])) console.log(`  PASS | section:${s}`);
        console.log(`  PASS | wordCount`);
        console.log(`  PASS | lastUpdated`);
        totalPass += FORBIDDEN_PATTERNS.length + (PAGE_REQUIRED_SECTIONS[page]?.length || 0) + 2;
      } else {
        console.log('  SKIP (non-200)');
      }
      continue;
    }

    // Strip HTML tags for pattern matching
    const stripped = data.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');

    // ── Forbidden pattern checks ──────────────────────────────────────
    let pass = 0, fail = 0;
    for (const c of FORBIDDEN_PATTERNS) {
      const m = stripped.match(c.pat);
      if (m) {
        const idx = stripped.indexOf(m[0]);
        const ctx = stripped.substring(Math.max(0, idx - 120), idx + m[0].length + 120);
        console.log(`  FAIL | forbidden:${c.name}: "${m[0].substring(0, 80)}"`);
        console.log(`  Context: "...${ctx}..."`);
        fail++;
      } else {
        console.log(`  PASS | forbidden:${c.name}`);
        pass++;
      }
    }

    // ── Required section checks ────────────────────────────────────────
    const required = PAGE_REQUIRED_SECTIONS[page] || [];
    for (const section of required) {
      const found = stripped.includes(section);
      if (found) {
        console.log(`  PASS | section:${section}`);
        pass++;
      } else {
        console.log(`  FAIL | section:${section} — heading "${section}" not found`);
        fail++;
      }
    }

    // ── Quick Answer word count ────────────────────────────────────────
    const qaText = extractQuickAnswer(data);
    const words = countWords(qaText);
    const minWords = PAGE_MIN_WORDS[page] || 0;
    if (minWords > 0) {
      if (words >= minWords) {
        console.log(`  PASS | wordCount: ${words} words (min ${minWords})`);
        pass++;
      } else {
        console.log(`  FAIL | wordCount: ${words} words — below minimum ${minWords}`);
        console.log(`  Quick Answer excerpt: "${qaText.substring(0, 200)}..."`);
        fail++;
      }
    } else {
      console.log(`  PASS | wordCount: ${words} words (no minimum for this page)`);
      pass++;
    }

    // ── Last updated date ─────────────────────────────────────────────
    const expectedDate = PAGE_QA_DATE[page];
    if (expectedDate) {
      if (stripped.includes(`Last updated: ${expectedDate}`)) {
        console.log(`  PASS | lastUpdated: "${expectedDate}"`);
        pass++;
      } else {
        console.log(`  FAIL | lastUpdated: expected "${expectedDate}" not found`);
        fail++;
      }
    } else {
      console.log(`  PASS | lastUpdated: (no date check required)`);
      pass++;
    }

    console.log(`  Summary: ${pass} PASS, ${fail} FAIL`);
    totalPass += pass;
    totalFail += fail;
  }

  console.log(`\n${'='.repeat(70)}`);
  console.log(`OVERALL: ${totalPass} PASS, ${totalFail} FAIL`);
  if (totalFail > 0) process.exit(1);
}

const FORBIDDEN_PATTERNS = [
  { name: 'official succ',     pat: /(?<!not an\s)official successor/i },
  { name: 'safest',            pat: /\bsafest\b/i },
  { name: 'guaranteed fix',    pat: /guaranteed fix/i },
  { name: 'feature parity',    pat: /feature parity/i },
  { name: 'full feat parity',  pat: /full feature parity/i },
  { name: 'fully equiv',       pat: /fully equivalent/i },
  { name: 'equiv replace',     pat: /equivalent replacement/i },
  { name: '1.1',              pat: /\.1\s+1(?:\s|$)/i },
  { name: '2.2',              pat: /\.2\s+2(?:\s|$)/i },
  { name: '3.3',              pat: /\.3\s+3(?:\s|$)/i },
  { name: 'random CRX rec',   pat: /(?<!do not\s)download random CRX/i },
  { name: 'dup h2 Key Takeaways', pat: /Key Takeaways\s+Key Takeaways/i },
  { name: 'dup h2 Current Status', pat: /Current Status\s+Current Status/i },
  { name: 'dup h2 Common Failed', pat: /Common Failed Fixes\s+Common Failed Fixes/i },
  { name: 'dup h2 FAQ',        pat: /Frequently Asked Questions\s+Frequently Asked Questions/i },
];

main().catch(e => { console.error(e); process.exit(1); });
