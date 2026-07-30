import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Clock,
  MapPin,
  Layers,
  ShieldCheck,
  FileText,
  BadgeDollarSign,
  Eye,
  Calculator,
} from "lucide-react";
import ContainerComponent from "@/components/layout/Container";
import { useLanguage } from "@/context/LanguageContext";

// ==========================================
// 1. DATA DEFINITIONS
// ==========================================
const REASONS_RAW = [
  {
    icon: Clock,
    title: {
      id: "Layanan Operasional 24/7",
      en: "24/7 Operations",
    },
    description: {
      id: "Tim siap siaga 24 jam sehari, 7 hari seminggu untuk menangani kebutuhan operasional kapal secara cepat.",
      en: "Our watchkeepers are on standby 24 hours a day, 7 days a week for immediate response.",
    },
  },
  {
    icon: MapPin,
    title: {
      id: "Pengalaman Lokal Kuat",
      en: "Deep Local Expertise",
    },
    description: {
      id: "Pengetahuan mendalam tentang alur pelabuhan, regulasi, dan otoritas maritim di wilayah Batam & sekitarnya.",
      en: "Unmatched familiarity with Batam port channels, authorities, and maritime regulations.",
    },
  },
  {
    icon: Layers,
    title: {
      id: "Layanan Terintegrasi",
      en: "Integrated Solutions",
    },
    description: {
      id: "Solusi lengkap dari keagenan kapal, logistik, hingga perizinan dalam satu pintu untuk efisiensi Anda.",
      en: "End-to-end maritime services from full agency to logistics under one seamless roof.",
    },
  },
  {
    icon: ShieldCheck,
    title: {
      id: "Kepatuhan HSE Ketat",
      en: "HSE Compliance",
    },
    description: {
      id: "Penerapan standar Health, Safety & Environment yang tinggi pada setiap aspek aktivitas operasional.",
      en: "Rigorous Health, Safety & Environment standards applied across all port operations.",
    },
  },
  {
    icon: FileText,
    title: {
      id: "Laporan Laju Operasi",
      en: "Daily Progress Reports",
    },
    description: {
      id: "Transparansi operasional penuh melalui pembaruan laporan harian yang detail, akurat, dan tepat waktu.",
      en: "Complete operational transparency with timely, accurate daily progress updates.",
    },
  },
  {
    icon: BadgeDollarSign,
    title: {
      id: "Harga Kompetitif",
      en: "Competitive Pricing",
    },
    description: {
      id: "Penawaran struktur biaya yang dioptimalkan tanpa mengorbankan kualitas dan keamanan layanan.",
      en: "Optimized disbursement costs without compromising service quality or safety.",
    },
  },
  {
    icon: Eye,
    title: {
      id: "Transparansi Biaya",
      en: "Transparent Disbursement",
    },
    description: {
      id: "Bebas biaya tersembunyi. Setiap rincian pengeluaran pelabuhan dilaporkan secara terbuka.",
      en: "No hidden charges. Clear, fully documented port expense reporting.",
    },
  },
  {
    icon: Calculator,
    title: {
      id: "Akurasi Keuangan",
      en: "Accurate Financials",
    },
    description: {
      id: "Pengelolaan dana dan akuntansi disbursement yang presisi untuk ketenangan pikiran Anda.",
      en: "Meticulous fund management and precise disbursement accounting for complete peace of mind.",
    },
  },
];

// ==========================================
// 2. SUB-COMPONENT
// ==========================================
const ReasonCard = ({ icon: Icon, title, description, index, reduceMotion }) => {
  const formattedNumber = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: reduceMotion ? 0 : 0.05 * index,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/5"
    >
      {/* Background Watermark Number */}
      <span className="absolute right-4 top-2 select-none text-[3.5rem] font-extrabold leading-none tracking-tighter text-slate-100 transition-colors duration-500 group-hover:text-secondary/10">
        {formattedNumber}
      </span>

      <div className="relative z-10">
        {/* Icon Container */}
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 text-secondary transition-all duration-300 group-hover:bg-secondary group-hover:text-white group-hover:scale-105">
          <Icon className="h-7 w-7 transition-colors" />
        </div>

        {/* Card Title */}
        <h3 className="mb-2 text-lg font-bold text-primary transition-colors group-hover:text-secondary leading-snug">
          {title}
        </h3>

        {/* Card Description */}
        <p className="text-xs leading-relaxed text-slate-500">
          {description}
        </p>
      </div>

      {/* Bottom Gradient Accent Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-secondary to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  );
};

// ==========================================
// 3. MAIN COMPONENT
// ==========================================
const WhyChooseUs = () => {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();

  const reasons = useMemo(
    () =>
      REASONS_RAW.map((item) => ({
        ...item,
        title: item.title[language] || item.title.en,
        description: item.description[language] || item.description.en,
      })),
    [language]
  );

  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-slate-50/80 py-24"
    >
      {/* Background Radial Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[24px_24px] opacity-50 pointer-events-none" />

      <ContainerComponent className="relative z-10">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
            {language === "id" ? "Keunggulan Kompetitif" : "Competitive Advantage"}
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
                Mengapa Memilih <span className="text-secondary">CBSA</span>
              </>
            ) : (
              <>
                Why Choose <span className="text-secondary">CBSA</span>
              </>
            )}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg"
          >
            {language === "id"
              ? "Nilai tambah dan standar profesional yang membedakan CBSA sebagai mitra terpercaya dalam industri maritim."
              : "Key competitive advantages setting CBSA apart as a top-tier and trusted maritime partner."}
          </motion.p>
        </div>

        {/* Grid Reasons */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {reasons.map((reason, index) => (
            <ReasonCard
              key={reason.title}
              {...reason}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </ContainerComponent>
    </section>
  );
};

export default WhyChooseUs;