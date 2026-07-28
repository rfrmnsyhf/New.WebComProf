import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

const PortfolioIntro = () => {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-secondary"
          >
            Portfolio Kami
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-3xl font-bold text-primary md:text-4xl lg:text-5xl"
          >
            Pengalaman yang Berbicara Lebih Keras dari Kata-Kata
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg leading-relaxed text-muted-foreground"
          >
            Setiap proyek yang kami selesaikan adalah cerminan dari komitmen
            kami terhadap keselamatan, ketepatan, dan profesionalisme. Berikut
            beberapa studi kasus dari operasi nyata yang telah kami tangani.
          </motion.p>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioIntro;
