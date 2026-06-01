/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Fish, Leaf, Sparkles } from "lucide-react";
import { CONTACT_INFO } from "../data";
import harmafarm from "../assets/harmafarm.png";

interface NavbarProps {
  scrollProgress: number;
}

export default function Navbar({ scrollProgress }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Produk", href: "#produk", id: "produk" },
    { name: "Tentang Kami", href: "#tentang-kami", id: "tentang-kami" },
    { name: "Keunggulan", href: "#keunggulan", id: "keunggulan" },
    { name: "Proses", href: "#proses", id: "proses" },
    { name: "Kontak", href: "#kontak", id: "kontak" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active link detection
      const offsets = navLinks.map((link) => {
        const el = document.getElementById(link.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return { id: link.id, top: Math.abs(rect.top), visible: rect.top < 300 && rect.bottom > 100 };
        }
        return { id: link.id, top: Infinity, visible: false };
      });

      const currentlyVisible = offsets.find((o) => o.visible);
      if (currentlyVisible) {
        setActiveSection(currentlyVisible.id);
      } else {
        // Fallback to closest if none perfectly visible
        const sorted = [...offsets].sort((a, b) => a.top - b.top);
        if (sorted[0] && sorted[0].top < window.innerHeight / 2) {
          setActiveSection(sorted[0].id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offsetPos = element.offsetTop - 80;
      window.scrollTo({
        top: offsetPos,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-light/90 backdrop-blur-md shadow-sm border-b border-brand-soft/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      {/* Scroll Progress Indicator */}
      <div
        id="scroll-progress-indicator"
        className="absolute bottom-0 left-0 h-[3px] bg-brand-accent transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          id="navbar-logo-link"
          href="#home"
          onClick={(e) => handleLinkClick(e, "#home")}
          className="flex items-center group cursor-pointer"
        >
          <img
            src={harmafarm}
            alt="HarmaFarm Logo"
            className="h-14 w-auto object-contain"
        />
        </a>

        {/* Desktop Navigation Link Menu */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              id={`nav-link-${link.id}`}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`font-medium text-sm transition-colors relative py-1 hover:text-brand-primary ${
                activeSection === link.id
                  ? "text-brand-primary font-semibold"
                  : "text-brand-dark/70"
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-primary rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop Right CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            id="navbar-cta-whatsapp"
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs font-semibold text-brand-dark rounded-full group bg-gradient-to-br from-brand-accent to-brand-primary hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-brand-soft"
          >
            <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-zinc-900 rounded-full group-hover:bg-opacity-0 text-brand-primary group-hover:text-white flex items-center gap-1.5 cursor-pointer">
              <Phone className="w-3.5 h-3.5 animate-pulse" />
              Pesan Sekarang
            </span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg text-brand-dark hover:bg-brand-soft/20 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Sidebar Flyout */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-brand-light border-b border-brand-soft/40 shadow-inner overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`mobile-nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-base font-semibold py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                    activeSection === link.id
                      ? "bg-brand-soft/30 text-brand-primary"
                      : "text-brand-dark/80 hover:bg-brand-soft/10"
                  }`}
                >
                  {link.name}
                  {activeSection === link.id && <Sparkles className="w-4 h-4 text-brand-accent" />}
                </a>
              ))}
              <a
                id="mobile-nav-cta-whatsapp"
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full py-3 mt-2"
              >
                <Phone className="w-4 h-4" />
                Pesan via WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
