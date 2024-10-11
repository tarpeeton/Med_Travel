// hooks/useYandexMap.ts

import { useEffect, useState } from 'react'

const useYandexMap = () => {
  const [ymaps, setYmaps] = useState<any>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (window.ymaps) {
      setYmaps(window.ymaps)
      return
    }

    const script = document.createElement('script')
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=YOUR_API_KEY&lang=ru_RU`
    script.async = true
    script.id = 'yandex-map-script'

    script.onload = () => {
      if (window.ymaps) {
        window.ymaps.ready(() => {
          setYmaps(window.ymaps)
        })
      }
    }

    script.onerror = () => {
      console.error('Failed to load Yandex Maps API')
    }

    document.body.appendChild(script)

    return () => {
      // Optionally remove the script when the component unmounts
      // document.body.removeChild(script)
    }
  }, [])

  return ymaps
}

export default useYandexMap
