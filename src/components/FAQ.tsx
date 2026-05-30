/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { FAQS, CONTACT_INFO } from "../data";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      {/* Background soft spots */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-brand-soft/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div id="faq-header" className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-display font-extrabold text-xs uppercase tracking-widest text-brand-secondary mb-3 inline-block">
            Tanya Jawab Pintar
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-brand-dark mb-4">
            Pertanyaan yang Sering <span className="text-brand-primary">Diajukan</span>
          </h2>
          <p className="text-sm sm:text-base text-brand-dark/60">
            Temukan jawaban komprehensif seputar budidaya lele probiotik, masa kesegaran, instruksi ramah saji, hingga metode pemesanan produk kami.
          </p>
        </div>

        {/* Accordions Stack */}
        <div id="faqs-accordion-stack" className="space-y-4 text-left">
          {FAQS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-brand-bg rounded-2xl border border-brand-soft/50 overflow-hidden transition-all duration-300"
              >
                {/* Clickable Header Button */}
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none cursor-pointer hover:bg-brand-soft/10 transition-colors"
                  aria-expanded={isOpen}
                  id={`faq-btn-${item.id}`}
                >
                  <div className="flex gap-4 items-center pr-4">
                    <HelpCircle className="w-5 h-5 text-brand-primary shrink-0" />
                    <span className="font-display font-bold text-sm sm:text-base text-brand-dark">
                      {item.question}
                    </span>
                  </div>
                  
                  {/* Rotating Chevron Icon indicator */}
                  <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-primary border border-brand-soft/30 shadow-xs transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Inner Collapsed Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-brand-dark/70 leading-relaxed border-t border-brand-soft/25">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

        {/* Support helper CTA bottom note */}
        <div className="mt-12 text-center bg-brand-soft/20 p-5 rounded-2xl border border-brand-soft/30 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <MessageSquare className="w-10 h-10 text-brand-primary shrink-0" />
            <div>
              <h4 className="font-display font-bold text-xs sm:text-sm text-brand-dark">Ada Pertanyaan Lain?</h4>
              <p className="text-xs text-brand-dark/50">Konsultan gizi tanggap kami siap melayani chat Anda 24 jam.</p>
            </div>
          </div>
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-2 px-4 text-xs font-semibold rounded-full shrink-0"
          >
            Hubungi Customer Care
          </a>
        </div>

      </div>
    </section>
  );
}
