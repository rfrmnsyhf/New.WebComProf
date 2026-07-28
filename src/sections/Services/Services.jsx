import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { services } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";

const Services = () => {
  const { language } = useLanguage();

  return (
    <section id="services" className="flex min-h-screen items-start bg-slate-50 py-24">
      <Container>
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-secondary"
          >
            Shipping Agency & Marine Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-3xl font-bold text-primary md:text-4xl lg:text-5xl"
          >
            {language === "id" ? (
              <>Solusi Maritim <span className="text-secondary">Terintegrasi</span></>
            ) : (
              <>Integrated Maritime <span className="text-secondary">Solutions</span></>
            )}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-gray"
          >
            {language === "id"
              ? "Kami menyediakan layanan keagenan kapal, logistik maritim, dan dukungan operasional yang terintegrasi untuk memastikan setiap kegiatan pelayaran berjalan efisien, aman, dan sesuai regulasi."
              : "We deliver full-spectrum shipping agency, maritime logistics, and offshore support services engineered for vessel safety, speed, and regulatory compliance."}
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 transition-colors group-hover:bg-secondary/10">
                <service.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-primary">
                {language === "id" ? service.title : (service.titleEn || service.title)}
              </h3>
              <p className="mb-6 text-gray leading-relaxed">
                {language === "id" ? service.description : (service.descriptionEn || service.description)}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-secondary to-accent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
