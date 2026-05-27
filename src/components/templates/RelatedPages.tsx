import Link from 'next/link';
import type { RelatedPage } from '@/lib/contentTypes';

interface RelatedPagesProps {
  pages: RelatedPage[];
}

export function RelatedPages({ pages }: RelatedPagesProps) {
  if (!pages || pages.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {pages.map((page) => {
        // Only render internal links (href starts with /)
        const isInternal = page.href && page.href.startsWith('/');
        const content = (
          <span className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
            {page.title}
          </span>
        );

        return (
          <div
            key={page.href + page.title}
            className="flex items-center rounded-lg border border-slate-200 bg-white px-3 py-2 hover:border-blue-200 hover:bg-blue-50/30 transition-colors"
          >
            {isInternal ? (
              <Link href={page.href}>{content}</Link>
            ) : (
              <a href={page.href} target="_blank" rel="noopener noreferrer">
                {content}
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
}
