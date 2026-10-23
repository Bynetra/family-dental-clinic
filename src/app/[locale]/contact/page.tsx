import type { Metadata } from "next";
import { Clock, MapPin, Phone, Mail, AlertTriangle } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { site } from "@/config/site";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/common/PageHero";
import { AppointmentForm } from "@/components/home/AppointmentForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return pageMetadata(locale, "/contact", dict.meta.contact.title, dict.meta.contact.description);
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const isUrdu = locale === "ur";
  const phone = site.phoneDisplay || "+1 (555) 234-5678";

  return (
    <>
      <PageHero
        eyebrow={isUrdu ? "کلینک تشریف لائیں" : "Visit Us"}
        title={dict.meta.contact.title}
        description={dict.meta.contact.description}
        backgroundImage="/images/clinic-reception.jpg"
        breadcrumbs={[
          { label: dict.nav.home, href: `/${locale}` },
          { label: dict.nav.contact },
        ]}
      />

      {/* Embedded interactive appointment booking form */}
      <AppointmentForm
        locale={locale}
        title={dict.booking.title}
        subtitle={dict.booking.subtitle}
        labels={dict.booking}
      />

      {/* Location, Opening Hours & Transit Information */}
      <section className="bg-ivory py-20 lg:py-28 border-t border-teal-900/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Left: Contact Info and Hours */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
                {isUrdu ? "کلینک کے اوقات اور پتہ" : "Location & Practice Hours"}
              </span>
              <h2 className="mt-3 font-display text-3xl font-800 text-teal-950 sm:text-4xl">
                {isUrdu ? "آسان رسائی اور مفت پارکنگ کی سہولت" : "Accessible clinic with dedicated parking"}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {isUrdu
                  ? "ہمارا کلینک شہر کے پرسکون اور مرکزی مقام پر واقع ہے، جہاں معذور افراد اور بچوں کے لیے وہیل چیئر اور پرام کی باآسانی آمدورفت کا انتظام موجود ہے۔"
                  : "Family Dental Clinic is situated in a central, easily accessible medical district with step-free wheelchair and pram access and dedicated patient parking."}
              </p>

              {/* Cards grid */}
              <div className="mt-8 space-y-4">
                {/* Address Card */}
                <div className="flex items-start gap-4 rounded-3xl border border-teal-900/10 bg-white p-5 shadow-card">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-800">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-teal-950">
                      {isUrdu ? "کلینک کا پتہ" : "Practice Address"}
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      {site.address}
                    </p>
                  </div>
                </div>

                {/* Telephone Card */}
                <div className="flex items-start gap-4 rounded-3xl border border-teal-900/10 bg-white p-5 shadow-card">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-800">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-teal-950">
                      {isUrdu ? "استقبالیہ فون نمبر" : "Reception Telephone"}
                    </h3>
                    <a
                      href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                      className="mt-1 block text-sm font-semibold text-teal-800 hover:underline"
                    >
                      {phone}
                    </a>
                  </div>
                </div>

                {/* Email Card */}
                <div className="flex items-start gap-4 rounded-3xl border border-teal-900/10 bg-white p-5 shadow-card">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-800">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-teal-950">
                      {isUrdu ? "ای میل ایڈریس" : "Direct Email Inquiries"}
                    </h3>
                    <a
                      href="mailto:care@familydentalclinic.com"
                      className="mt-1 block text-sm font-semibold text-teal-800 hover:underline"
                    >
                      care@familydentalclinic.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Hours Schedule & Emergency Alert */}
            <div className="space-y-6">
              {/* Hours Card */}
              <div className="rounded-3xl border border-teal-900/10 bg-white p-6 sm:p-8 shadow-card">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-teal-700" aria-hidden="true" />
                  <h3 className="font-display text-xl font-800 text-teal-950">
                    {isUrdu ? "ہفتہ وار شیڈول" : "Clinic Weekly Schedule"}
                  </h3>
                </div>

                <div className="mt-6 divide-y divide-teal-900/10">
                  {site.openingHours.map((slot, i) => (
                    <div key={i} className="flex items-center justify-between py-3 text-sm">
                      <span className="font-medium text-teal-950">{slot.days}</span>
                      <span className="text-muted">{slot.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dental Emergency Card */}
              <div className="rounded-3xl border border-amber-200 bg-amber-50/70 p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white shadow-xs">
                    <AlertTriangle className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-800 text-amber-950">
                      {isUrdu ? "دانتوں میں شدید ہنگامی درد؟" : "Experiencing acute dental pain?"}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-amber-900/80">
                      {isUrdu
                        ? "ہم شدید درد، ٹوٹے ہوئے دانت یا کسی حادثے کی صورت میں روزانہ ہنگامی سلاٹس رکھتے ہیں۔ فوری مدد کے لیے ہمارے فون نمبر پر رابطہ کریں۔"
                        : "We reserve same-day emergency slots for severe toothache, chipped teeth, facial swelling, or dental trauma. Please call our reception immediately."}
                    </p>
                    <a
                      href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-600 px-5 py-2.5 text-xs font-bold text-white shadow-xs transition-colors hover:bg-amber-700"
                    >
                      <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{isUrdu ? `فوری کال کریں: ${phone}` : `Emergency Call: ${phone}`}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
