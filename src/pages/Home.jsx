import { Link } from "react-router-dom"; 
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { company } from "@/constants/company";
import aboutImg from "@/assets/images/aboutImg.jpg";
import heroImg from "@/assets/images/hero.png";
import svc1 from "@/assets/images/home6.jpg";
import svc2 from "@/assets/images/home6.jpg";
import svc3 from "@/assets/images/home7.jpg";
import svc4 from "@/assets/images/offshore.jpg";
import svc5 from "@/assets/images/tug-barge.jpg";
import ClientLogosSection from "@/sections/ClientLogos/ClientLogos";
import StatsSection from "@/sections/Stats/Stats";
import IndustriesSection from "@/sections/Industries/Industries";
import TestimonialsSection from "@/sections/Testimonials/Testimonials";
import PortfolioSection from "@/sections/Portfolio/Portfolio";
import FounderStatementSection from "@/sections/FounderStatement/FounderStatement";
import CertificationsSection from "@/sections/Certifications/Certifications";
import { useLanguage } from "@/context/LanguageContext";

const Home = () => {
  const { t, language } = useLanguage();

  const values = [
    {
      title: language === "id" ? "Profesionalisme" : "Professionalism",
      description:
        language === "id"
          ? "Setiap penugasan ditangani oleh tenaga ahli berpengalaman dengan standar kerja yang terstruktur dan dokumentasi yang transparan."
          : "Every assignment is handled by experienced specialists adhering to structured workflows and complete documentation.",
    },
    {
      title: language === "id" ? "Ketersediaan 24/7" : "24/7 Availability",
      description:
        language === "id"
          ? "Operasional maritim tidak mengenal waktu. Petugas jaga kami selalu siap merespons — termasuk malam hari dan hari libur nasional."
          : "Maritime operations never sleep. Our watchkeepers are always ready to respond, including nights and holidays.",
    },
    {
      title: language === "id" ? "Tenaga Berpengalaman" : "Experienced Team",
      description:
        language === "id"
          ? "Berbasis di jantung maritim Batam, kami memahami dinamika pelabuhan, regulasi, dan instansi setempat lebih baik dari siapa pun."
          : "Headquartered in Batam's maritime hub, we understand local port dynamics and regulations better than anyone.",
    },
  ];

  const featuredServices = [
    {
      image: svc1,
      title: t.services.s1Title,
      description: t.services.s1Desc,
    },
    {
      image: svc2,
      title: t.services.s2Title,
      description: t.services.s2Desc,
    },
    {
      image: svc3,
      title: t.services.s3Title,
      description: t.services.s3Desc,
    },
    {
      image: svc4,
      title: t.services.s4Title,
      description: t.services.s4Desc,
    },
    {
      image: svc5,
      title: t.services.s5Title,
      description: t.services.s5Desc,
    },
  ];
  return (
    <>
      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden bg-primary"
      >
        {/* Hero Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroImg}
            alt="CBSA Maritime Hero"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/60" />

        <Container className="relative z-10 py-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-4 inline-block rounded-full bg-cta/20 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-accent border border-cta/30">
              {t.hero.badge}
            </div>

            <h1 className="mb-6 text-4xl font-extrabold uppercase leading-tight text-white md:text-6xl lg:text-7xl">
              {t.hero.titleLine1} <br />
              <span className="text-accent">{t.hero.titleLine2}</span>
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-300">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={`https://wa.me/${company.phoneWhatsApp}?text=Halo%20CBSA`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="gap-2 bg-cta text-white hover:bg-cta-hover"
                >
                  {t.common.consultNow}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <Link to="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white bg-white/10 hover:bg-white/20"
                >
                  {t.common.exploreServices}
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent" />
      </section>

      {/* Client Logos */}
      <ClientLogosSection />

      {/* Value Proposition */}
      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            {/* 3 Value Cards */}
            <div className="grid gap-6 sm:grid-cols-3">
              {values.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="rounded-2xl border border-slate-100 p-6"
                >
                  <h3 className="mb-3 text-lg font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col justify-center rounded-2xl bg-linear-to-br from-primary to-primary/80 p-8 text-white"
            >
              <h4 className="mb-3 text-xl font-bold">
                {language === "id"
                  ? "Ingin Tahu Layanan Kami Lebih Lanjut?"
                  : "Want to Learn More About Our Services?"}
              </h4>
              <div className="mb-4 h-px w-12 bg-white/40" />
              <p className="mb-6 text-sm leading-relaxed text-white/80">
                {language === "id"
                  ? "Dari pengurusan ship agency hingga logistik terintegrasi — percayakan operasional kapal Anda kepada tim yang sudah berpengalaman di Batam."
                  : "From shipping agency clearance to integrated logistics — entrust your vessel operations to our experienced team in Batam."}
              </p>
              <Link to="/services">
                <Button className="gap-2 bg-[#FF6B00] text-white hover:bg-[#E56000]">
                  {language === "id" ? "Lihat Layanan Kami" : "View Our Services"}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* About Ringkas */}
      <section className="bg-white py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Kiri — Gambar + Counter */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={aboutImg}
                  alt="Kapal di pelabuhan Batam"
                  className="aspect-4/3 w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 rounded-2xl bg-cta px-6 py-4 text-white shadow-lg md:right-6">
                <span className="block text-3xl font-extrabold leading-none">25+</span>
                <span className="text-sm">
                  {language === "id" ? "Tahun Pengalaman" : "Years of Experience"}
                </span>
              </div>
            </motion.div>

            {/* Kanan — Deskripsi */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-secondary">
                {language === "id" ? "Tentang Kami" : "About Us"}
              </span>
              <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
                {language === "id"
                  ? "Berakar di Batam, Berpengalaman di Perairan Internasional."
                  : "Rooted in Batam, Experienced in International Waters."}
              </h2>
              <p className="mb-6 leading-relaxed text-gray">
                {language === "id"
                  ? `${company.fullName} adalah salah satu penyedia layanan pelabuhan dan pelayaran independen terbesar di wilayahnya. Berlokasi di Jalan Duyung RT 003 RW 005, Sungai Jodoh, Batu Ampar, Batam, kami menjamin layanan yang cepat, profesional, dan dapat diandalkan.`
                  : `${company.fullName} is one of the largest independent port & shipping services providers in the region. Headquartered at Jalan Duyung RT 003 RW 005, Sungai Jodoh, Batu Ampar, Batam, we guarantee fast, professional, and dependable maritime solutions.`}
              </p>
              <Link to="/about">
                <Button variant="outline" className="gap-2">
                  {language === "id" ? "Pelajari Lebih Lanjut" : "Learn More"}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Featured Services */}
      <section className="bg-slate-50 py-24">
        <Container>
          <div className="mb-16 text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-secondary"
            >
              {language === "id" ? "Layanan Utama" : "Featured Services"}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4 text-3xl font-bold text-primary md:text-4xl"
            >
              {language === "id" ? "Solusi Maritim Komprehensif" : "Comprehensive Maritime Solutions"}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto max-w-2xl text-lg text-gray"
            >
              {language === "id"
                ? "Setiap layanan kami dirancang untuk meminimalkan waktu tunggu, menghindari hambatan birokrasi, dan memastikan kapal Anda beroperasi sesuai jadwal."
                : "Every service is engineered to minimize turnaround time, eliminate administrative hurdles, and ensure your vessels operate strictly on schedule."}
            </motion.p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white transition-all hover:border-secondary/20 hover:shadow-lg"
              >
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-primary">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-sm font-medium text-secondary transition-all hover:gap-3"
                  >
                    {language === "id" ? "Selengkapnya" : "Read More"}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <Link to="/services">
              <Button variant="outline" size="lg" className="gap-2">
                {language === "id" ? "Lihat Semua Layanan" : "View All Services"}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* Segmentasi Jenis Kapal */}
      <IndustriesSection />

      {/* Testimoni Klien */}
      <TestimonialsSection />

      {/* Portfolio & Founder */}
      <PortfolioSection />
      <FounderStatementSection />

      {/* Sertifikasi & Compliance */}
      <CertificationsSection />

      {/* Bottom CTA */}
      <section className="bg-primary py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-3xl font-bold text-white md:text-5xl"
            >
              {language === "id" ? "Kapal Anda di Perairan Batam?" : "Have a Vessel Calling in Batam?"}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-10 text-lg text-slate-300"
            >
              {language === "id"
                ? "Dengan pengalaman operasional di Batam dan jalur pelayaran strategis Selat Malaka, kami memberikan solusi keagenan kapal yang efisien, responsif, dan dapat diandalkan untuk setiap kebutuhan operasional Anda."
                : "With operational expertise in Batam and the strategic shipping lanes of the Malacca Strait, we deliver efficient, responsive, and reliable vessel agency solutions for all your maritime needs."}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a
                href={`https://wa.me/${company.phoneWhatsApp}?text=Halo%20CBSA`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="group rounded-full bg-cta text-white hover:bg-cta-hover px-6 py-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  {t.common.consultNow}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                </Button>
              </a>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
