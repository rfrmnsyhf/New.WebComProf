import { motion } from "framer-motion";
import ContainerComponent from "@/components/layout/Container";
import tankerImg from "@/assets/images/chemical-tanker.jpg";
import offshoreImg from "@/assets/images/offshore.jpg";
import tugBargeImg from "@/assets/images/tug-barge.jpg";
import cargoImg from "@/assets/images/heavy-lift.jpg";
import cruiseImg from "@/assets/images/cruise.jpg";
import navalImg from "@/assets/images/naval.jpg";
import dryBulkImg from "@/assets/images/dry-bulk.jpg";
import reeferImg from "@/assets/images/reefer.jpg";
import heavyLiftImg from "@/assets/images/heavy-lift.jpg";
import { useLanguage } from "@/context/LanguageContext";

const VesselTypes = () => {
  const { language } = useLanguage();

  const vesselTypes = [
    {
      image: cargoImg,
      title: "Container Ship",
      description: language === "id" ? "Kapal peti kemas." : "Container carrier vessel.",
    },
    {
      image: tankerImg,
      title: "Chemicals Tanker",
      description: language === "id" ? "Kapal tanker bahan kimia." : "Liquid chemical & oil tanker.",
    },
    {
      image: dryBulkImg,
      title: "Dry Bulk",
      description: language === "id" ? "Kapal curah kering." : "Dry bulk cargo carrier.",
    },
    {
      image: tugBargeImg,
      title: "Tug & Barge",
      description: language === "id" ? "Kapal tunda & tongkang." : "Tugboat and barge combination.",
    },
    {
      image: reeferImg,
      title: "Reefer",
      description: language === "id" ? "Kapal pendingin." : "Refrigerated cargo vessel.",
    },
    {
      image: heavyLiftImg,
      title: "Heavy Lift",
      description: language === "id" ? "Kapal angkut barang berat." : "Heavy project cargo carrier.",
    },
    {
      image: cruiseImg,
      title: "Cruise",
      description: language === "id" ? "Kapal pesiar." : "Passenger cruise liner.",
    },
    {
      image: navalImg,
      title: "Naval",
      description: language === "id" ? "Kapal angkatan laut." : "Naval and military vessel.",
    },
    {
      image: offshoreImg,
      title: "Offshore Support",
      description: language === "id" ? "Kapal pendukung offshore." : "Offshore supply & support vessel.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <ContainerComponent>
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-secondary"
          >
            Target Vessel Types
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-3xl font-bold text-primary md:text-4xl"
          >
            {language === "id" ? (
              <>Jenis Kapal <span className="text-secondary">Yang Kami Tangani</span></>
            ) : (
              <>Vessel Types <span className="text-secondary">We Serve</span></>
            )}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-gray"
          >
            {language === "id"
              ? "Spesialisasi kami mencakup berbagai jenis kapal dengan standar pelayanan internasional."
              : "Our maritime port expertise spans a diverse array of vessel types operated to global safety standards."}
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vesselTypes.map((vessel, index) => (
            <motion.div
              key={vessel.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative overflow-hidden rounded-2xl"
            >
              {/* Image */}
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={vessel.image}
                  alt={vessel.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/40 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="mb-1 text-xl font-semibold text-white">
                  {vessel.title}
                </h3>
                <p className="text-sm text-slate-300">
                  {vessel.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </ContainerComponent>
    </section>
  );
};

export default VesselTypes;
