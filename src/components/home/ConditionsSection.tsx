import { Info, Activity } from "lucide-react";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { SectionHeading } from "@/components/common/SectionHeading";

export function ConditionsSection({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="bg-pine-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <SectionHeading
          eyebrow={dict.conditions.eyebrow}
          title={dict.conditions.heading}
          sub={dict.conditions.sub}
          dark
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dict.conditions.items.map((condition) => (
            <li
              key={condition.title}
              className="flex flex-col justify-between rounded-3xl border border-white/15 bg-white/5 p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 hover:border-white/25"
            >
              <div>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-sage-light mb-4" aria-hidden="true">
                  <Activity className="h-4 w-4" />
                </span>
                <h3 className="text-base font-semibold text-white leading-snug">{condition.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/75">
                  {condition.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mx-auto mt-12 flex max-w-3xl items-start gap-3 rounded-2xl border border-white/15 bg-white/5 p-5 text-sm leading-relaxed text-white/85 backdrop-blur-xs">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-sage-light" aria-hidden="true" />
          <p>{dict.conditions.note}</p>
        </div>
      </div>
    </section>
  );
}
