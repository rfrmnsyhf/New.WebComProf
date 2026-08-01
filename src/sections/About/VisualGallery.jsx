import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import ContainerComponent from "@/components/layout/Container";
import { useLanguage } from "@/context/LanguageContext";

// Import Gambar Lapangan
import img4 from "@/assets/images/supply-offshore.jpg";
import img5 from "@/assets/images/tug-barge.jpg";
import bulkCarrier from "@/assets/images/bulk-carrier.jpg";
import kontainer from "@/assets/images/kontainer2.jpg";
import yacht from "@/assets/images/yacht.jpg";
import heavyLift from "@/assets/images/heavy-lift.jpg";
import aboutImg from "@/assets/images/aboutImg.jpg";
import contactHero from "@/assets/images/contactHero.jpg";
import industriesHero from "@/assets/images/industriesHero.jpg";
import servicesHero from "@/assets/images/servicesHero.jpg";
import offshorePng from "@/assets/images/offshore.jpg";
import lngPng from "@/assets/images/LNG.jpg";
import tankerPng from "@/assets/images/tanker.jpg";
import svc1Png from "@/assets/images/svc1.jpg";
import svc2Png from "@/assets/images/svc2.jpg";
import svc3Png from "@/assets/images/svc3.jpg";
import svc4Png from "@/assets/images/svc4.jpg";
import svc5Png from "@/assets/images/svc5.jpg";

// ==========================================
// 1. DATA DEFINITION
// ==========================================
const GALLERY_RAW = [
  {
    src: img4,
    alt: {
      id: "Operasi Offshore Support",
      en: "Offshore Support Operations",
    },
  },
  {
    src: img5,
    alt: {
      id: "Layanan Tug & Barge",
      en: "Tug & Barge Services",
    },
  },
  {
    src: offshorePng,
    alt: {
      id: "Operasi Offshore Support",
      en: "Offshore Support Operations",
    },
  },
  {
    src: lngPng,
    alt: {
      id: "Operasional Tanker LNG",
      en: "LNG Tanker Operations",
    },
  },
  {
    src: tankerPng,
    alt: {
      id: "Operasional Tanker Minyak",
      en: "Oil Tanker Operations",
    },
  },
  {
    src: svc1Png,
    alt: {
      id: "Keagenan Kapal & Pelabuhan",
      en: "Ship Agency & Port Services",
    },
  },
  {
    src: svc2Png,
    alt: {
      id: "Chandler Kapal & Bunkering",
      en: "Ship Chandler & Bunkering",
    },
  },
  {
    src: svc3Png,
    alt: {
      id: "Logistik & Bea Cukai",
      en: "Logistics & Customs Clearance",
    },
  },
  {
    src: svc4Png,
    alt: {
      id: "Dukungan Offshore & Towing",
      en: "Offshore Support & Towing",
    },
  },
  {
    src: svc5Png,
    alt: {
      id: "Husbandry & Crew Services",
      en: "Husbandry & Crew Services",
    },
  },
  {
    src: bulkCarrier,
    alt: {
      id: "Operasional Kapal Bulk Carrier",
      en: "Bulk Carrier Operations",
    },
  },
  {
    src: kontainer,
    alt: {
      id: "Penanganan Kapal Kontainer",
      en: "Container Ship Operations",
    },
  },
  {
    src: yacht,
    alt: {
      id: "Layanan Kapal Yacht",
      en: "Yacht Services",
    },
  },
  {
    src: heavyLift,
    alt: {
      id: "Operasi Heavy Lift",
      en: "Heavy Lift Operations",
    },
  },
  {
    src: aboutImg,
    alt: {
      id: "Operasional Kapal di Pelabuhan Batam",
      en: "Vessel Operations in Batam Port",
    },
  },
  {
    src: contactHero,
    alt: {
      id: "Kontak & Layanan Pelanggan",
      en: "Contact & Customer Service",
    },
  },
  {
    src: industriesHero,
    alt: {
      id: "Sektor Industri yang Kami Layani",
      en: "Industries We Serve",
    },
  },
  {
    src: servicesHero,
    alt: {
      id: "Layanan Maritim CBSA",
      en: "CBSA Maritime Services",
    },
  },
];

// ==========================================
// 2. MAIN COMPONENT
// ==========================================
const VisualGallery = () => {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();

  // Process translated captions
  const galleryImages = useMemo(
    () =>
      GALLERY_RAW.map((item) => ({
        ...item,
        title: item.alt[language] || item.alt.en,
      })),
    [language]
  );

  // Repeat items for seamless infinite marquee loop
  const marqueeItems = useMemo(
    () => [...galleryImages, ...galleryImages, ...galleryImages],
    [galleryImages]
  );

  return (
    <section className="relative overflow-hidden bg-slate-50/80 py-20">
      <ContainerComponent className="relative z-10">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
            {language === "id" ? "Dokumentasi Lapangan" : "Field Operations Gallery"}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl font-extrabold tracking-tight text-primary md:text-3xl lg:text-4xl"
          >
            {language === "id" ? (
              <>
                Aktivitas & Realisasi <span className="text-secondary">Operasional</span>
              </>
            ) : (
              <>
                Operational Highlights & <span className="text-secondary">Activities</span>
              </>
            )}
          </motion.h2>
        </div>
      </ContainerComponent>

      {/* Gallery Marquee Container */}
      <div className="group relative w-full overflow-hidden">
        {/* Side Gradient Fade Masks */}
        <div className="absolute left-0 top-0 z-20 h-full w-20 bg-linear-to-r from-slate-50/80 via-slate-50/40 to-transparent sm:w-32 md:w-48 pointer-events-none" />
        <div className="absolute right-0 top-0 z-20 h-full w-20 bg-linear-to-l from-slate-50/80 via-slate-50/40 to-transparent sm:w-32 md:w-48 pointer-events-none" />

        {/* Marquee Track */}
        <div
          className={`flex w-fit gap-5 px-4 ${
            reduceMotion ? "" : "animate-marquee group-hover:paused"
          }`}
        >
          {marqueeItems.map((img, index) => (
            <div
              key={`${img.title}-${index}`}
              className="group/card relative h-64 w-80 sm:h-72 sm:w-96 shrink-0 overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 shadow-sm transition-all duration-300 hover:border-secondary/40 hover:shadow-xl"
            >
              {/* Image */}
              <img
                src={img.src}
                alt={img.title}
                className="h-full w-full object-cover opacity-90 transition-all duration-600 ease-out group-hover/card:scale-110 group-hover/card:opacity-100"
                loading="lazy"
              />

              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 transition-opacity duration-180 group-hover/card:opacity-100" />

              {/* Hover Caption Text */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 opacity-0 transition-all duration-300 group-hover/card:translate-y-0 group-hover/card:opacity-100">
                <p className="text-sm font-bold text-white tracking-wide drop-shadow-xs">
                  {img.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualGallery;