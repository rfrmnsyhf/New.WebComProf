import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Ship,
  Info,
  Anchor,
  ArrowLeftRight,
  Wrench,
  UserCheck,
  ClipboardCheck,
  Truck,
} from "lucide-react";
import Container from "@/components/layout/Container";
import { useLanguage } from "@/context/LanguageContext";

const OperationalServices = () => {
  const { language } = useLanguage();

  // Memoisasi data agar tidak di-recreate setiap re-render
  const operationalServices = useMemo(
    () => [
      {
        icon: FileText,
        title: "Arrival & Departure Clearance",
        description:
          language === "id"
            ? "Pengurusan dokumen kedatangan dan keberangkatan kapal secara presisi."
            : "Complete handling of vessel entry & exit clearance documentation.",
      },
      {
        icon: Ship,
        title: "Bill of Lading Arrangement",
        description:
          language === "id"
            ? "Pengurusan dan koordinasi dokumen Bill of Lading untuk kargo Anda."
            : "Coordination and issuance support for Bills of Lading.",
      },
      {
        icon: Info,
        title: "Port Call Information",
        description:
          language === "id"
            ? "Informasi dan pembaruan status panggilan pelabuhan secara real-time."
            : "Real-time updates and full port call status intelligence.",
      },
      {
        icon: Anchor,
        title: "Offshore Support",
        description:
          language === "id"
            ? "Dukungan operasi lepas pantai dan logistik maritim terpadu."
            : "End-to-end offshore operations and marine logistics support.",
      },
      {
        icon: ArrowLeftRight,
        title: "Ship-to-Ship Transshipment",
        description:
          language === "id"
            ? "Koordinasi pemindahan kargo antar kapal (STS) beserta perizinannya."
            : "Seamless STS cargo transfer coordination and authority approval.",
      },
      {
        icon: Wrench,
        title: "Dry Docking & New Building",
        description:
          language === "id"
            ? "Bantuan teknis untuk perbaikan drydocking dan galangan kapal."
            : "Technical assistance for drydocking repairs and shipyard builds.",
      },
      {
        icon: UserCheck,
        title: "Port Captain & Stevedores",
        description:
          language === "id"
            ? "Supervisi profesional dan pengelolaan kegiatan bongkar muat."
            : "Supercargo supervision and stevedoring management.",
      },
      {
        icon: ClipboardCheck,
        title: "Surveyor Coordination",
        description:
          language === "id"
            ? "Pengaturan surveyor independen untuk inspeksi lambung, mesin, dan kargo."
            : "Independent marine surveyor arrangements for hull, engine, and cargo.",
      },
      {
        icon: Truck,
        title: "Logistics, Forwarding & Customs",
        description:
          language === "id"
            ? "Layanan pengurusan bea cukai, logistik suku cadang, dan transportasi darat."
            : "Customs brokerage, spare part forwarding, and local transport.",
      },
    ],
    [language]
  );

  return (
    <section id="operational" className="bg-slate-50/50 py-16 md:py-24">
      <Container>
        {/* Header Section */}
        <div className="mb-12 text-center md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-secondary"
          >
            Operational Services
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
                Layanan <span className="text-secondary">Operasional Kapal</span>
              </>
            ) : (
              <>
                Vessel <span className="text-secondary">Operational Services</span>
              </>
            )}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base"
          >
            {language === "id"
              ? "Aktivitas operasional terpadu yang ditangani secara profesional oleh CBSA untuk kelancaran kapal Anda di pelabuhan."
              : "Core operational capabilities handled by CBSA to streamline every stage of your vessel's port call."}
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {operationalServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              /* Caps delay max 0.25s agar animasi tetap snappy */
              transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.25) }}
              className="group flex items-start gap-4 rounded-xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-md"
            >
              {/* Icon Container */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                <service.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </div>

              {/* Text Area */}
              <div>
                <h3 className="mb-1.5 text-base font-semibold text-primary transition-colors group-hover:text-secondary">
                  {service.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-500 md:text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OperationalServices;