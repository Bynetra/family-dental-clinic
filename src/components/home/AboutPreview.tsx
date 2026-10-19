import Image from "next/image";
import { ArrowRight, HeartPulse } from "lucide-react";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { ButtonLink } from "@/components/common/ButtonLink";

export function AboutPreview({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div className="order-last lg:order-first">
          <div className="overflow-hidden rounded-4xl border border-pine-900/10 bg-cream p-2 shadow-card">
            <div className="overflow-hidden rounded-[calc(2rem-4px)]">
              <Image
                src="/images/clinic-care.svg"
                alt={dict.aboutPreview.imageAlt}
                width={720}
                height={560}
                className="h-auto w-full object-cover transition-transform duration-500 hover:scale-102"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-pine-800/15 bg-pine-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-pine-800">
            <HeartPulse className="h-3.5 w-3.5 text-pine-700" aria-hidden="true" />
            <span>{dict.aboutPreview.eyebrow}</span>
          </div>

          <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
            {dict.aboutPreview.heading}
          </h2>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-ink/75">
            {dict.aboutPreview.body}
          </p>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink/65">
            {dict.aboutPreview.body2}
          </p>

          <ButtonLink href={`/${locale}/about`} variant="outline" className="mt-8">
            <span>{dict.aboutPreview.cta}</span>
            <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
