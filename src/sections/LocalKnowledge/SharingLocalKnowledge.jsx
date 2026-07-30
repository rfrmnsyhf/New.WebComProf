import { motion } from "framer-motion";
import { Map, BarChart3, Warehouse, Info, Compass } from "lucide-react";
import Container from "@/components/layout/Container";
import heroBg from "@/assets/images/aboutImg.jpg";
import { useLanguage } from "@/context/LanguageContext";

const SharingLocalKnowledge = () => {
  const { language } = useLanguage();

  const knowledgeItems = [
    {
      id: "port-conditions",
      icon: Map,
      title: language === "id" ? "Kondisi Pelabuhan" : "Port Conditions",
      description:
        language === "id"
          ? "Informasi terkini mengenai kondisi dan status operasional pelabuhan."
          : "Real-time updates on weather, channel depths, and port operational status.",
    },
    {
      id: "vessel-lineup",
      icon: BarChart3,
      title: language === "id" ? "Antrean Kapal" : "Vessel Line-up",
      description:
        language === "id"
          ? "Data line-up dan antrean kapal untuk perencanaan jadwal yang lebih baik."
          : "Accurate vessel lineups and waiting times for optimized schedule planning.",
    },
    {
      id: "port-infrastructure",
      icon: Compass,
      title: language === "id" ? "Perkembangan Pelabuhan" : "Port Infrastructure",
      description:
        language === "id"
          ? "Update perkembangan fasilitas dan infrastruktur pelabuhan terkini."
          : "Insights on new terminal developments and local port regulations.",
    },
    {
      id: "storage-anchorage",
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
      className="relative overflow-hidden bg-primary py-24 md:py-32"
    >
      {/* Background Image Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-primary via-transparent to-primary" />
      </div>

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center xl:gap-16">
          
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Sharing Local Knowledge
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="mb-6 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl tracking-tight leading-tight"
            >
              {language === "id" ? (
                <>
                  Informasi Operasional <span className="text-accent">Lokal</span>
                </>
              ) : (
                <>
                  Local Operational <span className="text-accent">Intelligence</span>
                </>
              )}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="mb-8 text-base text-slate-300 md:text-lg leading-relaxed"
            >
              {language === "id"
                ? "CBSA membantu pelanggan melalui informasi operasional lokal agar Anda dapat merencanakan operasi kapal dengan lebih baik dan efisien."
                : "CBSA empowers shipowners and charterers with real-time local port intelligence to streamline vessel dispatch and avoid costly delays."}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Info className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium text-slate-300">
                {language === "id"
                  ? "Membantu memastikan setiap pelayaran Anda aman dan lancar."
                  : "To help make your every voyage safe and smooth."}
              </p>
            </motion.div>
          </div>

          {/* Right Content - Cards Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {knowledgeItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.08 * index,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-accent/5"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-primary">
                  <item.icon className="h-6 w-6 transition-colors" />
                </div>

                <h3 className="mb-2 text-lg font-bold text-white group-hover:text-accent transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>

                {/* Subtle Hover Gradient Highlight */}
                <div className="absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-accent/10 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default SharingLocalKnowledge;