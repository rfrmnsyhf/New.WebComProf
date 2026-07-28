import { motion } from "framer-motion";
import {
  Clock,
  MapPin,
  Layers,
  ShieldCheck,
  FileText,
  BadgeDollarSign,
  Eye,
  Calculator,
} from "lucide-react";
import Container from "@/components/layout/Container";
import { useLanguage } from "@/context/LanguageContext";

const WhyChooseUs = () => {
  const { language } = useLanguage();

  const reasons = [
    {
      icon: Clock,
      title: language === "id" ? "Layanan 24 Jam" : "24/7 Operations",
      description:
        language === "id"
          ? "Tim kami siap membantu Anda kapan saja, 24 jam sehari, 7 hari seminggu untuk kebutuhan mendesak."
          : "Our watchkeepers are on standby 24 hours a day, 7 days a week for immediate response.",
    },
    {
      icon: MapPin,
      title: language === "id" ? "Pengalaman Lokal Kuat" : "Deep Local Expertise",
      description:
        language === "id"
          ? "Pengetahuan mendalam tentang kondisi pelabuhan dan regulasi lokal di Batam dan sekitarnya."
          : "Unmatched familiarity with Batam port channels, authorities, and maritime regulations.",
    },
    {
      icon: Layers,
      title: language === "id" ? "Layanan Terintegrasi" : "Integrated Solutions",
      description:
        language === "id"
          ? "Solusi lengkap dari ship agency hingga logistics dalam satu atap untuk kemudahan operasional Anda."
          : "End-to-end maritime services from full agency to logistics under one roof.",
    },
    {
      icon: ShieldCheck,
      title: language === "id" ? "Kepatuhan HSE" : "HSE Compliance",
      description:
        language === "id"
          ? "Penerapan standar Health, Safety & Environment yang ketat dalam setiap operasi kami."
          : "Rigorous Health, Safety & Environment standards applied across all port operations.",
    },
    {
      icon: FileText,
      title: language === "id" ? "Laporan Operasional Harian" : "Daily Progress Reports",
      description:
        language === "id"
          ? "Transparansi penuh dengan laporan operasional harian yang detail dan akurat."
          : "Complete operational transparency with timely, accurate daily progress updates.",
    },
    {
      icon: BadgeDollarSign,
      title: language === "id" ? "Harga Kompetitif" : "Competitive Pricing",
      description:
        language === "id"
          ? "Kami menawarkan harga terbaik tanpa mengorbankan kualitas layanan yang kami berikan."
          : "Optimized disbursement costs without compromising service quality or safety.",
    },
    {
      icon: Eye,
      title: language === "id" ? "Transparansi Biaya" : "Transparent Disbursement",
      description:
        language === "id"
          ? "Tidak ada biaya tersembunyi. Setiap pengeluaran dilaporkan dengan jelas dan transparan."
          : "No hidden charges. Clear, fully documented port expense reporting.",
    },
    {
      icon: Calculator,
      title: language === "id" ? "Akurasi Disbursement" : "Accurate Financials",
      description:
        language === "id"
          ? "Pengelolaan dana dan disbursement yang akurat untuk ketenangan pikiran Anda."
          : "Meticulous fund management and precise disbursement accounting for complete peace of mind.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="flex min-h-screen items-center bg-slate-50 py-24"
    >
      <Container>
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-secondary"
          >
            {language === "id" ? "Keunggulan Kompetitif" : "Competitive Advantage"}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-3xl font-bold text-primary md:text-4xl lg:text-5xl"
          >
            {language === "id" ? (
              <>Keunggulan <span className="text-secondary">CBSA</span></>
            ) : (
              <>Why Choose <span className="text-secondary">CBSA</span></>
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
              ? "Keunggulan kompetitif yang membedakan CBSA dari kompetitor lainnya dalam industri maritim."
              : "Key competitive advantages setting CBSA apart as a top-tier maritime partner."}
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              className="group relative rounded-2xl border border-slate-100 p-6 transition-all hover:border-secondary/20 hover:shadow-lg"
            >
              <div className="absolute right-4 top-4 text-5xl font-bold text-primary/5">
                0{index + 1}
              </div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                <reason.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-primary">
                {reason.title}
              </h3>
              <p className="text-sm text-gray leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
