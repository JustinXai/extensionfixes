import type { ExtensionStatus } from '@/lib/types';
import { getStatusConfig } from '@/lib/utils';

interface StatusBadgeProps {
  status: ExtensionStatus;
  className?: string;
}

export function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const config = getStatusConfig(status);

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${config.bgColor} ${config.color} ${className}`}
    >
      {config.label}
    </span>
  );
}
