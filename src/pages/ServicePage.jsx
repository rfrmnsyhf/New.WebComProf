import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  CheckCircle2,
  MapPin,
  ArrowRight,
  Anchor,
} from "lucide-react";
import Container from "@/components/layout/Container";
import PageHero from "@/components/common/PageHero";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import TrustStats from "@/components/common/TrustStats";
import CTASection from "@/components/common/CTASection";
import SEO from "@/components/seo/SEO";
import ServiceSchema from "@/components/seo/ServiceSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { serviceLandings, whyChooseUsPoints } from "@/data/serviceLandings";
import { useLanguage } from "@/context/LanguageContext";

const pick = (obj, language) => (obj && obj[language]) || (obj && obj.en) || "";

// Eyebrow pill reusable di halaman layanan
const Eyebrow = ({ children }) => (
  <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary">
    <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
    {children}
  </span>
);

const SectionHeading = ({ eyebrow, title }) => (
  <div className="mb-10 text-center">
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2 className="text-2xl font-extrabold tracking-tight text-primary md:text-3xl lg:text-4xl">
      {title}
    </h2>
  </div>
);

// Accordion FAQ (tampil di halaman, bukan hanya schema)
const FaqAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={`${item.question}-${index}`}
            className={`rounded-2xl transition-all duration-300 ${
              isOpen
                ? "border border-secondary/20 bg-slate-50/80 shadow-sm"
                : "border-b border-slate-100 hover:bg-slate-50/40"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              aria-controls={`svc-faq-answer-${index}`}
              className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors"
            >
              <span
                className={`text-base font-bold ${
                  isOpen ? "text-secondary" : "text-primary"
                }`}
              >
                {item.question}
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                  isOpen
                    ? "bg-secondary text-white rotate-180"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                <ChevronDown className="h-4 w-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`svc-faq-answer-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-slate-100/60 px-5 pb-5 pt-3 text-sm leading-relaxed text-slate-600">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

const ServicePage = () => {
  const { slug } = useParams();
  const { t, language } = useLanguage();
  const service = serviceLandings.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const path = `/${service.slug}`;
  const breadcrumbItems = [
    { name: t?.nav?.home || "Home", path: "/" },
    { name: t?.nav?.services || "Services", path: "/services" },
    { name: service.title[language] || service.title.en },
  ];

  const relatedEntries = (service.related || [])
    .map((s) => serviceLandings.find((item) => item.slug === s))
    .filter(Boolean);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.5, delay, ease: "easeOut" },
  });

  return (
    <>
      <SEO
        title={service.metaTitle[language] || service.metaTitle.en}
        description={service.metaDescription[language] || service.metaDescription.en}
        path={path}
        ogTitle={service.title[language] || service.title.en}
        ogDescription={service.metaDescription[language] || service.metaDescription.en}
      />
      <ServiceSchema
        name={service.title[language] || service.title.en}
        description={service.metaDescription[language] || service.metaDescription.en}
        serviceType={service.keyword}
        path={path}
        areaServed={service.serving}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <PageHero
        title={service.title[language] || service.title.en}
        subtitle={service.heroSubtitle[language] || service.heroSubtitle.en}
        image={service.image}
      />

      {/* Konten Utama */}
      <section className="relative overflow-hidden bg-white py-14 lg:py-20">
        <Container>
          <Breadcrumbs items={breadcrumbItems} />

          {/* Intro */}
          <motion.div {...fadeUp()} className="max-w-3xl">
            <p className="text-lg leading-relaxed text-slate-600">
              {service.intro[language] || service.intro.en}
            </p>
          </motion.div>

          {/* Overview */}
          {service.overview?.length > 0 && (
            <motion.div {...fadeUp(0.1)} className="mt-8 space-y-5">
              {service.overview.map((para, index) => (
                <p
                  key={index}
                  className="max-w-3xl text-base leading-relaxed text-slate-600"
                >
                  {pick(para, language)}
                </p>
              ))}
            </motion.div>
          )}
        </Container>
      </section>

      {/* Features / Scope */}
      {service.features?.length > 0 && (
        <section className="border-t border-slate-100 bg-slate-50/70 py-16 lg:py-20">
          <Container>
            <SectionHeading
              eyebrow={
                language === "id"
                  ? "Cakupan Layanan"
                  : "Service Scope"
              }
              title={
                language === "id"
                  ? "Apa yang Kami Tangani"
                  : "What We Handle"
              }
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {service.features.map((feature, index) => (
                <motion.div
                  key={`${feature.title}-${index}`}
                  {...fadeUp(0.05 * index)}
                  className="group flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-lg"
                >
                  <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-secondary" />
                  <div>
                    <h3 className="mb-1.5 font-bold text-primary">
                      {pick(feature.title, language)}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-500">
                      {pick(feature.description, language)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Process */}
      {service.process?.length > 0 && (
        <section className="bg-white py-16 lg:py-20">
          <Container>
            <SectionHeading
              eyebrow={
                language === "id"
                  ? "Alur Kerja"
                  : "How It Works"
              }
              title={
                language === "id"
                  ? "Proses Layanan Kami"
                  : "Our Service Process"
              }
            />
            <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step, index) => (
                <motion.li
                  key={`${step.title}-${index}`}
                  {...fadeUp(0.05 * index)}
                  className="relative rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm"
                >
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary font-mono text-sm font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-2 font-bold text-primary">
                    {pick(step.title, language)}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">
                    {pick(step.description, language)}
                  </p>
                </motion.li>
              ))}
            </ol>
          </Container>
        </section>
      )}

      {/* Why Batam? + Serving */}
      {service.whyBatam?.length > 0 && (
        <section className="border-t border-slate-100 bg-slate-50/70 py-16 lg:py-20">
          <Container>
            <SectionHeading
              eyebrow={
                language === "id"
                  ? "Mengapa Batam?"
                  : "Why Batam?"
              }
              title={
                language === "id"
                  ? "Lokasi Strategis untuk Port Call"
                  : "A Strategic Location for Port Calls"
              }
            />
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-5">
                {service.whyBatam.map((point, index) => (
                  <motion.div
                    key={`${point.title}-${index}`}
                    {...fadeUp(0.05 * index)}
                    className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm"
                  >
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <div>
                      <h3 className="font-bold text-primary">
                        {pick(point.title, language)}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-500">
                        {pick(point.description, language)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Serving Areas */}
              <div>
                <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 font-bold text-primary">
                    {language === "id"
                      ? "Area Layanan"
                      : "Areas We Serve"}
                  </h3>
                  <ul className="flex flex-wrap gap-2.5">
                    {(service.serving || []).map((area) => (
                      <li
                        key={area}
                        className="inline-flex items-center gap-1.5 rounded-full border border-secondary/20 bg-secondary/5 px-4 py-1.5 text-sm font-medium text-secondary"
                      >
                        <MapPin className="h-3.5 w-3.5" />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Why Choose CBSA */}
      {whyChooseUsPoints.length > 0 && (
        <section className="bg-white py-16 lg:py-20">
          <Container>
            <SectionHeading
              eyebrow={
                language === "id"
                  ? "Keunggulan Kompetitif"
                  : "Competitive Advantages"
              }
              title={
                language === "id"
                  ? "Mengapa Memilih CBSA?"
                  : "Why Choose CBSA?"
              }
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {whyChooseUsPoints.map((point, index) => (
                <motion.div
                  key={`${point.title}-${index}`}
                  {...fadeUp(0.05 * index)}
                  className="group rounded-2xl border border-slate-200/80 bg-slate-50/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:bg-white hover:shadow-lg"
                >
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                    <Anchor className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-bold text-primary">
                    {pick(point.title, language)}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">
                    {pick(point.description, language)}
                  </p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* FAQ */}
      {service.faq?.length > 0 && (
        <section className="border-t border-slate-100 bg-slate-50/70 py-16 lg:py-20">
          <Container>
            <SectionHeading
              eyebrow={
                language === "id"
                  ? "Pertanyaan Umum"
                  : "FAQ"
              }
              title={
                language === "id"
                  ? "Informasi & Jawaban"
                  : "Common Questions & Answers"
              }
            />
            <div className="mx-auto max-w-3xl">
              <FaqAccordion
                items={service.faq.map((item) => ({
                  question: pick(item.question, language),
                  answer: pick(item.answer, language),
                }))}
              />
            </div>
          </Container>
        </section>
      )}

      {/* Related Services */}
      {relatedEntries.length > 0 && (
        <section className="bg-white py-16 lg:py-20">
          <Container>
            <SectionHeading
              eyebrow={
                language === "id"
                  ? "Layanan Terkait"
                  : "Related Services"
              }
              title={
                language === "id"
                  ? "Layanan Lain yang Mungkin Anda Butuhkan"
                  : "Other Services You May Need"
              }
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedEntries.map((entry, index) => (
                <motion.div
                  key={entry.slug}
                  {...fadeUp(0.05 * index)}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/30 hover:shadow-xl"
                >
                  <div>
                    <div className="aspect-4/3 overflow-hidden bg-slate-100">
                      <img
                        src={entry.image}
                        alt={entry.title[language] || entry.title.en}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2 text-lg font-bold text-primary transition-colors group-hover:text-secondary">
                        {entry.title[language] || entry.title.en}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-500">
                        {entry.intro[language] || entry.intro.en}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <Link
                      to={`/${entry.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-all duration-300 hover:gap-3"
                    >
                      {language === "id" ? "Selengkapnya" : "Read More"}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      )}

      <TrustStats />
      <CTASection
        title={service.ctaTitle[language] || service.ctaTitle.en}
        subtitle={
          language === "id"
            ? "Hubungi tim operasional kami hari ini untuk penawaran dan informasi lebih lanjut."
            : "Contact our operational team today for quotations and further information."
        }
      />
    </>
  );
};

export default ServicePage;
