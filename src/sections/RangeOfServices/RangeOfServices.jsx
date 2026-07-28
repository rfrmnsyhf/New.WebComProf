import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Container from "@/components/layout/Container";
import { useLanguage } from "@/context/LanguageContext";

const serviceCategories = [
  {
    category: "Operasional Pelabuhan & Kapal",
    categoryEn: "Port & Vessel Operations",
    items: [
      { name: "Arrival / Departure Clearance", nameId: "Izin Kedatangan & Keberangkatan" },
      { name: "Bill of Lading Arrangement", nameId: "Pengurusan Bill of Lading" },
      { name: "Port Call Information & Status", nameId: "Informasi Panggilan Pelabuhan" },
      { name: "Vessel / Cargo Pre-Planning", nameId: "Perencanaan Awal Kapal & Kargo" },
      { name: "Port Captain & Stevedores Supervision", nameId: "Supervisi Port Captain & Stevedoring" },
    ],
  },
  {
    category: "Keagenan Khusus",
    categoryEn: "Specialized Agency",
    items: [
      { name: "Owner Protective Agency (OPA)", nameId: "Owner Protective Agency (OPA)" },
      { name: "Liner Agency / NVOCC Services", nameId: "Keagenan Liner / NVOCC" },
      { name: "Ship & Cargo Brokerage", nameId: "Brokerage Kapal & Kargo" },
    ],
  },
  {
    category: "Operasional Khusus & Lepas Pantai",
    categoryEn: "Offshore & Special Operations",
    items: [
      { name: "Offshore Support & Supply Vessels", nameId: "Dukungan Lepas Pantai & OSV" },
      { name: "Ship-to-Ship (STS) Transhipment", nameId: "Transhipment Kapal-ke-Kapal (STS)" },
      { name: "Ship / Rig Lay Up In Batam", nameId: "Ship / Rig Lay Up di Batam" },
    ],
  },
  {
    category: "Teknis & Perbaikan",
    categoryEn: "Technical & Ship Repair",
    items: [
      { name: "Dry-Docking & New Building Coordination", nameId: "Koordinasi Dry-Docking & Pembangunan Baru" },
      { name: "Surveyor Coordination & Inspection", nameId: "Koordinasi Surveyor & Inspeksi" },
      { name: "Tank Cleaning Services", nameId: "Layanan Tank Cleaning" },
      { name: "Salvage & Marine Assistance", nameId: "Layanan Salvage & Bantuan Laut" },
    ],
  },
  {
    category: "Layanan Kru & Logistik Terpadu",
    categoryEn: "Crew & One-Stop Logistics",
    items: [
      { name: "Crew Manning & STCW Certification", nameId: "Crew Manning & Pengelolaan Kru" },
      { name: "Medical Evacuation (MEDEVAC)", nameId: "Evakuasi Medis Darurat (Medevac)" },
      { name: "Ship Chandler & Sparepart Supply", nameId: "Ship Chandler & Pasokan Suku Cadang" },
      { name: "Provisions & Fresh Water Delivery", nameId: "Provisi & Air Bersih Kapal" },
      { name: "Bunkering & De-Bunkering Arrangements", nameId: "Pengisian & Pengosongan Bahan Bakar (Bunker)" },
      { name: "Procurement, Dismantlement & Packing", nameId: "Pengadaan, Pembongkaran & Pengepakan" },
      { name: "Warehousing, Freight Forwarding & Customs Clearance", nameId: "Pergudangan, Forwarding & Bea Cukai" },
    ],
  },
];

const RangeOfServices = () => {
  const { language } = useLanguage();

  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-secondary"
          >
            Matriks Portofolio Layanan
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-3xl font-bold text-primary md:text-4xl"
          >
            {language === "id" ? (
              <>Matriks Layanan <span className="text-secondary">Terintegrasi CBSA</span></>
            ) : (
              <>Integrated Service <span className="text-secondary">Portfolio Matrix</span></>
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
              ? "Matriks lengkap opsi spesialis dan operasional yang disediakan PT Chantika Bahari Sejahtera Abadi."
              : "Complete range of specialized maritime, technical, crew, and logistical services provided by CBSA."}
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * catIdx }}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <h3 className="mb-4 text-lg font-bold text-primary border-b border-slate-100 pb-3">
                {language === "id" ? cat.category : cat.categoryEn}
              </h3>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <span className="text-sm font-medium text-slate-700">
                      {language === "id" ? item.nameId : item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default RangeOfServices;

