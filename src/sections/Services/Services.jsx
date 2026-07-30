import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import { services } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";

const Services = () => {
  const { language } = useLanguage();

  return (
    <section id="services" className="relative overflow-hidden bg-slate-50/80 py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[24px_24px] opacity-50 pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
            Shipping Agency & Marine Services
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-3xl font-extrabold text-primary md:text-4xl lg:text-5xl tracking-tight"
          >
            {language === "id" ? (
              <>
                Solusi Maritim <span className="text-secondary">Terintegrasi</span>
              </>
            ) : (
              <>
                Integrated Maritime <span className="text-secondary">Solutions</span>
              </>
            )}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base text-slate-600 md:text-lg leading-relaxed"
          >
            {language === "id"
              ? "Kami menyediakan layanan keagenan kapal, logistik maritim, dan dukungan operasional yang terintegrasi untuk memastikan setiap kegiatan pelayaran berjalan efisien, aman, dan sesuai regulasi."
              : "We deliver full-spectrum shipping agency, maritime logistics, and offshore support services engineered for vessel safety, speed, and regulatory compliance."}
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch">
          {services.map((service, index) => (
            <motion.div
              key={service.id || service.title || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: 0.1 * index,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/5"
            >
              <div>
                {/* Icon Container */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 text-secondary transition-all duration-300 group-hover:bg-secondary group-hover:text-white group-hover:scale-105">
                  <service.icon className="h-7 w-7 transition-colors" />
                </div>

                {/* Service Title */}
                <h3 className="mb-3 text-lg font-bold text-primary group-hover:text-secondary transition-colors leading-snug">
                  {language === "id"
                    ? service.title
                    : service.titleEn || service.title}
                </h3>

                {/* Service Description */}
                <p className="text-sm leading-relaxed text-slate-500">
                  {language === "id"
                    ? service.description
                    : service.descriptionEn || service.description}
                </p>
              </div>

              {/* Bottom Gradient Accent Bar (SUDAH DIBERSIHKAN KE bg-linear-to-r) */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-secondary to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;