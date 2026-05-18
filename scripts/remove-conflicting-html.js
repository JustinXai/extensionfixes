/**
 * Post-build: Remove conflicting .html files from .next/server output.
 *
 * Next.js generates .html files for each route (e.g., index.html for /).
 * When a route has both an .html file AND a subdirectory with the same name,
 * Vercel serves the .html file as a static file, causing 404s for the
 * dynamic route. This script removes .html files that conflict with
 * directory-based routes (those with a [slug] or similar dynamic segment).
 *
 * Run after `next build`:
 *   npm run build && node scripts/remove-conflicting-html.js
 */
import fs from 'fs';
import path from 'path';

function findHtmlConflicts(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const conflicts = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const fullPath = path.join(dir, entry.name);
    const htmlFile = path.join(dir, `${entry.name}.html`);
    const rscFile = path.join(dir, `${entry.name}.rsc`);

    if (fs.existsSync(htmlFile) && fs.existsSync(rscFile)) {
      // This directory has both an .html file AND an .rsc file (static route)
      // The .html file will be served instead of the directory route → 404
      conflicts.push(htmlFile);
    }

    // Recurse into subdirectories
    const subConflicts = findHtmlConflicts(fullPath);
    conflicts.push(...subConflicts);
  }

  return conflicts;
}

const serverDir = path.join(process.cwd(), '.next', 'server', 'app');
if (!fs.existsSync(serverDir)) {
  console.log('No .next/server/app directory found — skipping conflict removal');
  process.exit(0);
}

const conflicts = findHtmlConflicts(serverDir);

if (conflicts.length === 0) {
  console.log('No conflicting .html files found');
  process.exit(0);
}

console.log(`Removing ${conflicts.length} conflicting .html file(s):`);
for (const file of conflicts) {
  const relative = path.relative(process.cwd(), file);
  fs.unlinkSync(file);
  console.log(`  Removed: ${relative}`);
}

console.log('\nDone.');
