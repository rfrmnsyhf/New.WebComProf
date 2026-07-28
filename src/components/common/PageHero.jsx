import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

const PageHero = ({ title, subtitle, image }) => {
  return (
    <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-primary pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <Container className="relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <h1 className="mb-4 text-3xl font-extrabold uppercase leading-tight text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="max-w-xl text-lg leading-relaxed text-slate-300">
              {subtitle}
            </p>
          )}
        </motion.div>
      </Container>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-black/40 to-transparent" />
    </section>
  );
};

export default PageHero;
