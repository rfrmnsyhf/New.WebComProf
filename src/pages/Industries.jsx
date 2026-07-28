import PageHero from "@/components/common/PageHero";
import IndustriesSection from "@/sections/Industries/Industries";
import VesselTypesSection from "@/sections/VesselTypes/VesselTypes";
import containerImg from "@/assets/images/dry-bulk.jpg";
import { useLanguage } from "@/context/LanguageContext";

const Industries = () => {
  const { language } = useLanguage();

  return (
    <>
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
