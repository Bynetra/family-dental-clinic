"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { SectionHeading } from "@/components/common/SectionHeading";
import { cn } from "@/lib/utils";

export function FAQ({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:py-28">
        <SectionHeading eyebrow={dict.faq.eyebrow} title={dict.faq.heading} sub={dict.faq.sub} />
        <div className="mt-10 space-y-3">
          {dict.faq.items.map((item, i) => {
            const open = openIndex === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-pine-900/10 bg-white"
              >
                <button
                  type="button"
                  id={`faq-question-${i}`}
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  aria-controls={`faq-answer-${i}`}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start"
                >
                  <span className="font-semibold text-ink">{item.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-pine-700 transition-transform",
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
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 leading-relaxed text-ink/65">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
