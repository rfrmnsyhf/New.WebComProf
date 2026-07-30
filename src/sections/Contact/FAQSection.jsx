import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, PhoneCall, ArrowRight, HelpCircle, MessageSquare, ShieldCheck } from "lucide-react";
import ContainerComponent from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { company } from "@/constants/company";
import { useLanguage } from "@/context/LanguageContext";

// ==========================================
// 1. INDIVIDUAL FAQ ACCORDION ITEM
// ==========================================
const FAQItem = ({ faq, isOpen, onToggle, index }) => {
  return (
    <div
      className={`rounded-2xl transition-all duration-300 ${
        isOpen
          ? "bg-slate-50/80 border border-secondary/20 shadow-xs"
          : "border-b border-slate-100 hover:bg-slate-50/40"
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        className="flex w-full items-center justify-between p-5 text-left transition-colors"
      >
        <span
          className={`pr-4 text-base font-bold transition-colors duration-200 ${
            isOpen ? "text-secondary" : "text-primary hover:text-secondary"
          }`}
        >
          {faq.question}
        </span>
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen ? "bg-secondary text-white rotate-180" : "bg-slate-100 text-slate-500"
          }`}
        >
          <ChevronDown className="h-4 w-4" />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1 text-sm leading-relaxed text-slate-600 border-t border-slate-100/60 mt-1">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ==========================================
// 2. MAIN FAQ SECTION COMPONENT
// ==========================================
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const { t, language } = useLanguage();

  const faqs = [
    {
      question:
        language === "id"
          ? "Bagaimana prosedur clearance kapal asing di pelabuhan Batam?"
          : "What is the clearance procedure for foreign vessels in Batam port?",
      answer:
        language === "id"
          ? "Kami mengurus seluruh dokumen clearance termasuk Syahbandar, Bea Cukai, Imigrasi, dan Karantina (KSOP, Customs, Immigration, Quarantine). Proses clearance dapat diselesaikan dalam 1-2 hari kerja tergantung pada kelengkapan manifes dan sertifikat kapal."
          : "We manage all clearance documentation including Port Authority (Syahbandar), Customs, Immigration, and Quarantine (CIQP). The clearance process is typically completed within 1-2 working days depending on document completeness.",
    },
    {
      question:
        language === "id"
          ? "Berapa lama estimasi waktu port call untuk setiap kunjungan kapal?"
          : "How long does a vessel port call usually take?",
      answer:
        language === "id"
          ? "Waktu tunggu (*turnaround time*) bervariasi tergantung jenis layanan. Untuk clearance & bunkering standar, proses diselesaikan dalam 24-48 jam. Tim kami bekerja secara proaktif untuk meminimalkan waktu sandar (*downtime*) operasional kapal Anda."
          : "Turnaround time varies depending on the requested service. Standard clearance and bunkering are usually processed within 24-48 hours. Our proactive team works around the clock to minimize vessel downtime.",
    },
    {
      question:
        language === "id"
          ? "Apakah CBSA menyediakan dukungan operasional 24 jam?"
          : "Does CBSA provide 24/7 operational support?",
      answer:
        language === "id"
          ? "Ya, tim *watchkeeper* operasional kami siaga 24 jam sehari, 7 hari seminggu, termasuk hari libur nasional. Industri maritim beroperasi tanpa henti, dan kami memastikan setiap permintaan kapal direspons secara instan."
          : "Yes, our operational watchkeepers are on standby 24 hours a day, 7 days a week, including national holidays, ensuring uninterrupted port operations and immediate response times.",
    },
    {
      question:
        language === "id"
          ? "Bagaimana penanganan proses pergantian awak kapal (crew change)?"
          : "How is the crew change process handled?",
      answer:
        language === "id"
          ? "Kami menyediakan layanan *husbandry* menyeluruh, mulai dari pengurusan e-Visa / Letter of Guarantee (LOG), penjemputan di bandara/pelabuhan, akomodasi hotel, pengawalan medis, hingga pendampingan *sign-on* & *sign-off* awak kapal."
          : "We provide comprehensive husbandry services including sign-on/sign-off crew changes, e-Visa / Letter of Guarantee (LOG) issuance, airport transfers, hotel accommodations, and medical escorts.",
    },
    {
      question:
        language === "id"
          ? "Apakah CBSA berpengalaman di perairan Selat Malaka & Selat Singapura?"
          : "Is CBSA experienced in navigating the Malacca & Singapore Straits?",
      answer:
        language === "id"
          ? "Ya, dipimpin oleh kapten dan praktisi maritim berpengalaman, kami memiliki pemahaman mendalam mengenai regulasi perairan Selat Malaka & Selat Singapura, koordinasi pandu TSB, serta jalur lego jangkar strategis di Kepulauan Riau."
          : "Yes, backed by master mariners and maritime experts, we possess deep knowledge of the Malacca Strait and Singapore Strait shipping channels, pilotage coordination, and anchorage zones in Riau Islands.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/3 -right-32 h-80 w-80 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

      <ContainerComponent>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Heading & Callout Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-3 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
              {language === "id" ? "Pertanyaan Umum" : "Frequently Asked Questions"}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4 text-3xl font-extrabold tracking-tight text-primary md:text-4xl lg:text-4xl"
            >
              {t?.faq?.title || (
                language === "id" ? (
                  <>
                    Informasi & <span className="text-secondary">Jawaban Operasional</span>
                  </>
                ) : (
                  <>
                    Common Questions & <span className="text-secondary">Operational Answers</span>
                  </>
                )
              )}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 text-base leading-relaxed text-slate-600"
            >
              {t?.faq?.subtitle || (
                language === "id"
                  ? "Temukan rincian prosedur, estimasi waktu, dan cakupan keagenan kapal yang kami sediakan untuk mendukung kelancaran pelayaran Anda di Batam & sekitarnya."
                  : "Find essential details regarding port clearance procedures, turnaround times, and agency support services in Batam and surrounding waters."
              )}
            </motion.p>

            {/* Interactive Callout Box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-linear-to-br from-slate-900 to-primary p-6 text-white shadow-xl shadow-slate-900/10 sm:p-8"
            >
              <div className="absolute -right-6 -bottom-6 opacity-10 pointer-events-none">
                <HelpCircle className="h-40 w-40 text-white" />
              </div>

              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur-md">
                  <ShieldCheck className="h-3.5 w-3.5 text-secondary" />
                  <span>{language === "id" ? "Bantuan Langsung" : "Direct Assistance"}</span>
                </div>

                <h3 className="mb-2 text-xl font-bold tracking-tight">
                  {language === "id" ? "Punya Pertanyaan Spesifik?" : "Have Specific Requirements?"}
                </h3>

                <p className="mb-6 text-xs text-slate-300 leading-relaxed">
                  {language === "id"
                    ? "Tim operasional agen kami siap memberikan konsultasi gratis dan estimasi biaya keagenan kapal Anda."
                    : "Our port agency team is on standby to provide custom operational consultation and proforma agency disbursements."}
                </p>

                <a
                  href={`https://wa.me/${company.phoneWhatsApp2 || company.phone}?text=Halo%20CBSA,%20saya%20ingin%20bertanya%20mengenai%20layanan%20keagenan`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full sm:w-auto"
                >
                  <Button size="lg" className="w-full gap-2.5 rounded-xl bg-secondary font-bold text-white hover:bg-secondary/90 shadow-md transition-transform active:scale-95">
                    <MessageSquare className="h-4 w-4" />
                    <span>{language === "id" ? "Konsultasi via WhatsApp" : "Consult via WhatsApp"}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: FAQ Accordion List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="flex flex-col gap-3 rounded-3xl border border-slate-200/80 bg-white p-4 shadow-xl shadow-slate-200/40 sm:p-6">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={faq.question}
                  faq={faq}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </ContainerComponent>
    </section>
  );
};

export default FAQSection;