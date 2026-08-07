import SchemaOrg from "@/components/seo/SchemaOrg";

// FAQPage schema. `faqs` = [{ question, answer }].
const FAQSchema = ({ faqs }) => (
  <SchemaOrg
    data={{
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: (faqs || []).map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    }}
  />
);

export default FAQSchema;
