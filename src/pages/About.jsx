import PageHero from "@/components/common/PageHero";
import { Helmet } from "react-helmet-async";
import AboutSection from "@/sections/About/About";
import PhilosophySection from "@/sections/Philosophy/Philosophy";
import WhyChooseUsSection from "@/sections/WhyChooseUs/WhyChooseUs";
import VisualGallery from "@/sections/About/VisualGallery";
import LocalKnowledgeSection from "@/sections/LocalKnowledge/LocalKnowledge";
import aboutImg from "@/assets/images/aboutusHero.jpg";
import { useLanguage } from "@/context/LanguageContext";

const About = () => {
  const { language } = useLanguage();

  return (
    <>
      <Helmet>
        <title>
          {language === "id"
            ? "Tentang Kami | CBSA - Keagenan Kapal Batam"
            : "About Us | CBSA - Ship Agency Batam"}
        </title>
        <meta
          name="description"
          content={
            language === "id"
              ? "Kenali PT. Chantika Bahari Sejahtera Abadi (CBSA) — keagenan kapal dan jasa maritim independen terpercaya di Batam, Selat Malaka, dan Selat Singapura."
              : "Get to know PT. Chantika Bahari Sejahtera Abadi (CBSA) — trusted independent shipping agency and maritime services in Batam, Malacca Strait, and Singapore Strait."
          }
        />
        <link rel="canonical" href="https://cbsabatam.com/about" />
        <meta property="og:url" content="https://cbsabatam.com/about" />
        <meta property="og:title" content="About Us | CBSA" />
        <meta
          property="og:description"
          content="Trusted independent shipping agency and maritime services in Batam, Indonesia."
        />
      </Helmet>
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
