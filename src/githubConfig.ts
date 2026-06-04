const GITHUB_TOKEN = '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'
const GITHUB_OWNER = 'jovankabr'
const GITHUB_REPO = 'losgo-by-harmafarm'
const CONFIG_PATH = 'public/siteConfig.json'

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
    const res = await fetch(`/siteConfig.json?t=${Date.now()}`)
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}

export async function saveSiteData(data: SiteData): Promise<boolean> {
  try {
    // Get current file SHA (required by GitHub API to update)
    const getRes = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${CONFIG_PATH}`,
      { headers: { Authorization: `token ${GITHUB_TOKEN}`, Accept: 'application/vnd.github.v3+json' } }
    )
    const fileInfo = await getRes.json()
    const sha = fileInfo.sha

    // Update file
    const content = btoa(unescape(encodeURIComponent(JSON.stringify(data, null, 2))))
    const updateRes = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${CONFIG_PATH}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: 'Update site config via admin dashboard',
          content,
          sha,
        }),
      }
    )
    return updateRes.ok
  } catch {
    return false
  }
}
