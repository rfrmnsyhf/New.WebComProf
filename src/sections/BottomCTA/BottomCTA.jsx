import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { company } from "@/constants/company";
import { useLanguage } from "@/context/LanguageContext";

const BottomCTA = () => {
  const { t, language } = useLanguage();

  return (
    <section className="relative flex items-center bg-primary py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-3xl font-bold text-white md:text-5xl"
          >
            {language === "id" ? "Kapal Anda di Perairan Batam?" : "Your Vessel in Batam Waters?"}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-10 text-lg text-slate-300"
          >
            {language === "id"
              ? "Kami siap membantu setiap kebutuhan operasional laut Anda. Hubungi kami sekarang untuk konsultasi cepat."
              : "We are ready to support all your maritime operational needs in Batam. Contact us now for a consultation."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href={`https://wa.me/${company.phoneWhatsApp}?text=Halo%20CBSA`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="group gap-2 bg-cta text-white hover:bg-cta-hover"
              >
                <Phone className="h-4 w-4" />
                {t.common.consultNow}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
              </Button>
            </a>
            <a href={`mailto:${company.email}`}>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white bg-white/10 hover:bg-white/20"
              >
                {language === "id" ? "Kirim Email" : "Send Email"}
              </Button>
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default BottomCTA;
