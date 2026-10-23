import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, CheckCircle2, Sparkles, Clock, ShieldCheck } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/common/PageHero";
import { FinalCTA } from "@/components/home/FinalCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return pageMetadata(locale, "/services", dict.meta.services.title, dict.meta.services.description);
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const isUrdu = locale === "ur";

  const serviceImages: Record<string, string> = {
    "routine-checkups": "/images/service-checkup.jpg",
    "teeth-whitening": "/images/service-whitening.jpg",
    "clear-aligners": "/images/service-braces.jpg",
    "pediatric-dentistry": "/images/service-kids.jpg",
    "restorative-fillings": "/images/service-filling.jpg",
    "root-canal-therapy": "/images/service-rootcanal.jpg",
  };

  const services = dict.services.items.map((s, idx) => ({
    ...s,
    image: serviceImages[s.slug] || "/images/service-checkup.jpg",
    duration: idx === 0 ? "45 mins" : idx === 1 ? "60 mins" : idx === 2 ? "15-30 mins" : "45 mins",
  }));

  return (
    <>
      <PageHero
        eyebrow={isUrdu ? "طبی سروسز" : "Clinical Services"}
        title={dict.services.title}
        description={dict.services.subtitle}
        backgroundImage="/images/treatment-room.jpg"
        breadcrumbs={[
          { label: dict.nav.home, href: `/${locale}` },
          { label: dict.nav.services },
        ]}
      />

      {/* Services List: Alternating Image & Text Layout */}
      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.slug}
                  id={service.slug}
                  className="grid items-center gap-10 rounded-3xl border border-teal-900/10 bg-white p-6 shadow-card sm:p-10 lg:grid-cols-2 lg:gap-14"
                >
                  {/* Photo Column */}
                  <div className={`relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-teal-100 ${!isEven ? "lg:order-2" : ""}`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <span className="absolute top-4 start-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-teal-900 shadow-sm backdrop-blur-md">
                      {service.tag}
                    </span>
                  </div>

                  {/* Copy Column */}
                  <div className={!isEven ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-700">
                      <Sparkles className="h-4 w-4 text-mint-500" aria-hidden="true" />
                      <span>{service.tag}</span>
                    </div>

                    <h2 className="mt-3 font-display text-2xl font-800 text-teal-950 sm:text-3xl">
                      {service.title}
                    </h2>

                    <p className="mt-4 text-base leading-relaxed text-muted">
                      {service.description}
                    </p>

                    {/* Features checklist */}
                    <div className="mt-6 space-y-2.5 border-t border-teal-900/10 pt-5">
                      <div className="flex items-center gap-2.5 text-sm text-teal-900">
                        <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0" aria-hidden="true" />
                        <span>{isUrdu ? "مکمل تشخیصی مشاورت اور ڈیجیٹل اسکین" : "Comprehensive diagnostic examination"}</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-sm text-teal-900">
                        <ShieldCheck className="h-4 w-4 text-teal-600 shrink-0" aria-hidden="true" />
                        <span>{isUrdu ? "درد سے پاک اور آرام دہ طریقہ کار" : "Gentle, anxiety-free procedure"}</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-sm text-teal-900">
                        <Clock className="h-4 w-4 text-teal-600 shrink-0" aria-hidden="true" />
                        <span>{isUrdu ? "اوسط وقت:" : "Average duration:"} {service.duration}</span>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Link
                        href={`/${locale}/contact`}
                        className="inline-flex items-center gap-2 rounded-full bg-teal-800 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-teal-700 focus-visible:ring-4 focus-visible:ring-mint-400"
                      >
                        <Calendar className="h-4 w-4" aria-hidden="true" />
                        <span>{isUrdu ? "اس سروس کے لیے وقت بک کریں" : "Request Consultation"}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCTA
        locale={locale}
        title={dict.finalCta.title}
        subtitle={dict.finalCta.subtitle}
        bookButtonText={dict.finalCta.bookButton}
        callButtonText={dict.finalCta.callButton}
      />
    </>
  );
}
