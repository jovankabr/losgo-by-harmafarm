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
    title: "Bahan Baku Berkualitas",
    description: "Menggunakan ikan pilihan yang diproses dengan standar mutu dan kebersihan yang terjaga.",
    iconName: "Award"
  },
  {
    id: "signature",
    title: "Pasti Bersih, Pasti Enak",
    description: "Diolah secara higienis dengan bumbu pilihan untuk menghasilkan cita rasa yang konsisten dan lezat.",
    iconName: "Fish"
  },
  {
    id: "nutrition",
    title: "Protein Alami",
    description: "Sumber protein hewani berkualitas untuk mendukung kebutuhan gizi sehari-hari.",
    iconName: "Activity"
  },
  {
    id: "practical",
    title: "Siap Masak & Praktis",
    description: "Sudah dibersihkan dan dimarinasi sehingga lebih cepat diolah tanpa repot.",
    iconName: "ShieldCheck"
  },
  {
    id: "everyone",
    title: "Cocok Untuk Semua",
    description: "Pilihan menu praktis untuk keluarga, mahasiswa, pekerja, hingga pelaku usaha kuliner.",
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
    title: "Bumbu Meresap Sempurna",
    boldText: "Siap masak tanpa repot meracik.",
    description:
      "Setiap produk dimarinasi dengan bumbu pilihan sehingga menghasilkan cita rasa gurih dan konsisten di setiap sajian."
  },
  {
    id: "why-2",
    title: "Pasti Bersih & Higienis",
    boldText: "Diolah dengan standar kebersihan tinggi.",
    description:
      "Ikan dibersihkan secara menyeluruh dan diproses secara higienis untuk menjaga kualitas, rasa, dan keamanan pangan."
  },
  {
    id: "why-3",
    title: "Praktis Untuk Aktivitas Padat",
    boldText: "Siap goreng, siap masak, siap santap.",
    description:
      "Cocok untuk keluarga modern, mahasiswa, pekerja, maupun pelaku usaha kuliner yang membutuhkan solusi makanan praktis."
  },
  {
    id: "why-4",
    title: "Pilihan Produk Beragam",
    boldText: "Lele, nila, bandeng, gurame hingga rolade.",
    description:
      "HarmaFarm menghadirkan berbagai pilihan olahan ikan berkualitas yang dapat disesuaikan dengan kebutuhan dan selera pelanggan."
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
    id: "losgo800",
    name: "LOSGo 800 gr",
    badge: "TERLARIS",
    image: IMAGES.heroDish,
    portion: "800 gr",
    tags: ["Lele"],
    description: "Lele organik siap goreng dengan bumbu marinasi yang meresap dan cita rasa khas HarmaFarm.",
    features: ["Tinggi Protein", "Alami Tanpa Pengawet", "Proses Higienis"],
  },
  {
    id: "losgo400",
    name: "LOSGo 400 gr",
    badge: "FAVORIT",
    image: IMAGES.heroDish,
    portion: "400 gr",
    tags: ["Lele"],
    description: "Pilihan praktis untuk keluarga kecil atau kebutuhan harian.",
    features: ["Tinggi Protein", "Alami Tanpa Pengawet", "Proses Higienis"],
  },
  {
    id: "nilasigo800",
    name: "NilaSigo 800 gr",
    badge: "PREMIUM",
    image: IMAGES.heroDish,
    portion: "800 gr",
    tags: ["Nila"],
    description: "Ikan nila marinasi berbumbu pilihan dengan tekstur lembut dan rasa gurih.",
    features: ["Bumbu Meresap", "Alami Tanpa Pengawet", "Proses Higienis"],
  },
  {
    id: "nilasigo400",
    name: "NilaSigo 400 gr",
    badge: "POPULER",
    image: IMAGES.heroDish,
    portion: "400 gr",
    tags: ["Nila"],
    description: "Ukuran praktis untuk sajian keluarga kecil maupun anak kos.",
    features: ["Bumbu Meresap", "Alami Tanpa Pengawet", "Proses Higienis"]
  },
  {
    id: "leleterbang",
    name: "Lele Terbang",
    badge: "UNIK",
    image: IMAGES.heroDish,
    portion: "400 gr",
    tags: ["Lele"],
    description: "Lele utuh siap goreng dengan tekstur renyah dan rasa gurih.",
    features: ["Tinggi Protein", "Alami Tanpa Pengawet", "Proses Higienis"]
  },
  {
    id: "lekids",
    name: "Lekids Lele Fillet",
    badge: "PRAKTIS",
    image: IMAGES.heroDish,
    portion: "200 gr",
    tags: ["Lele"],
    description: "Fillet lele tanpa duri yang mudah diolah untuk berbagai menu favorit.",
    features: ["Tinggi Protein Omega 3", "Cocok Untuk MPASI", "Tanpa Duri"],
  },
  {
    id: "rolade",
    name: "Rolade Lele",
    badge: "UNIK",
    image: IMAGES.heroDish,
    portion: "300 gr",
    tags: ["Rolade"],
    description: "Olahan lele premium berbentuk rolade dengan tekstur lembut dan rasa gurih.",
    features: ["Bergizi", "Favorit Keluarga", "Baik Untuk Otak dan Jantung"],
  },
  {
    id: "bandeng",
    name: "Bandeng Presto",
    badge: "TERBARU",
    image: IMAGES.heroDish,
    portion: "320 gr",
    tags: ["Bandeng"],
    description: "Bandeng presto empuk dengan cita rasa khas dan mudah dinikmati.",
    features: ["Tinggi Kalsium", "Tinggi Protein Omega 3", "Alami Tanpa Pengawet"],
  },
  {
    id: "nilapresto",
    name: "Nila Presto",
    badge: "SIAP SANTAP",
    image: IMAGES.heroDish,
    portion: "150 gr",
    tags: ["Nila"],
    description: "Nila presto empuk dengan tulang lunak dan rasa gurih alami.",
    features: ["Rendah Lemak", "Tinggi Protein dan Asam Folat", "Proses Higienis"]
  },
  {
    id: "guramebersih",
    name: "Gurameh Lokal Bersih",
    badge: "FRESH",
    image: IMAGES.heroDish,
    portion: "Fresh",
    tags: ["Gurame"],
    description: "Gurame segar yang telah dibersihkan dan siap diolah.",
    features: ["Kaya Kalsium dan Fosfor", "Alami Tanpa Pengawet", "Aman Untuk Ibu Hamil"]
  },
  {
    id: "guramekuning",
    name: "Gurameh Bumbu Kuning",
    badge: "REKOMENDASI",
    image: IMAGES.heroDish,
    portion: "Fresh",
    tags: ["Gurame"],
    description: "Gurame segar dengan marinasi bumbu kuning khas HarmaFarm.",
    features: ["Bebas Amis", "Kaya Antioksidan", "Melancarkan Pencernaan"]
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
    title: "Seleksi Bahan Baku",
    description: "Ikan pilihan diseleksi berdasarkan kualitas, kesegaran, dan ukuran yang sesuai standar produksi HarmaFarm.",
    duration: "TAHAP 1"
  },
  {
    id: 2,
    title: "Pembersihan Higienis",
    description: "Bahan baku dibersihkan secara menyeluruh untuk menjaga kualitas dan kenyamanan saat diolah.",
    duration: "TAHAP 2"
  },
  {
    id: 3,
    title: "Marinasi Bumbu Pilihan",
    description: "Produk dimarinasi menggunakan bumbu pilihan agar cita rasa lebih meresap dan konsisten.",
    duration: "TAHAP 3"
  },
  {
    id: 4,
    title: "Pengemasan & Pembekuan",
    description: "Produk dikemas dan disimpan dalam suhu terkontrol untuk menjaga kualitas hingga sampai ke pelanggan.",
    duration: "TAHAP 4"
  },
  {
    id: 5,
    title: "Siap Dinikmati",
    description: "Produk siap goreng, siap masak, dan siap menjadi hidangan favorit keluarga.",
    duration: "TAHAP 5"
  },
  {
    id: 6,
    title: "Konsumen Bahagia",
    description: "Produk siap saji sehat mendarat di meja makan Anda, menghidangkan kepraktisan bergizi tinggi yang dinikmati seluruh keluarga hangat.",
    duration: "TAHAP 6"
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
  phone: "+62 856-4111-4777",
  whatsappUrl: "https://wa.me/6285641114777?text=Halo%20HarmaFarm%20saya%20ingin%20memesan%20frozen%20food%20ikan%20probiotik%20yang%20enak%20dan%20sehat!",
  email: "halo@losgo.id",
  address: "Dusun II, Sidowayah, Kec. Polanharjo, Kabupaten Klaten, Jawa Tengah 57474",
  instagram: "https://instagram.com",
  tiktok: "https://tiktok.com",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.2185567302485!2d110.61205609999999!3d-7.660167699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a40df6fa0afcb%3A0xe5a363ca97626fc!2sPolanharjo%2C%20Klaten%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1717096000000!5m2!1sen!2sid"
};
