import React, { useState, useEffect, useRef } from 'react'
import { getSiteData, saveSiteData, SiteData } from './githubConfig'

const ADMIN_USER = "hartonolosgo"
const ADMIN_PASSWORD = "harmafarm2020"

const DEFAULT: SiteData = {
  contact: {
    phone: '+62 856-4111-4777',
    whatsappUrl: 'https://wa.me/6285641114777?text=Halo%20HarmaFarm%20saya%20ingin%20memesan%20frozen%20food%20ikan%20probiotik%20yang%20enak%20dan%20sehat!',
    email: 'hartonolosgo@gmail.com',
    address: 'Dusun 4 Cirongge, Jl.Siliwangi Jl. Cipendok, Karangnangka, Cilongok, Kabupaten Banyumas, Jawa Tengah 53162',
    instagram: 'https://www.instagram.com/harmafarm.losgo',
    tiktok: 'https://www.tiktok.com/@harmafarm.losgo',
    mapsEmbed: 'https://maps.app.goo.gl/Cm4agTf1PJ6MiGsv6',
  },
  hero: {
    badge: 'Pasti Bersih, Pasti Enak!',
    headline: 'Frozen Food Ikan Marinasi Siap Goreng, Siap Santap!',
    subheadline: 'Berbagai pilihan olahan ikan berkualitas dari HarmaFarm yang telah dimarinasi dengan bumbu pilihan, praktis disajikan, dan siap menjadi hidangan favorit keluarga.',
    cta1: 'Katalog Produk',
    cta2: 'Pesan Sekarang',
  },
  brand: {
    name: 'LOSGo by HarmaFarm',
    tagline: 'Healthy Fish Frozen Food',
    description: 'HarmaFarm menghadirkan berbagai pilihan olahan ikan berkualitas yang dapat disesuaikan dengan kebutuhan dan selera pelanggan.',
    operationalHours: 'Setiap hari pukul 08:00 - 18:00 WIB',
  },
  digital: {
    ig_handle: '@harmafarm.losgo',
    ig_metric: 'Resep & Promo Harian',
    ig_change: 'UPDATE INFO TERBARU',
    ig_action: 'Lihat Instagram',
    ig_url: 'https://www.instagram.com/harmafarm.losgo',

    tt_handle: '@harmafarm.losgo',
    tt_metric: 'Video Resep Praktis',
    tt_change: 'KONTEN HARIAN',
    tt_action: 'Tonton TikTok',
    tt_url: 'https://www.tiktok.com/@harmafarm.losgo',

    yt_handle: '@Losgochannel',
    yt_metric: 'Video Edukasi & Produk',
    yt_change: 'KONTEN BUDIDAYA & FROZEN FOOD',
    yt_action: 'Tonton Channel',
    yt_url: 'https://youtube.com/...',

    gmaps_metric: 'Lokasi & Ulasan Pelanggan',
    gmaps_change: 'PETUNJUK RUTE PRODUKSI',
    gmaps_action: 'Buka Google Maps',
    gmaps_url: 'https://maps.app.goo.gl/Cm4agTf1PJ6MiGsv6',
  },
  products: [
    { id: 'losgo800', name: 'LOSGo 800 gr', badge: 'TERLARIS', portion: '800 gr', price: 'Rp 35.000', description: 'Lele organik siap goreng dengan bumbu marinasi yang meresap dan cita rasa khas HarmaFarm.', features: ['Tinggi Protein', 'Alami Tanpa Pengawet', 'Proses Higienis'], tags: ['Lele'], image: '' },
    { id: 'losgo400', name: 'LOSGo 400 gr', badge: 'FAVORIT', portion: '400 gr', price: 'Rp 20.000', description: 'Pilihan praktis untuk keluarga kecil atau kebutuhan harian.', features: ['Tinggi Protein', 'Alami Tanpa Pengawet', 'Proses Higienis'], tags: ['Lele'], image: '' },
    { id: 'nilasigo800', name: 'NilaSigo 800 gr', badge: 'PREMIUM', portion: '800 gr', price: 'Rp 44.000', description: 'Ikan nila marinasi berbumbu pilihan dengan tekstur lembut dan rasa gurih.', features: ['Bumbu Meresap', 'Alami Tanpa Pengawet', 'Proses Higienis'], tags: ['Nila'], image: '' },
    { id: 'nilasigo400', name: 'NilaSigo 400 gr', badge: 'HEMAT', portion: '400 gr', price: 'Rp 23.000', description: 'Pilihan ekonomis ikan nila marinasi untuk keluarga kecil.', features: ['Bumbu Meresap', 'Alami Tanpa Pengawet', 'Proses Higienis'], tags: ['Nila'], image: '' },
    { id: 'leleterbang', name: 'Lele Terbang', badge: 'HITS', portion: '400 gr', price: 'Rp 23.000', description: 'Olahan lele dengan teknik khusus menghasilkan tekstur renyah dan gurih.', features: ['Super Renyah', 'Tinggi Protein', 'Cocok Semua Usia'], tags: ['Lele'], image: '' },
    { id: 'lekids', name: 'Lekids Lele Fillet', badge: 'PRAKTIS', portion: '200 gr', price: 'Rp 20.000', description: 'Fillet lele tanpa duri yang mudah diolah untuk berbagai menu favorit.', features: ['Tinggi Protein Omega 3', 'Cocok Untuk MPASI', 'Tanpa Duri'], tags: ['Lele'], image: '' },
    { id: 'rolade', name: 'Rolade Lele', badge: 'UNIK', portion: '300 gr', price: 'Rp 24.000', description: 'Olahan lele premium berbentuk rolade dengan tekstur lembut dan rasa gurih.', features: ['Bergizi', 'Favorit Keluarga', 'Baik Untuk Otak dan Jantung'], tags: ['Rolade'], image: '' },
    { id: 'nilapresto', name: 'Nila Presto', badge: 'EMPUK', portion: '150 gr', price: 'Rp 18.000', description: 'Ikan nila presto empuk hingga tulang, kaya kalsium dan protein.', features: ['Tulang Lunak', 'Tinggi Kalsium', 'Alami Tanpa Pengawet'], tags: ['Nila'], image: '' },
    { id: 'bandeng', name: 'Bandeng Presto', badge: 'GURIH', portion: '320 gr (2 pcs)', price: 'Rp 25.000', description: 'Bandeng presto empuk isi 2 pcs dengan cita rasa khas dan mudah dinikmati.', features: ['Tinggi Kalsium', 'Tinggi Protein Omega 3', 'Alami Tanpa Pengawet'], tags: ['Bandeng'], image: '' },
    { id: 'guramelokal', name: 'Gurameh Lokal Bersih', badge: 'LOKAL', portion: 'per ekor', price: 'Rp 7.700', description: 'Gurameh segar lokal sudah dibersihkan siap masak, bebas sisik dan isi perut.', features: ['Segar Lokal', 'Sudah Dibersihkan', 'Siap Masak'], tags: ['Gurameh'], image: '' },
    { id: 'guramemarinasi', name: 'Gurameh Lokal Bumbu Kuning', badge: 'SPESIAL', portion: 'per ekor', price: 'Rp 8.000', description: 'Gurameh lokal dengan marinasi bumbu kuning khas, siap goreng langsung dari freezer.', features: ['Bumbu Kuning Khas', 'Alami Tanpa Pengawet', 'Siap Goreng'], tags: ['Gurameh'], image: '' },
  ],
  faqs: [
    { id: 'faq-1', question: 'Apa Perbedaan Lele Biasa dengan LOSGo by Harma Farm?', answer: 'LOSGo by Harma Farm hadir sebagai solusi yang lebih praktis untuk menikmati olahan ikan berkualitas.' },
    { id: 'faq-2', question: 'Bagaimana Cara yang Tepat Menyimpan Produk Harma Farm?', answer: 'Simpan produk dalam kondisi beku di dalam freezer dengan suhu stabil -18°C atau lebih rendah.' },
    { id: 'faq-3', question: 'Apakah Produk Harma Farm Aman Dikonsumsi oleh Ibu Hamil dan Anak-Anak?', answer: 'Ya, produk HarmaFarm aman dikonsumsi karena dibuat dari bahan alami tanpa pengawet berbahaya.' },
    { id: 'faq-4', question: 'Bagaimana Cara Melakukan Pemesanan Produk Harma Farm?', answer: 'Pemesanan dapat dilakukan melalui WhatsApp admin kami. Kami melayani pengiriman ke area Banyumas dan sekitarnya.' },
  ],
  testimonials: [
    { id: 'testi-1', name: 'Rina', role: 'Ibu Rumah Tangga - Purwokerto', rating: 5, text: 'Awalnya ragu coba produk HarmaFarm ini, tapi setelah dimasak ternyata rasanya lebih gurih. Anak-anak juga lebih suka.' },
    { id: 'testi-2', name: 'Arif', role: 'Dosen Universitas Jendral Soedirman - Purwokerto', rating: 5, text: 'Tekstur dagingnya padat dan tidak mudah hancur saat dimasak. Sudah beberapa kali pesan dan kualitasnya selalu konsisten.' },
  ],
  branding: { logoUrl: '', aboutImages: [] },
  gallery: [],
  certifications: [],
  youtube: { channelName: '', url: '' },
  feedComposition: { image: '', title: 'Nutrisi Alami untuk Menghasilkan Ikan Berkualitas', description: 'Ikan HarmaFarm dibudidayakan menggunakan pakan fermentasi probiotik yang diracik dari bahan-bahan alami pilihan.' },
}

type Tab = 'home' | 'produk' | 'tentang' | 'keunggulan' | 'proses' | 'kontak' | 'faq' | 'testimoni' | 'sertifikasi' | 'pakan'

const s: Record<string, React.CSSProperties> = {
  page: { minHeight: '100vh', background: '#f4f7f4', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1a1a1a' },
  header: { background: '#fff', borderBottom: '1px solid #d4e8d4', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60, position: 'sticky', top: 0, zIndex: 100 },
  headerBadge: { background: '#315B35', color: '#fff', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 6 },
  liveDot: { fontSize: 12, color: '#1D9E75', background: '#e1f5ee', padding: '2px 8px', borderRadius: 10 },
  saveBtn: (saving: boolean): React.CSSProperties => ({ background: saving ? '#9FE1CB' : '#315B35', color: '#fff', border: 'none', padding: '9px 20px', borderRadius: 8, fontWeight: 600, fontSize: 14, cursor: saving ? 'not-allowed' : 'pointer' }),
  layout: { display: 'flex', maxWidth: 1100, margin: '0 auto', padding: '24px 16px', gap: 20 },
  sidebar: { width: 210, flexShrink: 0 },
  sidebarNav: { background: '#fff', borderRadius: 12, border: '1px solid #d4e8d4', overflow: 'hidden' },
  navBtn: (active: boolean): React.CSSProperties => ({ display: 'flex', alignItems: 'center', gap: 8, width: '100%', padding: '11px 16px', border: 'none', background: active ? '#e8f5ee' : 'transparent', color: active ? '#315B35' : '#555', fontWeight: active ? 700 : 400, fontSize: 13, cursor: 'pointer', textAlign: 'left', borderLeft: active ? '3px solid #315B35' : '3px solid transparent' }),
  tip: { marginTop: 12, background: '#e8f5ee', borderRadius: 10, padding: '10px 14px', fontSize: 12, color: '#315B35', lineHeight: 1.5 },
  main: { flex: 1, background: '#fff', borderRadius: 12, border: '1px solid #d4e8d4', padding: 24 },
  h2: { fontSize: 18, fontWeight: 700, marginBottom: 2, color: '#315B35' },
  h2sub: { fontSize: 12, color: '#888', marginBottom: 20 },
  h3: { fontSize: 13, fontWeight: 700, color: '#315B35', borderBottom: '1px solid #e8f5ee', paddingBottom: 8, marginBottom: 14 },
  label: { display: 'block', fontSize: 11, fontWeight: 700, color: '#555', marginBottom: 5, textTransform: 'uppercase' as const, letterSpacing: '0.05em' },
  input: { width: '100%', border: '1px solid #c5d9b3', borderRadius: 8, padding: '8px 12px', fontSize: 13, fontFamily: 'inherit', color: '#1a1a1a', background: '#fff', outline: 'none', boxSizing: 'border-box' as const },
  textarea: { width: '100%', border: '1px solid #c5d9b3', borderRadius: 8, padding: '8px 12px', fontSize: 13, fontFamily: 'inherit', color: '#1a1a1a', background: '#fff', outline: 'none', boxSizing: 'border-box' as const, resize: 'vertical' as const, minHeight: 80 },
  grid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 },
  card: { border: '1px solid #d4e8d4', borderRadius: 10, padding: 16, marginBottom: 14 },
  cardHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  delBtn: { background: '#fff0f0', color: '#e24b4a', border: '1px solid #fca5a5', borderRadius: 6, padding: '4px 10px', fontSize: 12, cursor: 'pointer' },
  addBtn: { width: '100%', padding: 10, border: '1.5px dashed #9FE1CB', borderRadius: 10, background: 'transparent', color: '#315B35', fontSize: 14, fontWeight: 500, cursor: 'pointer', marginTop: 4 },
  fieldWrap: { marginBottom: 16 },
  divider: { border: 'none', borderTop: '1px solid #d4e8d4', margin: '20px 0' },
  infoBox: { background: '#e8f5ee', borderRadius: 8, padding: '10px 14px', marginBottom: 16, fontSize: 12, color: '#315B35', lineHeight: 1.6 },
  warnBox: { background: '#fffbe6', border: '1px solid #ffe58f', borderRadius: 8, padding: '10px 14px', marginBottom: 16, fontSize: 12, color: '#7c5800', lineHeight: 1.6 },
  // field group visual separator
  fieldGroup: { background: '#f9fdf9', borderRadius: 10, padding: '14px 16px', marginBottom: 16, border: '1px solid #e8f5ee' },
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <div style={s.fieldWrap}><label style={s.label}>{label}</label>{children}</div>
}

async function uploadToCloudinary(file: File): Promise<string> {
  const formData = new FormData()
  formData.append("file", file)
  formData.append("upload_preset", "losgo-upload")
  const res = await fetch("https://api.cloudinary.com/v1_1/dtpj53z21/image/upload", { method: "POST", body: formData })
  if (!res.ok) throw new Error("Upload gagal")
  const data = await res.json()
  return data.secure_url
}

function ImageUploader({ value, onChange }: { value: string; onChange: (url: string) => void }) {
  const fileRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.size > 500 * 1024) { alert('Ukuran gambar maksimal 500KB. Kompres dulu di https://squoosh.app'); return }
    setUploading(true)
    uploadToCloudinary(file)
      .then((url) => { onChange(url); setUploading(false) })
      .catch(() => { alert("Upload ke Cloudinary gagal"); setUploading(false) })
  }

  return (
    <div>
      <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleFile} />
      <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
        {value ? (
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <img src={value} alt="preview" style={{ width: 90, height: 90, objectFit: 'cover', borderRadius: 8, border: '1px solid #d4e8d4', display: 'block' }} />
            <button onClick={() => onChange('')} style={{ position: 'absolute', top: -6, right: -6, background: '#e24b4a', color: '#fff', border: 'none', borderRadius: '50%', width: 20, height: 20, fontSize: 11, cursor: 'pointer', lineHeight: '20px', padding: 0 }}>✕</button>
          </div>
        ) : (
          <div onClick={() => fileRef.current?.click()} style={{ width: 90, height: 90, border: '2px dashed #c5d9b3', borderRadius: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', background: '#f9fdf9', gap: 4 }}>
            <span style={{ fontSize: 24 }}>📷</span>
            <span style={{ fontSize: 10, color: '#888', textAlign: 'center', lineHeight: 1.3 }}>Klik pilih<br />gambar</span>
          </div>
        )}
        <div style={{ flex: 1 }}>
          <button onClick={() => fileRef.current?.click()} disabled={uploading} style={{ background: '#e8f5ee', color: '#315B35', border: '1px solid #c5d9b3', borderRadius: 7, padding: '7px 14px', fontSize: 12, fontWeight: 600, cursor: 'pointer', display: 'block', marginBottom: 6 }}>
            {uploading ? '⏳ Memproses...' : value ? '🔄 Ganti Gambar' : '📁 Pilih Gambar'}
          </button>
          <div style={{ fontSize: 11, color: '#888', lineHeight: 1.5 }}>Format: JPG/PNG/WEBP<br />Maks: 500KB<br /><a href="https://squoosh.app" target="_blank" rel="noreferrer" style={{ color: '#315B35' }}>Kompres di squoosh.app</a></div>
        </div>
      </div>
    </div>
  )
}

export default function AdminDashboard() {
  const [auth, setAuth] = useState(false)
  const [un, setUn] = useState('')
  const [pw, setPw] = useState('')
  const [pwError, setPwError] = useState(false)
  const [data, setData] = useState<SiteData>(DEFAULT)
  const [tab, setTab] = useState<Tab>('home')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [toast, setToast] = useState('')

  useEffect(() => { getSiteData().then(d => { if (d) setData(d); setLoading(false) }) }, [])

  const handleLogin = () => {
    if (un === ADMIN_USER && pw === ADMIN_PASSWORD) { setAuth(true); setPwError(false) }
    else setPwError(true)
  }

  if (!auth) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f4f7f4', fontFamily: 'system-ui' }}>
      <div style={{ background: '#fff', borderRadius: 16, padding: 40, border: '1px solid #d4e8d4', width: 340, textAlign: 'center' }}>
        <div style={{ fontSize: 40, marginBottom: 12 }}>🔒</div>
        <div style={{ fontWeight: 700, fontSize: 18, color: '#315B35', marginBottom: 4 }}>Admin LOSGo</div>
        <div style={{ fontSize: 13, color: '#888', marginBottom: 24 }}>Masukkan username & password</div>
        <input type="text" placeholder="Username..." value={un} onChange={e => { setUn(e.target.value); setPwError(false) }} style={{ width: '100%', border: `1px solid ${pwError ? '#e24b4a' : '#c5d9b3'}`, borderRadius: 8, padding: '10px 14px', fontSize: 14, fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box' as const, marginBottom: 10 }} />
        <input type="password" placeholder="Password..." value={pw} onChange={e => { setPw(e.target.value); setPwError(false) }} onKeyDown={e => { if (e.key === 'Enter') handleLogin() }} style={{ width: '100%', border: `1px solid ${pwError ? '#e24b4a' : '#c5d9b3'}`, borderRadius: 8, padding: '10px 14px', fontSize: 14, fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box' as const, marginBottom: 8 }} />
        {pwError && <div style={{ color: '#e24b4a', fontSize: 12, marginBottom: 8 }}>Username atau password salah.</div>}
        <button onClick={handleLogin} style={{ width: '100%', background: '#315B35', color: '#fff', border: 'none', borderRadius: 8, padding: '10px', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>Masuk</button>
      </div>
    </div>
  )

  if (loading) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f4f7f4', fontFamily: 'system-ui' }}>
      <div style={{ textAlign: 'center' }}><div style={{ fontSize: 40, marginBottom: 12 }}>🐟</div><div style={{ color: '#315B35', fontWeight: 600 }}>Memuat data HarmaFarm...</div></div>
    </div>
  )

  const showToast = (msg: string) => { setToast(msg); setTimeout(() => setToast(''), 3500) }
  const handleSave = async () => {
    setSaving(true)
    const ok = await saveSiteData(data)
    setSaving(false)
    showToast(ok ? '✅ Tersimpan! Perubahan langsung live di website.' : '❌ Gagal menyimpan. Coba lagi.')
  }

  const setContact = (k: keyof SiteData['contact'], v: string) => setData(d => ({ ...d, contact: { ...d.contact, [k]: v } }))
  const setHero = (k: keyof SiteData['hero'], v: string) => setData(d => ({ ...d, hero: { ...d.hero, [k]: v } }))
  const setBrand = (k: keyof SiteData['brand'], v: string) => setData(d => ({ ...d, brand: { ...d.brand, [k]: v } }))
  const setDigital = (k: keyof SiteData['digital'], v: string) => setData(d => ({ ...d, digital: { ...d.digital, [k]: v } }))
  const updateProduct = (i: number, patch: Partial<SiteData['products'][0]>) =>
    setData(d => ({ ...d, products: d.products.map((x, idx) => idx === i ? { ...x, ...patch } : x) }))

  const tabs: { id: Tab; label: string }[] = [
    { id: 'home',        label: '🏠 Home' },
    { id: 'produk',      label: '🐟 Produk' },
    { id: 'tentang',     label: '🏪 Tentang Kami' },
    { id: 'keunggulan',  label: '⭐ Keunggulan' },
    { id: 'proses',      label: '⚙️ Proses' },
    { id: 'kontak',      label: '📞 Kontak' },
    { id: 'faq',         label: '❓ FAQ' },
    { id: 'testimoni',   label: '💬 Testimoni' },
    { id: 'sertifikasi', label: '🏆 Sertifikasi' },
    { id: 'pakan',       label: '🌾 Komposisi Pakan' },
  ]

  return (
    <div style={s.page}>
      <div style={s.header}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={s.headerBadge}>ADMIN</span>
          <span style={{ fontWeight: 700, fontSize: 16 }}>LOSGo by HarmaFarm</span>
          <span style={s.liveDot}>● Live</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button onClick={() => setAuth(false)} style={{ background: 'none', border: '1px solid #d4e8d4', borderRadius: 8, padding: '7px 14px', fontSize: 13, cursor: 'pointer', color: '#555' }}>🚪 Keluar</button>
          <button onClick={handleSave} disabled={saving} style={s.saveBtn(saving)}>{saving ? '⏳ Menyimpan...' : '💾 Simpan & Publish'}</button>
        </div>
      </div>

      <div style={s.layout}>
        <div style={s.sidebar}>
          <div style={s.sidebarNav}>
            {tabs.map(t => <button key={t.id} onClick={() => setTab(t.id)} style={s.navBtn(tab === t.id)}>{t.label}</button>)}
          </div>
          <div style={s.tip}><strong>💡 Tips:</strong> Setelah edit, klik <strong>Simpan & Publish</strong> — perubahan langsung tampil di website.</div>
        </div>

        <div style={s.main}>

          {/* ===== HOME ===== */}
          {tab === 'home' && (
            <div>
              <div style={s.h2}>🏠 Home</div>
              <div style={s.h2sub}>Bagian pertama yang dilihat pengunjung website</div>

              <div style={s.h3}>Teks Hero</div>
              <Field label="Badge / Label kecil di atas judul">
                <input style={s.input} value={data.hero.badge} onChange={e => setHero('badge', e.target.value)} placeholder="Pasti Bersih, Pasti Enak!" />
              </Field>
              <Field label="Headline Utama (judul besar)">
                <textarea style={s.textarea} value={data.hero.headline} onChange={e => setHero('headline', e.target.value)} />
              </Field>
              <Field label="Subheadline / Deskripsi singkat">
                <textarea style={{ ...s.textarea, minHeight: 100 }} value={data.hero.subheadline} onChange={e => setHero('subheadline', e.target.value)} />
              </Field>
              <div style={s.grid2}>
                <Field label="Label Tombol Kiri (Katalog)">
                  <input style={s.input} value={data.hero.cta1} onChange={e => setHero('cta1', e.target.value)} />
                </Field>
                <Field label="Label Tombol Kanan (Pesan)">
                  <input style={s.input} value={data.hero.cta2} onChange={e => setHero('cta2', e.target.value)} />
                </Field>
              </div>

              <hr style={s.divider} />
              <div style={s.h3}>Identitas Brand & Loading Screen</div>
              <div style={s.infoBox}>Nama brand dan tagline tampil di loading screen saat website pertama dibuka.</div>
              <div style={s.grid2}>
                <Field label="Nama Brand">
                  <input style={s.input} value={data.brand.name} onChange={e => setBrand('name', e.target.value)} />
                </Field>
                <Field label="Tagline">
                  <input style={s.input} value={data.brand.tagline} onChange={e => setBrand('tagline', e.target.value)} />
                </Field>
              </div>
              <Field label="Jam Operasional (tampil di section Kontak)">
                <input style={s.input} value={data.brand.operationalHours} onChange={e => setBrand('operationalHours', e.target.value)} placeholder="Setiap hari pukul 08:00 - 18:00 WIB" />
              </Field>

              <hr style={s.divider} />
              <div style={s.h3}>Logo Website</div>
              <div style={s.infoBox}>Logo tampil di navbar (atas) dan footer (bawah) website. Gunakan PNG dengan latar transparan untuk hasil terbaik.</div>
              <Field label="Upload Logo">
                <ImageUploader value={data.branding?.logoUrl || ''} onChange={url => setData(d => ({ ...d, branding: { ...d.branding, logoUrl: url } }))} />
              </Field>
            </div>
          )}

          {/* ===== PRODUK ===== */}
          {tab === 'produk' && (
            <div>
              <div style={s.h2}>🐟 Katalog Produk</div>
              <div style={s.h2sub}>Tampil di halaman Produk — bisa filter per kategori (Lele, Nila, Bandeng, dll)</div>
              <div style={s.warnBox}>📸 Upload foto produk maks 500KB. Kompres dulu di <a href="https://squoosh.app" target="_blank" rel="noreferrer" style={{ color: '#7c5800' }}>squoosh.app</a> jika perlu.</div>
              {data.products.map((p, i) => (
                <div key={p.id} style={s.card}>
                  <div style={s.cardHeader}>
                    <strong style={{ fontSize: 14 }}>{p.name || `Produk ${i + 1}`}</strong>
                    <button style={s.delBtn} onClick={() => setData(d => ({ ...d, products: d.products.filter((_, idx) => idx !== i) }))}>🗑 Hapus</button>
                  </div>
                  <Field label="Foto Produk">
                    <ImageUploader value={p.image || ''} onChange={url => updateProduct(i, { image: url })} />
                  </Field>
                  <div style={s.grid2}>
                    <Field label="Nama Produk">
                      <input style={s.input} value={p.name} onChange={e => updateProduct(i, { name: e.target.value })} />
                    </Field>
                    <Field label="Badge (TERLARIS / FAVORIT / dll)">
                      <input style={s.input} value={p.badge} onChange={e => updateProduct(i, { badge: e.target.value })} />
                    </Field>
                    <Field label="Porsi / Berat">
                      <input style={s.input} value={p.portion} onChange={e => updateProduct(i, { portion: e.target.value })} placeholder="800 gr" />
                    </Field>
                    <Field label="Harga">
                      <input style={s.input} value={p.price || ''} onChange={e => updateProduct(i, { price: e.target.value })} placeholder="Rp 35.000" />
                    </Field>
                  </div>
                  <Field label="Kategori / Tag (pisah koma — contoh: Lele, Nila)">
                    <input style={s.input} value={p.tags.join(', ')} onChange={e => updateProduct(i, { tags: e.target.value.split(',').map(t => t.trim()) })} />
                  </Field>
                  <Field label="Deskripsi Produk">
                    <textarea style={s.textarea} value={p.description} onChange={e => updateProduct(i, { description: e.target.value })} />
                  </Field>
                  <Field label="Poin Keunggulan (pisah koma — contoh: Tinggi Protein, Tanpa Pengawet)">
                    <input style={s.input} value={p.features.join(', ')} onChange={e => updateProduct(i, { features: e.target.value.split(',').map(f => f.trim()) })} />
                  </Field>
                </div>
              ))}
              <button style={s.addBtn} onClick={() => setData(d => ({ ...d, products: [...d.products, { id: `prod-${Date.now()}`, name: 'Produk Baru', badge: 'BARU', portion: '200 gr', price: '', description: '', features: [], tags: [], image: '' }] }))}>
                + Tambah Produk Baru
              </button>
            </div>
          )}

          {/* ===== TENTANG KAMI ===== */}
          {tab === 'tentang' && (
            <div>
              <div style={s.h2}>🏪 Tentang Kami</div>
              <div style={s.h2sub}>Section "Mengolah Ikan Lokal Menjadi Hidangan Praktis dan Bernutrisi"</div>

              <div style={s.h3}>Deskripsi Tentang HarmaFarm</div>
              <Field label="Paragraf Tentang Kami (asal usul, visi, komitmen HarmaFarm)">
                <textarea style={{ ...s.textarea, minHeight: 120 }} value={data.brand.description} onChange={e => setBrand('description', e.target.value)} placeholder="HarmaFarm hadir sebagai UMKM inovatif asal Cilongok, Banyumas yang mengembangkan berbagai olahan makanan beku (frozen food) siap saji berbasis probiotik berkualitas tinggi." />
              </Field>

              <hr style={s.divider} />
              <div style={s.h3}>Foto Slideshow "Tentang Kami"</div>
              <div style={s.infoBox}>
                Foto-foto ini tampil sebagai slideshow di sisi kiri section Tentang Kami.<br />
                Upload foto tim produksi, fasilitas, atau kegiatan HarmaFarm. Maks 500KB per foto.
              </div>
              {(data.branding?.aboutImages || []).map((img, i) => (
                <div key={i} style={{ ...s.card, marginBottom: 10 }}>
                  <div style={s.cardHeader}>
                    <strong style={{ fontSize: 13 }}>Foto {i + 1}</strong>
                    <button style={s.delBtn} onClick={() => setData(d => ({ ...d, branding: { ...d.branding, aboutImages: d.branding.aboutImages.filter((_, idx) => idx !== i) } }))}>🗑 Hapus</button>
                  </div>
                  <ImageUploader value={img} onChange={url => setData(d => ({ ...d, branding: { ...d.branding, aboutImages: d.branding.aboutImages.map((x, idx) => idx === i ? url : x) } }))} />
                </div>
              ))}
              <button style={s.addBtn} onClick={() => setData(d => ({ ...d, branding: { ...d.branding, aboutImages: [...(d.branding?.aboutImages || []), ''] } }))}>
                + Tambah Foto Slideshow
              </button>
            </div>
          )}

          {/* ===== KEUNGGULAN ===== */}
          {tab === 'keunggulan' && (
            <div>
              <div style={s.h2}>⭐ Keunggulan</div>
              <div style={s.h2sub}>Section "Mengapa HarmaFarm Menjadi Pilihan Banyak Orang?" + kartu platform digital</div>

              <div style={s.h3}>Kartu Platform Digital</div>
              <div style={s.infoBox}>
                Kartu-kartu ini tampil di bagian bawah section Keunggulan dengan judul <strong>"Temukan HarmaFarm di Berbagai Platform"</strong>.<br />
                Isi username <strong>(@handle)</strong> dan angka statistiknya di sini.
              </div>

              {/* Instagram */}
              <div style={s.fieldGroup}>
                <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 10, color: '#315B35' }}>📸 Instagram</div>
                <div style={s.grid2}>
                  <Field label="Username tampil (contoh: @harmafarm.losgo)">
                    <input style={s.input} value={data.digital.ig_handle} onChange={e => setDigital('ig_handle', e.target.value)} placeholder="@harmafarm.losgo" />
                  </Field>
                  <Field label="JUDUL UTAMA">
                    <input style={s.input} value={data.digital.ig_metric} onChange={e => setDigital('ig_metric', e.target.value)} placeholder="300+ Followers" />
                  </Field>
                </div>
                <Field label="Link URL Instagram">
                  <input style={s.input} value={data.digital.ig_url} onChange={e => setDigital('ig_url', e.target.value)} />
                </Field>
              </div>

              {/* TikTok */}
              <div style={s.fieldGroup}>
                <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 10, color: '#315B35' }}>🎵 TikTok</div>
                <div style={s.grid2}>
                  <Field label="Username tampil (contoh: @harmafarm.losgo)">
                    <input style={s.input} value={data.digital.tt_handle} onChange={e => setDigital('tt_handle', e.target.value)} placeholder="@harmafarm.losgo" />
                  </Field>
                  <Field label="JUDUL UTAMA">
                    <input style={s.input} value={data.digital.tt_metric} onChange={e => setDigital('tt_metric', e.target.value)} placeholder="1.3K+ Likes" />
                  </Field>
                </div>
                <Field label="Link URL TikTok">
                  <input style={s.input} value={data.digital.tt_url} onChange={e => setDigital('tt_url', e.target.value)} />
                </Field>
              </div>

{/* YouTube */}
<div style={s.fieldGroup}>
  <div
    style={{
      fontWeight: 700,
      fontSize: 13,
      marginBottom: 10,
      color: "#315B35",
    }}
  >
    ▶️ YouTube
  </div>

  <div style={s.grid2}>
    <Field label="Nama Channel">
      <input
        style={s.input}
        value={data.digital.yt_handle}
        onChange={(e) => setDigital("yt_handle", e.target.value)}
      />
    </Field>
<Field label="Judul Utama">
      <input
        style={s.input}
        value={data.digital.yt_metric}
        onChange={e => setDigital('yt_metric', e.target.value)}
      />
    </Field>
    <Field label="Link YouTube">
      <input
        style={s.input}
        value={data.digital.yt_url}
        onChange={(e) => setDigital("yt_url", e.target.value)}
      />
    </Field>
  </div>
</div>
              {/* Google Maps */}
              <div style={s.fieldGroup}>
                <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 10, color: '#315B35' }}>📍 Google Maps</div>
                <Field label="Rating & Ulasan (contoh: 4.6/5 Rating (30+ Ulasan))">
                  <input style={s.input} value={data.digital.gmaps_metric} onChange={e => setDigital('gmaps_metric', e.target.value)} placeholder="4.6/5 Rating (30+ Ulasan)" />
                </Field>
                <Field label="Link URL Google Maps">
                  <input style={s.input} value={data.digital.gmaps_url} onChange={e => setDigital('gmaps_url', e.target.value)} />
                </Field>
              </div>
            </div>
          )}

          {/* ===== PROSES ===== */}
          {tab === 'proses' && (
  <div>
    <div style={s.h2}>⚙️ Proses Produksi</div>
    <div style={s.h2sub}>
      Tahapan proses produksi ditampilkan langsung dari data website.
    </div>

    <div style={s.infoBox}>
      Saat ini section proses tidak menggunakan gambar.
      Jika ingin menggunakan foto proses produksi,
      frontend perlu diperbarui terlebih dahulu.
    </div>
  </div>
)}
              </button>
            </div>
          )}

          {/* ===== KONTAK ===== */}
          {tab === 'kontak' && (
            <div>
              <div style={s.h3}>WhatsApp & Email</div>
              <div style={s.grid2}>
                <Field label="Nomor WhatsApp 1 (tampil di website)">
                  <input style={s.input} value={data.contact.phone} onChange={e => setContact('phone', e.target.value)} />
                </Field>
                <Field label="Email Resmi">
                  <input style={s.input} value={data.contact.email} onChange={e => setContact('email', e.target.value)} />
                </Field>
              </div>
              <Field label="Link WhatsApp 1 (wa.me/62...)">
                <input style={s.input} value={data.contact.whatsappUrl} onChange={e => setContact('whatsappUrl', e.target.value)} />
              </Field>
              <div style={s.grid2}>
                <Field label="Nomor WhatsApp 2 (opsional — nomor kedua)">
                  <input style={s.input} value={(data.contact as any).phone2 || ''} onChange={e => setData(d => ({ ...d, contact: { ...d.contact, phone2: e.target.value } }))} placeholder="+62 812-xxxx-xxxx" />
                </Field>
                <Field label="Link WhatsApp 2 (wa.me/62...)">
                  <input style={s.input} value={(data.contact as any).whatsappUrl2 || ''} onChange={e => setData(d => ({ ...d, contact: { ...d.contact, whatsappUrl2: e.target.value } }))} placeholder="https://wa.me/628xxx..." />
                </Field>
              </div>

              {/* Instagram di Kontak */}
              <div style={s.fieldGroup}>
                <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 10, color: '#315B35' }}>📸 Instagram Utama</div>
                <div style={s.infoBox} style={{ marginBottom: 10, fontSize: 11 }}>
                  ⚠️ Username Instagram di kartu Kontak diatur di tab <strong>Keunggulan</strong> (field "Username tampil"). Field di bawah ini hanya untuk link URL-nya.
                </div>
                <Field label="Link URL Instagram (untuk tombol klik)">
                  <input style={s.input} value={data.contact.instagram} onChange={e => setContact('instagram', e.target.value)} placeholder="https://www.instagram.com/harmafarm.losgo" />
                </Field>
              </div>

              {/* TikTok di Kontak */}
              <div style={s.fieldGroup}>
                <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 10, color: '#315B35' }}>🎵 TikTok</div>
                <Field label="Link URL TikTok (untuk tombol klik)">
                  <input style={s.input} value={data.contact.tiktok} onChange={e => setContact('tiktok', e.target.value)} placeholder="https://www.tiktok.com/@harmafarm.losgo" />
                </Field>
              </div>

              {/* YouTube di Kontak */}
              <div style={s.fieldGroup}>
                <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 10, color: '#315B35' }}>▶️ YouTube Channel</div>
                <div style={s.grid2}>
                  <Field label="Nama Channel (tampil sebagai teks)">
                    <input style={s.input} value={data.youtube?.channelName || ''} onChange={e => setData(d => ({ ...d, youtube: { ...d.youtube, channelName: e.target.value } }))} placeholder="LOSGo Channel" />
                  </Field>
                  <Field label="Link URL YouTube">
                    <input style={s.input} value={data.youtube?.url || ''} onChange={e => setData(d => ({ ...d, youtube: { ...d.youtube, url: e.target.value } }))} />
                  </Field>
                </div>
              </div>

              <hr style={s.divider} />
              <div style={s.h3}>Alamat & Lokasi</div>
              <Field label="Alamat Lengkap Rumah Produksi">
                <textarea style={s.textarea} value={data.contact.address} onChange={e => setContact('address', e.target.value)} />
              </Field>
              <Field label="Link Google Maps (untuk tombol Petunjuk Rute)">
                <input style={s.input} value={data.contact.mapsEmbed} onChange={e => setContact('mapsEmbed', e.target.value)} placeholder="https://maps.app.goo.gl/..." />
              </Field>
            </div>
          )}

          {/* ===== FAQ ===== */}
          {tab === 'faq' && (
            <div>
              <div style={s.h2}>❓ FAQ</div>
              <div style={s.h2sub}>Section "Pertanyaan Seputar Produk HarmaFarm" — accordion tanya jawab</div>
              {data.faqs.map((f, i) => (
                <div key={f.id} style={s.card}>
                  <div style={s.cardHeader}>
                    <strong style={{ fontSize: 13 }}>FAQ {i + 1}</strong>
                    <button style={s.delBtn} onClick={() => setData(d => ({ ...d, faqs: d.faqs.filter((_, idx) => idx !== i) }))}>🗑 Hapus</button>
                  </div>
                  <Field label="Pertanyaan">
                    <input style={s.input} value={f.question} onChange={e => setData(d => ({ ...d, faqs: d.faqs.map((x, idx) => idx === i ? { ...x, question: e.target.value } : x) }))} />
                  </Field>
                  <Field label="Jawaban">
                    <textarea style={{ ...s.textarea, minHeight: 100 }} value={f.answer} onChange={e => setData(d => ({ ...d, faqs: d.faqs.map((x, idx) => idx === i ? { ...x, answer: e.target.value } : x) }))} />
                  </Field>
                </div>
              ))}
              <button style={s.addBtn} onClick={() => setData(d => ({ ...d, faqs: [...d.faqs, { id: `faq-${Date.now()}`, question: 'Pertanyaan baru?', answer: '' }] }))}>
                + Tambah FAQ Baru
              </button>
            </div>
          )}

          {/* ===== TESTIMONI ===== */}
          {tab === 'testimoni' && (
            <div>
              <div style={s.h2}>💬 Testimoni Pelanggan</div>
              <div style={s.h2sub}>Section "Apa Kata Pelanggan HarmaFarm?" — tampil sebagai slideshow</div>
              {data.testimonials.map((t, i) => (
                <div key={t.id} style={s.card}>
                  <div style={s.cardHeader}>
                    <strong style={{ fontSize: 13 }}>{t.name || `Testimoni ${i + 1}`}</strong>
                    <button style={s.delBtn} onClick={() => setData(d => ({ ...d, testimonials: d.testimonials.filter((_, idx) => idx !== i) }))}>🗑 Hapus</button>
                  </div>
                  <div style={s.grid2}>
                    <Field label="Nama Pelanggan">
                      <input style={s.input} value={t.name} onChange={e => setData(d => ({ ...d, testimonials: d.testimonials.map((x, idx) => idx === i ? { ...x, name: e.target.value } : x) }))} />
                    </Field>
                    <Field label="Profil (contoh: Ibu Rumah Tangga - Purwokerto)">
                      <input style={s.input} value={t.role} onChange={e => setData(d => ({ ...d, testimonials: d.testimonials.map((x, idx) => idx === i ? { ...x, role: e.target.value } : x) }))} />
                    </Field>
                  </div>
                  <Field label="Rating Bintang">
                    <select style={s.input} value={t.rating} onChange={e => setData(d => ({ ...d, testimonials: d.testimonials.map((x, idx) => idx === i ? { ...x, rating: Number(e.target.value) } : x) }))}>
                      {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n} bintang {'⭐'.repeat(n)}</option>)}
                    </select>
                  </Field>
                  <Field label="Isi Testimoni (kutipan langsung dari pelanggan)">
                    <textarea style={{ ...s.textarea, minHeight: 90 }} value={t.text} onChange={e => setData(d => ({ ...d, testimonials: d.testimonials.map((x, idx) => idx === i ? { ...x, text: e.target.value } : x) }))} />
                  </Field>
                </div>
              ))}
              <button style={s.addBtn} onClick={() => setData(d => ({ ...d, testimonials: [...d.testimonials, { id: `testi-${Date.now()}`, name: '', role: '', rating: 5, text: '' }] }))}>
                + Tambah Testimoni Baru
              </button>
            </div>
          )}

          {/* ===== SERTIFIKASI ===== */}
          {tab === 'sertifikasi' && (
            <div>
              <div style={s.h2}>🏆 Sertifikasi & Legalitas</div>
              <div style={s.h2sub}>Logo sertifikasi yang tampil di bagian bawah Home (Halal, GMP, Better Banyumas, dll)</div>
              <div style={s.infoBox}>Upload logo sertifikasi dalam format PNG transparan. Maks 500KB per logo.</div>
              {(data.certifications || []).map((item, i) => (
                <div key={i} style={s.card}>
                  <div style={s.cardHeader}>
                    <strong style={{ fontSize: 13 }}>{item.name || `Sertifikasi ${i + 1}`}</strong>
                    <button style={s.delBtn} onClick={() => setData(d => ({ ...d, certifications: d.certifications.filter((_, idx) => idx !== i) }))}>🗑 Hapus</button>
                  </div>
                  <Field label="Nama Sertifikasi (contoh: Halal MUI, GMP, Better Banyumas)">
                    <input style={s.input} value={item.name} onChange={e => setData(d => ({ ...d, certifications: d.certifications.map((c, idx) => idx === i ? { ...c, name: e.target.value } : c) }))} />
                  </Field>
                  <Field label="Logo Sertifikasi">
                    <ImageUploader value={item.image} onChange={url => setData(d => ({ ...d, certifications: d.certifications.map((c, idx) => idx === i ? { ...c, image: url } : c) }))} />
                  </Field>
                </div>
              ))}
              <button style={s.addBtn} onClick={() => setData(d => ({ ...d, certifications: [...(d.certifications || []), { name: '', image: '' }] }))}>
                + Tambah Sertifikasi
              </button>
            </div>
          )}

          {/* ===== PAKAN ===== */}
          {tab === 'pakan' && (
            <div>
              <div style={s.h2}>🌾 Komposisi Pakan Probiotik</div>
              <div style={s.h2sub}>Section "Nutrisi Alami untuk Menghasilkan Ikan Berkualitas" di bagian bawah Keunggulan</div>
              <div style={s.infoBox}>Section ini menjelaskan bahan pakan probiotik HarmaFarm: Pelet, Gula Merah, Ragi, Nanas, Air Kelapa, Yakult, dll.</div>
              <Field label="Judul Section">
                <input style={s.input} value={data.feedComposition?.title || ''} onChange={e => setData(d => ({ ...d, feedComposition: { ...d.feedComposition, title: e.target.value } }))} placeholder="Nutrisi Alami untuk Menghasilkan Ikan Berkualitas" />
              </Field>
              <Field label="Deskripsi (paragraf penjelasan pakan probiotik)">
                <textarea style={{ ...s.textarea, minHeight: 120 }} value={data.feedComposition?.description || ''} onChange={e => setData(d => ({ ...d, feedComposition: { ...d.feedComposition, description: e.target.value } }))} placeholder="Ikan HarmaFarm dibudidayakan menggunakan pakan fermentasi probiotik..." />
              </Field>
              <Field label="Foto Bahan-Bahan Pakan">
                <ImageUploader value={data.feedComposition?.image || ''} onChange={url => setData(d => ({ ...d, feedComposition: { ...d.feedComposition, image: url } }))} />
              </Field>
            </div>
          )}

        </div>
      </div>

      {toast && (
        <div style={{ position: 'fixed', bottom: 24, right: 24, background: toast.startsWith('✅') ? '#315B35' : '#e24b4a', color: '#fff', padding: '12px 20px', borderRadius: 10, fontWeight: 600, fontSize: 14, zIndex: 9999 }}>
          {toast}
        </div>
      )}
    </div>
  )
}
