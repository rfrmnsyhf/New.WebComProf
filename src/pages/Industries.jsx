import PageHero from "@/components/common/PageHero";
import { Helmet } from "react-helmet-async";
import IndustriesSection from "@/sections/Industries/Industries";
import VesselTypesSection from "@/sections/VesselTypes/VesselTypes";
import containerImg from "@/assets/images/industriesHero.jpg";
import { useLanguage } from "@/context/LanguageContext";

const Industries = () => {
  const { language } = useLanguage();

  return (
    <>
      <Helmet>
        <title>
          {language === "id"
            ? "Industri & Kapal | CBSA - Sektor yang Kami Layani"
            : "Industries & Vessels | CBSA - Sectors We Serve"}
        </title>
        <meta
          name="description"
          content={
            language === "id"
              ? "CBSA melayani berbagai jenis kapal dan sektor industri maritim: tanker, dry bulk, tugboat & barge, heavy lift, OSV, kapal pesiar, hingga kapal angkatan laut di Batam."
              : "CBSA serves various vessel types and maritime industry sectors: tankers, dry bulk, tug & barge, heavy lift, OSV, cruise ships, and naval vessels in Batam."
          }
        />
        <link rel="canonical" href="https://cbsabatam.com/industries" />
        <meta property="og:url" content="https://cbsabatam.com/industries" />
        <meta property="og:title" content="Industries & Vessels | CBSA" />
        <meta
          property="og:description"
          content="Vessel types and maritime industry sectors served by CBSA in Batam."
        />
      </Helmet>
      <PageHero
        title={
          language === "id"
            ? "Sektor Yang Kami Layani"
            : "Sectors We Serve"
        }
        subtitle={
          language === "id"
            ? "Spesialisasi kami mencakup berbagai jenis kapal dan sektor industri maritim dengan standar pelayanan internasional."
            : "Our specialization covers various vessel types and maritime industry sectors with international service standards."
        }
        image={containerImg}
      />
      <IndustriesSection />
      <VesselTypesSection />
    </>
  );
};

export default Industries;
