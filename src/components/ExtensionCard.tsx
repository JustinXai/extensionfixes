import Link from 'next/link';
import type { ExtensionRecord } from '@/lib/types';
import { StatusBadge } from './StatusBadge';

interface ExtensionCardProps {
  extension: ExtensionRecord;
  className?: string;
}

export function ExtensionCard({ extension, className = '' }: ExtensionCardProps) {
  return (
    <Link
      href={`/alternatives/${extension.slug}`}
      className={`group block rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-gray-300 hover:shadow-md ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {extension.name}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{extension.category}</p>
        </div>
        <StatusBadge status={extension.status} />
      </div>

      <p className="mt-3 text-sm text-gray-600 line-clamp-2">
        {extension.shortAnswer}
      </p>

      <div className="mt-4 flex items-center text-sm font-medium text-blue-600">
        View alternatives
        <svg
          className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </Link>
  );
}
