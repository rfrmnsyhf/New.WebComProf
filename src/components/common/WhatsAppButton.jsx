import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { company } from "@/constants/company";

const WhatsAppButton = () => {
  return (
    <motion.a
      href={`https://wa.me/${company.phoneWhatsApp}?text=Halo%20CBSA%2C%20saya%20ingin%20konsultasi%20tentang%20layanan%20maritim.`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:bg-green-600 hover:shadow-xl"
      aria-label="Chat WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </motion.a>
  );
};

export default WhatsAppButton;
