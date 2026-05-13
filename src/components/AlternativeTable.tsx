import type { AlternativeRecord } from '@/lib/types';
import { StatusBadge } from './StatusBadge';

interface AlternativeTableProps {
  alternatives: AlternativeRecord[];
  caption?: string;
}

export function AlternativeTable({ alternatives, caption }: AlternativeTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        {caption && (
          <caption className="sr-only">{caption}</caption>
        )}
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 sm:px-6"
            >
              Alternative
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 sm:px-6"
            >
              Best For
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 sm:px-6"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 sm:px-6"
            >
              Links
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {alternatives.length === 0 ? (
            <tr>
              <td colSpan={4} className="px-4 py-12 text-center text-gray-500 sm:px-6">
                No alternatives found.
              </td>
            </tr>
          ) : (
            alternatives.map((alt) => (
              <tr key={alt.slug} className="hover:bg-gray-50">
                <td className="px-4 py-4 text-sm sm:px-6">
                  <div className="font-medium text-gray-900">{alt.name}</div>
                  <div className="text-gray-500">
                    {alt.pros.slice(0, 2).join(' · ')}
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-gray-600 sm:px-6">
                  {alt.bestFor}
                </td>
                <td className="px-4 py-4 whitespace-nowrap sm:px-6">
                  <StatusBadge status={alt.status} />
                </td>
                <td className="px-4 py-4 whitespace-nowrap sm:px-6">
                  <div className="flex flex-wrap items-center gap-2">
                    {alt.chromeStoreUrl && (
                      <a
                        href={alt.chromeStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-800 whitespace-nowrap"
                      >
                        Chrome Store
                      </a>
                    )}
                    {alt.githubUrl && (
                      <a
                        href={alt.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-800 whitespace-nowrap"
                      >
                        GitHub
                      </a>
                    )}
                    {alt.url && (
                      <a
                        href={alt.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-800 whitespace-nowrap"
                      >
                        Website
                      </a>
                    )}
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
