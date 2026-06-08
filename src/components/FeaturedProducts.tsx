/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { ShoppingCart, Heart, Check, Scale, Sparkles, Handshake } from "lucide-react";
import { useSiteData } from "../hooks/useSiteData";

// Import semua gambar produk lokal (fallback)
import imgLOSGO from "../assets/LOSGO.png";
import imgNILASIGO from "../assets/NILASIGO.png";
import imgLEKIDS from "../assets/LEKIDS.png";
import imgROLADE from "../assets/ROLADE.png";
import imgBandeng from "../assets/bandengpresto.jpeg";
import imgGurameLokal from "../assets/guramelokal.jpeg";
import imgGurameMari from "../assets/guramemarinasi.jpeg";
import imgLeleTerbang from "../assets/leleterbang.png";
import imgNilaPresto from "../assets/nilapresto.png";
import imgProdukLosgo from "../assets/produklosgo.png";

// Gambar fallback per id produk
const imageMap: Record<string, string> = {
  losgo800: imgLOSGO,
  losgo400: imgLOSGO,
  nilasigo800: imgNILASIGO,
  nilasigo400: imgNILASIGO,
  lekids: imgLEKIDS,
  rolade: imgROLADE,
  bandeng: imgBandeng,
  guramelokal: imgGurameLokal,
  guramemarinasi: imgGurameMari,
  guramebersih: imgGurameLokal,
  guramekuning: imgGurameMari,
  leleterbang: imgLeleTerbang,
  nilapresto: imgNilaPresto,
}

export default function FeaturedProducts() {
  const { data } = useSiteData()
  const [favorites, setFavorites] = useState<string[]>([])
  const [selectedTag, setSelectedTag] = useState<string>("Semua")

  const products = data?.products || []
  const allTags = ["Semua", ...Array.from(new Set(products.flatMap(p => p.tags)))]
  const filteredProducts = selectedTag === "Semua"
    ? products
    : products.filter(p => p.tags.includes(selectedTag))

  const toggleFavorite = (id: string) =>
    setFavorites(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])

  const getWaLink = (name: string) => {
    const wa = data?.contact?.whatsappUrl || 'https://wa.me/6285641114777'
    const base = wa.split('?')[0]
    return `${base}?text=${encodeURIComponent(`Halo HarmaFarm! Saya tertarik membeli produk "${name}". Bagaimana cara pemesanannya?`)}`
  }

  // Prioritas: gambar yang diupload dari dashboard (base64), lalu fallback lokal
  const getImage = (id: string, image?: string) => {
    if (image && image.length > 0) return image
    return imageMap[id] || imgProdukLosgo
  }

  return (
    <section id="produk" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-10 w-96 h-96 bg-brand-soft/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
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
          <div id="filter-wrapper" className="flex flex-wrap gap-2 md:justify-end">
            {allTags.map(tag => (
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

        <div id="products-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, idx) => {
            const isFav = favorites.includes(product.id)
            const imgSrc = getImage(product.id, product.image)
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden border border-brand-soft/60 hover:border-brand-primary/20 hover:shadow-2xl hover:shadow-brand-primary/[0.05] transition-all duration-300 flex flex-col justify-between relative h-full cursor-default"
              >
                <div className="relative aspect-square overflow-hidden bg-brand-bg">
                  <img src={imgSrc} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-brand-primary/95 text-white text-[10px] font-extrabold uppercase py-1 px-3 rounded-full tracking-wider shadow-sm flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5 text-brand-accent" />
                      {product.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 z-10 bg-brand-dark/80 text-white text-[10px] font-bold py-1 px-2.5 rounded-lg flex items-center gap-1">
                    <Scale className="w-3 h-3 text-brand-accent" />
                    <span>{product.portion}</span>
                  </div>
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md hover:scale-110 active:scale-90 transition-transform duration-200 cursor-pointer"
                  >
                    <Heart className={`w-4 h-4 ${isFav ? "fill-brand-accent text-brand-accent" : "text-brand-dark/50"}`} />
                  </button>
                </div>

                <div className="p-5 flex-grow flex flex-col justify-between text-left">
                  <div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.tags.map(t => (
                        <span key={t} className="text-[9px] font-bold uppercase tracking-wider text-brand-primary bg-brand-soft/40 py-0.5 px-2 rounded-md">{t}</span>
                      ))}
                    </div>
                    <h3 className="font-display font-black text-brand-dark text-base sm:text-lg mb-2 leading-tight group-hover:text-brand-primary transition-colors">
                      {product.name}
                    </h3>
                    {product.price && (
                      <p className="text-sm font-bold text-brand-primary mb-2">{product.price}</p>
                    )}
                    <p className="text-xs sm:text-sm text-brand-dark/60 leading-relaxed mb-4">
                      {product.description}
                    </p>
                  </div>
                  <div className="border-t border-brand-soft/40 pt-4 mt-2">
                    <ul className="space-y-1.5 mb-6">
                      {product.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs text-brand-dark/70">
                          <Check className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={getWaLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-primary py-2.5 rounded-xl text-xs sm:text-sm group flex items-center justify-center gap-1.5 shadow-sm hover:shadow-lg"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                      <span>Hubungi Admin WA</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
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
              <h4 className="font-display font-black text-base sm:text-lg mb-1">Ingin Menjadi Reseller HarmaFarm?</h4>
              <p className="text-xs text-white/80 max-w-xl">
                Bergabung sebagai mitra reseller dan dapatkan akses produk frozen food ikan berkualitas dengan harga khusus serta dukungan promosi dari HarmaFarm. 
              </p>
              <p className="text-xs text-white/80 max-w-xl">
                Terbukti sudah banyak reseller di berbagai kota yang repeat order. 
              </p>
            </div>
          </div>
          <button
            onClick={() => { const el = document.getElementById("kontak"); if (el) el.scrollIntoView({ behavior: "smooth" }) }}
            className="bg-brand-accent text-brand-dark text-xs font-bold py-2.5 px-5 rounded-full shadow-md hover:bg-white transition-all cursor-pointer whitespace-nowrap shrink-0"
          >
            Daftar Reseller Prioritas
          </button>
        </motion.div>
      </div>
    </section>
  )
}
