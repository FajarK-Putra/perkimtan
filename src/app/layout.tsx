import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/organisms/Navbar'
import Footer from '@/components/organisms/Footer'
import ScrollToTop from '@/components/atoms/ScrollToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dinas Perkimtan Sumbar - Dinas Perumahan, Kawasan Permukiman dan Pertanahan',
  description: 'Website resmi Dinas Perumahan, Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat',
  keywords: 'dinas perkimtan, perumahan, kawasan permukiman, pertanahan, sumatera barat, pemerintah daerah',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        {/* Portal root for mobile menu */}
        <div id="mobile-menu-portal" style={{ zIndex: 99999 }}></div>
      </body>
    </html>
  )
}
