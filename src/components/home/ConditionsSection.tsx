import { ArrowUpRight, Info } from "lucide-react";
import Link from "next/link";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { SectionHeading } from "@/components/common/SectionHeading";
import { LinkPendingIndicator } from "@/components/common/LinkPendingIndicator";

export function ConditionsSection({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const groups = [dict.conditions.items.slice(0, 3), dict.conditions.items.slice(3, 6), dict.conditions.items.slice(6)];
  const labels = locale === "ur" ? ["درد اور جوڑ", "اعصابی بحالی", "طاقت اور حرکت"] : ["Pain & joints", "Neurological recovery", "Strength & movement"];

  return (
    <section className="hairline-grid bg-pine-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow={dict.conditions.eyebrow} title={dict.conditions.heading} sub={dict.conditions.sub} dark align="start" />
            <div className="mt-7 flex items-start gap-3 border-s border-white/20 ps-4 text-sm leading-6 text-white/60">
              <Info className="mt-1 h-4 w-4 shrink-0 text-sage" aria-hidden="true" />
              <p>{dict.conditions.note}</p>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">
            {groups.map((items, groupIndex) => (
              <div key={labels[groupIndex]} className="bg-pine-950/90 p-6 sm:p-7">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-sage">{labels[groupIndex]}</p>
                <ul className="mt-6 space-y-6">
                  {items.map((condition) => (
                    <li key={condition.title}>
                      <h3 className="font-semibold leading-6 text-white">{condition.title}</h3>
                      <p className="mt-1.5 text-sm leading-6 text-white/55">{condition.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-end">
          <Link href={`/${locale}/conditions`} className="group inline-flex items-center gap-2 text-sm font-semibold text-sage-light transition-colors hover:text-white">
            {locale === "ur" ? "تمام مسائل دیکھیں" : "Explore all conditions"}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-rotate-90" aria-hidden="true" />
            <LinkPendingIndicator label={locale === "ur" ? "صفحہ لوڈ ہو رہا ہے" : "Loading page"} />
          </Link>
        </div>
      </div>
    </section>
  );
}
