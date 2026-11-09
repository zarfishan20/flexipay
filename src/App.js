import  { useEffect } from 'react';
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

import RequestQuote from './pages/RequestQuote';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.refreshHard();
  }, [pathname]);
  return null;
};

const App = () => {

  useEffect(() => {
    AOS.init({ duration: 900, easing: 'ease-out-cubic', once: true, offset: 60 });
  }, []);

 

  return (
    <>
      <Helmet>
        <title>FlexiPay Systems | Payroll & Bookkeeping Services</title>
        <meta name="description" content="FlexiPay Systems offers professional payroll and bookkeeping services in London. Trusted by small businesses across the UK." />
        <meta name="keywords" content="payroll services, bookkeeping, HMRC, accounting, FlexiPay, London accountants" />
        <meta name="author" content="FlexiPay Systems" />
        <link rel="canonical" href="https://flexipaysystems.com" />
        <meta property="og:title" content="FlexiPay Systems" />
        <meta property="og:description" content="Efficient payroll and bookkeeping services for businesses." />
        <meta property="og:image" content="https://flexipaysystems.com/preview.jpg" />
        <meta property="og:url" content="https://flexipaysystems.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "FlexiPay Systems",
            "url": "https://flexipaysystems.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "4 Wangey Road",
              "addressLocality": "Chadwell Heath",
              "addressRegion": "London",
              "postalCode": "RM6 4D",
              "addressCountry": "UK"
            },
            "telephone": "+44 1234 567 890",
            "email": "info@flexipaysystems.com"
          }
        `}</script>
      </Helmet>

      <Router>
        <ScrollToTop />
        <div className="grain" aria-hidden="true" />
        <TopBar />
        <Navbar />
        <main className="site-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/requestquote" element={<RequestQuote />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
