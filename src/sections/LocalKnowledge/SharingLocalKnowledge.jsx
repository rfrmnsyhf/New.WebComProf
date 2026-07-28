import { motion } from "framer-motion";
import { Map, BarChart3, Warehouse, Info, Compass } from "lucide-react";
import Container from "@/components/layout/Container";
import heroBg from "@/assets/images/hero.png";
import { useLanguage } from "@/context/LanguageContext";

const SharingLocalKnowledge = () => {
  const { language } = useLanguage();

  const knowledgeItems = [
    {
      icon: Map,
      title: language === "id" ? "Kondisi Pelabuhan" : "Port Conditions",
      description:
        language === "id"
          ? "Informasi terkini mengenai kondisi dan status operasional pelabuhan."
          : "Real-time updates on weather, channel depths, and port operational status.",
    },
    {
      icon: BarChart3,
      title: language === "id" ? "Antrean Kapal" : "Vessel Line-up",
      description:
        language === "id"
          ? "Data line-up dan antrean kapal untuk perencanaan jadwal yang lebih baik."
          : "Accurate vessel lineups and waiting times for optimized schedule planning.",
    },
    {
      icon: Compass,
      title: language === "id" ? "Perkembangan Pelabuhan" : "Port Infrastructure",
      description:
        language === "id"
          ? "Update perkembangan fasilitas dan infrastruktur pelabuhan terkini."
          : "Insights on new terminal developments and local port regulations.",
    },
    {
      icon: Warehouse,
      title: language === "id" ? "Kapasitas Penyimpanan" : "Storage & Anchorage",
      description:
        language === "id"
          ? "Informasi kapasitas dan ketersediaan area penyimpanan di pelabuhan."
          : "Clear intelligence on local tank storage, bonded warehouses, and anchorage availability.",
    },
  ];

  return (
    <section
      id="local-knowledge"
      className="relative flex min-h-screen items-center overflow-hidden bg-primary py-24"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Left Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent"
            >
              Sharing Local Knowledge
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl"
            >
              {language === "id" ? (
                <>Informasi Operasional <span className="text-accent">Lokal</span></>
              ) : (
                <>Local Operational <span className="text-accent">Intelligence</span></>
              )}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 text-lg leading-relaxed text-slate-300"
            >
              {language === "id"
                ? "CBSA membantu pelanggan melalui informasi operasional lokal agar Anda dapat merencanakan operasi kapal dengan lebih baik dan efisien."
                : "CBSA empowers shipowners and charterers with real-time local port intelligence to streamline vessel dispatch and avoid costly delays."}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-3 rounded-xl bg-white/10 p-4 backdrop-blur-sm"
            >
              <Info className="h-5 w-5 shrink-0 text-accent" />
              <p className="text-sm text-slate-300">
                {language === "id"
                  ? "Membantu memastikan setiap pelayaran Anda aman dan lancar."
                  : "To help make your every voyage safe and smooth."}
              </p>
            </motion.div>
          </div>

          {/* Right Content - Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {knowledgeItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-accent/30 hover:bg-white/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default SharingLocalKnowledge;
