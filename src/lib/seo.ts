import type { Metadata } from "next";
import { site } from "@/config/site";
import { locales, type Locale } from "@/lib/i18n/config";

export function pageMetadata(
  locale: Locale,
  path: string,
  title: string,
  description: string
): Metadata {
  const languages = Object.fromEntries(
    locales.map((l) => [l, `${site.url}/${l}${path}`])
  );
  return {
    title,
    description,
    alternates: { canonical: `${site.url}/${locale}${path}`, languages },
    openGraph: {
      title,
      description,
      url: `${site.url}/${locale}${path}`,
      siteName: site.name,
      locale: locale === "ur" ? "ur_PK" : "en_PK",
      type: "website",
      images: [{ url: `${site.url}/images/hero-illustration.svg`, width: 800, height: 640, alt: site.name }],
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
