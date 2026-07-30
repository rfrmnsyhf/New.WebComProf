import { motion } from "framer-motion";
import { PhoneCall, Mail, ArrowRight, Anchor, ShieldCheck, Clock } from "lucide-react";
import ContainerComponent from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { company } from "@/constants/company";
import { useLanguage } from "@/context/LanguageContext";

const BottomCTA = () => {
  const { t, language } = useLanguage();

  const whatsappNum = company?.phoneWhatsApp2 || company?.phone || "6282171477799";
  const emailAddr = company?.email2 || "alvianprajatama@gmail.com";

  return (
    <section className="relative overflow-hidden bg-primary py-20 lg:py-28 text-white">
      {/* Background Glowing Blobs & Aesthetics */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-secondary/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size:32px_32px pointer-events-none opacity-50" />

      <ContainerComponent className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Top Operational Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-200 backdrop-blur-md"
          >
            <Anchor className="h-3.5 w-3.5 text-secondary" />
            <span>{language === "id" ? "Siap Melayani Operasional Kapal" : "Ready for Vessel Operations"}</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-3xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl leading-tight"
          >
            {language === "id" ? (
              <>
                Kapal Anda Membutuhkan Layanan di <span className="text-secondary">Perairan Batam?</span>
              </>
            ) : (
              <>
                Planning a Port Call in <span className="text-secondary">Batam Waters?</span>
              </>
            )}
          </motion.h2>

          {/* Subtitle Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-base text-slate-300 md:text-xl leading-relaxed"
          >
            {language === "id"
              ? "Dapatkan penanganan keagenan kapal yang cepat, transparan, dan profesional. Tim kami siaga 24/7 untuk memastikan operasional Anda tanpa kendala."
              : "Experience swift, transparent, and professional shipping agency solutions. Our team is on standby 24/7 to ensure seamless port operations."}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5"
          >
            <a
              href={`https://wa.me/${whatsappNum}?text=Halo%20CBSA,%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20keagenan`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="group w-full sm:w-auto gap-2.5 rounded-xl bg-secondary px-8 py-6 text-base font-bold text-white shadow-lg shadow-secondary/25 transition-all hover:bg-secondary/90 hover:shadow-xl active:scale-95"
              >
                <PhoneCall className="h-5 w-5" />
                <span>{t?.common?.consultNow || (language === "id" ? "Konsultasi Cepat" : "Quick Consultation")}</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-4" />
              </Button>
            </a>

            <a href={`mailto:${emailAddr}`} className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto gap-2.5 rounded-xl border-white/20 bg-white/10 px-8 py-6 text-base font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/40 active:scale-95"
              >
                <Mail className="h-5 w-5 text-slate-300" />
                <span>{language === "id" ? "Kirim Email" : "Send Email"}</span>
              </Button>
            </a>
          </motion.div>

          {/* Trust Badges Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-14 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-8 text-xs font-semibold text-slate-400 sm:gap-10"
          >
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-secondary" />
              <span>24/7 Watchkeeper Support</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-secondary" />
              <span>Licensed Shipping Agent</span>
            </div>
            <div className="flex items-center gap-2">
              <Anchor className="h-4 w-4 text-secondary" />
              <span>Batam & Riau Archipelago Coverage</span>
            </div>
          </motion.div>
        </div>
      </ContainerComponent>
    </section>
  );
};

export default BottomCTA;