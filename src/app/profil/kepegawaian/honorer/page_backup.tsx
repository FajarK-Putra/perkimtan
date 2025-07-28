'use client'

import { useState, useEffect, useRef } from 'react'

export default function HonorerPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedBidang, setSelectedBidang] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState<'nama' | 'bidang' | 'masa_kerja'>('nama')
  const [isBidangDropdownOpen, setIsBidangDropdownOpen] = useState(false)
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false)
  const bidangDropdownRef = useRef<HTMLDivElement>(null)
  const sortDropdownRef = useRef<HTMLDivElement>(null)
  
  // Set document title for client component
  useEffect(() => {
    document.title = 'Tenaga Honorer | Dinas Perkimtan Sumbar'
  }, [])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (bidangDropdownRef.current && !bidangDropdownRef.current.contains(event.target as Node)) {
        setIsBidangDropdownOpen(false)
      }
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target as Node)) {
        setIsSortDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const tenagaHonorer = [
    { nama: "Ahmad Fauzi", bidang: "Perumahan", posisi: "Staf Teknis Perumahan", pendidikan: "D3 Teknik Sipil", masa_kerja: "3 tahun" },
    { nama: "Siti Rahma", bidang: "Kawasan Permukiman", posisi: "Staf Administrasi", pendidikan: "S1 Administrasi", masa_kerja: "2 tahun" },
    { nama: "Budi Pratama", bidang: "Pertanahan", posisi: "Surveyor", pendidikan: "D3 Pertanahan", masa_kerja: "4 tahun" },
    { nama: "Rina Sari", bidang: "Sekretariat", posisi: "Operator Komputer", pendidikan: "SMK TKJ", masa_kerja: "1 tahun" },
    { nama: "Dedi Kurniawan", bidang: "Perumahan", posisi: "Driver", pendidikan: "SMA", masa_kerja: "5 tahun" },
    { nama: "Maya Sari", bidang: "Sekretariat", posisi: "Cleaning Service", pendidikan: "SMP", masa_kerja: "2 tahun" },
    { nama: "Roni Saputra", bidang: "Kawasan Permukiman", posisi: "Security", pendidikan: "SMA", masa_kerja: "3 tahun" },
    { nama: "Indah Permata", bidang: "Pertanahan", posisi: "Staf Data Entry", pendidikan: "SMK", masa_kerja: "1 tahun" },
  ]

  const getBidangColor = (bidang: string) => {
    switch (bidang) {
      case 'Perumahan':
        return 'bg-blue-500'
      case 'Kawasan Permukiman':
        return 'bg-green-500'
      case 'Pertanahan':
        return 'bg-orange-500'
      case 'Sekretariat':
        return 'bg-purple-500'
      default:
        return 'bg-gray-500'
    }
  }

  const filteredTenagaHonorer = tenagaHonorer
    .filter(honorer => {
      const matchesNama = honorer.nama.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesBidang = selectedBidang ? honorer.bidang === selectedBidang : true
      return matchesNama && matchesBidang
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'nama':
          return a.nama.localeCompare(b.nama)
        case 'bidang':
          return a.bidang.localeCompare(b.bidang)
        case 'masa_kerja':
          const yearA = parseInt(a.masa_kerja.split(' ')[0])
          const yearB = parseInt(b.masa_kerja.split(' ')[0])
          return yearB - yearA // Descending
        default:
          return 0
      }
    })

  const uniqueBidang = [...new Set(tenagaHonorer.map(honorer => honorer.bidang))]

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          input:focus,
          button:focus {
            outline: none !important;
            box-shadow: none !important;
          }
          input:focus-visible,
          button:focus-visible {
            outline: none !important;
            box-shadow: none !important;
          }
        `
      }} />
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-lg mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-8a2 2 0 012-2V8" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold mb-3">Tenaga Honorer</h1>
              <p className="text-lg text-orange-200 max-w-2xl mx-auto">
                Para tenaga honorer yang turut mendukung kelancaran operasional dan pelayanan dinas
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-10">

        <div className="max-w-6xl mx-auto px-4 py-10">
          {/* Controls Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8 border border-gray-100">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              {/* Search */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Cari nama, posisi, atau pendidikan..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-400 text-gray-800 placeholder-gray-500 transition-all duration-150 ease-out hover:border-orange-300"
                  />
                  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Filter and Controls */}
              <div className="flex items-center gap-4">
                {/* Bidang Filter Dropdown */}
                <div ref={bidangDropdownRef} className="relative">
                  <button
                    onClick={() => setIsBidangDropdownOpen(!isBidangDropdownOpen)}
                    className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-400 text-gray-800 transition-all duration-150 ease-out hover:border-orange-300 cursor-pointer bg-white flex items-center justify-between min-w-[160px]"
                  >
                    <span>{selectedBidang || 'Semua Bidang'}</span>
                    <svg className={`w-4 h-4 transition-transform duration-150 ${isBidangDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isBidangDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                      <div
                        onClick={() => {
                          setSelectedBidang(null)
                          setIsBidangDropdownOpen(false)
                        }}
                        className="px-4 py-3 text-gray-800 hover:bg-orange-500 hover:text-white cursor-pointer transition-colors duration-150 border-b border-gray-100 last:border-b-0 font-medium"
                      >
                        Semua Bidang
                      </div>
                      {uniqueBidang.map((bidang) => (
                        <div
                          key={bidang}
                          onClick={() => {
                            setSelectedBidang(bidang)
                            setIsBidangDropdownOpen(false)
                          }}
                          className="px-4 py-3 text-gray-800 hover:bg-orange-500 hover:text-white cursor-pointer transition-colors duration-150 border-b border-gray-100 last:border-b-0 font-medium"
                        >
                          {bidang}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Sort Dropdown */}
                <div ref={sortDropdownRef} className="relative">
                  <button
                    onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                    className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-400 text-gray-800 transition-all duration-150 ease-out hover:border-orange-300 cursor-pointer bg-white flex items-center justify-between min-w-[140px]"
                  >
                    <span>
                      {sortBy === 'nama' ? 'Nama' : 
                       sortBy === 'bidang' ? 'Bidang' : 
                       'Masa Kerja'}
                    </span>
                    <svg className={`w-4 h-4 transition-transform duration-150 ${isSortDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isSortDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                      {[
                        { value: 'nama', label: 'Nama' },
                        { value: 'bidang', label: 'Bidang' },
                        { value: 'masa_kerja', label: 'Masa Kerja' }
                      ].map((option) => (
                        <div
                          key={option.value}
                          onClick={() => {
                            setSortBy(option.value as 'nama' | 'bidang' | 'masa_kerja')
                            setIsSortDropdownOpen(false)
                          }}
                          className="px-4 py-3 text-gray-800 hover:bg-orange-500 hover:text-white cursor-pointer transition-colors duration-150 border-b border-gray-100 last:border-b-0 font-medium"
                        >
                          {option.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* View Toggle */}
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-100 ease-out transform active:scale-95 ${
                      viewMode === 'grid' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-100 ease-out transform active:scale-95 ${
                      viewMode === 'list' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Results Info */}
            <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
              <span>
                Menampilkan {filteredTenagaHonorer.length} dari {tenagaHonorer.length} tenaga honorer
                {searchTerm && ` untuk "${searchTerm}"`}
                {selectedBidang && ` di bidang ${selectedBidang}`}
              </span>
              {(searchTerm || selectedBidang) && (
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedBidang(null)
                  }}
                  className="text-orange-600 hover:text-orange-700 font-medium transition-colors duration-100 ease-out hover:underline"
                >
                  Reset Filter
                </button>
              )}
            </div>
          </div>

              {/* Sort By */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'nama' | 'bidang' | 'masa_kerja')}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400 text-gray-800 transition-all duration-200 ease-in-out appearance-none bg-white"
                >
                  <option value="nama">Urutkan: Nama (A-Z)</option>
                  <option value="bidang">Urutkan: Bidang</option>
                  <option value="masa_kerja">Urutkan: Masa Kerja</option>
                </select>
                <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Results Info */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">
                  {filteredTenagaHonorer.length} dari {tenagaHonorer.length} tenaga
                </span>
                {(searchTerm || selectedBidang) && (
                  <button
                    onClick={() => {
                      setSearchTerm('')
                      setSelectedBidang(null)
                    }}
                    className="text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors duration-200 ease-in-out"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-blue-500/10 backdrop-blur-sm rounded-xl p-6 text-center border border-blue-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
            <div className="text-blue-700 font-medium">Perumahan</div>
          </div>
          <div className="bg-green-500/10 backdrop-blur-sm rounded-xl p-6 text-center border border-green-200">
            <div className="text-3xl font-bold text-green-600 mb-2">2</div>
            <div className="text-green-700 font-medium">Kawasan</div>
          </div>
          <div className="bg-orange-500/10 backdrop-blur-sm rounded-xl p-6 text-center border border-orange-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">2</div>
            <div className="text-orange-700 font-medium">Pertanahan</div>
          </div>
          <div className="bg-purple-500/10 backdrop-blur-sm rounded-xl p-6 text-center border border-purple-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
            <div className="text-purple-700 font-medium">Sekretariat</div>
          </div>
        </div>

        {/* Tenaga Honorer Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {filteredTenagaHonorer.map((honorer, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ease-in-out p-6 border border-gray-100 hover:border-gray-200">
              <div className="flex items-start space-x-4">
                {/* Avatar */}
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center border-2 border-orange-100">
                  <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        {honorer.nama}
                      </h3>
                      <p className="text-gray-600 font-medium">{honorer.posisi}</p>
                    </div>
                    <span className={`${getBidangColor(honorer.bidang)} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                      {honorer.bidang}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Pendidikan:</span>
                        <span className="font-medium text-gray-800">{honorer.pendidikan}</span>
                      </div>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-3 border border-orange-100">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Masa Kerja:</span>
                        <span className="font-medium text-orange-700">{honorer.masa_kerja}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Appreciation Section */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Apresiasi Kerja</h3>
            <p className="text-orange-100 max-w-2xl mx-auto">
              Kami mengapresiasi dedikasi dan kontribusi para tenaga honorer yang telah mendukung 
              kelancaran operasional dinas dengan penuh komitmen.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-2xl font-bold mb-1">8</div>
              <div className="text-orange-100 text-sm">Total Tenaga</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div className="text-2xl font-bold mb-1">4</div>
              <div className="text-orange-100 text-sm">Bidang Kerja</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-2xl font-bold mb-1">100%</div>
              <div className="text-orange-100 text-sm">Dedikasi</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="text-2xl font-bold mb-1">24/7</div>
              <div className="text-orange-100 text-sm">Siap Melayani</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
