import { motion } from "framer-motion";
import PageHero from "@/components/common/PageHero";
import PortfolioIntro from "@/sections/Portfolio/PortfolioIntro";
import PortfolioSection from "@/sections/Portfolio/Portfolio";
import ClosingBanner from "@/sections/Portfolio/ClosingBanner";
import portfolioHero from "@/assets/images/offshore.jpg";
import { useLanguage } from "@/context/LanguageContext";

const Portfolio = () => {
  const { t, language } = useLanguage();

  // Data terjemahan & navigasi halaman
  const pageMeta = {
    title:
      t?.portfolioPage?.title ||
      (language === "id"
        ? "Pengalaman Yang Berbicara"
        : "Proven Track Record"),
    subtitle:
      t?.portfolioPage?.subtitle ||
      (language === "id"
        ? "Setiap proyek yang kami selesaikan adalah cerminan dari komitmen kami terhadap keselamatan, ketepatan, dan profesionalisme."
        : "Every completed project reflects our steadfast commitment to safety, efficiency, and professionalism."),
    breadcrumbs: [
      {
        label: language === "id" ? "Beranda" : "Home",
        path: "/",
      },
      {
        label: language === "id" ? "Portofolio" : "Portfolio",
        path: "/portfolio",
      },
    ],
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="min-h-screen bg-white overflow-hidden"
    >
      {/* Hero Banner Section */}
      <PageHero
        title={pageMeta.title}
        subtitle={pageMeta.subtitle}
        image={portfolioHero}
        breadcrumbs={pageMeta.breadcrumbs}
      />

      {/* Intro Overview */}
      <PortfolioIntro />

      {/* Main Portfolio Grid / List */}
      <section className="relative bg-slate-50/50 py-4">
        <PortfolioSection />
      </section>

      {/* Bottom Conversion / CTA Banner */}
      <ClosingBanner />
    </motion.main>
  );
};

export default Portfolio;