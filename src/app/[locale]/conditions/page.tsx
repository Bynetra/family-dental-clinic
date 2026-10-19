import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { pageMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FinalCTA } from "@/components/home/FinalCTA";

export function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Metadata {
  const dict = getDictionary(params.locale);
  return pageMetadata(
    params.locale,
    "/conditions",
    dict.meta.conditions.title,
    dict.meta.conditions.description
  );
}

export default function ConditionsPage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);

  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <SectionHeading
            eyebrow={dict.conditions.eyebrow}
            title={dict.meta.conditions.title}
            sub={dict.conditionsPage.intro}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dict.conditions.items.map((condition) => (
              <article
                key={condition.title}
                className="rounded-3xl border border-pine-900/10 bg-white p-6 shadow-card"
              >
                <h2 className="text-lg font-semibold text-ink">{condition.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {condition.desc}
                </p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-10 flex max-w-3xl items-start gap-3 rounded-2xl border border-amber-600/20 bg-amber-50 p-5 text-sm leading-relaxed text-amber-900">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
            {dict.conditions.note}
          </p>
        </div>
      </section>
      <FinalCTA locale={params.locale} />
    </>
  );
}
