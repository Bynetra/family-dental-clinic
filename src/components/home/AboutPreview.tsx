import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { ButtonLink } from "@/components/common/ButtonLink";

export function AboutPreview({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div className="order-last lg:order-first">
          <div className="overflow-hidden rounded-4xl border border-pine-900/10 shadow-card">
            <Image
              src="/images/clinic-care.svg"
              alt={dict.aboutPreview.imageAlt}
              width={720}
              height={560}
              className="h-auto w-full"
            />
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pine-600">
            {dict.aboutPreview.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            {dict.aboutPreview.heading}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            {dict.aboutPreview.body}
          </p>
          <p className="mt-4 leading-relaxed text-ink/60">{dict.aboutPreview.body2}</p>
          <ButtonLink href={`/${locale}/about`} variant="outline" className="mt-8">
            {dict.aboutPreview.cta}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
