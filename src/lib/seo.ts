import { site } from "@/config/site";
import type { Locale } from "@/lib/i18n/config";

export function pageMetadata(
  locale: Locale,
  path: string,
  title: string,
  description: string,
) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const localizedPath = `/${locale}${cleanPath === "/" ? "" : cleanPath}`;

  return {
    title,
    description,
    metadataBase: new URL(site.url),
    alternates: {
      canonical: localizedPath,
      languages: {
        en: `/en${cleanPath === "/" ? "" : cleanPath}`,
        ur: `/ur${cleanPath === "/" ? "" : cleanPath}`,
      },
    },
    openGraph: {
      title,
      description,
      url: localizedPath,
      siteName: site.name,
      locale: locale === "ur" ? "ur_PK" : "en_US",
      type: "website" as const,
      images: [
        {
          url: "/images/hero-patient-smile.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}
