import { motion } from "framer-motion";
import {
  MapPin,
  Target,
  Lightbulb,
  CheckCircle2,
  Compass,
  ShieldCheck,
  Anchor,
  Radio,
} from "lucide-react";
import ContainerComponent from "@/components/layout/Container";
import { useLanguage } from "@/context/LanguageContext";

const LocalKnowledge = () => {
  const { language } = useLanguage();

  const intelHighlights = [
    language === "id" ? "Pembaruan Daftar Antrean Kapal (Port Lineup)" : "Real-time Port Lineup Updates",
    language === "id" ? "Intelijen Status & Pengembangan Terminal" : "Terminal Status & Operational Intel",
    language === "id" ? "Ketersediaan Fasilitas Penyimpanan Lokal" : "Local Storage Facility Availability",
  ];

  const expertiseTags = [
    language === "id" ? "Keagenan Kapal" : "Port Agency",
    language === "id" ? "Bahan Bakar Bunker" : "Bunkering",
    language === "id" ? "Pasokan Kapal" : "Ship Chandlery",
    language === "id" ? "Dukungan Offshore" : "Offshore Support",
    language === "id" ? "Navigasi & Keamanan" : "Maritime Security",
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50/70 py-20 lg:py-28">
      {/* Background Decorative Blur Blobs */}
      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <ContainerComponent className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Sharing Local Knowledge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            {/* Top Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
              <Compass className="h-3.5 w-3.5" />
              <span>
                {language === "id" ? "Intelijen Maritim Lokal" : "Local Maritime Intelligence"}
              </span>
            </div>

            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-primary md:text-4xl lg:text-4xl leading-tight">
              {language === "id" ? (
                <>
                  Berbagi <span className="text-secondary">Pengetahuan & Wawasan</span> Lokal
                </>
              ) : (
                <>
                  Sharing In-Depth <span className="text-secondary">Local Knowledge</span>
                </>
              )}
            </h2>

            <p className="mb-5 text-base leading-relaxed text-slate-600 md:text-lg">
              {language === "id"
                ? "Untuk membantu klien tidak hanya dalam operasi harian tetapi juga perencanaan strategis, CBSA menyediakan intelijen pasar lokal dan pembaruan operasional pelabuhan secara cepat dan akurat."
                : "To support client operations and strategic planning, CBSA provides up-to-date local market and operational intelligence, including port lineup updates and local terminal availability."}
            </p>

            <p className="mb-8 text-sm leading-relaxed text-slate-500">
              {language === "id"
                ? "Dengan pemahaman mendalam tentang alur pelayaran Selat Malaka, Selat Singapura, serta regulasi khusus perairan Kepulauan Riau, kami memastikan Nakhoda dan Port Manager Anda selalu terinformasi untuk pengambilan keputusan yang tepat."
                : "With intimate familiarity with Batam port channels and regional regulations, we keep your vessel masters and port managers fully informed for timely decision-making."}
            </p>

            {/* Checklist Features */}
            <div className="space-y-3 border-t border-slate-200/80 pt-6">
              {intelHighlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-semibold text-primary">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Aim & Expertise Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6 lg:col-span-6"
          >
            {/* Card 1: Our Aim */}
            <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-linear-to-br from-white to-slate-50/50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-md sm:p-8 border-l-4 border-l-secondary">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                  <Target className="h-6 w-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {language === "id" ? "Komitmen Utama" : "Core Mission"}
                </span>
              </div>

              <h3 className="mb-3 text-xl font-bold text-primary">
                {language === "id" ? "Tujuan Utama Kami" : "Our Aim"}
              </h3>

              <p className="text-base md:text-lg font-medium italic text-slate-700 leading-relaxed">
                {language === "id"
                  ? "“Membantu memastikan setiap pelayaran kapal Anda berjalan aman, lancar, efisien, dan tepat waktu di perairan Batam & Kepulauan Riau.”"
                  : "“To help make your every vessel voyage safe, smooth, cost-efficient, and strictly on schedule.”"}
              </p>
            </div>

            {/* Card 2: Operational Expertise */}
            <div className="group rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-md sm:p-8">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {language === "id" ? "Kapabilitas Teknis" : "Service Scope"}
                </span>
              </div>

              <h3 className="mb-3 text-xl font-bold text-primary">
                {language === "id" ? "Keahlian Operasional" : "Our Operational Expertise"}
              </h3>

              <p className="mb-6 text-sm leading-relaxed text-slate-600">
                {language === "id"
                  ? "Keahlian operasional kami mencakup spektrum luas—mulai dari keagenan kapal konvensional, bunker fuel supply, dan chandlery, hingga dukungan offshore khusus serta koordinasi keamanan maritim."
                  : "Our operational capabilities cover traditional shipping agency, bunkering, and chandlery, through to specialized offshore support and maritime security coordination."}
              </p>

              {/* Service Pills / Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                {expertiseTags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors group-hover:bg-secondary/10 group-hover:text-secondary"
                  >
                    <Anchor className="h-3 w-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </ContainerComponent>
    </section>
  );
};

export default LocalKnowledge;