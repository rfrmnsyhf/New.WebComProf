// ==========================================
// SERVICE LANDING PAGES — konfigurasi + konten
// Sumber konten: company profile CBSA (PDF) + website.
// Semua klaim berdasarkan materi perusahaan, tanpa
// mengarang layanan/statistik/pengalaman.
// ==========================================

import svc1 from "@/assets/images/svc1.jpg";
import svc2 from "@/assets/images/svc2.jpg";
import svc3 from "@/assets/images/svc3.jpg";
import svc4 from "@/assets/images/svc4.jpg";
import svc5 from "@/assets/images/svc5.jpg";
import tanker from "@/assets/images/tanker.jpg";
import supplyOffshore from "@/assets/images/supply-offshore.jpg";
import servicesHero from "@/assets/images/servicesHero.jpg";

export const servingAreas = [
  "Batam",
  "Batu Ampar",
  "Sekupang",
  "Kabil",
  "Tanjung Uncang",
  "Singapore",
  "Karimun",
];

// Keunggulan kompetitif dari company profile (section "Competitive")
export const whyChooseUsPoints = [
  {
    title: {
      id: "Operasional 24/7",
      en: "24/7 Operations",
    },
    description: {
      id: "Didukung pengetahuan lokal mendalam untuk memastikan turnaround yang cepat dan efisien di setiap port call.",
      en: "Backed by in-depth local expertise and knowledge for fast and efficient turn around at every port call.",
    },
  },
  {
    title: {
      id: "Pengetahuan Lokal",
      en: "Local Expertise",
    },
    description: {
      id: "Pemahaman mendalam terhadap dinamika pelabuhan, regulasi, dan otoritas di Batam dan perairan sekitarnya.",
      en: "Deep understanding of port dynamics, regulations, and local authorities in Batam and surrounding waters.",
    },
  },
  {
    title: {
      id: "Harga Kompetitif",
      en: "Competitive Pricing",
    },
    description: {
      id: "Penawaran harga yang kompetitif dan transparan untuk membantu menghemat biaya operasional Anda.",
      en: "Competitive and transparent pricing to help save your customer money.",
    },
  },
  {
    title: {
      id: "Kepatuhan HSE",
      en: "HSE Compliance",
    },
    description: {
      id: "Menerapkan standar ketat Health, Safety, and Environment sesuai praktik internasional.",
      en: "Strict adherence to international Health, Safety, and Environment (HSE) standards.",
    },
  },
  {
    title: {
      id: "Disbursement Akurat",
      en: "Accurate Disbursement",
    },
    description: {
      id: "Pengelolaan port disbursement dan dana yang akurat serta transparan.",
      en: "Accurate disbursement and fund management with full transparency.",
    },
  },
  {
    title: {
      id: "Laporan Harian",
      en: "Daily Report",
    },
    description: {
      id: "Laporan principal harian yang disesuaikan dengan kebutuhan setiap klien.",
      en: "Customised daily principal reports tailored to each client's requirements.",
    },
  },
  {
    title: {
      id: "Layanan Terintegrasi",
      en: "Integrated Services",
    },
    description: {
      id: "Portofolio layanan pelayaran dan jasa khusus yang fleksibel dan terintegrasi.",
      en: "Flexible, integrated portfolio of shipping and specialised services.",
    },
  },
];

export const serviceLandings = [
  {
    slug: "ship-agency",
    keyword: "Ship Agency Batam",
    title: {
      id: "Ship Agency Batam",
      en: "Ship Agency Batam",
    },
    metaTitle: {
      id: "Ship Agency Batam | CBSA - Keagenan Kapal",
      en: "Ship Agency Batam | CBSA - Trusted Port Agency",
    },
    metaDescription: {
      id: "Jasa ship agency di Batam dari CBSA: clearance masuk/keluar, keagenan kapal penuh, koordinasi otoritas pelabuhan, dan dukungan port call 24/7 untuk semua jenis kapal.",
      en: "CBSA ship agency in Batam: arrival & departure clearance, full vessel representation, port authority coordination, and 24/7 port call support for all vessel types.",
    },
    heroSubtitle: {
      id: "Keagenan kapal independen terpercaya untuk semua jenis kapal yang bersandar di Batam dan perairan Kepulauan Riau.",
      en: "Trusted independent ship agency for all vessel types calling at Batam Port and the waters of the Riau Islands.",
    },
    image: svc1,
    serving: servingAreas,
    related: ["ship-chandler", "crew-manning", "customs-clearance"],
    ctaTitle: {
      id: "Butuh Jasa Keagenan Kapal di Batam?",
      en: "Need Ship Agency Services in Batam?",
    },
    intro: {
      id: "PT. Chantika Bahari Sejahtera Abadi (CBSA) adalah ship agent independen di Batam yang berpengalaman menangani seluruh formalitas pelabuhan dan regulasi untuk semua jenis kapal yang bersandar di Batam Port. Tim kami menjamin port call yang bebas hambatan dan cepat di bawah keagenan kami.",
      en: "PT. Chantika Bahari Sejahtera Abadi (CBSA) is an independent ship agency in Batam experienced in handling all port and regulatory formalities for every type of vessel calling at Batam Port. Our team guarantees a fuss-free and swift port call under our agency.",
    },
    overview: [],
    features: [
      {
        title: { id: "Arrival & Departure Clearance", en: "Arrival & Departure Clearance" },
        description: {
          id: "Pengurusan lengkap dokumen kedatangan dan keberangkatan kapal dengan otoritas pelabuhan.",
          en: "Complete handling of vessel arrival and departure clearance documents with port authorities.",
        },
      },
      {
        title: { id: "Port Call Information", en: "Port Call Information" },
        description: {
          id: "Informasi real-time jadwal port call dan kondisi alur pelayaran.",
          en: "Real-time monitoring and reporting on vessel port call schedules and channel conditions.",
        },
      },
      {
        title: { id: "Owner Protective Agency (OPA)", en: "Owner Protective Agency (OPA)" },
        description: {
          id: "Agen pelindung independen untuk menjaga kepentingan dan aset pemilik kapal.",
          en: "Independent protective agency safeguarding owner interests and assets during operations.",
        },
      },
      {
        title: { id: "Port Captain & Stevedores", en: "Port Captain & Stevedores" },
        description: {
          id: "Pengawasan teknis operasi pelabuhan dan koordinasi bongkar muat.",
          en: "Technical supercargo supervision and stevedoring coordination for fast cargo turnarounds.",
        },
      },
      {
        title: { id: "Surveyor Coordination", en: "Surveyor Coordination" },
        description: {
          id: "Koordinasi surveyor bersertifikat untuk inspeksi kapal dan kargo.",
          en: "Arranging accredited marine surveyors for vessel and cargo inspections.",
        },
      },
      {
        title: { id: "Ship-to-Ship Transshipment", en: "Ship-to-Ship Transshipment" },
        description: {
          id: "Koordinasi dan pengurusan persetujuan operasi pemindahan kargo antar kapal.",
          en: "On-site coordination and regulatory approval for STS cargo transhipment operations.",
        },
      },
    ],
    process: [
      {
        title: { id: "Perencanaan Pra-Kedatangan", en: "Pre-Arrival Planning" },
        description: {
          id: "Koordinasi jadwal, pembuatan PDA, dan persiapan dokumen sebelum kapal tiba.",
          en: "Schedule coordination, Proforma Disbursement Account (PDA) preparation, and document readiness before arrival.",
        },
      },
      {
        title: { id: "Clearance Kedatangan", en: "Arrival Clearance" },
        description: {
          id: "Pengurusan formalitas CIQP (Syahbandar, Bea Cukai, Imigrasi, Karantina).",
          en: "Processing of CIQP formalities — Port Authority, Customs, Immigration, and Quarantine.",
        },
      },
      {
        title: { id: "Dukungan Selama Sandar", en: "Support During Port Call" },
        description: {
          id: "Husbandry, koordinasi otoritas, dan penanganan kebutuhan operasional kapal.",
          en: "Husbandry, authority coordination, and handling of all vessel operational needs.",
        },
      },
      {
        title: { id: "Clearance Keberangkatan", en: "Departure Clearance" },
        description: {
          id: "Pengurusan dokumen keberangkatan dan laporan akhir kepada principal.",
          en: "Departure documentation and final reporting to the principal.",
        },
      },
    ],
    whyBatam: [
      {
        title: { id: "Posisi Strategis", en: "Strategic Position" },
        description: {
          id: "Batam berada di jalur pelayaran tersibuk dunia antara Selat Malaka dan Selat Singapura.",
          en: "Batam sits on one of the world's busiest shipping lanes between the Malacca Strait and the Singapore Strait.",
        },
      },
      {
        title: { id: "Dekat dengan Singapore", en: "Close to Singapore" },
        description: {
          id: "Jarak pendek ke Singapura menjadikan Batam lokasi anchorage dan bunkering yang efisien.",
          en: "Short distance from Singapore makes Batam an efficient anchorage and bunkering location.",
        },
      },
      {
        title: { id: "Infrastruktur Pelabuhan", en: "Port Infrastructure" },
        description: {
          id: "Dilayani terminal Batu Ampar, Sekupang, Kabil, dan Tanjung Uncang.",
          en: "Served by the terminals of Batu Ampar, Sekupang, Kabil, and Tanjung Uncang.",
        },
      },
      {
        title: { id: "Efisiensi Port Call", en: "Port Call Efficiency" },
        description: {
          id: "Koordinasi lokal yang kuat mempercepat clearance dan mengurangi waktu tunggu kapal.",
          en: "Strong local coordination speeds up clearance and reduces vessel downtime.",
        },
      },
    ],
    faq: [
      {
        question: {
          id: "Apa itu ship agency?",
          en: "What is a ship agency?",
        },
        answer: {
          id: "Ship agent bertindak sebagai perwakilan resmi kapal di pelabuhan, mengurus seluruh formalitas clearance, koordinasi otoritas, dan kebutuhan operasional kapal selama port call.",
          en: "A ship agent acts as the vessel's official representative in port, handling all clearance formalities, authority coordination, and operational needs during the port call.",
        },
      },
      {
        question: {
          id: "Berapa lama proses clearance kapal asing?",
          en: "How long does vessel clearance take?",
        },
        answer: {
          id: "Proses clearance biasanya diselesaikan dalam 1-2 hari kerja tergantung kelengkapan dokumen manifes dan sertifikat kapal.",
          en: "Clearance is typically completed within 1-2 working days depending on the completeness of manifest documents and vessel certificates.",
        },
      },
      {
        question: {
          id: "Apakah CBSA melayani 24 jam?",
          en: "Does CBSA provide 24/7 support?",
        },
        answer: {
          id: "Ya, tim operasional kami siaga 24 jam sehari, 7 hari seminggu, termasuk hari libur nasional.",
          en: "Yes, our operational team is on standby 24 hours a day, 7 days a week, including national holidays.",
        },
      },
      {
        question: {
          id: "Apakah dapat membantu kapal asing?",
          en: "Can you assist foreign vessels?",
        },
        answer: {
          id: "Ya, kami melayani kapal asing yang beroperasi di perairan Indonesia termasuk pengurusan visa, clearance, dan kebutuhan port call lainnya.",
          en: "Yes, we assist foreign vessels operating in Indonesian waters including visa arrangements, clearance, and other port call requirements.",
        },
      },
    ],
  },
  {
    slug: "ship-chandler",
    keyword: "Ship Chandler Batam",
    title: {
      id: "Ship Chandler Batam",
      en: "Ship Chandler Batam",
    },
    metaTitle: {
      id: "Ship Chandler Batam | CBSA - Perlengkapan & Provisi Kapal",
      en: "Ship Chandler Batam | CBSA - Vessel Provisions & Supplies",
    },
    metaDescription: {
      id: "Layanan ship chandler di Batam dari CBSA: pasokan provisi, suku cadang, deck stores, dan kebutuhan kapal lainnya dikirim langsung ke kapal di pelabuhan atau anchorage, 24/7.",
      en: "CBSA ship chandler in Batam: provisions, spare parts, deck stores, and vessel supplies delivered directly to your vessel at berth or anchorage, 24/7.",
    },
    heroSubtitle: {
      id: "Pemasok perlengkapan kapal satu pintu (one-stop) termasuk provisi, suku cadang, dan kebutuhan operasional harian kapal.",
      en: "One-stop ship chandler covering provisions, spare parts, and day-to-day vessel operational supplies.",
    },
    image: svc2,
    serving: servingAreas,
    related: ["marine-supply", "bunkering", "crew-manning"],
    ctaTitle: {
      id: "Butuh Perlengkapan Kapal di Batam?",
      en: "Need Vessel Supplies in Batam?",
    },
    intro: {
      id: "Sebagai ship chandler di Batam, CBSA memasok seluruh kebutuhan kapal — dari provisi segar, suku cadang mesin, deck stores, hingga air bersih — dan mengirimkannya langsung ke kapal Anda, baik di dermaga maupun di anchorage. Layanan chandler kami adalah bagian dari layanan terintegrasi untuk memastikan kapal tetap siap berlayar.",
      en: "As a ship chandler in Batam, CBSA supplies all vessel needs — from fresh provisions, engine spares, deck stores, to fresh water — and delivers them directly to your vessel, whether at berth or anchorage. Our chandler services are part of an integrated offering that keeps your vessel voyage-ready.",
    },
    overview: [],
    features: [
      {
        title: { id: "Provisi & Perbekalan (Provision)", en: "Provision Supply" },
        description: {
          id: "Pasokan provisi segar, dry goods, dan perbekalan harian kapal sesuai kebutuhan kru.",
          en: "Fresh provisions, dry goods, and day-to-day supplies delivered to meet crew requirements.",
        },
      },
      {
        title: { id: "Suku Cadang & Spares", en: "Spare Parts & Spares" },
        description: {
          id: "Pengadaan suku cadang mesin dan peralatan kapal, termasuk pengiriman darurat.",
          en: "Sourcing of engine spare parts and vessel equipment, including emergency deliveries.",
        },
      },
      {
        title: { id: "Deck & Engine Stores", en: "Deck & Engine Stores" },
        description: {
          id: "Perlengkapan deck dan engine room untuk kebutuhan operasional kapal.",
          en: "Deck and engine room stores for vessel operational needs.",
        },
      },
      {
        title: { id: "Air Bersih & Bunkering", en: "Fresh Water & Bunkering" },
        description: {
          id: "Pasokan air bersih dan koordinasi pengisian bahan bakar kapal.",
          en: "Fresh water supply and coordination of vessel fuel bunkering.",
        },
      },
      {
        title: { id: "Pengiriman ke Anchorage", en: "Anchorage Delivery" },
        description: {
          id: "Pengiriman perbekalan langsung ke kapal di lokasi lego jangkar.",
          en: "Direct delivery of supplies to vessels at anchorage locations.",
        },
      },
    ],
    process: [
      {
        title: { id: "Penerimaan Order", en: "Order Received" },
        description: {
          id: "Terima daftar kebutuhan kapal melalui email, WhatsApp, atau telepon.",
          en: "Receive the vessel's requirements list via email, WhatsApp, or phone.",
        },
      },
      {
        title: { id: "Penawaran & Konfirmasi", en: "Quotation & Confirmation" },
        description: {
          id: "Kirim penawaran harga kompetitif dan konfirmasi ketersediaan barang.",
          en: "Send a competitive quotation and confirm item availability.",
        },
      },
      {
        title: { id: "Pengadaan & Pengepakan", en: "Sourcing & Packing" },
        description: {
          id: "Pengadaan barang dan pengepakan sesuai ketentuan kapal.",
          en: "Sourcing and packing of goods according to vessel requirements.",
        },
      },
      {
        title: { id: "Pengiriman ke Kapal", en: "Delivery to Vessel" },
        description: {
          id: "Pengiriman langsung ke dermaga atau anchorage dengan dokumen lengkap.",
          en: "Direct delivery to berth or anchorage with complete documentation.",
        },
      },
    ],
    whyBatam: [
      {
        title: { id: "Pusat Logistik Maritim", en: "Maritime Logistics Hub" },
        description: {
          id: "Batam adalah hub logistik maritim utama yang melayani kapal yang melintas Selat Malaka.",
          en: "Batam is a major maritime logistics hub serving vessels transiting the Malacca Strait.",
        },
      },
      {
        title: { id: "Dekat Anchorage", en: "Close to Anchorage" },
        description: {
          id: "Anchorage strategis di sekitar Batam memudahkan pengiriman perbekalan cepat.",
          en: "Strategic anchorages around Batam enable quick supply deliveries.",
        },
      },
      {
        title: { id: "Jaringan Pemasok", en: "Supplier Network" },
        description: {
          id: "Jaringan pemasok lokal yang luas untuk provisi segar dan suku cadang.",
          en: "Extensive local supplier network for fresh provisions and spare parts.",
        },
      },
      {
        title: { id: "Respon 24/7", en: "24/7 Response" },
        description: {
          id: "Tim chandler siaga kapan pun kapal Anda membutuhkan perbekalan.",
          en: "Chandler team on standby whenever your vessel needs supplies.",
        },
      },
    ],
    faq: [
      {
        question: {
          id: "Apa itu ship chandler?",
          en: "What is a ship chandler?",
        },
        answer: {
          id: "Ship chandler adalah pemasok yang menyediakan kebutuhan kapal seperti provisi, suku cadang, deck stores, dan perbekalan lainnya selama kapal berada di pelabuhan.",
          en: "A ship chandler supplies vessels with provisions, spare parts, deck stores, and other supplies while the vessel is in port.",
        },
      },
      {
        question: {
          id: "Apakah Anda mengirim perbekalan ke anchorage?",
          en: "Do you deliver supplies to anchorage?",
        },
        answer: {
          id: "Ya, kami mengirim perbekalan langsung ke kapal di dermaga maupun lokasi anchorage di sekitar Batam.",
          en: "Yes, we deliver supplies directly to vessels at berth and anchorage locations around Batam.",
        },
      },
      {
        question: {
          id: "Bisakah Anda mencari suku cadang darurat?",
          en: "Can you source urgent spare parts?",
        },
        answer: {
          id: "Ya, kami memiliki jaringan pemasok untuk pengadaan suku cadang darurat dengan prioritas tinggi.",
          en: "Yes, we have a supplier network for high-priority urgent spare parts sourcing.",
        },
      },
      {
        question: {
          id: "Apakah menyediakan bonded stores?",
          en: "Do you supply bonded stores?",
        },
        answer: {
          id: "Kami membantu pengurusan kebutuhan store kapal sesuai prosedur bea cukai yang berlaku.",
          en: "We assist with vessel stores requirements following applicable customs procedures.",
        },
      },
    ],
  },
  {
    slug: "marine-supply",
    keyword: "Marine Supply Batam",
    title: {
      id: "Marine Supply Batam",
      en: "Marine Supply Batam",
    },
    metaTitle: {
      id: "Marine Supply Batam | CBSA - Rantai Pasok Kapal",
      en: "Marine Supply Batam | CBSA - Vessel Supply Chain",
    },
    metaDescription: {
      id: "Layanan marine supply di Batam dari CBSA: pengadaan provisi, suku cadang, peralatan, dan logistik pasokan kapal dengan rantai pasok yang andal dan harga kompetitif.",
      en: "CBSA marine supply in Batam: sourcing of provisions, spare parts, equipment, and vessel supply logistics with a reliable supply chain and competitive pricing.",
    },
    heroSubtitle: {
      id: "Solusi rantai pasok maritim terpadu untuk kebutuhan pengadaan kapal di Batam dan sekitarnya.",
      en: "Integrated maritime supply chain solutions for vessel procurement needs in Batam and beyond.",
    },
    image: supplyOffshore,
    serving: servingAreas,
    related: ["ship-chandler", "offshore-support", "logistics-forwarding"],
    ctaTitle: {
      id: "Butuh Pasokan Maritim di Batam?",
      en: "Need Marine Supply in Batam?",
    },
    intro: {
      id: "CBSA menyediakan layanan marine supply yang mencakup pengadaan dan pengelolaan rantai pasok untuk kapal, rig, dan operasi lepas pantai. Kami mengelola koordinasi pemasok, kualitas barang, dan pengiriman tepat waktu sehingga kebutuhan kapal Anda selalu terpenuhi.",
      en: "CBSA provides marine supply services covering sourcing and supply chain management for vessels, rigs, and offshore operations. We manage supplier coordination, product quality, and on-time delivery so your vessel needs are always met.",
    },
    overview: [],
    features: [
      {
        title: { id: "Pengadaan Barang", en: "Goods Sourcing" },
        description: {
          id: "Pengadaan provisi, suku cadang, dan peralatan kapal dari pemasok terverifikasi.",
          en: "Sourcing provisions, spare parts, and vessel equipment from verified suppliers.",
        },
      },
      {
        title: { id: "Koordinasi Pemasok", en: "Supplier Coordination" },
        description: {
          id: "Manajemen hubungan dengan pemasok lokal dan internasional.",
          en: "Management of local and international supplier relationships.",
        },
      },
      {
        title: { id: "Logistik Pasokan", en: "Supply Logistics" },
        description: {
          id: "Pengiriman terkoordinasi ke dermaga, anchorage, atau lokasi lepas pantai.",
          en: "Coordinated delivery to berth, anchorage, or offshore locations.",
        },
      },
      {
        title: { id: "Kontrol Kualitas", en: "Quality Control" },
        description: {
          id: "Pemeriksaan kualitas dan kelengkapan barang sebelum pengiriman.",
          en: "Quality and completeness checks before delivery.",
        },
      },
    ],
    process: [
      {
        title: { id: "Analisis Kebutuhan", en: "Requirement Analysis" },
        description: {
          id: "Pahami spesifikasi dan kebutuhan pengadaan kapal Anda.",
          en: "Understand your vessel's procurement requirements and specifications.",
        },
      },
      {
        title: { id: "Pengadaan", en: "Sourcing" },
        description: {
          id: "Dapatkan penawaran terbaik dari jaringan pemasok terverifikasi.",
          en: "Obtain the best quotations from our network of verified suppliers.",
        },
      },
      {
        title: { id: "Pengecekan & Pengemasan", en: "Inspection & Packing" },
        description: {
          id: "Pemeriksaan kualitas dan pengemasan sesuai standar kapal.",
          en: "Quality inspection and packing to vessel standards.",
        },
      },
      {
        title: { id: "Pengiriman & Dokumentasi", en: "Delivery & Documentation" },
        description: {
          id: "Pengiriman tepat waktu disertai dokumen lengkap.",
          en: "On-time delivery accompanied by complete documentation.",
        },
      },
    ],
    whyBatam: [
      {
        title: { id: "Akses Pasar Regional", en: "Regional Market Access" },
        description: {
          id: "Batam memberi akses ke pasar maritim Singapura, Malaysia, dan Indonesia.",
          en: "Batam provides access to the maritime markets of Singapore, Malaysia, and Indonesia.",
        },
      },
      {
        title: { id: "Jalur Pelayaran Padat", en: "Busy Shipping Lane" },
        description: {
          id: "Lokasi di jalur pelayaran padat memastikan pasokan cepat bagi kapal yang transit.",
          en: "Located on busy shipping lanes ensuring rapid supply for transiting vessels.",
        },
      },
      {
        title: { id: "Infrastruktur Gudang", en: "Warehouse Infrastructure" },
        description: {
          id: "Dukungan fasilitas penyimpanan di sekitar pelabuhan Batam.",
          en: "Storage facility support around Batam ports.",
        },
      },
      {
        title: { id: "Harga Kompetitif", en: "Competitive Pricing" },
        description: {
          id: "Pengadaan dari sumber lokal yang efisien memberikan harga bersaing.",
          en: "Efficient local sourcing delivers competitive pricing.",
        },
      },
    ],
    faq: [
      {
        question: {
          id: "Bisakah Anda mencari suku cadang mendesak?",
          en: "Can you source urgent spare parts?",
        },
        answer: {
          id: "Ya, kami menangani pengadaan suku cadang mendesak dengan prioritas tinggi melalui jaringan pemasok kami.",
          en: "Yes, we handle urgent spare parts sourcing with high priority through our supplier network.",
        },
      },
      {
        question: {
          id: "Apakah Anda mengirim pasokan ke lepas pantai?",
          en: "Do you deliver supplies offshore?",
        },
        answer: {
          id: "Ya, kami mendukung pengiriman pasokan ke lokasi lepas pantai di sekitar Kepulauan Riau.",
          en: "Yes, we support supply deliveries to offshore locations around the Riau Islands.",
        },
      },
      {
        question: {
          id: "Bagaimana kontrol kualitas dilakukan?",
          en: "How is quality control handled?",
        },
        answer: {
          id: "Barang diperiksa kualitas dan kelengkapannya oleh tim kami sebelum dikirim ke kapal.",
          en: "Goods are inspected for quality and completeness by our team before delivery to the vessel.",
        },
      },
      {
        question: {
          id: "Apakah tersedia layanan konsolidasi pengiriman?",
          en: "Do you offer consolidated shipping services?",
        },
        answer: {
          id: "Ya, kami dapat menggabungkan pengiriman dari berbagai pemasok dalam satu kiriman terkoordinasi.",
          en: "Yes, we can consolidate deliveries from multiple suppliers into one coordinated shipment.",
        },
      },
    ],
  },
  {
    slug: "bunkering",
    keyword: "Bunkering Batam",
    title: {
      id: "Bunkering Batam",
      en: "Bunkering Batam",
    },
    metaTitle: {
      id: "Bunkering Batam | CBSA - Bunker Fuel Supply",
      en: "Bunkering Batam | CBSA - Bunker Fuel Supply",
    },
    metaDescription: {
      id: "Layanan bunkering di Batam dari CBSA: koordinasi pengisian bahan bakar kapal dengan pemasok berlisensi, verifikasi kuantitas dan kualitas, serta dokumentasi lengkap.",
      en: "CBSA bunkering in Batam: vessel fuel supply coordination with licensed suppliers, quantity and quality verification, and complete documentation.",
    },
    heroSubtitle: {
      id: "Koordinasi pasokan bunker fuel yang aman, akurat, dan terdokumentasi untuk kapal di Batam.",
      en: "Safe, accurate, and fully documented bunker fuel supply coordination for vessels in Batam.",
    },
    image: tanker,
    serving: servingAreas,
    related: ["ship-agency", "ship-chandler", "offshore-support"],
    ctaTitle: {
      id: "Butuh Bunkering di Batam?",
      en: "Need Bunkering in Batam?",
    },
    intro: {
      id: "CBSA mengoordinasikan pasokan bunker fuel untuk kapal Anda di Batam, bekerja sama dengan pemasok bahan bakar berlisensi. Kami mengelola verifikasi kuantitas dan kualitas, koordinasi dengan surveyor, serta dokumentasi lengkap untuk memastikan proses bunkering yang transparan dan efisien.",
      en: "CBSA coordinates bunker fuel supply for your vessel in Batam, working with licensed fuel suppliers. We manage quantity and quality verification, surveyor coordination, and complete documentation to ensure a transparent and efficient bunkering process.",
    },
    overview: [],
    features: [
      {
        title: { id: "Koordinasi Pemasok", en: "Supplier Coordination" },
        description: {
          id: "Bekerja sama dengan pemasok bahan bakar berlisensi di Batam.",
          en: "Working with licensed fuel suppliers in Batam.",
        },
      },
      {
        title: { id: "Verifikasi Kuantitas", en: "Quantity Verification" },
        description: {
          id: "Perhitungan dan verifikasi kuantitas bunker dengan metode yang akurat.",
          en: "Bunker quantity computation and verification using accurate methods.",
        },
      },
      {
        title: { id: "Kontrol Kualitas", en: "Quality Control" },
        description: {
          id: "Koordinasi pengambilan sampel dan analisis kualitas bahan bakar.",
          en: "Coordination of fuel sampling and quality analysis.",
        },
      },
      {
        title: { id: "Dokumentasi Lengkap", en: "Complete Documentation" },
        description: {
          id: "Penyediaan BDN dan dokumen bunkering yang lengkap.",
          en: "Provision of complete BDN (Bunker Delivery Note) and bunkering documents.",
        },
      },
    ],
    process: [
      {
        title: { id: "Permintaan & Penawaran", en: "Request & Quotation" },
        description: {
          id: "Terima kebutuhan jenis dan volume bahan bakar kapal Anda.",
          en: "Receive your vessel's fuel grade and volume requirements.",
        },
      },
      {
        title: { id: "Konfirmasi Pemasok", en: "Supplier Confirmation" },
        description: {
          id: "Konfirmasi ketersediaan dan harga dengan pemasok berlisensi.",
          en: "Confirm availability and pricing with licensed suppliers.",
        },
      },
      {
        title: { id: "Pelaksanaan Bunkering", en: "Bunkering Operation" },
        description: {
          id: "Koordinasi pelaksanaan pengisian bahan bakar sesuai prosedur keselamatan.",
          en: "Coordinate the fuel transfer following safety procedures.",
        },
      },
      {
        title: { id: "Verifikasi & Dokumentasi", en: "Verification & Documentation" },
        description: {
          id: "Verifikasi kuantitas/kualitas dan serahkan dokumen lengkap.",
          en: "Verify quantity/quality and hand over complete documentation.",
        },
      },
    ],
    whyBatam: [
      {
        title: { id: "Anchorage Strategis", en: "Strategic Anchorage" },
        description: {
          id: "Batam menawarkan anchorage untuk bunkering di jalur pelayaran Selat Singapura.",
          en: "Batam offers anchorages for bunkering along the Singapore Strait shipping lane.",
        },
      },
      {
        title: { id: "Alternatif Efisien", en: "Efficient Alternative" },
        description: {
          id: "Pilihan bunkering yang efisien bagi kapal yang tidak perlu masuk Singapura.",
          en: "An efficient bunkering option for vessels that need not enter Singapore.",
        },
      },
      {
        title: { id: "Dukungan STS", en: "STS Support" },
        description: {
          id: "Koordinasi ship-to-ship transfer bahan bakar di lokasi aman.",
          en: "Ship-to-ship fuel transfer coordination at safe locations.",
        },
      },
      {
        title: { id: "Layanan Terpadu", en: "Integrated Services" },
        description: {
          id: "Dapat dikombinasikan dengan clearance dan chandler dalam satu port call.",
          en: "Can be combined with clearance and chandler in a single port call.",
        },
      },
    ],
    faq: [
      {
        question: {
          id: "Apakah CBSA menyediakan bunker fuel?",
          en: "Does CBSA supply bunker fuel?",
        },
        answer: {
          id: "Ya, kami mengoordinasikan pasokan bunker fuel bekerja sama dengan pemasok bahan bakar berlisensi di Batam.",
          en: "Yes, we coordinate bunker fuel supply working with licensed fuel suppliers in Batam.",
        },
      },
      {
        question: {
          id: "Bagaimana kuantitas bunker diverifikasi?",
          en: "How is bunker quantity verified?",
        },
        answer: {
          id: "Kuantitas diverifikasi melalui perhitungan tanker sebelum dan sesudah, serta dapat didukung surveyor independen.",
          en: "Quantity is verified through before-and-after tank soundings, and can be supported by independent surveyors.",
        },
      },
      {
        question: {
          id: "Bisakah mengoordinasikan STS bunkering?",
          en: "Can you coordinate STS bunkering?",
        },
        answer: {
          id: "Ya, kami mengoordinasikan operasi ship-to-ship transfer bahan bakar di lokasi yang aman dan sesuai regulasi.",
          en: "Yes, we coordinate ship-to-ship fuel transfer operations at safe, regulation-compliant locations.",
        },
      },
      {
        question: {
          id: "Apakah tersedia dokumentasi bunkering?",
          en: "Is bunkering documentation provided?",
        },
        answer: {
          id: "Ya, kami menyediakan Bunker Delivery Note (BDN) dan dokumen pendukung lainnya.",
          en: "Yes, we provide the Bunker Delivery Note (BDN) and other supporting documents.",
        },
      },
    ],
  },
  {
    slug: "crew-manning",
    keyword: "Crew Change & Manning Batam",
    title: {
      id: "Crew Change & Manning Batam",
      en: "Crew Change & Manning Batam",
    },
    metaTitle: {
      id: "Crew Change & Manning Batam | CBSA - Husbandry",
      en: "Crew Change & Manning Batam | CBSA - Husbandry Services",
    },
    metaDescription: {
      id: "Layanan crew change, crew manning, dan husbandry di Batam dari CBSA: e-Visa/LOG, transportasi, akomodasi, pengawalan medis, serta perekrutan awak kapal bersertifikat STCW.",
      en: "CBSA crew change, crew manning, and husbandry services in Batam: e-Visa/LOG, transfers, accommodation, medical escorts, and STCW-certified seafarer recruitment.",
    },
    heroSubtitle: {
      id: "Pengelolaan awak kapal menyeluruh: pergantian kru, visa, akomodasi, transportasi, hingga perekrutan.",
      en: "Comprehensive crew management: crew changes, visas, accommodation, transportation, and recruitment.",
    },
    image: svc5,
    serving: servingAreas,
    related: ["ship-agency", "customs-clearance", "medical"],
    ctaTitle: {
      id: "Butuh Layanan Crew di Batam?",
      en: "Need Crew Services in Batam?",
    },
    intro: {
      id: "CBSA menyediakan layanan husbandry menyeluruh dan crew manning untuk kapal yang bersandar di Batam. Kami menangani pergantian kru (sign-on/sign-off), pengurusan e-Visa dan Letter of Guarantee (LOG), transportasi, akomodasi hotel, pengawalan medis, hingga perekrutan awak kapal bersertifikat.",
      en: "CBSA provides comprehensive husbandry and crew manning services for vessels calling at Batam. We handle crew changes (sign-on/sign-off), e-Visa and Letter of Guarantee (LOG) issuance, transportation, hotel accommodation, medical escorts, and certified seafarer recruitment.",
    },
    overview: [],
    features: [
      {
        title: { id: "Crew Change", en: "Crew Change" },
        description: {
          id: "Pengelolaan pergantian awak kapal sign-on dan sign-off yang lancar.",
          en: "Smooth sign-on and sign-off crew change management.",
        },
      },
      {
        title: { id: "e-Visa & LOG", en: "e-Visa & LOG" },
        description: {
          id: "Pengurusan e-Visa dan Letter of Guarantee untuk awak kapal asing.",
          en: "Issuance of e-Visas and Letters of Guarantee for foreign crew.",
        },
      },
      {
        title: { id: "Transportasi & Akomodasi", en: "Transport & Accommodation" },
        description: {
          id: "Penjemputan bandara/pelabuhan dan akomodasi hotel.",
          en: "Airport/port transfers and hotel accommodation.",
        },
      },
      {
        title: { id: "Pengawalan Medis", en: "Medical Escort" },
        description: {
          id: "Pengawalan medis dan penanganan kebutuhan kesehatan awak kapal.",
          en: "Medical escorts and handling of crew health needs.",
        },
      },
      {
        title: { id: "Rekrutmen Awak", en: "Crew Recruitment" },
        description: {
          id: "Rekrutmen dan pengelolaan sertifikasi awak kapal sesuai standar STCW.",
          en: "Recruitment and certification management for STCW-compliant seafarers.",
        },
      },
    ],
    process: [
      {
        title: { id: "Permintaan & Rencana", en: "Request & Planning" },
        description: {
          id: "Terima jadwal crew change dan kebutuhan awak kapal.",
          en: "Receive the crew change schedule and vessel crew requirements.",
        },
      },
      {
        title: { id: "Pengurusan Dokumen", en: "Document Processing" },
        description: {
          id: "Pengurusan visa, LOG, dan izin imigrasi awak kapal.",
          en: "Processing of crew visas, LOG, and immigration permits.",
        },
      },
      {
        title: { id: "Koordinasi Logistik", en: "Logistics Coordination" },
        description: {
          id: "Transportasi, akomodasi, dan kebutuhan darat awak kapal.",
          en: "Transportation, accommodation, and crew shore needs.",
        },
      },
      {
        title: { id: "Sign-on / Sign-off", en: "Sign-on / Sign-off" },
        description: {
          id: "Pendampingan proses naik/turun awak kapal hingga selesai.",
          en: "Assistance with crew embarkation/disembarkation until completion.",
        },
      },
    ],
    whyBatam: [
      {
        title: { id: "Hub Pergerakan Kru", en: "Crew Movement Hub" },
        description: {
          id: "Batam adalah titik pergantian kru yang efisien bagi kapal di Selat Singapura.",
          en: "Batam is an efficient crew change point for vessels in the Singapore Strait.",
        },
      },
      {
        title: { id: "Akses Bandara", en: "Airport Access" },
        description: {
          id: "Bandara Hang Nadim Batam terhubung langsung dengan Singapura dan Malaysia.",
          en: "Hang Nadim Airport Batam connects directly with Singapore and Malaysia.",
        },
      },
      {
        title: { id: "Prosedur Terbantu", en: "Assisted Procedures" },
        description: {
          id: "Koordinasi imigrasi yang berpengalaman mempercepat proses crew change.",
          en: "Experienced immigration coordination speeds up the crew change process.",
        },
      },
      {
        title: { id: "Dukungan Penuh", en: "Full Support" },
        description: {
          id: "Dukungan darat lengkap dari transportasi hingga akomodasi.",
          en: "Complete shore support from transportation to accommodation.",
        },
      },
    ],
    faq: [
      {
        question: {
          id: "Bagaimana penanganan crew change?",
          en: "How is the crew change process handled?",
        },
        answer: {
          id: "Kami mengelola seluruh proses termasuk visa, transportasi, akomodasi, dan pendampingan sign-on/sign-off.",
          en: "We manage the entire process including visas, transportation, accommodation, and sign-on/sign-off assistance.",
        },
      },
      {
        question: {
          id: "Apakah Anda mengurus visa awak kapal?",
          en: "Do you arrange crew visas?",
        },
        answer: {
          id: "Ya, kami mengurus e-Visa dan Letter of Guarantee (LOG) untuk awak kapal asing.",
          en: "Yes, we arrange e-Visas and Letters of Guarantee (LOG) for foreign crew members.",
        },
      },
      {
        question: {
          id: "Bisakah menangani evakuasi medis?",
          en: "Can you handle medical evacuations?",
        },
        answer: {
          id: "Ya, kami menyediakan pengawalan medis dan koordinasi rumah sakit untuk kebutuhan darurat awak kapal.",
          en: "Yes, we provide medical escorts and hospital coordination for crew emergencies.",
        },
      },
      {
        question: {
          id: "Bagaimana standar rekrutmen awak?",
          en: "What are your crew recruitment standards?",
        },
        answer: {
          id: "Kami melakukan seleksi dan pengelolaan sertifikasi awak kapal sesuai standar STCW internasional.",
          en: "We carry out selection and certification management of seafarers to international STCW standards.",
        },
      },
    ],
  },
  {
    slug: "customs-clearance",
    keyword: "Customs Clearance Vessel Batam",
    title: {
      id: "Customs Clearance Kapal Batam",
      en: "Customs Clearance Vessel Batam",
    },
    metaTitle: {
      id: "Customs Clearance Kapal Batam | CBSA - Bea Cukai & CIQP",
      en: "Customs Clearance Vessels Batam | CBSA - CIQP",
    },
    metaDescription: {
      id: "Jasa customs clearance kapal di Batam dari CBSA: pengurusan dokumen bea cukai, imigrasi, karantina, dan syahbandar (CIQP) untuk kapal asing dan domestik.",
      en: "CBSA customs clearance for vessels in Batam: processing of customs, immigration, quarantine, and port authority (CIQP) documents for foreign and domestic vessels.",
    },
    heroSubtitle: {
      id: "Pengurusan clearance dan dokumen bea cukai yang cepat dan patuh untuk kapal di Batam.",
      en: "Fast and compliant clearance and customs documentation for vessels in Batam.",
    },
    image: svc3,
    serving: servingAreas,
    related: ["ship-agency", "logistics-forwarding", "offshore-support"],
    ctaTitle: {
      id: "Butuh Clearance Kapal di Batam?",
      en: "Need Vessel Clearance in Batam?",
    },
    intro: {
      id: "CBSA menangani seluruh pengurusan clearance kapal di Batam, termasuk koordinasi dengan Syahbandar (KSOP), Bea Cukai, Imigrasi, dan Karantina. Tim kami berpengalaman mengelola formalitas CIQP untuk kapal asing dan domestik sehingga port call berjalan lancar dan patuh regulasi.",
      en: "CBSA handles all vessel clearance processing in Batam, including coordination with Port Authority (KSOP), Customs, Immigration, and Quarantine. Our experienced team manages CIQP formalities for foreign and domestic vessels so port calls run smoothly and compliantly.",
    },
    overview: [],
    features: [
      {
        title: { id: "Arrival / Departure Clearance", en: "Arrival / Departure Clearance" },
        description: {
          id: "Pengurusan dokumen kedatangan dan keberangkatan kapal.",
          en: "Processing of vessel arrival and departure documents.",
        },
      },
      {
        title: { id: "Koordinasi Bea Cukai", en: "Customs Coordination" },
        description: {
          id: "Pengurusan dokumen dan pemeriksaan bea cukai.",
          en: "Handling of customs documentation and inspections.",
        },
      },
      {
        title: { id: "Imigrasi & Karantina", en: "Immigration & Quarantine" },
        description: {
          id: "Koordinasi imigrasi awak kapal dan prosedur karantina.",
          en: "Crew immigration coordination and quarantine procedures.",
        },
      },
      {
        title: { id: "Bill of Lading", en: "Bill of Lading Arrangement" },
        description: {
          id: "Pengurusan dan koordinasi dokumen bill of lading.",
          en: "Drafting and processing of Bill of Lading documents.",
        },
      },
      {
        title: { id: "Surveyor Coordination", en: "Surveyor Coordination" },
        description: {
          id: "Koordinasi surveyor untuk inspeksi kapal dan kargo.",
          en: "Arranging surveyors for vessel and cargo inspections.",
        },
      },
    ],
    process: [
      {
        title: { id: "Persiapan Dokumen", en: "Document Preparation" },
        description: {
          id: "Kumpulkan dan periksa kelengkapan dokumen kapal dan muatan.",
          en: "Collect and verify the completeness of vessel and cargo documents.",
        },
      },
      {
        title: { id: "Pengajuan Clearance", en: "Clearance Submission" },
        description: {
          id: "Pengajuan dokumen ke otoritas pelabuhan dan bea cukai.",
          en: "Submission of documents to port and customs authorities.",
        },
      },
      {
        title: { id: "Pemeriksaan & Koordinasi", en: "Inspection & Coordination" },
        description: {
          id: "Koordinasi pemeriksaan kapal dan muatan dengan otoritas.",
          en: "Coordination of vessel and cargo inspections with authorities.",
        },
      },
      {
        title: { id: "Penyelesaian", en: "Completion" },
        description: {
          id: "Penerbitan dokumen clearance dan pelaporan kepada principal.",
          en: "Issuance of clearance documents and reporting to the principal.",
        },
      },
    ],
    whyBatam: [
      {
        title: { id: "Prosedur Terpusat", en: "Centralized Procedures" },
        description: {
          id: "Otoritas pelabuhan dan bea cukai terkoordinasi di Batam.",
          en: "Port and customs authorities are well-coordinated in Batam.",
        },
      },
      {
        title: { id: "Kecepatan Proses", en: "Processing Speed" },
        description: {
          id: "Pengalaman lokal mempercepat proses clearance kapal.",
          en: "Local experience accelerates the vessel clearance process.",
        },
      },
      {
        title: { id: "Kepatuhan CIQP", en: "CIQP Compliance" },
        description: {
          id: "Pemahaman penuh formalitas CIQP untuk kapal asing.",
          en: "Full understanding of CIQP formalities for foreign vessels.",
        },
      },
      {
        title: { id: "Layanan Terpadu", en: "Integrated Service" },
        description: {
          id: "Clearance digabung dengan husbandry dan logistik dalam satu koordinasi.",
          en: "Clearance combined with husbandry and logistics under one coordination.",
        },
      },
    ],
    faq: [
      {
        question: {
          id: "Berapa lama proses customs clearance?",
          en: "How long does customs clearance take?",
        },
        answer: {
          id: "Proses clearance biasanya selesai dalam 1-2 hari kerja tergantung kelengkapan dokumen.",
          en: "Clearance is usually completed within 1-2 working days depending on document completeness.",
        },
      },
      {
        question: {
          id: "Dokumen apa yang diperlukan?",
          en: "What documents are required?",
        },
        answer: {
          id: "Dokumen utama meliputi manifes, sertifikat kapal, dan dokumen muatan. Tim kami membantu memverifikasi kelengkapannya.",
          en: "Key documents include the manifest, vessel certificates, and cargo documents. Our team helps verify completeness.",
        },
      },
      {
        question: {
          id: "Apakah Anda menangani karantina?",
          en: "Do you handle quarantine?",
        },
        answer: {
          id: "Ya, kami mengoordinasikan prosedur karantina untuk kapal dan awak sesuai regulasi.",
          en: "Yes, we coordinate quarantine procedures for vessels and crew as per regulations.",
        },
      },
      {
        question: {
          id: "Bisakah mengatur forwarding kargo?",
          en: "Can you arrange cargo forwarding?",
        },
        answer: {
          id: "Ya, kami terintegrasi dengan layanan logistik dan forwarding untuk kebutuhan kargo.",
          en: "Yes, we are integrated with logistics and forwarding services for cargo needs.",
        },
      },
    ],
  },
  {
    slug: "offshore-support",
    keyword: "Offshore Marine Support Batam",
    title: {
      id: "Offshore Support Batam",
      en: "Offshore Support Batam",
    },
    metaTitle: {
      id: "Offshore Support Batam | CBSA - Dukungan Lepas Pantai",
      en: "Offshore Support Batam | CBSA - Offshore Marine Support",
    },
    metaDescription: {
      id: "Layanan offshore support di Batam dari CBSA: dukungan kapal lepas pantai (OSV), logistik offshore, ship-to-ship transshipment, rig lay-up, dan dry-docking.",
      en: "CBSA offshore support in Batam: offshore support vessel coordination, offshore logistics, ship-to-ship transshipment, rig lay-up, and dry-docking support.",
    },
    heroSubtitle: {
      id: "Dukungan operasional lepas pantai untuk kapal pendukung, rig, dan instalasi minyak & gas.",
      en: "Offshore operational support for support vessels, rigs, and oil & gas installations.",
    },
    image: svc4,
    serving: servingAreas,
    related: ["marine-supply", "bunkering", "logistics-forwarding"],
    ctaTitle: {
      id: "Butuh Dukungan Offshore di Batam?",
      en: "Need Offshore Support in Batam?",
    },
    intro: {
      id: "CBSA menyediakan dukungan operasional lepas pantai termasuk koordinasi kapal pendukung (OSV), logistik offshore, dan pengurusan dokumen. Kami juga mendukung kegiatan ship-to-ship transshipment, rig lay-up, dan dry-docking/new building di galangan sekitar Batam.",
      en: "CBSA provides offshore operational support including support vessel (OSV) coordination, offshore logistics, and document processing. We also support ship-to-ship transshipment, rig lay-up, and dry-docking/new building at shipyards around Batam.",
    },
    overview: [],
    features: [
      {
        title: { id: "Koordinasi OSV", en: "OSV Coordination" },
        description: {
          id: "Dukungan koordinasi untuk kapal pendukung lepas pantai.",
          en: "Coordination support for offshore support vessels.",
        },
      },
      {
        title: { id: "Logistik Offshore", en: "Offshore Logistics" },
        description: {
          id: "Pengiriman logistik ke instalasi dan kapal lepas pantai.",
          en: "Logistics delivery to offshore installations and vessels.",
        },
      },
      {
        title: { id: "Ship-to-Ship Transshipment", en: "Ship-to-Ship Transshipment" },
        description: {
          id: "Koordinasi dan persetujuan operasi STS di lokasi aman.",
          en: "Coordination and approval of STS operations at safe locations.",
        },
      },
      {
        title: { id: "Rig / Ship Lay Up", en: "Rig / Ship Lay Up" },
        description: {
          id: "Dukungan pengurusan lay-up kapal dan rig.",
          en: "Support for vessel and rig lay-up management.",
        },
      },
      {
        title: { id: "Dry-Docking & New Building", en: "Dry-Docking & New Building" },
        description: {
          id: "Dukungan dokumen dan teknis di galangan kapal.",
          en: "Documentation and technical support at shipyards.",
        },
      },
    ],
    process: [
      {
        title: { id: "Permintaan Operasi", en: "Operation Request" },
        description: {
          id: "Terima kebutuhan dukungan offshore dari principal atau charterer.",
          en: "Receive offshore support requirements from principal or charterer.",
        },
      },
      {
        title: { id: "Koordinasi Sumber Daya", en: "Resource Coordination" },
        description: {
          id: "Koordinasi kapal pendukung, pemasok, dan otoritas terkait.",
          en: "Coordination of support vessels, suppliers, and relevant authorities.",
        },
      },
      {
        title: { id: "Pelaksanaan Operasi", en: "Operation Execution" },
        description: {
          id: "Dukungan lapangan dan pemantauan selama operasi berlangsung.",
          en: "Field support and monitoring throughout the operation.",
        },
      },
      {
        title: { id: "Pelaporan", en: "Reporting" },
        description: {
          id: "Laporan lengkap kegiatan dan dokumentasi kepada principal.",
          en: "Complete activity reports and documentation to the principal.",
        },
      },
    ],
    whyBatam: [
      {
        title: { id: "Dekat Wilayah Offshore", en: "Close to Offshore Areas" },
        description: {
          id: "Batam dekat dengan wilayah operasi lepas pantai Natuna dan sekitarnya.",
          en: "Batam is close to offshore operating areas such as Natuna and beyond.",
        },
      },
      {
        title: { id: "Fasilitas Galangan", en: "Shipyard Facilities" },
        description: {
          id: "Galangan kapal di Batam mendukung dry-docking dan perbaikan.",
          en: "Batam shipyards support dry-docking and repairs.",
        },
      },
      {
        title: { id: "Hub Logistik", en: "Logistics Hub" },
        description: {
          id: "Infrastruktur logistik mendukung pengiriman pasokan offshore.",
          en: "Logistics infrastructure supports offshore supply deliveries.",
        },
      },
      {
        title: { id: "Koordinasi Terpadu", en: "Integrated Coordination" },
        description: {
          id: "Koordinasi otoritas pelabuhan dan lepas pantai dalam satu tim.",
          en: "Port and offshore authority coordination within one team.",
        },
      },
    ],
    faq: [
      {
        question: {
          id: "Apakah Anda mendukung kapal OSV?",
          en: "Do you support offshore support vessels (OSV)?",
        },
        answer: {
          id: "Ya, kami menyediakan dukungan keagenan dan logistik untuk OSV yang beroperasi dari Batam.",
          en: "Yes, we provide agency and logistics support for OSVs operating out of Batam.",
        },
      },
      {
        question: {
          id: "Bisakah Anda mengatur STS transshipment?",
          en: "Can you arrange STS transshipment?",
        },
        answer: {
          id: "Ya, kami mengoordinasikan operasi ship-to-ship di lokasi yang aman dan sesuai regulasi.",
          en: "Yes, we coordinate ship-to-ship operations at safe, regulation-compliant locations.",
        },
      },
      {
        question: {
          id: "Apakah mendukung rig lay-up?",
          en: "Do you support rig lay-up?",
        },
        answer: {
          id: "Ya, kami membantu pengurusan lay-up kapal dan rig termasuk izin anchorage.",
          en: "Yes, we assist vessel and rig lay-up including anchorage permits.",
        },
      },
      {
        question: {
          id: "Bagaimana penanganan darurat offshore?",
          en: "How are offshore emergencies handled?",
        },
        answer: {
          id: "Tim 24/7 kami siap mendukung situasi darurat termasuk medevac dan logistik mendesak.",
          en: "Our 24/7 team is ready to support emergencies including medevac and urgent logistics.",
        },
      },
    ],
  },
  {
    slug: "logistics-forwarding",
    keyword: "Logistics & Forwarding Batam",
    title: {
      id: "Logistik & Forwarding Batam",
      en: "Logistics & Forwarding Batam",
    },
    metaTitle: {
      id: "Logistik & Forwarding Batam | CBSA - Freight Forwarding",
      en: "Logistics & Forwarding Batam | CBSA - Freight Forwarding",
    },
    metaDescription: {
      id: "Layanan logistik, freight forwarding, dan customs di Batam dari CBSA: pengurusan kargo maritim, pergudangan, distribusi spare part, dan koordinasi bea cukai terintegrasi.",
      en: "CBSA logistics, freight forwarding, and customs services in Batam: maritime cargo handling, warehousing, spare parts distribution, and integrated customs coordination.",
    },
    heroSubtitle: {
      id: "Solusi logistik laut dan darat yang terintegrasi termasuk pengurusan bea cukai di Batam.",
      en: "Integrated sea and land logistics solutions including customs handling in Batam.",
    },
    image: servicesHero,
    serving: servingAreas,
    related: ["customs-clearance", "ship-agency", "marine-supply"],
    ctaTitle: {
      id: "Butuh Layanan Logistik di Batam?",
      en: "Need Logistics Services in Batam?",
    },
    intro: {
      id: "CBSA menyediakan layanan logistik, forwarding, dan pengurusan bea cukai yang terintegrasi. Kami menangani pengurusan kargo maritim, pergudangan, distribusi spare part kapal, dan koordinasi dokumen kargo sehingga rantai pasok Anda berjalan lancar dari pelabuhan hingga tujuan akhir.",
      en: "CBSA provides integrated logistics, forwarding, and customs handling services. We manage maritime cargo processing, warehousing, spare parts distribution, and cargo documentation coordination so your supply chain runs smoothly from port to final destination.",
    },
    overview: [],
    features: [
      {
        title: { id: "Freight Forwarding", en: "Freight Forwarding" },
        description: {
          id: "Pengurusan pengiriman kargo laut dan darat end-to-end.",
          en: "End-to-end sea and land freight forwarding.",
        },
      },
      {
        title: { id: "Pergudangan", en: "Warehousing" },
        description: {
          id: "Koordinasi penyimpanan barang dan kargo di fasilitas sekitar pelabuhan.",
          en: "Storage coordination for goods and cargo at facilities near the port.",
        },
      },
      {
        title: { id: "Distribusi Spare Part", en: "Spare Parts Distribution" },
        description: {
          id: "Distribusi suku cadang kapal ke dermaga atau anchorage.",
          en: "Distribution of vessel spare parts to berth or anchorage.",
        },
      },
      {
        title: { id: "Customs Brokerage", en: "Customs Brokerage" },
        description: {
          id: "Pengurusan dokumen dan deklarasi bea cukai kargo.",
          en: "Handling of cargo customs documents and declarations.",
        },
      },
      {
        title: { id: "Vessel / Cargo Pre-Planning", en: "Vessel / Cargo Pre-Planning" },
        description: {
          id: "Perencanaan awal kunjungan kapal dan penanganan kargo.",
          en: "Proactive vessel and cargo pre-planning for efficiency.",
        },
      },
    ],
    process: [
      {
        title: { id: "Konsultasi & Perencanaan", en: "Consultation & Planning" },
        description: {
          id: "Analisis kebutuhan kargo dan rute pengiriman terbaik.",
          en: "Analyze cargo requirements and the best shipping routes.",
        },
      },
      {
        title: { id: "Pengurusan Dokumen", en: "Documentation" },
        description: {
          id: "Pengurusan dokumen kargo dan deklarasi bea cukai.",
          en: "Handling of cargo documents and customs declarations.",
        },
      },
      {
        title: { id: "Pelaksanaan Pengiriman", en: "Shipment Execution" },
        description: {
          id: "Koordinasi pengangkutan laut dan darat hingga tujuan.",
          en: "Coordination of sea and land transport to destination.",
        },
      },
      {
        title: { id: "Pelacakan & Laporan", en: "Tracking & Reporting" },
        description: {
          id: "Pemantauan pengiriman dan pelaporan kepada klien.",
          en: "Shipment tracking and reporting to the client.",
        },
      },
    ],
    whyBatam: [
      {
        title: { id: "Pintu Masuk Kepulauan Riau", en: "Gateway to Riau Islands" },
        description: {
          id: "Batam adalah pintu masuk logistik utama Kepulauan Riau.",
          en: "Batam is the main logistics gateway of the Riau Islands.",
        },
      },
      {
        title: { id: "Koneksi Regional", en: "Regional Connectivity" },
        description: {
          id: "Terhubung langsung dengan Singapura, Malaysia, dan pelabuhan utama Indonesia.",
          en: "Directly connected to Singapore, Malaysia, and major Indonesian ports.",
        },
      },
      {
        title: { id: "Infrastruktur Pelabuhan", en: "Port Infrastructure" },
        description: {
          id: "Terminal peti kemas dan kargo curah tersedia di Batam.",
          en: "Container and cargo terminals are available in Batam.",
        },
      },
      {
        title: { id: "Integrasi Layanan", en: "Service Integration" },
        description: {
          id: "Logistik terintegrasi dengan keagenan kapal dan customs dalam satu tim.",
          en: "Logistics integrated with ship agency and customs in one team.",
        },
      },
    ],
    faq: [
      {
        question: {
          id: "Apakah Anda menangani kargo impor/ekspor?",
          en: "Do you handle import/export cargo?",
        },
        answer: {
          id: "Ya, kami menangani pengurusan kargo impor dan ekspor termasuk dokumen dan bea cukai.",
          en: "Yes, we handle import and export cargo processing including documentation and customs.",
        },
      },
      {
        question: {
          id: "Bisakah mengatur penyimpanan barang?",
          en: "Can you arrange goods storage?",
        },
        answer: {
          id: "Ya, kami mengoordinasikan pergudangan di fasilitas sekitar pelabuhan Batam.",
          en: "Yes, we coordinate warehousing at facilities around Batam ports.",
        },
      },
      {
        question: {
          id: "Apakah tersedia layanan door-to-door?",
          en: "Is door-to-door service available?",
        },
        answer: {
          id: "Ya, kami menyediakan layanan pengiriman door-to-door dengan koordinasi pengangkutan laut dan darat.",
          en: "Yes, we provide door-to-door delivery with coordinated sea and land transport.",
        },
      },
      {
        question: {
          id: "Bagaimana dokumentasi kargo ditangani?",
          en: "How is cargo documentation handled?",
        },
        answer: {
          id: "Kami mengurus bill of lading, dokumen bea cukai, dan dokumen kargo lainnya secara lengkap.",
          en: "We manage bills of lading, customs documents, and other cargo documentation completely.",
        },
      },
    ],
  },
];
