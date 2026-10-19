import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { SectionHeading } from "@/components/common/SectionHeading";

export function HowItWorks({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <SectionHeading eyebrow={dict.how.eyebrow} title={dict.how.heading} />

        <ol className="relative mt-14 grid gap-6 md:grid-cols-3">
          {dict.how.steps.map((step, i) => (
            <li
              key={step.title}
              className="relative flex flex-col justify-between rounded-3xl border border-pine-900/10 bg-white p-7 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 items-center justify-center rounded-2xl bg-pine-800 font-display text-lg font-semibold text-white shadow-2xs"
                  >
                    0{i + 1}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-pine-700/80">
                    {locale === "ur" ? `مرحلہ ${i + 1}` : `Phase 0${i + 1}`}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink/70">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-ink/60">
          {dict.how.note}
        </p>
      </div>
    </section>
  );
}
