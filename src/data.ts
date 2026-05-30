/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Image assets generated via AI Studio Image Generation
export const IMAGES = {
  heroDish: "/src/assets/images/losgo_hero_dish_1780168476544.png",
  aboutFamily: "/src/assets/images/losgo_about_family_1780168495921.png",
  productNugget: "/src/assets/images/losgo_product_nugget_1780168515037.png",
  productBakso: "/src/assets/images/losgo_product_bakso_1780168533790.png",
  productSiomay: "/src/assets/images/losgo_product_siomay_1780168551352.png",
  productOtakOtak: "/src/assets/images/losgo_product_otakotak_1780168577160.png"
};

export interface TrustIndicator {
  id: string;
  title: string;
  description: string;
  iconName: "Award" | "Fish" | "Activity" | "ShieldCheck" | "Zap";
}

export const TRUST_INDICATORS: TrustIndicator[] = [
  {
    id: "quality",
    title: "Produk Berkualitas",
    description: "Diproduksi dengan standar kebersihan tinggi dan kendali mutu yang ketat.",
    iconName: "Award"
  },
  {
    id: "probiotic",
    title: "Lele Probiotik Utama",
    description: "Budidaya higienis menggunakan sirkulasi probiotik alami, bebas zat kimia berbahaya.",
    iconName: "Fish"
  },
  {
    id: "protein",
    title: "High Protein",
    description: "Kaya akan protein esensial dan asam amino baik untuk pertumbuhan keluarga.",
    iconName: "Activity"
  },
  {
    id: "hygienic",
    title: "Higienis & Alami",
    description: "Proses pembersihan menyeluruh tanpa bau lumpur khas lele tradisional.",
    iconName: "ShieldCheck"
  },
  {
    id: "practical",
    title: "Praktis Disajikan",
    description: "Siap digoreng, dikukus, atau direbus hanya dalam waktu kurang dari 10 menit.",
    iconName: "Zap"
  }
];

export interface WhyProbioticItem {
  id: string;
  title: string;
  boldText: string;
  description: string;
}

export const WHY_PROBIOTIC_CATFISH: WhyProbioticItem[] = [
  {
    id: "why-1",
    title: "Protein Super Tinggi",
    boldText: "Protein murni di atas rata-rata.",
    description: "Daging lele probiotik memiliki kepadatan serat protein yang lebih tinggi serta kaya fosfor dan kalsium untuk menutrisi otak anak."
  },
  {
    id: "why-2",
    title: "Bebas Bau & Higienis",
    boldText: "Nol aroma tanah atau lumpur.",
    description: "Sistem air bioclean terfiltrasi dengan suplemen mikroorganisme baik memastikan rasa daging bersih, gurih alami, dan bertekstur kencang."
  },
  {
    id: "why-3",
    title: "Budidaya Modern Lestari",
    boldText: "Eco-friendly & berkelanjutan.",
    description: "Memanfaatkan bioteknologi probiotik aktif yang mengurai sisa organik, menghemat air, dan menjaga keselarasan lingkungan hayati."
  },
  {
    id: "why-4",
    title: "Nutrisi Kehamilan & Anak",
    boldText: "Kaya Omega-3 dan Vitamin B12.",
    description: "Pilihan aman tanpa merkuri yang sangat direkomendasikan untuk tumbuh kembang prima serta memperkuat fungsi saraf pusat balita."
  }
];

export interface Product {
  id: string;
  name: string;
  badge: string;
  image: string;
  description: string;
  portion: string;
  tags: string[];
  features: string[];
}

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: "nugget",
    name: "Nugget Lele Probiotik Premium",
    badge: "Terlaris",
    image: IMAGES.productNugget,
    description: "Nugget renyah berlapis tepung panir premium dengan isian daging lele probiotik suwir tebal dan campuran rempah rahasia. Sangat disukai anak-anak.",
    portion: "Kemasan 250g / isi 12-14 pcs",
    tags: ["High Protein", "Kid-Friendly"],
    features: ["Rasa gurih alami", "Tanpa MSG berlebih", "Serat daging premium"]
  },
  {
    id: "bakso",
    name: "Bakso Lele Probiotik Gurih",
    badge: "Favorit",
    image: IMAGES.productBakso,
    description: "Bakso kenyal lembut bebas boraks yang dibuat dari pasta lele murni berkualitas tinggi. Cocok disajikan bersama kuah hangat maupun digoreng.",
    portion: "Kemasan 300g / isi 20-22 pcs",
    tags: ["Gluten-Free Ready", "Praktis"],
    features: ["Tekstur kenyal alami", "Sudah bersertifikat halalan", "Bebas bau lumpur"]
  },
  {
    id: "siomay",
    name: "Siomay Lele Probiotik Kukus",
    badge: "Camilan Sehat",
    image: IMAGES.productSiomay,
    description: "Siomay oriental lezat berbalut kulit tipis premium yang diisi adonan lele probiotik cincang lembut dan parutan wortel segar kaya vitamin A.",
    portion: "Kemasan 200g / isi 10 pcs",
    tags: ["Serat Tinggi", "Rendah Lemak"],
    features: ["Kaya serat sayuran", "Saus kacang terpisah", "Rendah kalori jenuh"]
  },
  {
    id: "otak-otak",
    name: "Otak-Otak Premium Lele Probiotik",
    badge: "Terbaru",
    image: IMAGES.productOtakOtak,
    description: "Otak-otak aromatik panggang bumbu rempah nusantara dengan adonan lele probiotik bertekstur membal kenyal. Nikmat disajikan sebagai teman bersantai.",
    portion: "Kemasan 250g / isi 12 pcs",
    tags: ["Herbal Nusantara", "Snack Sehat"],
    features: ["Daun pisang aromatik", "Kenyal padat bergizi", "Bumbu warisan tradisional"]
  }
];

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  duration: string;
}

export const PRODUCTION_PROCESS: ProcessStep[] = [
  {
    id: 1,
    title: "Budidaya Terukur",
    description: "Bibit lele unggulan dibesarkan di kolam khusus berteknologi sirkulasi bio-probiotik alami tanpa bahan kimia pencemar.",
    duration: "Hari ke 1-80"
  },
  {
    id: 2,
    title: "Seleksi Mutu (Lele Probiotik)",
    description: "Hanya lele sehat aktif terbaik berukuran ideal yang dipilih untuk menjamin tekstur serat daging optimal berkualitas premium.",
    duration: "Hari ke 81"
  },
  {
    id: 3,
    title: "Produksi Higienis",
    description: "Lele segar dibersihkan secara steril dari kulit, duri, dan lemak berlebih, lalu dicincang halus bersama herba alami nusantara.",
    duration: "Proses cepat, higienis"
  },
  {
    id: 4,
    title: "Pembekuan Cepat (IQF)",
    description: "Produk adonan dibentuk, dikemas kedap udara, lalu dibekukan instan suhu ekstrem -18°C untuk mengunci kelembaban dan nutrisi murni.",
    duration: "Pembekuan < 2 jam"
  },
  {
    id: 5,
    title: "Distribusi Terjaga",
    description: "Dikirim memanfaatkan kotak berpendingin khusus untuk menjaga kualitas rantai dingin (cold chain) tetap stabil hingga titik tujuan.",
    duration: "Kontrol suhu konstan"
  },
  {
    id: 6,
    title: "Konsumen Bahagia",
    description: "Produk siap saji sehat mendarat di meja makan Anda, menghidangkan kepraktisan bergizi tinggi yang dinikmati seluruh keluarga hangat.",
    duration: "Siap saji < 10 menit"
  }
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  avatarSeed: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testi-1",
    name: "Andini Larasati",
    role: "Ibu Rumah Tangga (3 Anak) - Sleman",
    rating: 5,
    text: "Anak-anak saya awalnya susah sekali makan ikan lele karena mengeluh bau lumpur. Tapi waktu coba Nugget Lele LOSGo, mereka langsung lahap habis! Teksturnya garing di luar, lembut di dalam, dan tidak amis sama sekali. Benar-benar penyelamat gizi keluarga praktis!",
    avatarSeed: "Andini"
  },
  {
    id: "testi-2",
    name: "dr. Hendra Wijaya",
    role: "Pekerja Medis & Fitness Enthusiast - Klaten",
    rating: 5,
    text: "Sebagai seseorang yang peduli pada kandungan nutrisi, saya sangat merekomendasikan LOSGo. Lele probiotik terbukti memiliki asam lemak jenuh yang lebih rendah dan kebersihan yang jauh mengungguli lele kolam tanah biasa. Baksonya kenyal alami tanpa campuran zat sintetis berbahaya.",
    avatarSeed: "Hendra"
  },
  {
    id: "testi-3",
    name: "Rizky Ramadhan",
    role: "Mahasiswa Senior UGM - Yogyakarta",
    rating: 5,
    text: "Sebagai anak kos yang pengen hidup sehat tapi mageran, siomay lele LOSGo ini beneran jadi andalan. Tinggal kukus sebentar sambil ngerjain tugas, udah dapet camilan protein tinggi yang mengenyangkan. Saus kacangnya juga mantap gurih!",
    avatarSeed: "Rizky"
  }
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Apa perbedaan mendasar lele probiotik dengan lele biasa?",
    answer: "Lele probiotik LOSGo dibesarkan dalam sistem kolam bio-filtrasi modern yang secara rutin ditambahkan mikroba bermanfaat (probiotik). Probiotik ini memakan sisa pakan dan kotoran lele, menjaga kebersihan air sepanjang siklus hidup. Hasilnya adalah daging lele yang bersih bebas dari herbisida, bebas dari bau lumpur tanah, bertekstur kencang kenyal, dan kaya akan protein alami."
  },
  {
    id: "faq-2",
    question: "Bagaimana cara tepat menyimpan produk frozen food LOSGo agar tahan lama?",
    answer: "Karena kami memprioritaskan makanan sehat alami tanpa pengawet sintetik, Anda wajib menyimpannya di dalam freezer dengan suhu stabil -18°C atau lebih rendah. Dalam kondisi beku rapat seperti ini, produk dapat bertahan segar hingga 6 bulan. Jika sudah dikeluarkan ke pendingin biasa (chiller), sebaiknya dikonsumsi dalam 3 hari."
  },
  {
    id: "faq-3",
    question: "Apakah produk frozen food LOSGo ini aman dikonsumsi oleh ibu hamil dan anak-anak?",
    answer: "Sangat aman dan bahkan sangat dianjurkan! Lele probiotik disuplai gizi pakan terpilih bebas logam berat, menjadikannya sumber protein hewani yang bersih dari merkuri (tidak seperti beberapa predator laut). Kandungan asam lemak esensial Omega-3 serta vitamin B12 di dalamnya sangat krusial untuk kecerdasan otak janin dan balita."
  },
  {
    id: "faq-4",
    question: "Bagaimana cara melakukan pemesanan produk? Apakah ada titik offline?",
    answer: "Sangat mudah! Anda cukup klik tombol 'Pesan via WhatsApp' yang tersebar di halaman ini untuk terhubung langsung dengan Customer Support kami. Kami melayani pengantaran cepat wilayah Yogyakarta, Klaten, Solo, dan sekitarnya menggunakan kurir berpendingin. Kami juga sedang memperluas kemitraan agen reseller di berbagai kota agar semakin dekat dengan Anda."
  }
];

export interface SocialMediaStat {
  platform: "Instagram" | "TikTok" | "Google Maps" | "Website";
  handle: string;
  metric: string;
  change: string;
  actionText: string;
  url: string;
}

export const DIGITAL_PRESENCE: SocialMediaStat[] = [
  {
    platform: "Instagram",
    handle: "@losgo.healthyfood",
    metric: "4.8K+ Followers",
    change: "+24% Growth MoM",
    actionText: "Lihat Ressep & Tips Sehat",
    url: "https://instagram.com"
  },
  {
    platform: "TikTok",
    handle: "@losgo.healthy",
    metric: "12.5K+ Likes",
    change: "Viral Video Resep Praktis",
    actionText: "Tonton Ide Penyajian",
    url: "https://tiktok.com"
  },
  {
    platform: "Google Maps",
    handle: "Dapur Produksi LOSGo Klaten",
    metric: "4.9/5 Rating (120+ Ulasan)",
    change: "100% Wilayah Delivery Aman",
    actionText: "Rute Petunjuk Produksi",
    url: "https://maps.google.com"
  },
  {
    platform: "Website",
    handle: "losgo.id (Local Store)",
    metric: "98% Kepuasan Pelanggan",
    change: "Sistem Order 24/7 Terbuka",
    actionText: "Hubungi Admin WhatsApp",
    url: "https://wa.me/6281234567890?text=Halo%20LOSGo%20saya%20tertarik%20dengan%20produk%20frozen%20food%20lele%20probiotik%20sehat!"
  }
];

export const CONTACT_INFO = {
  phone: "+62 812-3456-7890",
  whatsappUrl: "https://wa.me/6281234567890?text=Halo%20LOSGo%20saya%20ingin%20memesan%20frozen%20food%20lele%20probiotik%20yang%20enak%20dan%20sehat!",
  email: "halo@losgo.id",
  address: "Dusun II, Sidowayah, Kec. Polanharjo, Kabupaten Klaten, Jawa Tengah 57474",
  instagram: "https://instagram.com",
  tiktok: "https://tiktok.com",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.2185567302485!2d110.61205609999999!3d-7.660167699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a40df6fa0afcb%3A0xe5a363ca97626fc!2sPolanharjo%2C%20Klaten%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1717096000000!5m2!1sen!2sid"
};
