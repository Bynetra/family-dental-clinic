import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { locales } from "@/lib/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/services", "/about", "/team", "/contact"];

  const routes: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of paths) {
      routes.push({
        url: `${site.url}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1.0 : 0.8,
      });
    }
  }

  return routes;
}
