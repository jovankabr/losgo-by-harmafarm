/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import halal from "../assets/halal.png";
import cbib from "../assets/cbib.png";
import banyumasbetter from "../assets/banyumasbetter.png";
import exportquality from "../assets/exportquality.png";

export default function TrustBar() {
  const logos = [
    { src: halal, alt: "Sertifikat Halal" },
    { src: cbib, alt: "CBIB" },
    { src: banyumasbetter, alt: "Banyumas Better" },
    { src: exportquality, alt: "Export Quality" },
  ];

  return (
    <div
      id="design-trust-bar"
      className="w-full bg-white py-8 border-y border-[#DDE7D2]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
          {logos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-20 md:h-24 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
