import PageHero from "@/components/common/PageHero";
import FAQSection from "@/sections/Contact/FAQSection";
import ContactSection from "@/sections/Contact/Contact";
import BottomCTASection from "@/sections/BottomCTA/BottomCTA";
import contactHero from "@/assets/images/home7.jpg";
import { useLanguage } from "@/context/LanguageContext";

const Contact = () => {
  const { t, language } = useLanguage();

  return (
    <>
      <PageHero
        title={t.contact.title}
        subtitle={
          language === "id"
            ? "Kami dengan senang hati siap membantu Anda. Tim kami selalu tersedia untuk memberikan informasi dan solusi terbaik bagi kebutuhan maritim Anda."
            : "We are ready to assist you. Our team is available 24/7 to provide information and maritime solutions."
        }
        image={contactHero}
      />
      <FAQSection />
      <ContactSection />
      <BottomCTASection />
    </>
  );
};

export default Contact;
