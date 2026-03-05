'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/atoms/AnimatedSection'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

function BeritaContent() {
  const searchParams = useSearchParams()
  const initialSearch = searchParams.get('q') || ''
  
  const [beritaList, setBeritaList] = useState<any[]>([])
  const [categories, setCategories] = useState<string[]>(['Semua'])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('Semua')
  const [searchQuery, setSearchQuery] = useState(initialSearch)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const itemsPerPage = 6

  // Sync searchQuery with URL param if it changes externally
  useEffect(() => {
    const q = searchParams.get('q')
    if (q !== null && q !== searchQuery) {
      setSearchQuery(q)
      setCurrentPage(1)
    }
  }, [searchParams])

  useEffect(() => {
    const fetchBerita = async () => {
      setLoading(true)
      try {
        const params = new URLSearchParams({
          q: searchQuery,
          cat: activeCategory,
          page: currentPage.toString(),
          limit: itemsPerPage.toString()
        })
        console.log('[Frontend] Fetching with:', params.toString())
        const response = await fetch(`/api/berita?${params}`)
        const result = await response.json()
        console.log('[Frontend] Result:', result)
        
        setBeritaList(result.data || [])
        setTotalPages(result.totalPages || 1)
        if (result.categories) {
          setCategories(result.categories)
        }
      } catch (error) {
        console.error('[Frontend] Fetch error:', error)
      } finally {
        setLoading(false)
      }
    }
    
    const timer = setTimeout(() => {
      fetchBerita()
    }, 400) // Increased debounce slightly

    return () => clearTimeout(timer)
  }, [searchQuery, activeCategory, currentPage])
  
  const currentBerita = beritaList
    
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  const handleCategoryChange = (category: string) => {
    if (category !== activeCategory) {
      setActiveCategory(category)
      setCurrentPage(1)
    }
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1)
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return ''
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
        return 'bg-gradient-to-r from-blue-600 to-indigo-600 shadow-blue-200'
      case 'Kawasan Permukiman':
        return 'bg-gradient-to-r from-emerald-500 to-teal-600 shadow-emerald-200'
      case 'Pertanahan':
        return 'bg-gradient-to-r from-orange-500 to-amber-600 shadow-orange-200'
      default:
        // Generate a consistent color based on the category string
        const colors = [
          'from-purple-500 to-indigo-600 shadow-purple-200',
          'from-rose-500 to-pink-600 shadow-rose-200',
          'from-cyan-500 to-blue-600 shadow-cyan-200',
          'from-amber-500 to-yellow-600 shadow-amber-200'
        ]
        let hash = 0
        for (let i = 0; i < category.length; i++) {
          hash = category.charCodeAt(i) + ((hash << 5) - hash)
        }
        const index = Math.abs(hash) % colors.length
        return `bg-gradient-to-r ${colors[index]}`
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white relative overflow-hidden">
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
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Search Bar */}
            <div className="relative group">
              <input
                type="text"
                placeholder="Cari berita..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full px-6 py-4 bg-white rounded-2xl shadow-lg border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 pl-14 text-gray-700 font-medium"
              />
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Filter Categories */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg
                    ${activeCategory === cat 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-white text-blue-600 hover:bg-blue-50'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* News Grid */}
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mb-4"></div>
              <p className="text-gray-600">Memuat berita...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentBerita.map((berita) => (
                <article key={berita.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                  <div className="relative h-48 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-12 h-12 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className={`${getCategoryColor(berita.kategori)} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 tracking-wider uppercase`}>
                        {berita.kategori}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/95 backdrop-blur-sm text-gray-800 text-sm font-medium px-3 py-1.5 rounded-full shadow-lg">
                        {formatDate(berita.tanggal)}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

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
              {beritaList.length === 0 && (
                <div className="col-span-full text-center py-12">
                  <div className="text-gray-500 text-lg">
                    Tidak ada berita yang ditemukan
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Pagination */}
          {!loading && totalPages > 1 && (
            <div className="flex flex-wrap justify-center gap-2">
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
              
              {(() => {
                const pages = [];
                const delta = 2; // Number of pages to show before and after current page
                
                for (let i = 1; i <= totalPages; i++) {
                  if (
                    i === 1 || 
                    i === totalPages || 
                    (i >= currentPage - delta && i <= currentPage + delta)
                  ) {
                    pages.push(i);
                  } else if (
                    i === currentPage - delta - 1 || 
                    i === currentPage + delta + 1
                  ) {
                    pages.push('...');
                  }
                }
                
                return pages.map((page, index) => (
                  typeof page === 'number' ? (
                    <button
                      key={index}
                      onClick={() => handlePageChange(page)}
                      className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg
                        ${currentPage === page
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-blue-600 hover:bg-blue-50'}`}
                    >
                      {page}
                    </button>
                  ) : (
                    <span key={index} className="px-2 py-2 text-gray-400">
                      {page}
                    </span>
                  )
                ));
              })()}
              
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

export default function BeritaPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    }>
      <BeritaContent />
    </Suspense>
  )
}