import { motion } from "framer-motion";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { company } from "@/constants/company";
import { useLanguage } from "@/context/LanguageContext";

const MidCTA = () => {
  const { t, language } = useLanguage();

  return (
    <section className="bg-slate-50/80 py-12 md:py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          /* Diberi border-l-4 border-accent sebagai anchor visual agar tidak jomplang */
          className="relative overflow-hidden rounded-2xl border border-slate-200/80 border-l-4 border-l-accent bg-white p-6 shadow-sm md:p-10"
        >
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            
            {/* Left Content Area */}
            <div className="max-w-2xl text-left">
              {/* Badge mungil penyeimbang visual */}
              <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                <span>
                  {language === "id" ? "Layanan Siaga 24/7" : "24/7 Operational Support"}
                </span>
              </div>

              <h3 className="mb-2 text-xl font-bold tracking-tight text-primary sm:text-2xl md:text-3xl">
                {language === "id"
                  ? "Butuh Dukungan Operasional Kapal?"
                  : "Need Vessel Operational Support?"}
              </h3>
              
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {language === "id"
                  ? "Tim CBSA siap membantu kebutuhan keagenan kapal, koordinasi operasional pelabuhan, serta berbagai layanan maritim secara profesional, cepat, dan sesuai regulasi."
                  : "The CBSA team is ready 24/7 to support your shipping agency, port call coordination, and maritime logistical needs professionally and efficiently."}
              </p>
            </div>

            {/* Right Action Button - Dibuat full width di HP, berbobot di Desktop */}
            <div className="w-full shrink-0 md:w-auto">
              <Button
                asChild
                size="lg"
                className="group h-12 w-full justify-center gap-2.5 bg-cta px-6 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-cta-hover hover:shadow-lg sm:w-auto"
              >
                <a
                  href={`https://wa.me/${company.phoneWhatsApp}?text=Halo%20Tim%20CBSA`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>{t?.nav?.contactBtn || "Hubungi Kami"}</span>
                  <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </Button>
            </div>

          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default MidCTA;