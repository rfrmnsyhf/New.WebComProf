import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Container from "@/components/layout/Container";
import { useLanguage } from "@/context/LanguageContext";

const Counter = ({ target, suffix, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    let rafId;
    const duration = 2000;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const { language } = useLanguage();

  const stats = [
    {
      value: 18,
      suffix: "+",
      label: language === "id" ? "Layanan Profesional" : "Professional Services",
    },
    {
      value: 11,
      suffix: "",
      label: language === "id" ? "Jenis Kapal & Kargo" : "Vessel & Cargo Types",
    },
    {
      value: 7,
      suffix: "",
      label: language === "id" ? "Mitra Utama" : "Key Partners",
    },
    {
      value: 24,
      suffix: "/7",
      label: language === "id" ? "Siap Melayani" : "24/7 Operations",
    },
  ];

  return (
    <section ref={ref} className="bg-primary py-20">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="text-center"
            >
              <span className="mb-2 block text-4xl font-extrabold text-white md:text-5xl">
                <Counter target={stat.value} suffix={stat.suffix} inView={isInView} />
              </span>
              <span className="text-sm font-medium uppercase tracking-wider text-white/70">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Stats;
