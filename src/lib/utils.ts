import type { ExtensionStatus, RiskLevel } from './types';

/**
 * Format date string to readable format
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Get status display configuration
 */
export function getStatusConfig(status: ExtensionStatus): {
  label: string;
  color: string;
  bgColor: string;
} {
  const configs: Record<
    ExtensionStatus,
    { label: string; color: string; bgColor: string }
  > = {
    active_mv3: {
      label: 'Active (MV3)',
      color: 'text-green-700',
      bgColor: 'bg-green-50 border-green-200',
    },
    affected_by_mv2: {
      label: 'Affected by MV2',
      color: 'text-amber-700',
      bgColor: 'bg-amber-50 border-amber-200',
    },
    removed: {
      label: 'Removed',
      color: 'text-red-700',
      bgColor: 'bg-red-50 border-red-200',
    },
    legacy: {
      label: 'Legacy',
      color: 'text-orange-700',
      bgColor: 'bg-orange-50 border-orange-200',
    },
    unknown: {
      label: 'Unknown',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50 border-gray-200',
    },
  };

  return configs[status] || configs.unknown;
}

/**
 * Get risk level display configuration
 */
export function getRiskConfig(riskLevel: RiskLevel): {
  label: string;
  color: string;
  icon: string;
} {
  const configs: Record<
    RiskLevel,
    { label: string; color: string; icon: string }
  > = {
    low: {
      label: 'Low Risk',
      color: 'text-green-600',
      icon: '✓',
    },
    medium: {
      label: 'Medium Risk',
      color: 'text-amber-600',
      icon: '!',
    },
    high: {
      label: 'High Risk',
      color: 'text-red-600',
      icon: '⚠',
    },
    unknown: {
      label: 'Unknown Risk',
      color: 'text-gray-500',
      icon: '?',
    },
  };

  return configs[riskLevel] || configs.unknown;
}

/**
 * Truncate text with ellipsis
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

/**
 * Convert string to slug
 */
export function toSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Generate relative time string
 */
export function getRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}

/**
 * Class name helper (simple cn implementation)
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}
