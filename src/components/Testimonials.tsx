/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useSiteData } from "../hooks/useSiteData";

export default function Testimonials() {
  const { data } = useSiteData()
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = data?.testimonials || []

  if (testimonials.length === 0) return null

  const prevSlide = () => setActiveIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const nextSlide = () => setActiveIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const current = testimonials[activeIndex] || testimonials[0]

  return (
    <section id="testimonial" className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brand-soft/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div id="testimonials-header" className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-display font-extrabold text-xs uppercase tracking-widest text-brand-primary mb-3 inline-block p-1 px-3 bg-brand-soft rounded-full">
            TESTIMONI PELANGGAN
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-brand-dark mb-4">
            Apa Kata Pelanggan <span className="text-brand-primary">HarmaFarm?</span>
          </h2>
          <p className="text-sm sm:text-base text-brand-dark/60">
            Berbagai pengalaman positif dari pelanggan yang telah merasakan kualitas dan kepraktisan produk HarmaFarm.
          </p>
        </div>

        <div id="testimonials-carousel" className="relative bg-white rounded-3xl p-6 sm:p-10 border border-brand-soft/60 shadow-xl overflow-hidden max-w-4xl mx-auto">
          <div className="absolute top-6 left-6 text-brand-soft/30 -z-5 select-none">
            <Quote className="w-24 h-24 rotate-180" />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center w-full min-h-[220px] justify-between"
              >
                <div>
                  <div className="flex gap-1 justify-center mb-6">
                    {Array.from({ length: current.rating }).map((_, fIdx) => (
                      <Star key={fIdx} className="w-5 h-5 text-brand-accent fill-brand-accent" />
                    ))}
                  </div>
                  <blockquote className="text-base sm:text-lg md:text-xl text-brand-dark/80 italic font-medium leading-relaxed max-w-3xl mb-8">
                    &ldquo;{current.text}&rdquo;
                  </blockquote>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-brand-primary text-brand-accent font-display font-black text-lg flex items-center justify-center shadow-md mb-3 border-2 border-brand-soft select-none">
                    {current.name.charAt(0)}
                  </div>
                  <div>
                    <cite className="not-italic font-display font-black text-brand-dark text-base">{current.name}</cite>
                    <p className="text-xs uppercase tracking-widest text-brand-secondary font-bold mt-0.5">{current.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div id="carousel-controls" className="flex items-center justify-between w-full mt-10 border-t border-brand-soft/40 pt-6">
              <button onClick={prevSlide} className="w-10 h-10 rounded-full border border-brand-soft hover:border-brand-primary hover:bg-brand-soft/20 text-brand-primary flex items-center justify-center active:scale-95 transition-all cursor-pointer shadow-sm" aria-label="Previous">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-1.5">
                {testimonials.map((t, idx) => (
                  <button key={t.id} onClick={() => setActiveIndex(idx)} className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${activeIndex === idx ? "w-6 bg-brand-primary" : "w-2 bg-brand-soft"}`} />
                ))}
              </div>
              <button onClick={nextSlide} className="w-10 h-10 rounded-full border border-brand-soft hover:border-brand-primary hover:bg-brand-soft/20 text-brand-primary flex items-center justify-center active:scale-95 transition-all cursor-pointer shadow-sm" aria-label="Next">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
