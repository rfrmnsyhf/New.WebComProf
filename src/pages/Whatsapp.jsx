import { motion } from "framer-motion";
import { 
  MessageCircle, 
  PhoneCall, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Headset, 
  Building2, 
  Anchor,
  Compass
} from "lucide-react";
import ContainerComponent from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { company } from "@/constants/company";
import { useLanguage } from "@/context/LanguageContext";

// Formatter Nomor Telepon (+62 XXX-XXXX-XXXX)
const formatPhone = (num) => {
  const cleaned = String(num || "").replace(/\D/g, "");
  if (!cleaned) return "";
  if (cleaned.length >= 10) {
    return `+${cleaned.slice(0, 2)} ${cleaned.slice(2, 5)}-${cleaned.slice(5, 9)}-${cleaned.slice(9)}`;
  }
  return `+${cleaned}`;
};

const WhatsApp = () => {
  const { language } = useLanguage();

  const waCards = [
    {
      key: "cs",
      icon: Headset,
      label: language === "id" ? "Layanan Operasional 24/7" : "24/7 Operational Support",
      name: language === "id" ? "Customer Service & Ops" : "Customer Service & Ops",
      number: company.phoneWhatsApp || "6282385394882",
      desc:
        language === "id"
          ? "Konsultasi cepat, informasi clearance pelabuhan, kebutuhan clearance agen, & penanganan darurat kapal 24 jam."
          : "Fast consultation, port clearance info, agent clearance needs, & 24/7 emergency vessel support.",
      badge: language === "id" ? "Respon Cepat 24/7" : "Fast Response 24/7",
      message: "Halo%20CS%20CBSA%2C%20saya%20ingin%20bertanya%20mengenai%20layanan%20keagenan",
      accent: {
        icon: "text-emerald-600",
        iconBg: "bg-emerald-50 border-emerald-200",
        iconHoverBg: "group-hover:bg-emerald-600 group-hover:shadow-emerald-500/25",
        badge: "border-emerald-200 bg-emerald-50 text-emerald-700",
        number: "text-emerald-700",
        glow: "from-emerald-400/10 to-transparent",
        button: "from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 shadow-emerald-600/20",
      },
    },
    {
      key: "office",
      icon: Building2,
      label: language === "id" ? "Administrasi & Bisnis" : "Admin & Commercial",
      name: language === "id" ? "Kantor Pusat (Batam)" : "Head Office (Batam)",
      number: company.phoneWhatsApp2 || "6282171477799",
      desc:
        language === "id"
          ? "Penawaran harga resmi (PDA), kerjasama kontrak jangka panjang, tagihan, dan keagenan armada skala besar."
          : "Official Proforma Disbursement Account (PDA), long-term contracts, billing, and fleet agency.",
      badge: language === "id" ? "Penawaran & Kerja Sama" : "Quotation & Partnership",
      message: "Halo%20Kantor%20CBSA%2C%20saya%20ingin%20meminta%20penawaran%20layanan",
      accent: {
        icon: "text-secondary",
        iconBg: "bg-secondary/5 border-secondary/20",
        iconHoverBg: "group-hover:bg-secondary group-hover:shadow-secondary/25",
        badge: "border-secondary/20 bg-secondary/5 text-secondary",
        number: "text-secondary",
        glow: "from-secondary/10 to-transparent",
        button: "from-secondary to-blue-800 hover:from-blue-500 hover:to-secondary shadow-secondary/20",
      },
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-white py-20 lg:py-28 text-slate-900 flex flex-col justify-center">
      {/* Soft sky wash instead of dark glow orbs */}
      <div className="absolute inset-0 -z-20 bg-linear-to-b from-sky-50/70 via-white to-white" />

      {/* Nautical chart line-grid texture */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,37,69,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,37,69,0.05) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 90%)",
        }}
      />

      {/* Faint compass watermark */}
      <Compass
        className="absolute -top-16 -right-16 h-420px w-420px text-slate-900/[0.035] -z-10 pointer-events-none rotate-12"
        strokeWidth={0.75}
        aria-hidden="true"
      />

      <ContainerComponent className="relative z-10 my-auto">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-700"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {language === "id" ? "Pusat Bantuan WhatsApp" : "WhatsApp Support Hub"}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {language === "id" ? (
              <>
                Hubungi Tim <span className="bg-linear-to-r from-secondary to-blue-300 bg-clip-text text-transparent">CBSA Batam</span>
              </>
            ) : (
              <>
                Connect with <span className="bg-linear-to-r from-secondary to-blue-300 bg-clip-text text-transparent">CBSA Team</span>
              </>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg"
          >
            {language === "id"
              ? "Pilih saluran WhatsApp terverifikasi di bawah ini untuk langsung terhubung dengan tim operasional atau manajemen kami."
              : "Select an official WhatsApp channel below to connect directly with our operational or management team."}
          </motion.p>
        </div>

        {/* WhatsApp Cards Grid */}
        <div className="relative max-w-5xl mx-auto">
          {/* "Choose your route" waypoint divider — desktop only */}
          <div className="hidden lg:block pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2">
            <div className="h-full w-px bg-linear-to-b from-transparent via-slate-300 to-transparent" />
            <div className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 bg-white px-3 py-2 shadow-lg ring-1 ring-slate-200">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 shadow-sm">
                <Anchor className="h-4 w-4" />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                {language === "id" ? "Pilih Jalur" : "Choose Route"}
              </span>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
            {waCards.map((card, index) => {
              const IconComponent = card.icon;
              const waLink = `https://wa.me/${card.number}?text=${card.message}`;

              return (
                <motion.div
                  key={card.key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -6 }}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_2px_20px_rgba(15,37,69,0.06)] transition-all duration-300 hover:border-slate-300 hover:shadow-[0_10px_34px_rgba(15,37,69,0.10)]"
                >
                  {/* Ambient corner wash */}
                  <div className={`absolute top-0 right-0 -mr-16 -mt-16 h-48 w-48 rounded-full bg-linear-to-br ${card.accent.glow} blur-2xl transition-all duration-500 group-hover:scale-150`} />

                  <div>
                    {/* Card Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 ${card.accent.iconBg} ${card.accent.icon} group-hover:text-white group-hover:shadow-lg ${card.accent.iconHoverBg}`}>
                          <IconComponent className="h-7 w-7" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                            {card.label}
                          </p>
                          <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl mt-0.5">
                            {card.name}
                          </h2>
                        </div>
                      </div>

                      <span className={`hidden sm:inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-medium ${card.accent.badge}`}>
                        <ShieldCheck className="h-3.5 w-3.5" />
                        {card.badge}
                      </span>
                    </div>

                    <span className={`sm:hidden mt-4 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-medium ${card.accent.badge}`}>
                      <ShieldCheck className="h-3.5 w-3.5" />
                      {card.badge}
                    </span>

                    {/* Description */}
                    <p className="mt-6 text-sm leading-relaxed text-slate-600">
                      {card.desc}
                    </p>

                    {/* Phone Number Box */}
                    <div className="mt-8 flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-colors duration-300 group-hover:border-slate-300">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                          {language === "id" ? "Nomor WhatsApp Resmi" : "Official WhatsApp Line"}
                        </p>
                        <p className={`mt-0.5 font-mono text-lg font-bold tracking-tight ${card.accent.number}`}>
                          {formatPhone(card.number)}
                        </p>
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-400 group-hover:text-slate-600 transition-colors">
                        <PhoneCall className="h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <Button
                        size="lg"
                        className={`group/btn relative w-full overflow-hidden rounded-xl bg-linear-to-r py-6 text-base font-bold text-white shadow-lg transition-all duration-300 active:scale-[0.99] ${card.accent.button}`}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          <MessageCircle className="h-5 w-5" />
                          <span>
                            {language === "id" ? "Mulai Chat WhatsApp" : "Start WhatsApp Chat"}
                          </span>
                          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-3" />
                        </span>
                      </Button>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-slate-200 pt-10 text-xs font-medium text-slate-600 sm:gap-12"
        >
          <div className="flex items-center gap-2.5">
            <Clock className="h-4 w-4 text-[#14375E]" />
            <span>{language === "id" ? "Respons Operasional 24/7" : "24/7 Operational Response"}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="h-4 w-4 text-[#14375E]" />
            <span>{language === "id" ? "Terverifikasi Resmi PT. CBSA" : "Official PT. CBSA Verified"}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Anchor className="h-4 w-4 text-[#14375E]" />
            <span>{language === "id" ? "Layanan Keagenan Kapal Batam" : "Batam Vessel Agency Support"}</span>
          </div>
        </motion.div>
      </ContainerComponent>
    </div>
  );
};

export default WhatsApp;