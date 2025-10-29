import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Berita | Dinas Perkimtan Sumbar',
  description: 'Berita terkini dari Dinas Perumahan, Kawasan Permukiman dan Pertanahan Sumatera Barat',
}

export default function BeritaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}