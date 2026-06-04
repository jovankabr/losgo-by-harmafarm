import { useState, useEffect } from 'react'
import { getSiteData, SiteData } from '../githubConfig'

let cachedData: SiteData | null = null
let loadingPromise: Promise<SiteData | null> | null = null

export function useSiteData() {
  const [data, setData] = useState<SiteData | null>(cachedData)
  const [loading, setLoading] = useState(!cachedData)

  useEffect(() => {
    if (cachedData) {
      setData(cachedData)
      setLoading(false)
      return
    }

    if (!loadingPromise) {
      loadingPromise = getSiteData()
    }

    loadingPromise.then((d) => {
      if (d) {
        cachedData = d
        setData(d)
      }

      setLoading(false)
    })
  }, [])

  return { data, loading }
}
