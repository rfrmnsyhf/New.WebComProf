import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck, Users, Award, Globe } from "lucide-react";
import Container from "@/components/layout/Container";
import { company } from "@/constants/company";
import { useLanguage } from "@/context/LanguageContext";

const About = () => {
  const { t, language } = useLanguage();

  const valuesList = [
    {
      icon: ShieldCheck,
      title: language === "id" ? "Standar HSE" : "HSE Standards",
      desc: language === "id" ? "Keselamatan kerja & lingkungan" : "Workplace safety & environmental compliance",
    },
    {
      icon: Users,
      title: language === "id" ? "Tim Profesional" : "Professional Team",
      desc: language === "id" ? "Pengalaman bertahun-tahun" : "Years of hands-on maritime experience",
    },
    {
      icon: Award,
      title: language === "id" ? "Layanan Cepat" : "Fast & Reliable",
      desc: language === "id" ? "Tepat waktu & dapat diandalkan" : "Punctual and dependable port dispatch",
    },
    {
      icon: Globe,
      title: language === "id" ? "Regulasi Pelabuhan" : "Local Regulations",
      desc: language === "id" ? "Pemahaman mendalam" : "Deep local authority knowledge",
    },
  ];

  return (
    <section id="about" className="flex items-start bg-white py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">

          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-secondary">
                {t.about.tag}
              </span>

              <h2 className="mb-6 text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
                {language === "id" ? (
                  <>
                    Mitra Terpercaya dalam{" "}
                    <span className="text-secondary">Layanan Keagenan Kapal</span>
                  </>
                ) : (
                  <>
                    Trusted Partner in{" "}
                    <span className="text-secondary">Shipping Agency Services</span>
                  </>
                )}
              </h2>

              <p className="mb-6 text-justify text-lg leading-relaxed text-gray">
                {language === "id"
                  ? `${company.shortName} merupakan perusahaan yang bergerak di bidang jasa keagenan kapal dan layanan maritim yang berpusat di Batam, Indonesia. Berbekal pengalaman serta pemahaman mendalam terhadap operasional kepelabuhanan, kami berkomitmen memberikan pelayanan yang profesional, responsif, dan sesuai dengan kebutuhan setiap klien.`
                  : `${company.shortName} is a leading shipping agency and maritime services provider headquartered in Batam, Indonesia. With extensive experience and deep insights into port operations, we are committed to delivering professional, responsive, and client-tailored solutions.`}
              </p>

              <p className="mb-6 text-justify text-lg leading-relaxed text-gray">
                {language === "id"
                  ? "Kami menjalin koordinasi yang erat dengan berbagai instansi terkait, termasuk otoritas pelabuhan, bea cukai, imigrasi, karantina, dan operator terminal untuk memastikan setiap proses kedatangan, operasional, hingga keberangkatan kapal berjalan secara efisien, aman, dan sesuai regulasi yang berlaku."
                  : "We maintain seamless coordination with key authorities including port management (KSOP), customs, immigration, quarantine, and terminal operators to ensure efficient, safe, and compliant vessel port calls."}
              </p>

              <p className="mb-8 text-justify text-lg leading-relaxed text-gray">
                {language === "id"
                  ? "Dengan mengedepankan integritas, keselamatan kerja, serta pelayanan yang cepat dan dapat diandalkan, CBSA terus membangun hubungan kemitraan jangka panjang sebagai penyedia layanan keagenan kapal yang dipercaya oleh klien nasional maupun internasional."
                  : "Upholding integrity, occupational safety, and prompt service, CBSA builds long-term partnerships trusted by national and international shipping clients."}
              </p>
            </motion.div>

            {/* Mission & Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid gap-6 lg:grid-cols-1"
            >
              <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10">
                  <Target className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-primary">
                    {language === "id" ? "Visi" : "Vision"}
                  </h4>
                  <p className="text-justify text-sm text-gray">
                    {language === "id"
                      ? "Menjadi perusahaan jasa keagenan kapal dan pelabuhan independen nasional berkelas dunia yang selalu memberikan pelayanan terbaik sesuai standar kualitas global."
                      : "To be a world-class national independent port & shipping services company that always provides the best services matching global standards of quality."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/20">
                  <Eye className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-primary">
                    {language === "id" ? "Misi" : "Mission"}
                  </h4>
                  {language === "id" ? (
                    <>
                      <p className="text-justify text-sm text-gray">1. Membangun kemitraan jangka panjang berdasarkan kepercayaan, rasa hormat, dan integritas bisnis.</p>
                      <p className="text-justify text-sm text-gray">2. Memberikan layanan bernilai tambah yang berfokus pada kepuasan pelanggan.</p>
                      <p className="text-justify text-sm text-gray">3. Menyelesaikan setiap operasional secara efisien dan tepat waktu.</p>
                      <p className="text-justify text-sm text-gray">4. Menjaga lingkungan kerja yang aman dan sehat dalam setiap kegiatan operasional.</p>
                      <p className="text-justify text-sm text-gray">5. Memastikan setiap pelayaran aman, lancar, dan terpercaya.</p>
                    </>
                  ) : (
                    <>
                      <p className="text-justify text-sm text-gray">1. Build long-term partnerships based on trust, respect, and business integrity.</p>
                      <p className="text-justify text-sm text-gray">2. Deliver value-added services focused on customer satisfaction.</p>
                      <p className="text-justify text-sm text-gray">3. Complete every operation efficiently and on schedule.</p>
                      <p className="text-justify text-sm text-gray">4. Maintain a safe and healthy working environment in every operation.</p>
                      <p className="text-justify text-sm text-gray">5. Ensure every voyage is safe, smooth, and reliable.</p>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="self-start mt-8 grid grid-cols-2 gap-6"
          >
            {valuesList.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition-all hover:border-secondary/20 hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 transition-colors group-hover:bg-secondary/10">
                  <item.icon className="h-7 w-7 text-secondary" />
                </div>
                <h4 className="mb-1 font-semibold text-primary">{item.title}</h4>
                <p className="text-sm text-gray">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default About;
