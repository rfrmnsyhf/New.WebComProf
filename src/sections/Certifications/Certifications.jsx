import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import ContainerComponent from "@/components/layout/Container";
import { useLanguage } from "@/context/LanguageContext";

// ==========================================
// 1. DATA DEFINITION
// ==========================================
const CERTIFICATIONS_RAW = [
  {
    title: "ISM Code",
    description: {
      id: "International Safety Management Code untuk keselamatan operasional kapal.",
      en: "International Safety Management Code for safe ship operations.",
    },
  },
  {
    title: "ISO 9001:2015",
    description: {
      id: "Sistem Manajemen Mutu berstandar internasional.",
      en: "International standard for Quality Management Systems.",
    },
  },
  {
    title: "SIUPAL",
    description: {
      id: "Surat Izin Usaha Perusahaan Keagenan Kapal resmi.",
      en: "Official Shipping Agency Operating License in Indonesia.",
    },
  },
  {
    title: "INSA Member",
    description: {
      id: "Anggota resmi Indonesian National Shipowners' Association.",
      en: "Official member of Indonesian National Shipowners' Association.",
    },
  },
  {
    title: "MARPOL",
    description: {
      id: "Kepatuhan standar pencegahan pencemaran lingkungan laut.",
      en: "International Convention for Marine Pollution Prevention.",
    },
  },
  {
    title: "SOLAS",
    description: {
      id: "Standar Keselamatan Jiwa di Laut (Safety of Life at Sea).",
      en: "International Safety of Life at Sea Standards.",
    },
  },
];

// ==========================================
// 2. SUB-COMPONENT
// ==========================================
const CertificationCard = ({ title, description, index, reduceMotion }) => (
  <motion.div
    initial={{ opacity: 0, y: reduceMotion ? 0 : 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-30px" }}
    transition={{
      duration: 0.5,
      delay: reduceMotion ? 0 : 0.05 * index,
      ease: [0.21, 0.47, 0.32, 0.98],
    }}
    className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/5"
  >
    {/* Icon Wrapper */}
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-secondary transition-all duration-300 group-hover:bg-secondary group-hover:text-white group-hover:scale-105">
      <CheckCircle2 className="h-5 w-5 transition-colors" />
    </div>

    {/* Content */}
    <div className="flex-1">
      <h4 className="font-bold text-primary transition-colors group-hover:text-secondary leading-snug">
        {title}
      </h4>
      <p className="mt-1 text-xs leading-relaxed text-slate-500">
        {description}
      </p>
    </div>

    {/* Bottom Gradient Accent Bar */}
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-secondary to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
  </motion.div>
);

// ==========================================
// 3. MAIN COMPONENT
// ==========================================
const Certifications = () => {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();

  const certifications = useMemo(
    () =>
      CERTIFICATIONS_RAW.map((item) => ({
        ...item,
        description: item.description[language] || item.description.en,
      })),
    [language]
  );

  return (
    <section className="relative overflow-hidden bg-slate-50/80 py-24">
      {/* Background Radial Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[24px_24px] opacity-50 pointer-events-none" />

      <ContainerComponent className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Side: Section Info */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
              {language === "id" ? "Sertifikasi & Kepatuhan" : "Certifications & Compliance"}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4 text-3xl font-extrabold tracking-tight text-primary md:text-4xl lg:text-5xl"
            >
              {language === "id" ? (
                <>
                  Standar Keamanan <span className="text-secondary">Internasional</span>
                </>
              ) : (
                <>
                  International Safety <span className="text-secondary">Standards</span>
                </>
              )}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 text-base leading-relaxed text-slate-600 md:text-lg"
            >
              {language === "id"
                ? "Kami mematuhi konvensi maritim internasional dan regulasi otoritas pelabuhan nasional untuk memastikan setiap operasi memenuhi standar keselamatan, kualitas, dan legalitas tertinggi."
                : "We strictly adhere to international maritime conventions and national port authority regulations to guarantee safety, quality, and full regulatory compliance."}
            </motion.p>

            {/* Extra Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-primary">100% Fully Compliant</p>
                <p className="text-[11px] text-slate-500">Maritime Regulations & IMO Standards</p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Certifications Grid */}
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {certifications.map((cert, index) => (
                <CertificationCard
                  key={cert.title}
                  {...cert}
                  index={index}
                  reduceMotion={reduceMotion}
                />
              ))}
            </div>
          </div>
        </div>
      </ContainerComponent>
    </section>
  );
};

export default Certifications;