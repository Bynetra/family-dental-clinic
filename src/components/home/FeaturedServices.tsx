import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ServiceCard } from "@/components/common/ServiceCard";
import { ButtonLink } from "@/components/common/ButtonLink";

export function FeaturedServices({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <SectionHeading
          eyebrow={dict.services.eyebrow}
          title={dict.services.heading}
          sub={dict.services.sub}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.services.items.map((service) => (
            <ServiceCard key={service.slug} locale={locale} service={service} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <ButtonLink href={`/${locale}/services`} variant="outline">
            {dict.common.viewAllServices}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
