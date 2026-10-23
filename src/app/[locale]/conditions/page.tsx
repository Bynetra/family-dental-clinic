import type { Metadata } from "next";
import { ArrowUpRight, Info, MessageCircle } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { pageMetadata } from "@/lib/seo";
import { whatsappUrl } from "@/lib/whatsapp";
import { PageHero } from "@/components/common/PageHero";
import { FinalCTA } from "@/components/home/FinalCTA";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return pageMetadata(locale, "/conditions", dict.meta.conditions.title, dict.meta.conditions.description);
}

export default async function ConditionsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const groups = [dict.conditions.items.slice(0, 3), dict.conditions.items.slice(3, 6), dict.conditions.items.slice(6)];
  const headings = locale === "ur"
    ? ["کمر، گردن اور جوڑ", "اعصابی اور فالج کے بعد بحالی", "طاقت، کھیل اور بچوں کی حرکت"]
    : ["Back, neck & joints", "Neurological & post-stroke recovery", "Strength, sport & children’s movement"];

  return (
    <>
      <PageHero eyebrow={dict.conditions.eyebrow} title={dict.conditions.heading} description={dict.conditionsPage.intro} index="03" />

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="space-y-16">
            {groups.map((items, groupIndex) => (
              <section key={headings[groupIndex]} aria-labelledby={`condition-group-${groupIndex}`} className="grid gap-8 lg:grid-cols-[.55fr_1.45fr] lg:gap-16">
                <div>
                  <span className="font-display text-lg text-pine-500">0{groupIndex + 1}</span>
                  <h2 id={`condition-group-${groupIndex}`} className="text-balance mt-3 font-display text-3xl font-semibold leading-tight text-ink">{headings[groupIndex]}</h2>
                </div>
                <div className="border-t border-pine-900/15">
                  {items.map((condition) => {
                    const whatsappMessage = locale === "ur"
                      ? `السلام علیکم ڈاکٹر رانا شاہد، میں \"${condition.title}\" کے لیے فزیوتھراپی کے بارے میں معلومات لینا چاہتا/چاہتی ہوں۔`
                      : `Hello Dr Rana Shahid, I would like to ask about physiotherapy for \"${condition.title}\".`;
                    return (
                      <article key={condition.title} className="group border-b border-pine-900/15 py-7">
                        <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:gap-8">
                          <div>
                            <h3 className="text-xl font-semibold text-ink">{condition.title}</h3>
                            <p className="mt-2 max-w-2xl text-sm leading-7 text-ink/65">{condition.desc}</p>
                          </div>
                          <a href={whatsappUrl(whatsappMessage)} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-pine-900/15 text-pine-700 transition-all group-hover:border-[#1FA855] group-hover:bg-[#1FA855] group-hover:text-white" aria-label={`${dict.common.inquireWhatsapp}: ${condition.title}`}>
                            <MessageCircle className="h-4 w-4" aria-hidden="true" />
                          </a>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 flex items-start gap-4 border-y border-pine-900/15 py-6 text-sm leading-7 text-ink/65">
            <Info className="mt-1 h-5 w-5 shrink-0 text-pine-600" aria-hidden="true" />
            <p className="max-w-3xl"><strong className="font-semibold text-ink">{locale === "ur" ? "اہم طبی نوٹ:" : "Important clinical note:"}</strong> {dict.conditions.note}</p>
            <ArrowUpRight className="ms-auto hidden h-5 w-5 shrink-0 text-pine-500 sm:block rtl:-rotate-90" aria-hidden="true" />
          </div>
        </div>
      </section>

      <FinalCTA locale={locale} />
    </>
  );
}
