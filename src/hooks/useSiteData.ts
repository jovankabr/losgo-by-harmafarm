import { useState, useEffect } from 'react'
import { getSiteData, SiteData } from '../githubConfig'

let cachedData: SiteData | null = null

export function useSiteData() {
  const [data, setData] = useState<SiteData | null>(cachedData)
  const [loading, setLoading] = useState(!cachedData)

  useEffect(() => {
    if (cachedData) return
    getSiteData().then(d => {
      if (d) { cachedData = d; setData(d) }
      setLoading(false)
    })
  }, [])

  return { data, loading }
}
