import { Metadata } from 'next'
import AnimatedSection from '@/components/atoms/AnimatedSection'
import Link from 'next/link'
import { pengumumanList } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Pengumuman | Dinas Perkimtan Sumbar',
  description: 'Pengumuman resmi dari Dinas Perumahan, Kawasan Permukiman dan Pertanahan Sumatera Barat',
}

export default function PengumumanPage() {
  // Sort pengumuman by date (newest first)
  const sortedPengumuman = [...pengumumanList].sort((a, b) => 
    new Date(b.tanggal).getTime() - new Date(a.tanggal).getTime()
  )

  const formatTanggal = (tanggal: string) => {
    const date = new Date(tanggal)
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  const getTipeBadgeColor = (tipe: string) => {
    switch (tipe) {
      case 'Penting':
        return 'bg-red-100 text-red-700 border-red-300'
      case 'Info':
        return 'bg-blue-100 text-blue-700 border-blue-300'
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300'
    }
  }

  const getKategoriBadgeColor = (kategori: string) => {
    switch (kategori) {
      case 'Kepegawaian':
        return 'bg-purple-50 text-purple-700'
      case 'Program':
        return 'bg-green-50 text-green-700'
      case 'Regulasi':
        return 'bg-orange-50 text-orange-700'
      case 'Pertanahan':
        return 'bg-yellow-50 text-yellow-700'
      case 'Teknis':
        return 'bg-cyan-50 text-cyan-700'
      case 'Umum':
        return 'bg-gray-50 text-gray-700'
      default:
        return 'bg-gray-50 text-gray-700'
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Pengumuman Resmi
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Informasi dan pengumuman terkini dari Dinas Perumahan, Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pengumuman List Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Filter Buttons */}
            <AnimatedSection animation="fadeInUp">
              <div className="mb-8 flex flex-wrap gap-2">
                <button className="px-4 py-2 rounded-full bg-blue-600 text-white font-medium">
                  Semua
                </button>
                <button className="px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-blue-50 font-medium border border-gray-200">
                  Penting
                </button>
                <button className="px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-blue-50 font-medium border border-gray-200">
                  Kepegawaian
                </button>
                <button className="px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-blue-50 font-medium border border-gray-200">
                  Program
                </button>
                <button className="px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-blue-50 font-medium border border-gray-200">
                  Pertanahan
                </button>
              </div>
            </AnimatedSection>

            {/* Pengumuman Cards */}
            <div className="space-y-6">
              {sortedPengumuman.map((item) => (
                <AnimatedSection 
                  key={item.id} 
                  animation="fadeInUp"
                >
                  <Link 
                    href={`/pengumuman/${item.id}`}
                    className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-300 group"
                  >
                    <div className="p-6">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getTipeBadgeColor(item.tipe)}`}>
                              {item.tipe}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getKategoriBadgeColor(item.kategori)}`}>
                              {item.kategori}
                            </span>
                          </div>
                          
                          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                            {item.judul}
                          </h3>
                          
                          <p className="text-gray-600 text-sm leading-relaxed mb-3">
                            {item.ringkasan}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>{formatTanggal(item.tanggal)}</span>
                          </div>
                          
                          {item.lampiran && (
                            <div className="flex items-center gap-2 text-blue-600">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                              </svg>
                              <span className="text-xs font-medium">Ada Lampiran</span>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center gap-2 text-blue-600 font-medium text-sm group-hover:gap-3 transition-all">
                          <span>Baca Selengkapnya</span>
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp">
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Butuh Informasi Lebih Lanjut?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Untuk informasi lebih detail mengenai pengumuman atau pertanyaan lainnya, 
                    silakan hubungi kami melalui:
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span><strong>Telepon:</strong> (0751) 7051234</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span><strong>Email:</strong> info@perkimtan.sumbarprov.go.id</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
