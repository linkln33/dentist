import { ImageResponse } from 'next/og'

export const alt = 'EyeCare Clinic - Professional Eye Care Services'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '60px',
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 'bold',
            marginBottom: 20,
            textAlign: 'center',
          }}
        >
          👁️ EyeCare Clinic
        </div>
        <div
          style={{
            fontSize: 32,
            textAlign: 'center',
            opacity: 0.9,
            maxWidth: 800,
          }}
        >
          Professional Eye Care Services
        </div>
        <div
          style={{
            fontSize: 24,
            textAlign: 'center',
            opacity: 0.8,
            marginTop: 20,
            maxWidth: 900,
          }}
        >
          LASIK • Cataract Surgery • Pediatric Care • Comprehensive Eye Exams
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
