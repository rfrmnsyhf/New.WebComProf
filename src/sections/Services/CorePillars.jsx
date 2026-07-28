import { motion } from "framer-motion";
import { Ship, LifeBuoy, Truck, Check } from "lucide-react";
import Container from "@/components/layout/Container";
import { useLanguage } from "@/context/LanguageContext";

const pillars = [
  {
    id: "ship-agency",
    icon: Ship,
    titleId: "A. Keagenan Kapal (Ship Agency Services)",
    titleEn: "A. Ship Agency Services",
    subtitleId: "Layanan keagenan kapal yang andal dan efisien untuk mendukung operasional kapal di pelabuhan Batam.",
    subtitleEn: "Reliable and efficient vessel representation handling all port formalities and regulatory requirements.",
    pointsId: [
      "Izin pelabuhan & dokumentasi (Port clearance and documentation)",
      "Bea cukai, imigrasi, & formalitas regulasi (Customs, immigration, and regulatory formalities)",
      "Transfer & koordinasi kru (Crew transfer and coordination)",
      "Pengaturan kedatangan & keberangkatan kapal (Vessel arrival and departure arrangements)",
      "Dukungan muat dan bongkar barang (Loading and discharging support)",
      "Koordinasi pengedokan kering (Dry-docking coordination)",
      "Pengaturan pengisian bahan bakar (Bunkering arrangements)",
      "Dukungan operasional & komunikasi 24/7 (24/7 operational support and communication)",
      "Laporan & pembaruan kondisi secara real-time (Real-time reporting and updates)",
    ],
    pointsEn: [
      "Port clearance and documentation",
      "Customs, immigration, and regulatory formalities",
      "Crew transfer and coordination",
      "Vessel arrival and departure arrangements",
      "Loading and discharging support",
      "Dry-docking coordination",
      "Bunkering arrangements",
      "24/7 operational support and communication",
      "Real-time reporting and updates",
    ],
  },
  {
    id: "husbandry",
    icon: LifeBuoy,
    titleId: "B. Layanan Husbandry (Husbandry Services)",
    titleEn: "B. Husbandry Services",
    subtitleId: "Layanan husbandry profesional untuk kapal-kapal yang melakukan persinggahan di pelabuhan Batam.",
    subtitleEn: "Comprehensive ship husbandry for vessels calling at Batam and surrounding anchorages.",
    pointsId: [
      "Penanganan kru kapal (Crew handling & shore passes)",
      "Kebutuhan medis kru (Crew medical needs & Medevac)",
      "Koordinasi perbaikan di atas kapal maupun di darat (Coordination of repairs on board and ashore)",
      "Pengaturan & pengiriman suku cadang (Spare parts arrangement and delivery)",
      "Pengisian dan pengosongan bahan bakar (Bunkering and de-bunkering)",
    ],
    pointsEn: [
      "Crew handling and shore passes",
      "Crew medical needs & Medevac liaison",
      "Coordination of repairs on board and ashore",
      "Spare parts arrangement and delivery",
      "Bunkering and de-bunkering",
    ],
  },
  {
    id: "logistics",
    icon: Truck,
    titleId: "C. Dukungan & Layanan Logistik (Logistics Support & Services)",
    titleEn: "C. Logistics Support & Services (One-Stop Partner)",
    subtitleId: "Sebagai mitra logistik terpadu (one-stop logistics partner) khusus industri maritim.",
    subtitleEn: "Tailored one-stop logistics solutions ensuring smooth movement of marine goods and equipment.",
    pointsId: [
      "Pengadaan barang/material maritim (Procurement)",
      "Pembongkaran struktur / dismantling (Dismantlement)",
      "Pengepakan kargo & peralatan (Packing)",
      "Pengiriman & freight forwarding (Shipping)",
      "Pergudangan terpadu (Warehousing)",
      "Transportasi & pengangkutan darat (Transport)",
      "Pengurusan bea cukai (Customs clearance)",
    ],
    pointsEn: [
      "Procurement of marine spares and supplies",
      "Dismantlement of structures and equipment",
      "Cargo & equipment packing",
      "Shipping & freight forwarding",
      "Integrated warehousing",
      "Land transport and trucking",
      "Customs clearance brokerage",
    ],
  },
];

const CorePillars = () => {
  const { language } = useLanguage();

  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-secondary"
          >
            {language === "id" ? "Layanan Utama Perusahaan" : "Our Core Services"}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-3xl font-bold text-primary md:text-4xl lg:text-5xl"
          >
            {language === "id" ? (
              <>3 Pilar Layanan <span className="text-secondary">PT Chantika Bahari Sejahtera Abadi</span></>
            ) : (
              <>3 Core Service Pillars of <span className="text-secondary">CBSA</span></>
            )}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-3xl text-lg text-gray"
          >
            {language === "id"
              ? "Perusahaan menjamin layanan yang cepat, profesional, dan dapat diandalkan (fast and dependable service) melalui 3 pilar operasional utama."
              : "CBSA guarantees fast and dependable service through three integrated core operational pillars."}
          </motion.p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="flex flex-col rounded-3xl border border-slate-100 bg-slate-50/70 p-8 shadow-sm transition-all duration-300 hover:border-secondary/30 hover:bg-white hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                <pillar.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-primary">
                {language === "id" ? pillar.titleId : pillar.titleEn}
              </h3>
              <p className="mb-6 text-sm text-gray leading-relaxed">
                {language === "id" ? pillar.subtitleId : pillar.subtitleEn}
              </p>
              <div className="mt-auto border-t border-slate-200/60 pt-6">
                <ul className="space-y-3">
                  {(language === "id" ? pillar.pointsId : pillar.pointsEn).map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3">
                      <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-secondary text-white">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </div>
                      <span className="text-xs font-medium text-slate-700 leading-snug">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CorePillars;
