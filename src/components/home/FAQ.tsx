import { HelpCircle } from "lucide-react";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { FAQAccordion } from "@/components/home/FAQAccordion";

export function FAQ({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-pine-800/15 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-pine-800 mb-3 shadow-2xs">
            <HelpCircle className="h-3.5 w-3.5 text-pine-700" aria-hidden="true" />
            <span>{dict.faq.eyebrow}</span>
          </div>
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            {dict.faq.heading}
          </h2>
          {dict.faq.sub && (
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink/70">
              {dict.faq.sub}
            </p>
          )}
        </div>

        <FAQAccordion items={dict.faq.items} />
      </div>
    </section>
  );
}
