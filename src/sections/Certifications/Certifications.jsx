import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Container from "@/components/layout/Container";
import { useLanguage } from "@/context/LanguageContext";

const Certifications = () => {
  const { language } = useLanguage();

  const certifications = [
    {
      title: "ISM Code",
      description: "International Safety Management",
    },
    {
      title: "ISO 9001:2015",
      description: language === "id" ? "Sistem Manajemen Mutu" : "Quality Management System",
    },
    {
      title: "SIUPAL",
      description: language === "id" ? "Izin Usaha Keagenan Kapal" : "Shipping Agency Operating License",
    },
    {
      title: "INSA Member",
      description: language === "id" ? "Asosiasi Pemilik Pelayaran Nasional" : "Indonesian National Shipowners' Association",
    },
    {
      title: "MARPOL",
      description: language === "id" ? "Pencegahan Pencemaran Laut" : "Marine Pollution Prevention Standard",
    },
    {
      title: "SOLAS",
      description: "Safety of Life at Sea",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-secondary"
            >
              {language === "id" ? "Sertifikasi & Kepatuhan" : "Certifications & Compliance"}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4 text-3xl font-bold text-primary md:text-4xl"
            >
              {language === "id" ? (
                <>Standar Keamanan <span className="text-secondary">Internasional</span></>
              ) : (
                <>International Safety <span className="text-secondary">Standards</span></>
              )}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg leading-relaxed text-gray"
            >
              {language === "id"
                ? "Kami mematuhi standar keamanan dan regulasi maritim internasional untuk memastikan setiap operasi memenuhi kualitas dan keamanan tertinggi."
                : "We strictly adhere to international maritime conventions and national port authority regulations to guarantee safety, quality, and full compliance."}
            </motion.p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-4 transition-all hover:border-secondary/20 hover:shadow-sm"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <div>
                  <p className="font-semibold text-primary">{cert.title}</p>
                  <p className="text-xs text-gray">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Certifications;
