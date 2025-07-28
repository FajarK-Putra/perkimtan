'use client'

import { useState, useEffect, useRef } from 'react'

export default function StaffPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedBidang, setSelectedBidang] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  
  // Set document title for client component
  useEffect(() => {
    document.title = 'Staff Dinas | Dinas Perkimtan Sumbar'
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const staffData = [
    { nama: "Dra. Siti Aminah, M.Si", bidang: "Perumahan", posisi: "Kepala Seksi Perencanaan Perumahan", nip: "196801151994032008" },
    { nama: "Ir. Budi Santoso, M.T", bidang: "Perumahan", posisi: "Kepala Seksi Pembangunan Perumahan", nip: "197203101997031005" },
    { nama: "Ir. Hj. Nurul Fitri, M.T", bidang: "Kawasan Permukiman", posisi: "Kepala Seksi Penataan Kawasan", nip: "196907081995032007" },
    { nama: "Drs. Ahmad Rizki, M.Si", bidang: "Kawasan Permukiman", posisi: "Kepala Seksi Infrastruktur Permukiman", nip: "197105151996031008" },
    { nama: "Ir. Dewi Sartika, M.T", bidang: "Pertanahan", posisi: "Kepala Seksi Pengelolaan Tanah", nip: "196812201994032009" },
    { nama: "Drs. H. Syafrizal Anwar", bidang: "Pertanahan", posisi: "Kepala Seksi Sengketa Tanah", nip: "196604121993031007" },
    { nama: "Sri Wahyuni, S.E", bidang: "Sekretariat", posisi: "Kepala Sub Bagian Umum", nip: "197408151998032012" },
    { nama: "Hendra Gunawan, S.Kom", bidang: "Sekretariat", posisi: "Kepala Sub Bagian Keuangan", nip: "198209182008011007" },
  ]

  // Filter data berdasarkan search dan bidang
  const filteredStaff = staffData.filter(staff => {
    const matchesSearch = staff.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         staff.posisi.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         staff.nip.includes(searchTerm)
    const matchesBidang = selectedBidang === '' || staff.bidang === selectedBidang
    return matchesSearch && matchesBidang
  })

  const uniqueBidang = [...new Set(staffData.map(staff => staff.bidang))]

  const getBidangColor = (bidang: string) => {
    switch (bidang) {
      case 'Perumahan':
        return { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200' }
      case 'Kawasan Permukiman':
        return { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-200' }
      case 'Pertanahan':
        return { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-200' }
      case 'Sekretariat':
        return { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-200' }
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-200' }
    }
  }

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
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-lg mb-4">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold mb-3">Staff Dinas</h1>
            <p className="text-lg text-teal-200 max-w-2xl mx-auto">
              Para profesional yang mendukung operasional dan pelayanan di setiap bidang
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Controls Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8 border border-gray-100">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari nama, posisi, atau NIP..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-400 text-gray-800 placeholder-gray-500 transition-all duration-150 ease-out hover:border-teal-300"
                />
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Filter */}
            <div className="flex items-center gap-4">
              {/* Custom Dropdown */}
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-400 text-gray-800 transition-all duration-150 ease-out hover:border-teal-300 cursor-pointer bg-white flex items-center justify-between min-w-[160px]"
                >
                  <span>{selectedBidang || 'Semua Bidang'}</span>
                  <svg className={`w-4 h-4 transition-transform duration-150 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    <div
                      onClick={() => {
                        setSelectedBidang('')
                        setIsDropdownOpen(false)
                      }}
                      className="px-4 py-3 text-gray-800 hover:bg-teal-500 hover:text-white cursor-pointer transition-colors duration-150 border-b border-gray-100 last:border-b-0 font-medium"
                    >
                      Semua Bidang
                    </div>
                    {uniqueBidang.map((bidang) => (
                      <div
                        key={bidang}
                        onClick={() => {
                          setSelectedBidang(bidang)
                          setIsDropdownOpen(false)
                        }}
                        className="px-4 py-3 text-gray-800 hover:bg-teal-500 hover:text-white cursor-pointer transition-colors duration-150 border-b border-gray-100 last:border-b-0 font-medium"
                      >
                        {bidang}
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
              Menampilkan {filteredStaff.length} dari {staffData.length} staff
              {searchTerm && ` untuk "${searchTerm}"`}
              {selectedBidang && ` di bidang ${selectedBidang}`}
            </span>
            {(searchTerm || selectedBidang) && (
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedBidang('')
                }}
                className="text-teal-600 hover:text-teal-700 font-medium transition-colors duration-100 ease-out hover:underline"
              >
                Reset Filter
              </button>
            )}
          </div>
        </div>

        {/* Staff List */}
        <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 gap-6' : 'space-y-4'}>
          {filteredStaff.map((staff, index) => {
            const colors = getBidangColor(staff.bidang)
            
            if (viewMode === 'grid') {
              return (
                <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <svg className={`w-6 h-6 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 truncate">{staff.nama}</h3>
                        <span className={`${colors.bg} ${colors.text} text-xs font-medium px-2 py-1 rounded-full border ${colors.border} ml-2 flex-shrink-0`}>
                          {staff.bidang}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{staff.posisi}</p>
                      <div className="bg-gray-50 rounded px-3 py-2">
                        <p className="text-gray-700 text-sm">NIP: {staff.nip}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            } else {
              return (
                <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 flex-1 min-w-0">
                      <div className={`w-10 h-10 ${colors.bg} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <svg className={`w-5 h-5 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 truncate">{staff.nama}</h3>
                        <p className="text-sm text-gray-600 truncate">{staff.posisi}</p>
                      </div>
                      <div className="hidden md:block text-sm text-gray-500">
                        NIP: {staff.nip}
                      </div>
                    </div>
                    <span className={`${colors.bg} ${colors.text} text-xs font-medium px-2 py-1 rounded-full border ${colors.border} ml-4 flex-shrink-0`}>
                      {staff.bidang}
                    </span>
                  </div>
                </div>
              )
            }
          })}
        </div>

        {/* No Results */}
        {filteredStaff.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Tidak ada staff ditemukan</h3>
            <p className="text-gray-600 mb-4">Coba ubah kriteria pencarian atau filter Anda</p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedBidang('')
              }}
              className="text-teal-600 hover:text-teal-700 font-medium transition-colors duration-100 ease-out hover:underline"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* Summary Stats */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Ringkasan Staff</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {staffData.filter(s => s.bidang === 'Perumahan').length}
              </div>
              <div className="text-blue-700 text-sm">Staff Perumahan</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-100">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {staffData.filter(s => s.bidang === 'Kawasan Permukiman').length}
              </div>
              <div className="text-green-700 text-sm">Staff Kawasan</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-100">
              <div className="text-2xl font-bold text-orange-600 mb-1">
                {staffData.filter(s => s.bidang === 'Pertanahan').length}
              </div>
              <div className="text-orange-700 text-sm">Staff Pertanahan</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-100">
              <div className="text-2xl font-bold text-purple-600 mb-1">
                {staffData.filter(s => s.bidang === 'Sekretariat').length}
              </div>
              <div className="text-purple-700 text-sm">Staff Sekretariat</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
