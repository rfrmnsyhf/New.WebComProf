import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Handshake,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Award,
} from "lucide-react";
import Container from "@/components/layout/Container";
import { useLanguage } from "@/context/LanguageContext";

const Philosophy = () => {
  const { language } = useLanguage();

  const philosophies = [
    {
      icon: Handshake,
      title: language === "id" ? "Kepercayaan & Integritas" : "Trust & Integrity",
      description:
        language === "id"
          ? "Membangun hubungan kemitraan jangka panjang berbasis transparansi dan kepercayaan tulus."
          : "Building long-term client partnerships grounded in transparency and genuine trust.",
      number: "01",
    },
    {
      icon: Heart,
      title: language === "id" ? "Nilai Tambah" : "Added Value",
      description:
        language === "id"
          ? "Memberikan solusi operasional yang relevan dan bernilai lebih bagi setiap klien."
          : "Delivering meaningful value-added solutions tailored to operational needs.",
      number: "02",
    },
    {
      icon: Clock,
      title: language === "id" ? "Ketepatan Waktu" : "Punctuality & Speed",
      description:
        language === "id"
          ? "Memastikan setiap proses keagenan dan penanganan kapal selesai strictly on-schedule."
          : "Completing every port dispatch and agency service strictly on schedule.",
      number: "03",
    },
    {
      icon: ShieldCheck,
      title: language === "id" ? "Keselamatan Kerja (HSE)" : "Occupational Safety",
      description:
        language === "id"
          ? "Menerapkan standar K3/HSE yang ketat di seluruh wilayah operasi darat dan laut."
          : "Enforcing rigorous HSE protocols across all maritime and shore-based operations.",
      number: "04",
    },
  ];

  const missionPoints = [
    language === "id"
      ? "Membangun hubungan bisnis berasaskan kepercayaan, rasa hormat, dan etika profesional"
      : "Build long-term partnerships based on trust, respect, and high ethical standards",
    language === "id"
      ? "Menyediakan layanan bernilai tambah secara konsisten demi kepuasan pelanggan"
      : "Consistently deliver value-added services tailored to customer satisfaction",
    language === "id"
      ? "Menyelesaikan setiap tugas keagenan secara cepat, tepat, dan efisien"
      : "Complete every port operation efficiently and strictly on schedule",
    language === "id"
      ? "Memastikan lingkungan kerja aman sesuai dengan standar HSE/K3 internasional"
      : "Maintain a safe and healthy working environment under strict HSE standards",
    language === "id"
      ? "Memastikan setiap pelayaran dan operasional kapal berjalan aman dan lancar"
      : "Ensure every voyage and vessel port call is smooth, safe, and reliable",
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Background Subtle Pattern */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-slate-100/50 blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Vision & Mission */}
          <div className="lg:col-span-6">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>
                {language === "id" ? "Filosofi Perusahaan" : "Corporate Philosophy"}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-3xl font-extrabold tracking-tight text-primary md:text-4xl lg:text-4xl"
            >
              {language === "id" ? (
                <>
                  Prinsip Utama & <span className="text-secondary">Nilai-Nilai Kami</span>
                </>
              ) : (
                <>
                  Our Guiding <span className="text-secondary">Core Values</span>
                </>
              )}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 text-base leading-relaxed text-slate-600 md:text-lg text-justify"
            >
              {language === "id"
                ? "Setiap langkah operasional kami didasari oleh filosofi perusahaan yang kuat. Kami berkomitmen menjaga standar kualitas global demi kelancaran setiap pelayaran kapal Anda."
                : "Every marine operation is guided by our core corporate philosophy. We ensure smooth and safe vessel port calls by adhering to uncompromising standards."}
            </motion.p>

            {/* Vision & Mission Stack */}
            <div className="space-y-5">
              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="rounded-2xl border border-slate-200/80 border-l-4 border-l-secondary bg-linear-to-r from-slate-50 to-white p-6 shadow-xs"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                    <Target className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {language === "id" ? "Arah Masa Depan" : "Our Vision"}
                    </span>
                    <h3 className="text-lg font-bold text-primary">
                      {language === "id" ? "Visi" : "Vision"}
                    </h3>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 font-medium">
                  {language === "id"
                    ? "Menjadi perusahaan penyedia jasa agen pelayaran dan kepelabuhanan independen tingkat nasional berkelas dunia yang selalu memberikan pelayanan terbaik sesuai standar kualitas global."
                    : "To be a world-class national independent shipping & port agency company consistently delivering services that match global quality standards."}
                </p>
              </motion.div>

              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-6 shadow-xs"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Eye className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {language === "id" ? "Langkah Strategis" : "Our Mission"}
                    </span>
                    <h3 className="text-lg font-bold text-primary">
                      {language === "id" ? "Misi" : "Mission"}
                    </h3>
                  </div>
                </div>

                <ul className="space-y-3">
                  {missionPoints.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-slate-600 leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-secondary mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Right Column: 2x2 Philosophy Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6 lg:gap-5 lg:pt-8">
            {philosophies.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/30 hover:shadow-xl"
              >
                {/* Number Badge Background */}
                <span className="absolute top-4 right-4 text-3xl font-black text-slate-100 transition-colors group-hover:text-secondary/10 select-none">
                  {item.number}
                </span>

                <div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-all duration-300 group-hover:bg-secondary group-hover:text-white group-hover:scale-110">
                    <item.icon className="h-6 w-6" />
                  </div>

                  <h3 className="mb-2 text-lg font-bold text-primary transition-colors group-hover:text-secondary">
                    {item.title}
                  </h3>

                  <p className="text-xs leading-relaxed text-slate-500 md:text-sm">
                    {item.description}
                  </p>
                </div>

                {/* Subtle Accent Bottom Line on Hover */}
                <div className="mt-6 h-1 w-0 bg-secondary transition-all duration-300 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Philosophy;