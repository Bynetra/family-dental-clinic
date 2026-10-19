import type { Metadata } from "next";
import { Info } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { pageMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ServiceCard } from "@/components/common/ServiceCard";
import { FinalCTA } from "@/components/home/FinalCTA";

export function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Metadata {
  const dict = getDictionary(params.locale);
  return pageMetadata(
    params.locale,
    "/services",
    dict.meta.services.title,
    dict.meta.services.description
  );
}

export default function ServicesPage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);

  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <SectionHeading
            eyebrow={dict.services.eyebrow}
            title={dict.services.heading}
            sub={dict.services.sub}
          />
          <p className="mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-2xl border border-pine-900/10 bg-white p-5 text-sm leading-relaxed text-ink/65">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-pine-700" aria-hidden="true" />
            {dict.servicesPage.note}
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dict.services.items.map((service) => (
              <ServiceCard key={service.slug} locale={params.locale} service={service} />
            ))}
          </div>
        </div>
      </section>
      <FinalCTA locale={params.locale} />
    </>
  );
}
