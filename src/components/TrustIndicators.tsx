/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Award, Fish, Activity, ShieldCheck, Zap } from "lucide-react";
import { TRUST_INDICATORS } from "../data";

// Map string icon names to Lucide icon components
const IconMap = {
  Award: Award,
  Fish: Fish,
  Activity: Activity,
  ShieldCheck: ShieldCheck,
  Zap: Zap,
};

export default function TrustIndicators() {
  return (
    <section id="trust-indicators" className="py-16 bg-[#F8FAF7] border-y border-brand-soft/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Responsive horizontal track */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 items-stretch">
          {TRUST_INDICATORS.map((item, index) => {
            const IconComponent = IconMap[item.iconName];
            
            // Alternating styles based on the theme design's cards
            // Card 0: White card with light green borders
            // Card 1: Solid primary green card with offset
            // Card 2: White card with light green borders
            // Card 3: Solid accent lime card with offset
            // Card 4: White card with light green borders
            let cardClasses = "";
            let iconContainerClasses = "";
            let textTitleClasses = "";
            let textDescClasses = "";
            
            if (index === 1) {
              // Deep Green Theme
              cardClasses = "bg-[#315B35] p-6 rounded-[2rem] shadow-xl text-white sm:translate-y-4 hover:scale-[1.02] transition-transform duration-300";
              iconContainerClasses = "w-12 h-12 bg-[#A4C639] rounded-2xl flex items-center justify-center text-white mb-4";
              textTitleClasses = "font-display font-bold text-base text-white mb-2";
              textDescClasses = "text-xs text-white/80 leading-relaxed";
            } else if (index === 3) {
              // Lime/Accent Green Theme
              cardClasses = "bg-[#A4C639] p-6 rounded-[2rem] shadow-lg text-white sm:translate-y-4 hover:scale-[1.02] transition-transform duration-300";
              iconContainerClasses = "w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-4";
              textTitleClasses = "font-display font-bold text-base text-white mb-2";
              textDescClasses = "text-xs text-white/90 leading-relaxed";
            } else {
              // White border theme
              cardClasses = "bg-white p-6 rounded-[2rem] shadow-sm border border-[#DDE7D2] hover:scale-[1.02] transition-transform duration-300";
              iconContainerClasses = "w-12 h-12 bg-[#DDE7D2] rounded-2xl flex items-center justify-center text-[#315B35] mb-4";
              textTitleClasses = "font-display font-bold text-base text-[#315B35] mb-2";
              textDescClasses = "text-xs text-[#1E1E1E]/60 leading-relaxed";
            }

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${cardClasses} flex flex-col items-start text-left cursor-default h-full`}
                id={`trust-indicator-${item.id}`}
              >
                {/* Icon wrapper frame */}
                <div className={iconContainerClasses}>
                  {IconComponent && <IconComponent className="w-5 h-5" />}
                </div>

                {/* Info titles */}
                <h3 className={textTitleClasses}>
                  {item.title}
                </h3>
                <p className={textDescClasses}>
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
