import { ArrowUpRight } from "lucide-react";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ButtonLink } from "@/components/common/ButtonLink";
import { serviceIcons } from "@/components/common/serviceIcons";

export function FeaturedServices({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading eyebrow={dict.services.eyebrow} title={dict.services.heading} sub={dict.services.sub} align="start" />
            <ButtonLink href={`/${locale}/services`} variant="outline" className="mt-7">
              {dict.common.viewAllServices}
              <ArrowUpRight className="h-4 w-4 rtl:-rotate-90" aria-hidden="true" />
            </ButtonLink>
          </div>

          <div className="border-t border-pine-900/15">
            {dict.services.items.map((service, index) => {
              const Icon = serviceIcons[service.slug];
              return (
                <article key={service.slug} className="group grid gap-4 border-b border-pine-900/15 py-7 sm:grid-cols-[3.5rem_1fr_auto] sm:items-start sm:gap-5">
                  <span className="font-display text-lg text-pine-500" aria-hidden="true">0{index + 1}</span>
                  <div>
                    <h3 className="text-balance text-xl font-semibold text-ink transition-colors group-hover:text-pine-700 sm:text-2xl">{service.title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-7 text-ink/65">{service.desc}</p>
                  </div>
                  <span className="hidden h-11 w-11 items-center justify-center rounded-full border border-pine-900/15 text-pine-700 transition-all group-hover:border-pine-700 group-hover:bg-pine-700 group-hover:text-white sm:flex">
                    {Icon && <Icon className="h-5 w-5" aria-hidden="true" />}
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
