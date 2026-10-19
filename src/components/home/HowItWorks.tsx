import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { SectionHeading } from "@/components/common/SectionHeading";

export function HowItWorks({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <SectionHeading eyebrow={dict.how.eyebrow} title={dict.how.heading} />
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {dict.how.steps.map((step, i) => (
            <li key={step.title} className="relative rounded-3xl border border-pine-900/10 bg-white p-7 shadow-card">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-pine-800 font-display text-lg font-semibold text-white"
              >
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/65">{step.desc}</p>
            </li>
          ))}
        </ol>
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-ink/55">
          {dict.how.note}
        </p>
      </div>
    </section>
  );
}
