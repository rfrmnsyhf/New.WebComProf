import SchemaOrg from "@/components/seo/SchemaOrg";
import { SITE } from "@/config/seo";

// BreadcrumbList schema. `items` = [{ name, path? }].
// Item terakhir (halaman aktif) tidak perlu `path`.
const BreadcrumbSchema = ({ items }) => {
  const itemListElement = (items || []).map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    ...(item.path ? { item: `${SITE.url}${item.path}` } : {}),
  }));

  return (
    <SchemaOrg
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement,
      }}
    />
  );
};

export default BreadcrumbSchema;
