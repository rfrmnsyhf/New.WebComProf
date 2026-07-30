import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import Container from "@/components/layout/Container";
import { useLanguage } from "@/context/LanguageContext";

// Data testimoni terpisah (Siap dipindah ke /constants/testimonials.js)
const rawTestimonials = {
  id: [
    {
      quote:
        "CBSA memberikan layanan yang luar biasa untuk armada tanker kami. Respons cepat dan profesional.",
      author: "Operations Director",
      company: "PT Pertamina Shipping",
    },
    {
      quote:
        "Kami telah bekerja sama dengan CBSA selama bertahun-tahun. Konsistensi kualitas layanan yang mereka berikan tidak pernah mengecewakan.",
      author: "Fleet Manager",
      company: "Pacific Maritime Lines",
    },
    {
      quote:
        "Pengetahuan lokal CBSA tentang pelabuhan Batam sangat membantu operasional kami. Mereka benar-benar paham kebutuhan klien.",
      author: "Logistics Manager",
      company: "Global Offshore Solutions",
    },
  ],
  en: [
    {
      quote:
        "CBSA provided outstanding port agency services for our tanker fleet. Fast, highly professional turnaround times.",
      author: "Operations Director",
      company: "PT Pertamina Shipping",
    },
    {
      quote:
        "We have partnered with CBSA for years. Their service quality and attention to safety detail never disappoint.",
      author: "Fleet Manager",
      company: "Pacific Maritime Lines",
    },
    {
      quote:
        "CBSA's local intelligence and port familiarity in Batam saved us significant laytime. Highly recommended team.",
      author: "Logistics Manager",
      company: "Global Offshore Solutions",
    },
  ],
};

const AUTOPLAY_DURATION = 5000; // 5 Detik

const ServiceTestimonials = () => {
  const { language } = useLanguage();
  const testimonials = useMemo(
    () => rawTestimonials[language] || rawTestimonials.id,
    [language]
  );

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0); // Reset animasi progress bar

  const paginate = useCallback(
    (dir) => {
      setDirection(dir);
      setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
      setProgressKey((prev) => prev + 1); // Trigger reset progress bar
    },
    [testimonials.length]
  );

  // 1. Feature: Page Visibility API (Pause saat tab di-minimize/pindah)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPaused(true);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // 2. Feature: Auto-play Timer
  useEffect(() => {
    if (isPaused) return;

    const timer = setTimeout(() => {
      paginate(1);
    }, AUTOPLAY_DURATION);

    return () => clearTimeout(timer);
  }, [current, isPaused, paginate]);

  const activeTestimonial = testimonials[current] || testimonials[0];

  const getInitials = (name = "") =>
    name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase();

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-secondary"
          >
            {language === "id" ? "Testimoni Klien" : "Client Testimonials"}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-4 text-2xl font-bold tracking-tight text-primary sm:text-3xl md:text-4xl"
          >
            {language === "id" ? (
              <>
                Dipercaya oleh <span className="text-secondary">Armada Internasional</span>
              </>
            ) : (
              <>
                Trusted by <span className="text-secondary">Global Fleets</span>
              </>
            )}
          </motion.h2>
        </div>

        {/* Carousel Outer Wrapper */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Client Testimonials"
          className="relative mx-auto max-w-3xl px-2 sm:px-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Card Utama */}
          <div className="relative min-h-72.5 overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/80 p-6 sm:p-8 md:p-12 shadow-xs flex flex-col justify-between">
            
            {/* Progress Bar Top Indicator */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-slate-200/60 overflow-hidden">
              {!isPaused && (
                <motion.div
                  key={progressKey}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: AUTOPLAY_DURATION / 1000, ease: "linear" }}
                  className="h-full bg-secondary"
                />
              )}
            </div>

            {/* Testimonial Content (A11y Friendly) */}
            <div aria-live="polite" className="h-full flex flex-col justify-between">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={current + "-" + language}
                  initial={{ opacity: 0, x: direction * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -40 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -50) paginate(1);
                    if (info.offset.x > 50) paginate(-1);
                  }}
                  className="cursor-grab active:cursor-grabbing select-none"
                >
                  <Quote className="mb-4 h-8 w-8 text-secondary/30 sm:h-10 sm:w-10" />
                  <p className="mb-8 text-base italic leading-relaxed text-slate-700 sm:text-lg md:text-xl">
                    &ldquo;{activeTestimonial.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-3.5 pt-2">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-xs">
                      {getInitials(activeTestimonial.author)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary sm:text-base">
                        {activeTestimonial.author}
                      </p>
                      <p className="text-xs text-slate-500 sm:text-sm">
                        {activeTestimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:border-secondary hover:text-secondary hover:shadow-md sm:-left-4 sm:h-10 sm:w-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:border-secondary hover:text-secondary hover:shadow-md sm:-right-4 sm:h-10 sm:w-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Controls Bottom Bar (Dots + Pause/Play Button) */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > current ? 1 : -1);
                    setCurrent(idx);
                    setProgressKey((prev) => prev + 1);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === current
                      ? "w-7 bg-secondary"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            {/* Manual Play/Pause Button untuk WCAG Compliance */}
            <button
              onClick={() => setIsPaused((prev) => !prev)}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors"
              aria-label={isPaused ? "Play slide animation" : "Pause slide animation"}
              title={isPaused ? "Play" : "Pause"}
            >
              {isPaused ? <Play className="h-3.5 w-3.5 fill-current" /> : <Pause className="h-3.5 w-3.5 fill-current" />}
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServiceTestimonials;