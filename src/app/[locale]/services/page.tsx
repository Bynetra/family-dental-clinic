import type { Metadata } from "next";
import { ArrowUpRight, MessageCircle, ShieldCheck } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { pageMetadata } from "@/lib/seo";
import { whatsappUrl } from "@/lib/whatsapp";
import { PageHero } from "@/components/common/PageHero";
import { serviceIcons } from "@/components/common/serviceIcons";
import { FinalCTA } from "@/components/home/FinalCTA";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return pageMetadata(locale, "/services", dict.meta.services.title, dict.meta.services.description);
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero eyebrow={dict.services.eyebrow} title={dict.services.heading} description={dict.services.sub} index="02" />

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[.5fr_1.5fr] lg:gap-20">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <ShieldCheck className="h-8 w-8 text-pine-600" aria-hidden="true" />
              <h2 className="mt-5 font-display text-2xl font-semibold text-ink">{locale === "ur" ? "معائنہ پہلے" : "Assessment first"}</h2>
              <p className="mt-3 text-sm leading-7 text-ink/65">{dict.servicesPage.note}</p>
            </aside>

            <div className="border-t border-pine-900/15">
              {dict.services.items.map((service, index) => {
                const Icon = serviceIcons[service.slug];
                return (
                  <article id={service.slug} key={service.slug} className="scroll-mt-28 border-b border-pine-900/15 py-8 sm:py-10">
                    <div className="grid gap-5 sm:grid-cols-[4rem_1fr_auto] sm:items-start sm:gap-6">
                      <div className="flex items-center gap-3 sm:block">
                        <span className="font-display text-lg text-pine-500">0{index + 1}</span>
                        {Icon && <Icon className="mt-3 h-5 w-5 text-pine-700 sm:block" aria-hidden="true" />}
                      </div>
                      <div>
                        <h2 className="text-balance text-2xl font-semibold text-ink sm:text-3xl">{service.title}</h2>
                        <p className="mt-3 max-w-2xl text-base leading-8 text-ink/65">{service.desc}</p>
                      </div>
                      <a
                        href={whatsappUrl(dict.whatsapp.service(service.title))}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-pine-800/25 px-4 py-2 text-sm font-semibold text-pine-800 transition-all hover:border-[#1FA855] hover:bg-[#1FA855] hover:text-white"
                      >
                        <MessageCircle className="h-4 w-4" aria-hidden="true" />
                        {dict.common.inquireWhatsapp}
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mt-14 flex flex-col justify-between gap-6 border-s-4 border-pine-500 bg-white px-6 py-7 shadow-card sm:flex-row sm:items-center sm:px-8">
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">{locale === "ur" ? "معلوم نہیں کہاں سے شروع کریں؟" : "Not sure where to begin?"}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-ink/65">{locale === "ur" ? "اپنی علامات اور پسندیدہ وقت واٹس ایپ پر بھیج کر معائنے کی درخواست کریں۔" : "Share your symptoms and preferred time on WhatsApp to request an assessment."}</p>
            </div>
            <a href={whatsappUrl(dict.whatsapp.default)} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-pine-800 hover:text-[#1FA855]">
              {dict.common.bookAppointment}
              <ArrowUpRight className="h-4 w-4 rtl:-rotate-90" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <FinalCTA locale={locale} />
    </>
  );
}
