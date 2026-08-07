import { Helmet } from "react-helmet-async";

// Low-level renderer untuk JSON-LD structured data.
// Semua schema component lain dibangun di atas komponen ini.
const SchemaOrg = ({ data }) => {
  if (!data) return null;
  const items = Array.isArray(data) ? data : [data];

  return (
    <Helmet>
      {items.map((item, index) => (
        <script type="application/ld+json" key={index}>
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
};

export default SchemaOrg;
