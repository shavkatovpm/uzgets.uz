import { ImageResponse } from 'next/og'
import { siteConfig } from '@/config/site'
import { PREMIUM_PERIODS, STARS_BASE } from '@/config/products'
import { formatUzs } from '@/lib/format'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = `${siteConfig.name} — Telegram Premium va Stars O'zbekistonda`

// Same star geometry as src/app/icon.svg / src/components/Logo.tsx (96-unit canvas).
const STAR_PATH =
  'M48 14 L56.2 36.7 L80.3 37.5 L61.3 52.3 L68 75.5 L48 62 L28 75.5 L34.7 52.3 L15.7 37.5 L39.8 36.7 Z'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#ecf6f3',
          padding: 64,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
            border: '4px solid #99d8cf',
            borderRadius: 32,
            background: '#ffffff',
            padding: 56,
            position: 'relative',
            boxShadow: '12px 12px 0 #c8eae3',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <svg width="120" height="120" viewBox="0 0 96 96">
              <rect width="96" height="96" rx="20" fill="#0a6d65" />
              <path d={STAR_PATH} fill="#ecf6f3" />
            </svg>
            <div
              style={{
                fontSize: 76,
                fontWeight: 900,
                letterSpacing: -3,
                color: '#0f1b18',
                display: 'flex',
              }}
            >
              <span style={{ color: '#0a6d65' }}>uz</span>
              <span>gets</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div
              style={{
                fontSize: 64,
                fontWeight: 800,
                letterSpacing: -2,
                color: '#0f1b18',
                lineHeight: 1.05,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span>Telegram Premium va Stars</span>
              <span style={{ color: '#0a6d65' }}>O&apos;zbekistonda</span>
            </div>
            <div
              style={{
                fontSize: 30,
                color: '#5b6b67',
                marginTop: 20,
                display: 'flex',
              }}
            >
              Premium {formatUzs(PREMIUM_PERIODS[0].priceUzs)}dan • Stars {STARS_BASE.amount} ⭐ {formatUzs(STARS_BASE.priceUzs)} • {siteConfig.bot}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              fontSize: 28,
              fontWeight: 700,
              color: '#0a6d65',
            }}
          >
            <div
              style={{
                background: '#0a6d65',
                color: 'white',
                padding: '14px 28px',
                borderRadius: 14,
                fontSize: 28,
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {siteConfig.domain}
            </div>
            <span style={{ color: '#5b6b67', fontSize: 26, display: 'flex' }}>UzCard • Humo • Click • Payme</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
