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
    name: "Rina",
    role: "Ibu Rumah Tangga - Purwokerto",
    rating: 5,
    text: "Awalnya ragu coba produk HarmaFarm ini apalagi LOSGo nya, tapi setelah dimasak ternyata rasanya lebih gurih dan tidak ada bau lumpur. Anak-anak juga lebih suka dibanding lele yang biasa saya beli.",
    avatarSeed: "Rina"
  },
  {
    id: "testi-2",
    name: "Dwi",
    role: "Ibu Rumah Tangga - Salatiga",
    rating: 5,
    text: "Produk filletnya sangat membantu kluntuk MPASI anak saya. Cocok buat saya yang memiliki anak balita.",
    avatarSeed: "Dwi"
  },
  {
    id: "testi-3",
    name: "Arif",
    role: "Dosen Universitas Jendral Soedirman - Purwokerto",
    rating: 5,
    text: "Tekstur dagingnya padat dan tidak mudah hancur saat dimasak. Sudah beberapa kali pesan dan kualitasnya selalu konsisten.",
    avatarSeed: "Arif"
  },
  {
    id: "testi-4",
    name: "Siska",
    role: "Pekerja Swasta - Bekasi",
    rating: 5,
    text: "Saya paling suka karena produknya bersih dan praktis. Tinggal keluarkan dari freezer lalu langsung diolah untuk menu keluarga. Cocok untuk saya yang seorang pekerja.",
    avatarSeed: "Siska"
  },
  {
    id: "testi-5",
    name: "Hana",
    role: "Owner Hana Frozen Food - Purwokerto",
    rating: 5,
    text: "Sebagai pelaku usaha kuliner, kualitas bahan baku sangat penting. LOSGo membantu karena ukuran dan kualitas ikannya lebih seragam.",
    avatarSeed: "Hana"
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
    question: "Apa Perbedaan Lele Biasa dengan LOSGo by Harma Farm?",
    answer: "LOSGo by Harma Farm hadir sebagai solusi yang lebih praktis untuk menikmati olahan ikan berkualitas. Lele dipilih dari budidaya yang terjaga kualitasnya, kemudian dibersihkan secara higienis dan diproses dengan bumbu pilihan sehingga siap diolah. Dengan kondisi yang lebih bersih, minim bau amis, dan siap masak, LOSGo memberikan kemudahan bagi konsumen tanpa mengurangi kualitas maupun cita rasa ikan lele."
  },
  {
    id: "faq-2",
    question: "Bagaimana Cara yang Tepat Menyimpan Produk Harma Farm Agar Tahan Lama?",
    answer: "Karena Harma Farm mengutamakan produk yang sehat dan alami tanpa penggunaan pengawet sintetis, penyimpanan yang tepat sangat penting untuk menjaga kualitas, kesegaran, dan cita rasa produk. Simpan produk dalam kondisi beku di dalam freezer dengan suhu stabil -18°C atau lebih rendah. Dengan kemasan yang tetap tertutup rapat dan penyimpanan yang sesuai, produk dapat bertahan hingga 6 bulan tanpa mengurangi kualitasnya. Apabila produk sudah dipindahkan dari freezer ke chiller atau lemari pendingin biasa, sebaiknya segera dikonsumsi dan tidak disimpan lebih dari 3 hari. Hindari membekukan kembali produk yang sudah dicairkan untuk menjaga keamanan pangan dan kualitas produk tetap optimal."
  },
  {
    id: "faq-3",
    question: "Apakah Produk Harma Farm Cocok Dikonsumsi oleh Ibu Hamil dan Anak-Anak?",
    answer: "Produk Harma Farm dibuat dari bahan baku pilihan yang diproses secara higienis dan dapat menjadi bagian dari pola makan bergizi seimbang bagi keluarga. Ikan merupakan sumber protein hewani yang mengandung berbagai nutrisi penting seperti protein, vitamin B12, dan asam lemak esensial. Untuk ibu hamil, ibu menyusui, anak-anak, maupun individu dengan kebutuhan gizi tertentu, disarankan tetap menyesuaikan konsumsi dengan kondisi masing-masing dan berkonsultasi dengan tenaga kesehatan apabila diperlukan."
  },
  {
    id: "faq-4",
    question: "Bagaimana Cara Melakukan Pemesanan Produk Harma Farm? Apakah Tersedia Titik Penjualan Offline?",
    answer: "Melakukan pemesanan produk Harma Farm sangat mudah. Anda cukup mengklik tombol "Pesan via WhatsApp" yang tersedia di website untuk terhubung langsung dengan tim kami. Tim Harma Farm akan membantu proses pemesanan, konfirmasi produk, hingga pengaturan pengiriman sesuai kebutuhan Anda. Saat ini Harma Farm melayani pengiriman ke wilayah Kabupaten Banyumas dan sekitarnya menggunakan layanan pengiriman yang menjaga kualitas produk selama perjalanan. Selain penjualan online, Harma Farm juga terus memperluas jaringan kemitraan melalui program agen dan reseller di berbagai daerah. Untuk informasi kerja sama maupun ketersediaan produk di wilayah Anda, silakan hubungi tim Harma Farm secara langsung."
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
    handle: "@harmafarm.losgo",
    metric: "300+ Followers",
    change: "+1.691% Accounts Reached",
    actionText: "Lihat Resep & Tips Sehat",
    url: "https://www.instagram.com/harmafarm.losgo?igsh=MWx0bG02Z3VjOWNvZw=="
  },
  {
    platform: "TikTok",
    handle: "@harmafarm.losgo",
    metric: "1.3K+ Likes",
    change: "Viral Video Resep Praktis",
    actionText: "Tonton Ide Penyajian",
    url: "https://www.tiktok.com/@harmafarm.losgo?_r=1&_t=ZS-96s87slWO38"
  },
  {
    platform: "Google Maps",
    handle: "LOSGO LELE ORGANIK HARMAFARM",
    metric: "4.6/5 Rating (30+ Ulasan)",
    change: "Pengiriman Cepat & Terjaga",
    actionText: "Rute Petunjuk Produksi",
    url: "https://maps.app.goo.gl/Cm4agTf1PJ6MiGsv6?g_st=ic"
  },
  {
    platform: "Website",
    handle: "losgo-by-harmafarm",
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
