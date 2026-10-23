import { ArrowDown } from "lucide-react";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { SectionHeading } from "@/components/common/SectionHeading";

export function HowItWorks({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="bg-sand/55">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading eyebrow={dict.how.eyebrow} title={dict.how.heading} />
        <ol className="mx-auto mt-14 max-w-5xl border-t border-pine-900/15">
          {dict.how.steps.map((step, index) => (
            <li key={step.title} className="grid gap-4 border-b border-pine-900/15 py-7 sm:grid-cols-[5rem_.65fr_1.35fr] sm:items-start sm:gap-8">
              <span className="font-display text-2xl text-pine-500">0{index + 1}</span>
              <h3 className="text-xl font-semibold text-ink">{step.title}</h3>
              <p className="text-sm leading-7 text-ink/65">{step.desc}</p>
            </li>
          ))}
        </ol>
        <div className="mx-auto mt-8 flex max-w-3xl items-start justify-center gap-3 text-center text-sm leading-6 text-ink/55">
          <ArrowDown className="mt-1 h-4 w-4 shrink-0 text-pine-600" aria-hidden="true" />
          <p>{dict.how.note}</p>
        </div>
      </div>
    </section>
  );
}
