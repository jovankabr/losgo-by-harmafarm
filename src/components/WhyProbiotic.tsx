/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { Leaf, Check, X, ShieldCheck, Sparkles, Smile, Trophy, Award, BrainCircuit, Heart, Droplets } from "lucide-react";
import { WHY_PROBIOTIC_CATFISH } from "../data";
import komposisi from "../assets/komposisi.jpeg";

export default function WhyProbiotic() {
  const [activeCard, setActiveCard] = useState<number>(0);

  // Quick comparison data to build high educational trust
  const comparisonData = [
    {
      metric: "Persiapan Memasak",
      traditional: "Harus membersihkan, memotong, dan meracik bumbu dari awal.",
      probiotic: "Sudah dibersihkan dan dimarinasi, siap diolah.",
      badge: "PROSES"
    },
    {
      metric: "Kepraktisan",
      traditional: "Membutuhkan waktu persiapan lebih lama.",
      probiotic: "Cukup goreng, kukus, atau panaskan dalam hitungan menit.",
      badge: "PRAKTIS"
    },
    {
      metric: "Konsistensi Rasa",
      traditional: "Rasa bergantung pada racikan bumbu masing-masing.",
      probiotic: "Menggunakan bumbu pilihan dengan cita rasa yang konsisten.",
      badge: "RASA"
    },
    {
      metric: "Kebersihan",
      traditional: "Perlu proses pembersihan tambahan sebelum diolah.",
      probiotic: "Diproses higienis dan siap dimasak.",
      badge: "HIGIENIS"
    },
    {
      metric: "Pilihan Produk",
      traditional: "Pilihan menu terbatas pada bahan mentah.",
      probiotic: "Tersedia LOSGo, NilaSigo, Bandeng, Gurame, Rolade, dan Fillet.",
      badge: "VARIAN"
    }
  ];

  // Specific icons for the 4 feature cards
  const featureIcons = [Trophy, BrainCircuit, Droplets, Heart];

  return (
    <section id="keunggulan" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-soft/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div id="keunggulan-header" className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-display font-extrabold text-xs uppercase tracking-widest text-brand-primary mb-3 inline-flex items-center gap-1.5 p-1 px-3 bg-brand-soft rounded-full">
            <Sparkles className="w-3 h-3 text-brand-accent animate-pulse" />
            KEUNGGULAN HARMAFARM
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-brand-dark mb-4">
            Mengapa HarmaFarm Menjadi Pilihan <span className="text-brand-primary">Banyak Orang?</span>
          </h2>
          <p className="text-base text-brand-dark/70">
            Produk HarmaFarm diolah dari ikan pilihan, dimarinasi dengan bumbu berkualitas, dan diproses secara higienis untuk menghadirkan cita rasa terbaik bagi Orang Indonesia.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left: 4 Feature Cards (Interactive) */}
          <div id="why-cards-group" className="lg:col-span-6 flex flex-col gap-4 justify-between">
            {WHY_PROBIOTIC_CATFISH.map((feature, idx) => {
              const IconComponent = featureIcons[idx];
              const isActive = activeCard === idx;
              return (
                <motion.div
                  key={feature.id}
                  onClick={() => setActiveCard(idx)}
                  className={`p-6 rounded-2xl border transition-all duration-300 text-left cursor-pointer flex gap-5 items-start ${
                    isActive
                      ? "bg-brand-primary border-brand-primary shadow-lg text-brand-light transform scale-102"
                      : "bg-white border-brand-soft/60 hover:border-brand-primary/20 text-brand-dark"
                  }`}
                  whileHover={{ scale: isActive ? 1.02 : 1.01 }}
                  id={`feature-card-${feature.id}`}
                >
                  <div className={`p-3 rounded-xl shrink-0 shadow-sm ${
                    isActive ? "bg-brand-accent text-brand-dark" : "bg-brand-soft/30 text-brand-primary"
                  }`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`font-display font-extrabold text-base sm:text-lg mb-1 ${
                      isActive ? "text-brand-accent" : "text-brand-primary"
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                      isActive ? "text-white/80" : "text-brand-dark/40"
                    }`}>
                      {feature.boldText}
                    </p>
                    <p className={`text-xs sm:text-sm leading-relaxed ${
                      isActive ? "text-white/90" : "text-brand-dark/60"
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Infographic Comparison Visual Board */}
          <div id="why-infographic" className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-soft shadow-xl h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center border-b border-brand-soft/60 pb-4 mb-6">
                  <div>
                    <h4 className="font-display font-black text-lg text-brand-dark">
                      Keunggulan Produk HarmaFarm
                    </h4>
                    <p className="text-xs text-brand-dark/50">Mengapa produk HarmaFarm menjadi pilihan praktis untuk kebutuhan sehari-hari.</p>
                  </div>
                  <div className="bg-brand-accent/20 text-brand-primary font-bold text-[10px] uppercase py-1 px-2.5 rounded-full">
                    Pasti Bersih,
                    <br />
                    Pasti Enak!
                  </div>
                </div>

                {/* Grid Comparison Rows */}
                <div className="space-y-4">
                  {comparisonData.map((row) => (
                    <div
                      key={row.metric}
                      className="grid grid-cols-1 sm:grid-cols-12 gap-2 border-b border-brand-soft/30 pb-3 last:border-0"
                    >
                      {/* Metric Category Label */}
                      <div className="sm:col-span-3 flex sm:flex-col items-start gap-1 justify-center">
                        <span className="font-display font-black text-xs text-brand-dark max-w-[100px] leading-tight">
                          {row.metric}
                        </span>
                        <span className="text-[9px] uppercase tracking-wider font-extrabold text-brand-secondary">
                          {row.badge}
                        </span>
                      </div>

                      {/* Traditional */}
                      <div className="sm:col-span-4 bg-rose-50/50 p-2 sm:p-2.5 rounded-xl border border-rose-100 flex gap-2 items-start text-left">
                        <X className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                        <span className="text-[11px] text-rose-900/80 leading-relaxed font-medium">
                          {row.traditional}
                        </span>
                      </div>

                      {/* Probiotic LOSGo */}
                      <div className="sm:col-span-5 bg-brand-soft/20 p-2 sm:p-2.5 rounded-xl border border-brand-soft flex gap-2 items-start text-left">
                        <Check className="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                        <span className="text-[11px] text-brand-primary leading-relaxed font-bold">
                          {row.probiotic}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Badge Bottom Footer */}
              <div className="mt-8 flex gap-3 items-center bg-brand-soft/20 border border-brand-soft/40 p-4 rounded-xl">
                <ShieldCheck className="w-8 h-8 text-brand-primary shrink-0" />
                <p className="text-[11px] text-brand-dark/70 text-left leading-relaxed">
                  Semua benih lele kami dikarantina ketat dan dibudidayakan bermitra dengan pakar perikanan setempat di daerah Klaten utara untuk menghasilkan standarisasi bersih yang berkelanjutan.
                </p>
              </div>

            </motion.div>
          </div>

                </div>

        {/* Komposisi Pakan Probiotik */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="bg-white rounded-3xl border border-brand-soft shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              
              <div className="p-8 lg:p-10 text-left">
                <span className="inline-block bg-brand-soft text-brand-primary text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                  Pakan Probiotik HarmaFarm
                </span>

                <h3 className="font-display font-black text-2xl sm:text-3xl text-brand-dark mb-4">
                  Nutrisi Alami untuk Menghasilkan Ikan Berkualitas
                </h3>

                <p className="text-brand-dark/70 leading-relaxed mb-6">
                  Ikan HarmaFarm dibudidayakan menggunakan pakan full pelet dan fermentasi probiotik yang diracik dari bahan-bahan alami pilihan untuk membantu menjaga kesehatan ikan, kualitas daging, dan pertumbuhan yang optimal.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Pelet",
                    "Nanas",
                    "Gula Merah",
                    "Air Kelapa",
                    "Ragi",
                    "Yakult"
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 bg-brand-soft/20 rounded-xl px-3 py-2"
                    >
                      <Check className="w-4 h-4 text-brand-primary" />
                      <span className="text-sm font-semibold text-brand-dark">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-full">
                <img
                  src={komposisi}
                  alt="Komposisi Pakan Probiotik HarmaFarm"
                  className="w-full h-full object-cover min-h-[350px]"
                />
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
