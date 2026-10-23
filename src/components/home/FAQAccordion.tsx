"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = { q: string; a: string };

export function FAQAccordion({ items }: { items: readonly FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-pine-900/15">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div
            key={item.q}
            className="overflow-hidden border-b border-pine-900/15 bg-transparent transition-colors hover:bg-white/60"
          >
            <button
              type="button"
              id={`faq-question-${i}`}
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              aria-controls={`faq-answer-${i}`}
              className="flex min-h-[64px] w-full items-center justify-between gap-4 px-1 py-5 text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine-600 focus-visible:ring-inset sm:px-4"
            >
              <span className="text-base font-semibold text-ink sm:text-lg">{item.q}</span>
              <ChevronDown
              className={`h-5 w-5 shrink-0 text-pine-700 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            <div
              id={`faq-answer-${i}`}
              role="region"
              aria-labelledby={`faq-question-${i}`}
              className={`grid transition-[grid-template-rows] duration-200 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="px-1 pb-6 pe-10 text-sm leading-7 text-ink/65 sm:px-4 sm:text-base">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
