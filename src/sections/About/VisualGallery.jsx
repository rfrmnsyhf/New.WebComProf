import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import img1 from "@/assets/images/home6.jpg";
import img2 from "@/assets/images/home6.jpg";
import img3 from "@/assets/images/home7.jpg";
import img4 from "@/assets/images/offshore.jpg";
import img5 from "@/assets/images/tug-barge.jpg";

const galleryImages = [
  { src: img1, alt: "Operasional pelabuhan Batam" },
  { src: img2, alt: "Koordinasi bongkar muat kargo" },
  { src: img3, alt: "Dukungan logistik maritim" },
  { src: img4, alt: "Operasi offshore support" },
  { src: img5, alt: "Layanan tug & barge" },
];

const VisualGallery = () => {
  return (
    <section className="bg-white py-16 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Dokumentasi Lapangan
          </span>
        </motion.div>
      </Container>

      <div className="group relative">
        <div className="absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-white to-transparent" />
        <div className="absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-white to-transparent" />

        <div className="flex w-fit gap-4 animate-marquee group-hover:paused px-4">
          {[...galleryImages, ...galleryImages].map((img, index) => (
            <div
              key={`${img.alt}-${index}`}
              className="h-64 w-80 shrink-0 overflow-hidden rounded-xl"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualGallery;
