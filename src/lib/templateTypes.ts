// Template type discriminator for all content pages.
// All new data records must declare their templateType so QA can
// automatically apply the correct required-section and forbidden checks.

export type TemplateType =
  | 'alternative' // /alternatives/[slug]  — uBlock Origin, Tampermonkey, etc.
  | 'fix'        // /fix/[slug]          — unsupported manifest, MV2 disabled, etc.
  | 'guide'      // /guides/[slug]       — cluster hubs like chrome-userscript-manager-alternatives
  | 'comparison' // /comparisons/[slug]  — A vs B pages
  | 'collection' // /guides/[slug]       — best-N lists, landing pages

// Human-readable labels for display in review/QA output.
export const TEMPLATE_TYPE_LABELS: Record<TemplateType, string> = {
  alternative: 'Alternative Page (/alternatives/[slug])',
  fix: 'Fix / Error Page (/fix/[slug])',
  guide: 'Guide / Cluster Hub (/guides/[slug])',
  comparison: 'Comparison Page (/comparisons/[slug])',
  collection: 'Collection / Best-List (/guides/[slug])',
};

// Routes associated with each template type.
export const TEMPLATE_ROUTES: Record<TemplateType, string> = {
  alternative: '/alternatives/[slug]',
  fix: '/fix/[slug]',
  guide: '/guides/[slug]',
  comparison: '/comparisons/[slug]',
  collection: '/guides/[slug]',
};
