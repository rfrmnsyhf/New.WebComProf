import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, ShieldCheck, Clock, Award } from "lucide-react";
import Container from "@/components/layout/Container";
import { useLanguage } from "@/context/LanguageContext";

const PortfolioIntro = () => {
  const { t, language } = useLanguage();
  const reduceMotion = useReducedMotion();

  // Highlight poin keunggulan cepat
  const highlights = [
    {
      icon: ShieldCheck,
      label: language === "id" ? "Standar HSE 100%" : "100% HSE Compliance",
    },
    {
      icon: Clock,
      label: language === "id" ? "Operasional Tepat Waktu" : "On-Time Dispatch",
    },
    {
      icon: Award,
      label: language === "id" ? "Studi Kasus Nyata" : "Proven Field Operations",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-24">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-100/70 blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          
          {/* Eyebrow Pill Badge */}
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary"
          >
            <Briefcase className="h-3.5 w-3.5" />
            <span>
              {t?.portfolioIntro?.badge ||
                (language === "id" ? "Portofolio Kami" : "Our Portfolio")}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-3xl font-extrabold tracking-tight text-primary md:text-4xl lg:text-5xl"
          >
            {language === "id" ? (
              <>
                Pengalaman yang Berbicara{" "}
                <span className="text-secondary">Lebih Keras dari Kata-Kata</span>
              </>
            ) : (
              <>
                Track Record That{" "}
                <span className="text-secondary">Speaks for Itself</span>
              </>
            )}
          </motion.h2>

          {/* Subtitle / Paragraph */}
          <motion.p
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-slate-600 md:text-lg leading-relaxed"
          >
            {language === "id"
              ? "Setiap proyek yang kami selesaikan adalah cerminan dari komitmen kami terhadap keselamatan, ketepatan, dan profesionalisme. Berikut beberapa studi kasus dari operasi nyata yang telah kami tangani di lapangan."
              : "Every completed project reflects our steadfast commitment to safety, efficiency, and professionalism. Here are real-world case studies from operations we have successfully executed."}
          </motion.p>

          {/* Highlight Badges */}
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 rounded-xl border border-slate-200/80 bg-slate-50/60 px-4 py-2 text-xs font-semibold text-slate-700 shadow-xs backdrop-blur-xs transition-all hover:border-secondary/30 hover:bg-slate-50 md:text-sm"
                >
                  <Icon className="h-4 w-4 text-secondary shrink-0" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default PortfolioIntro;