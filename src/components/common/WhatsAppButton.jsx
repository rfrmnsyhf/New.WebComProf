import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <Link
      to="/whatsapp"
      className="fixed bottom-6 right-6 z-50 print:hidden"
      aria-label="Chat WhatsApp"
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:bg-green-600 hover:shadow-xl"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.div>
    </Link>
  );
};

export default WhatsAppButton;
