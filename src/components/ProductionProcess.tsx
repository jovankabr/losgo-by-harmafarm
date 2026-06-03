/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Fish, Filter, Soup, Snowflake, Truck, Heart, ArrowDown, ChevronRight, Activity } from "lucide-react";
import { PRODUCTION_PROCESS, ProcessStep } from "../data";

const ProcessIcons = [
  Filter,      // Seleksi Bahan Baku
  Fish,        // Pembersihan Higienis
  Soup,        // Marinasi Bumbu Pilihan
  Snowflake,   // Pengemasan & Pembekuan
  Truck,       // Siap Dinikmati
  Heart,       // Konsumen Bahagia
];

export default function ProductionProcess() {
  return (
    <section id="proses" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-brand-soft/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div id="process-header" className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-display font-extrabold text-xs uppercase tracking-widest text-brand-primary mb-3 inline-block p-1 px-3 bg-brand-soft rounded-full">
            PROSES PRODUKSI HIGIENIS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-brand-dark mb-4">
            Proses Produksi <span className="text-brand-primary">HarmaFarm</span>
          </h2>
          <p className="text-sm sm:text-base text-brand-dark/60">
            Setiap produk HarmaFarm melalui proses seleksi, pembersihan, marinasi, dan pengemasan yang terjaga untuk menghasilkan produk yang praktis dan berkualitas.
          </p>
        </div>

        {/* Process Timeline Flow */}
        <div id="process-timeline" className="relative">
          
          {/* Central Vertical Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-accent transform -translate-x-1/2 -z-5" />

          {/* Steps Layout */}
          <div className="space-y-12 lg:space-y-20">
            {PRODUCTION_PROCESS.map((step: ProcessStep, index: number) => {
              const StepIcon = ProcessIcons[index];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-16 relative ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                  id={`process-step-${step.id}`}
                >
                  
                  {/* Step Info Content Box */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-1/2 flex justify-center lg:justify-end"
                  >
                    <div className={`bg-white rounded-3xl p-6 sm:p-8 border border-brand-soft/80 shadow-md hover:shadow-xl transition-shadow duration-300 max-w-[480px] text-left w-full relative ${
                      isEven ? "lg:text-right" : "lg:text-left"
                    }`}>
                      {/* Monospace Indicator Badge */}
                      <span className="font-mono text-xs font-bold text-brand-accent uppercase tracking-widest bg-brand-primary py-1 px-3 rounded-full mb-3 inline-block">
                        {step.duration}
                      </span>
                      
                      <h3 className="font-display font-black text-brand-dark text-lg sm:text-xl mb-3 leading-snug">
                        {step.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-brand-dark/70 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Small subtle hover card decoration indicators */}
                      <div className={`absolute bottom-4 h-1.5 w-12 bg-brand-primary rounded-full hidden sm:block ${
                        isEven ? "right-6" : "left-6"
                      }`} />
                    </div>
                  </motion.div>

                  {/* Central Node Visual Ring */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-14 h-14 rounded-full bg-white border-4 border-brand-primary flex items-center justify-center text-brand-primary shadow-lg"
                    >
                      <StepIcon className="w-5 h-5" />
                    </motion.div>
                    
                    {/* Circle Step Number Indicator outside Node */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-brand-accent text-brand-dark rounded-full flex items-center justify-center text-[10px] font-black border-2 border-white font-mono">
                      {step.id}
                    </div>
                  </div>

                  {/* Mobile Mobile-only Nodes and Connections */}
                  <div className="lg:hidden flex items-center gap-4 w-full justify-start max-w-[480px] mx-auto -mt-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center shadow-md">
                      <StepIcon className="w-4 h-4" />
                    </div>
                    <span className="font-mono font-bold text-xs text-brand-dark/40">
                      Langkah {step.id} dari 6
                    </span>
                    {index < 5 && <ArrowDown className="w-4 h-4 text-brand-secondary animate-bounce ml-auto" />}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
