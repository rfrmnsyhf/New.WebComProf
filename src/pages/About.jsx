import PageHero from "@/components/common/PageHero";
import AboutSection from "@/sections/About/About";
import PhilosophySection from "@/sections/Philosophy/Philosophy";
import WhyChooseUsSection from "@/sections/WhyChooseUs/WhyChooseUs";
import VisualGallery from "@/sections/About/VisualGallery";
import LocalKnowledgeSection from "@/sections/LocalKnowledge/LocalKnowledge";
import aboutImg from "@/assets/images/aboutImg.jpg";
import { useLanguage } from "@/context/LanguageContext";

const About = () => {
  const { language } = useLanguage();

  return (
    <>
      <PageHero
        title={
          language === "id"
            ? "Melayani Perairan Strategis Indonesia"
            : "Serving Strategic Indonesian Waters"
        }
        subtitle={
          language === "id"
            ? "PT. Chantika Bahari Sejahtera Abadi — keagenan kapal dan jasa maritim terpercaya di Batam, Selat Malaka, dan Selat Singapura."
            : "PT. Chantika Bahari Sejahtera Abadi — trusted shipping agency and maritime services in Batam, Malacca Strait, and Singapore Strait."
        }
        image={aboutImg}
      />
      <AboutSection />
      <PhilosophySection />
      <WhyChooseUsSection />
      <VisualGallery />
      <LocalKnowledgeSection />
    </>
  );
};

export default About;
