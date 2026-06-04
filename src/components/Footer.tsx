/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Fish, Leaf, Sparkles, Mail, Phone, ChevronRight, Heart, ArrowUp } from "lucide-react";
import { CONTACT_INFO } from "../data";
import harmafarm from "../assets/harmafarm.png";
import { useSiteData } from "../hooks/useSiteData";

export default function Footer() {
  const currentYear = new Date().getFullYear();
    const { data } = useSiteData();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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

  const footerLinks = {
    brand: [
      { name: "Tentang Kami", href: "#tentang-kami" },
      { name: "Keunggulan Produk", href: "#digital" },
      { name: "Proses Produksi", href: "#proses" },
      { name: "Testimoni Pelanggan", href: "#faq-testimonials-section" },
    ],
    products: [
      { name: "LOSGo 800 gr", href: "#produk" },
      { name: "NilaSigo 800 gr", href: "#produk" },
      { name: "Lele Fillet (LeKids)", href: "#produk" },
      { name: "Rolade Lele", href: "#produk" },
    ],
    support: [
      { name: "Hubungi Penjualan", href: "#kontak" },
      { name: "Program Reseller", href: "#faq" },
      { name: "Informasi Produk", href: "#produk" },
      { name: "Lokasi Produksi", href: "#kontak" },
    ],
  };

  return (
    <footer id="footer-main" className="bg-brand-dark text-white/70 py-16 border-t border-white/5 relative overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl -z-5" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Main Grid section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-white/10 text-left">
          
          {/* Logo & Info column (span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4" id="footer-logo-panel">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "#home")}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <img
                src={data?.branding?.logoUrl || harmafarm}
                alt="HarmaFarm"
                className="h-12 w-auto"
              />
              <div>
                <span className="font-display font-bold text-2xl tracking-tight text-white">
                  <span className="text-brand-accent">HarmaFarm</span>
                </span>
                <div className="text-[10px] uppercase tracking-widest font-bold text-brand-accent leading-none -mt-1">
                  Pasti Bersih, Pasti Enak!
                </div>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-sm mt-2">
              HarmaFarm menghadirkan berbagai produk olahan ikan dan frozen food berkualitas yang diproses secara higienis, praktis disajikan, dan cocok untuk kebutuhan keluarga sehari-hari.
            </p>

            {/* Quick social labels */}
            <div className="flex gap-3 mt-4">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-primary text-white hover:text-brand-accent flex items-center justify-center transition-colors shadow-inner"
                aria-label="Direct Chat on WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-primary text-white hover:text-brand-accent flex items-center justify-center transition-colors shadow-inner"
                aria-label="Follow us on Instagram"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links structure columns (span 2 each) */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4">
            <h4 className="font-display font-black text-xs uppercase tracking-widest text-white leading-none">
              TENTANG HARMAFARM
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {footerLinks.brand.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-brand-accent transition-colors flex items-center gap-1 group py-0.5"
                  >
                    <ChevronRight className="w-3 h-3 text-brand-primary/50 group-hover:text-brand-accent transition-transform duration-300 group-hover:translate-x-0.5" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 flex flex-col items-start gap-4">
            <h4 className="font-display font-black text-xs uppercase tracking-widest text-white leading-none">
              Produk Terlaris
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-brand-accent transition-colors flex items-center gap-1 group py-0.5"
                  >
                    <ChevronRight className="w-3 h-3 text-brand-primary/50 group-hover:text-brand-accent transition-transform duration-300 group-hover:translate-x-0.5" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 flex flex-col items-start gap-4">
            <h4 className="font-display font-black text-xs uppercase tracking-widest text-white leading-none">
              Dukungan Mitra
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-brand-accent transition-colors flex items-center gap-1 group py-0.5"
                  >
                    <ChevronRight className="w-3 h-3 text-brand-primary/50 group-hover:text-brand-accent transition-transform duration-300 group-hover:translate-x-0.5" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Lower row: Copyright and credit attribution */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/40 text-left" id="footer-bottom-panel">
          <div>
            &copy; {currentYear} <strong className="font-bold text-white/60">Harma Farm</strong>. Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="flex items-center gap-1.5 shrink-0 select-none">
            <span>HarmaFarm • Higienis • Praktis • Berkualitas</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
