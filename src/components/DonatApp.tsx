'use client'

/**
 * Donat do'koni (uzgets.uz/donat) — StarsJoy bilan bir xil bosqichma-bosqich UX:
 * O'yin → Paket → Akkaunt → Tasdiqlash → To'lov → Holat.
 * Mantiq va ko'rinish framework'siz (src/lib/donat-ui), bu komponent faqat ularni sahifaga ulaydi.
 */
import { useEffect, useRef } from 'react'
import type { Locale } from '@/i18n/config'
import { DONAT_API as DONAT_API_PROD, type DonatCatalog } from '@/lib/donat'
import { mountDonat, type Catalog } from '@/lib/donat-ui/core'
import { v1 } from '@/lib/donat-ui/v1'
import '@/lib/donat-ui/donat-ui.css'

// Lokal dev'da backend'ga /donat-api proksi orqali (src/app/donat-api), production'da to'g'ridan-to'g'ri
const DONAT_API = process.env.NODE_ENV === 'development' ? '/donat-api' : DONAT_API_PROD

export function DonatApp({ lang, catalog, initialGame }: { lang: Locale; catalog: DonatCatalog | null; initialGame?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const mounted = useRef(false)

  useEffect(() => {
    if (!ref.current || mounted.current) return
    mounted.current = true
    mountDonat(ref.current, {
      api: DONAT_API,
      lang,
      catalog: catalog as Catalog | null,
      initialGame,
      renderers: { v1 },
      variant: 'v1',
      support: 'https://t.me/uzgets_jbot',
    })
  }, [lang, catalog, initialGame])

  return (
    <div ref={ref} className="dn-root">
      <div style={{ textAlign: 'center', padding: '60px 0', color: '#4a5b58' }}>{lang === 'ru' ? 'Загрузка…' : 'Yuklanmoqda…'}</div>
    </div>
  )
}
