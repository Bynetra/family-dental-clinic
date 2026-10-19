import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { locales } from "@/lib/i18n/config";

const routes = ["", "/about", "/services", "/conditions", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${site.url}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${site.url}/${l}${route}`])
        ),
      },
    }))
  );
}
