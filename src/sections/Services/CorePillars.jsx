import { motion } from "framer-motion";
import { Ship, LifeBuoy, Truck, Check, ArrowUpRight } from "lucide-react";
import Container from "@/components/layout/Container";
import { useLanguage } from "@/context/LanguageContext";

const pillars = [
  {
    id: "ship-agency",
    number: "01",
    icon: Ship,
    titleId: "Keagenan Kapal",
    titleEn: "Ship Agency Services",
    subtitleId:
      "Layanan keagenan kapal yang andal dan efisien untuk mendukung operasional kapal di pelabuhan Batam.",
    subtitleEn:
      "Reliable and efficient vessel representation handling all port formalities and regulatory requirements.",
    pointsId: [
      "Izin pelabuhan & dokumentasi (Port clearance)",
      "Bea cukai, imigrasi, & formalitas regulasi",
      "Transfer & koordinasi kru (Crew transfer)",
      "Pengaturan kedatangan & keberangkatan kapal",
      "Dukungan muat dan bongkar barang",
      "Koordinasi pengedokan kering (Dry-docking)",
      "Pengaturan pengisian bahan bakar (Bunkering)",
      "Dukungan operasional & komunikasi 24/7",
      "Laporan & pembaruan kondisi secara real-time",
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
    number: "02",
    icon: LifeBuoy,
    titleId: "Layanan Husbandry",
    titleEn: "Husbandry Services",
    subtitleId:
      "Layanan husbandry profesional untuk kapal-kapal yang melakukan persinggahan di pelabuhan Batam.",
    subtitleEn:
      "Comprehensive ship husbandry for vessels calling at Batam and surrounding anchorages.",
    pointsId: [
      "Penanganan kru kapal & shore passes",
      "Kebutuhan medis kru & Medevac",
      "Koordinasi perbaikan di atas kapal & darat",
      "Pengaturan & pengiriman suku cadang",
      "Pengisian dan pengosongan bahan bakar",
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
    number: "03",
    icon: Truck,
    titleId: "Dukungan & Logistik",
    titleEn: "Logistics Support & Services",
    subtitleId:
      "Sebagai mitra logistik terpadu (one-stop logistics partner) khusus industri maritim.",
    subtitleEn:
      "Tailored one-stop logistics solutions ensuring smooth movement of marine goods and equipment.",
    pointsId: [
      "Pengadaan barang/material maritim",
      "Pembongkaran struktur / dismantling",
      "Pengepakan kargo & peralatan (Packing)",
      "Pengiriman & freight forwarding",
      "Pergudangan terpadu (Warehousing)",
      "Transportasi & pengangkutan darat",
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
    <section className="relative overflow-hidden bg-slate-50 py-24">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[24px_24px] opacity-60 pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
            {language === "id" ? "Layanan Utama Perusahaan" : "Our Core Services"}
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
                3 Pilar Layanan{" "}
                <span className="text-secondary">PT Chantika Bahari Sejahtera Abadi</span>
              </>
            ) : (
              <>
                3 Core Service Pillars of <span className="text-secondary">CBSA</span>
              </>
            )}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-3xl text-base text-slate-600 md:text-lg leading-relaxed"
          >
            {language === "id"
              ? "Perusahaan menjamin layanan yang cepat, profesional, dan dapat diandalkan melalui 3 pilar operasional utama."
              : "CBSA guarantees fast and dependable service through three integrated core operational pillars."}
          </motion.p>
        </div>

        {/* Pillars Grid */}
        <div className="grid gap-8 lg:grid-cols-3 items-stretch">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/40 hover:shadow-2xl hover:shadow-secondary/5"
            >
              {/* Background Number Accent */}
              <span className="absolute -right-2 -top-4 select-none text-8xl font-black text-slate-100 transition-colors group-hover:text-secondary/10">
                {pillar.number}
              </span>

              <div>
                {/* Icon & Title Header */}
                <div className="relative z-10 mb-6 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-colors group-hover:bg-secondary group-hover:text-white">
                    <pillar.icon className="h-7 w-7" />
                  </div>
                  <a
                    href="#contact"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-100 bg-slate-50 text-slate-400 transition-all group-hover:border-secondary group-hover:bg-secondary/10 group-hover:text-secondary"
                    title="Konsultasi"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                </div>

                <h3 className="relative z-10 mb-3 text-2xl font-bold text-primary group-hover:text-secondary transition-colors">
                  {language === "id" ? pillar.titleId : pillar.titleEn}
                </h3>

                <p className="relative z-10 mb-6 text-sm leading-relaxed text-slate-500">
                  {language === "id" ? pillar.subtitleId : pillar.subtitleEn}
                </p>

                {/* Divider Line (SUDAH DIBERSIHKAN KE bg-linear-to-r) */}
                <div className="my-6 h-px w-full bg-linear-to-r from-slate-200 via-slate-100 to-transparent" />

                {/* Points List */}
                <ul className="space-y-4">
                  {(language === "id" ? pillar.pointsId : pillar.pointsEn).map(
                    (point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                          {/* STROKE-3 SUDAH DIBERSIHKAN */}
                          <Check className="h-3.5 w-3.5 stroke-3" />
                        </div>
                        <span className="text-sm font-medium text-slate-700 leading-snug">
                          {point}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="mt-8 pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary group-hover:text-secondary transition-colors"
                >
                  {language === "id" ? "Pelajari Lebih Lanjut" : "Learn More"}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CorePillars;