import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, PhoneCall, ChevronRight, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ContainerComponent from "./Container";
import { Button } from "@/components/ui/button";
import logo from "@/assets/images/LOGO.png";
import { useLanguage } from "@/context/LanguageContext";

// ==========================================
// 1. MOTION VARIANTS FOR MOBILE DRAWER
// ==========================================
const drawerVariants = {
  closed: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
      when: "afterChildren",
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.21, 0.47, 0.32, 0.98],
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  closed: { opacity: 0, x: -12 },
  open: { opacity: 1, x: 0, transition: { duration: 0.25 } },
};

// ==========================================
// 2. MAIN NAVBAR COMPONENT
// ==========================================
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(72);

  const navItems = [
    { name: t?.nav?.home || (language === "id" ? "Beranda" : "Home"), href: "/" },
    { name: t?.nav?.about || (language === "id" ? "Tentang Kami" : "About Us"), href: "/about" },
    { name: t?.nav?.services || (language === "id" ? "Layanan" : "Services"), href: "/services" },
    { name: t?.nav?.industries || (language === "id" ? "Industri" : "Industries"), href: "/industries" },
    { name: t?.nav?.contact || (language === "id" ? "Kontak" : "Contact"), href: "/contact" },
  ];

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Measure header height for accurate drawer positioning
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [scrolled]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/120 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3" //opacity 120% for better visibility on scroll
          : "bg-white/60 backdrop-blur-xs py-5"
      }`}
    >
      <ContainerComponent className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="relative z-50 flex items-center gap-2">
          <img
            src={logo}
            alt="CBSA Logo"
            loading="eager"
            className="h-9 md:h-11 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-secondary font-bold"
                    : "text-slate-700 hover:text-secondary"
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-secondary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Controls */}
        <div className="hidden items-center gap-4 md:flex">
          {/* Language Switcher Pills */}
          <div
            className="flex items-center rounded-full border border-slate-200/80 bg-slate-100/80 p-1 text-xs font-semibold shadow-inner"
            role="group"
            aria-label="Language switcher"
          >
            <button
              onClick={() => setLanguage("id")}
              aria-pressed={language === "id"}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1 transition-all duration-200 ${
                language === "id"
                  ? "bg-white text-secondary shadow-xs font-bold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              title="Bahasa Indonesia"
            >
              <span>🇮🇩</span> ID
            </button>
            <button
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1 transition-all duration-200 ${
                language === "en"
                  ? "bg-white text-secondary shadow-xs font-bold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              title="English"
            >
              <span>🇬🇧</span> EN
            </button>
          </div>

          <Link to="/contact">
            <Button size="sm" className="gap-2 bg-primary text-white hover:bg-primary/90 font-semibold shadow-sm rounded-xl px-4">
              <PhoneCall className="h-3.5 w-3.5 text-secondary" />
              <span>{t?.nav?.contactBtn || (language === "id" ? "Hubungi Kami" : "Contact Us")}</span>
            </Button>
          </Link>
        </div>

        {/* Mobile Right Controls */}
        <div className="flex items-center gap-2.5 md:hidden">
          {/* Mobile Quick Lang Switcher */}
          <button
            onClick={() => setLanguage(language === "id" ? "en" : "id")}
            className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-bold text-slate-700 active:scale-95 transition-transform shadow-2xs"
            aria-label="Switch language"
          >
            <Globe className="h-3.5 w-3.5 text-secondary" />
            <span>{language === "id" ? "ID" : "EN"}</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="relative z-50 rounded-xl border border-slate-200/80 bg-white/80 p-2 text-slate-800 hover:bg-slate-100 active:scale-95 transition-all shadow-2xs"
          >
            {isOpen ? <X className="h-5 w-5 text-slate-900" /> : <Menu className="h-5 w-5 text-slate-900" />}
          </button>
        </div>
      </ContainerComponent>

      {/* ==========================================
          MOBILE DRAWER & BACKDROP
      ========================================== */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
              className="fixed inset-0 z-30 bg-slate-950/40 backdrop-blur-xs md:hidden"
              aria-hidden="true"
            />

            {/* Mobile Drawer Overlay */}
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
              variants={drawerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              style={{ top: headerHeight, height: `calc(100dvh - ${headerHeight}px)` }}
              className="fixed inset-x-0 bottom-0 z-40 flex flex-col justify-between border-t border-slate-100 bg-white/98 px-6 py-6 shadow-2xl md:hidden overflow-y-auto"
            >
              {/* Top Navigation List */}
              <div className="flex flex-col gap-6">
                {/* Menu Category Label */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    {language === "id" ? "Navigasi Utama" : "Main Navigation"}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                    <ShieldCheck className="h-3 w-3" />
                    24/7 Support
                  </span>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                      <motion.div key={item.href} variants={itemVariants}>
                        <Link
                          to={item.href}
                          onClick={closeMenu}
                          aria-current={isActive ? "page" : undefined}
                          className={`group flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-bold transition-all duration-200 ${
                            isActive
                              ? "bg-secondary/10 text-secondary border border-secondary/20 shadow-2xs"
                              : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                          }`}
                        >
                          <span className="tracking-tight">{item.name}</span>
                          <ChevronRight
                            className={`h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 ${
                              isActive ? "text-secondary" : "text-slate-300"
                            }`}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom Drawer Actions & Info */}
              <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-5 border-t border-slate-100 pt-6">
                {/* Mobile Language Switcher Segment */}
                <div className="flex items-center justify-between rounded-xl bg-slate-100/80 p-1 border border-slate-200/60">
                  <button
                    onClick={() => setLanguage("id")}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                      language === "id"
                        ? "bg-white text-secondary shadow-2xs"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    🇮🇩 Bahasa Indonesia
                  </button>
                  <button
                    onClick={() => setLanguage("en")}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                      language === "en"
                        ? "bg-white text-secondary shadow-2xs"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    🇬🇧 English
                  </button>
                </div>

                {/* Main Action CTA Button */}
                <Link to="/contact" onClick={closeMenu}>
                  <Button className="w-full gap-2.5 py-6 text-base font-bold bg-primary text-white hover:bg-primary/90 shadow-md rounded-2xl">
                    <PhoneCall className="h-4 w-4 text-secondary" />
                    <span>{t?.nav?.contactBtn || (language === "id" ? "Hubungi Kami" : "Contact Us")}</span>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;