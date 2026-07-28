import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ClosingBanner = () => {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl rounded-2xl bg-primary p-12 text-center text-white"
        >
          <h3 className="mb-4 text-2xl font-bold md:text-3xl">
            Siap Bekerja Sama dengan Kami?
          </h3>
          <p className="mb-8 text-slate-300">
            Percayakan operasional maritim Anda kepada tim yang sudah
            berpengalaman di Batam dan perairan strategis Indonesia.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="gap-2 bg-cta text-white hover:bg-cta-hover"
            >
              Hubungi Kami
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default ClosingBanner;
