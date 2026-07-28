import { motion } from "framer-motion";
import { Target, Eye, Heart, Handshake, Clock, ShieldCheck } from "lucide-react";
import Container from "@/components/layout/Container";
import { useLanguage } from "@/context/LanguageContext";

const Philosophy = () => {
  const { language } = useLanguage();

  const philosophies = [
    {
      icon: Handshake,
      title: language === "id" ? "Kepercayaan" : "Trust & Integrity",
      description:
        language === "id"
          ? "Membangun hubungan bisnis berdasarkan kepercayaan yang tulus."
          : "Building long-term client relationships based on genuine trust.",
    },
    {
      icon: Heart,
      title: language === "id" ? "Nilai Tambah" : "Added Value",
      description:
        language === "id"
          ? "Memberikan nilai tambah kepada setiap pelanggan."
          : "Delivering meaningful value-added operational solutions.",
    },
    {
      icon: Clock,
      title: language === "id" ? "Tepat Waktu" : "Punctuality",
      description:
        language === "id"
          ? "Menyelesaikan pekerjaan sesuai deadline yang telah disepakati."
          : "Completing every port dispatch strictly on schedule.",
    },
    {
      icon: ShieldCheck,
      title: language === "id" ? "Keselamatan Kerja" : "Occupational Safety",
      description:
        language === "id"
          ? "Menjaga keselamatan kerja dalam setiap operasi."
          : "Enforcing strict safety protocols across all marine operations.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-secondary"
            >
              {language === "id" ? "Filosofi Perusahaan" : "Corporate Philosophy"}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-3xl font-bold text-primary md:text-4xl"
            >
              {language === "id" ? (
                <>Nilai-Nilai <span className="text-secondary">Kami</span></>
              ) : (
                <>Our Core <span className="text-secondary">Values</span></>
              )}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 text-lg text-gray leading-relaxed"
            >
              {language === "id"
                ? "Setiap operasi kami didasari oleh filosofi perusahaan yang kuat. Kami memastikan setiap pelayaran berjalan aman dan lancar melalui prinsip-prinsip yang kami pegang teguh."
                : "Every operation is guided by our core corporate philosophy. We ensure smooth and safe vessel port calls by adhering to uncompromising standards."}
            </motion.p>

            {/* Vision & Mission */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="rounded-xl bg-slate-50 p-5"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                    <Target className="h-5 w-5 text-secondary" />
                  </div>
                  <h4 className="font-semibold text-primary">
                    {language === "id" ? "Visi" : "Vision"}
                  </h4>
                </div>
                <p className="text-gray leading-relaxed">
                  {language === "id"
                    ? "Menjadi perusahaan penyedia jasa agen pelayaran dan kepelabuhanan independen tingkat nasional berkelas dunia yang selalu memberikan pelayanan terbaik sesuai standar kualitas global."
                    : "To be a world-class national independent shipping & port agency company consistently delivering services that match global quality standards."}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="rounded-xl bg-slate-50 p-5"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20">
                    <Eye className="h-5 w-5 text-secondary" />
                  </div>
                  <h4 className="font-semibold text-primary">
                    {language === "id" ? "Misi" : "Mission"}
                  </h4>
                </div>
                <ul className="space-y-2 text-gray">
                  {language === "id" ? (
                    <>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        Membangun hubungan bisnis berasaskan kepercayaan, rasa hormat, dan etika bisnis
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        Menyediakan layanan bernilai tambah demi kepuasan pelanggan
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        Menyelesaikan pekerjaan tepat waktu dan efisien
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        Memastikan lingkungan kerja yang aman sesuai standar K3/HSE
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        Membantu memastikan setiap pelayaran berjalan aman dan lancar
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        Build long-term partnerships based on trust, respect, and business ethics
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        Deliver value-added services focused on customer satisfaction
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        Complete every operation efficiently and strictly on schedule
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        Maintain a safe and healthy working environment under HSE standards
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        Ensure every voyage and port call is smooth, safe, and reliable
                      </li>
                    </>
                  )}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Right - Philosophy Cards */}
          <div className="grid grid-cols-2 gap-4">
            {philosophies.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group rounded-2xl border border-slate-100 p-6 transition-all hover:border-secondary/20 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                  <item.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="mb-2 font-semibold text-primary">{item.title}</h3>
                <p className="text-sm text-gray leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Philosophy;
