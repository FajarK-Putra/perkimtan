'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/atoms/AnimatedSection'
import { galeriKegiatan } from '@/lib/data'

export default function GaleriPage() {
  const [selectedCategory, setSelectedCategory] = useState('Semua')
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid')
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

  const filteredGallery = selectedCategory === 'Semua' 
    ? allGallery 
    : allGallery.filter(item => item.kategori === selectedCategory)

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
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          * {
            outline: none !important;
          }
          
          input:focus,
          button:focus,
          textarea:focus,
          select:focus,
          div:focus {
            outline: none !important;
            box-shadow: none !important;
          }
          
          input:focus-visible,
          button:focus-visible,
          textarea:focus-visible {
            outline: none !important;
          }
        `
      }} />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <AnimatedSection>
          <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute top-40 right-20 w-24 h-24 bg-blue-300/20 rounded-full blur-lg"></div>
              <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-400/15 rounded-full blur-2xl"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Galeri <span className="text-blue-200">Kegiatan</span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                  Dokumentasi foto dan video kegiatan Dinas Perumahan, 
                  Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                    <div className="text-2xl font-bold">150+</div>
                    <div className="text-sm text-blue-200">Total Foto</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                    <div className="text-2xl font-bold">25+</div>
                    <div className="text-sm text-blue-200">Video</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-sm text-blue-200">Kegiatan</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter and View Controls */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-12">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  {/* Category Filter */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter Kategori</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`px-4 py-2 rounded-full border transition-all duration-200 text-sm font-medium ${
                            selectedCategory === category
                              ? 'bg-blue-600 border-blue-600 text-white shadow-lg scale-105'
                              : 'border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* View Type Toggle */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Tampilan</h3>
                    <div className="bg-gray-100 rounded-lg p-1 flex">
                      <button
                        onClick={() => setViewType('grid')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                          viewType === 'grid'
                            ? 'bg-white text-blue-600 shadow-sm'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                        Grid
                      </button>
                      <button
                        onClick={() => setViewType('list')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                          viewType === 'list'
                            ? 'bg-white text-blue-600 shadow-sm'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                        </svg>
                        List
                      </button>
                    </div>
                  </div>
                </div>

                {/* Results Count */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-gray-600">
                    Menampilkan <span className="font-semibold text-gray-900">{filteredGallery.length}</span> item
                    {selectedCategory !== 'Semua' && (
                      <span> untuk kategori <span className="font-semibold text-blue-600">{selectedCategory}</span></span>
                    )}
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Gallery Grid/List */}
            {viewType === 'grid' ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredGallery.map((item, index) => (
                  <AnimatedSection key={item.id}>
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden 
                                   hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-full flex flex-col">
                      {/* Image/Video Placeholder - Smaller aspect ratio */}
                      <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden cursor-pointer flex-shrink-0">
                        <div className="absolute inset-0 flex items-center justify-center">
                          {item.tipe === 'video' ? (
                            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-2">
                              <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                              </svg>
                            </div>
                          ) : (
                            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-2">
                              <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                          )}
                        </div>
                        
                        {/* Category Badge - Smaller */}
                        <div className="absolute top-2 right-2">
                          <span className={`${getCategoryColor(item.kategori)} text-xs font-medium px-2 py-0.5 rounded-full shadow-sm`}>
                            {item.kategori}
                          </span>
                        </div>

                        {/* Play Button for Videos - Smaller */}
                        {item.tipe === 'video' && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-200 shadow-lg">
                              <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                              </svg>
                            </div>
                          </div>
                        )}

                        {/* Type Badge - Smaller */}
                        <div className="absolute top-2 left-2">
                          <span className="bg-black/70 text-white text-xs font-medium px-1.5 py-0.5 rounded-full backdrop-blur-sm">
                            {item.tipe === 'video' ? '📹' : '📷'}
                          </span>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Content - More compact */}
                      <div className="p-3 flex flex-col flex-grow">
                        <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                          <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {formatDate(item.tanggal)}
                        </div>
                        
                        <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors flex-grow-0">
                          {item.judul}
                        </h3>
                        
                        <p className="text-gray-600 text-xs line-clamp-2 mb-3 leading-relaxed flex-grow">
                          {item.deskripsi}
                        </p>
                        
                        <div className="flex items-center justify-between mt-auto">
                          <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-xs 
                                           hover:bg-blue-50 px-2 py-1 rounded-md transition-all duration-200">
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            Lihat
                          </button>

                          <div className="flex gap-0.5">
                            <button className="text-gray-400 hover:text-blue-600 p-1 rounded-md hover:bg-blue-50 transition-all duration-200">
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                              </svg>
                            </button>
                            <button className="text-gray-400 hover:text-red-600 p-1 rounded-md hover:bg-red-50 transition-all duration-200">
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {filteredGallery.map((item, index) => (
                  <AnimatedSection key={item.id}>
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden 
                                   hover:shadow-md transition-all duration-300 group">
                      <div className="flex flex-col sm:flex-row">
                        {/* Image/Video Section - Much smaller */}
                        <div className="sm:w-48 flex-shrink-0">
                          <div className="aspect-video sm:aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden cursor-pointer h-full">
                            <div className="absolute inset-0 flex items-center justify-center">
                              {item.tipe === 'video' ? (
                                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                  </svg>
                                </div>
                              ) : (
                                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                  </svg>
                                </div>
                              )}
                            </div>

                            {/* Badges - Much smaller */}
                            <div className="absolute top-1 right-1">
                              <span className={`${getCategoryColor(item.kategori)} text-xs font-medium px-1.5 py-0.5 rounded-full shadow-sm`}>
                                {item.kategori}
                              </span>
                            </div>

                            <div className="absolute top-1 left-1">
                              <span className="bg-black/70 text-white text-xs font-medium px-1 py-0.5 rounded-full backdrop-blur-sm">
                                {item.tipe === 'video' ? '📹' : '📷'}
                              </span>
                            </div>

                            {item.tipe === 'video' && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-200 shadow-lg">
                                  <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z"/>
                                  </svg>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Content Section - More compact */}
                        <div className="flex-1 p-3">
                          <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {formatDate(item.tanggal)}
                          </div>
                          
                          <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-1">
                            {item.judul}
                          </h3>
                          
                          <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-2">
                            {item.deskripsi}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm 
                                             hover:bg-blue-50 px-3 py-1 rounded-md transition-all duration-200">
                              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              Lihat
                            </button>

                            <div className="flex gap-0.5">
                              <button className="text-gray-400 hover:text-blue-600 p-1 rounded-md hover:bg-blue-50 transition-all duration-200">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                </svg>
                              </button>
                              <button className="text-gray-400 hover:text-red-600 p-1 rounded-md hover:bg-red-50 transition-all duration-200">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Statistics Section */}
        <AnimatedSection>
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Statistik Galeri
                  </h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Ringkasan koleksi foto dan video dokumentasi kegiatan kami
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center bg-white rounded-xl p-4 shadow-sm border border-blue-100">
                    <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-blue-600 mb-1">150+</div>
                    <p className="text-gray-600 font-medium text-sm">Total Foto</p>
                  </div>
                  <div className="text-center bg-white rounded-xl p-4 shadow-sm border border-red-100">
                    <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-red-600 mb-1">25+</div>
                    <p className="text-gray-600 font-medium text-sm">Total Video</p>
                  </div>
                  <div className="text-center bg-white rounded-xl p-4 shadow-sm border border-green-100">
                    <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-green-600 mb-1">50+</div>
                    <p className="text-gray-600 font-medium text-sm">Kegiatan</p>
                  </div>
                  <div className="text-center bg-white rounded-xl p-4 shadow-sm border border-orange-100">
                    <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-orange-600 mb-1">6</div>
                    <p className="text-gray-600 font-medium text-sm">Kategori</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Pagination */}
        <AnimatedSection>
          <section className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-center items-center space-x-1">
                <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 
                                 hover:border-gray-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="flex space-x-1">
                  {[1, 2, 3].map((page) => (
                    <button
                      key={page}
                      className={`px-3 py-2 rounded-md font-medium transition-all duration-200 text-sm ${
                        page === 1 
                          ? 'bg-blue-600 text-white shadow-md' 
                          : 'text-gray-600 hover:bg-blue-50 border border-gray-300 hover:border-blue-300 hover:text-blue-600'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                
                <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 
                                 hover:border-gray-400 transition-all duration-200">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              <div className="text-center mt-3">
                <p className="text-gray-600 text-sm">
                  Halaman 1 dari 3 • Menampilkan {filteredGallery.length} dari {allGallery.length} item
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </>
  )
}
