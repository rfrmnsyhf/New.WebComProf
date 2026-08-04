import { useMemo, useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, Clock, ShieldCheck, FileText, Printer, MessageSquare, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "@/components/common/PageHero";
import { Helmet } from "react-helmet-async";
import Container from "@/components/layout/Container";
import heroBg from "@/assets/images/servicesHero.jpg";
import { useLanguage } from "@/context/LanguageContext";

const slugify = (text = "", index = 0) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .slice(0, 60) || `section-${index}`;

const staggerDelay = (index, step = 0.08, max = 0.4) =>
  Math.min(step * index, max);

const TermsConditions = () => {
  const { t, language } = useLanguage();
  const reduce = useReducedMotion();
  const [activeId, setActiveId] = useState("");

  const legal = t?.legal?.termsConditions || {
    title: "Terms & Conditions",
    lastUpdated: "Last Updated: 2026",
    sections: [],
  };

  const sections = useMemo(
    () =>
      (legal.sections || []).map((section, index) => ({
        ...section,
        id: slugify(section.heading, index),
        number: String(index + 1).padStart(2, "0"),
      })),
    [legal.sections]
  );

  const hasSections = sections.length > 0;

  // Intersection Observer untuk mendeteksi section mana yang sedang dibaca di screen
  useEffect(() => {
    if (!hasSections) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections, hasSections]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Helmet>
        <title>
          {language === "id"
            ? "Syarat & Ketentuan | CBSA"
            : "Terms & Conditions | CBSA"}
        </title>
        <meta
          name="description"
          content={
            language === "id"
              ? "Syarat dan Ketentuan penggunaan situs PT. Chantika Bahari Sejahtera Abadi (CBSA) serta layanan keagenan kapal dan maritim di Batam."
              : "Terms and Conditions for using the PT. Chantika Bahari Sejahtera Abadi (CBSA) website and ship agency maritime services in Batam."
          }
        />
        <link rel="canonical" href="https://cbsabatam.com/terms-conditions" />
        <meta property="og:url" content="https://cbsabatam.com/terms-conditions" />
        <meta property="og:title" content="Terms & Conditions | CBSA" />
        <meta
          property="og:description"
          content="Read the Terms and Conditions for using CBSA website and maritime agency services."
        />
      </Helmet>
      <PageHero title={legal.title} subtitle="" image={heroBg} />

      <section className="relative overflow-hidden bg-slate-50/60 py-16 lg:py-24 print:bg-white print:py-6">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_260px]">
            <div className="max-w-3xl">
              {/* Print-only document header */}
              <div className="mb-6 hidden border-b border-slate-300 pb-4 print:block">
                <h1 className="text-2xl font-bold text-black">{legal.title}</h1>
                <p className="mt-1 text-xs text-slate-500">{legal.lastUpdated}</p>
              </div>

              {/* Header / Meta Navigation */}
              <motion.div
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: reduce ? 0.2 : 0.4 }}
                className="mb-8 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8 print:hidden"
              >
                {/* Back Link */}
                <Link
                  to="/"
                  className="group mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 transition-colors hover:text-secondary print:hidden"
                >
                  <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                  {t?.nav?.home || "Beranda"}
                </Link>

                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-6 print:border-0 print:pt-0">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary print:border print:border-slate-300 print:bg-transparent">
                    <ShieldCheck className="h-4 w-4" />
                    {language === "id" ? "Dokumen Resmi" : "Legal Document"}
                  </div>

                  {/* Last Updated */}
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                    <Clock className="h-3.5 w-3.5 text-slate-400" />
                    <span>{legal.lastUpdated}</span>
                  </div>
                </div>
              </motion.div>

              {/* List Section Card */}
              {hasSections ? (
                <ol className="flex flex-col gap-6 print:gap-3">
                  {sections.map((section, index) => (
                    <motion.li
                      key={section.id}
                      id={section.id}
                      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{
                        duration: reduce ? 0.2 : 0.4,
                        delay: reduce ? 0 : staggerDelay(index),
                      }}
                      className="group relative scroll-mt-28 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-secondary/40 hover:shadow-md sm:p-8 print:break-inside-avoid print:border-0 print:p-0 print:shadow-none"
                    >
                      {/* Accent Line di Kiri Card */}
                      <div
                        className={`absolute left-0 top-0 h-full w-1.5 transition-colors print:hidden ${
                          activeId === section.id
                            ? "bg-secondary"
                            : "bg-slate-200 group-hover:bg-secondary/60"
                        }`}
                      />

                      <div className="flex items-start gap-4">
                        {/* Number Badge */}
                        <span className="mt-0.5 shrink-0 rounded-lg bg-slate-100 px-2 py-1 font-mono text-xs font-bold text-slate-500 transition-colors group-hover:bg-secondary/10 group-hover:text-secondary">
                          {section.number}
                        </span>

                        <div className="flex-1">
                          <h2 className="mb-3 text-lg font-bold text-primary transition-colors group-hover:text-secondary sm:text-xl print:text-black">
                            {section.heading}
                          </h2>
                          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                            {section.content}
                          </p>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ol>
              ) : (
                <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-slate-200 bg-white p-12 text-center">
                  <FileText className="h-8 w-8 text-slate-300" />
                  <p className="text-sm text-slate-400">
                    {language === "id"
                      ? "Konten syarat & ketentuan belum tersedia."
                      : "Terms & conditions content is not available yet."}
                  </p>
                </div>
              )}

              {/* Enhanced Footer Callout Box */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: reduce ? 0 : 0.3,
                  duration: reduce ? 0.2 : 0.4,
                }}
                className="mt-10 rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-sm print:hidden"
              >
                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:text-left">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary print:hidden">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary">
                        {language === "id"
                          ? "Butuh Klarifikasi Lebih Lanjut?"
                          : "Need Further Clarification?"}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {language === "id"
                          ? "Tim keagenan kami siap membantu menjawab pertanyaan Anda."
                          : "Our agency team is available to answer any questions."}
                      </p>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-secondary print:hidden"
                  >
                    <span>{language === "id" ? "Hubungi Kami" : "Contact Us"}</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Quick-jump navigation — desktop only */}
            {hasSections && (
              <aside className="hidden lg:block print:hidden">
                <div className="sticky top-28 flex flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
                  <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">
                      {language === "id" ? "Di Halaman Ini" : "On This Page"}
                    </p>
                    <nav>
                      <ul className="flex flex-col gap-1">
                        {sections.map((section) => {
                          const isActive = activeId === section.id;
                          return (
                            <li key={section.id}>
                              <a
                                href={`#${section.id}`}
                                className={`flex items-start gap-2.5 rounded-lg px-2.5 py-2 text-xs transition-all ${
                                  isActive
                                    ? "bg-secondary/10 font-bold text-secondary"
                                    : "text-slate-500 hover:bg-slate-50 hover:text-secondary"
                                }`}
                              >
                                <span
                                  className={`mt-0.5 font-mono ${
                                    isActive ? "text-secondary" : "text-slate-300"
                                  }`}
                                >
                                  {section.number}
                                </span>
                                <span className="line-clamp-2">{section.heading}</span>
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </nav>
                  </div>

                  {/* Tombol Cetak / PDF */}
                  <div className="border-t border-slate-100 pt-3">
                    <button
                      onClick={handlePrint}
                      className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 py-2 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-50 hover:text-primary"
                    >
                      <Printer className="h-3.5 w-3.5" />
                      <span>
                        {language === "id" ? "Cetak Dokumen" : "Print Document"}
                      </span>
                    </button>
                  </div>
                </div>
              </aside>
            )}
          </div>
        </Container>
      </section>
    </>
  );
};

export default TermsConditions;