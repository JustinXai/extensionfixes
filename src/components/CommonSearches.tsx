import Link from 'next/link';

interface CommonSearch {
  label: string;
  href: string;
}

interface CommonSearchesProps {
  searches: CommonSearch[];
  className?: string;
}

export function CommonSearches({ searches, className = '' }: CommonSearchesProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      <span className="text-sm text-slate-600">Common searches:</span>
      {searches.map((search, index) => (
        <Link
          key={index}
          href={search.href}
          className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 transition-colors hover:bg-slate-50"
        >
          {search.label}
        </Link>
      ))}
    </div>
  );
}
