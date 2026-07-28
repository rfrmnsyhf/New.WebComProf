import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";
import { Button } from "@/components/ui/button";
import logo from "@/assets/images/LOGO.png";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.industries, href: "/industries" },
    { name: t.nav.contact, href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-primary/80"
          : "border-slate-200 bg-white/90"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <div className="flex items-center">
            <img
              src={logo}
              alt="CBSA Logo"
              className={`h-14 w-auto transition-all duration-300 ${
                scrolled ? "brightness-0 invert" : ""
              }`}
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden gap-8 md:flex md:items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-slate-300 hover:text-accent"
                  : "text-slate-700 hover:text-secondary"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Controls (Lang Switcher + CTA) */}
        <div className="hidden items-center gap-4 md:flex">
          {/* Language Switcher */}
          <div
            className={`flex items-center rounded-full p-1 border text-xs font-semibold transition-all ${
              scrolled
                ? "border-white/20 bg-white/10 text-white"
                : "border-slate-300 bg-slate-100 text-slate-800"
            }`}
          >
            <button
              onClick={() => setLanguage("id")}
              className={`flex items-center gap-1 rounded-full px-2.5 py-1 transition-all ${
                language === "id"
                  ? "bg-secondary text-white shadow-sm"
                  : "hover:opacity-80"
              }`}
              title="Bahasa Indonesia"
            >
              <span>🇮🇩</span> ID
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`flex items-center gap-1 rounded-full px-2.5 py-1 transition-all ${
                language === "en"
                  ? "bg-secondary text-white shadow-sm"
                  : "hover:opacity-80"
              }`}
              title="English"
            >
              <span>🇬🇧</span> EN
            </button>
          </div>

          <Link to="/contact">
            <Button
              className={`transition-all duration-300 ${
                scrolled
                  ? "bg-white/10 text-white hover:bg-white/20"
                  : ""
              }`}
            >
              {t.nav.contactBtn}
            </Button>
          </Link>
        </div>

        {/* Mobile Right Controls */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Lang Switcher */}
          <button
            onClick={() => setLanguage(language === "id" ? "en" : "id")}
            className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold border transition-colors ${
              scrolled
                ? "border-white/20 bg-white/10 text-white"
                : "border-slate-300 bg-slate-100 text-slate-800"
            }`}
            aria-label="Switch language"
          >
            <Globe className="h-3.5 w-3.5" />
            <span>{language === "id" ? "ID 🇮🇩" : "EN 🇬🇧"}</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            className={`inline-flex items-center justify-center rounded-md p-2 transition-colors duration-300 ${
              scrolled
                ? "text-white hover:bg-white/10"
                : "text-primary hover:bg-slate-100"
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-b border-white/10 bg-primary md:hidden"
          >
            <Container className="flex flex-col gap-4 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={handleNavClick}
                  className="text-sm font-medium text-slate-300 transition-colors hover:text-accent"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Lang Buttons in drawer */}
              <div className="flex items-center justify-between pt-2 border-t border-white/10 text-slate-300 text-xs">
                <span>{t.common.language}:</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setLanguage("id")}
                    className={`rounded px-3 py-1 font-semibold ${
                      language === "id" ? "bg-secondary text-white" : "bg-white/10"
                    }`}
                  >
                    🇮🇩 Indonesia
                  </button>
                  <button
                    onClick={() => setLanguage("en")}
                    className={`rounded px-3 py-1 font-semibold ${
                      language === "en" ? "bg-secondary text-white" : "bg-white/10"
                    }`}
                  >
                    🇬🇧 English
                  </button>
                </div>
              </div>

              <Link to="/contact" onClick={handleNavClick}>
                <Button className="w-full mt-2">{t.nav.contactBtn}</Button>
              </Link>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
