import {
  FileText,
  Ship,
  Info,
  Anchor,
  ArrowLeftRight,
  Wrench,
  Users,
  ClipboardCheck,
  Truck,
  Fuel,
  LifeBuoy,
  Scale,
  UserCheck,
  FileCheck,
  CalendarCheck,
  Building2,
  Shield,
  HeartPulse,
} from "lucide-react";

export const services = [
  {
    title: "Arrival & Departure Clearance",
    titleEn: "Arrival & Departure Clearance",
    description:
      "Pengurusan dokumen kedatangan dan keberangkatan kapal dari dan ke pelabuhan.",
    descriptionEn:
      "Complete handling of vessel arrival and departure clearance documents with port authorities.",
    icon: FileText,
  },
  {
    title: "Bill of Lading Arrangement",
    titleEn: "Bill of Lading Arrangement",
    description:
      "Pengurusan dan koordinasi dokumen bill of lading untuk kelancaran perdagangan laut Anda.",
    descriptionEn:
      "Drafting and processing Bills of Lading for smooth maritime cargo documentation.",
    icon: FileCheck,
  },
  {
    title: "Port Call Information",
    titleEn: "Port Call Information",
    description:
      "Penyediaan informasi lengkap terkait jadwal dan kondisi panggilan pelabuhan.",
    descriptionEn:
      "Real-time monitoring and reporting on vessel port call schedules and channel conditions.",
    icon: Info,
  },
  {
    title: "Offshore Support",
    titleEn: "Offshore Support",
    description:
      "Dukungan operasi lepas pantai termasuk supply vessel dan maintenance offshore.",
    descriptionEn:
      "Full offshore operational support including supply vessel chartering and offshore maintenance.",
    icon: Anchor,
  },
  {
    title: "Ship-to-Ship Transhipment",
    titleEn: "Ship-to-Ship Transhipment",
    description:
      "Koordinasi dan pengurusan dokumen untuk operasi pemindahan kargo antar kapal.",
    descriptionEn:
      "On-site coordination and regulatory approval for STS cargo transhipment operations.",
    icon: ArrowLeftRight,
  },
  {
    title: "Dry-Docking & New Building Support",
    titleEn: "Dry-Docking & New Building Support",
    description:
      "Dukungan teknis dan dokumen untuk perawatan kapal di galangan kapal serta pembangunan baru.",
    descriptionEn:
      "Technical support and shipyard documentation for dry-docking and newbuilding projects.",
    icon: Wrench,
  },
  {
    title: "Port Captain & Stevedores",
    titleEn: "Port Captain & Stevedores",
    description:
      "Pengawasan teknis operasi pelabuhan dan koordinasi kegiatan bongkar muat.",
    descriptionEn:
      "Technical supercargo supervision and stevedoring management for fast cargo turnarounds.",
    icon: Users,
  },
  {
    title: "Surveyor Coordination",
    titleEn: "Surveyor Coordination",
    description:
      "Koordinasi surveyor untuk inspeksi kapal, kargo, dan kondisi teknis armada Anda.",
    descriptionEn:
      "Arranging accredited marine surveyors for draft, bunker, condition, and cargo inspections.",
    icon: ClipboardCheck,
  },
  {
    title: "Logistics, Forwarding & Customs Clearance",
    titleEn: "Logistics, Forwarding & Customs Clearance",
    description:
      "Solusi logistik laut dan darat yang terintegrasi termasuk pengurusan bea cukai.",
    descriptionEn:
      "End-to-end freight forwarding, warehousing, and customs clearance services.",
    icon: Truck,
  },
  {
    title: "Ship / Rig Lay Up",
    titleEn: "Ship / Rig Lay Up",
    description:
      "Dukungan dan pengurusan dokumen untuk penarikan sementara kapal atau rig dari operasional.",
    descriptionEn:
      "Hot and cold lay-up management and anchorage permits for vessels and offshore rigs.",
    icon: Ship,
  },
  {
    title: "Ship Chandler & Bunkering",
    titleEn: "Ship Chandler & Bunkering",
    description:
      "Penyediaan kebutuhan kapal dan pengisian bahan bakar berkualitas dengan harga kompetitif.",
    descriptionEn:
      "High-grade bunker fuel supply, fresh provisions, engine spares, and deck stores.",
    icon: Fuel,
  },
  {
    title: "Vessel / Cargo Pre-Planning",
    titleEn: "Vessel / Cargo Pre-Planning",
    description:
      "Perencanaan awal kunjungan kapal dan kargo untuk memastikan kelancaran operasional di pelabuhan.",
    descriptionEn:
      "Proactive proforma disbursement accounts and port pre-planning for maximum efficiency.",
    icon: CalendarCheck,
  },
  {
    title: "Owner Protective Agency",
    titleEn: "Owner Protective Agency (OPA)",
    description:
      "Layanan agen perlindungan pemilik kapal untuk memastikan kepentingan dan aset terlindungi selama operasi.",
    descriptionEn:
      "Independent protective agency monitoring charterers' agents and safeguarding owner interests.",
    icon: Shield,
  },
  {
    title: "Liner Agency / NVOCC",
    titleEn: "Liner Agency / NVOCC",
    description:
      "Layanan keagenan liner dan non-vessel operating common carrier untuk rute tetap dan pengiriman konsolidasi.",
    descriptionEn:
      "Full liner representation, container tracking, and NVOCC consolidation services.",
    icon: Building2,
  },
  {
    title: "Husbandry Services",
    titleEn: "Husbandry Services",
    description:
      "Crew change, e-Visa, akomodasi, transportasi, dan seluruh kebutuhan logistik awak kapal selama sandar di pelabuhan.",
    descriptionEn:
      "Crew handling, shore passes, airport transfers, hotel booking, and medical visits.",
    icon: LifeBuoy,
  },
  {
    title: "Crew Manning",
    titleEn: "Crew Manning & Management",
    description:
      "Penyediaan awak kapal terlatih dan bersertifikat untuk kebutuhan operasional Anda.",
    descriptionEn:
      "Recruitment, vetting, and certification management for STCW-certified seafarers.",
    icon: UserCheck,
  },
  {
    title: "Ship & Cargo Brokerage",
    titleEn: "Ship & Cargo Brokerage",
    description:
      "Perantaraan jual beli, sewa kapal, dan pengurusan kargo dengan jaringan yang luas.",
    descriptionEn:
      "Sale & purchase brokerage, chartering, and cargo fixture matching across Asia-Pacific.",
    icon: Scale,
  },
  {
    title: "Medical Evacuation",
    titleEn: "Medical Evacuation (Medevac)",
    description:
      "Layanan evakuasi medis darurat untuk awak kapal yang membutuhkan pertolongan segera.",
    descriptionEn:
      "24/7 emergency launch dispatch and hospital liaison for crew medical emergencies.",
    icon: HeartPulse,
  },
];
