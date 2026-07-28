import { motion } from "framer-motion";
import { MapPin, Target, Lightbulb } from "lucide-react";
import Container from "@/components/layout/Container";
import { useLanguage } from "@/context/LanguageContext";

const LocalKnowledge = () => {
  const { language } = useLanguage();

  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Sharing Local Knowledge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10">
              <MapPin className="h-7 w-7 text-secondary" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-primary md:text-3xl">
              {language === "id" ? "Berbagi Pengetahuan Lokal" : "Sharing Local Knowledge"}
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-gray">
              {language === "id"
                ? "Untuk membantu klien tidak hanya dalam operasi saat ini tetapi juga perencanaan masa depan, CBSA menyediakan intelijen pasar lokal dan operasional seperti daftar antrian, pengembangan pelabuhan baru, dan ketersediaan fasilitas penyimpanan di pelabuhan."
                : "To support client operations and strategic planning, CBSA provides up-to-date local market and operational intelligence, including port lineup updates, terminal developments, and local storage facility availability."}
            </p>
            <p className="text-gray leading-relaxed">
              {language === "id"
                ? "Dengan pengetahuan mendalam tentang kondisi pelabuhan dan regulasi lokal di Batam dan sekitarnya, kami memastikan Anda selalu mendapatkan informasi terkini untuk pengambilan keputusan yang tepat."
                : "With intimate familiarity with Batam port channels and regional regulations, we keep your masters and port managers fully informed for timely decision-making."}
            </p>
          </motion.div>

          {/* Our Aim */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                <Target className="h-6 w-6 text-secondary" />
              </div>
              <h4 className="mb-3 text-xl font-bold text-primary">
                {language === "id" ? "Tujuan Utama Kami" : "Our Aim"}
              </h4>
              <p className="text-lg italic text-gray">
                {language === "id"
                  ? "“Membantu memastikan setiap pelayaran Anda berjalan aman, lancar, dan tepat waktu.”"
                  : "“To help make your every voyage safe, smooth, and on schedule.”"}
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                <Lightbulb className="h-6 w-6 text-secondary" />
              </div>
              <h4 className="mb-3 text-xl font-bold text-primary">
                {language === "id" ? "Keahlian Operasional" : "Our Expertise"}
              </h4>
              <p className="text-gray leading-relaxed">
                {language === "id"
                  ? "Keahlian operasional kami mencakup bidang-bidang tradisional seperti keagenan kapal, bahan bakar bunker, dan pasokan kapal hingga layanan inovatif seperti weather routing dan solusi keamanan maritim."
                  : "Our operational expertise ranges from traditional shipping agency, bunkering, and chandlery to specialized offshore support and maritime security coordination."}
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default LocalKnowledge;
