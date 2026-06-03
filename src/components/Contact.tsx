/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Instagram, Smartphone, Clock2, Sparkles, Send } from "lucide-react";
import { CONTACT_INFO } from "../data";

export default function Contact() {
  const contactCards = [
    {
      title: "WhatsApp Order & Reseller",
      value: CONTACT_INFO.phone,
      info: "Hubungi kami untuk pemesanan produk, konsultasi, dan informasi resseller.",
      href: CONTACT_INFO.whatsappUrl,
      icon: Phone,
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
      title: "E-mail Resmi",
      value: CONTACT_INFO.email,
      info: "Terbuka untuk diskusi, kolaborasi bisnis, serta berbagai peluang kerja sama yang saling menguntungkan.",
      href: `mailto:${CONTACT_INFO.email}`,
      icon: Mail,
      color: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      title: "Instagram Utama",
      value: "@losgo.healthyfood",
      info: "Ikuti video harian seputar menu kreasi lele probiotik sehat",
      href: CONTACT_INFO.instagram,
      icon: Instagram,
      color: "bg-pink-50 text-pink-600 border-pink-100",
    },
    {
      title: "Rumah Produksi dan Penjualan",
      value: CONTACT_INFO.address,
      info: "Dusun 4 Cirongge, Jl.Siliwangi Jl. Cipendok, Dusun 4 Karangnangka, Depok, Karangtengah, Kec. Cilongok, Kabupaten Banyumas, Jawa Tengah 53162, Indonesia",
      href: "https://maps.app.goo.gl/asRtC9NfWBkGZdHS7",
      icon: MapPin,
      color: "bg-amber-50 text-amber-600 border-amber-100",
    },
  ];

  return (
    <section id="kontak" className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div id="contact-header" className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-display font-extrabold text-xs uppercase tracking-widest text-brand-secondary mb-3 inline-block">
            Hubungi Hub Kreatif
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-brand-dark mb-4">
            Kami Selalu Ada untuk <span className="text-brand-primary">Anda</span>
          </h2>
          <p className="text-sm sm:text-base text-brand-dark/60">
            Ingin bermitra, berkonsultasi mengenai asupan protein anak, atau memesan paket agen reseller terdekat? Customer Service kami sedia membantu Anda sepenuh hati.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="contact-grid">
          
          {/* Left Column: List communication cards & timings */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6 text-left" id="contact-channels-column">
            
            <div className="space-y-4">
              {contactCards.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <motion.a
                    key={card.title}
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`block p-5 bg-white rounded-2xl border border-brand-soft hover:border-brand-primary/20 hover:shadow-lg transition-all duration-300 group cursor-pointer`}
                  >
                    <div className="flex gap-4 items-start">
                      <div className={`p-3 rounded-xl border ${card.color} shrink-0`}>
                        <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h4 className="font-display font-black text-[10px] uppercase tracking-widest text-brand-dark/40 mb-1 leading-none">
                          {card.title}
                        </h4>
                        <div className="text-sm sm:text-base font-bold text-brand-dark group-hover:text-brand-primary transition-colors leading-snug break-words">
                          {card.value}
                        </div>
                        <p className="text-xs text-brand-dark/50 mt-1 lines-clamp-1">
                          {card.info}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Operating business hours */}
            <div className="bg-brand-soft/20 border border-brand-soft/40 rounded-2xl p-5 flex gap-4 items-center">
              <div className="w-10 h-10 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0">
                <Clock2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-xs sm:text-sm text-brand-dark leading-none">Jam Operasional CS</h4>
                <p className="text-xs text-brand-dark/60 mt-1.5 leading-relaxed">
                  Layanan Chat & Reseller Terbuka Setiap Hari pukul <strong className="font-bold">08:00 - 20:00 WIB</strong>. Pesanan di luar jam kerja diproses segera esok pagi.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps viewport */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col"
            id="contact-map-column"
          >
            <div className="bg-white rounded-[32px] p-2 border border-brand-soft hover:shadow-2xl transition-shadow duration-500 overflow-hidden flex-grow flex flex-col justify-between shadow-lg h-full min-h-[400px]">
              
              {/* Google Maps Wrapper frame */}
              <div className="rounded-[24px] overflow-hidden flex-grow w-full h-[90%] relative bg-brand-soft/30 min-h-[340px]">
                <iframe
                  title="Alamat Markas LOSGo Klaten"
                  src={CONTACT_INFO.mapsEmbed}
                  className="w-full h-full border-0"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Informative footer for physical store mapping direction */}
              <div className="p-4 flex items-center justify-between gap-4">
                <div className="text-left">
                  <div className="font-display font-bold text-xs sm:text-sm text-brand-dark flex items-center gap-1">
                    <span>Polanharjo, Klaten Regency</span>
                    <Sparkles className="w-3.5 h-3.5 text-brand-accent animate-pulse" />
                  </div>
                  <p className="text-[11px] text-brand-dark/50 mt-0.5">Sidowayah, Sentra Kuliner Air Polanharjo Jawa Tengah</p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary py-2 px-4 text-xs font-semibold rounded-full flex items-center gap-1 cursor-pointer"
                >
                  <Send className="w-3 h-3" />
                  <span>Petunjuk Rute</span>
                </a>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
