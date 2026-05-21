interface KeyTakeawaysProps {
  items: string[];
  className?: string;
}

export function KeyTakeaways({ items, className = '' }: KeyTakeawaysProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-5 ${className}`}>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex gap-2.5 text-sm text-slate-600">
            <span className="flex-shrink-0 mt-0.5 h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5" aria-hidden="true" />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
