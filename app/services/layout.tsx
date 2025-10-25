import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eye Care Services - Comprehensive Treatment Options',
  description: 'Explore our comprehensive eye care services including LASIK surgery, cataract treatment, glaucoma care, and pediatric eye care.',
  keywords: 'eye care services, LASIK surgery, cataract surgery, glaucoma treatment, pediatric eye care, eye exam, vision correction',
  openGraph: {
    title: 'Eye Care Services - Comprehensive Treatment Options',
    description: 'Explore our comprehensive eye care services including LASIK surgery, cataract treatment, glaucoma care, and pediatric eye care.',
    type: 'website',
    url: 'https://krisi-eyes.netlify.app/services',
    images: [
      {
        url: 'https://krisi-eyes.netlify.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Eye Care Services',
      },
    ],
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
