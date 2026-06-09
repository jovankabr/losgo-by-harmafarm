/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Instagram, Smartphone, MapPin, MousePointer, TrendingUp, Users, ThumbsUp, Star, ArrowUpRight} from "lucide-react";
import { DIGITAL_PRESENCE, SocialMediaStat } from "../data";

const PlatformIcons = {
  Instagram: Instagram,
  TikTok: Smartphone, // Using Smartphone to represent mobile-first shortform video TikTok
  "Google Maps": MapPin,
  Website: MousePointer,
  YouTube: Play,
};

export default function DigitalPresence() {
  // SVG points for an ultra-smooth community interaction graph
  const sparklineData = [10, 25, 18, 48, 42, 65, 58, 92, 85, 120];
  const chartHeight = 80;
  const chartWidth = 320;
  
  // Convert points to SVG polyline string coordinates
  const svgPoints = sparklineData
    .map((val, idx) => {
      const x = (idx / (sparklineData.length - 1)) * chartWidth;
      const y = chartHeight - (val / 130) * chartHeight + 10;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <section id="digital" className="py-24 bg-white relative overflow-hidden">
      {/* Soft backgrounds */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-brand-soft/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div id="digital-header" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7 text-left">
            <span className="font-display font-extrabold text-xs uppercase tracking-widest text-brand-secondary mb-3 inline-block">
              INFORMASI & PEMESANAN
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-brand-dark mb-4">
              Temukan <span className="text-brand-primary">HarmaFarm</span> di Berbagai Platform
            </h2>
            <p className="text-sm sm:text-base text-brand-dark/60 max-w-xl">
              Ikuti informasi produk terbaru, promo, resep olahan, serta hubungi HarmaFarm melalui berbagai kanal resmi kami.
            </p>
          </div>

          {/* Interactive sparkline summary badge */}
          <div className="lg:col-span-5 bg-brand-bg rounded-2xl p-4 border border-brand-soft flex items-center justify-between shadow-sm">
            <div className="text-left">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-dark/40 leading-none">PESANAN TERLAYANI</span>
              <div className="font-display font-bold text-lg text-brand-primary mt-1">1000+ Produk Terjual</div>
              <p className="text-[10px] text-brand-dark/50 leading-relaxed font-semibold">Melayani Pelanggan Setiap Hari</p>
            </div>
            
            {/* Sparkline Graph */}
            <div className="relative w-40 h-12 overflow-visible">
              <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-full">
                <defs>
                  <linearGradient id="gradient-sparkline" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#A4C639" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#315B35" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Gradient area */}
                <path
                  d={`M0,${chartHeight} L${svgPoints} L${chartWidth},${chartHeight} Z`}
                  fill="url(#gradient-sparkline)"
                />
                {/* Thick glow line */}
                <polyline
                  fill="none"
                  stroke="#315B35"
                  strokeWidth="6"
                  points={svgPoints}
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Digital Grid Bento Dashboard */}
        <div id="digital-bento-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIGITAL_PRESENCE.map((stat: SocialMediaStat, idx: number) => {
            const IconComponent = PlatformIcons[stat.platform];
            return (
              <motion.a
                key={stat.platform}
                href={stat.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-brand-bg rounded-3xl p-6 border border-brand-soft/60 hover:border-brand-primary/20 hover:bg-white hover:shadow-xl hover:shadow-brand-primary/[0.04] transition-all duration-300 flex flex-col justify-between text-left cursor-pointer h-full relative"
                id={`digital-card-${stat.platform.toLowerCase().replace(/\s/g, "-")}`}
              >
                {/* Arrow up icon on hover */}
                <div className="absolute top-6 right-6 text-brand-primary/50 group-hover:text-brand-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                <div>
                  {/* Platform visual identifier */}
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="w-11 h-11 rounded-2xl bg-white border border-brand-soft flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-black text-xs text-brand-secondary uppercase tracking-widest leading-none">
                        {stat.platform}
                      </h4>
                      <p className="text-xs font-semibold text-brand-dark/80 mt-1 leading-none">
                        {stat.handle}
                      </p>
                    </div>
                  </div>

                  {/* Big Number Metrics */}
                  <div className="mb-4">
                    <div className="text-2xl font-black text-brand-primary font-display leading-tight">
                      {stat.metric}
                    </div>
                  </div>
                </div>

                {/* Subtext info */}
                <div className="border-t border-brand-soft/40 pt-4 mt-2 flex flex-col items-start gap-1">
                  <span className="text-[10px] font-extrabold uppercase text-brand-accent tracking-wider">
                    {stat.change}
                  </span>
                  <span className="text-xs font-semibold text-brand-dark/50 group-hover:text-brand-primary transition-colors flex items-center gap-1 mt-1">
                    {stat.actionText}
                    <ArrowUpRight className="w-3 h-3 group-hover:animate-pulse" />
                  </span>
                </div>

              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
