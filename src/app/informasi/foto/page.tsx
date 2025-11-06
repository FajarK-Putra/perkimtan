'use client'

import AnimatedSection from '@/components/atoms/AnimatedSection'
import { useState } from 'react'

// Data dummy galeri foto
const galeriDummy = [
  {
    id: 1,
    judul: 'Peresmian Rumah Subsidi Tahap 1',
    deskripsi: 'Peresmian pembangunan rumah subsidi untuk masyarakat berpenghasilan rendah',
    tanggal: '2024-12-15',
    kategori: 'Perumahan',
    thumbnail: 'https://placehold.co/600x400/3b82f6/ffffff?text=Perumahan+1'
  },
  {
    id: 2,
    judul: 'Pembangunan Infrastruktur Permukiman',
    deskripsi: 'Pembangunan jalan dan drainase di kawasan permukiman baru',
    tanggal: '2024-12-10',
    kategori: 'Kawasan Permukiman',
    thumbnail: 'https://placehold.co/600x400/10b981/ffffff?text=Permukiman+1'
  },
  {
    id: 3,
    judul: 'Sertifikasi Tanah Masyarakat',
    deskripsi: 'Program sertifikasi tanah untuk masyarakat di daerah terpencil',
    tanggal: '2024-12-08',
    kategori: 'Pertanahan',
    thumbnail: 'https://placehold.co/600x400/f59e0b/ffffff?text=Pertanahan+1'
  },
  {
    id: 4,
    judul: 'Rapat Koordinasi Pembangunan',
    deskripsi: 'Rapat koordinasi dengan stakeholder terkait pembangunan perumahan',
    tanggal: '2024-12-05',
    kategori: 'Perumahan',
    thumbnail: 'https://placehold.co/600x400/3b82f6/ffffff?text=Perumahan+2'
  },
  {
    id: 5,
    judul: 'Penataan Kawasan Kumuh',
    deskripsi: 'Kegiatan penataan dan revitalisasi kawasan kumuh',
    tanggal: '2024-12-03',
    kategori: 'Kawasan Permukiman',
    thumbnail: 'https://placehold.co/600x400/10b981/ffffff?text=Permukiman+2'
  },
  {
    id: 6,
    judul: 'Sosialisasi Program Pertanahan',
    deskripsi: 'Sosialisasi program pertanahan kepada masyarakat',
    tanggal: '2024-12-01',
    kategori: 'Pertanahan',
    thumbnail: 'https://placehold.co/600x400/f59e0b/ffffff?text=Pertanahan+2'
  },
  {
    id: 7,
    judul: 'Kunjungan Lapangan Perumahan',
    deskripsi: 'Kunjungan lapangan ke lokasi pembangunan perumahan baru',
    tanggal: '2024-11-28',
    kategori: 'Perumahan',
    thumbnail: 'https://placehold.co/600x400/3b82f6/ffffff?text=Perumahan+3'
  },
  {
    id: 8,
    judul: 'Pembangunan Fasilitas Umum',
    deskripsi: 'Pembangunan fasilitas umum di kawasan permukiman',
    tanggal: '2024-11-25',
    kategori: 'Kawasan Permukiman',
    thumbnail: 'https://placehold.co/600x400/10b981/ffffff?text=Permukiman+3'
  },
  {
    id: 9,
    judul: 'Penyelesaian Sengketa Tanah',
    deskripsi: 'Mediasi penyelesaian sengketa tanah antar warga',
    tanggal: '2024-11-20',
    kategori: 'Pertanahan',
    thumbnail: 'https://placehold.co/600x400/f59e0b/ffffff?text=Pertanahan+3'
  },
  {
    id: 10,
    judul: 'Monitoring Proyek Perumahan',
    deskripsi: 'Monitoring progres pembangunan proyek perumahan rakyat',
    tanggal: '2024-11-18',
    kategori: 'Perumahan',
    thumbnail: 'https://placehold.co/600x400/3b82f6/ffffff?text=Perumahan+4'
  },
  {
    id: 11,
    judul: 'Program Air Bersih Permukiman',
    deskripsi: 'Implementasi program air bersih untuk kawasan permukiman',
    tanggal: '2024-11-15',
    kategori: 'Kawasan Permukiman',
    thumbnail: 'https://placehold.co/600x400/10b981/ffffff?text=Permukiman+4'
  },
  {
    id: 12,
    judul: 'Pemetaan Wilayah Pertanahan',
    deskripsi: 'Kegiatan pemetaan dan survei wilayah pertanahan',
    tanggal: '2024-11-12',
    kategori: 'Pertanahan',
    thumbnail: 'https://placehold.co/600x400/f59e0b/ffffff?text=Pertanahan+4'
  },
]

export default function FotoPage() {
  const [activeCategory, setActiveCategory] = useState('Semua')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedFoto, setSelectedFoto] = useState<typeof galeriDummy[0] | null>(null)
  const itemsPerPage = 9 // Jumlah foto per halaman
  
  const filteredGaleri = activeCategory === 'Semua' 
    ? galeriDummy 
    : galeriDummy.filter(foto => foto.kategori === activeCategory)
    
  // Hitung total halaman
  const totalPages = Math.ceil(filteredGaleri.length / itemsPerPage)
  
  // Get foto untuk halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentGaleri = filteredGaleri.slice(indexOfFirstItem, indexOfLastItem)
  
  // Fungsi untuk mengubah halaman
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  // Reset ke halaman 1 ketika kategori berubah
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setCurrentPage(1)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Perumahan':
        return 'bg-blue-500'
      case 'Kawasan Permukiman':
        return 'bg-green-500'
      case 'Pertanahan':
        return 'bg-orange-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-16 left-16 w-48 h-48 bg-white rounded-full blur-3xl opacity-10 animate-pulse"></div>
            <div className="absolute bottom-12 right-16 w-60 h-60 bg-purple-200 rounded-full blur-3xl opacity-10 animate-pulse [animation-delay:1s]"></div>
            <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-10 animate-pulse [animation-delay:2s]"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 sm:py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 shadow-2xl">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Galeri <span className="text-yellow-300">Foto</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Dokumentasi visual kegiatan dan program Dinas Perkimtan Sumbar
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <AnimatedSection className="space-y-12">
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button 
              onClick={() => handleCategoryChange('Semua')}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg
                ${activeCategory === 'Semua' 
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                  : 'bg-white text-indigo-600 hover:bg-indigo-50'}`}
            >
              Semua
            </button>
            <button 
              onClick={() => handleCategoryChange('Perumahan')}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg
                ${activeCategory === 'Perumahan' 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-white text-blue-600 hover:bg-blue-50'}`}
            >
              Perumahan
            </button>
            <button 
              onClick={() => handleCategoryChange('Kawasan Permukiman')}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg
                ${activeCategory === 'Kawasan Permukiman' 
                  ? 'bg-green-600 text-white hover:bg-green-700' 
                  : 'bg-white text-green-600 hover:bg-green-50'}`}
            >
              Kawasan Permukiman
            </button>
            <button 
              onClick={() => handleCategoryChange('Pertanahan')}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg
                ${activeCategory === 'Pertanahan' 
                  ? 'bg-orange-600 text-white hover:bg-orange-700' 
                  : 'bg-white text-orange-600 hover:bg-orange-50'}`}
            >
              Pertanahan
            </button>
          </div>

          {/* Photo Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentGaleri.map((foto) => (
              <div 
                key={foto.id} 
                onClick={() => setSelectedFoto(foto)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={foto.thumbnail}
                    alt={foto.judul}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`${getCategoryColor(foto.kategori)} text-white text-sm font-semibold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm`}>
                      {foto.kategori}
                    </span>
                  </div>

                  {/* Date Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/95 backdrop-blur-sm text-gray-800 text-sm font-medium px-3 py-1.5 rounded-full shadow-lg">
                      {formatDate(foto.tanggal)}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white w-full">
                      <div className="flex items-center justify-center">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                    {foto.judul}
                  </h2>
                  
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {foto.deskripsi}
                  </p>
                </div>
              </div>
            ))}
            {filteredGaleri.length === 0 && (
              <div className="col-span-full text-center py-12">
                <div className="text-gray-500 text-lg">
                  Tidak ada foto dalam kategori ini
                </div>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-indigo-100
                  ${currentPage === 1 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-white text-indigo-600 hover:bg-indigo-50'}`}
              >
                Previous
              </button>
              
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg
                    ${currentPage === index + 1
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-indigo-600 hover:bg-indigo-50'}`}
                >
                  {index + 1}
                </button>
              ))}
              
              <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-indigo-100
                  ${currentPage === totalPages 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-white text-indigo-600 hover:bg-indigo-50'}`}
              >
                Next
              </button>
            </div>
          )}
        </AnimatedSection>
      </div>

      {/* Modal/Lightbox */}
      {selectedFoto && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedFoto(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedFoto(null)}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative w-full h-[500px] bg-gray-100 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedFoto.thumbnail}
                alt={selectedFoto.judul}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Content */}
            <div className="p-6 bg-gradient-to-b from-white to-gray-50">
              <div className="flex items-center gap-3 mb-4">
                <span className={`${getCategoryColor(selectedFoto.kategori)} text-white text-sm font-semibold px-4 py-1.5 rounded-full`}>
                  {selectedFoto.kategori}
                </span>
                <span className="text-gray-500 text-sm">
                  {formatDate(selectedFoto.tanggal)}
                </span>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {selectedFoto.judul}
              </h2>
              
              <p className="text-gray-700 leading-relaxed">
                {selectedFoto.deskripsi}
              </p>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    const currentIndex = currentGaleri.findIndex(f => f.id === selectedFoto.id)
                    if (currentIndex > 0) {
                      setSelectedFoto(currentGaleri[currentIndex - 1])
                    }
                  }}
                  disabled={currentGaleri.findIndex(f => f.id === selectedFoto.id) === 0}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300
                    ${currentGaleri.findIndex(f => f.id === selectedFoto.id) === 0
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous
                </button>
                
                <span className="text-sm text-gray-500">
                  {currentGaleri.findIndex(f => f.id === selectedFoto.id) + 1} / {currentGaleri.length}
                </span>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    const currentIndex = currentGaleri.findIndex(f => f.id === selectedFoto.id)
                    if (currentIndex < currentGaleri.length - 1) {
                      setSelectedFoto(currentGaleri[currentIndex + 1])
                    }
                  }}
                  disabled={currentGaleri.findIndex(f => f.id === selectedFoto.id) === currentGaleri.length - 1}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300
                    ${currentGaleri.findIndex(f => f.id === selectedFoto.id) === currentGaleri.length - 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
                >
                  Next
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}