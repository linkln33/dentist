import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EyeCare Clinic - Comprehensive Eye Care Services',
  description: 'Professional eye care services including comprehensive exams, LASIK surgery, cataract treatment, and pediatric care. Book your appointment today.',
  keywords: 'eye doctor, ophthalmologist, eye exam, LASIK, cataract surgery, glaucoma treatment, pediatric eye care',
  authors: [{ name: 'EyeCare Clinic' }],
  openGraph: {
    title: 'EyeCare Clinic - Comprehensive Eye Care Services',
    description: 'Professional eye care services with the latest technology and personalized treatment plans.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
