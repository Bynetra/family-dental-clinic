import type { Metadata } from "next";
import {
  Award,
  Building2,
  HeartPulse,
  Home,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { pageMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/common/SectionHeading";
import { PhysiotherapistProfile } from "@/components/home/PhysiotherapistProfile";
import { FinalCTA } from "@/components/home/FinalCTA";
import { cn } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return pageMetadata(
    locale,
    "/about",
    dict.meta.about.title,
    dict.meta.about.description
  );
}
const blockIcons = [Building2, Sparkles, Stethoscope];
const valueIcons = [Award, HeartPulse, Home, ShieldCheck];

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <>
      {/* Header section with ambient glow */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream via-cream to-white py-16 sm:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 start-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-pine-700/5 blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <SectionHeading
            eyebrow={dict.aboutPage.eyebrow}
            title={dict.aboutPage.heading}
            sub={
              locale === "ur"
                ? "میاں چنوں میڈیکل کمپلیکس میں جدید فزیوتھریپی کی سہولیات، مریضوں کی انفرادی دیکھ بھال اور بغیر ادویات بہتر صحت اور بحالی۔"
                : "Comprehensive physical rehabilitation at Mian Channu Medical Complex, combining clinical excellence, modern therapeutic modalities, and home visit care."
            }
          />
        </div>
      </section>

      {/* Narrative blocks with distinct visual identity */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-4xl space-y-8 px-4 sm:px-6">
          {dict.aboutPage.blocks.map((block, i) => {
            const Icon = blockIcons[i % blockIcons.length];
            return (
              <article
                key={block.heading}
                className={cn(
                  "group relative overflow-hidden rounded-3xl border p-7 sm:p-9 transition-all duration-300 hover:shadow-card-hover",
                  i % 2 === 1
                    ? "border-pine-900/10 bg-cream/70"
                    : "border-pine-900/10 bg-white"
                )}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pine-800/10 text-pine-800 transition-colors duration-300 group-hover:bg-pine-800 group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div className="flex-1">
                    <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink">
                      {block.heading}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-ink/75">
                      {block.body}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Core Principles & Values */}
      <section className="bg-cream/60 py-16 sm:py-20 border-y border-pine-900/5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow={dict.aboutPage.valuesEyebrow}
            title={dict.why.heading}
            sub={dict.why.sub}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dict.aboutPage.values.map((value, idx) => {
              const ValueIcon = valueIcons[idx % valueIcons.length];
              return (
                <div
                  key={value.title}
                  className="group rounded-3xl border border-pine-900/10 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-pine-700/25 hover:shadow-card-hover"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-pine-50 text-pine-800 transition-colors duration-300 group-hover:bg-pine-800 group-hover:text-white">
                    <ValueIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    {value.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultant Doctor Profile */}
      <PhysiotherapistProfile locale={locale} />

      {/* Call to action */}
      <FinalCTA locale={locale} />
    </>
  );
}
