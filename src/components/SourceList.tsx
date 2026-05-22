import type { SourceItem } from '@/lib/types';

interface SourceListProps {
  sources: SourceItem[];
  className?: string;
}

const reliabilityLabel: Record<string, string> = {
  primary: 'Primary source',
  secondary: 'Secondary source',
  discovery: 'Discovery source',
};

const typeLabel: Record<string, string> = {
  'chrome-web-store': 'Chrome Web Store',
  'chrome-developers': 'Chrome Developers',
  'official-website': 'Official website',
  github: 'GitHub',
  documentation: 'Documentation',
  'alternative-directory': 'Alternative directory',
  'community-discussion': 'Community discussion',
  news: 'News',
  other: 'Other',
};

export function SourceList({ sources, className = '' }: SourceListProps) {
  if (!sources || sources.length === 0) return null;

  return (
    <div className={className}>
      <ul className="space-y-4">
        {sources.map((source, index) => {
          const reliability = source.reliability
            ? reliabilityLabel[source.reliability] ?? source.reliability
            : null;
          const sourceType = source.sourceType
            ? typeLabel[source.sourceType] ?? source.sourceType
            : null;

          return (
            <li key={index} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline font-medium text-sm"
              >
                {source.title}
              </a>
              <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                {source.publisher && (
                  <span className="font-medium">{source.publisher}</span>
                )}
                {source.publisher && sourceType && (
                  <span className="text-slate-300" aria-hidden="true">·</span>
                )}
                {sourceType && (
                  <span className="text-slate-500">{sourceType}</span>
                )}
                {reliability && (
                  <>
                    <span className="text-slate-300" aria-hidden="true">·</span>
                    <span className={`font-medium ${
                      reliability === 'Primary source'
                        ? 'text-green-700'
                        : reliability === 'Secondary source'
                        ? 'text-amber-700'
                        : 'text-slate-500'
                    }`}>
                      {reliability}
                    </span>
                  </>
                )}
              </div>
              {source.supports && (
                <p className="mt-1 text-xs text-slate-400 italic">
                  Supports: {source.supports}
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
