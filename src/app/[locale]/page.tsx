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

export function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Metadata {
  const dict = getDictionary(params.locale);
  return pageMetadata(params.locale, "", dict.meta.home.title, dict.meta.home.description);
}

export default function HomePage({ params }: { params: { locale: Locale } }) {
  return (
    <>
      <JsonLd locale={params.locale} />
      <Hero locale={params.locale} />
      <AboutPreview locale={params.locale} />
      <FeaturedServices locale={params.locale} />
      <ConditionsSection locale={params.locale} />
      <WhyChooseUs locale={params.locale} />
      <HowItWorks locale={params.locale} />
      <PhysiotherapistProfile locale={params.locale} />
      <FAQ locale={params.locale} />
      <FinalCTA locale={params.locale} />
    </>
  );
}
