import type { MetadataRoute } from "next";

/** Demo site: disallow indexing until real content is live. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
  };
}
