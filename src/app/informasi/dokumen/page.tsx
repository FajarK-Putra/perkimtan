'use client'

import { useState, useRef, useEffect } from 'react'
import AnimatedSection from '@/components/atoms/AnimatedSection'
import { dinasProfile } from '@/lib/data'

export default function DokumenPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false)
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false)
  
  const categoryRef = useRef<HTMLDivElement>(null)
  const typeRef = useRef<HTMLDivElement>(null)

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
        setCategoryDropdownOpen(false)
      }
      if (typeRef.current && !typeRef.current.contains(event.target as Node)) {
        setTypeDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  const documentCategories = [
    {
      name: 'Formulir Layanan',
      description: 'Formulir untuk berbagai layanan dinas',
      documents: [
        {
          title: 'Formulir Permohonan Sertifikasi Tanah',
          description: 'Formulir untuk mengajukan sertifikasi tanah',
          type: 'PDF',
          size: '256 KB',
          downloads: 1234,
          file: '/forms/form-sertifikasi.pdf'
        },
        {
          title: 'Formulir Legalisasi Aset',
          description: 'Formulir permohonan legalisasi aset tanah',
          type: 'PDF',
          size: '189 KB',
          downloads: 856,
          file: '/forms/form-legalisasi.pdf'
        },
        {
          title: 'Formulir Pengaduan Masyarakat',
          description: 'Formulir untuk menyampaikan pengaduan',
          type: 'PDF',
          size: '145 KB',
          downloads: 467,
          file: '/forms/form-pengaduan.pdf'
        }
      ]
    },
    {
      name: 'Panduan & SOP',
      description: 'Panduan dan standar operasional prosedur',
      documents: [
        {
          title: 'Panduan Sertifikasi Tanah',
          description: 'Panduan lengkap proses sertifikasi tanah',
          type: 'PDF',
          size: '2.1 MB',
          downloads: 2134,
          file: '/guides/panduan-sertifikasi.pdf'
        },
        {
          title: 'SOP Penyelesaian Sengketa',
          description: 'Standar operasional penyelesaian sengketa',
          type: 'PDF',
          size: '1.8 MB',
          downloads: 698,
          file: '/guides/sop-sengketa.pdf'
        },
        {
          title: 'Panduan Perizinan Perumahan',
          description: 'Panduan lengkap perizinan pembangunan',
          type: 'PDF',
          size: '3.2 MB',
          downloads: 1567,
          file: '/guides/panduan-perizinan.pdf'
        }
      ]
    },
    {
      name: 'Laporan Kinerja',
      description: 'Laporan kinerja dan pertanggungjawaban',
      documents: [
        {
          title: 'Laporan Kinerja Tahunan 2023',
          description: 'Laporan kinerja dinas tahun 2023',
          type: 'PDF',
          size: '5.4 MB',
          downloads: 892,
          file: '/reports/lakip-2023.pdf'
        },
        {
          title: 'Laporan Keuangan 2023',
          description: 'Laporan pertanggungjawaban keuangan',
          type: 'PDF',
          size: '4.1 MB',
          downloads: 445,
          file: '/reports/lapkeu-2023.pdf'
        },
        {
          title: 'Rencana Strategis 2024-2029',
          description: 'Dokumen perencanaan strategis jangka menengah',
          type: 'PDF',
          size: '6.7 MB',
          downloads: 623,
          file: '/reports/renstra-2024-2029.pdf'
        }
      ]
    },
    {
      name: 'Standar & Spesifikasi',
      description: 'Standar teknis dan spesifikasi',
      documents: [
        {
          title: 'Standar Teknis Perumahan',
          description: 'Standar teknis pembangunan perumahan',
          type: 'PDF',
          size: '2.9 MB',
          downloads: 1123,
          file: '/standards/standar-perumahan.pdf'
        },
        {
          title: 'Spesifikasi Infrastruktur Permukiman',
          description: 'Spesifikasi teknis infrastruktur',
          type: 'PDF',
          size: '3.5 MB',
          downloads: 567,
          file: '/standards/spek-infrastruktur.pdf'
        },
        {
          title: 'Pedoman Tata Ruang',
          description: 'Pedoman penataan ruang wilayah',
          type: 'PDF',
          size: '4.2 MB',
          downloads: 789,
          file: '/standards/pedoman-tataruang.pdf'
        }
      ]
    }
  ]

  const popularDocuments = [
    { title: 'Formulir Sertifikasi Tanah', downloads: 2134 },
    { title: 'Panduan Sertifikasi Tanah', downloads: 2134 },
    { title: 'Panduan Perizinan Perumahan', downloads: 1567 },
    { title: 'Formulir Permohonan Sertifikasi', downloads: 1234 },
    { title: 'Standar Teknis Perumahan', downloads: 1123 }
  ]

  const categoryOptions = [
    { value: '', label: 'Semua Kategori' },
    { value: 'formulir', label: 'Formulir Layanan' },
    { value: 'panduan', label: 'Panduan & SOP' },
    { value: 'laporan', label: 'Laporan Kinerja' },
    { value: 'standar', label: 'Standar & Spesifikasi' }
  ]

  const typeOptions = [
    { value: '', label: 'Semua Tipe' },
    { value: 'PDF', label: 'PDF' },
    { value: 'DOC', label: 'DOC' },
    { value: 'XLS', label: 'XLS' }
  ]

  const getDisplayValue = (value: string, options: {value: string, label: string}[]) => {
    const option = options.find(opt => opt.value === value)
    return option ? option.label : options[0].label
  }

  const quickLinks = [
    {
      title: 'Layanan Online',
      description: 'Akses layanan digital',
      href: '/layanan',
      icon: '🌐'
    },
    {
      title: 'Peraturan',
      description: 'Regulasi terkini',
      href: '/informasi/peraturan',
      icon: '📋'
    },
    {
      title: 'Pengumuman',
      description: 'Info terbaru',
      href: '/informasi/pengumuman',
      icon: '📢'
    },
    {
      title: 'Bantuan',
      description: 'Hubungi kami',
      href: '/kontak',
      icon: '💬'
    }
  ]

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
          <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Dokumen Publik
                </h1>
                <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
                  Akses formulir, panduan, dan dokumen resmi untuk berbagai layanan kami
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Stats Section */}
        <AnimatedSection>
          <section className="py-12 bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">120+</div>
                  <div className="text-gray-600 font-medium">Total Dokumen</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">15.6K</div>
                  <div className="text-gray-600 font-medium">Total Unduhan</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">25</div>
                  <div className="text-gray-600 font-medium">Formulir Layanan</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">30</div>
                  <div className="text-gray-600 font-medium">Panduan SOP</div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Search and Filter */}
                <AnimatedSection>
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                          Pencarian Dokumen
                        </h2>
                        <p className="text-gray-600 text-sm">
                          Cari dokumen berdasarkan kata kunci, kategori, atau tipe file
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Search Input */}
                      <div className="md:col-span-1">
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Cari dokumen..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-400 text-gray-800 placeholder-gray-500 transition-all duration-150 ease-out hover:border-teal-300"
                          />
                          <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                      </div>

                      {/* Category Dropdown */}
                      <div className="md:col-span-1">
                        <div ref={categoryRef} className="relative">
                          <button
                            type="button"
                            onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-400 text-gray-800 transition-all duration-150 ease-out hover:border-teal-300 cursor-pointer bg-white flex items-center justify-between"
                          >
                            <span className={selectedCategory ? 'text-gray-800' : 'text-gray-500'}>
                              {selectedCategory ? categoryOptions.find(opt => opt.value === selectedCategory)?.label : 'Semua Kategori'}
                            </span>
                            <svg className={`w-4 h-4 transition-transform duration-150 ${categoryDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          
                          {categoryDropdownOpen && (
                            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                              <div
                                onClick={() => {
                                  setSelectedCategory('')
                                  setCategoryDropdownOpen(false)
                                }}
                                className="px-4 py-3 text-gray-800 hover:bg-teal-500 hover:text-white cursor-pointer transition-colors duration-150 border-b border-gray-100 last:border-b-0 font-medium"
                              >
                                Semua Kategori
                              </div>
                              {categoryOptions.slice(1).map((option) => (
                                <div
                                  key={option.value}
                                  onClick={() => {
                                    setSelectedCategory(option.value)
                                    setCategoryDropdownOpen(false)
                                  }}
                                  className="px-4 py-3 text-gray-800 hover:bg-teal-500 hover:text-white cursor-pointer transition-colors duration-150 border-b border-gray-100 last:border-b-0 font-medium"
                                >
                                  {option.label}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Type Dropdown */}
                      <div className="md:col-span-1">
                        <div ref={typeRef} className="relative">
                          <button
                            type="button"
                            onClick={() => setTypeDropdownOpen(!typeDropdownOpen)}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-400 text-gray-800 transition-all duration-150 ease-out hover:border-teal-300 cursor-pointer bg-white flex items-center justify-between"
                          >
                            <span className={selectedType ? 'text-gray-800' : 'text-gray-500'}>
                              {selectedType ? typeOptions.find(opt => opt.value === selectedType)?.label : 'Semua Tipe'}
                            </span>
                            <svg className={`w-4 h-4 transition-transform duration-150 ${typeDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          
                          {typeDropdownOpen && (
                            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                              <div
                                onClick={() => {
                                  setSelectedType('')
                                  setTypeDropdownOpen(false)
                                }}
                                className="px-4 py-3 text-gray-800 hover:bg-teal-500 hover:text-white cursor-pointer transition-colors duration-150 border-b border-gray-100 last:border-b-0 font-medium"
                              >
                                Semua Tipe
                              </div>
                              {typeOptions.slice(1).map((option) => (
                                <div
                                  key={option.value}
                                  onClick={() => {
                                    setSelectedType(option.value)
                                    setTypeDropdownOpen(false)
                                  }}
                                  className="px-4 py-3 text-gray-800 hover:bg-teal-500 hover:text-white cursor-pointer transition-colors duration-150 border-b border-gray-100 last:border-b-0 font-medium"
                                >
                                  {option.label}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Document Categories */}
                <div className="space-y-8">
                  {documentCategories.map((category, categoryIndex) => (
                    <AnimatedSection key={categoryIndex}>
                      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                        <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-6">
                          <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
                          <p className="text-teal-100">{category.description}</p>
                        </div>
                        <div className="p-6">
                          <div className="grid grid-cols-1 gap-6">
                            {category.documents.map((doc, docIndex) => (
                              <div key={docIndex} 
                                   className="border border-gray-200 rounded-lg p-5 hover:border-teal-300 
                                            hover:shadow-md transition-all duration-200 bg-gray-50 hover:bg-white">
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                      <span className="inline-block bg-teal-100 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full">
                                        {doc.type}
                                      </span>
                                      <span className="text-sm text-gray-500 font-medium">{doc.size}</span>
                                      <span className="text-sm text-gray-500 flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        {doc.downloads.toLocaleString()} unduhan
                                      </span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-teal-600 transition-colors">
                                      {doc.title}
                                    </h3>
                                    <p className="text-gray-600">
                                      {doc.description}
                                    </p>
                                  </div>
                                  <div className="flex gap-3 ml-6">
                                    <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg 
                                                     hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2">
                                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                      </svg>
                                      Lihat
                                    </button>
                                    <button className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg 
                                                     hover:bg-green-700 transition-colors duration-200 flex items-center gap-2">
                                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                      </svg>
                                      Unduh
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Popular Documents */}
                <AnimatedSection>
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sticky top-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <span className="text-2xl">📊</span>
                      Dokumen Populer
                    </h3>
                    <div className="space-y-4">
                      {popularDocuments.map((doc, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg
                                                  hover:bg-teal-50 hover:border-teal-200 border border-transparent
                                                  transition-all duration-200 cursor-pointer">
                          <div>
                            <div className="font-medium text-gray-900 text-sm mb-1">{doc.title}</div>
                            <div className="text-xs text-gray-500 flex items-center gap-1">
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              {doc.downloads.toLocaleString()}
                            </div>
                          </div>
                          <button className="text-teal-600 hover:text-teal-800 transition-colors p-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>

                {/* Quick Links */}
                <AnimatedSection>
                  <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl border border-teal-200 p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <span className="text-2xl">🔗</span>
                      Tautan Berguna
                    </h3>
                    <div className="space-y-3">
                      {quickLinks.map((link, index) => (
                        <a key={index} href={link.href} 
                           className="block p-4 bg-white rounded-lg hover:bg-teal-50 hover:border-teal-200
                                    border border-transparent transition-all duration-200 group">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                              {link.icon}
                            </span>
                            <div>
                              <div className="font-medium text-gray-900 group-hover:text-teal-700 transition-colors">
                                {link.title}
                              </div>
                              <div className="text-sm text-gray-600">{link.description}</div>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>

                {/* Contact Info */}
                <AnimatedSection>
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <span className="text-2xl">💬</span>
                      Butuh Bantuan?
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-teal-100 p-2 rounded-lg">
                          <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700 text-sm">Telepon</span>
                          <p className="text-gray-900 font-medium">{dinasProfile.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-teal-100 p-2 rounded-lg">
                          <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700 text-sm">Email</span>
                          <p className="text-gray-900 font-medium break-all">{dinasProfile.email}</p>
                        </div>
                      </div>
                      <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
                        <p className="text-teal-800 text-sm leading-relaxed">
                          <span className="font-medium">📞 Layanan 24/7:</span><br />
                          Untuk bantuan terkait dokumen atau formulir, silakan hubungi kami kapan saja
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
