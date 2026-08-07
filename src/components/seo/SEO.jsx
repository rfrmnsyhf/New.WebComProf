import { Helmet } from "react-helmet-async";
import { SITE, PAGES } from "@/config/seo";
import SchemaOrg from "@/components/seo/SchemaOrg";

// Komponen SEO induk untuk halaman baru.
// - Baca metadata dari src/config/seo.js (via pageKey) sebagai sumber default.
// - Prop eksplisit (title, description, dll) dapat menimpa nilai default.
// - jsonLd: array objek schema yang dirender lewat SchemaOrg.
const SEO = ({
  pageKey,
  language = "id",
  path,
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  robots,
  jsonLd = [],
}) => {
  const page = pageKey ? PAGES[pageKey] : null;
  const resolvedTitle = title || page?.title?.[language] || SITE.defaultTitle;
  const resolvedDescription =
    description ||
    page?.description?.[language] ||
    SITE.defaultDescription[language];
  const url = `${SITE.url}${path || pageKey || "/"}`;
  const resolvedOgImage = ogImage || SITE.ogImage;

  return (
    <>
      <Helmet>
        <title>{resolvedTitle}</title>
        <meta name="description" content={resolvedDescription} />
        <link rel="canonical" href={url} />
        <meta name="robots" content={robots || SITE.robots} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={ogTitle || resolvedTitle} />
        <meta
          property="og:description"
          content={ogDescription || resolvedDescription}
        />
        <meta property="og:image" content={resolvedOgImage} />
        <meta property="og:site_name" content={SITE.name} />
        <meta property="og:locale" content={SITE.locale} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={resolvedOgImage} />
      </Helmet>
      {jsonLd.map((data, index) => (
        <SchemaOrg key={index} data={data} />
      ))}
    </>
  );
};

export default SEO;
