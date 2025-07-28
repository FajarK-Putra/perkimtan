import { Metadata } from 'next'

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
      lampiran: "pengumuman_rekrutmen_2024.pdf"
    },
    {
      id: 2,
      judul: "Jadwal Pemeliharaan Website Resmi Dinas Perkimtan",
      tanggal: "2024-01-18",
      kategori: "Teknis",
      tipe: "Info",
      lampiran: null
    },
    {
      id: 3,
      judul: "Pembukaan Pendaftaran Program BSPS Tahap II",
      tanggal: "2024-01-15",
      kategori: "Program",
      tipe: "Penting",
      lampiran: "syarat_bsps_tahap2.pdf"
    },
    {
      id: 4,
      judul: "Sosialisasi Peraturan Baru Tentang IMB",
      tanggal: "2024-01-12",
      kategori: "Regulasi",
      tipe: "Info",
      lampiran: "materi_sosialisasi_imb.pdf"
    },
    {
      id: 5,
      judul: "Libur Nasional dan Pelayanan Dinas",
      tanggal: "2024-01-08",
      kategori: "Operasional",
      tipe: "Info",
      lampiran: null
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
        return 'bg-red-100 text-red-800'
      case 'Info':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Pengumuman
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Pengumuman resmi dan informasi penting dari Dinas Perumahan, 
              Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {['Semua', 'Kepegawaian', 'Program', 'Regulasi', 'Operasional', 'Teknis'].map((kategori) => (
              <button
                key={kategori}
                className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-colors duration-200 text-sm"
              >
                {kategori}
              </button>
            ))}
          </div>
        </div>

        {/* Pengumuman List */}
        <div className="space-y-6">
          {pengumuman.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTipeColor(item.tipe)}`}>
                      {item.tipe}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      {item.kategori}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.judul}
                  </h3>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {formatDate(item.tanggal)}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-4">
                  <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Baca Detail
                  </button>

                  {item.lampiran && (
                    <button className="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-sm">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download Lampiran
                    </button>
                  )}
                </div>

                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2 mt-12">
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex space-x-1">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`px-4 py-2 rounded-lg ${
                  page === 1 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-50 border border-gray-300'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Berlangganan Notifikasi Pengumuman
          </h3>
          <p className="text-gray-600 mb-8">
            Dapatkan notifikasi pengumuman terbaru langsung di email Anda
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
              />
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-r-lg transition-colors">
                Berlangganan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
