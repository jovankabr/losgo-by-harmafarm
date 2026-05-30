/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Phone, CheckCircle, Sparkles, AlertCircle, ShoppingBag } from "lucide-react";
import { CONTACT_INFO } from "../data";

export default function CTA() {
  const bulletBenefits = [
    "Garansi Bebas Bau Lumpur (Amis)",
    "Pilihan Praktis Siap Sajikan < 10 Menit",
    "Pengiriman Rantai Dingin (Cold Chain) Aman",
    "Bebas Zat Kimia / Pengawet Berbahaya",
  ];

  return (
    <section id="cta-banner" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Glowing Background Banner container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-brand-primary to-emerald-900 rounded-[32px] p-8 sm:p-12 md:p-16 text-center text-white overflow-hidden shadow-2xl border border-brand-primary"
          id="cta-wrapper"
        >
          {/* Abstract floating circles background decorations */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-secondary/20 rounded-full blur-3xl" />

          {/* Banner contents */}
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Tag block */}
            <span className="font-display font-extrabold text-xs uppercase tracking-widest text-brand-accent bg-white/10 py-1 px-4 rounded-full mb-6 inline-flex items-center gap-1.5 border border-white/10 backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 fill-brand-accent text-brand-accent animate-pulse" />
              Nutrisi Praktis, Sehat Tangguh
            </span>

            {/* Headline */}
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight text-white mb-6">
              Mulai Hidup Lebih Sehat <br className="hidden sm:inline" />
              Bersama <span className="text-brand-accent">LOSGo Healthy Food</span>
            </h2>

            {/* Paragraph copywrite */}
            <p className="text-white/80 text-sm sm:text-base md:text-lg mb-10 max-w-xl leading-relaxed">
              Bergabunglah bersama ribuan keluarga Indonesia aktif yang telah merasakan kemudahan menyajikan hidangan harian murni kaya protein dan Omega-3 bebas cemas.
            </p>

            {/* Action buttons list group */}
            <div className="flex flex-col sm:flex-row gap-4 items-center mb-10 w-full sm:w-auto">
              <a
                id="cta-whatsapp-order-trigger"
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent text-brand-dark font-extrabold py-4 px-8 rounded-full sm:text-base w-full sm:w-auto shadow-xl group border-2 border-transparent hover:border-white/20 hover:scale-103 cursor-pointer"
              >
                <Phone className="w-4 h-4 animate-shake fill-brand-dark" />
                <span>Pesan Sekarang via WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  const el = document.getElementById("produk");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white/20 font-semibold py-4 px-8 rounded-full sm:text-base transition-all w-full sm:w-auto hover:border-white cursor-pointer"
              >
                Eksplor Galeri Menu
              </button>
            </div>

            {/* Benefits check rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10 pt-8 w-full max-w-2xl text-left">
              {bulletBenefits.map((benefit) => (
                <div key={benefit} className="flex gap-2.5 items-center">
                  <CheckCircle className="w-4 h-4 text-brand-accent shrink-0" />
                  <span className="text-xs sm:text-sm text-white/95 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Support guarantee subtitle bottom notice */}
            <p className="text-[10px] text-white/50 tracking-wide uppercase mt-8 inline-flex items-center gap-1.5">
              <AlertCircle className="w-3 h-3" />
              Layanan Pesan Antar Seluruh Yogyakarta, Klaten & Solo Raya Terjamin Fresh
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
