/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";

const LanguageContext = createContext();

export const translations = {
  id: {
    // Nav
    nav: {
      home: "Beranda",
      about: "Tentang Kami",
      services: "Layanan",
      industries: "Industri",
      contact: "Kontak",
      contactBtn: "Hubungi Kami",
    },
    // Common
    common: {
      language: "Bahasa",
      indonesian: "Indonesia",
      english: "English",
      consultNow: "Konsultasi Sekarang",
      exploreServices: "Jelajahi Layanan",
      learnMore: "Pelajari Selengkapnya",
      getQuote: "Minta Penawaran",
      downloadProfile: "Unduh Profil Perusahaan",
      sendMessage: "Kirim Pesan",
      readMore: "Baca Selengkapnya",
      backToTop: "Ke Atas",
      allRightsReserved: "Hak Cipta Dilindungi.",
      privacyPolicy: "Kebijakan Privasi",
      termsConditions: "Syarat & Ketentuan",
      quickHelp: "Bantuan Cepat",
      chatWhatsapp: "Chat WhatsApp",
      sendEmail: "Kirim Email",
      contactInfo: "Informasi Kontak",
      operatingHours: "24/7 Layanan Operasional Maritim",
    },
    // Hero
    hero: {
      badge: "Mitra Maritim & Pelabuhan Terpercaya",
      titleLine1: "Solusi Keagenan Kapal &",
      titleLine2: "Logistik Maritim Terpadu",
      subtitle:
        "PT. Chantika Bahari Sejahtera Abadi (CBSA) menyediakan layanan ship agency, ship chandler, bunkering, dan dukungan lepas pantai berstandar tinggi di Batam dan sekitarnya.",
      ctaPrimary: "Hubungi Tim Kami",
      ctaSecondary: "Lihat Layanan Kami",
      stat1: "Pengalaman Maritim",
      stat1Val: "10+ Tahun",
      stat2: "Layanan 24/7",
      stat2Val: "Responsif & Siap Siap",
      stat3: "Operasi Sukses",
      stat3Val: "500+ Kapal",
    },
    // About
    about: {
      tag: "Tentang CBSA",
      title: "Dedikasi Kepemimpinan Maritim & Layanan Profesional",
      desc1:
        "PT. Chantika Bahari Sejahtera Abadi (CBSA) adalah perusahaan keagenan kapal independen terkemuka yang berpusat di Batam, Kepulauan Riau.",
      desc2:
        "Didirikan oleh mantan pelaut berpengalaman, CBSA memahami seluk-beluk dinamika pelabuhan, regulasi lokal, serta urgensi waktu dalam operasional maritim.",
      visionTitle: "Visi Kami",
      visionDesc:
        "Menjadi mitra keagenan kapal dan logistik maritim paling terpercaya dan efisien di Asia Tenggara.",
      missionTitle: "Misi Kami",
      missionDesc:
        "Memberikan pelayanan prima 24/7 dengan transparansi penuh, kepatuhan keselamatan, dan integrasi operasional yang menguntungkan klien.",
    },
    // Services
    services: {
      tag: "Layanan Utama",
      title: "Solusi Lengkap Kebutuhan Pelayaran Anda",
      subtitle:
        "Kami menangani seluruh kebutuhan kapal, awak, dan kargo dengan ketepatan waktu dan efisiensi tinggi.",
      s1Title: "Ship Agency & Port Services",
      s1Desc:
        "Penanganan clearance masuk/keluar, keagenan kapal penuh, serta koordinasi otoritas pelabuhan secara cepat dan patuh hukum.",
      s2Title: "Ship Chandler & Bunkering",
      s2Desc:
        "Pasokan perbekalan kapal (provisi, suku cadang, air bersih) dan pengisian bahan bakar (bunker) berkualitas tinggi.",
      s3Title: "Logistics & Customs Clearance",
      s3Desc:
        "Pengurusan dokumen bea cukai, kargo logistik maritim, pergudangan, dan distribusi spare part kapal.",
      s4Title: "Offshore Support & Towing",
      s4Desc:
        "Dukungan operasional kapal lepas pantai, penyediaan tugboat, barge, serta penyewaan peralatan pendukung maritim.",
      s5Title: "Husbandry & Crew Services",
      s5Desc:
        "Layanan penggantian kru (crew change), pengurusan visa, medis emergency, akomodasi, dan transportasi darat/laut.",
      s6Title: "Crew Manning & Management",
      s6Desc:
        "Perekrutan, seleksi, dan pengelolaan sertifikasi awak kapal profesional sesuai standar STCW internasional.",
    },
    // Founder
    founder: {
      tag: "Pernyataan Pendiri",
      title: "Navigasi dengan Kepemimpinan & Integritas",
      quote:
        "Membangun perusahaan keagenan kapal bukan sekadar bisnis bagi saya — ini adalah dedikasi seumur hidup. Berawal dari karier sebagai pelaut, saya memahami pentingnya efisiensi dan keandalan dalam operasi pelabuhan. Saya mendirikan CBSA untuk membawa perspektif seorang Kapten ke sektor jasa maritim di Batam. Kami tidak hanya mengurus kapal — kami menavigasi tantangan dan membangun kemitraan jangka panjang.",
      name: "Capt. Founder & CEO",
      role: "Direktur Utama PT. Chantika Bahari Sejahtera Abadi",
    },
    // Vessel Types & Industries
    industries: {
      tag: "Industri & Kapal",
      title: "Jenis Kapal Yang Kami Melayani",
      subtitle:
        "Pengalaman kami mencakup berbagai jenis armada dan sektor maritim industri.",
      v1: "Chemical & Oil Tanker",
      v2: "Dry Bulk Carrier",
      v3: "Tugboat & Barge",
      v4: "Heavy Lift & Project Cargo",
      v5: "Offshore Support Vessel (OSV)",
      v6: "Kapal Pesiar & Passenger Ship",
      v7: "Kapal Gas / LNG",
    },
    // Why Choose Us / Stats
    whyUs: {
      tag: "Mengapa Memilih CBSA",
      title: "Keunggulan Operasional & Pengetahuan Lokal",
      f1Title: "Akses Pelabuhan Batam 24/7",
      f1Desc: "Tim lapangan siap bertindak cepat kapan saja kapal Anda tiba.",
      f2Title: "Jaringan Otoritas Kuat",
      f2Desc: "Hubungan harmonis dengan KSOP, Imigrasi, Bea Cukai, dan Pelindo.",
      f3Title: "Penghematan Biaya Operasional",
      f3Desc: "Perencanaan port disbursement yang transparan dan kompetitif.",
      f4Title: "Standar Keselamatan Internasional",
      f4Desc: "Sertifikasi dan kepatuhan penuh pada regulasi maritim global.",
    },
    // FAQ
    faq: {
      title: "Pertanyaan yang Sering Diajukan (FAQ)",
      q1: "Apa saja layanan utama CBSA?",
      a1: "Kami menyediakan ship agency, ship chandler & bunkering, logistics & customs clearance, offshore support, husbandry services, dan crew manning.",
      q2: "Di mana lokasi operasional CBSA?",
      a2: "Kami berlokasi di Batu Ampar, Batam, Indonesia dan melayani seluruh pelabuhan serta terminal perairan di Kepulauan Riau.",
      q3: "Apakah CBSA melayani 24 jam?",
      a3: "Ya, tim kami siap membantu Anda 24 jam sehari, 7 hari seminggu untuk kebutuhan operasional maupun kondisi darurat.",
      q4: "Bagaimana cara meminta penawaran jasa (PDA)?",
      a4: "Anda dapat menghubungi kami langsung melalui WhatsApp atau email dengan melampirkan spesifikasi kapal dan rencana pelabuhan.",
    },
    // Contact Page / Form
    contact: {
      tag: "Hubungi Kami",
      title: "Siap Membantu Kebutuhan Kapal Anda",
      desc: "Isi formulir di bawah ini atau hubungi tim operasional kami secara langsung.",
      formName: "Nama Lengkap",
      formEmail: "Alamat Email",
      formPhone: "Nomor Telepon / WA",
      formSubject: "Subjek / Jenis Kapal",
      formMessage: "Pesan atau Detail Permintaan",
      submitBtn: "Kirim Pesan Sekarang",
      successMsg: "Pesan Anda berhasil terkirim! Tim kami akan segera menghubungi Anda.",
    },
    // Legal
    legal: {
      privacyPolicy: {
        title: "Kebijakan Privasi",
        lastUpdated: "Terakhir Diperbarui: 2026",
        sections: [
          {
            heading: "Pengumpulan Informasi",
            content:
              "Kami mengumpulkan informasi pribadi yang Anda berikan secara sukarela melalui formulir kontak di situs web ini, seperti nama, alamat email, nomor telepon, dan rincian pesan untuk keperluan layanan keagenan kapal.",
          },
          {
            heading: "Penggunaan Informasi",
            content:
              "Informasi yang dikumpulkan hanya digunakan untuk merespons permintaan Anda, menyediakan layanan keagenan maritim, dan meningkatkan kualitas komunikasi layanan kami. Kami tidak menjual atau membagikan data Anda kepada pihak ketiga.",
          },
          {
            heading: "Keamanan Data",
            content:
              "PT. Chantika Bahari Sejahtera Abadi berkomitmen untuk menjaga keamanan data pribadi Anda dengan menerapkan langkah-langkah teknis dan organisasional yang tepat.",
          },
        ],
      },
      termsConditions: {
        title: "Syarat & Ketentuan",
        lastUpdated: "Terakhir Diperbarui: 2026",
        sections: [
          {
            heading: "Ketentuan Umum",
            content:
              "Dengan mengakses dan menggunakan situs web PT. Chantika Bahari Sejahtera Abadi, Anda menyetujui untuk terikat oleh syarat dan ketentuan yang berlaku di situs ini.",
          },
          {
            heading: "Hak Kekayaan Intelektual",
            content:
              "Seluruh konten, termasuk namun tidak terbatas pada teks, logo, gambar, dan desain grafis yang terdapat dalam situs web ini adalah milik PT. Chantika Bahari Sejahtera Abadi dan dilindungi oleh undang-undang hak cipta.",
          },
          {
            heading: "Batasan Tanggung Jawab",
            content:
              "Informasi di situs web ini disediakan untuk tujuan informasi umum. Kami berusaha menjaga keakuratan data, namun tidak bertanggung jawab atas kerugian akibat penggunaan informasi di situs ini tanpa konfirmasi langsung.",
          },
        ],
      },
    },
  },
  en: {
    // Nav
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      industries: "Industries",
      contact: "Contact",
      contactBtn: "Contact Us",
    },
    // Common
    common: {
      language: "Language",
      indonesian: "Indonesia",
      english: "English",
      consultNow: "Consult Now",
      exploreServices: "Explore Services",
      learnMore: "Learn More",
      getQuote: "Get a Quote",
      downloadProfile: "Download Profile",
      sendMessage: "Send Message",
      readMore: "Read More",
      backToTop: "Back to Top",
      allRightsReserved: "All Rights Reserved.",
      privacyPolicy: "Privacy Policy",
      termsConditions: "Terms & Conditions",
      quickHelp: "Quick Assistance",
      chatWhatsapp: "WhatsApp Chat",
      sendEmail: "Send Email",
      contactInfo: "Contact Information",
      operatingHours: "24/7 Maritime Operations Support",
    },
    // Hero
    hero: {
      badge: "Trusted Maritime & Port Partner",
      titleLine1: "Integrated Ship Agency &",
      titleLine2: "Maritime Logistics Solutions",
      subtitle:
        "PT. Chantika Bahari Sejahtera Abadi (CBSA) provides top-tier ship agency, ship chandler, bunkering, and offshore support services in Batam and surrounding waters.",
      ctaPrimary: "Contact Our Team",
      ctaSecondary: "View Our Services",
      stat1: "Maritime Experience",
      stat1Val: "10+ Years",
      stat2: "24/7 Support",
      stat2Val: "Fast & Responsive",
      stat3: "Successful Operations",
      stat3Val: "500+ Vessels",
    },
    // About
    about: {
      tag: "About CBSA",
      title: "Maritime Leadership & Professional Services",
      desc1:
        "PT. Chantika Bahari Sejahtera Abadi (CBSA) is a leading independent ship agency headquartered in Batam, Riau Islands, Indonesia.",
      desc2:
        "Founded by seasoned seafarers, CBSA thoroughly understands port dynamics, local regulations, and the critical importance of time in maritime operations.",
      visionTitle: "Our Vision",
      visionDesc:
        "To become the most trusted and efficient ship agency and maritime logistics partner in Southeast Asia.",
      missionTitle: "Our Mission",
      missionDesc:
        "Delivering 24/7 excellence through complete transparency, strict safety compliance, and operational efficiency that empowers our clients.",
    },
    // Services
    services: {
      tag: "Core Services",
      title: "Comprehensive Solutions for All Shipping Needs",
      subtitle:
        "We handle every aspect of vessel, crew, and cargo requirements with promptness and high efficiency.",
      s1Title: "Ship Agency & Port Services",
      s1Desc:
        "Fast in/out clearance, full vessel representation, and seamless port authority coordination.",
      s2Title: "Ship Chandler & Bunkering",
      s2Desc:
        "High-quality vessel provisions, spare parts supply, fresh water delivery, and fuel bunkering services.",
      s3Title: "Logistics & Customs Clearance",
      s3Desc:
        "Customs documentation handling, maritime cargo logistics, warehousing, and spare parts distribution.",
      s4Title: "Offshore Support & Towing",
      s4Desc:
        "Offshore vessel operational support, tugboat & barge supply, and maritime support equipment rental.",
      s5Title: "Husbandry & Crew Services",
      s5Desc:
        "Crew change management, visa handling, emergency medical support, accommodation, and land/sea transport.",
      s6Title: "Crew Manning & Management",
      s6Desc:
        "Recruitment, selection, and certification management for professional seafarers adhering to STCW standards.",
    },
    // Founder
    founder: {
      tag: "Founder Statement",
      title: "Navigating with Leadership & Integrity",
      quote:
        "Building a ship agency is not just a business for me — it is a lifelong passion. Starting as a seafarer, I understand the paramount importance of efficiency and reliability in port operations. I founded CBSA to bring a Captain's perspective to Batam's maritime sector. We don't just attend vessels — we navigate challenges and forge long-term partnerships.",
      name: "Capt. Founder & CEO",
      role: "Managing Director of PT. Chantika Bahari Sejahtera Abadi",
    },
    // Vessel Types & Industries
    industries: {
      tag: "Industries & Vessels",
      title: "Vessel Types We Serve",
      subtitle:
        "Our operational experience spans across various fleet types and maritime industry sectors.",
      v1: "Chemical & Oil Tanker",
      v2: "Dry Bulk Carrier",
      v3: "Tugboat & Barge",
      v4: "Heavy Lift & Project Cargo",
      v5: "Offshore Support Vessel (OSV)",
      v6: "Cruise & Passenger Ship",
      v7: "LNG",
    },
    // Why Choose Us / Stats
    whyUs: {
      tag: "Why Choose CBSA",
      title: "Operational Excellence & Local Expertise",
      f1Title: "24/7 Batam Port Access",
      f1Desc: "Our field team is ready to act swiftly whenever your vessel arrives.",
      f2Title: "Strong Authority Network",
      f2Desc: "Harmonious relations with Port Authority (KSOP), Immigration, Customs, and Pelindo.",
      f3Title: "Operational Cost Efficiency",
      f3Desc: "Transparent, accurate, and competitive port disbursement planning.",
      f4Title: "International Safety Standards",
      f4Desc: "Full certification and adherence to global maritime regulations.",
    },
    // FAQ
    faq: {
      title: "Frequently Asked Questions (FAQ)",
      q1: "What are CBSA's main services?",
      a1: "We provide ship agency, ship chandler & bunkering, logistics & customs clearance, offshore support, husbandry services, and crew manning.",
      q2: "Where is CBSA's operational base?",
      a2: "We are located in Batu Ampar, Batam, Indonesia, serving all ports and marine terminals across the Riau Islands.",
      q3: "Does CBSA operate 24/7?",
      a3: "Yes, our team is available 24 hours a day, 7 days a week for operational needs and emergency requests.",
      q4: "How can I request a Proforma Disbursement Account (PDA)?",
      a4: "You can reach out to us directly via WhatsApp or email with your vessel specifications and port schedule.",
    },
    // Contact Page / Form
    contact: {
      tag: "Contact Us",
      title: "Ready to Assist Your Fleet",
      desc: "Fill out the form below or contact our operational team directly.",
      formName: "Full Name",
      formEmail: "Email Address",
      formPhone: "Phone / WhatsApp Number",
      formSubject: "Subject / Vessel Type",
      formMessage: "Message or Request Details",
      submitBtn: "Send Message Now",
      successMsg: "Your message has been sent successfully! Our team will get back to you shortly.",
    },
    // Legal
    legal: {
      privacyPolicy: {
        title: "Privacy Policy",
        lastUpdated: "Last Updated: 2026",
        sections: [
          {
            heading: "1. Information Collection",
            content:
              "We collect personal information that you voluntarily provide via the contact form on this website, such as your name, email address, phone number, and message details for shipping agency service inquiries.",
          },
          {
            heading: "2. Use of Information",
            content:
              "The information collected is used solely to respond to your inquiries, provide maritime agency services, and improve our communication quality. We do not sell or share your data with third parties.",
          },
          {
            heading: "3. Data Security",
            content:
              "PT. Chantika Bahari Sejahtera Abadi is committed to safeguarding your personal data by implementing appropriate technical and organizational measures.",
          },
        ],
      },
      termsConditions: {
        title: "Terms & Conditions",
        lastUpdated: "Last Updated: 2026",
        sections: [
          {
            heading: "1. General Terms",
            content:
              "By accessing and using the PT. Chantika Bahari Sejahtera Abadi website, you agree to be bound by the terms and conditions set forth on this site.",
          },
          {
            heading: "2. Intellectual Property Rights",
            content:
              "All content, including but not limited to text, logos, images, and graphic designs on this website, is the property of PT. Chantika Bahari Sejahtera Abadi and protected by copyright laws.",
          },
          {
            heading: "3. Limitation of Liability",
            content:
              "Information on this website is provided for general informational purposes. While we strive for accuracy, we are not liable for any losses resulting from the reliance on this site's information without direct confirmation.",
          },
        ],
      },
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("cbsa_lang") || "id";
  });

  useEffect(() => {
    localStorage.setItem("cbsa_lang", language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "id" ? "en" : "id"));
  }, []);

  // PERBAIKAN UTAMA: Bungkus 't' dan 'value' dengan useMemo
  const t = useMemo(() => {
    return translations[language] || translations.id;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t,
    }),
    [language, toggleLanguage, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};