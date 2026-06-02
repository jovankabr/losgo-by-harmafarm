/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { ShoppingCart, Heart, Activity, Check, ShieldCheck, Flame, Scale, Sparkles } from "lucide-react";
import { FEATURED_PRODUCTS, CONTACT_INFO, Product } from "../data";

export default function FeaturedProducts() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>("Semua");
  
  const toggleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId) 
        : [...prev, productId]
    );
  };

  const allTags = ["All", "Lele, "Nila", "Bandeng", "Gurameh", "Rolade"];

  const filteredProducts = selectedTag === "Semua" 
    ? FEATURED_PRODUCTS 
    : FEATURED_PRODUCTS.filter(p => p.tags.includes(selectedTag));

  const getWaLinkWithProduct = (productName: string) => {
    const text = encodeURIComponent(`Halo HarmaFarm! Saya tertarik membeli produk "${productName}" produk frozen food ikan marinasi yang praktis ini. Bagaimana cara pemesanan dan pengirimannya?`);
    return `https://wa.me/6281234567890?text=${text}`;
  };

  return (
    <section id="produk" className="py-24 bg-white relative overflow-hidden">
      {/* Background abstract overlay patterns */}
      <div className="absolute top-0 left-10 w-96 h-96 bg-brand-soft/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div id="products-header" className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div className="text-left">
            <span className="font-display font-extrabold text-xs uppercase tracking-widest text-brand-secondary mb-3 inline-block">
              Etalase Menu Bergizi
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-brand-dark mb-3">
              Katalog Produk <span className="text-brand-primary">Frozen Food HarmaFarm</span>
            </h2>
            <p className="text-sm sm:text-base text-brand-dark/60 max-w-2xl">
              Berbagai pilihan olahan ikan marinasi dan frozen food berkualitas yang praktis, lezat, dan siap dimasak kapan saja.
            </p>
            
          </div>

          {/* Filter Pill Badges */}
          <div id="filter-wrapper" className="flex flex-wrap gap-2 md:justify-end">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`py-1.5 px-3.5 text-xs font-semibold rounded-full border transition-all duration-300 cursor-pointer ${
                  selectedTag === tag
                    ? "bg-brand-primary text-white border-brand-primary shadow-sm"
                    : "bg-brand-bg text-brand-dark/60 border-brand-soft/40 hover:border-brand-primary/20 hover:text-brand-primary"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid Layout */}
        <div id="products-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, idx) => {
            const isFav = favorites.includes(product.id);
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden border border-brand-soft/60 hover:border-brand-primary/20 hover:shadow-2xl hover:shadow-brand-primary/[0.05] transition-all duration-300 flex flex-col justify-between relative h-full cursor-default"
                id={`product-card-${product.id}`}
              >
                {/* Image Section with badges & absolute elements */}
                <div className="relative aspect-square overflow-hidden bg-brand-bg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Hot Badge left top */}
                  <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5">
                    <span className="bg-brand-primary/95 text-white text-[10px] font-extrabold uppercase py-1 px-3 rounded-full tracking-wider shadow-sm flex items-center gap-1 backdrop-blur-xs">
                      <Sparkles className="w-2.5 h-2.5 text-brand-accent" />
                      {product.badge}
                    </span>
                  </div>

                  {/* Weight Portion Badge right bottom */}
                  <div className="absolute bottom-3 right-3 z-10 bg-brand-dark/80 text-white text-[10px] font-bold py-1 px-2.5 rounded-lg flex items-center gap-1 backdrop-blur-xs shadow-md">
                    <Scale className="w-3 h-3 text-brand-accent" />
                    <span>{product.portion}</span>
                  </div>

                  {/* Favorite Toggle Icon */}
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-brand-primary shadow-md hover:scale-110 active:scale-90 transition-transform duration-200 cursor-pointer"
                    aria-label="Add to wishlist"
                  >
                    <Heart className={`w-4 h-4 ${isFav ? "fill-brand-accent text-brand-accent" : "text-brand-dark/50"}`} />
                  </button>
                </div>

                {/* Info Contents */}
                <div className="p-5 flex-grow flex flex-col justify-between text-left">
                  <div>
                    {/* Tags layout */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.tags.map(t => (
                        <span key={t} className="text-[9px] font-bold uppercase tracking-wider text-brand-primary bg-brand-soft/40 py-0.5 px-2 rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Product Name */}
                    <h3 className="font-display font-black text-brand-dark text-base sm:text-lg mb-2 leading-tight group-hover:text-brand-primary transition-colors">
                      {product.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-brand-dark/60 leading-relaxed mb-4 line-clamp-3">
                      {product.description}
                    </p>
                  </div>

                  {/* Features Bullet List */}
                  <div className="border-t border-brand-soft/40 pt-4 mt-2">
                    <ul className="space-y-1.5 mb-6">
                      {product.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs text-brand-dark/70">
                          <Check className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Direct WA Order button */}
                    <a
                      id={`order-btn-${product.id}`}
                      href={getWaLinkWithProduct(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-primary py-2.5 rounded-xl text-xs sm:text-sm group flex items-center justify-center gap-1.5 shadow-sm hover:shadow-lg hover:shadow-brand-primary/10"
                    >
                      <ShoppingCart className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
                      <span>Hubungi Admin WA</span>
                    </a>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Future e-commerce banner */}
        <motion.div
          id="future-ecommerce-notice"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-brand-primary to-brand-secondary text-brand-light p-6 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-brand-soft/20 text-left"
        >
          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-brand-accent shrink-0 border border-white/10 shadow-inner">
              <Handshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-black text-base sm:text-lg mb-1">
                Ingin Menjadi Reseller HarmaFarm?
              </h4>
              <p className="text-xs text-white/80 max-w-xl">
                Bergabung sebagai mitra reseller dan dapatkan akses produk frozen food ikan berkualitas dengan harga khusus serta dukungan promosi dari HarmaFarm.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById("kontak");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-brand-accent text-brand-dark text-xs font-bold py-2.5 px-5 rounded-full shadow-md hover:bg-white hover:scale-102 transition-all cursor-pointer whitespace-nowrap shrink-0"
          >
            Daftar Reseller Prioritas
          </button>
        </motion.div>

      </div>
    </section>
  );
}
