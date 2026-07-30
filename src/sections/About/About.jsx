import { motion } from "framer-motion";
import {
  Target,
  Eye,
  ShieldCheck,
  Users,
  Award,
  Globe,
  CheckCircle2,
  Building2,
  Sparkles,
} from "lucide-react";
import Container from "@/components/layout/Container";
import { company } from "@/constants/company";
import { useLanguage } from "@/context/LanguageContext";

const About = () => {
  const { t, language } = useLanguage();

  const valuesList = [
    {
      icon: ShieldCheck,
      title: language === "id" ? "Standar HSE" : "HSE Standards",
      desc:
        language === "id"
          ? "Keselamatan kerja & kepatuhan lingkungan ketat."
          : "Workplace safety & environmental compliance.",
    },
    {
      icon: Users,
      title: language === "id" ? "Tim Profesional" : "Professional Team",
      desc:
        language === "id"
          ? "Pengalaman bertahun-tahun di industri maritim."
          : "Years of hands-on maritime industry experience.",
    },
    {
      icon: Award,
      title: language === "id" ? "Layanan Cepat" : "Fast & Reliable",
      desc:
        language === "id"
          ? "Operasional tepat waktu & dapat diandalkan."
          : "Punctual and dependable port dispatch.",
    },
    {
      icon: Globe,
      title: language === "id" ? "Regulasi Pelabuhan" : "Local Regulations",
      desc:
        language === "id"
          ? "Pemahaman mendalam tentang otoritas lokal."
          : "Deep local authority & port clearance knowledge.",
    },
  ];

  const missionList = [
    language === "id"
      ? "Membangun kemitraan jangka panjang berdasarkan kepercayaan, rasa hormat, dan integritas bisnis."
      : "Build long-term partnerships based on trust, respect, and business integrity.",
    language === "id"
      ? "Memberikan layanan bernilai tambah yang berfokus pada kepuasan pelanggan."
      : "Deliver value-added services focused on customer satisfaction.",
    language === "id"
      ? "Menyelesaikan setiap operasional secara efisien dan tepat waktu."
      : "Complete every operation efficiently and on schedule.",
    language === "id"
      ? "Menjaga lingkungan kerja yang aman dan sehat dalam setiap kegiatan operasional."
      : "Maintain a safe and healthy working environment in every operation.",
    language === "id"
      ? "Memastikan setiap pelayaran aman, lancar, dan terpercaya."
      : "Ensure every voyage is safe, smooth, and reliable.",
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Background Accent Blur */}
      <div className="absolute top-1/2 left-0 h-96 w-96 -translate-y-1/2 rounded-full bg-slate-100/60 blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* Left Content (Text Overview + Vision & Mission) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Pill Badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary">
                <Building2 className="h-3.5 w-3.5" />
                <span>{t?.about?.tag || (language === "id" ? "Tentang Kami" : "About Us")}</span>
              </div>

              <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-primary md:text-4xl lg:text-5xl">
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

              <div className="space-y-4 text-base leading-relaxed text-slate-600 md:text-lg">
                <p>
                  <strong className="font-semibold text-primary">{company.shortName}</strong>{" "}
                  {language === "id"
                    ? "merupakan perusahaan yang bergerak di bidang jasa keagenan kapal dan layanan maritim yang berpusat di Batam, Indonesia. Berbekal pengalaman serta pemahaman mendalam terhadap operasional kepelabuhanan, kami berkomitmen memberikan pelayanan yang profesional, responsif, dan sesuai dengan kebutuhan setiap klien."
                    : "is a leading shipping agency and maritime services provider headquartered in Batam, Indonesia. With extensive experience and deep insights into port operations, we are committed to delivering professional, responsive, and client-tailored solutions."}
                </p>

                <p>
                  {language === "id"
                    ? "Kami menjalin koordinasi yang erat dengan berbagai instansi terkait, termasuk otoritas pelabuhan (KSOP), bea cukai, imigrasi, karantina, dan operator terminal untuk memastikan setiap proses kedatangan, operasional, hingga keberangkatan kapal berjalan secara efisien, aman, dan sesuai regulasi yang berlaku."
                    : "We maintain seamless coordination with key authorities including port management (KSOP), customs, immigration, quarantine, and terminal operators to ensure efficient, safe, and compliant vessel port calls."}
                </p>

                <p>
                  {language === "id"
                    ? "Dengan mengedepankan integritas, keselamatan kerja, serta pelayanan yang cepat dan dapat diandalkan, CBSA terus membangun hubungan kemitraan jangka panjang sebagai penyedia layanan keagenan kapal yang dipercaya oleh klien nasional maupun internasional."
                    : "Upholding integrity, occupational safety, and prompt service, CBSA builds long-term partnerships trusted by national and international shipping clients."}
                </p>
              </div>
            </motion.div>

            {/* Vision & Mission Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 space-y-5"
            >
              {/* Vision Card */}
              <div className="rounded-2xl border border-slate-200/80 border-l-4 border-l-secondary bg-slate-50/50 p-6 shadow-xs">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                    <Target className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-primary">
                    {language === "id" ? "Visi Perusahaan" : "Our Vision"}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed font-medium text-slate-600">
                  {language === "id"
                    ? "Menjadi perusahaan jasa keagenan kapal dan pelabuhan independen nasional berkelas dunia yang selalu memberikan pelayanan terbaik sesuai standar kualitas global."
                    : "To be a world-class national independent port & shipping services company that always provides the best services matching global standards of quality."}
                </p>
              </div>

              {/* Mission Card */}
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 shadow-xs">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Eye className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-primary">
                    {language === "id" ? "Misi Perusahaan" : "Our Mission"}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {missionList.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-xs md:text-sm text-slate-600 leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-secondary mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Core Value Cards Grid */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4"
            >
              {valuesList.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/30 hover:shadow-xl"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-all duration-300 group-hover:bg-secondary group-hover:text-white group-hover:scale-110">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h4 className="mb-2 font-bold text-primary transition-colors group-hover:text-secondary">
                    {item.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-slate-500 md:text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default About;