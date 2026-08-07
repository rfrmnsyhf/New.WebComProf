import SchemaOrg from "@/components/seo/SchemaOrg";
import { SITE } from "@/config/seo";

// Service schema untuk landing page layanan.
const ServiceSchema = ({
  name,
  description,
  serviceType,
  path,
  image,
  areaServed,
}) => (
  <SchemaOrg
    data={{
      "@context": "https://schema.org",
      "@type": "Service",
      name,
      serviceType,
      description,
      url: `${SITE.url}${path}`,
      image: image || SITE.ogImage,
      provider: {
        "@id": `${SITE.url}/#organization`,
      },
      ...(areaServed && areaServed.length
        ? {
            areaServed: areaServed.map((area) => ({
              "@type": "Place",
              name: area,
            })),
          }
        : {}),
    }}
  />
);

export default ServiceSchema;
