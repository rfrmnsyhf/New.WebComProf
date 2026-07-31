import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Send, CheckCircle2, Clock, ExternalLink } from "lucide-react";
import ContainerComponent from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { company } from "@/constants/company";
import { useLanguage } from "@/context/LanguageContext";

const Contact = () => {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      label: language === "id" ? "Alamat Kantor Utama" : "Head Office Address",
      value: company.address || "Jalan Duyung, Sungai Jodoh, Batu Ampar, Batam",
      href: "https://maps.app.goo.gl/smhUJhroBtSYYabU6",
      external: true,
      subtext: "Batu Ampar, Kepulauan Riau",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const subject = form.elements.subject.value;
    const message = form.elements.message.value;

    const body = `Halo CBSA,\n\nNama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`;
    const mailtoUrl = `mailto:${company.email2 || "alvianprajatama@gmail.com"}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-slate-50/50 py-20 lg:py-28">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <ContainerComponent className="relative z-10">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
            {t?.contact?.tag || (language === "id" ? "Hubungi Kami" : "Contact Us")}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-extrabold tracking-tight text-primary md:text-4xl lg:text-5xl"
          >
            {t?.contact?.title || (
              language === "id" ? (
                <>
                  Konsultasikan <span className="text-secondary">Kebutuhan Maritim</span> Anda
                </>
              ) : (
                <>
                  Get in Touch With <span className="text-secondary">Our Maritime Experts</span>
                </>
              )
            )}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-base text-slate-600 md:text-lg"
          >
            {t?.contact?.desc ||
              (language === "id"
                ? "Tim profesional kami siap memberikan solusi layanan keagenan kapal dan logistik terbaik untuk operasional bisnis Anda."
                : "Our professional team is ready to deliver tailored shipping agency and maritime logistics solutions for your business.")}
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Form Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-200/40 sm:p-8 lg:p-10">
              <h3 className="mb-2 text-xl font-bold text-primary">
                {language === "id" ? "Kirim Pesan Langsung" : "Send Us a Message"}
              </h3>
              <p className="mb-8 text-sm text-slate-500">
                {language === "id"
                  ? "Isi formulir di bawah ini untuk terhubung langsung melalui email kami."
                  : "Fill out the form below to get in touch directly via email."}
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center rounded-2xl bg-emerald-50 p-8 text-center border border-emerald-200/80"
                >
                  <CheckCircle2 className="mb-3 h-12 w-12 text-emerald-600" />
                  <h4 className="text-lg font-bold text-emerald-900">
                    {language === "id" ? "Aplikasi Email Terbuka!" : "Email Client Opened!"}
                  </h4>
                  <p className="mt-1 text-sm text-emerald-700">
                    {language === "id"
                      ? "Pesan Anda telah disiapkan di aplikasi email Anda. Silakan tekan tombol kirim pada email Anda."
                      : "Your draft has been prepared. Please click send in your email app."}
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="mt-6 border-emerald-300 text-emerald-800 hover:bg-emerald-100"
                  >
                    {language === "id" ? "Kirim Pesan Lain" : "Send Another Message"}
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                        {t?.contact?.formName || (language === "id" ? "Nama Lengkap" : "Full Name")}
                      </label>
                      <input
                        name="name"
                        type="text"
                        required
                        placeholder={language === "id" ? "Contoh: John Doe" : "e.g. John Doe"}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-primary outline-none transition-all duration-200 focus:border-secondary focus:bg-white focus:ring-4 focus:ring-secondary/10"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                        {t?.contact?.formEmail || "Email Address"}
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder={language === "id" ? "nama@perusahaan.com" : "name@company.com"}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-primary outline-none transition-all duration-200 focus:border-secondary focus:bg-white focus:ring-4 focus:ring-secondary/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                      {t?.contact?.formSubject || (language === "id" ? "Perihal / Subjek" : "Subject")}
                    </label>
                    <input
                      name="subject"
                      type="text"
                      required
                      placeholder={
                        language === "id"
                          ? "Contoh: Permintaan Keagenan Kapal Tug & Barge"
                          : "e.g. Vessel Agency Request"
                      }
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-primary outline-none transition-all duration-200 focus:border-secondary focus:bg-white focus:ring-4 focus:ring-secondary/10"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                      {t?.contact?.formMessage || (language === "id" ? "Detail Pesan" : "Message Details")}
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder={
                        language === "id"
                          ? "Tulis rincian kebutuhan keagenan, estimasi kedatangan kapal, atau kargo..."
                          : "Describe your agency or cargo support requirements..."
                      }
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-primary outline-none transition-all duration-200 focus:border-secondary focus:bg-white focus:ring-4 focus:ring-secondary/10"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full gap-2 rounded-xl bg-primary py-6 text-sm font-bold text-white shadow-md transition-all hover:bg-primary/90 hover:shadow-lg active:scale-[0.99]"
                  >
                    {isSubmitting
                      ? language === "id"
                        ? "Menyiapkan Pesan..."
                        : "Preparing Message..."
                      : t?.contact?.submitBtn || (language === "id" ? "Kirim Pesan Sekarang" : "Send Message Now")}
                    <Send className="h-4 w-4 text-secondary" />
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right Column: Contact Cards + Interactive Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6 lg:col-span-5"
          >
            {/* Contact Details List */}
            <div className="flex flex-col gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.external ? "_blank" : undefined}
                      rel={info.external ? "noopener noreferrer" : undefined}
                      className="group flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:border-secondary/40 hover:shadow-md"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                        <info.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            {info.label}
                          </p>
                          {info.external && (
                            <ExternalLink className="h-3.5 w-3.5 text-slate-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-secondary" />
                          )}
                        </div>
                        <p className="mt-1 truncate text-base font-bold text-primary transition-colors group-hover:text-secondary">
                          {info.value}
                        </p>
                        <p className="mt-0.5 text-xs text-slate-500">{info.subtext}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                        <info.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          {info.label}
                        </p>
                        <p className="mt-1 text-base font-bold text-primary">{info.value}</p>
                        <p className="mt-0.5 text-xs text-slate-500">{info.subtext}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Google Maps Container */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm"
            >
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3.5 bg-slate-50/80">
                <span className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                  <MapPin className="h-4 w-4 text-secondary" />
                  {language === "id" ? "Lokasi Operasional Batam" : "Batam Operational Base"}
                </span>
                <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-600">
                  <Clock className="h-3 w-3" />
                  WIB (UTC+7)
                </span>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0493!2d103.998546!3d1.156398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMDknMjMuMCJOIDEwM8KwNTknNTQuOCJF!5e0!3m2!1sid!2sid!4v1785422480956"
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi CBSA"
              />
            </motion.div>
          </motion.div>
        </div>
      </ContainerComponent>
    </section>
  );
};

export default Contact;