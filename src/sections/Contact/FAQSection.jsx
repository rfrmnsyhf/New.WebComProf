import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone, ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { company } from "@/constants/company";
import { useLanguage } from "@/context/LanguageContext";

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-secondary"
      >
        <span className="pr-4 text-sm font-medium text-primary md:text-base">
          {faq.question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-muted-foreground">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

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
          ? "Kami mengurus seluruh dokumen clearance termasuk Syahbandar, Bea Cukai, Imigrasi, dan Karantina. Proses biasanya selesai dalam 1-2 hari kerja tergantung kelengkapan dokumen kapal."
          : "We handle all clearance documentation including Port Authority (Syahbandar), Customs, Immigration, and Quarantine. The process is typically completed within 1-2 working days depending on document completeness.",
    },
    {
      question:
        language === "id"
          ? "Berapa lama waktu yang dibutuhkan untuk setiap kunjungan kapal?"
          : "How long does a vessel port call usually take?",
      answer:
        language === "id"
          ? "Waktu tunggu bervariasi tergantung jenis layanan. Untuk clearance standar, proses dapat diselesaikan dalam 24-48 jam. Kami berusaha meminimalkan waktu tunggu agar operasional kapal tetap efisien."
          : "Turnaround time varies depending on the required service. Standard clearance is usually processed within 24-48 hours. Our team works proactively to minimize vessel downtime.",
    },
    {
      question:
        language === "id"
          ? "Apakah CBSA melayani 24 jam?"
          : "Does CBSA provide 24/7 service?",
      answer:
        language === "id"
          ? "Ya, tim kami siap membantu Anda 24 jam sehari, 7 hari seminggu termasuk hari libur nasional. Operasional maritim tidak mengenal waktu dan kami memahami hal tersebut."
          : "Yes, our operational watchkeepers are on standby 24 hours a day, 7 days a week, including national holidays, ensuring uninterrupted port operations.",
    },
    {
      question:
        language === "id"
          ? "Bagaimana dengan proses crew change?"
          : "How is the crew change process handled?",
      answer:
        language === "id"
          ? "Kami menyediakan layanan husbandry lengkap termasuk crew change, pengurusan e-Visa, akomodasi, transportasi, dan kebutuhan logistik awak kapal selama sandar di pelabuhan."
          : "We provide comprehensive husbandry services including sign-on/sign-off crew changes, e-Visa processing, local transportation, hotel accommodation, and medical escorts.",
    },
    {
      question:
        language === "id"
          ? "Apakah CBSA berpengalaman menangani navigasi Selat Malaka?"
          : "Is CBSA experienced in navigating the Malacca Strait region?",
      answer:
        language === "id"
          ? "Ya, kami memiliki pengetahuan mendalam tentang kondisi Selat Malaka dan Selat Singapura. Tim kami memahami regulasi lokal, jalur pelayaran, dan tantangan navigasi di perairan strategis ini."
          : "Yes, backed by maritime captains, we possess deep knowledge of the Malacca Strait and Singapore Strait shipping channels, local regulations, and port authorities.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-secondary"
            >
              {language === "id" ? "Pertanyaan Umum" : "General Questions"}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-3xl font-bold text-primary md:text-4xl"
            >
              {t.faq.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 text-muted-foreground leading-relaxed"
            >
              {t.faq.subtitle}
            </motion.p>

            {/* Callout Box */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-6"
            >
              <h4 className="mb-2 font-semibold text-primary">
                {language === "id" ? "Butuh Informasi Lebih Lanjut?" : "Need More Information?"}
              </h4>
              <p className="mb-4 text-sm text-muted-foreground">
                {language === "id" ? "Tim kami siap membantu menjawab pertanyaan Anda." : "Our team is ready to assist with any custom inquiries."}
              </p>
              <a
                href={`https://wa.me/${company.phoneWhatsApp}?text=Halo%20CBSA`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" className="gap-2 bg-cta text-white hover:bg-cta-hover">
                  <Phone className="h-4 w-4" />
                  {language === "id" ? "Chat Kami" : "Chat With Us"}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Right - FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-2xl border border-slate-100 p-6 md:p-8">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={faq.question}
                  faq={faq}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
