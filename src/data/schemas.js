import { company } from "@/constants/company";
import { SITE } from "@/config/seo";

// ==========================================
// JSON-LD NODES — definisi entity terpusat.
// Dirender lewat komponen SchemaOrg, tidak
// pernah ditulis inline di halaman.
// ==========================================

const orgId = `${SITE.url}/#organization`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": orgId,
  name: company.name,
  legalName: company.fullName,
  alternateName: company.shortName,
  url: SITE.url,
  image: SITE.ogImage,
  email: company.email,
  telephone: `+${company.phoneWhatsApp}`,
  sameAs: company.sameAs,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: `+${company.phoneWhatsApp}`,
      areaServed: "ID",
      availableLanguage: ["id", "en"],
      hoursAvailable: company.openingHours,
    },
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: `+${company.phoneWhatsApp2}`,
      areaServed: "ID",
      availableLanguage: ["id", "en"],
      hoursAvailable: company.openingHours,
    },
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.defaultTitle,
  inLanguage: ["id", "en"],
  publisher: { "@id": orgId },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.url}/#localbusiness`,
  name: company.name,
  legalName: company.fullName,
  url: SITE.url,
  image: SITE.ogImage,
  telephone: `+${company.phoneWhatsApp}`,
  email: company.email,
  hasMap: company.hasMap,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: company.streetAddress,
    addressLocality: company.addressLocality,
    addressRegion: company.addressRegion,
    addressCountry: company.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: company.geo.latitude,
    longitude: company.geo.longitude,
  },
  areaServed: company.areaServed.map((area) => ({
    "@type": "Place",
    name: area,
  })),
  parentOrganization: { "@id": orgId },
};

export const contactPointSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPoint",
  telephone: `+${company.phoneWhatsApp}`,
  contactType: "customer service",
  areaServed: "ID",
  availableLanguage: ["id", "en"],
  hoursAvailable: company.openingHours,
};
