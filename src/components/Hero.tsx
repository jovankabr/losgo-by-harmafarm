/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Leaf, ShieldAlert, Sparkles, CheckCircle, Flame } from "lucide-react";
import { IMAGES } from "../data";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetPos = el.offsetTop - 80;
      window.scrollTo({
        top: offsetPos,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 flex items-center overflow-hidden bg-gradient-to-b from-brand-soft/20 via-brand-bg to-brand-bg"
    >
      {/* Organic absolute background shapes */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brand-soft/40 rounded-full blur-3xl -z-10 animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl -z-10 animate-pulse duration-[10000ms]" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text Copywrite Content */}
        <div id="hero-text-content" className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#DDE7D2] border border-[#C5D9B3] px-4 py-1.5 rounded-full mb-6 font-sans text-xs font-bold text-[#315B35] uppercase tracking-wider shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A4C639] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#A4C639]" />
            </span>
            <span>Produk Olahan Lele Probiotik Berkualitas</span>
          </motion.div>

          {/* Master Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display font-black text-4xl sm:text-5xl md:text-[56px] tracking-tight leading-[1.1] text-[#315B35] mb-6"
          >
            Frozen Food Lele Probiotik <br/>
            <span className="text-[#A4C639] relative inline-block">
              Tanpa Bau Lumpur
              <svg
                className="absolute left-0 bottom-[-8px] w-full h-[12px] text-[#A4C639]/30 -z-10"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path d="M0,7 C30,2 70,2 100,7 L100,10 L0,10 Z" fill="currentColor" />
              </svg>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base sm:text-lg md:text-xl text-brand-dark/70 leading-relaxed max-w-2xl mb-8"
          >
            Diolah dari lele bio-probiotik berkualitas, tinggi protein, higienis, praktis disajikan, dan cocok untuk keluarga modern yang mengutamakan cita rasa serta kesehatan.
          </motion.p>

          {/* CTA Group Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap gap-4 w-full sm:w-auto"
          >
            <button
              id="hero-cta-lihat-produk"
              onClick={() => scrollToSection("produk")}
              className="btn-primary w-full sm:w-auto text-base group cursor-pointer"
            >
              Lihat Produk Pilihan
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
            <button
              id="hero-cta-hubungi-kami"
              onClick={() => scrollToSection("kontak")}
              className="btn-secondary w-full sm:w-auto text-base cursor-pointer"
            >
              Hubungi Kami
            </button>
          </motion.div>

          {/* Core Trust Badges Mini */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 border-t border-brand-soft/60 pt-8 mt-10 w-full"
          >
            <div className="flex flex-col gap-1">
              <span className="font-display font-bold text-xl text-brand-primary">100%</span>
              <span className="text-[11px] uppercase tracking-wider text-brand-dark/50 font-semibold">
                Bebas Bau Lumpur
              </span>
            </div>
            <div className="flex flex-col gap-1 border-x border-brand-soft/60 px-4">
              <span className="font-display font-bold text-xl text-brand-primary">Premium</span>
              <span className="text-[11px] uppercase tracking-wider text-brand-dark/50 font-semibold">
                Nutrisi Terjamin
              </span>
            </div>
            <div className="flex flex-col gap-1 pl-2">
              <span className="font-display font-bold text-xl text-brand-primary">Lokal</span>
              <span className="text-[11px] uppercase tracking-wider text-brand-dark/50 font-semibold">
                Mitra UMKM Klaten
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Hero Interactive Graphic with floating plates */}
        <div id="hero-graphic" className="lg:col-span-5 flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[420px] aspect-square flex items-center justify-center"
          >
            {/* Background glowing circle orbit */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-brand-soft rounded-full -z-10 animate-spin-slow duration-[30s]" />

            {/* Backdrop organic blob */}
            <div className="absolute w-[85%] h-[85%] rounded-full border-2 border-dashed border-brand-secondary/20 -z-5 animate-pulse" />

            {/* Custom generated Premium Culinary Dish Image Container */}
            <div className="w-[88%] h-[88%] rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-light relative group bg-brand-light">
              <img
                src={IMAGES.heroDish}
                alt="LOSGo gourmet fish nuggets"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Overlay shading gradient */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-dark/40 to-transparent h-1/3" />
            </div>

            {/* Floating Card 1: Nutrition Info */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -right-2 bg-brand-light shadow-xl p-3 rounded-2xl flex items-center gap-3 border border-brand-soft"
            >
              <div className="w-9 h-9 bg-brand-accent/20 text-brand-primary rounded-xl flex items-center justify-center font-display font-bold text-sm">
                <Flame className="w-4 h-4 fill-brand-accent text-brand-accent" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-brand-dark/50 leading-none">PROTEIN</div>
                <div className="text-xs font-extrabold text-brand-primary">+35% Lebih Padat</div>
              </div>
            </motion.div>

            {/* Floating Card 2: 100% Probiotic Certified */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-4 bg-brand-light shadow-xl py-3 px-4 rounded-2xl flex items-center gap-3 border border-brand-soft"
            >
              <div className="w-8 h-8 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-brand-primary" />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold text-brand-dark/50 leading-none">TEKNOLOGI</div>
                <div className="text-xs font-bold text-brand-dark">Lele Bio-Probiotik</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
