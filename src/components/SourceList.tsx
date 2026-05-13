import type { SourceItem } from '@/lib/types';

interface SourceListProps {
  sources: SourceItem[];
  className?: string;
}

function getDomainFromUrl(url: string): string {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname.replace('www.', '');
  } catch {
    return '';
  }
}

export function SourceList({ sources, className = '' }: SourceListProps) {
  if (!sources || sources.length === 0) return null;

  return (
    <div className={className}>
      <h2 className="text-lg font-semibold text-slate-900 mb-4">Sources</h2>
      <ul className="space-y-3">
        {sources.map((source, index) => (
          <li key={index} className="flex items-start gap-3 text-sm">
            <svg
              className="mt-0.5 h-5 w-5 flex-shrink-0 text-slate-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                clipRule="evenodd"
              />
            </svg>
            <div className="flex-1 min-w-0">
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
              >
                {source.title}
              </a>
              <div className="mt-1 text-slate-500 text-xs">
                {source.publisher && (
                  <span>{source.publisher}</span>
                )}
                <span className="mx-1">·</span>
                <span className="text-slate-400">{getDomainFromUrl(source.url)}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
