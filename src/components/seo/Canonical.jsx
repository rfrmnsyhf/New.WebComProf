import { Helmet } from "react-helmet-async";
import { SITE } from "@/config/seo";

// Render <link rel="canonical"> dari path relatif.
const Canonical = ({ path }) => (
  <Helmet>
    <link rel="canonical" href={`${SITE.url}${path}`} />
  </Helmet>
);

export default Canonical;
