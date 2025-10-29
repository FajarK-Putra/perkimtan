'use client'

import { beritaTerkini } from '@/lib/data'
import Link from 'next/link'
import AnimatedSection from '@/components/atoms/AnimatedSection'
import { useState } from 'react'

export default function BeritaPage() {
  const [activeCategory, setActiveCategory] = useState('Semua')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6 // Jumlah berita per halaman
  
  const filteredBerita = activeCategory === 'Semua' 
    ? beritaTerkini 
    : beritaTerkini.filter(berita => berita.kategori === activeCategory)
    
  // Hitung total halaman
  const totalPages = Math.ceil(filteredBerita.length / itemsPerPage)
  
  // Get berita untuk halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentBerita = filteredBerita.slice(indexOfFirstItem, indexOfLastItem)
  
  // Fungsi untuk mengubah halaman
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    // Scroll ke atas halaman dengan animasi smooth
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
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-900/30"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-16 left-16 w-48 h-48 bg-white rounded-full blur-3xl opacity-10 animate-pulse"></div>
            <div className="absolute bottom-12 right-16 w-60 h-60 bg-blue-200 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 sm:py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 shadow-2xl">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Berita <span className="text-blue-200">Terkini</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Informasi dan berita terbaru seputar kegiatan Dinas Perkimtan Sumbar
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
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-white text-blue-600 hover:bg-blue-50'}`}
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

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentBerita.map((berita) => (
              <article key={berita.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-12 h-12 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`${getCategoryColor(berita.kategori)} text-white text-sm font-semibold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110`}>
                      {berita.kategori}
                    </span>
                  </div>

                  {/* Date Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/95 backdrop-blur-sm text-gray-800 text-sm font-medium px-3 py-1.5 rounded-full shadow-lg">
                      {formatDate(berita.tanggal)}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-[240px]">
                  <div className="flex-grow">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      <Link href={`/informasi/berita/${berita.id}`} className="hover:underline">
                        {berita.judul}
                      </Link>
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {berita.ringkasan}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex justify-end">
                      <Link 
                        href={`/informasi/berita/${berita.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group"
                      >
                        Baca Selengkapnya
                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
            {filteredBerita.length === 0 && (
              <div className="col-span-full text-center py-12">
                <div className="text-gray-500 text-lg">
                  Tidak ada berita dalam kategori ini
                </div>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2">
              <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-blue-100
                  ${currentPage === 1 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-white text-blue-600 hover:bg-blue-50'}`}
              >
                Previous
              </button>
              
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg
                    ${currentPage === index + 1
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-blue-600 hover:bg-blue-50'}`}
                >
                  {index + 1}
                </button>
              ))}
              
              <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-blue-100
                  ${currentPage === totalPages 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-white text-blue-600 hover:bg-blue-50'}`}
              >
                Next
              </button>
            </div>
          )}
        </AnimatedSection>
      </div>
    </div>
  )
}