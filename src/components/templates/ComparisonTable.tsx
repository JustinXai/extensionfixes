import type { ComparisonRow } from '@/lib/types';

interface ComparisonTableProps {
  rows: ComparisonRow[];
  columns?: string[];
  className?: string;
}

const DEFAULT_COLUMNS = ['Option', 'Best For', 'MV3', 'Cost', 'Open Source', 'Setup', 'Main Trade-off'];

function Mv3Badge({ value }: { value: string }) {
  const isGood = value === 'Yes' || value === 'Yes (official)';
  const isAmber = value.includes('MV2');
  return (
    <span
      className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
        isGood
          ? 'bg-green-50 text-green-700'
          : isAmber
          ? 'bg-amber-50 text-amber-700'
          : 'bg-gray-50 text-gray-600'
      }`}
    >
      {value}
    </span>
  );
}

function BoolBadge({ value }: { value: string }) {
  return (
    <span
      className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
        value === 'Yes' ? 'bg-green-50 text-green-700' : 'bg-gray-50 text-gray-600'
      }`}
    >
      {value}
    </span>
  );
}

export function ComparisonTable({ rows, columns = DEFAULT_COLUMNS, className = '' }: ComparisonTableProps) {
  if (!rows || rows.length === 0) return null;

  return (
    <div className={`overflow-x-auto rounded-xl border border-gray-200 ${className}`}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((col) => (
              <th
                key={col}
                className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 sm:px-6"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-gray-50">
              <td className="px-4 py-4 text-sm font-medium text-gray-900 sm:px-6">{row.option}</td>
              <td className="px-4 py-4 text-sm text-gray-600 sm:px-6">{row.bestFor}</td>
              <td className="px-4 py-4 text-sm sm:px-6">
                <Mv3Badge value={row.mv3Support} />
              </td>
              <td className="px-4 py-4 text-sm text-gray-600 sm:px-6">{row.cost}</td>
              <td className="px-4 py-4 text-sm sm:px-6">
                <BoolBadge value={row.openSource} />
              </td>
              <td className="px-4 py-4 text-sm text-gray-600 sm:px-6">{row.setupDifficulty}</td>
              <td className="px-4 py-4 text-sm text-gray-600 sm:px-6">{row.mainTradeoff}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
