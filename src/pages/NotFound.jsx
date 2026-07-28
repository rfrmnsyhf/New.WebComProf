import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Anchor, ArrowLeft } from "lucide-react";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <section className="flex min-h-screen items-center bg-white">
      <Container>
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center justify-center"
          >
            <Anchor className="h-24 w-24 text-secondary/30" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="mb-4 text-8xl font-bold text-primary">404</h1>
            <h2 className="mb-4 text-2xl font-semibold text-primary">
              Halaman Tidak Ditemukan
            </h2>
            <p className="mb-8 mx-auto max-w-md text-lg text-gray">
              Sepertinya halaman yang Anda cari sudah dipindahkan atau tidak
              tersedia.
            </p>

            <Link to="/">
              <Button size="lg" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Kembali ke Beranda
              </Button>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default NotFound;
