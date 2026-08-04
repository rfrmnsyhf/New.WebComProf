import PageHero from "@/components/common/PageHero";
import { Helmet } from "react-helmet-async";
import FAQSection from "@/sections/Contact/FAQSection";
import ContactSection from "@/sections/Contact/Contact";
import BottomCTASection from "@/sections/BottomCTA/BottomCTA";
import contactHero from "@/assets/images/contactHero.jpg";
import { useLanguage } from "@/context/LanguageContext";

const Contact = () => {
  const { t, language } = useLanguage();

  return (
    <>
      <Helmet>
        <title>
          {language === "id"
            ? "Hubungi Kami | CBSA - Layanan Maritim Batam"
            : "Contact Us | CBSA - Maritime Services Batam"}
        </title>
        <meta
          name="description"
          content={
            language === "id"
              ? "Hubungi PT. Chantika Bahari Sejahtera Abadi (CBSA) di Batam untuk kebutuhan ship agency, port services, dan maritime logistics. Tim kami siaga 24/7."
              : "Contact PT. Chantika Bahari Sejahtera Abadi (CBSA) in Batam for ship agency, port services, and maritime logistics. Our team is available 24/7."
          }
        />
        <link rel="canonical" href="https://cbsabatam.com/contact" />
        <meta property="og:url" content="https://cbsabatam.com/contact" />
        <meta property="og:title" content="Contact Us | CBSA" />
        <meta
          property="og:description"
          content="Reach CBSA's 24/7 operational team in Batam for all your maritime and shipping agency needs."
        />
      </Helmet>
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
