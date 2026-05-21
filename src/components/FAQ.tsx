'use client';

import { useState } from 'react';
import type { FAQItem } from '@/lib/types';

interface FAQProps {
  faqs: FAQItem[];
  /** Skips rendering the h2 — caller provides the section heading instead. */
  skipHeading?: boolean;
  className?: string;
}

export function FAQ({ faqs, skipHeading = false, className = '' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className={`space-y-3 ${className}`}>
      {!skipHeading && (
        <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
      )}
      <div className="divide-y divide-gray-200 rounded-xl border border-gray-200">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const contentId = `faq-content-${index}`;
          const triggerId = `faq-trigger-${index}`;

          return (
            <div key={index}>
              <button
                type="button"
                id={triggerId}
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between py-4 px-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <svg
                  className={`h-5 w-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isOpen && (
                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={triggerId}
                  className="px-5 pb-4 text-gray-600"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
