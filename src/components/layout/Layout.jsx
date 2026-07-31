import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import BackToTop from "@/components/common/BackToTop";

const Layout = () => {
  const { pathname } = useLocation();
  const isWhatsAppPage = pathname === "/whatsapp";

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Outlet />
      </main>
      {!isWhatsAppPage && <Footer />}
      {!isWhatsAppPage && <WhatsAppButton />}
      <BackToTop />
    </>
  );
};

export default Layout;
