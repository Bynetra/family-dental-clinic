import type { Metadata } from "next";
import { Check, Compass, MoveRight } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/common/PageHero";
import { PhysiotherapistProfile } from "@/components/home/PhysiotherapistProfile";
import { FinalCTA } from "@/components/home/FinalCTA";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return pageMetadata(locale, "/about", dict.meta.about.title, dict.meta.about.description);
}

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow={dict.aboutPage.eyebrow}
        title={dict.aboutPage.heading}
        description={locale === "ur" ? "شفاء ہسپتال، میاں چنوں میں انفرادی معائنے، واضح رہنمائی اور عملی بحالی پر مبنی فزیوتھراپی۔" : "Assessment-led physiotherapy at Shifa Hospital, Mian Channu, with clear guidance and practical rehabilitation goals."}
        index="01"
      />

      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[.55fr_1.45fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <Compass className="h-8 w-8 text-pine-600" aria-hidden="true" />
            <p className="mt-5 max-w-xs font-display text-2xl leading-snug text-ink">
              {locale === "ur" ? "ہر منصوبہ بہتر روزمرہ حرکت کے واضح مقصد سے شروع ہوتا ہے۔" : "Every plan starts with a clear purpose: better movement in everyday life."}
            </p>
          </div>
          <div className="border-t border-pine-900/15">
            {dict.aboutPage.blocks.map((block, index) => (
              <article key={block.heading} className="grid gap-4 border-b border-pine-900/15 py-8 sm:grid-cols-[3.5rem_1fr] sm:gap-8">
                <span className="font-display text-lg text-pine-500">0{index + 1}</span>
                <div>
                  <h2 className="text-balance text-2xl font-semibold text-ink">{block.heading}</h2>
                  <p className="mt-3 max-w-2xl text-base leading-8 text-ink/65">{block.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand/60">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <p className="eyebrow">{dict.aboutPage.valuesEyebrow}</p>
          <div className="mt-5 grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <h2 className="text-balance font-display text-3xl font-semibold text-ink sm:text-5xl">{dict.why.heading}</h2>
            <div className="grid gap-px overflow-hidden border border-pine-900/10 bg-pine-900/10 sm:grid-cols-2">
              {dict.aboutPage.values.map((value) => (
                <article key={value.title} className="bg-cream p-6 sm:p-8">
                  <Check className="h-5 w-5 text-pine-600" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-semibold text-ink">{value.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-ink/65">{value.desc}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-8 flex items-center gap-3 text-sm text-ink/55">
            <MoveRight className="h-4 w-4 text-pine-600 rtl:rotate-180" aria-hidden="true" />
            <p>{dict.why.sub}</p>
          </div>
        </div>
      </section>

      <PhysiotherapistProfile locale={locale} />
      <FinalCTA locale={locale} />
    </>
  );
}
