import { Metadata } from 'next'
import Link from 'next/link'
import { beritaTerkini } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Berita & Informasi | Dinas Perkimtan Sumbar',
  description: 'Berita dan informasi terkini dari Dinas Perumahan, Kawasan Permukiman dan Pertanahan Sumatera Barat',
}

export default function BeritaPage() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Perumahan':
        return 'bg-blue-500 text-white'
      case 'Kawasan Permukiman':
        return 'bg-green-500 text-white'
      case 'Pertanahan':
        return 'bg-orange-500 text-white'
      default:
        return 'bg-gray-500 text-white'
    }
  }

  // Extended news data for demonstration
  const allNews = [
    ...beritaTerkini,
    {
      id: 4,
      judul: "Pembangunan Rusunawa Tahap II di Padang Dimulai",
      ringkasan: "Dinas Perkimtan memulai pembangunan Rumah Susun Sederhana tahap kedua di Kota Padang untuk memenuhi kebutuhan hunian MBR.",
      kategori: "Perumahan",
      tanggal: "2024-01-08",
      penulis: "Tim Humas"
    },
    {
      id: 5,
      judul: "Workshop Penanganan Kawasan Kumuh Se-Sumbar",
      ringkasan: "Dinas menggelar workshop penanganan kawasan kumuh yang dihadiri perwakilan dari seluruh kabupaten/kota di Sumatera Barat.",
      kategori: "Kawasan Permukiman",
      tanggal: "2024-01-05",
      penulis: "Bidang Kawasan"
    },
    {
      id: 6,
      judul: "Kerjasama Sertifikasi Tanah dengan BPN",
      ringkasan: "Penandatanganan MoU antara Dinas Perkimtan Sumbar dengan BPN untuk percepatan program sertifikasi tanah.",
      kategori: "Pertanahan",
      tanggal: "2024-01-03",
      penulis: "Bidang Pertanahan"
    },
    {
      id: 7,
      judul: "Monitoring Program BSPS di Kabupaten Padang Pariaman",
      ringkasan: "Tim monitoring melakukan kunjungan lapangan untuk memantau progress pelaksanaan program BSPS di Kabupaten Padang Pariaman.",
      kategori: "Perumahan",
      tanggal: "2024-01-01",
      penulis: "Tim Monitoring"
    },
    {
      id: 8,
      judul: "Pelatihan Penggunaan Aplikasi SIPTARU untuk Developer",
      ringkasan: "Dinas menggelar pelatihan penggunaan aplikasi Sistem Informasi Penataan Ruang (SIPTARU) untuk para developer dan konsultan.",
      kategori: "Kawasan Permukiman",
      tanggal: "2023-12-28",
      penulis: "Bidang Penataan Ruang"
    },
    {
      id: 9,
      judul: "Pemberian Bantuan Stimulan untuk Korban Bencana",
      ringkasan: "Dinas menyalurkan bantuan stimulan perumahan khusus untuk korban bencana alam di beberapa daerah di Sumatera Barat.",
      kategori: "Perumahan",
      tanggal: "2023-12-25",
      penulis: "Tim Tanggap Darurat"
    }
  ]

  const categories = ['Semua', 'Perumahan', 'Kawasan Permukiman', 'Pertanahan']

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Berita & Informasi
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Dapatkan update terbaru tentang program dan kegiatan Dinas Perumahan, 
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
                className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-colors duration-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {allNews.map((berita) => (
            <article key={berita.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
              {/* Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`${getCategoryColor(berita.kategori)} text-xs font-semibold px-3 py-1 rounded-full`}>
                    {berita.kategori}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">
                  {formatDate(berita.tanggal)} • {berita.penulis}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  <Link href={`/berita/${berita.id}`}>
                    {berita.judul}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {berita.ringkasan}
                </p>
                
                <Link 
                  href={`/berita/${berita.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  Baca Selengkapnya
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
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
