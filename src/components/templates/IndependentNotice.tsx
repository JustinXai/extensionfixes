interface IndependentNoticeProps {
  className?: string;
}

export function IndependentNotice({ className = '' }: IndependentNoticeProps) {
  return (
    <p className={`mt-2 text-xs ${className || 'text-slate-400'}`}>
      Independent guide. Not affiliated with Google, Chrome, Chrome Web Store, or
      listed extension developers.
    </p>
  );
}
