"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type FAQItem = { q: string; a: string };

export function FAQAccordion({ items }: { items: readonly FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3.5">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div
            key={item.q}
            className={cn(
              "overflow-hidden rounded-2xl border bg-white transition-all duration-200",
              open
                ? "border-pine-800/30 shadow-sm"
                : "border-pine-900/10 hover:border-pine-900/20"
            )}
          >
            <button
              type="button"
              id={`faq-question-${i}`}
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              aria-controls={`faq-answer-${i}`}
              className="flex min-h-[52px] w-full items-center justify-between gap-4 px-6 py-4.5 text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine-600 focus-visible:ring-inset"
            >
              <span className="text-base font-semibold text-ink sm:text-lg">{item.q}</span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-pine-700 transition-transform duration-200",
                  open && "rotate-180"
                )}
                aria-hidden="true"
              />
            </button>
            <div
              id={`faq-answer-${i}`}
              role="region"
              aria-labelledby={`faq-question-${i}`}
              className={cn(
                "grid transition-[grid-template-rows] duration-200 ease-out",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <p className="border-t border-pine-900/5 px-6 pb-5 pt-3 text-sm leading-relaxed text-ink/70 sm:text-base">
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
