import type { Metadata } from "next";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { site } from "@/config/site";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { pageMetadata } from "@/lib/seo";
import { whatsappUrl } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ContactForm } from "@/components/common/ContactForm";

export function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Metadata {
  const dict = getDictionary(params.locale);
  return pageMetadata(
    params.locale,
    "/contact",
    dict.meta.contact.title,
    dict.meta.contact.description
  );
}

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);
  const locale = params.locale;

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow={dict.contactPage.eyebrow}
          title={dict.contactPage.heading}
          sub={dict.contactPage.sub}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            {/* WhatsApp card */}
            <div className="rounded-3xl border border-pine-900/10 bg-white p-7 shadow-card">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#1FA855]/10 text-[#1FA855]">
                  <MessageCircle className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-lg font-semibold text-ink">
                    {dict.contactPage.whatsappCardTitle}
                  </h2>
                  <p className="mt-1 text-sm text-ink/60">
                    {dict.contactPage.whatsappCardBody}
                  </p>
                  <a
                    href={whatsappUrl(dict.whatsapp.default)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#1FA855] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#178f47]"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    {site.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 rounded-3xl border border-pine-900/10 bg-white p-6 shadow-card">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-pine-800/10 text-pine-800">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="space-y-2">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-pine-700">
                  {dict.contactPage.phoneTitle}
                </h2>
                <div>
                  <a
                    href={`tel:${site.phoneDisplay.replace(/\s/g, "")}`}
                    className="block font-semibold text-ink hover:text-pine-800"
                    dir="ltr"
                  >
                    {site.phoneDisplay} <span className="text-xs font-normal text-pine-700">(WhatsApp / Main)</span>
                  </a>
                  {site.phoneSecondary && (
                    <a
                      href={`tel:${site.phoneSecondary.replace(/\s/g, "")}`}
                      className="mt-1 block text-sm font-medium text-ink/75 hover:text-pine-800"
                      dir="ltr"
                    >
                      {site.phoneSecondary} <span className="text-xs font-normal text-ink/50">(Call / Secondary)</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 rounded-3xl border border-pine-900/10 bg-white p-6 shadow-card">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-pine-800/10 text-pine-800">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-pine-700">
                  {dict.contactPage.addressTitle}
                </h2>
                <p className="mt-1 leading-relaxed text-ink/80">{site.address[locale]}</p>
                <div className="mt-4">
                  <a
                    href={site.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-pine-50 px-4 py-2 text-xs font-semibold text-pine-800 transition-colors hover:bg-pine-100"
                  >
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {locale === "ur" ? "گوگل میپ پر لوکیشن دیکھیں" : "View on Google Maps"} →
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 rounded-3xl border border-pine-900/10 bg-white p-6 shadow-card">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-pine-800/10 text-pine-800">
                <Clock className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-pine-700">
                  {dict.contactPage.hoursTitle}
                </h2>
                <ul className="mt-1.5 space-y-1 text-ink/75">
                  {site.openingHours.map((row) => (
                    <li key={row.days.en} className="flex flex-wrap gap-x-2">
                      <span>{row.days[locale]}:</span>
                      <span>{row.time[locale]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <ContactForm dict={dict.contactPage} locale={locale} />
        </div>
      </div>
    </section>
  );
}
