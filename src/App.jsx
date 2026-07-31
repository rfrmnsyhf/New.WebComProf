import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import LoadingScreen from "@/components/common/LoadingScreen";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Industries from "@/pages/Industries";
import Contact from "@/pages/Contact";
import Portfolio from "@/pages/Portfolio";
import Whatsapp from "@/pages/Whatsapp";
import NotFound from "@/pages/NotFound";
import { LanguageProvider } from "@/context/LanguageContext";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <LanguageProvider>
      <BrowserRouter>
        <LoadingScreen onComplete={handleLoadingComplete} />
        {!loading && (
          <>
            <ScrollToTop />
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/whatsapp" element={<Whatsapp />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </>
        )}
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
