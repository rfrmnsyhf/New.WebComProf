import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import BackToTop from "@/components/common/BackToTop";

const Layout = () => {
  const { pathname } = useLocation();
  const isWhatsAppPage = pathname === "/whatsapp";

  return (
    <>
      <Helmet
        defaultTitle="CBSA | PT. Chantika Bahari Sejahtera Abadi - Maritime & Logistics"
      >
        <title>CBSA | PT. Chantika Bahari Sejahtera Abadi - Maritime & Logistics</title>
        <meta
          name="description"
          content="CBSA adalah perusahaan independen di bidang jasa kepelabuhanan dan pelayaran. Ship agency, port services, dan maritime logistics di Batam, Indonesia."
        />
        <link rel="canonical" href="https://cbsabatam.com/" />
        <meta name="keywords" content="CBSA, maritime, shipping agency, port services, logistics, Batam, Indonesia, bunkering, crew manning" />
        <meta property="og:site_name" content="CBSA | PT. Chantika Bahari Sejahtera Abadi" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:image" content="https://cbsabatam.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://cbsabatam.com/og-image.jpg" />
      </Helmet>
      <Navbar />
      <main className="pt-20 print:pt-0">
        <Outlet />
      </main>
      {!isWhatsAppPage && <Footer />}
      {!isWhatsAppPage && <WhatsAppButton />}
      <BackToTop />
    </>
  );
};

export default Layout;
