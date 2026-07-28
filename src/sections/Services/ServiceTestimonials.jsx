import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/layout/Container";
import { useLanguage } from "@/context/LanguageContext";

const testimonialsId = [
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
];

const testimonialsEn = [
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
];

const ServiceTestimonials = () => {
  const { language } = useLanguage();
  const testimonials = language === "id" ? testimonialsId : testimonialsEn;

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = useCallback(
    (dir) => {
      setDirection(dir);
      setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
    },
    [testimonials.length],
  );

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => paginate(1), 5000);
    return () => clearInterval(interval);
  }, [isPaused, paginate]);

  const activeTestimonial = testimonials[current] || testimonials[0];

  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mb-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-secondary"
          >
            {language === "id" ? "Testimoni Klien" : "Client Testimonials"}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-3xl font-bold text-primary md:text-4xl"
          >
            {language === "id" ? (
              <>Dipercaya oleh <span className="text-secondary">Armada Internasional</span></>
            ) : (
              <>Trusted by <span className="text-secondary">Global Fleets</span></>
            )}
          </motion.h2>
        </div>

        <div
          className="relative mx-auto max-w-3xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 p-8 md:p-12">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current + "-" + language}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <Quote className="mb-6 h-10 w-10 text-secondary/30" />
                <p className="mb-8 text-lg leading-relaxed italic text-muted-foreground md:text-xl">
                  &ldquo;{activeTestimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {activeTestimonial.author
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{activeTestimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{activeTestimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute -left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-muted-foreground shadow-md transition-all hover:border-secondary hover:text-secondary hover:shadow-lg md:-left-5"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute -right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-muted-foreground shadow-md transition-all hover:border-secondary hover:text-secondary hover:shadow-lg md:-right-5"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > current ? 1 : -1);
                  setCurrent(idx);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === current
                    ? "w-8 bg-secondary"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServiceTestimonials;
