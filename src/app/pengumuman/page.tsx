import { Metadata } from 'next'
import AnimatedSection from '@/components/atoms/AnimatedSection'

export const metadata: Metadata = {
  title: 'Pengumuman | Dinas Perkimtan Sumbar',
  description: 'Pengumuman resmi dari Dinas Perumahan, Kawasan Permukiman dan Pertanahan Sumatera Barat',
}

export default function PengumumanPage() {
  const pengumuman = [
    {
      id: 1,
      judul: "Pengumuman Rekrutmen Tenaga Kontrak Tahun 2024",
      tanggal: "2024-01-20",
      kategori: "Kepegawaian",
      tipe: "Penting",
      lampiran: "pengumuman_rekrutmen_2024.pdf",
      ringkasan: "Pembukaan lowongan pekerjaan untuk posisi tenaga kontrak di berbagai bidang dengan kualifikasi yang telah ditentukan."
    },
    {
      id: 2,
      judul: "Jadwal Pemeliharaan Website Resmi Dinas Perkimtan",
      tanggal: "2024-01-18",
      kategori: "Teknis",
      tipe: "Info",
      lampiran: null,
      ringkasan: "Informasi mengenai jadwal maintenance website yang akan mempengaruhi aksesibilitas layanan online."
    },
    {
      id: 3,
      judul: "Pembukaan Pendaftaran Program BSPS Tahap II",
      tanggal: "2024-01-15",
      kategori: "Program",
      tipe: "Penting",
      lampiran: "syarat_bsps_tahap2.pdf",
      ringkasan: "Program bantuan stimulan perumahan swadaya tahap kedua telah dibuka untuk masyarakat yang memenuhi kriteria."
    },
    {
      id: 4,
      judul: "Sosialisasi Peraturan Baru Tentang IMB",
      tanggal: "2024-01-12",
      kategori: "Regulasi",
      tipe: "Info",
      lampiran: "materi_sosialisasi_imb.pdf",
      ringkasan: "Penjelasan mengenai peraturan terbaru terkait Izin Mendirikan Bangunan dan prosedur pengurusannya."
    },
    {
      id: 5,
      judul: "Libur Nasional dan Pelayanan Dinas",
      tanggal: "2024-01-08",
      kategori: "Operasional",
      tipe: "Info",
      lampiran: null,
      ringkasan: "Informasi jadwal libur nasional dan pengaturan pelayanan dinas selama periode tersebut."
    }
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getTipeColor = (tipe: string) => {
    switch (tipe) {
      case 'Penting':
        return 'bg-red-100 text-red-800 border border-red-200'
      case 'Info':
        return 'bg-blue-100 text-blue-800 border border-blue-200'
      default:
        return 'bg-gray-100 text-gray-800 border border-gray-200'
    }
  }

  const getKategoriColor = (kategori: string) => {
    switch (kategori) {
      case 'Kepegawaian':
        return 'bg-purple-100 text-purple-800 border border-purple-200'
      case 'Program':
        return 'bg-green-100 text-green-800 border border-green-200'
      case 'Regulasi':
        return 'bg-orange-100 text-orange-800 border border-orange-200'
      case 'Operasional':
        return 'bg-indigo-100 text-indigo-800 border border-indigo-200'
      case 'Teknis':
        return 'bg-yellow-100 text-yellow-800 border border-yellow-200'
      default:
        return 'bg-gray-100 text-gray-800 border border-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 sm:py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Pengumuman <span className="text-yellow-300">Resmi</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Informasi dan pengumuman penting dari Dinas Perumahan, Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Filter Section */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      Filter Pengumuman
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Pilih kategori untuk menyaring pengumuman sesuai kebutuhan
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {['Semua', 'Kepegawaian', 'Program', 'Regulasi', 'Operasional', 'Teknis'].map((kategori) => (
                    <button
                      key={kategori}
                      className="px-6 py-3 rounded-xl border border-gray-200 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all duration-150 ease-out font-medium"
                    >
                      {kategori}
                    </button>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Pengumuman List */}
            <div className="space-y-6">
              {pengumuman.map((item) => (
                <AnimatedSection key={item.id}>
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-all duration-300">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${getTipeColor(item.tipe)}`}>
                            {item.tipe}
                          </span>
                          <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${getKategoriColor(item.kategori)}`}>
                            {item.kategori}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {item.judul}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {item.ringkasan}
                        </p>
                        
                        <div className="flex items-center text-sm text-gray-500 mb-6">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {formatDate(item.tanggal)}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <div className="flex items-center space-x-4">
                        <button className="inline-flex items-center px-6 py-3 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold rounded-xl transition-all duration-150 ease-out">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          Baca Detail
                        </button>

                        {item.lampiran && (
                          <button className="inline-flex items-center px-6 py-3 bg-green-50 hover:bg-green-100 text-green-700 font-semibold rounded-xl transition-all duration-150 ease-out">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download Lampiran
                          </button>
                        )}
                      </div>

                      <button className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-all duration-150 ease-out">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Pagination */}
            <AnimatedSection>
              <div className="flex justify-center items-center space-x-2 mt-12">
                <button className="px-4 py-3 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150 ease-out">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="flex space-x-2">
                  {[1, 2, 3].map((page) => (
                    <button
                      key={page}
                      className={`px-4 py-3 rounded-xl font-medium transition-all duration-150 ease-out ${
                        page === 1 
                          ? 'bg-blue-600 text-white shadow-sm' 
                          : 'text-gray-600 hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                
                <button className="px-4 py-3 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-all duration-150 ease-out">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Quick Stats */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Statistik Pengumuman</h4>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Pengumuman</span>
                    <span className="font-bold text-gray-900">25</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Bulan Ini</span>
                    <span className="font-bold text-blue-600">8</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Kategori Aktif</span>
                    <span className="font-bold text-green-600">6</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Category Filter */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Kategori Pengumuman</h4>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'Kepegawaian', count: 8, color: 'bg-purple-50 text-purple-800 border border-purple-200 hover:bg-purple-100' },
                    { name: 'Program', count: 6, color: 'bg-green-50 text-green-800 border border-green-200 hover:bg-green-100' },
                    { name: 'Regulasi', count: 5, color: 'bg-orange-50 text-orange-800 border border-orange-200 hover:bg-orange-100' },
                    { name: 'Operasional', count: 4, color: 'bg-indigo-50 text-indigo-800 border border-indigo-200 hover:bg-indigo-100' },
                    { name: 'Teknis', count: 2, color: 'bg-yellow-50 text-yellow-800 border border-yellow-200 hover:bg-yellow-100' }
                  ].map((category, index) => (
                    <div key={index} className={`p-4 rounded-lg text-sm font-semibold transition-all duration-150 ease-out cursor-pointer ${category.color} flex justify-between items-center`}>
                      <span>{category.name}</span>
                      <span className="text-xs opacity-75">{category.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Subscribe Section */}
            <AnimatedSection>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Berlangganan Notifikasi
                  </h4>
                  <p className="text-gray-600 text-sm mb-6">
                    Dapatkan pengumuman terbaru langsung di email Anda
                  </p>
                  
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Masukkan email Anda"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-400 text-gray-800 placeholder-gray-500 transition-all duration-150 ease-out"
                    />
                    <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-150 ease-out transform active:scale-95">
                      Berlangganan
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  )
}