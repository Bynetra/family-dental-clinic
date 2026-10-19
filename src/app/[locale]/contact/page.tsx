import type { Metadata } from "next";
import { Clock, ExternalLink, MapPin, MessageCircle, Phone } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { site } from "@/config/site";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { pageMetadata } from "@/lib/seo";
import { whatsappUrl } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ContactForm } from "@/components/common/ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return pageMetadata(
    locale,
    "/contact",
    dict.meta.contact.title,
    dict.meta.contact.description
  );
}
export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream via-cream to-white py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 start-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-pine-700/5 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={dict.contactPage.eyebrow}
          title={dict.contactPage.heading}
          sub={dict.contactPage.sub}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Contact Information Cards */}
          <div className="space-y-5">
            {/* WhatsApp Card (High Priority) */}
            <div className="relative overflow-hidden rounded-3xl border border-[#1FA855]/30 bg-gradient-to-br from-white via-white to-[#1FA855]/5 p-7 shadow-card transition-all duration-300 hover:shadow-card-hover sm:p-8">
              <div className="flex items-center justify-between gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#1FA855]/10 text-[#1FA855]">
                  <MessageCircle className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1FA855]/10 px-3 py-1 text-xs font-semibold text-[#167d40]">
                  <MessageCircle className="h-3 w-3" aria-hidden="true" />
                  <span>WhatsApp</span>
                </span>
              </div>

              <h2 className="mt-4 text-xl font-semibold text-ink">
                {dict.contactPage.whatsappCardTitle}
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/70">
                {dict.contactPage.whatsappCardBody}
              </p>

              <div className="mt-5">
                <a
                  href={whatsappUrl(dict.whatsapp.default)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#1FA855] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#178f47] hover:shadow active:scale-[0.99]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>{locale === "ur" ? "واٹس ایپ پر میسج کریں:" : "Chat on WhatsApp:"}</span>
                  <span dir="ltr" className="font-bold">{site.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Direct Phone Numbers */}
            <div className="rounded-3xl border border-pine-900/10 bg-white p-7 shadow-card transition-all duration-300 hover:shadow-card-hover">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-pine-800/10 text-pine-800">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="flex-1">
                  <h2 className="text-xs font-semibold uppercase tracking-wider text-pine-700">
                    {dict.contactPage.phoneTitle}
                  </h2>

                  <div className="mt-3 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-2xl bg-cream/50 p-3.5 border border-pine-900/5">
                      <div>
                        <a
                          href={`tel:${site.phoneDisplay.replace(/[-\s]/g, "")}`}
                          className="text-base font-bold text-ink hover:text-pine-800"
                          dir="ltr"
                        >
                          {site.phoneDisplay}
                        </a>
                        <p className="text-xs text-ink/60">
                          {locale === "ur" ? "مین واٹس ایپ و کال نمبر" : "Main WhatsApp & Call Line"}
                        </p>
                      </div>
                      <a
                        href={`tel:${site.phoneDisplay.replace(/[-\s]/g, "")}`}
                        className="inline-flex items-center justify-center gap-1 rounded-full bg-pine-800 px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-pine-700"
                      >
                        <Phone className="h-3 w-3" aria-hidden="true" />
                        {locale === "ur" ? "کال کریں" : "Call"}
                      </a>
                    </div>

                    {site.phoneSecondary && (
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-2xl bg-cream/50 p-3.5 border border-pine-900/5">
                        <div>
                          <a
                            href={`tel:${site.phoneSecondary.replace(/[-\s]/g, "")}`}
                            className="text-base font-bold text-ink hover:text-pine-800"
                            dir="ltr"
                          >
                            {site.phoneSecondary}
                          </a>
                          <p className="text-xs text-ink/60">
                            {locale === "ur" ? "ثانوی کال نمبر" : "Secondary Line"}
                          </p>
                        </div>
                        <a
                          href={`tel:${site.phoneSecondary.replace(/[-\s]/g, "")}`}
                          className="inline-flex items-center justify-center gap-1 rounded-full border border-pine-800/20 bg-white px-3.5 py-1.5 text-xs font-semibold text-pine-800 transition-colors hover:bg-pine-50"
                        >
                          <Phone className="h-3 w-3" aria-hidden="true" />
                          {locale === "ur" ? "کال کریں" : "Call"}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Address & Directions */}
            <div className="rounded-3xl border border-pine-900/10 bg-white p-7 shadow-card transition-all duration-300 hover:shadow-card-hover">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-pine-800/10 text-pine-800">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="flex-1">
                  <h2 className="text-xs font-semibold uppercase tracking-wider text-pine-700">
                    {dict.contactPage.addressTitle}
                  </h2>
                  <p className="mt-2 text-base leading-relaxed text-ink/80 font-medium">
                    {site.address[locale]}
                  </p>
                  <p className="mt-1 text-xs text-ink/60">
                    {locale === "ur"
                      ? "میاں چنوں میڈیکل کمپلیکس، تلمبہ روڈ، نزد پی ایس او پٹرول پمپ، میاں چنوں"
                      : "Near PSO Petrol Pump, Talamba Mian Channu Rd, Mian Channu (Postal code 58000)"}
                  </p>
                  <div className="mt-4">
                    <a
                      href={site.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-pine-50 px-4 py-2 text-xs font-semibold text-pine-800 transition-colors hover:bg-pine-100"
                    >
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{locale === "ur" ? "گوگل میپ پر لوکیشن دیکھیں" : "View on Google Maps"}</span>
                      <ExternalLink className="h-3 w-3 ms-1" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Timings */}
            <div className="rounded-3xl border border-pine-900/10 bg-white p-7 shadow-card transition-all duration-300 hover:shadow-card-hover">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-pine-800/10 text-pine-800">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="flex-1">
                  <h2 className="text-xs font-semibold uppercase tracking-wider text-pine-700">
                    {dict.contactPage.hoursTitle}
                  </h2>
                  <ul className="mt-3 space-y-2">
                    {site.openingHours.map((row) => {
                      const isClosed = row.time.en.toLowerCase().includes("closed");
                      return (
                        <li
                          key={row.days.en}
                          className="flex items-center justify-between rounded-xl bg-cream/40 px-3.5 py-2 text-sm text-ink/80"
                        >
                          <span className="font-medium">{row.days[locale]}</span>
                          <span
                            className={
                              isClosed
                                ? "rounded-full bg-red-100/70 px-2.5 py-0.5 text-xs font-semibold text-red-700"
                                : "font-semibold text-pine-800"
                            }
                          >
                            {row.time[locale]}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  <p className="mt-3 text-xs text-ink/60">
                    {locale === "ur"
                      ? "ہوم فزیوتھراپی وزٹس واٹس ایپ پر وقت طے کر کے کیے جاتے ہیں۔"
                      : "Home physiotherapy sessions scheduled upon request via WhatsApp."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Inquiry Form */}
          <div>
            <ContactForm dict={dict.contactPage} locale={locale} />
          </div>
        </div>
      </div>
    </section>
  );
}
