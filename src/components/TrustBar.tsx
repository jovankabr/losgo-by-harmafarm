/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

export default function TrustBar() {
  return (
    <div id="design-trust-bar" className="w-full bg-white py-6 border-y border-[#DDE7D2]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-left">
        <div className="flex flex-wrap gap-x-12 gap-y-4 items-center">
          <div className="flex items-center gap-3">
            <span className="font-display font-black text-xl text-[#315B35] tracking-widest">BPOM</span>
            <div className="w-px h-6 bg-[#315B35]/20"></div>
            <span className="font-display font-black text-xl text-[#315B35] tracking-widest">HALAL</span>
          </div>
          <div className="flex items-center gap-2 col-span-1">
            <span className="w-2 h-2 bg-[#A4C639] rounded-full animate-ping absolute" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A4C639]" />
            <span className="text-sm font-semibold text-[#1E1E1E]/75 ml-0.5">Eco-Friendly Production</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#A4C639] rounded-full animate-ping absolute" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A4C639]" />
            <span className="text-sm font-semibold text-[#1E1E1E]/75 ml-0.5">Local Farmer Support</span>
          </div>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full border-2 border-white bg-[#DDE7D2] text-[#315B35] flex items-center justify-center text-xs font-bold shadow-sm font-sans">L</div>
            <div className="w-8 h-8 rounded-full border-2 border-white bg-[#A4C639] text-white flex items-center justify-center text-xs font-bold shadow-sm font-sans">O</div>
            <div className="w-8 h-8 rounded-full border-2 border-white bg-[#315B35] text-white flex items-center justify-center text-xs font-bold shadow-sm font-sans">S</div>
          </div>
          <span className="text-sm font-extrabold text-[#315B35]">5000+ Keluarga Sehat Aktif</span>
        </div>
      </div>
    </div>
  );
}
