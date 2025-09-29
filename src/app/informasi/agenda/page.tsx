import { Metadata } from 'next'
import AnimatedSection from '@/components/atoms/AnimatedSection'

export const metadata: Metadata = {
  title: 'Agenda | Dinas Perkimtan Sumbar',
  description: 'Agenda dan jadwal kegiatan Dinas Perumahan, Kawasan Permukiman dan Pertanahan Sumatera Barat',
}

export default function AgendaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 sm:py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Agenda <span className="text-yellow-300">Kegiatan</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Jadwal dan agenda kegiatan Dinas Perkimtan Sumbar
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <AnimatedSection>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Halaman Agenda sedang dalam pengembangan
            </h2>
            <p className="text-gray-600">
              Konten agenda akan segera ditambahkan. Silakan kembali lagi nanti.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}