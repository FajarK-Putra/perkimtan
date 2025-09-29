import { Metadata } from 'next'
import AnimatedSection from '@/components/atoms/AnimatedSection'

export const metadata: Metadata = {
  title: 'Infografis | Dinas Perkimtan Sumbar',
  description: 'Infografis dan visualisasi data Dinas Perumahan, Kawasan Permukiman dan Pertanahan Sumatera Barat',
}

export default function InfografisPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 sm:py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Info<span className="text-yellow-300">grafis</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Visualisasi data dan informasi dalam bentuk infografis
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <AnimatedSection>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Halaman Infografis sedang dalam pengembangan
            </h2>
            <p className="text-gray-600">
              Konten infografis akan segera ditambahkan. Silakan kembali lagi nanti.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}