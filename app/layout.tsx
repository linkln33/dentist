import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import ErrorBoundary from '@/components/error-boundary'
import { StructuredData } from '@/lib/structured-data'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://smilecaredental.netlify.app'),
  title: 'SmileCare Dental - Professional Dental Services | Cleanings, Fillings, Crowns & Implants',
  description: 'Expert dental services including cleanings, fillings, crowns, implants, and pediatric dentistry. Board-certified dentists with 15+ years experience. Book your appointment today!',
  keywords: 'dentist, dental care, teeth cleaning, dental fillings, crowns, implants, pediatric dentistry, oral health, dental clinic',
  authors: [{ name: 'Dr. Michael Chen - SmileCare Dental' }],
  creator: 'SmileCare Dental',
  publisher: 'SmileCare Dental',
  openGraph: {
    title: 'SmileCare Dental - Professional Dental Services',
    description: 'Expert dental care with advanced technology. Cleanings, fillings, crowns, implants, and pediatric dentistry. Book your appointment today!',
    type: 'website',
    locale: 'en_US',
    url: 'https://smilecaredental.netlify.app',
    siteName: 'SmileCare Dental',
    images: [
      {
        url: 'https://smilecaredental.netlify.app/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'SmileCare Dental - Professional Dental Services',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmileCare Dental - Professional Dental Services',
    description: 'Expert dental care with advanced technology. Cleanings, fillings, crowns, implants, and pediatric dentistry.',
    images: ['https://smilecaredental.netlify.app/opengraph-image'],
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
