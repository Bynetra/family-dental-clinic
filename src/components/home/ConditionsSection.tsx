import { Info } from "lucide-react";
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
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dict.conditions.items.map((condition) => (
            <li
              key={condition.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold text-white">{condition.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {condition.desc}
              </p>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-10 flex max-w-3xl items-start gap-3 rounded-2xl border border-white/15 bg-white/5 p-5 text-sm leading-relaxed text-white/75">
          <Info className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          {dict.conditions.note}
        </p>
      </div>
    </section>
  );
}
