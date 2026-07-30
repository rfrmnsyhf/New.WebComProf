import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import Container from "@/components/layout/Container";
import { useLanguage } from "@/context/LanguageContext";
import { company } from "@/constants/company";

const FounderStatement = () => {
  const { t, language } = useLanguage();
  const reduceMotion = useReducedMotion();

  // Helper animasi dengan transisi premium (cubic-bezier feel)
  const fadeUp = (delay = 0) => ({
    initial: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: reduceMotion ? 0.3 : 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-slate-50 via-white to-slate-50 py-32">
      {/* Background Ambient Glow untuk Kesan Mewah */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-500px w-500px rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          
          {/* Section Tag / Badge */}
          <motion.div {...fadeUp(0)} className="mb-6 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-secondary/60" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              {t?.founder?.tag || (language === "id" ? "Pernyataan Pendiri" : "Founder's Statement")}
            </span>
            <span className="h-px w-8 bg-secondary/60" />
          </motion.div>

          {/* Founder Avatar / Monogram dengan Efek Ring & Glow */}
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0.3 : 0.6, delay: 0.1 }}
            className="relative mx-auto mb-10 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-linear-to-br from-primary to-primary/90 shadow-2xl md:h-36 md:w-36"
          >
            <span className="text-4xl font-extrabold tracking-widest text-white md:text-5xl">
              CD
            </span>
            {/* Outer Ring Aksen */}
            <div className="absolute inset-0 rounded-full ring-2 ring-secondary/40 ring-offset-4 ring-offset-white animate-pulse" />
          </motion.div>

          {/* Quote Block Container */}
          <motion.div {...fadeUp(0.2)} className="relative px-4 md:px-12">
            {/* Watermark Quote Icon di Background */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 -z-10 text-secondary/10 pointer-events-none">
              <Quote className="h-28 w-28 md:h-36 md:w-36" />
            </div>

            {/* Teks Justify dengan Optimasi Spasi & Line Height */}
            <motion.blockquote
              {...fadeUp(0.3)}
              className="mx-auto mb-12 max-w-3xl text-justify font-serif text-lg leading-relaxed text-primary/90 md:text-2xl md:leading-loose tracking-normal"
              style={{ textAlignLast: "center" }}
            >
              &ldquo;{t?.founder?.quote}&rdquo;
            </motion.blockquote>

            {/* Author Credential */}
            <motion.div {...fadeUp(0.4)} className="space-y-1">
              <div className="mx-auto mb-3 h-0.5 w-16 bg-secondary/40 rounded-full" />
              <h3 className="text-xl font-bold tracking-wide text-primary md:text-2xl">
                Capt. Darmansyah, M.Mar
              </h3>
              <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
                Founder & Managing Director
              </p>
              <p className="text-xs font-medium tracking-wide text-gray/80 pt-1">
                {company?.fullName || "PT. Chantika Bahari Sejahtera Abadi"}
              </p>
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default FounderStatement;