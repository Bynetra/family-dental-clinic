import type { Metadata } from "next";
import { ArrowUpRight, Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { site } from "@/config/site";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { pageMetadata } from "@/lib/seo";
import { whatsappUrl } from "@/lib/whatsapp";
import { PageHero } from "@/components/common/PageHero";
import { ContactForm } from "@/components/common/ContactForm";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return pageMetadata(locale, "/contact", dict.meta.contact.title, dict.meta.contact.description);
}

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero eyebrow={dict.contactPage.eyebrow} title={dict.contactPage.heading} description={dict.contactPage.sub} index="04" />

      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[.78fr_1.22fr] lg:gap-12 lg:px-8 lg:py-28">
          <aside className="hairline-grid overflow-hidden rounded-4xl bg-pine-900 p-7 text-white shadow-float sm:p-9 lg:sticky lg:top-28 lg:self-start">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-sage">{locale === "ur" ? "کلینک کی معلومات" : "Clinic details"}</p>
            <h2 className="mt-4 font-display text-3xl font-semibold">{dict.contactPage.whatsappCardTitle}</h2>
            <p className="mt-3 text-sm leading-7 text-white/60">{dict.contactPage.whatsappCardBody}</p>
            <a href={whatsappUrl(dict.whatsapp.default)} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-[46px] items-center gap-2 rounded-full bg-[#1FA855] px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#178f47]">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>{locale === "ur" ? "واٹس ایپ کریں" : "Chat on WhatsApp"}</span>
              <span dir="ltr">{site.phoneDisplay}</span>
            </a>

            <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
              <div className="flex gap-4 py-5">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-sage" aria-hidden="true" />
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/40">{dict.contactPage.phoneTitle}</p>
                  <a href={`tel:${site.phoneDisplay.replace(/[-\s]/g, "")}`} dir="ltr" className="mt-1.5 block font-semibold text-white hover:text-sage-light">{site.phoneDisplay}</a>
                </div>
              </div>
              <div className="flex gap-4 py-5">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-sage" aria-hidden="true" />
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/40">{dict.contactPage.addressTitle}</p>
                  <p className="mt-1.5 text-sm leading-7 text-white/70">{site.address[locale]}</p>
                  <a href={site.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-sage-light hover:text-white">
                    {locale === "ur" ? "گوگل میپ پر سمتیں" : "Get Google Maps directions"}
                    <ArrowUpRight className="h-4 w-4 rtl:-rotate-90" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div className="flex gap-4 py-5">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-sage" aria-hidden="true" />
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/40">{dict.contactPage.hoursTitle}</p>
                  {site.openingHours.map((row) => (
                    <p key={row.days.en} className="mt-1.5 text-sm text-white/70">{row.days[locale]} · {row.time[locale]}</p>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-6 text-xs leading-6 text-white/45">{dict.contactPage.formNote}</p>
          </aside>

          <ContactForm dict={dict.contactPage} locale={locale} />
        </div>
      </section>
    </>
  );
}
