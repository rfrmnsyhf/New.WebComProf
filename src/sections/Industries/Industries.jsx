import { motion } from "framer-motion";
import {
  Package,
  Container as ContainerIcon,
  Flame,
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

const Industries = () => {
  const { language } = useLanguage();

  const vesselTypes = [
    {
      icon: Package,
      title: "Break-Bulk",
      description:
        language === "id"
          ? "Layanan keagenan dan koordinasi bongkar muat untuk kapal break-bulk di pelabuhan Batam."
          : "Full port agency and discharge coordination for break-bulk cargo vessels in Batam.",
    },
    {
      icon: ContainerIcon,
      title: "Container Ship",
      description:
        language === "id"
          ? "Pengurusan dokumen lengkap, clearance, dan koordinasi bongkar muat untuk kapal peti kemas."
          : "Complete documentation, berth priority, and container handling for liner and feeder ships.",
    },
    {
      icon: Ship,
      title: "Dry Bulk",
      description:
        language === "id"
          ? "Dukungan operasional dan perizinan untuk kapal pengangkut kargo curah kering."
          : "Port agency and stevedoring supervision for dry bulk carriers carrying coal, minerals, and grains.",
    },
    {
      icon: Sailboat,
      title: "Cruise",
      description:
        language === "id"
          ? "Layanan keagenan dan husbandry untuk kapal pesiar serta koordinasi penumpang dan awak."
          : "Dedicated port handling, passenger clearance, and luxury husbandry for cruise liners.",
    },
    {
      icon: FlaskConical,
      title: "Chemicals & Product",
      description:
        language === "id"
          ? "Layanan keagenan khusus untuk kapal tanker kimia dengan standar keselamatan MARPOL & ISM."
          : "Specialized port call management for liquid chemical and refined product tankers.",
    },
    {
      icon: Warehouse,
      title: "Oil & Gas",
      description:
        language === "id"
          ? "Dukungan logistik dan operasional untuk kapal pendukung industri minyak dan gas lepas pantai."
          : "Offshore marine agency and logistics support for oil & gas exploration vessels and rigs.",
    },
    {
      icon: Anchor,
      title: "Tug & Barge",
      description:
        language === "id"
          ? "Dukungan operasional untuk kapal tunda dan tongkang termasuk perizinan dan towing master."
          : "Operational agency, towing permits, and anchorage clearances for tugboats and barges.",
    },
    {
      icon: Weight,
      title: "Heavy Lift",
      description:
        language === "id"
          ? "Layanan keagenan untuk kapal heavy lift dengan kargo berat dan oversize."
          : "Agency support and supercargo coordination for oversized heavy lift project cargo.",
    },
    {
      icon: Snowflake,
      title: "Reefer",
      description:
        language === "id"
          ? "Pengurusan dokumen dan koordinasi cold chain untuk kapal pengangkut barang pendingin."
          : "Port agency and refrigerated cargo monitoring for temperature-sensitive reefer ships.",
    },
    {
      icon: Flag,
      title: "Naval",
      description:
        language === "id"
          ? "Layanan keagenan khusus untuk kapal angkatan laut / militer dengan protokol diplomatik."
          : "Diplomatic clearance and specialized port agency protocol for naval and military vessels.",
    },
  ];

  const stakeholders = [
    {
      icon: Users,
      title: "Owners",
      titleId: "Pemilik Kapal",
    },
    {
      icon: Settings,
      title: "Ship Managers",
      titleId: "Pengelola Kapal",
    },
    {
      icon: UserCheck,
      title: "Charterers",
      titleId: "Penyewa Kapal",
    },
    {
      icon: Truck,
      title: "Operators",
      titleId: "Operator Kapal",
    },
    {
      icon: TrendingUp,
      title: "Crude Traders",
      titleId: "Pedagang Minyak Mentah",
    },
    {
      icon: ShoppingCart,
      title: "Suppliers",
      titleId: "Pemasok",
    },
    {
      icon: ArrowDownToLine,
      title: "Receivers",
      titleId: "Penerima Barang",
    },
  ];

  return (
    <section
      id="industries"
      className="flex min-h-screen items-center bg-white py-24"
    >
      <ContainerComponent>
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-secondary"
          >
            {language === "id" ? "Cakupan Bisnis" : "Business Coverage"}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-3xl font-bold text-primary md:text-4xl lg:text-5xl"
          >
            {language === "id" ? (
              <>Sektor & Klien <span className="text-secondary">Yang Kami Layani</span></>
            ) : (
              <>Industry Sectors & <span className="text-secondary">Clients We Serve</span></>
            )}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-gray"
          >
            {language === "id"
              ? "Layanan PT Chantika Bahari Sejahtera Abadi dirancang untuk mencakup seluruh spektrum dan segmen bisnis di industri maritim."
              : "CBSA services are engineered to cover the entire spectrum of vessel types and maritime industry stakeholders."}
          </motion.p>
        </div>

        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-center text-xl font-bold text-primary"
          >
            {language === "id" ? "Tipe Kapal & Muatan (Business Area)" : "Vessel & Cargo Coverage"}
          </motion.h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {vesselTypes.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/20 hover:shadow-xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 transition-colors duration-300 group-hover:bg-secondary/10">
                  <item.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-center text-xl font-bold text-primary"
          >
            {language === "id" ? "Pemangku Kepentingan & Klien Target" : "Target Clients & Stakeholders"}
          </motion.h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
            {stakeholders.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="group flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-secondary/20 hover:shadow-xl"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 transition-colors duration-300 group-hover:bg-secondary/10">
                  <item.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-sm font-semibold text-primary">
                  {language === "id" ? item.titleId : item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </ContainerComponent>
    </section>
  );
};

export default Industries;
