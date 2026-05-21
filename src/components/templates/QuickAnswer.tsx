interface QuickAnswerProps {
  answer: string;
  className?: string;
}

export function QuickAnswer({ answer, className = '' }: QuickAnswerProps) {
  return (
    <div className={`rounded-xl border border-blue-200 bg-blue-50 p-5 ${className}`}>
      <h2 className="text-sm font-semibold text-blue-800 uppercase tracking-wide mb-2">
        Quick Answer
      </h2>
      <p className="text-slate-700 leading-relaxed">{answer}</p>
    </div>
  );
}
