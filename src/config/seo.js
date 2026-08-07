// ==========================================
// SEO CONFIG — single source of truth
// Edit di sini untuk mengubah metadata global
// atau metadata halaman statis di seluruh situs.
// ==========================================

export const SITE = {
  name: "PT. Chantika Bahari Sejahtera Abadi",
  shortName: "CBSA",
  url: "https://cbsabatam.com",
  ogImage: "https://cbsabatam.com/og-image.jpg",
  locale: "id_ID",
  robots: "index, follow",
  defaultTitle: "CBSA | PT. Chantika Bahari Sejahtera Abadi - Maritime & Logistics",
  defaultDescription: {
    id: "CBSA adalah perusahaan independen di bidang jasa kepelabuhanan dan pelayaran. Ship agency, port services, dan maritime logistics di Batam, Indonesia.",
    en: "CBSA is an independent port and shipping services company. Ship agency, port services, and maritime logistics in Batam, Indonesia.",
  },
};

// Metadata halaman statis (key = route path).
// Halaman layanan dinamis tidak ada di sini karena
// bersumber dari src/data/serviceLandings.js.
export const PAGES = {
  "/": {
    title: {
      id: "CBSA | Ship Agency & Maritime Logistics Batam",
      en: "CBSA | Ship Agency & Maritime Logistics Batam",
    },
    description: {
      id: "PT. Chantika Bahari Sejahtera Abadi (CBSA) — solusi ship agency, port services, bunkering, dan maritime logistics terpercaya di Batam, Indonesia. Layanan 24/7.",
      en: "PT. Chantika Bahari Sejahtera Abadi (CBSA) — trusted ship agency, port services, bunkering, and maritime logistics in Batam, Indonesia. 24/7 support.",
    },
  },
  "/about": {
    title: {
      id: "Tentang Kami | CBSA - Keagenan Kapal Batam",
      en: "About Us | CBSA - Ship Agency Batam",
    },
    description: {
      id: "Kenali PT. Chantika Bahari Sejahtera Abadi (CBSA) — keagenan kapal dan jasa maritim independen terpercaya di Batam, Selat Malaka, dan Selat Singapura.",
      en: "Get to know PT. Chantika Bahari Sejahtera Abadi (CBSA) — trusted independent shipping agency and maritime services in Batam, Malacca Strait, and Singapore Strait.",
    },
  },
  "/services": {
    title: {
      id: "Layanan | CBSA - Ship Agency, Chandler & Bunkering",
      en: "Services | CBSA - Ship Agency, Chandler & Bunkering",
    },
    description: {
      id: "Layanan maritim CBSA: ship agency & port services, ship chandler & bunkering, logistics & customs clearance, offshore support, husbandry, dan crew manning di Batam.",
      en: "CBSA maritime services: ship agency & port services, ship chandler & bunkering, logistics & customs clearance, offshore support, husbandry, and crew manning in Batam.",
    },
  },
  "/industries": {
    title: {
      id: "Industri & Kapal | CBSA - Sektor yang Kami Layani",
      en: "Industries & Vessels | CBSA - Sectors We Serve",
    },
    description: {
      id: "CBSA melayani berbagai jenis kapal dan sektor industri maritim: tanker, dry bulk, tugboat & barge, heavy lift, OSV, kapal pesiar, hingga kapal angkatan laut di Batam.",
      en: "CBSA serves various vessel types and maritime industry sectors: tankers, dry bulk, tug & barge, heavy lift, OSV, cruise ships, and naval vessels in Batam.",
    },
  },
  "/contact": {
    title: {
      id: "Hubungi Kami | CBSA - Layanan Maritim Batam",
      en: "Contact Us | CBSA - Maritime Services Batam",
    },
    description: {
      id: "Hubungi PT. Chantika Bahari Sejahtera Abadi (CBSA) di Batam untuk kebutuhan ship agency, port services, dan maritime logistics. Tim kami siaga 24/7.",
      en: "Contact PT. Chantika Bahari Sejahtera Abadi (CBSA) in Batam for ship agency, port services, and maritime logistics. Our team is available 24/7.",
    },
  },
  "/whatsapp": {
    title: {
      id: "Pusat Bantuan WhatsApp | CBSA Batam",
      en: "WhatsApp Support Hub | CBSA Batam",
    },
    description: {
      id: "Hubungi tim operasional atau manajemen PT. Chantika Bahari Sejahtera Abadi (CBSA) langsung melalui WhatsApp resmi. Layanan 24/7 di Batam.",
      en: "Reach PT. Chantika Bahari Sejahtera Abadi (CBSA) operational and management team directly via official WhatsApp. 24/7 support in Batam.",
    },
  },
  "/privacy-policy": {
    title: {
      id: "Kebijakan Privasi | CBSA",
      en: "Privacy Policy | CBSA",
    },
    description: {
      id: "Kebijakan Privasi PT. Chantika Bahari Sejahtera Abadi (CBSA) — cara kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda.",
      en: "Privacy Policy of PT. Chantika Bahari Sejahtera Abadi (CBSA) — how we collect, use, and protect your personal data.",
    },
  },
  "/terms-conditions": {
    title: {
      id: "Syarat & Ketentuan | CBSA",
      en: "Terms & Conditions | CBSA",
    },
    description: {
      id: "Syarat dan Ketentuan penggunaan situs PT. Chantika Bahari Sejahtera Abadi (CBSA) serta layanan keagenan kapal dan maritim di Batam.",
      en: "Terms and Conditions for using the PT. Chantika Bahari Sejahtera Abadi (CBSA) website and ship agency maritime services in Batam.",
    },
  },
};
