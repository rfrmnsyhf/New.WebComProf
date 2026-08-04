import { Link } from "react-router-dom";
import Container from "@/components/layout/Container";
import { company } from "@/constants/company";
import logo from "@/assets/images/LOGO.png";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const servicesList = [
    t?.services?.s1Title,
    t?.services?.s2Title,
    t?.services?.s3Title,
    t?.services?.s4Title,
    t?.services?.s5Title,
    t?.services?.s6Title,
  ].filter(Boolean);

  const navigation = [
    { name: t?.nav?.home || "Beranda", href: "/" },
    { name: t?.nav?.about || "Tentang", href: "/about" },
    { name: t?.nav?.services || "Layanan", href: "/services" },
    { name: t?.nav?.industries || "Industri", href: "/industries" },
    { name: t?.nav?.contact || "Kontak", href: "/contact" },
  ];

  return (
    <footer className="bg-primary text-white print:hidden" aria-labelledby="footer-heading">
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
              <p className="flex items-center gap-2">
                <span className="rounded bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                  Owner :
                </span>
                <a
                  href={`https://wa.me/${company.phoneWhatsApp}?text=Halo%20CBSA`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-accent"
                >
                  +{company.phoneWhatsApp}
                </a>
              </p>

              <p className="flex items-center gap-2">
                <span className="rounded bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                  Admin :
                </span>
                <a
                  href={`https://wa.me/${company.phoneWhatsApp2}?text=Halo%20CBSA`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-accent"
                >
                  +{company.phoneWhatsApp2}
                </a>
              </p>
              
              <p className="flex items-center gap-2">
                <span className="rounded bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                  Email :
                </span>
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors duration-200 hover:text-accent"
                >
                  {company.email}
                </a>
              </p>

              <p className="flex items-center gap-2">
                <span className="rounded bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                  Email :
                </span>
                <a
                  href={`mailto:${company.email2}`}
                  className="transition-colors duration-200 hover:text-accent"
                >
                  {company.email2}
                </a>
              </p>
              <p className="leading-relaxed">{company.address}</p>
            </address>
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
            <Link
              to="/whatsapp"
              className="mb-4 block text-sm font-semibold uppercase tracking-wider text-white transition-colors duration-200 hover:text-accent"
            >
              {t?.common?.quickHelp || "Bantuan Cepat"}
            </Link>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/whatsapp"
                  className="inline-block text-sm text-slate-400 transition-all duration-200 hover:translate-x-1 hover:text-accent"
                >
                  {t?.common?.chatWhatsapp || "Chat WhatsApp"}
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${company.email2}`}
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
            &copy; 2020 {company.name}. {t?.common?.allRightsReserved || "All Rights Reserved."}
          </p>
          <div className="flex gap-6 text-xs sm:text-sm text-slate-400">
            <Link to="/privacy-policy" className="transition-colors duration-200 hover:text-accent">
              {t?.common?.privacyPolicy || "Privacy Policy"}
            </Link>
            <Link to="/terms-conditions" className="transition-colors hover:text-accent">
              {t?.common?.termsConditions || "Terms & Conditions"}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;