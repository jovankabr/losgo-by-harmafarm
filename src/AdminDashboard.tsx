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
    ig_metric: '300+ Followers',
    ig_url: 'https://www.instagram.com/harmafarm.losgo',
    tt_handle: '@harmafarm.losgo',
    tt_metric: '1.3K+ Likes',
    tt_url: 'https://www.tiktok.com/@harmafarm.losgo',
    gmaps_metric: '4.6/5 Rating (30+ Ulasan)',
    gmaps_url: 'https://maps.app.goo.gl/Cm4agTf1PJ6MiGsv6',
  },
  products: [
    { id: 'losgo800', name: 'LOSGo 800 gr', badge: 'TERLARIS', portion: '800 gr', price: '', description: 'Lele organik siap goreng dengan bumbu marinasi yang meresap dan cita rasa khas HarmaFarm.', features: ['Tinggi Protein', 'Alami Tanpa Pengawet', 'Proses Higienis'], tags: ['Lele'], image: '' },
    { id: 'losgo400', name: 'LOSGo 400 gr', badge: 'FAVORIT', portion: '400 gr', price: '', description: 'Pilihan praktis untuk keluarga kecil atau kebutuhan harian.', features: ['Tinggi Protein', 'Alami Tanpa Pengawet', 'Proses Higienis'], tags: ['Lele'], image: '' },
    { id: 'nilasigo800', name: 'NilaSigo 800 gr', badge: 'PREMIUM', portion: '800 gr', price: '', description: 'Ikan nila marinasi berbumbu pilihan dengan tekstur lembut dan rasa gurih.', features: ['Bumbu Meresap', 'Alami Tanpa Pengawet', 'Proses Higienis'], tags: ['Nila'], image: '' },
    { id: 'nilasigo400', name: 'NilaSigo 400 gr', badge: 'HEMAT', portion: '400 gr', price: '', description: 'Pilihan ekonomis ikan nila marinasi untuk keluarga kecil.', features: ['Bumbu Meresap', 'Alami Tanpa Pengawet', 'Proses Higienis'], tags: ['Nila'], image: '' },
    { id: 'leleterbang', name: 'Lele Terbang', badge: 'HITS', portion: '400 gr', price: '', description: 'Olahan lele dengan teknik khusus menghasilkan tekstur renyah dan gurih.', features: ['Super Renyah', 'Tinggi Protein', 'Cocok Semua Usia'], tags: ['Lele'], image: '' },
    { id: 'lekids', name: 'Lekids Lele Fillet', badge: 'PRAKTIS', portion: '200 gr', price: '', description: 'Fillet lele tanpa duri yang mudah diolah untuk berbagai menu favorit.', features: ['Tinggi Protein Omega 3', 'Cocok Untuk MPASI', 'Tanpa Duri'], tags: ['Lele'], image: '' },
    { id: 'rolade', name: 'Rolade Lele', badge: 'UNIK', portion: '300 gr', price: '', description: 'Olahan lele premium berbentuk rolade dengan tekstur lembut dan rasa gurih.', features: ['Bergizi', 'Favorit Keluarga', 'Baik Untuk Otak dan Jantung'], tags: ['Rolade'], image: '' },
    { id: 'nilapresto', name: 'Nila Presto', badge: 'EMPUK', portion: '150 gr', price: '', description: 'Ikan nila presto empuk hingga tulang, kaya kalsium dan protein.', features: ['Tulang Lunak', 'Tinggi Kalsium', 'Alami Tanpa Pengawet'], tags: ['Nila'], image: '' },
    { id: 'bandeng', name: 'Bandeng Presto', badge: 'GURIH', portion: '320 gr (2 pcs)', price: '', description: 'Bandeng presto empuk isi 2 pcs dengan cita rasa khas dan mudah dinikmati.', features: ['Tinggi Kalsium', 'Tinggi Protein Omega 3', 'Alami Tanpa Pengawet'], tags: ['Bandeng'], image: '' },
    { id: 'guramelokal', name: 'Gurameh Lokal Bersih', badge: 'LOKAL', portion: 'per ekor', price: '', description: 'Gurameh segar lokal sudah dibersihkan siap masak, bebas sisik dan isi perut.', features: ['Segar Lokal', 'Sudah Dibersihkan', 'Siap Masak'], tags: ['Gurameh'], image: '' },
    { id: 'guramemarinasi', name: 'Gurameh Lokal Bumbu Kuning', badge: 'SPESIAL', portion: 'per ekor', price: '', description: 'Gurameh lokal dengan marinasi bumbu kuning khas, siap goreng langsung dari freezer.', features: ['Bumbu Kuning Khas', 'Alami Tanpa Pengawet', 'Siap Goreng'], tags: ['Gurameh'], image: '' },
  ],
  faqs: [
    { id: 'faq-1', question: 'Apa Perbedaan Lele Biasa dengan LOSGo by Harma Farm?', answer: 'LOSGo by Harma Farm hadir sebagai solusi yang lebih praktis untuk menikmati olahan ikan berkualitas. Lele dipilih dari budidaya yang terjaga kualitasnya, kemudian dibersihkan secara higienis dan diproses dengan bumbu pilihan sehingga siap diolah.' },
    { id: 'faq-2', question: 'Bagaimana Cara yang Tepat Menyimpan Produk Harma Farm?', answer: 'Simpan produk dalam kondisi beku di dalam freezer dengan suhu stabil -18°C atau lebih rendah. Dengan kemasan yang tetap tertutup rapat, produk dapat bertahan hingga 6 bulan.' },
  ],
  testimonials: [
    { id: 'testi-1', name: 'Rina', role: 'Ibu Rumah Tangga - Purwokerto', rating: 5, text: 'Awalnya ragu coba produk HarmaFarm ini, tapi setelah dimasak ternyata rasanya lebih gurih. Anak-anak juga lebih suka.' },
    { id: 'testi-2', name: 'Arif', role: 'Dosen Universitas Jendral Soedirman - Purwokerto', rating: 5, text: 'Tekstur dagingnya padat dan tidak mudah hancur saat dimasak. Sudah beberapa kali pesan dan kualitasnya selalu konsisten.' },
  ],
}

type Tab = 'hero' | 'produk' | 'kontak' | 'digital' | 'faq' | 'testimoni'

const s: Record<string, React.CSSProperties> = {
  page: { minHeight: '100vh', background: '#f4f7f4', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1a1a1a' },
  header: { background: '#fff', borderBottom: '1px solid #d4e8d4', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60, position: 'sticky', top: 0, zIndex: 100 },
  badge: { background: '#315B35', color: '#fff', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 6 },
  liveDot: { fontSize: 12, color: '#1D9E75', background: '#e1f5ee', padding: '2px 8px', borderRadius: 10 },
  saveBtn: (saving: boolean): React.CSSProperties => ({ background: saving ? '#9FE1CB' : '#315B35', color: '#fff', border: 'none', padding: '9px 20px', borderRadius: 8, fontWeight: 600, fontSize: 14, cursor: saving ? 'not-allowed' : 'pointer' }),
  layout: { display: 'flex', maxWidth: 1100, margin: '0 auto', padding: '24px 16px', gap: 20 },
  sidebar: { width: 200, flexShrink: 0 },
  sidebarNav: { background: '#fff', borderRadius: 12, border: '1px solid #d4e8d4', overflow: 'hidden' },
  navBtn: (active: boolean): React.CSSProperties => ({ display: 'flex', alignItems: 'center', gap: 8, width: '100%', padding: '12px 16px', border: 'none', background: active ? '#e8f5ee' : 'transparent', color: active ? '#315B35' : '#555', fontWeight: active ? 700 : 400, fontSize: 13, cursor: 'pointer', textAlign: 'left', borderLeft: active ? '3px solid #315B35' : '3px solid transparent' }),
  tip: { marginTop: 12, background: '#e8f5ee', borderRadius: 10, padding: '10px 14px', fontSize: 12, color: '#315B35', lineHeight: 1.5 },
  main: { flex: 1, background: '#fff', borderRadius: 12, border: '1px solid #d4e8d4', padding: 24 },
  h2: { fontSize: 18, fontWeight: 700, marginBottom: 20, color: '#315B35' },
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
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <div style={s.fieldWrap}><label style={s.label}>{label}</label>{children}</div>
}

// Komponen upload gambar — gambar disimpan sebagai base64 di JSONBin
function ImageUploader({ value, onChange }: { value: string; onChange: (base64: string) => void }) {
  const fileRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.size > 500 * 1024) {
      alert('Ukuran gambar maksimal 500KB. Kompres dulu di https://squoosh.app')
      return
    }
    setUploading(true)
    const reader = new FileReader()
    reader.onload = () => {
      onChange(reader.result as string)
      setUploading(false)
    }
    reader.readAsDataURL(file)
  }

  return (
    <div>
      <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleFile} />
      <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
        {value ? (
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <img
              src={value}
              alt="preview"
              style={{ width: 90, height: 90, objectFit: 'cover', borderRadius: 8, border: '1px solid #d4e8d4', display: 'block' }}
            />
            <button
              onClick={() => onChange('')}
              style={{ position: 'absolute', top: -6, right: -6, background: '#e24b4a', color: '#fff', border: 'none', borderRadius: '50%', width: 20, height: 20, fontSize: 11, cursor: 'pointer', lineHeight: '20px', padding: 0 }}
            >✕</button>
          </div>
        ) : (
          <div
            onClick={() => fileRef.current?.click()}
            style={{ width: 90, height: 90, border: '2px dashed #c5d9b3', borderRadius: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', background: '#f9fdf9', gap: 4 }}
          >
            <span style={{ fontSize: 24 }}>📷</span>
            <span style={{ fontSize: 10, color: '#888', textAlign: 'center', lineHeight: 1.3 }}>Klik pilih<br/>gambar</span>
          </div>
        )}
        <div style={{ flex: 1 }}>
          <button
            onClick={() => fileRef.current?.click()}
            disabled={uploading}
            style={{ background: '#e8f5ee', color: '#315B35', border: '1px solid #c5d9b3', borderRadius: 7, padding: '7px 14px', fontSize: 12, fontWeight: 600, cursor: 'pointer', display: 'block', marginBottom: 6 }}
          >
            {uploading ? '⏳ Memproses...' : value ? '🔄 Ganti Gambar' : '📁 Pilih Gambar'}
          </button>
          <div style={{ fontSize: 11, color: '#888', lineHeight: 1.5 }}>
            Format: JPG/PNG/WEBP<br/>
            Maks: 500KB<br/>
            <a href="https://squoosh.app" target="_blank" rel="noreferrer" style={{ color: '#315B35' }}>Kompres di squoosh.app</a>
          </div>
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
  const [tab, setTab] = useState<Tab>('hero')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [toast, setToast] = useState('')

  useEffect(() => {
    getSiteData().then(d => { if (d) setData(d); setLoading(false) })
  }, [])

  const handleLogin = () => {
    if (un === ADMIN_USER && pw === ADMIN_PASSWORD) {
      setAuth(true)
      setPwError(false)
    } else {
      setPwError(true)
    }
  }

  if (!auth) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f4f7f4', fontFamily: 'system-ui' }}>
      <div style={{ background: '#fff', borderRadius: 16, padding: 40, border: '1px solid #d4e8d4', width: 340, textAlign: 'center' }}>
        <div style={{ fontSize: 40, marginBottom: 12 }}>🔒</div>
        <div style={{ fontWeight: 700, fontSize: 18, color: '#315B35', marginBottom: 4 }}>Admin LOSGo</div>
        <div style={{ fontSize: 13, color: '#888', marginBottom: 24 }}>Masukkan username & password</div>
        <input
          type="text"
          placeholder="Username..."
          value={un}
          onChange={e => { setUn(e.target.value); setPwError(false) }}
          style={{ width: '100%', border: `1px solid ${pwError ? '#e24b4a' : '#c5d9b3'}`, borderRadius: 8, padding: '10px 14px', fontSize: 14, fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box' as const, marginBottom: 10 }}
        />
        <input
          type="password"
          placeholder="Password..."
          value={pw}
          onChange={e => { setPw(e.target.value); setPwError(false) }}
          onKeyDown={e => { if (e.key === 'Enter') handleLogin() }}
          style={{ width: '100%', border: `1px solid ${pwError ? '#e24b4a' : '#c5d9b3'}`, borderRadius: 8, padding: '10px 14px', fontSize: 14, fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box' as const, marginBottom: 8 }}
        />
        {pwError && <div style={{ color: '#e24b4a', fontSize: 12, marginBottom: 8 }}>Username atau password salah.</div>}
        <button onClick={handleLogin} style={{ width: '100%', background: '#315B35', color: '#fff', border: 'none', borderRadius: 8, padding: '10px', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>
          Masuk
        </button>
      </div>
    </div>
  )

  if (loading) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f4f7f4', fontFamily: 'system-ui' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 40, marginBottom: 12 }}>🐟</div>
        <div style={{ color: '#315B35', fontWeight: 600 }}>Memuat data HarmaFarm...</div>
      </div>
    </div>
  )

  const showToast = (msg: string) => { setToast(msg); setTimeout(() => setToast(''), 3500) }

  const handleSave = async () => {
    setSaving(true)
    const ok = await saveSiteData(data)
    setSaving(false)
    showToast(ok ? '✅ Tersimpan! Perubahan langsung live di website.' : '❌ Gagal menyimpan. Coba lagi.')
  }

  const setContact = (k: keyof SiteData['contact'], v: string) =>
    setData(d => ({ ...d, contact: { ...d.contact, [k]: v } }))
  const setHero = (k: keyof SiteData['hero'], v: string) =>
    setData(d => ({ ...d, hero: { ...d.hero, [k]: v } }))
  const setBrand = (k: keyof SiteData['brand'], v: string) =>
    setData(d => ({ ...d, brand: { ...d.brand, [k]: v } }))
  const setDigital = (k: keyof SiteData['digital'], v: string) =>
    setData(d => ({ ...d, digital: { ...d.digital, [k]: v } }))

  const updateProduct = (i: number, patch: Partial<SiteData['products'][0]>) =>
    setData(d => ({ ...d, products: d.products.map((x, idx) => idx === i ? { ...x, ...patch } : x) }))

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'hero', label: 'Hero Section', icon: '🏠' },
    { id: 'produk', label: 'Produk', icon: '🐟' },
    { id: 'kontak', label: 'Kontak', icon: '📞' },
    { id: 'digital', label: 'Sosmed & Digital', icon: '📱' },
    { id: 'faq', label: 'FAQ', icon: '❓' },
    { id: 'testimoni', label: 'Testimoni', icon: '⭐' },
  ]

  return (
    <div style={s.page}>
      <div style={s.header}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={s.badge}>ADMIN</span>
          <span style={{ fontWeight: 700, fontSize: 16 }}>LOSGo by HarmaFarm</span>
          <span style={s.liveDot}>● Live</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button onClick={() => setAuth(false)} style={{ background: 'none', border: '1px solid #d4e8d4', borderRadius: 8, padding: '7px 14px', fontSize: 13, cursor: 'pointer', color: '#555' }}>
            🚪 Keluar
          </button>
          <button onClick={handleSave} disabled={saving} style={s.saveBtn(saving)}>
            {saving ? '⏳ Menyimpan...' : '💾 Simpan & Publish'}
          </button>
        </div>
      </div>

      <div style={s.layout}>
        <div style={s.sidebar}>
          <div style={s.sidebarNav}>
            {tabs.map(t => (
              <button key={t.id} onClick={() => setTab(t.id)} style={s.navBtn(tab === t.id)}>
                <span>{t.icon}</span>{t.label}
              </button>
            ))}
          </div>
          <div style={s.tip}>
            <strong>💡 Tips:</strong> Setelah edit, klik <strong>Simpan & Publish</strong> — perubahan langsung tampil di website dalam hitungan detik.
          </div>
        </div>

        <div style={s.main}>

          {tab === 'hero' && (
            <div>
              <div style={s.h2}>🏠 Hero Section</div>
              <Field label="Badge (teks kecil di atas headline)">
                <input style={s.input} value={data.hero.badge} onChange={e => setHero('badge', e.target.value)} />
              </Field>
              <Field label="Headline Utama">
                <textarea style={s.textarea} value={data.hero.headline} onChange={e => setHero('headline', e.target.value)} />
              </Field>
              <Field label="Subheadline / Deskripsi">
                <textarea style={{ ...s.textarea, minHeight: 100 }} value={data.hero.subheadline} onChange={e => setHero('subheadline', e.target.value)} />
              </Field>
              <div style={s.grid2}>
                <Field label="Tombol CTA 1 (Katalog)">
                  <input style={s.input} value={data.hero.cta1} onChange={e => setHero('cta1', e.target.value)} />
                </Field>
                <Field label="Tombol CTA 2 (Pesan)">
                  <input style={s.input} value={data.hero.cta2} onChange={e => setHero('cta2', e.target.value)} />
                </Field>
              </div>
              <hr style={s.divider} />
              <div style={s.h2}>🏪 Brand & Loading Screen</div>
              <div style={s.grid2}>
                <Field label="Nama Brand">
                  <input style={s.input} value={data.brand.name} onChange={e => setBrand('name', e.target.value)} />
                </Field>
                <Field label="Tagline (di loading screen)">
                  <input style={s.input} value={data.brand.tagline} onChange={e => setBrand('tagline', e.target.value)} />
                </Field>
              </div>
              <Field label="Deskripsi Brand">
                <textarea style={s.textarea} value={data.brand.description} onChange={e => setBrand('description', e.target.value)} />
              </Field>
              <Field label="Jam Operasional (muncul di kontak)">
                <input style={s.input} value={data.brand.operationalHours} onChange={e => setBrand('operationalHours', e.target.value)} />
              </Field>
            </div>
          )}

          {tab === 'produk' && (
            <div>
              <div style={s.h2}>🐟 Daftar Produk</div>
              <div style={{ background: '#fffbe6', border: '1px solid #ffe58f', borderRadius: 8, padding: '10px 14px', marginBottom: 16, fontSize: 12, color: '#7c5800' }}>
                📸 <strong>Upload gambar produk:</strong> Klik area foto di tiap produk. Ukuran maks 500KB — kompres dulu di <a href="https://squoosh.app" target="_blank" rel="noreferrer" style={{ color: '#315B35' }}>squoosh.app</a> jika perlu.
              </div>
              {data.products.map((p, i) => (
                <div key={p.id} style={s.card}>
                  <div style={s.cardHeader}>
                    <strong style={{ fontSize: 14 }}>{p.name || `Produk ${i + 1}`}</strong>
                    <button style={s.delBtn} onClick={() => setData(d => ({ ...d, products: d.products.filter((_, idx) => idx !== i) }))}>🗑 Hapus</button>
                  </div>

                  {/* Foto Produk */}
                  <Field label="Foto Produk">
                    <ImageUploader
                      value={p.image || ''}
                      onChange={base64 => updateProduct(i, { image: base64 })}
                    />
                  </Field>

                  <div style={s.grid2}>
                    <Field label="Nama Produk">
                      <input style={s.input} value={p.name} onChange={e => updateProduct(i, { name: e.target.value })} />
                    </Field>
                    <Field label="Badge (TERLARIS, FAVORIT, dll)">
                      <input style={s.input} value={p.badge} onChange={e => updateProduct(i, { badge: e.target.value })} />
                    </Field>
                    <Field label="Porsi / Berat">
                      <input style={s.input} value={p.portion} onChange={e => updateProduct(i, { portion: e.target.value })} />
                    </Field>
                    <Field label="Harga (misal: Rp 35.000)">
                      <input style={s.input} value={p.price || ''} onChange={e => updateProduct(i, { price: e.target.value })} placeholder="Rp 35.000" />
                    </Field>
                  </div>
                  <Field label="Tag (Lele, Nila, dll)">
                    <input style={s.input} value={p.tags.join(', ')} onChange={e => updateProduct(i, { tags: e.target.value.split(',').map(t => t.trim()) })} />
                  </Field>
                  <Field label="Deskripsi Produk">
                    <textarea style={s.textarea} value={p.description} onChange={e => updateProduct(i, { description: e.target.value })} />
                  </Field>
                  <Field label="Fitur / Keunggulan (pisah dengan koma)">
                    <input style={s.input} value={p.features.join(', ')} onChange={e => updateProduct(i, { features: e.target.value.split(',').map(f => f.trim()) })} />
                  </Field>
                </div>
              ))}
              <button style={s.addBtn} onClick={() => setData(d => ({ ...d, products: [...d.products, { id: `prod-${Date.now()}`, name: 'Produk Baru', badge: 'BARU', portion: '200 gr', price: '', description: '', features: [], tags: [], image: '' }] }))}>
                + Tambah Produk Baru
              </button>
            </div>
          )}

          {tab === 'kontak' && (
            <div>
              <div style={s.h2}>📞 Kontak HarmaFarm</div>
              <div style={s.grid2}>
                <Field label="Nomor Telepon (tampil di website)">
                  <input style={s.input} value={data.contact.phone} onChange={e => setContact('phone', e.target.value)} />
                </Field>
                <Field label="Email">
                  <input style={s.input} value={data.contact.email} onChange={e => setContact('email', e.target.value)} />
                </Field>
              </div>
              <Field label="Link WhatsApp (wa.me/...)">
                <input style={s.input} value={data.contact.whatsappUrl} onChange={e => setContact('whatsappUrl', e.target.value)} />
              </Field>
              <Field label="Alamat Lengkap">
                <textarea style={s.textarea} value={data.contact.address} onChange={e => setContact('address', e.target.value)} />
              </Field>
              <Field label="Link Instagram">
                <input style={s.input} value={data.contact.instagram} onChange={e => setContact('instagram', e.target.value)} />
              </Field>
              <Field label="Link TikTok">
                <input style={s.input} value={data.contact.tiktok} onChange={e => setContact('tiktok', e.target.value)} />
              </Field>
              <Field label="Link Embed Google Maps">
                <input style={s.input} value={data.contact.mapsEmbed} onChange={e => setContact('mapsEmbed', e.target.value)} />
              </Field>
            </div>
          )}

          {tab === 'digital' && (
            <div>
              <div style={s.h2}>📱 Sosmed & Digital Presence</div>
              <div style={{ background: '#e8f5ee', borderRadius: 8, padding: 12, marginBottom: 20, fontSize: 13, color: '#315B35' }}>
                Bagian ini mengatur statistik yang muncul di section "Digital Presence" website kamu.
              </div>
              <div style={s.grid2}>
                <Field label="Instagram — Username">
                  <input style={s.input} value={data.digital.ig_handle} onChange={e => setDigital('ig_handle', e.target.value)} />
                </Field>
                <Field label="Instagram — Statistik">
                  <input style={s.input} value={data.digital.ig_metric} onChange={e => setDigital('ig_metric', e.target.value)} />
                </Field>
              </div>
              <Field label="Instagram — Link URL">
                <input style={s.input} value={data.digital.ig_url} onChange={e => setDigital('ig_url', e.target.value)} />
              </Field>
              <hr style={s.divider} />
              <div style={s.grid2}>
                <Field label="TikTok — Username">
                  <input style={s.input} value={data.digital.tt_handle} onChange={e => setDigital('tt_handle', e.target.value)} />
                </Field>
                <Field label="TikTok — Statistik">
                  <input style={s.input} value={data.digital.tt_metric} onChange={e => setDigital('tt_metric', e.target.value)} />
                </Field>
              </div>
              <Field label="TikTok — Link URL">
                <input style={s.input} value={data.digital.tt_url} onChange={e => setDigital('tt_url', e.target.value)} />
              </Field>
              <hr style={s.divider} />
              <Field label="Google Maps — Rating & Ulasan">
                <input style={s.input} value={data.digital.gmaps_metric} onChange={e => setDigital('gmaps_metric', e.target.value)} />
              </Field>
              <Field label="Google Maps — Link URL">
                <input style={s.input} value={data.digital.gmaps_url} onChange={e => setDigital('gmaps_url', e.target.value)} />
              </Field>
            </div>
          )}

          {tab === 'faq' && (
            <div>
              <div style={s.h2}>❓ FAQ (Pertanyaan Umum)</div>
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

          {tab === 'testimoni' && (
            <div>
              <div style={s.h2}>⭐ Testimoni Pelanggan</div>
              {data.testimonials.map((t, i) => (
                <div key={t.id} style={s.card}>
                  <div style={s.cardHeader}>
                    <strong style={{ fontSize: 13 }}>{t.name || `Testimoni ${i + 1}`}</strong>
                    <button style={s.delBtn} onClick={() => setData(d => ({ ...d, testimonials: d.testimonials.filter((_, idx) => idx !== i) }))}>🗑 Hapus</button>
                  </div>
                  <div style={s.grid2}>
                    <Field label="Nama">
                      <input style={s.input} value={t.name} onChange={e => setData(d => ({ ...d, testimonials: d.testimonials.map((x, idx) => idx === i ? { ...x, name: e.target.value } : x) }))} />
                    </Field>
                    <Field label="Jabatan / Asal">
                      <input style={s.input} value={t.role} onChange={e => setData(d => ({ ...d, testimonials: d.testimonials.map((x, idx) => idx === i ? { ...x, role: e.target.value } : x) }))} />
                    </Field>
                  </div>
                  <Field label="Rating (1-5)">
                    <select style={s.input} value={t.rating} onChange={e => setData(d => ({ ...d, testimonials: d.testimonials.map((x, idx) => idx === i ? { ...x, rating: Number(e.target.value) } : x) }))}>
                      {[1,2,3,4,5].map(n => <option key={n} value={n}>{n} bintang</option>)}
                    </select>
                  </Field>
                  <Field label="Isi Testimoni">
                    <textarea style={{ ...s.textarea, minHeight: 90 }} value={t.text} onChange={e => setData(d => ({ ...d, testimonials: d.testimonials.map((x, idx) => idx === i ? { ...x, text: e.target.value } : x) }))} />
                  </Field>
                </div>
              ))}
              <button style={s.addBtn} onClick={() => setData(d => ({ ...d, testimonials: [...d.testimonials, { id: `testi-${Date.now()}`, name: '', role: '', rating: 5, text: '' }] }))}>
                + Tambah Testimoni Baru
              </button>
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
