/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Sparkles, Check, Gem, ShieldCheck, HeartPulse, Recycle } from "lucide-react";
import { IMAGES } from "../data";

export default function About() {
  const highlights = [
    {
      title: "Kualitas Premium",
      desc: "Menjamin bahan baku lele probiotik Grade A yang diproses higienis sempurna tanpa limbah.",
      icon: Gem,
      color: "bg-emerald-500/10 text-emerald-600",
    },
    {
      title: "Inovasi Modern",
      desc: "Mengubah komoditas tradisional menjadi sajian frozen food yang berkelas internasional.",
      icon: Sparkles,
      color: "bg-amber-500/10 text-amber-600",
    },
    {
      title: "Kesehatan Unggul",
      desc: "Alternatif makanan kaya Omega-3 murni yang aman dikonsumsi harian bebas merkuri.",
      icon: HeartPulse,
      color: "bg-rose-500/10 text-rose-600",
    },
    {
      title: "Keberlanjutan Lingkungan",
      desc: "Budidaya sistem bio-filtrasi hemat air yang ramah ekosistem dan mendukung keberlanjutan lokal.",
      icon: Recycle,
      color: "bg-blue-500/10 text-blue-600",
    },
  ];

  return (
    <section id="tentang-kami" className="py-24 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-brand-soft/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div id="about-container" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Block with stylish overlay and circular label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
            id="about-visual-block"
          >
            {/* Elegant background shadow card border */}
            <div className="absolute -inset-4 bg-brand-soft rounded-3xl -z-10 transform -rotate-1 scale-[0.98]" />
            
            {/* Main Picture */}
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-brand-light relative z-10 bg-brand-bg select-none">
              <img
                src={IMAGES.aboutFamily}
                alt="Modern Indonesian Family Dining"
                className="w-full object-cover aspect-[4/3] hover:scale-103 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-primary/5 mix-blend-overlay" />
            </div>

            {/* Experience or Focus Badge */}
            <div className="absolute -bottom-6 -right-6 lg:right-4 z-20 bg-brand-primary text-white py-4 px-5 rounded-2xl shadow-lg border border-brand-secondary">
              <div className="font-display font-black text-2xl text-brand-accent leading-none">LOSGo</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-white/80 mt-1 leading-tight">
                UMKM Pelopor<br />Sehat Klaten
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative story and feature checklist */}
          <div id="about-info-block" className="lg:col-span-7 flex flex-col items-start">
            <span className="font-display font-extrabold text-xs uppercase tracking-widest text-brand-secondary mb-3">
              Tentang Kami
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-brand-dark mb-6">
              Mengolah Ikan Lokal Menjadi{" "}
              <span className="text-brand-primary">Hidangan Praktis dan Bernutrisi</span>
            </h2>
            <div className="space-y-4 text-brand-dark/70 text-base md:text-lg mb-10 text-left">
              <p>
                <strong>HarmaFarm</strong> hadir sebagai UMKM inovatif asal Cilongok, Banyumas yang mengembangkan berbagai olahan makanan beku (frozen food) siap saji berbasis <strong>probiotik berkualitas tinggi</strong>.
              </p>
              <p className="text-sm sm:text-base">
                Kami berkomitmen menghadirkan produk ikan dan frozen food berkualitas tinggi yang sehat, praktis, dan aman dikonsumsi. Dengan bahan baku pilihan serta proses pengolahan yang higienis, setiap produk HarmaFarm dihasilkan untuk memberikan cita rasa terbaik, kandungan gizi optimal, dan pengalaman konsumsi yang lebih baik bagi keluarga Indonesia.
              </p>
            </div>

            {/* highlights grid */}
            <div id="about-highlights" className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex gap-4 items-start text-left"
                  >
                    <div className={`p-2.5 rounded-xl ${item.color} shrink-0 shadow-sm`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-extrabold text-brand-dark text-sm sm:text-base leading-snug mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-brand-dark/60 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
