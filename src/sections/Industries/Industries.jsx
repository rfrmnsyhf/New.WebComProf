import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Package,
  Container as ContainerIcon,
  Ship,
  Sailboat,
  FlaskConical,
  Anchor,
  Weight,
  Flag,
  UserCheck,
  Users,
  Settings,
  Truck,
  Warehouse,
  Snowflake,
  ShoppingCart,
  ArrowDownToLine,
  TrendingUp,
} from "lucide-react";
import ContainerComponent from "@/components/layout/Container";
import { useLanguage } from "@/context/LanguageContext";

// ==========================================
// 1. DATA DEFINITIONS
// ==========================================
const VESSEL_TYPES_RAW = [
  {
    icon: Package,
    title: "Break-Bulk",
    description: {
      id: "Layanan keagenan dan koordinasi bongkar muat untuk kapal break-bulk di pelabuhan Batam.",
      en: "Full port agency and discharge coordination for break-bulk cargo vessels in Batam.",
    },
  },
  {
    icon: ContainerIcon,
    title: "Container Ship",
    description: {
      id: "Pengurusan dokumen lengkap, clearance, dan koordinasi bongkar muat untuk kapal peti kemas.",
      en: "Complete documentation, berth priority, and container handling for liner and feeder ships.",
    },
  },
  {
    icon: Ship,
    title: "Dry Bulk",
    description: {
      id: "Dukungan operasional dan perizinan untuk kapal pengangkut kargo curah kering.",
      en: "Port agency and stevedoring supervision for dry bulk carriers carrying coal, minerals, and grains.",
    },
  },
  {
    icon: Sailboat,
    title: "Cruise",
    description: {
      id: "Layanan keagenan dan husbandry untuk kapal pesiar serta koordinasi penumpang dan awak.",
      en: "Dedicated port handling, passenger clearance, and luxury husbandry for cruise liners.",
    },
  },
  {
    icon: FlaskConical,
    title: "Chemicals & Product",
    description: {
      id: "Layanan keagenan khusus untuk kapal tanker kimia dengan standar keselamatan MARPOL & ISM.",
      en: "Specialized port call management for liquid chemical and refined product tankers.",
    },
  },
  {
    icon: Warehouse,
    title: "Oil & Gas",
    description: {
      id: "Dukungan logistik dan operasional untuk kapal pendukung industri minyak dan gas lepas pantai.",
      en: "Offshore marine agency and logistics support for oil & gas exploration vessels and rigs.",
    },
  },
  {
    icon: Anchor,
    title: "Tug & Barge",
    description: {
      id: "Dukungan operasional untuk kapal tunda dan tongkang termasuk perizinan dan towing master.",
      en: "Operational agency, towing permits, and anchorage clearances for tugboats and barges.",
    },
  },
  {
    icon: Weight,
    title: "Heavy Lift",
    description: {
      id: "Layanan keagenan untuk kapal heavy lift dengan kargo berat dan oversize.",
      en: "Agency support and supercargo coordination for oversized heavy lift project cargo.",
    },
  },
  {
    icon: Snowflake,
    title: "Reefer",
    description: {
      id: "Pengurusan dokumen dan koordinasi cold chain untuk kapal pengangkut barang pendingin.",
      en: "Port agency and refrigerated cargo monitoring for temperature-sensitive reefer ships.",
    },
  },
  {
    icon: Flag,
    title: "Naval",
    description: {
      id: "Layanan keagenan khusus untuk kapal angkatan laut / militer dengan protokol diplomatik.",
      en: "Diplomatic clearance and specialized port agency protocol for naval and military vessels.",
    },
  },
];

const STAKEHOLDERS_RAW = [
  { icon: Users, title: { en: "Owners", id: "Pemilik Kapal" } },
  { icon: Settings, title: { en: "Ship Managers", id: "Pengelola Kapal" } },
  { icon: UserCheck, title: { en: "Charterers", id: "Penyewa Kapal" } },
  { icon: Truck, title: { en: "Operators", id: "Operator Kapal" } },
  { icon: TrendingUp, title: { en: "Crude Traders", id: "Pedagang Minyak" } },
  { icon: ShoppingCart, title: { en: "Suppliers", id: "Pemasok" } },
  { icon: ArrowDownToLine, title: { en: "Receivers", id: "Penerima Barang" } },
];

// ==========================================
// 2. SUB-COMPONENTS
// ==========================================
const VesselCard = ({ icon: Icon, title, description, index, reduceMotion }) => (
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
    <div>
      {/* Icon Container */}
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 text-secondary transition-all duration-300 group-hover:bg-secondary group-hover:text-white group-hover:scale-105">
        <Icon className="h-7 w-7 transition-colors" />
      </div>

      {/* Card Title */}
      <h3 className="mb-2 text-base font-bold text-primary transition-colors group-hover:text-secondary leading-snug">
        {title}
      </h3>

      {/* Card Description */}
      <p className="text-xs leading-relaxed text-slate-500">{description}</p>
    </div>

    {/* Bottom Gradient Accent Bar */}
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-secondary to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
  </motion.div>
);

const StakeholderCard = ({ icon: Icon, title, index, reduceMotion }) => (
  <motion.div
    initial={{ opacity: 0, y: reduceMotion ? 0 : 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-30px" }}
    transition={{
      duration: 0.5,
      delay: reduceMotion ? 0 : 0.04 * index,
      ease: [0.21, 0.47, 0.32, 0.98],
    }}
    className="group flex flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-white p-5 text-center shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/5"
  >
    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-secondary transition-all duration-300 group-hover:bg-secondary group-hover:text-white group-hover:scale-105">
      <Icon className="h-6 w-6 transition-colors" />
    </div>
    <h4 className="text-xs font-semibold tracking-tight text-primary transition-colors group-hover:text-secondary sm:text-sm">
      {title}
    </h4>
  </motion.div>
);

// ==========================================
// 3. MAIN COMPONENT
// ==========================================
const Industries = () => {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();

  // Mapping data berdasarkan bahasa
  const vesselTypes = useMemo(
    () =>
      VESSEL_TYPES_RAW.map((item) => ({
        ...item,
        description: item.description[language] || item.description.en,
      })),
    [language]
  );

  const stakeholders = useMemo(
    () =>
      STAKEHOLDERS_RAW.map((item) => ({
        ...item,
        title: item.title[language] || item.title.en,
      })),
    [language]
  );

  return (
    <section
      id="industries"
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
            {language === "id" ? "Cakupan Bisnis" : "Business Coverage"}
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
                Sektor & Klien <span className="text-secondary">Yang Kami Layani</span>
              </>
            ) : (
              <>
                Industry Sectors & <span className="text-secondary">Clients We Serve</span>
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
              ? "Layanan PT Chantika Bahari Sejahtera Abadi dirancang untuk mencakup seluruh spektrum dan segmen bisnis di industri maritim."
              : "CBSA services are engineered to cover the entire spectrum of vessel types and maritime industry stakeholders."}
          </motion.p>
        </div>

        {/* Vessel & Cargo Types Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-8 text-center"
          >
            <span className="inline-block rounded-full border border-slate-200/80 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 shadow-xs">
              {language === "id"
                ? "Tipe Kapal & Muatan (Business Area)"
                : "Vessel & Cargo Coverage"}
            </span>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-stretch">
            {vesselTypes.map((item, index) => (
              <VesselCard
                key={item.title}
                {...item}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>

        {/* Stakeholders Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-8 text-center"
          >
            <span className="inline-block rounded-full border border-slate-200/80 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 shadow-xs">
              {language === "id"
                ? "Pemangku Kepentingan & Klien Target"
                : "Target Clients & Stakeholders"}
            </span>
          </motion.div>

          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 items-stretch">
            {stakeholders.map((item, index) => (
              <StakeholderCard
                key={item.title}
                {...item}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>
      </ContainerComponent>
    </section>
  );
};

export default Industries;