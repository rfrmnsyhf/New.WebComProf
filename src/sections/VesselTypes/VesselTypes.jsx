import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ContainerComponent from "@/components/layout/Container";
import tankerImg from "@/assets/images/chemical-tanker.jpg";
import offshoreImg from "@/assets/images/offshore.jpg";
import tugBargeImg from "@/assets/images/tug-barge.jpg";
import cargoImg from "@/assets/images/heavy-lift.jpg";
import cruiseImg from "@/assets/images/cruise.jpg";
import navalImg from "@/assets/images/naval.jpg";
import dryBulkImg from "@/assets/images/dry-bulk.jpg";
import reeferImg from "@/assets/images/reefer.jpg";
import heavyLiftImg from "@/assets/images/heavy-lift.jpg";
import { useLanguage } from "@/context/LanguageContext";

const VesselTypes = () => {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();

  const vesselTypes = [
    {
      image: cargoImg,
      title: "Container Ship",
      descriptionId: "Kapal peti kemas dengan penanganan bongkar muat cepat.",
      descriptionEn: "Container carrier vessel with rapid turnaround handling.",
    },
    {
      image: tankerImg,
      title: "Chemicals Tanker",
      descriptionId: "Kapal tanker bahan kimia & minyak berstandar keselamatan tinggi.",
      descriptionEn: "Liquid chemical & oil tanker adhering to strict safety protocols.",
    },
    {
      image: dryBulkImg,
      title: "Dry Bulk",
      descriptionId: "Kapal curah kering untuk muatan komoditas massal.",
      descriptionEn: "Dry bulk cargo carrier optimized for bulk commodities.",
    },
    {
      image: tugBargeImg,
      title: "Tug & Barge",
      descriptionId: "Kombinasi kapal tunda dan tongkang untuk logistik pesisir.",
      descriptionEn: "Tugboat and barge combination for coastal logistics.",
    },
    {
      image: reeferImg,
      title: "Reefer",
      descriptionId: "Kapal pendingin untuk kargo segar dan mudah rusak.",
      descriptionEn: "Refrigerated cargo vessel for perishable commodities.",
    },
    {
      image: heavyLiftImg,
      title: "Heavy Lift",
      descriptionId: "Kapal angkut barang berat dan proyek khusus berskala besar.",
      descriptionEn: "Heavy project cargo carrier for oversized industrial structures.",
    },
    {
      image: cruiseImg,
      title: "Cruise",
      descriptionId: "Kapal pesiar penumpang dengan layanan pelabuhan prioritas.",
      descriptionEn: "Passenger cruise liner with priority port clearance services.",
    },
    {
      image: navalImg,
      title: "Naval",
      descriptionId: "Kapal angkatan laut dan militer dengan koordinasi khusus.",
      descriptionEn: "Naval and military vessel handled with secure coordination.",
    },
    {
      image: offshoreImg,
      title: "Offshore Support",
      descriptionId: "Kapal pendukung anjungan minyak dan gas lepas pantai.",
      descriptionEn: "Offshore supply & support vessel for oil and gas fields.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">
      <ContainerComponent>
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3 inline-flex items-center gap-2"
          >
            <span className="h-px w-6 bg-secondary/60" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              {language === "id" ? "Armada & Layanan" : "Vessel Port Expertise"}
            </span>
            <span className="h-px w-6 bg-secondary/60" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-3xl font-bold text-primary md:text-4xl lg:text-5xl"
          >
            {language === "id" ? (
              <>Jenis Kapal <span className="text-secondary">Yang Kami Tangani</span></>
            ) : (
              <>Vessel Types <span className="text-secondary">We Serve</span></>
            )}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base text-gray md:text-lg"
          >
            {language === "id"
              ? "Spesialisasi keagenan kami mencakup berbagai jenis kapal dengan standar pelayanan internasional dan kepatuhan penuh regulasi pelabuhan."
              : "Our maritime port expertise spans a diverse array of vessel types operated to global safety standards and regulatory compliance."}
          </motion.p>
        </div>

        {/* Grid Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {vesselTypes.map((vessel, index) => (
            <motion.div
              key={vessel.title}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300/60 border border-slate-100"
            >
              {/* Image Aspect Container */}
              <div className="aspect-16/10 overflow-hidden relative">
                <img
                  src={vessel.image}
                  alt={vessel.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-linear-to-t from-primary/95 via-primary/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
                
                {/* Top Right Action Icon Indicator */}
                <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 border border-white/20">
                  <ArrowUpRight className="h-4 w-4 text-secondary" />
                </div>
              </div>

              {/* Content Box */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 text-white">
                <div className="mb-1.5 h-0.5 w-8 bg-secondary rounded-full transition-all duration-300 group-hover:w-16" />
                <h3 className="text-xl font-bold tracking-tight mb-2 text-white group-hover:text-secondary-foreground transition-colors">
                  {vessel.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300 line-clamp-2">
                  {language === "id" ? vessel.descriptionId : vessel.descriptionEn}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </ContainerComponent>
    </section>
  );
};

export default VesselTypes;