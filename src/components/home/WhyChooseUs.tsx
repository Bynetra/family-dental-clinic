import { Check } from "lucide-react";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { SectionHeading } from "@/components/common/SectionHeading";

export function WhyChooseUs({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading eyebrow={dict.why.eyebrow} title={dict.why.heading} sub={dict.why.sub} align="start" className="max-w-3xl" />
        <div className="mt-12 grid border-y border-pine-900/15 sm:grid-cols-2 lg:grid-cols-4">
          {dict.why.items.map((item, index) => (
            <article key={item.title} className="border-b border-pine-900/15 px-1 py-7 sm:px-6 sm:first:ps-0 lg:border-b-0 lg:border-s lg:first:border-s-0 lg:last:pe-0">
              <div className="flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pine-100 text-pine-800">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="font-display text-sm text-pine-500">0{index + 1}</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/65">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
