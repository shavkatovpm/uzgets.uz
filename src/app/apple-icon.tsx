import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

const STAR_PATH =
  'M90 16 L111.5 71.7 L172 73.6 L124 110 L137.4 161.5 L90 132 L42.6 161.5 L56 110 L8 73.6 L68.5 71.7 Z'

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
          background: '#ecf6f3',
        }}
      >
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
          <path
            d={STAR_PATH}
            stroke="#0d9488"
            strokeWidth="14"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size },
  )
}
