import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { company } from "@/constants/company";
import { useLanguage } from "@/context/LanguageContext";

const Contact = () => {
  const { t, language } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      label: "WhatsApp",
      value: `+${company.phone}`,
      href: `https://wa.me/${company.phoneWhatsApp}?text=Halo%20CBSA`,
      external: true,
    },
    {
      icon: Mail,
      label: "Email",
      value: company.email,
      href: `mailto:${company.email}`,
      external: false,
    },
    {
      icon: MapPin,
      label: language === "id" ? "Alamat" : "Address",
      value: company.address,
      href: null,
      external: false,
    },
  ];

  return (
    <section
      id="contact"
      className="flex min-h-screen items-center bg-white py-24"
    >
      <Container>
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-secondary"
          >
            {t.contact.tag}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-3xl font-bold text-primary md:text-4xl lg:text-5xl"
          >
            {t.contact.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-gray"
          >
            {t.contact.desc}
          </motion.p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const name = form.elements.name.value;
                const email = form.elements.email.value;
                const subject = form.elements.subject.value;
                const message = form.elements.message.value;
                const body = `Halo CBSA,\n\nNama: ${name}\nEmail: ${email}\n\n${message}`;
                window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              }}
              className="space-y-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-primary">
                    {t.contact.formName}
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder={language === "id" ? "Masukkan nama Anda" : "Enter your full name"}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-primary outline-none transition-colors focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-primary">
                    {t.contact.formEmail}
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder={language === "id" ? "Masukkan email Anda" : "Enter your email address"}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-primary outline-none transition-colors focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-primary">
                  {t.contact.formSubject}
                </label>
                <input
                  name="subject"
                  type="text"
                  required
                  placeholder={language === "id" ? "Perihal pesan / jenis kapal" : "Subject / vessel type"}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-primary outline-none transition-colors focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-primary">
                  {t.contact.formMessage}
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder={language === "id" ? "Tulis pesan Anda di sini..." : "Type your message details here..."}
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-primary outline-none transition-colors focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                />
              </div>
              <Button type="submit" size="lg" className="w-full gap-2">
                {t.contact.submitBtn}
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>

          {/* Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center gap-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10">
                  <info.icon className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-medium text-gray">
                    {info.label}
                  </h4>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.external ? "_blank" : undefined}
                      rel={info.external ? "noopener noreferrer" : undefined}
                      className="text-lg font-semibold text-primary transition-colors hover:text-secondary"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-lg font-semibold text-primary">
                      {info.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Google Maps Embed */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="overflow-hidden rounded-2xl border border-slate-100"
            >
              <iframe
                src="https://maps.google.com/maps?q=Jalan%20Duyung%20Sungai%20Jodoh%20Batu%20Ampar%20Batam&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi CBSA - Batu Ampar, Batam"
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
