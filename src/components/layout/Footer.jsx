import { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaChevronDown } from "react-icons/fa";
import Container from "@/components/layout/Container";
import { company } from "@/constants/company";
import logo from "@/assets/images/LOGO.png";
import { useLanguage } from "@/context/LanguageContext";

const socialLinks = [
  { icon: FaInstagram, href: "https://instagram.com/", label: "Instagram" },
  { icon: FaFacebookF, href: "https://facebook.com/", label: "Facebook" },
  { icon: FaLinkedinIn, href: "https://linkedin.com/", label: "LinkedIn" },
];

const Footer = () => {
  const { t } = useLanguage();

  // State untuk melacak indeks FAQ mana yang sedang terbuka (null = semua tertutup)
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    // Jika item yang diklik sudah terbuka, tutup (set null). Jika belum, buka item tersebut.
    setOpenFaqIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const servicesList = [
    t?.services?.s1Title,
    t?.services?.s2Title,
    t?.services?.s3Title,
    t?.services?.s4Title,
    t?.services?.s5Title,
    t?.services?.s6Title,
  ].filter(Boolean);

  const faqs = [
    { question: t?.faq?.q1, answer: t?.faq?.a1 },
    { question: t?.faq?.q2, answer: t?.faq?.a2 },
    { question: t?.faq?.q3, answer: t?.faq?.a3 },
  ];

  const navigation = [
    { name: t?.nav?.home || "Beranda", href: "/" },
    { name: t?.nav?.about || "Tentang", href: "/about" },
    { name: t?.nav?.services || "Layanan", href: "/services" },
    { name: t?.nav?.industries || "Industri", href: "/industries" },
    { name: t?.nav?.contact || "Kontak", href: "/contact" },
  ];

  return (
    <footer className="bg-primary text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <Container className="py-16">
        {/* Layout Grid */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">

          {/* Brand & Detail Kontak */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link to="/" className="mb-4 inline-block transition-opacity hover:opacity-80">
              <img
                src={logo}
                alt={`${company.name} Logo`}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>

            <p className="mb-5 max-w-sm text-sm leading-relaxed text-slate-400">
              {company.slogan}. {t?.hero?.subtitle}
            </p>

            <address className="mb-6 not-italic space-y-2 text-sm text-slate-400">
              <p>
                <a
                  href={`https://wa.me/${company.phoneWhatsApp}?text=Halo%20CBSA`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-accent"
                >
                  +{company.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors duration-200 hover:text-accent"
                >
                  {company.email}
                </a>
              </p>
              <p className="leading-relaxed">{company.address}</p>
            </address>

            <div className="flex gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigasi */}
          <nav aria-label="Footer Navigasi">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Navigasi
            </h3>
            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="inline-block text-sm text-slate-400 transition-all duration-200 hover:translate-x-1 hover:text-accent"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Layanan */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {t?.nav?.services || "Layanan"}
            </h3>
            <ul className="space-y-2.5">
              {servicesList.map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="inline-block text-sm text-slate-400 transition-all duration-200 hover:translate-x-1 hover:text-accent"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bantuan Cepat */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {t?.common?.quickHelp || "Bantuan Cepat"}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`https://wa.me/${company.phoneWhatsApp}?text=Halo%20CBSA`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-slate-400 transition-all duration-200 hover:translate-x-1 hover:text-accent"
                >
                  {t?.common?.chatWhatsapp || "Chat WhatsApp"}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="inline-block text-sm text-slate-400 transition-all duration-200 hover:translate-x-1 hover:text-accent"
                >
                  {t?.common?.sendEmail || "Kirim Email"}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs sm:text-sm text-slate-400">
            &copy; {new Date().getFullYear()} {company.name}. {t?.common?.allRightsReserved || "All Rights Reserved."}
          </p>
          <div className="flex gap-6 text-xs sm:text-sm text-slate-400">
            <a href="#" onClick={(e) => e.preventDefault()} className="transition-colors duration-200 hover:text-accent">
              {t?.common?.privacyPolicy || "Privacy Policy"}
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="transition-colors hover:text-accent">
              {t?.common?.termsConditions || "Terms & Conditions"}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;