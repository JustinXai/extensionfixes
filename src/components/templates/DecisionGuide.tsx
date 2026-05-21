import Link from 'next/link';
import type { DecisionItem } from '@/lib/contentTypes';

interface DecisionGuideProps {
  items: DecisionItem[];
}

export function DecisionGuide({ items }: DecisionGuideProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex gap-4 rounded-xl border border-blue-100 bg-blue-50 p-4"
        >
          <div
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white"
            aria-hidden="true"
          >
            {index + 1}
          </div>
          <div>
            {item.href ? (
              <Link
                href={item.href}
                className="font-semibold text-slate-900 hover:text-blue-700 hover:underline"
              >
                {item.choose}
              </Link>
            ) : (
              <p className="font-semibold text-slate-900">{item.choose}</p>
            )}
            <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.when}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
