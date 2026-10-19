import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/common/JsonLd";
import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { ConditionsSection } from "@/components/home/ConditionsSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PhysiotherapistProfile } from "@/components/home/PhysiotherapistProfile";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return pageMetadata(locale, "", dict.meta.home.title, dict.meta.home.description);
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return (
    <>
      <JsonLd locale={locale} />
      <Hero locale={locale} />
      <AboutPreview locale={locale} />
      <FeaturedServices locale={locale} />
      <ConditionsSection locale={locale} />
      <WhyChooseUs locale={locale} />
      <HowItWorks locale={locale} />
      <PhysiotherapistProfile locale={locale} />
      <FAQ locale={locale} />
      <FinalCTA locale={locale} />
    </>
  );
}
