const JSONBIN_BIN_ID = '6a210ac6f5f4af5e29b61efa'
const JSONBIN_API_KEY = '$2a$10$Vz43GIfa6uUmEzqMKb.RLudjrIeZYblUPHsuN6lUyu45N.ry7KD42'
const JSONBIN_URL = `https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`

export type SiteData = {
  contact: {
    phone: string
    whatsappUrl: string
    email: string
    address: string
    instagram: string
    tiktok: string
    mapsEmbed: string
  }
  hero: {
    badge: string
    headline: string
    subheadline: string
    cta1: string
    cta2: string
  }
  brand: {
    name: string
    tagline: string
    description: string
    operationalHours: string
  }
  digital: {
    ig_handle: string
    ig_metric: string
    ig_url: string
    tt_handle: string
    tt_metric: string
    tt_url: string
    gmaps_metric: string
    gmaps_url: string
  }
  products: {
    id: string
    name: string
    badge: string
    portion: string
    description: string
    features: string[]
    tags: string[]
  }[]
  faqs: {
    id: string
    question: string
    answer: string
  }[]
  testimonials: {
    id: string
    name: string
    role: string
    rating: number
    text: string
  }[]
}

export async function getSiteData(): Promise<SiteData | null> {
  try {
    const res = await fetch(JSONBIN_URL + '/latest', {
      headers: { 'X-Master-Key': JSONBIN_API_KEY }
    })
    if (!res.ok) return null
    const json = await res.json()
    return json.record as SiteData
  } catch {
    return null
  }
}

export async function saveSiteData(data: SiteData): Promise<boolean> {
  try {
    const res = await fetch(JSONBIN_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': JSONBIN_API_KEY
      },
      body: JSON.stringify(data)
    })
    return res.ok
  } catch {
    return false
  }
}
