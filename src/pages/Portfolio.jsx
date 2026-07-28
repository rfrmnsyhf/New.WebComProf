import PageHero from "@/components/common/PageHero";
import PortfolioIntro from "@/sections/Portfolio/PortfolioIntro";
import PortfolioSection from "@/sections/Portfolio/Portfolio";
import TestimonialsSection from "@/sections/Testimonials/Testimonials";
import ClosingBanner from "@/sections/Portfolio/ClosingBanner";
import portfolioHero from "@/assets/images/offshore.jpg";
import { useLanguage } from "@/context/LanguageContext";

const Portfolio = () => {
  const { language } = useLanguage();

  return (
    <>
      <PageHero
        title={
          language === "id"
            ? "Pengalaman Yang Berbicara"
            : "Proven Track Record"
        }
        subtitle={
          language === "id"
            ? "Setiap proyek yang kami selesaikan adalah cerminan dari komitmen kami terhadap keselamatan, ketepatan, dan profesionalisme."
            : "Every completed project reflects our steadfast commitment to safety, efficiency, and professionalism."
        }
        image={portfolioHero}
      />
      <PortfolioIntro />
      <PortfolioSection />
      <TestimonialsSection />
      <ClosingBanner />
    </>
  );
};

export default Portfolio;
