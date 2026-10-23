import Image from "next/image";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { ButtonLink } from "@/components/common/ButtonLink";

export function AboutPreview({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="bg-sand/55">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:gap-20 lg:px-8 lg:py-28">
        <div className="relative min-h-[25rem] overflow-hidden rounded-4xl bg-pine-900 shadow-float sm:min-h-[34rem]">
          <Image
            src="/images/guided-assessment.webp"
            alt={dict.aboutPreview.imageAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-pine-950/75 to-transparent px-5 pb-5 pt-20 text-white sm:px-7 sm:pb-7">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-sage-light">
              {locale === "ur" ? "نمائندہ کلینیکل منظر" : "Representative clinical scene"}
            </p>
          </div>
        </div>

        <div>
          <p className="eyebrow">{dict.aboutPreview.eyebrow}</p>
          <h2 className="text-balance mt-4 font-display text-3xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-5xl">{dict.aboutPreview.heading}</h2>
          <p className="mt-6 text-lg leading-8 text-ink/75">{dict.aboutPreview.body}</p>
          <p className="mt-4 leading-7 text-ink/60">{dict.aboutPreview.body2}</p>

          <div className="mt-7 flex items-start gap-3 border-s-2 border-pine-400 ps-4">
            <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-pine-600" aria-hidden="true" />
            <p className="text-sm leading-6 text-ink/65">
              {locale === "ur" ? "علاج کا طریقہ اور رفتار انفرادی معائنے کے بعد طے کیے جاتے ہیں۔" : "Treatment approach and pace are selected after an individual clinical assessment."}
            </p>
          </div>

          <ButtonLink href={`/${locale}/about`} variant="outline" className="mt-8">
            {dict.aboutPreview.cta}
            <ArrowUpRight className="h-4 w-4 rtl:-rotate-90" aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
