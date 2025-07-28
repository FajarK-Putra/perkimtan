import { Metadata } from 'next'
import { galeriKegiatan } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Galeri | Dinas Perkimtan Sumbar',
  description: 'Galeri foto dan video kegiatan Dinas Perumahan, Kawasan Permukiman dan Pertanahan Sumatera Barat',
}

export default function GaleriPage() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // Extended gallery data
  const allGallery = [
    ...galeriKegiatan.map(item => ({ ...item, tipe: "foto" })),
    {
      id: 4,
      judul: "Launching Program FLPP 2024",
      deskripsi: "Peluncuran program Fasilitas Likuiditas Pembiayaan Perumahan tahun 2024 di Kantor Gubernur Sumbar",
      kategori: "Perumahan",
      tanggal: "2024-01-15",
      tipe: "foto"
    },
    {
      id: 5,
      judul: "Peninjauan Kawasan Kumuh Padang",
      deskripsi: "Kegiatan peninjauan langsung kawasan kumuh di Kota Padang untuk program penataan",
      kategori: "Kawasan Permukiman",
      tanggal: "2024-01-12",
      tipe: "foto"
    },
    {
      id: 6,
      judul: "Sertifikasi Tanah Massal",
      deskripsi: "Ceremonial penyerahan sertifikat tanah hasil program sertifikasi tanah massal",
      kategori: "Pertanahan",
      tanggal: "2024-01-10",
      tipe: "foto"
    },
    {
      id: 7,
      judul: "Video Profil Dinas Perkimtan 2024",
      deskripsi: "Video profil terbaru Dinas Perkimtan Sumbar yang menampilkan program dan pencapaian",
      kategori: "Profil",
      tanggal: "2024-01-05",
      tipe: "video"
    },
    {
      id: 8,
      judul: "Workshop Manajemen Proyek",
      deskripsi: "Workshop manajemen proyek untuk meningkatkan kualitas pelaksanaan program dinas",
      kategori: "Pelatihan",
      tanggal: "2024-01-03",
      tipe: "foto"
    },
    {
      id: 9,
      judul: "Kunjungan Kerja ke BPN Pusat",
      deskripsi: "Dokumentasi kunjungan kerja pimpinan dinas ke Badan Pertanahan Nasional pusat di Jakarta",
      kategori: "Kunjungan",
      tanggal: "2023-12-28",
      tipe: "foto"
    }
  ]

  const categories = ['Semua', 'Perumahan', 'Kawasan Permukiman', 'Pertanahan', 'Profil', 'Pelatihan', 'Kunjungan']

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Perumahan':
        return 'bg-blue-500 text-white'
      case 'Kawasan Permukiman':
        return 'bg-green-500 text-white'
      case 'Pertanahan':
        return 'bg-orange-500 text-white'
      case 'Profil':
        return 'bg-purple-500 text-white'
      case 'Pelatihan':
        return 'bg-indigo-500 text-white'
      case 'Kunjungan':
        return 'bg-pink-500 text-white'
      default:
        return 'bg-gray-500 text-white'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Galeri Kegiatan
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Dokumentasi foto dan video kegiatan Dinas Perumahan, 
              Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-colors duration-200 text-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {allGallery.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
              {/* Image/Video Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                  {item.tipe === 'video' ? (
                    <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  )}
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`${getCategoryColor(item.kategori)} text-xs font-semibold px-3 py-1 rounded-full`}>
                    {item.kategori}
                  </span>
                </div>

                {/* Play Button for Videos */}
                {item.tipe === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">
                  {formatDate(item.tanggal)}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.judul}
                </h3>
                
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {item.deskripsi}
                </p>
                
                <div className="flex items-center justify-between">
                  <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Lihat Detail
                  </button>

                  <button className="text-gray-400 hover:text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Statistik Galeri
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
              <p className="text-gray-600">Total Foto</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">25+</div>
              <p className="text-gray-600">Total Video</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <p className="text-gray-600">Kegiatan</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">12</div>
              <p className="text-gray-600">Kategori</p>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2">
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
    </div>
  )
}
