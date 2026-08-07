import { Clock, Zap, Users, Anchor } from "lucide-react";
import Container from "@/components/layout/Container";
import { useLanguage } from "@/context/LanguageContext";

// Trust strip — hanya klaim yang didukung perusahaan,
// TANPA angka fiktif (klien, kapal, tahun).
const TRUST_ITEMS = [
  { icon: Clock, id: "ops", en: "24/7 Operations", idText: "Operasional 24/7" },
  { icon: Zap, id: "fast", en: "Fast Response", idText: "Respon Cepat" },
  { icon: Users, id: "team", en: "Experienced Team", idText: "Tim Berpengalaman" },
  {
    icon: Anchor,
    id: "waters",
    en: "Serving Indonesian Waters",
    idText: "Melayani Perairan Indonesia",
  },
];

const TrustStats = () => {
  const { language } = useLanguage();

  return (
    <section
      aria-label="Trust highlights"
      className="border-y border-slate-200/80 bg-slate-50/80"
    >
      <Container className="py-8">
        <ul className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {TRUST_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.id}
                className="flex items-center justify-center gap-2.5 text-center"
              >
                <Icon className="h-5 w-5 shrink-0 text-secondary" />
                <span className="text-sm font-semibold text-primary">
                  {language === "id" ? item.idText : item.en}
                </span>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default TrustStats;
