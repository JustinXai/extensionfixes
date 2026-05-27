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
      <div className="divide-y divide-slate-200 rounded-xl border border-slate-200">
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
                className={`flex w-full items-center justify-between py-4 px-5 text-left transition-colors ${
                  isOpen
                    ? 'border-l-2 border-blue-500 pl-4 bg-blue-50/50'
                    : 'hover:bg-gray-50'
                }`}
              >
                <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                <svg
                  className={`h-5 w-5 flex-shrink-0 text-gray-500 transition-transform duration-200 ease-in-out ${isOpen ? 'rotate-180' : ''}`}
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
                  className="px-5 pb-4 text-gray-600 leading-relaxed text-sm"
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
