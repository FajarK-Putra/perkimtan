'use client'
import { useState, useRef, useEffect } from 'react'
import AnimatedSection from '@/components/atoms/AnimatedSection'
import { dinasProfile } from '@/lib/data'
import Link from 'next/link'

export default function PeraturanPage() {
  // Set document title for client component
  useEffect(() => {
    document.title = 'Peraturan | Dinas Perkimtan Sumbar'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Peraturan dan regulasi terkait perumahan, kawasan permukiman dan pertanahan di Sumatera Barat')
    }
  }, [])

  // State untuk dropdown dan search
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedKategori, setSelectedKategori] = useState('')
  const [selectedTahun, setSelectedTahun] = useState('')
  const [isKategoriOpen, setIsKategoriOpen] = useState(false)
  const [isTahunOpen, setIsTahunOpen] = useState(false)
  
  // Refs untuk dropdown
  const kategoriRef = useRef<HTMLDivElement>(null)
  const tahunRef = useRef<HTMLDivElement>(null)
  
  // Data opsi
  const kategoriOptions = [
    { value: 'uu', label: 'Undang-Undang' },
    { value: 'pp', label: 'Peraturan Pemerintah' },
    { value: 'permen', label: 'Peraturan Menteri' },
    { value: 'perda', label: 'Peraturan Daerah' }
  ]
  
  const tahunOptions = [
    { value: '2024', label: '2024' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
    { value: '2021', label: '2021' },
    { value: '2020', label: '2020' }
  ]
  
  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (kategoriRef.current && !kategoriRef.current.contains(event.target as Node)) {
        setIsKategoriOpen(false)
      }
      if (tahunRef.current && !tahunRef.current.contains(event.target as Node)) {
        setIsTahunOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const regulations = [
    {
      category: 'Undang-Undang',
      items: [
        {
          title: 'UU No. 1 Tahun 2011 tentang Perumahan dan Kawasan Permukiman',
          description: 'Undang-undang yang mengatur tentang perumahan dan kawasan permukiman',
          year: '2011',
          type: 'UU',
          file: '/documents/uu-1-2011.pdf'
        },
        {
          title: 'UU No. 5 Tahun 1960 tentang Peraturan Dasar Pokok-Pokok Agraria',
          description: 'Undang-undang dasar mengenai pertanahan di Indonesia',
          year: '1960',
          type: 'UU',
          file: '/documents/uu-5-1960.pdf'
        }
      ]
    },
    {
      category: 'Peraturan Pemerintah',
      items: [
        {
          title: 'PP No. 14 Tahun 2016 tentang Penyelenggaraan Perumahan dan Kawasan Permukiman',
          description: 'Peraturan pelaksanaan penyelenggaraan perumahan dan kawasan permukiman',
          year: '2016',
          type: 'PP',
          file: '/documents/pp-14-2016.pdf'
        },
        {
          title: 'PP No. 18 Tahun 2021 tentang Hak Pengelolaan, Hak atas Tanah, Satuan Rumah Susun',
          description: 'Peraturan tentang hak-hak atas tanah dan pengelolaannya',
          year: '2021',
          type: 'PP',
          file: '/documents/pp-18-2021.pdf'
        }
      ]
    },
    {
      category: 'Peraturan Menteri',
      items: [
        {
          title: 'Permen PUPR No. 5 Tahun 2016 tentang Izin Mendirikan Bangunan Gedung',
          description: 'Peraturan tentang perizinan mendirikan bangunan gedung',
          year: '2016',
          type: 'Permen',
          file: '/documents/permen-pupr-5-2016.pdf'
        },
        {
          title: 'Permen ATR/BPN No. 8 Tahun 2021 tentang Tata Cara Pemberian SHGB',
          description: 'Tata cara pemberian Sertifikat Hak Guna Bangunan',
          year: '2021',
          type: 'Permen',
          file: '/documents/permen-atr-8-2021.pdf'
        }
      ]
    },
    {
      category: 'Peraturan Daerah',
      items: [
        {
          title: 'Perda Sumbar No. 3 Tahun 2020 tentang Rencana Tata Ruang Wilayah',
          description: 'Peraturan daerah tentang tata ruang wilayah Sumatera Barat',
          year: '2020',
          type: 'Perda',
          file: '/documents/perda-sumbar-3-2020.pdf'
        },
        {
          title: 'Perda Sumbar No. 7 Tahun 2019 tentang Penyelenggaraan Perumahan',
          description: 'Peraturan daerah penyelenggaraan perumahan di Sumatera Barat',
          year: '2019',
          type: 'Perda',
          file: '/documents/perda-sumbar-7-2019.pdf'
        }
      ]
    }
  ]

  const recentUpdates = [
    {
      title: 'Perpres No. 18 Tahun 2024 tentang Percepatan Sertifikasi Tanah',
      date: '15 Januari 2024',
      status: 'Baru'
    },
    {
      title: 'Permen PUPR No. 12 Tahun 2024 tentang Standar Konstruksi',
      date: '08 Januari 2024',
      status: 'Update'
    },
    {
      title: 'SE Dirjen No. 02/SE/2024 tentang Implementasi Digitalisasi',
      date: '03 Januari 2024',
      status: 'Baru'
    }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'UU':
        return 'bg-red-100 text-red-800 border border-red-200'
      case 'PP':
        return 'bg-blue-100 text-blue-800 border border-blue-200'
      case 'Permen':
        return 'bg-green-100 text-green-800 border border-green-200'
      case 'Perda':
        return 'bg-purple-100 text-purple-800 border border-purple-200'
      default:
        return 'bg-gray-100 text-gray-800 border border-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <style dangerouslySetInnerHTML={{
        __html: `
          input:focus,
          button:focus,
          select:focus,
          textarea:focus {
            outline: none !important;
            box-shadow: none !important;
          }
          input:focus-visible,
          button:focus-visible,
          select:focus-visible,
          textarea:focus-visible {
            outline: none !important;
            box-shadow: none !important;
          }
        `
      }} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 sm:py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Peraturan & <span className="text-yellow-300">Regulasi</span>
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
              Kumpulan peraturan dan regulasi terkait perumahan, kawasan permukiman dan pertanahan di Sumatera Barat
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Search and Filter */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      Pencarian Peraturan
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Cari peraturan berdasarkan kata kunci, kategori, atau tahun
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Search Input */}
                  <div className="md:col-span-1">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Cari peraturan..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-400 text-gray-800 placeholder-gray-500 transition-all duration-150 ease-out hover:border-teal-300"
                      />
                      <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>

                  {/* Kategori Dropdown */}
                  <div className="md:col-span-1">
                    <div ref={kategoriRef} className="relative">
                      <button
                        type="button"
                        onClick={() => setIsKategoriOpen(!isKategoriOpen)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-400 text-gray-800 transition-all duration-150 ease-out hover:border-teal-300 cursor-pointer bg-white flex items-center justify-between"
                      >
                        <span className={selectedKategori ? 'text-gray-800' : 'text-gray-500'}>
                          {selectedKategori ? kategoriOptions.find(opt => opt.value === selectedKategori)?.label : 'Semua Kategori'}
                        </span>
                        <svg className={`w-4 h-4 transition-transform duration-150 ${isKategoriOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {isKategoriOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                          <div
                            onClick={() => {
                              setSelectedKategori('')
                              setIsKategoriOpen(false)
                            }}
                            className="px-4 py-3 text-gray-800 hover:bg-teal-500 hover:text-white cursor-pointer transition-colors duration-150 border-b border-gray-100 last:border-b-0 font-medium"
                          >
                            Semua Kategori
                          </div>
                          {kategoriOptions.map((option) => (
                            <div
                              key={option.value}
                              onClick={() => {
                                setSelectedKategori(option.value)
                                setIsKategoriOpen(false)
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

                  {/* Tahun Dropdown */}
                  <div className="md:col-span-1">
                    <div ref={tahunRef} className="relative">
                      <button
                        type="button"
                        onClick={() => setIsTahunOpen(!isTahunOpen)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-400 text-gray-800 transition-all duration-150 ease-out hover:border-teal-300 cursor-pointer bg-white flex items-center justify-between"
                      >
                        <span className={selectedTahun ? 'text-gray-800' : 'text-gray-500'}>
                          {selectedTahun ? tahunOptions.find(opt => opt.value === selectedTahun)?.label : 'Semua Tahun'}
                        </span>
                        <svg className={`w-4 h-4 transition-transform duration-150 ${isTahunOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {isTahunOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                          <div
                            onClick={() => {
                              setSelectedTahun('')
                              setIsTahunOpen(false)
                            }}
                            className="px-4 py-3 text-gray-800 hover:bg-teal-500 hover:text-white cursor-pointer transition-colors duration-150 border-b border-gray-100 last:border-b-0 font-medium"
                          >
                            Semua Tahun
                          </div>
                          {tahunOptions.map((option) => (
                            <div
                              key={option.value}
                              onClick={() => {
                                setSelectedTahun(option.value)
                                setIsTahunOpen(false)
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

            {/* Regulations List */}
            <div className="space-y-6">
              {regulations.map((category, categoryIndex) => (
                <AnimatedSection key={categoryIndex}>
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-6">
                      <h2 className="text-2xl font-bold flex items-center gap-3">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        {category.category}
                      </h2>
                    </div>
                    <div className="p-8">
                      <div className="space-y-6">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="border border-gray-200 rounded-xl p-6 hover:bg-gray-50 hover:border-gray-300 transition-all duration-150 ease-out">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                  <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${getTypeColor(item.type)}`}>
                                    {item.type}
                                  </span>
                                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-semibold">{item.year}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                  {item.title}
                                </h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                              <div className="flex gap-3 ml-6">
                                <button className="px-6 py-3 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold rounded-xl transition-all duration-150 ease-out">
                                  <svg className="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                  </svg>
                                  Lihat
                                </button>
                                <button className="px-6 py-3 bg-green-50 hover:bg-green-100 text-green-700 font-semibold rounded-xl transition-all duration-150 ease-out">
                                  <svg className="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="lg:col-span-1 space-y-8">
            {/* Recent Updates */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Update Terbaru</h4>
                  </div>
                </div>
                <div className="space-y-4">
                  {recentUpdates.map((update, index) => (
                    <div key={index} className="border-l-4 border-green-400 pl-4 py-2">
                      <div className="flex items-start justify-between mb-2">
                        <span className={`text-xs font-semibold px-2 py-1 rounded-lg ${
                          update.status === 'Baru' 
                            ? 'bg-green-100 text-green-800 border border-green-200' 
                            : 'bg-blue-100 text-blue-800 border border-blue-200'
                        }`}>
                          {update.status}
                        </span>
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-2">
                        {update.title}
                      </h4>
                      <p className="text-xs text-gray-500">{update.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Quick Access */}
            <AnimatedSection>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Akses Cepat</h4>
                  </div>
                </div>
                <div className="space-y-3">
                  <Link 
                    href="/informasi/dokumen"
                    className="block p-4 bg-white rounded-xl hover:bg-indigo-50 hover:border-indigo-200 border border-gray-200 transition-all duration-150 ease-out"
                  >
                    <div className="font-semibold text-gray-900">Dokumen Publik</div>
                    <div className="text-sm text-gray-600">Formulir dan dokumen</div>
                  </Link>
                  <Link 
                    href="/informasi/statistik"
                    className="block p-4 bg-white rounded-xl hover:bg-indigo-50 hover:border-indigo-200 border border-gray-200 transition-all duration-150 ease-out"
                  >
                    <div className="font-semibold text-gray-900">Data Statistik</div>
                    <div className="text-sm text-gray-600">Data dan laporan</div>
                  </Link>
                  <Link 
                    href="/kontak"
                    className="block p-4 bg-white rounded-xl hover:bg-indigo-50 hover:border-indigo-200 border border-gray-200 transition-all duration-150 ease-out"
                  >
                    <div className="font-semibold text-gray-900">Bantuan</div>
                    <div className="text-sm text-gray-600">Hubungi kami</div>
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Informasi Kontak</h4>
                  </div>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700 block mb-1">Alamat:</span>
                    <p className="text-gray-600 leading-relaxed">{dinasProfile.address}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700 block mb-1">Telepon:</span>
                    <p className="text-gray-600">{dinasProfile.phone}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700 block mb-1">Email:</span>
                    <p className="text-gray-600">{dinasProfile.email}</p>
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
