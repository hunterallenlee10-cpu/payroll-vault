import type { MetadataRoute } from "next";
import { absolute, isLive } from "@/lib/site";

// Crawling is always allowed so search engines can read the page-level robots meta.
// Demo mode: noindex in the page meta and no sitemap. Live mode: index and the sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(isLive ? { sitemap: absolute("/sitemap.xml") } : {}),
  };
}
