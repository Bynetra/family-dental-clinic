import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { pageMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/common/SectionHeading";
import { PhysiotherapistProfile } from "@/components/home/PhysiotherapistProfile";
import { FinalCTA } from "@/components/home/FinalCTA";
import { cn } from "@/lib/utils";

export function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Metadata {
  const dict = getDictionary(params.locale);
  return pageMetadata(
    params.locale,
    "/about",
    dict.meta.about.title,
    dict.meta.about.description
  );
}

export default function AboutPage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);

  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:py-24">
          <SectionHeading
            eyebrow={dict.aboutPage.eyebrow}
            title={dict.aboutPage.heading}
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl space-y-6 px-4 py-16 sm:px-6">
          {dict.aboutPage.blocks.map((block, i) => (
            <article
              key={block.heading}
              className={cn(
                "rounded-3xl border border-pine-900/10 p-8 shadow-card",
                i % 2 === 1 && "bg-cream"
              )}
            >
              <h2 className="font-display text-2xl font-semibold text-ink">
                {block.heading}
              </h2>
              <p className="mt-3 leading-relaxed text-ink/70">{block.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeading eyebrow={dict.aboutPage.valuesEyebrow} title={dict.why.heading} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {dict.aboutPage.values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-pine-900/10 bg-white p-6 shadow-card"
              >
                <h3 className="font-semibold text-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PhysiotherapistProfile locale={params.locale} />
      <FinalCTA locale={params.locale} />
    </>
  );
}
