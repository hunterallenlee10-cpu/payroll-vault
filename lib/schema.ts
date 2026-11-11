// JSON-LD. Only true things: no address, no ratings, no reviews (they are samples), no prices, no awards.
import { business, faqs, services } from "./business";
import { absolute } from "./site";

const ORG_ID = () => absolute("/#business");

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": ORG_ID(),
    name: business.name,
    description:
      "Locally owned payroll, payroll tax and HR services for small businesses in Frederick, MD and across Frederick County.",
    url: absolute("/"),
    telephone: business.phoneSchema,
    // Service-area business: town and state only, never a street address.
    address: { "@type": "PostalAddress", addressLocality: "Frederick", addressRegion: "MD", addressCountry: "US" },
    email: business.email,
    logo: absolute("/images/00-logo-2-logo-wordmark-transparent.png"),
    image: absolute("/images/01-mike-taylor-owner-headshot-BEST.webp"),
    foundingDate: business.founded,
    founder: { "@type": "Person", name: business.owner, jobTitle: "Owner" },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: business.hours.opens,
        closes: business.hours.closes,
      },
    ],
    areaServed: [
      { "@type": "AdministrativeArea", name: "Frederick County, Maryland" },
      ...business.towns.map((t) => ({
        "@type": "City",
        name: t,
        containedInPlace: { "@type": "AdministrativeArea", name: "Frederick County, Maryland" },
      })),
    ],
    parentOrganization: { "@type": "Organization", name: business.brand, url: business.nationalSite },
    knowsAbout: services.map((s) => s.name),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Payroll and HR services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@id": absolute(`/#${s.id}-service`) },
      })),
    },
  };
}

export function serviceSchemas() {
  return services.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": absolute(`/#${s.id}-service`),
    name: s.name,
    serviceType: s.name,
    description: s.line,
    url: absolute(`/#${s.id}`),
    provider: { "@id": ORG_ID() },
    areaServed: { "@type": "AdministrativeArea", name: "Frederick County, Maryland" },
  }));
}

// Matches the visible FAQ word for word: both read from the same array.
export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absolute("/") },
      { "@type": "ListItem", position: 2, name: "Contact", item: absolute("/contact") },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absolute("/#website"),
    name: business.name,
    url: absolute("/"),
    publisher: { "@id": ORG_ID() },
    inLanguage: "en-US",
  };
}
