import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://qqrrhruvejboyccuvrs.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxcnJocnV2ZWpib3ljY3V2dnJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA0Nzc5NDMsImV4cCI6MjA5NjA1Mzk0M30.WbZyOkn2yyKIFWbJbqUftC47VFLv6d17DvFjdTkMeD4'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

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
  const { data, error } = await supabase
    .from('site_config')
    .select('data')
    .eq('id', 'main')
    .single()
  if (error || !data) return null
  return data.data as SiteData
}

export async function saveSiteData(siteData: SiteData): Promise<boolean> {
  const { error } = await supabase
    .from('site_config')
    .update({ data: siteData, updated_at: new Date().toISOString() })
    .eq('id', 'main')
  return !error
}
