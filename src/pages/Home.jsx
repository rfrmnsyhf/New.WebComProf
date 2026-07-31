import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, MapPinned, Anchor } from "lucide-react";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { company } from "@/constants/company";
import aboutImg from "@/assets/images/aboutImg.jpg";
import svc1 from "@/assets/images/home5.jpg";
import svc2 from "@/assets/images/home6.jpg";
import svc3 from "@/assets/images/home7.jpg";
import svc4 from "@/assets/images/offshore.jpg";
import svc5 from "@/assets/images/tug-barge.jpg";
import StatsSection from "@/sections/Stats/Stats";
import IndustriesSection from "@/sections/Industries/Industries";
import PortfolioSection from "@/sections/Portfolio/Portfolio";
import CertificationsSection from "@/sections/Certifications/Certifications";
import { useLanguage } from "@/context/LanguageContext";

// Hook reusable animation variants
const useMotionVariants = () => {
  const reduce = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: reduce ? 0.3 : 0.5, delay, ease: "easeOut" },
  });

  const fadeX = (direction = 1, delay = 0) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, x: 30 * direction },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: reduce ? 0.3 : 0.6, delay, ease: "easeOut" },
  });

  return { fadeUp, fadeX, reduce };
};

// Reusable eyebrow label
const SectionEyebrow = ({ children, motionProps = {}, className = "" }) => (
  <motion.span
    {...motionProps}
    className={`mb-3 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary ${className}`}
  >
    <Anchor className="h-3.5 w-3.5" />
    <span>{children}</span>
  </motion.span>
);

const Home = () => {
  const { t, language } = useLanguage();
  const { fadeUp, fadeX, reduce } = useMotionVariants();

  // Modularize static translated values
  const values = [
    {
      id: "professionalism",
      icon: ShieldCheck,
      title: language === "id" ? "Profesionalisme" : "Professionalism",
      description:
        language === "id"
          ? "Setiap penugasan ditangani oleh tenaga ahli berpengalaman dengan standar kerja yang terstruktur dan dokumentasi transparan."
          : "Every assignment is handled by experienced specialists adhering to structured workflows and complete documentation.",
    },
    {
      id: "availability",
      icon: Clock,
      title: language === "id" ? "Ketersediaan 24/7" : "24/7 Availability",
      description:
        language === "id"
          ? "Operasional maritim tidak mengenal waktu. Tim siaga kami selalu siap merespons 24 jam sehari, termasuk hari libur."
          : "Maritime operations never sleep. Our watchkeepers are always ready to respond, including nights and holidays.",
    },
    {
      id: "experienced-team",
      icon: MapPinned,
      title: language === "id" ? "Tenaga Berpengalaman" : "Experienced Team",
      description:
        language === "id"
          ? "Berbasis di jantung maritim Batam, kami memahami dinamika pelabuhan, regulasi, dan otoritas setempat secara mendalam."
          : "Headquartered in Batam's maritime hub, we understand local port dynamics and regulations better than anyone.",
    },
  ];

  const featuredServices = [
    { id: "svc-1", image: svc1, title: t?.services?.s1Title, description: t?.services?.s1Desc },
    { id: "svc-2", image: svc2, title: t?.services?.s2Title, description: t?.services?.s2Desc },
    { id: "svc-3", image: svc3, title: t?.services?.s3Title, description: t?.services?.s3Desc },
    { id: "svc-4", image: svc4, title: t?.services?.s4Title, description: t?.services?.s4Desc },
    { id: "svc-5", image: svc5, title: t?.services?.s5Title, description: t?.services?.s5Desc },
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            src="/LAUTJAYAV2.mov"
            className="absolute inset-0 h-full w-full object-cover pointer-events-none"
          />
        </div>

        {/* Multi-Layered Overlay for readability */}
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="absolute inset-0 bg-linear-to-t from-primary via-transparent to-primary/30" />

        <Container className="relative z-10 py-32 lg:py-40">
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reduce ? 0.3 : 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <span className={`h-2 w-2 rounded-full bg-cta ${reduce ? "" : "animate-pulse"}`} />
              <span className="text-xs font-semibold uppercase tracking-wider text-white">
                {t?.hero?.badge || "Shipping & Port Agency"}
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-extrabold uppercase leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
              {t?.hero?.titleLine1} <br />
              <span className="text-accent">{t?.hero?.titleLine2}</span>
            </h1>

            <p className="mb-8 max-w-xl text-base text-slate-300 md:text-lg leading-relaxed">
              {t?.hero?.subtitle}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/whatsapp"
                aria-label="Konsultasi via WhatsApp"
              >
                <Button
                  size="lg"
                  className="group w-full sm:w-auto gap-2.5 bg-cta text-white hover:bg-cta-hover shadow-lg shadow-cta/20 transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-cta focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  {t?.common?.consultNow || "Konsultasi Sekarang"}
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Button>
              </Link>

              <Link to="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white/30 bg-white/10 text-white backdrop-blur-xs hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  {t?.common?.exploreServices || "Jelajahi Layanan"}
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white via-white/40 to-transparent pointer-events-none" />
      </section>

      {/* Value Proposition */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
            {/* 3 Core Cards */}
            <div className="lg:col-span-8 grid gap-6 sm:grid-cols-3">
              {values.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    {...fadeUp(0.1 * index)}
                    className="group rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/30 hover:bg-white hover:shadow-xl flex flex-col justify-between"
                  >
                    <div>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-all duration-300 group-hover:bg-secondary group-hover:text-white">
                        <Icon className="h-6 w-6" strokeWidth={2} />
                      </div>
                      <h3 className="mb-3 text-lg font-bold text-primary">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Box Side */}
            <motion.div
              {...fadeUp(0.3)}
              className="lg:col-span-4 relative flex flex-col justify-between overflow-hidden rounded-2xl bg-linear-to-br from-primary via-slate-900 to-primary p-8 text-white shadow-xl border border-slate-800"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-2xl" />
              <div>
                <h4 className="relative mb-3 text-xl font-bold leading-snug">
                  {language === "id"
                    ? "Ingin Tahu Layanan Kami Lebih Lanjut?"
                    : "Want to Learn More About Our Services?"}
                </h4>
                <div className="relative mb-4 h-0.5 w-12 bg-accent" />
                <p className="relative mb-6 text-sm leading-relaxed text-slate-300">
                  {language === "id"
                    ? "Dari pengurusan ship agency hingga logistik terintegrasi — percayakan operasional kapal Anda kepada tim berpengalaman di Batam."
                    : "From shipping agency clearance to integrated logistics — entrust your vessel operations to our experienced team in Batam."}
                </p>
              </div>

              <Link to="/services" className="relative mt-2">
                <Button className="group w-full gap-2 bg-cta text-white hover:bg-cta-hover shadow-md transition-all duration-300">
                  {language === "id" ? "Lihat Layanan Kami" : "View Our Services"}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section className="border-t border-slate-100 bg-slate-50/50 py-20 lg:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Image with Floating Experience Badge */}
            <motion.div {...fadeX(-1)} className="relative">
              <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-2 shadow-lg">
                <img
                  src={aboutImg}
                  alt="Operasional kapal di pelabuhan Batam"
                  loading="lazy"
                  className="aspect-4/3 w-full rounded-xl object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Enhanced Experience Badge */}
              <div className="absolute -bottom-6 -right-2 sm:-right-4 rounded-2xl border border-white/20 bg-cta/95 p-5 text-white shadow-2xl backdrop-blur-md md:right-6">
                <span className="block text-3xl font-extrabold leading-none tracking-tight md:text-4xl">6+</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-100">
                  {language === "id" ? "Tahun Pengalaman" : "Years of Experience"}
                </span>
              </div>
            </motion.div>

            {/* Right Text Content */}
            <motion.div {...fadeX(1, 0.2)}>
              <SectionEyebrow motionProps={{}}>
                {language === "id" ? "Tentang Kami" : "About Us"}
              </SectionEyebrow>

              <h2 className="mb-4 text-3xl font-extrabold leading-tight text-primary md:text-4xl">
                {language === "id"
                  ? "Berakar di Batam, Berpengalaman di Perairan Internasional."
                  : "Rooted in Batam, Experienced in International Waters."}
              </h2>

              <p className="mb-6 text-base leading-relaxed text-slate-600 md:text-lg">
                {language === "id"
                  ? `${company.fullName} adalah salah satu penyedia layanan pelabuhan dan pelayaran independen terkemuka di wilayah ini. Berlokasi di Batu Ampar, Batam, kami menjamin layanan yang cepat, profesional, dan dapat diandalkan.`
                  : `${company.fullName} is one of the leading independent port & shipping services providers in the region. Headquartered in Batam, we guarantee fast, professional, and dependable maritime solutions.`}
              </p>

              <Link to="/about">
                <Button variant="outline" className="group gap-2 border-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary hover:text-secondary">
                  {language === "id" ? "Pelajari Lebih Lanjut" : "Learn More"}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Featured Services */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="mb-16 text-center">
            <SectionEyebrow motionProps={fadeUp()} className="mb-4">
              {language === "id" ? "Layanan Utama" : "Featured Services"}
            </SectionEyebrow>

            <motion.h2
              {...fadeUp(0.1)}
              className="mb-4 text-3xl font-extrabold text-primary md:text-4xl"
            >
              {language === "id" ? "Solusi Maritim Komprehensif" : "Comprehensive Maritime Solutions"}
            </motion.h2>

            <motion.p
              {...fadeUp(0.2)}
              className="mx-auto max-w-2xl text-base text-slate-600 md:text-lg"
            >
              {language === "id"
                ? "Setiap layanan dirancang untuk meminimalkan waktu tunggu, menghindari hambatan birokrasi, dan memastikan operasional kapal Anda berjalan tepat waktu."
                : "Every service is engineered to minimize turnaround time, eliminate administrative hurdles, and ensure your vessels operate strictly on schedule."}
            </motion.p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                {...fadeUp(0.1 * index)}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/30 hover:shadow-xl"
              >
                <div>
                  <div className="aspect-4/3 overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title || "Service"}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-primary transition-colors group-hover:text-secondary">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-all duration-300 hover:gap-3"
                  >
                    {language === "id" ? "Selengkapnya" : "Read More"}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(0.3)} className="mt-16 text-center">
            <Link to="/services">
              <Button variant="outline" size="lg" className="group gap-2 transition-all duration-300 hover:-translate-y-0.5">
                {language === "id" ? "Lihat Semua Layanan" : "View All Services"}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* Additional Supporting Sections */}
      <IndustriesSection />
      <PortfolioSection />
      <CertificationsSection />

      {/* Bottom CTA Section */}
      <section className="relative overflow-hidden bg-primary py-20 lg:py-28 text-white">
        {/* Glow Accent Circles - Fixed Tailwind sizing */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-500px w-500px -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />

        <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          
          {/* 1. Status Eyebrow Badge */}
          <motion.div 
            {...fadeUp()} 
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              {language === "id" ? "Siaga 24/7 — Respon Cepat" : "24/7 Operational Response"}
            </span>
          </motion.div>

          {/* 2. Heading dengan Text Highlight */}
          <motion.h2
            {...fadeUp(0.1)}
            className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl lg:leading-tight"
          >
            {language === "id" ? (
              <>
                Kapal Anda Berada di <span className="text-accent">Perairan Batam?</span>
              </>
            ) : (
              <>
                Have a Vessel Calling in <span className="text-accent">Batam Waters?</span>
              </>
            )}
          </motion.h2>

          {/* 3. Subtitle Deskriptif */}
          <motion.p
            {...fadeUp(0.2)}
            className="mb-8 text-base leading-relaxed text-slate-300 md:text-lg"
          >
            {language === "id"
              ? "Dengan pengalaman operasional luas di Batam dan jalur strategis Selat Malaka, kami menyediakan solusi keagenan kapal yang efisien, responsif, dan dapat diandalkan."
              : "With operational expertise in Batam and the strategic shipping lanes of the Malacca Strait, we deliver efficient, responsive, and reliable vessel agency solutions for all your maritime needs."}
          </motion.p>

          {/* 4. Dual Action Buttons (WhatsApp + Secondary Email Option) */}
          <motion.div 
            {...fadeUp(0.3)} 
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              to="/whatsapp"
              aria-label="Konsultasi WhatsApp"
              className="w-full sm:w-auto"
            >
              <Button className="group w-full sm:w-auto rounded-full bg-cta px-8 py-6 text-base font-semibold text-white shadow-xl shadow-cta/25 transition-all duration-300 hover:bg-cta-hover hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-cta focus-visible:ring-offset-2 focus-visible:ring-offset-primary">
                {t?.common?.consultNow || "Konsultasi Sekarang"}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Button>
            </Link>

            <a 
              href={`mailto:${company.email2 || "alvianprajatama@gmail.com"}`} 
              aria-label="Kirim Inquiry via Email"
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                className="w-full sm:w-auto rounded-full border-white/20 bg-white/5 px-7 py-6 text-base font-medium text-white backdrop-blur-xs transition-all duration-300 hover:bg-white/15 hover:border-white/40 hover:-translate-y-0.5"
              >
                {language === "id" ? "Kirim Email" : "SendEmail"}
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