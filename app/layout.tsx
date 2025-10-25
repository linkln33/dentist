import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { FloatingWhatsAppSimple } from '@/components/floating-whatsapp-simple'
import ErrorBoundary from '@/components/error-boundary'
import { StructuredData } from '@/lib/structured-data'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://krisi-eyes.netlify.app'),
  title: 'EyeCare Clinic - Professional Eye Care Services | LASIK, Cataract Surgery & Eye Exams',
  description: 'Expert eye care services including LASIK surgery, cataract treatment, comprehensive eye exams, and pediatric care. Board-certified ophthalmologists with 15+ years experience. Book your appointment today!',
  keywords: 'eye doctor, ophthalmologist, eye exam, LASIK surgery, cataract treatment, glaucoma care, pediatric eye care, vision correction, eye clinic',
  authors: [{ name: 'Dr. Sarah Johnson - EyeCare Clinic' }],
  creator: 'EyeCare Clinic',
  publisher: 'EyeCare Clinic',
  openGraph: {
    title: 'EyeCare Clinic - Professional Eye Care Services',
    description: 'Expert eye care with advanced technology. LASIK surgery, cataract treatment, comprehensive exams, and pediatric care. Book your appointment today!',
    type: 'website',
    locale: 'en_US',
    url: 'https://krisi-eyes.netlify.app',
    siteName: 'EyeCare Clinic',
    images: [
      {
        url: 'https://krisi-eyes.netlify.app/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'EyeCare Clinic - Professional Eye Care Services',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EyeCare Clinic - Professional Eye Care Services',
    description: 'Expert eye care with advanced technology. LASIK surgery, cataract treatment, comprehensive exams, and pediatric care.',
    images: ['https://krisi-eyes.netlify.app/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'telegram:channel': '@eyecareclinic',
    'telegram:site': 'https://krisi-eyes.netlify.app',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
            <body className={inter.className}>
              <StructuredData />
              <ErrorBoundary>
                <Header />
                <main className="min-h-screen">
                  {children}
                </main>
                <Footer />
                <FloatingWhatsApp />
              </ErrorBoundary>
            </body>
    </html>
  )
}
