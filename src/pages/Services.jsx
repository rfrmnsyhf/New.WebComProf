import PageHero from "@/components/common/PageHero";
import ServicesSection from "@/sections/Services/Services";
import CorePillarsSection from "@/sections/Services/CorePillars";
import RangeOfServicesSection from "@/sections/RangeOfServices/RangeOfServices";
import MidCTA from "@/sections/Services/MidCTA";
import OperationalServicesSection from "@/sections/OperationalServices/OperationalServices";
import ServiceTestimonials from "@/sections/Services/ServiceTestimonials";
import SharingLocalKnowledgeSection from "@/sections/LocalKnowledge/SharingLocalKnowledge";
import svcHero from "@/assets/images/home6.jpg";
import { useLanguage } from "@/context/LanguageContext";

const Services = () => {
  const { t, language } = useLanguage();

  return (
    <>
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
      <MidCTA />
      <OperationalServicesSection />
      <ServiceTestimonials />
      <SharingLocalKnowledgeSection />
    </>
  );
};

export default Services;

