import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/organisms/Navbar'
import Footer from '@/components/organisms/Footer'

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
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
