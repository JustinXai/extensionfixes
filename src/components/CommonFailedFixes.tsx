import type { FailedFixEntry } from '@/lib/types';

interface CommonFailedFixesProps {
  items: FailedFixEntry[];
  className?: string;
}

export function CommonFailedFixes({ items, className = '' }: CommonFailedFixesProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className={`rounded-xl border border-amber-200 bg-amber-50 p-5 ${className}`}>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex gap-3">
            <svg
              className="h-5 w-5 flex-shrink-0 text-amber-500 mt-0.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <div className="min-w-0 flex-1">
              {'doesNotWork' in item ? (
                <p className="text-sm text-amber-800 font-medium">{item.doesNotWork}</p>
              ) : (
                <>
                  <p className="text-sm font-medium text-amber-800">
                    Trying to: {item.tried}
                  </p>
                  {item.whyItFails && (
                    <p className="mt-1 text-sm text-amber-700">
                      <span className="font-medium">Why it does not work:</span>{' '}
                      {item.whyItFails}
                    </p>
                  )}
                  {item.saferAlternative && (
                    <p className="mt-1 text-sm text-green-700">
                      <span className="font-medium">Safer alternative:</span>{' '}
                      {item.saferAlternative}
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
