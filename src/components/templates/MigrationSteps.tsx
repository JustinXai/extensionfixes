import type { MigrationStep } from '@/lib/contentTypes';

interface MigrationStepsProps {
  steps: MigrationStep[];
}

export function MigrationSteps({ steps }: MigrationStepsProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <div className="space-y-4" role="list">
      {steps.map((step, index) => (
        <div key={index} className="flex gap-4" role="listitem">
          <span
            className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600"
            aria-hidden="true"
          >
            {index + 1}
          </span>
          <div className="pt-0.5">
            <p className="text-slate-700 font-medium leading-relaxed">{step.title}</p>
            {step.description && (
              <p className="mt-1 text-slate-600 text-sm leading-relaxed">{step.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
