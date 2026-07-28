import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Container from "@/components/layout/Container";
import { company } from "@/constants/company";
import logo from "@/assets/images/LOGO.png";
import { useLanguage } from "@/context/LanguageContext";

const socialLinks = [
  { icon: FaInstagram, href: "https://instagram.com/", label: "Instagram" },
  { icon: FaFacebookF, href: "https://facebook.com/", label: "Facebook" },
  { icon: FaLinkedinIn, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: FaYoutube, href: "https://youtube.com/", label: "YouTube" },
];

const Footer = () => {
  const { t } = useLanguage();

  const servicesList = [
    t.services.s1Title,
    t.services.s2Title,
    t.services.s3Title,
    t.services.s4Title,
    t.services.s5Title,
    t.services.s6Title,
  ];

  const faqs = [
    { question: t.faq.q1, answer: t.faq.a1 },
    { question: t.faq.q2, answer: t.faq.a2 },
    { question: t.faq.q3, answer: t.faq.a3 },
  ];

  const navigation = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.industries, href: "/industries" },
    { name: t.nav.contact, href: "/contact" },
  ];

  return (
    <footer className="bg-primary text-white">
      <Container className="py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-6">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="mb-4 inline-block">
              <img src={logo} alt="CBSA Logo" className="h-14 w-auto brightness-0 invert" />
            </Link>
            <p className="mb-4 max-w-sm text-sm leading-relaxed text-slate-400">
              {company.slogan}. {t.hero.subtitle}
            </p>
            <ul className="mb-6 space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href={`https://wa.me/${company.phoneWhatsApp}?text=Halo%20CBSA`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  +{company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {company.email}
                </a>
              </li>
              <li className="leading-relaxed">{company.address}</li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-slate-400 transition-all hover:bg-secondary/20 hover:text-accent"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-accent"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              {t.nav.services}
            </h4>
            <ul className="space-y-3">
              {servicesList.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm text-slate-400 transition-colors hover:text-accent"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              FAQ
            </h4>
            <ul className="space-y-4">
              {faqs.map((faq) => (
                <li key={faq.question}>
                  <p className="mb-1 text-sm font-medium text-white">
                    {faq.question}
                  </p>
                  <p className="text-xs leading-relaxed text-slate-500">
                    {faq.answer}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Bantuan Cepat */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              {t.common.quickHelp}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://wa.me/${company.phoneWhatsApp}?text=Halo%20CBSA`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 transition-colors hover:text-accent"
                >
                  {t.common.chatWhatsapp}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="text-sm text-slate-400 transition-colors hover:text-accent"
                >
                  {t.common.sendEmail}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {company.name}. {t.common.allRightsReserved}
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" onClick={(e) => e.preventDefault()} className="transition-colors hover:text-accent">
              {t.common.privacyPolicy}
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="transition-colors hover:text-accent">
              {t.common.termsConditions}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
