interface StatusEntry {
  label: string;
  value: string;
  variant?: 'default' | 'good' | 'bad' | 'neutral';
}

interface CurrentStatusCardProps {
  entries: StatusEntry[];
  className?: string;
}

const variantStyles: Record<string, string> = {
  good: 'text-green-700 bg-green-50',
  bad: 'text-red-700 bg-red-50',
  neutral: 'text-slate-700 bg-slate-50',
  default: 'text-slate-700 bg-slate-50',
};

export function CurrentStatusCard({ entries, className = '' }: CurrentStatusCardProps) {
  if (!entries || entries.length === 0) return null;

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-5 ${className}`}>
      <dl className="space-y-3">
        {entries.map((entry) => (
          <div key={entry.label} className="flex flex-col gap-1">
            <dt className="text-xs font-medium text-slate-500 uppercase tracking-wide">
              {entry.label}
            </dt>
            <dd
              className={`inline-flex items-center rounded-md px-2 py-1 text-sm font-medium ${
                variantStyles[entry.variant || 'default']
              }`}
            >
              {entry.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
