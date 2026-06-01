/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, ArrowUp, Fish, Leaf, Sparkles } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import TrustIndicators from "./components/TrustIndicators";
import About from "./components/About";
import WhyProbiotic from "./components/WhyProbiotic";
import FeaturedProducts from "./components/FeaturedProducts";
import ProductionProcess from "./components/ProductionProcess";
import DigitalPresence from "./components/DigitalPresence";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { CONTACT_INFO } from "./data";
import logoo from "./assets/logoo.png";
import harmafarm from "./assets/harmafarm.png";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Splash screen transition timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Window scroll event listeners
  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }

      // Show/hide scroll-to-top button
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div id="losgo-app-root" className="relative min-h-screen bg-brand-bg text-brand-dark antialiased selection:bg-brand-soft selection:text-brand-primary">
      
      {/* Loading Splash Screen */}
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            id="loading-splash-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-gradient-to-br from-white via-green-50 to-white z-[100] flex flex-col items-center justify-center text-brand-primary"
          >
            {/* Spinning Brand Loading Node */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-6"
            >
              {/* Spinning Fish Logo frame */}
              <div className="flex items-center gap-4">
                <img
                  src={harmafarm}
                  alt="HarmaFarm"
                  className="w-28 h-28 object-contain"
                />
              </div>

              <div className="text-center">
                <span className="font-display font-black text-2xl tracking-wide text-white block">
                  Healthy Fish Frozen Food
                </span>
                <span className="text-sm tracking-wider text-brand-accent block mt-2">
                  by HarmaFarm
                </span>
              </div>

              {/* Progress visual spark lines */}
              <div className="flex gap-1.5 justify-center items-center mt-2">
                <span className="h-1.5 w-10 bg-brand-accent rounded-full animate-pulse decoration-brand-accent" />
                <span className="h-1.5 w-6 bg-brand-primary rounded-full animate-pulse decoration-brand-primary duration-500" />
                <span className="h-1.5 w-3 bg-brand-secondary rounded-full animate-pulse decoration-brand-secondary duration-700" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main App Canvas */}
      {!loading && (
        <motion.div
          id="main-app-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* 1. Header Sticky Navigation Menu */}
          <Navbar scrollProgress={scrollProgress} />

          {/* 2. Hero Presentation Block */}
          <Hero />

          {/* 2b. Trust Bar from Design Theme */}
          <TrustBar />

          {/* 3. Horizontal Trust Factor Shelfs */}
          <TrustIndicators />

          {/* 4. About LOSGo Narratives */}
          <About />

          {/* 5. Educational Probiotic Matrix FAQ Dashboard */}
          <WhyProbiotic />

          {/* 6. Active E-Com Product Grid */}
          <FeaturedProducts />

          {/* 7. Timeline Production Flow Chain */}
          <ProductionProcess />

          {/* 8. Digital Communication campaign statistics */}
          <DigitalPresence />

          {/* 9. Testimonials */}
          <Testimonials />

          {/* 10. FAO Accordions */}
          <FAQ />

          {/* 11. High Conversion CTA Banner */}
          <CTA />

          {/* 12. Location google maps details */}
          <Contact />

          {/* 13. Footer */}
          <Footer />

          {/* Core Widget Elements: Floating WhatsApp Badge */}
          <motion.a
            id="floating-whatsapp-widget"
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat dengan Admin Gizi LOSGo"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center group focus:outline-none focus:ring-4 focus:ring-emerald-300"
          >
            {/* Soft pulsing halo ring around badge */}
            <span className="absolute -inset-0.5 rounded-full bg-emerald-500 opacity-60 animate-ping group-hover:hidden" />
            <Phone className="w-6 h-6 relative fill-white stroke-emerald-500 shrink-0" />
            
            {/* Hover text slide out info */}
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-out text-sm font-bold pl-0 group-hover:pl-2">
              Order via WhatsApp
            </span>
          </motion.a>

          {/* Core Widget Elements: Scroll to top action node */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                id="back-to-top-scroller"
                onClick={scrollToTop}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                className="fixed bottom-24 right-6 z-40 bg-white hover:bg-brand-soft border border-brand-soft text-brand-primary p-3 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:text-brand-primary focus:outline-none hover:shadow-xl"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            )}
          </AnimatePresence>

        </motion.div>
      )}

    </div>
  );
}
