interface QuickAnswerProps {
  answer: string;
  className?: string;
}

export function QuickAnswer({ answer, className = '' }: QuickAnswerProps) {
  return (
    <div className={`rounded-xl border border-slate-200 bg-slate-50 p-6 ${className}`}>
      <h2 className="text-sm font-semibold text-slate-700 mb-2">
        Quick Answer
      </h2>
      <p className="text-slate-600 leading-relaxed">{answer}</p>
    </div>
  );
}
