import { ImageResponse } from 'next/og'
import { siteConfig } from '@/config/site'
import { PREMIUM_PERIODS, STARS_BASE } from '@/config/products'
import { formatUzs } from '@/lib/format'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = `${siteConfig.name} — Telegram Premium va Stars O'zbekistonda`

const STAR_PATH =
  'M180 30 L218.4 130.8 L327.6 134.4 L240.6 198 L264.4 290.4 L180 240 L95.6 290.4 L119.4 198 L32.4 134.4 L141.6 130.8 Z'

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
            <svg width="120" height="120" viewBox="0 0 360 360" fill="none">
              <path d={STAR_PATH} stroke="#0d9488" strokeWidth="22" strokeLinejoin="round" strokeLinecap="round" />
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
              <span style={{ color: '#0d9488' }}>uz</span>
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
              <span style={{ color: '#0d9488' }}>O&apos;zbekistonda</span>
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
              color: '#0d9488',
            }}
          >
            <div
              style={{
                background: '#0d9488',
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
            <span style={{ color: '#5b6b67', fontSize: 26, display: 'flex' }}>UzCard • Humo • Click</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
