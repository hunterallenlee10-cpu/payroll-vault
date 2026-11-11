// The launch switch. Everything about indexing is driven from here.
// NEXT_PUBLIC_SITE_MODE: "demo" (default) keeps the concept out of Google. "live" is for launch day only.
// NEXT_PUBLIC_SITE_URL: base URL for canonicals, Open Graph, sitemap and JSON-LD.

export const siteMode: "demo" | "live" = process.env.NEXT_PUBLIC_SITE_MODE === "live" ? "live" : "demo";
export const isLive = siteMode === "live";

// On Vercel, fall back to the project's production URL so canonicals and the link preview never point at localhost.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "";
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || vercelUrl || "http://localhost:3000").replace(/\/+$/, "");

export const absolute = (path = "/") => `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;

// Real last-modified dates for the sitemap. Update when a page changes.
export const lastModified = {
  home: "2026-11-11",
  contact: "2026-11-11",
  privacy: "2026-11-11",
};
