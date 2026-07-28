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

  const operationalServices = [
    {
      icon: FileText,
      title: "Arrival & Departure Clearance",
      description:
        language === "id"
          ? "Pengurusan dokumen kedatangan dan keberangkatan kapal."
          : "Complete handling of vessel entry & exit clearance documentation.",
    },
    {
      icon: Ship,
      title: "Bill of Lading Arrangement",
      description:
        language === "id"
          ? "Pengurusan dokumen Bill of Lading untuk kargo Anda."
          : "Coordination and issuance support for Bills of Lading.",
    },
    {
      icon: Info,
      title: "Port Call Information",
      description:
        language === "id"
          ? "Informasi lengkap mengenai panggilan pelabuhan."
          : "Real-time updates and full port call status intelligence.",
    },
    {
      icon: Anchor,
      title: "Offshore Support",
      description:
        language === "id"
          ? "Dukungan operasi lepas pantai yang komprehensif."
          : "End-to-end offshore operations and marine logistics support.",
    },
    {
      icon: ArrowLeftRight,
      title: "Ship-to-Ship Transshipment",
      description:
        language === "id"
          ? "Layanan pemindahan kargo antar kapal."
          : "Seamless STS cargo transfer coordination and authority approval.",
    },
    {
      icon: Wrench,
      title: "Dry Docking & New Building",
      description:
        language === "id"
          ? "Dukungan perawatan kapal dan pembangunan baru."
          : "Technical assistance for drydocking repairs and shipyard builds.",
    },
    {
      icon: UserCheck,
      title: "Port Captain & Stevedores",
      description:
        language === "id"
          ? "Supervisi dan pengelolaan bongkar muat kargo."
          : "Supercargo supervision and stevedoring management.",
    },
    {
      icon: ClipboardCheck,
      title: "Surveyor Coordination",
      description:
        language === "id"
          ? "Koordinasi surveyor untuk inspeksi kargo dan kapal."
          : "Independent marine surveyor arrangements for hull, engine, and cargo.",
    },
    {
      icon: Truck,
      title: "Logistics, Forwarding & Customs",
      description:
        language === "id"
          ? "Solusi logistik, forwarding, dan urusan bea cukai."
          : "Customs brokerage, spare part forwarding, and local transport.",
    },
  ];

  return (
    <section
      id="operational"
      className="flex min-h-screen items-center bg-white py-24"
    >
      <Container>
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-secondary"
          >
            Operational Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-3xl font-bold text-primary md:text-4xl lg:text-5xl"
          >
            {language === "id" ? (
              <>Layanan <span className="text-secondary">Operasional Kapal</span></>
            ) : (
              <>Vessel <span className="text-secondary">Operational Services</span></>
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
              ? "Aktivitas operasional yang mampu ditangani oleh CBSA untuk mendukung seluruh kebutuhan kapal Anda."
              : "Core operational capabilities handled by CBSA to streamline every stage of your vessel's port call."}
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {operationalServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              className="group flex items-start gap-4 rounded-2xl border border-slate-100 p-6 transition-all hover:border-secondary/20 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/5 transition-colors group-hover:bg-secondary/10">
                <service.icon className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-primary">
                  {service.title}
                </h3>
                <p className="text-sm text-gray leading-relaxed">
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
