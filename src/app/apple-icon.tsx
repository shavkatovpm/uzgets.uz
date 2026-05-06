import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

const STAR_PATH =
  'M90 26.25 L105.43 68.76 L150.63 70.30 L114.97 98.11 L127.47 141.57 L90 116.25 L52.53 141.57 L65.03 98.11 L29.37 70.30 L74.57 68.76 Z'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a6d65',
        }}
      >
        <svg width="180" height="180" viewBox="0 0 180 180">
          <path d={STAR_PATH} fill="#ecf6f3" />
        </svg>
      </div>
    ),
    { ...size },
  )
}
