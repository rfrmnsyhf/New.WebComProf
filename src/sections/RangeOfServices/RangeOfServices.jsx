import { motion } from "framer-motion";
import { CheckCircle2, Layers } from "lucide-react";
import Container from "@/components/layout/Container";
import { useLanguage } from "@/context/LanguageContext";

const serviceCategories = [
  {
    id: "port-vessel",
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
    id: "specialized-agency",
    category: "Keagenan Khusus",
    categoryEn: "Specialized Agency",
    items: [
      { name: "Owner Protective Agency (OPA)", nameId: "Owner Protective Agency (OPA)" },
      { name: "Liner Agency / NVOCC Services", nameId: "Keagenan Liner / NVOCC" },
      { name: "Ship & Cargo Brokerage", nameId: "Brokerage Kapal & Kargo" },
    ],
  },
  {
    id: "offshore-special",
    category: "Operasional Khusus & Lepas Pantai",
    categoryEn: "Offshore & Special Operations",
    items: [
      { name: "Offshore Support & Supply Vessels", nameId: "Dukungan Lepas Pantai & OSV" },
      { name: "Ship-to-Ship (STS) Transhipment", nameId: "Transhipment Kapal-ke-Kapal (STS)" },
      { name: "Ship / Rig Lay Up In Batam", nameId: "Ship / Rig Lay Up di Batam" },
    ],
  },
  {
    id: "technical-repair",
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
    id: "crew-logistics",
    category: "Layanan Kru & Logistik Terpadu",
    categoryEn: "Crew & One-Stop Logistics",
    // Tambahkan class span khusus agar di layar lebar bisa mengambil 2 kolom jika perlu
    featured: true, 
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
    <section className="relative overflow-hidden bg-slate-50 py-24">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [bg-size-[24px_24px]] opacity-40 pointer-events-none" />

      <Container className="relative z-10">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary"
          >
            <Layers className="h-3.5 w-3.5" />
            {language === "id" ? "Matriks Portofolio Layanan" : "Service Portfolio Matrix"}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-3xl font-extrabold text-primary md:text-4xl lg:text-5xl tracking-tight"
          >
            {language === "id" ? (
              <>
                Matriks Layanan <span className="text-secondary">Terintegrasi CBSA</span>
              </>
            ) : (
              <>
                Integrated Service <span className="text-secondary">Portfolio Matrix</span>
              </>
            )}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base text-slate-600 md:text-lg leading-relaxed"
          >
            {language === "id"
              ? "Matriks lengkap opsi spesialis dan operasional yang disediakan PT Chantika Bahari Sejahtera Abadi."
              : "Complete range of specialized maritime, technical, crew, and logistical services provided by CBSA."}
          </motion.p>
        </div>

        {/* Matrix Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start">
          {serviceCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.id || cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: 0.08 * catIdx,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className={`group rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/5 ${
                cat.featured ? "lg:col-span-2 xl:col-span-1" : ""
              }`}
            >
              {/* Category Title Header */}
              <div className="mb-5 border-b border-slate-100 pb-4">
                <h3 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                  {language === "id" ? cat.category : cat.categoryEn}
                </h3>
              </div>

              {/* Items List */}
              <ul className={`space-y-3.5 ${cat.featured ? "grid gap-3.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 space-y-0" : ""}`}>
                {cat.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm font-medium leading-snug text-slate-700">
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