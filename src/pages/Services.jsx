import PageHero from "@/components/common/PageHero";
import { Helmet } from "react-helmet-async";
import ServicesSection from "@/sections/Services/Services";
import CorePillarsSection from "@/sections/Services/CorePillars";
import RangeOfServicesSection from "@/sections/RangeOfServices/RangeOfServices";
import OperationalServicesSection from "@/sections/OperationalServices/OperationalServices";
import SharingLocalKnowledgeSection from "@/sections/LocalKnowledge/SharingLocalKnowledge";
import svcHero from "@/assets/images/servicesHero.jpg";
import { useLanguage } from "@/context/LanguageContext";

const Services = () => {
  const { t, language } = useLanguage();

  return (
    <>
      <Helmet>
        <title>
          {language === "id"
            ? "Layanan | CBSA - Ship Agency, Chandler & Bunkering"
            : "Services | CBSA - Ship Agency, Chandler & Bunkering"}
        </title>
        <meta
          name="description"
          content={
            language === "id"
              ? "Layanan maritim CBSA: ship agency & port services, ship chandler & bunkering, logistics & customs clearance, offshore support, husbandry, dan crew manning di Batam."
              : "CBSA maritime services: ship agency & port services, ship chandler & bunkering, logistics & customs clearance, offshore support, husbandry, and crew manning in Batam."
          }
        />
        <link rel="canonical" href="https://cbsabatam.com/services" />
        <meta property="og:url" content="https://cbsabatam.com/services" />
        <meta property="og:title" content="Our Services | CBSA" />
        <meta
          property="og:description"
          content="Comprehensive maritime services for vessels in Batam: ship agency, chandler, bunkering, logistics, and offshore support."
        />
      </Helmet>
      <PageHero
        title={t.services.tag}
        subtitle={
          language === "id"
            ? "Solusi maritim komprehensif untuk mendukung seluruh kebutuhan operasional laut Anda."
            : "Comprehensive maritime solutions supporting all your vessel operational needs."
        }
        image={svcHero}
      />
      <CorePillarsSection />
      <ServicesSection />
      <RangeOfServicesSection />
      <OperationalServicesSection />
      <SharingLocalKnowledgeSection />
    </>
  );
};

export default Services;

