import { MessageCircle, Mail, PhoneCall } from "lucide-react";
import Container from "@/components/layout/Container";
import { company } from "@/constants/company";
import { useLanguage } from "@/context/LanguageContext";

// CTA reusable: WhatsApp / Email / Call.
const CTASection = ({ title, subtitle }) => {
  const { language } = useLanguage();
  const waLink = `https://wa.me/${company.phoneWhatsApp}?text=Hello%20CBSA`;

  return (
    <section className="relative overflow-hidden bg-primary py-16 text-white lg:py-20">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
      <Container className="relative z-10 text-center">
        <h2 className="mb-4 text-2xl font-extrabold tracking-tight md:text-3xl lg:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-slate-300">
          {subtitle}
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-full sm:w-auto"
          >
            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-cta px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-cta/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cta-hover sm:w-auto">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </button>
          </a>
          <a
            href={`mailto:${company.email}`}
            aria-label="Email"
            className="w-full sm:w-auto"
          >
            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 sm:w-auto">
              <Mail className="h-4 w-4" />
              {language === "id" ? "Email" : "Email"}
            </button>
          </a>
          <a
            href={`tel:+${company.phoneWhatsApp}`}
            aria-label="Call"
            className="w-full sm:w-auto"
          >
            <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 sm:w-auto">
              <PhoneCall className="h-4 w-4" />
              {language === "id" ? "Telepon" : "Call"}
            </button>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
