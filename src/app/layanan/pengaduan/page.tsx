'use client'
import { useState, useRef, useEffect } from 'react'
import AnimatedSection from '@/components/atoms/AnimatedSection'

export default function PengaduanPage() {
  // Set document title for client component
  useEffect(() => {
    document.title = 'Pengaduan Masyarakat | Dinas Perkimtan Sumbar'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Layanan pengaduan masyarakat untuk Dinas Perumahan, Kawasan Permukiman dan Pertanahan Sumatera Barat')
    }
  }, [])

  // State untuk dropdown
  const [selectedKategori, setSelectedKategori] = useState('')
  const [selectedPrioritas, setSelectedPrioritas] = useState('')
  const [isKategoriOpen, setIsKategoriOpen] = useState(false)
  const [isPrioritasOpen, setIsPrioritasOpen] = useState(false)
  
  // Refs untuk dropdown
  const kategoriRef = useRef<HTMLDivElement>(null)
  const prioritasRef = useRef<HTMLDivElement>(null)
  
  // Data opsi
  const kategoriOptions = [
    { value: 'pelayanan', label: 'Pelayanan Publik' },
    { value: 'perumahan', label: 'Program Perumahan' },
    { value: 'kawasan', label: 'Kawasan Permukiman' },
    { value: 'pertanahan', label: 'Pertanahan' },
    { value: 'infrastruktur', label: 'Infrastruktur' },
    { value: 'lainnya', label: 'Lainnya' }
  ]
  
  const prioritasOptions = [
    { value: 'rendah', label: 'Rendah' },
    { value: 'sedang', label: 'Sedang' },
    { value: 'tinggi', label: 'Tinggi' },
    { value: 'darurat', label: 'Darurat' }
  ]
  
  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (kategoriRef.current && !kategoriRef.current.contains(event.target as Node)) {
        setIsKategoriOpen(false)
      }
      if (prioritasRef.current && !prioritasRef.current.contains(event.target as Node)) {
        setIsPrioritasOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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
      <section className="bg-gradient-to-br from-orange-600 via-red-700 to-pink-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 sm:py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Pengaduan <span className="text-yellow-300">Masyarakat</span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
              Sampaikan aspirasi, keluhan, atau laporan Anda mengenai pelayanan dan program Dinas Perkimtan Sumbar
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Info Layanan */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      Informasi Layanan Pengaduan
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 hover:bg-blue-100 transition-all duration-150 ease-out">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center">
                            <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <span className="text-blue-900 font-semibold text-sm">Waktu Respons</span>
                        </div>
                        <p className="text-blue-800 text-sm font-medium">Maksimal 7 hari kerja</p>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 hover:bg-green-100 transition-all duration-150 ease-out">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center">
                            <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <span className="text-green-900 font-semibold text-sm">Nomor Tiket</span>
                        </div>
                        <p className="text-green-800 text-sm font-medium">Otomatis untuk tracking</p>
                      </div>
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 hover:bg-purple-100 transition-all duration-150 ease-out">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center">
                            <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <span className="text-purple-900 font-semibold text-sm">Kerahasiaan</span>
                        </div>
                        <p className="text-purple-800 text-sm font-medium">Data pribadi terlindungi</p>
                      </div>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 hover:bg-yellow-100 transition-all duration-150 ease-out">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-6 h-6 bg-yellow-100 rounded-lg flex items-center justify-center">
                            <svg className="w-3 h-3 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                          </div>
                          <span className="text-yellow-900 font-semibold text-sm">SOP Terjamin</span>
                        </div>
                        <p className="text-yellow-800 text-sm font-medium">Sesuai prosedur standar</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Form Pengaduan */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-start gap-4 mb-8">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Form Pengaduan
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Lengkapi formulir di bawah ini dengan data yang benar dan jelas
                    </p>
                  </div>
                </div>

                <form className="space-y-8">
                  {/* Data Pelapor */}
                  <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      Data Pelapor
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="nama_pelapor" className="block text-sm font-semibold text-gray-700 mb-2">
                          Nama Lengkap *
                        </label>
                        <input
                          type="text"
                          id="nama_pelapor"
                          name="nama_pelapor"
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-400 text-gray-800 placeholder-gray-500 transition-all duration-150 ease-out hover:border-teal-300"
                          placeholder="Masukkan nama lengkap"
                        />
                      </div>

                      <div>
                        <label htmlFor="nik" className="block text-sm font-semibold text-gray-700 mb-2">
                          NIK (Opsional)
                        </label>
                        <input
                          type="text"
                          id="nik"
                          name="nik"
                          maxLength={16}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-400 text-gray-800 placeholder-gray-500 transition-all duration-150 ease-out hover:border-teal-300"
                          placeholder="16 digit NIK"
                        />
                      </div>

                      <div>
                        <label htmlFor="email_pelapor" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email_pelapor"
                          name="email_pelapor"
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-400 text-gray-800 placeholder-gray-500 transition-all duration-150 ease-out hover:border-teal-300"
                          placeholder="contoh@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="telepon_pelapor" className="block text-sm font-semibold text-gray-700 mb-2">
                          Nomor Telepon *
                        </label>
                        <input
                          type="tel"
                          id="telepon_pelapor"
                          name="telepon_pelapor"
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-400 text-gray-800 placeholder-gray-500 transition-all duration-150 ease-out hover:border-teal-300"
                          placeholder="08xx-xxxx-xxxx"
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <label htmlFor="alamat_pelapor" className="block text-sm font-semibold text-gray-700 mb-2">
                        Alamat *
                      </label>
                      <textarea
                        id="alamat_pelapor"
                        name="alamat_pelapor"
                        rows={3}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-400 text-gray-800 placeholder-gray-500 transition-all duration-150 ease-out hover:border-teal-300 resize-none"
                        placeholder="Alamat lengkap"
                      ></textarea>
                    </div>
                  </div>

                  {/* Detail Pengaduan */}
                  <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                        </svg>
                      </div>
                      Detail Pengaduan
                    </h4>

                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="kategori_pengaduan" className="block text-sm font-semibold text-gray-700 mb-2">
                            Kategori Pengaduan *
                          </label>
                          <div ref={kategoriRef} className="relative">
                            <button
                              type="button"
                              onClick={() => setIsKategoriOpen(!isKategoriOpen)}
                              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-400 text-gray-800 transition-all duration-150 ease-out hover:border-teal-300 cursor-pointer bg-white flex items-center justify-between"
                            >
                              <span className={selectedKategori ? 'text-gray-800' : 'text-gray-500'}>
                                {selectedKategori ? kategoriOptions.find(opt => opt.value === selectedKategori)?.label : 'Pilih kategori'}
                              </span>
                              <svg className={`w-4 h-4 transition-transform duration-150 ${isKategoriOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                            
                            {isKategoriOpen && (
                              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
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
                          <input type="hidden" name="kategori_pengaduan" value={selectedKategori} />
                        </div>

                        <div>
                          <label htmlFor="prioritas" className="block text-sm font-semibold text-gray-700 mb-2">
                            Tingkat Urgensitas *
                          </label>
                          <div ref={prioritasRef} className="relative">
                            <button
                              type="button"
                              onClick={() => setIsPrioritasOpen(!isPrioritasOpen)}
                              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-400 text-gray-800 transition-all duration-150 ease-out hover:border-teal-300 cursor-pointer bg-white flex items-center justify-between"
                            >
                              <span className={selectedPrioritas ? 'text-gray-800' : 'text-gray-500'}>
                                {selectedPrioritas ? prioritasOptions.find(opt => opt.value === selectedPrioritas)?.label : 'Pilih tingkat urgensitas'}
                              </span>
                              <svg className={`w-4 h-4 transition-transform duration-150 ${isPrioritasOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                            
                            {isPrioritasOpen && (
                              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                {prioritasOptions.map((option) => (
                                  <div
                                    key={option.value}
                                    onClick={() => {
                                      setSelectedPrioritas(option.value)
                                      setIsPrioritasOpen(false)
                                    }}
                                    className="px-4 py-3 text-gray-800 hover:bg-teal-500 hover:text-white cursor-pointer transition-colors duration-150 border-b border-gray-100 last:border-b-0 font-medium"
                                  >
                                    {option.label}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                          <input type="hidden" name="prioritas" value={selectedPrioritas} />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="judul_pengaduan" className="block text-sm font-semibold text-gray-700 mb-2">
                          Judul Pengaduan *
                        </label>
                        <input
                          type="text"
                          id="judul_pengaduan"
                          name="judul_pengaduan"
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-400 text-gray-800 placeholder-gray-500 transition-all duration-150 ease-out hover:border-teal-300"
                          placeholder="Ringkasan singkat pengaduan"
                        />
                      </div>

                      <div>
                        <label htmlFor="lokasi_kejadian" className="block text-sm font-semibold text-gray-700 mb-2">
                          Lokasi Kejadian *
                        </label>
                        <input
                          type="text"
                          id="lokasi_kejadian"
                          name="lokasi_kejadian"
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-400 text-gray-800 placeholder-gray-500 transition-all duration-150 ease-out hover:border-teal-300"
                          placeholder="Alamat/lokasi kejadian"
                        />
                      </div>

                      <div>
                        <label htmlFor="kronologi" className="block text-sm font-semibold text-gray-700 mb-2">
                          Kronologi/Uraian Pengaduan *
                        </label>
                        <textarea
                          id="kronologi"
                          name="kronologi"
                          rows={6}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-400 text-gray-800 placeholder-gray-500 transition-all duration-150 ease-out hover:border-teal-300 resize-none"
                          placeholder="Jelaskan secara detail kronologi atau uraian pengaduan Anda..."
                        ></textarea>
                      </div>

                      <div>
                        <label htmlFor="bukti" className="block text-sm font-semibold text-gray-700 mb-2">
                          Upload Bukti (Opsional)
                        </label>
                        <input
                          type="file"
                          id="bukti"
                          name="bukti"
                          multiple
                          accept="image/*,.pdf,.doc,.docx"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-400 text-gray-800 transition-all duration-150 ease-out hover:border-teal-300"
                        />
                        <p className="text-xs text-gray-500 mt-2 bg-gray-50 rounded-lg p-3 border border-gray-100">
                          📎 Format: JPG, PNG, PDF, DOC, DOCX. Maksimal 5MB per file.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Pernyataan */}
                  <div className="bg-red-50 rounded-xl border border-red-200 p-6">
                    <div className="flex items-start gap-4">
                      <input
                        type="checkbox"
                        id="pernyataan"
                        name="pernyataan"
                        required
                        className="mt-1 w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
                      />
                      <label htmlFor="pernyataan" className="text-sm text-gray-800 font-medium">
                        Saya menyatakan bahwa data yang saya berikan adalah benar dan dapat dipertanggungjawabkan. 
                        Saya bersedia diproses hukum apabila ternyata data yang saya berikan tidak benar. *
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row justify-end gap-4">
                    <button
                      type="reset"
                      className="px-8 py-3 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-150 ease-out font-semibold"
                    >
                      Reset Form
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-sm hover:shadow-md transform active:scale-95"
                    >
                      Kirim Pengaduan
                    </button>
                  </div>
                </form>
              </div>
            </AnimatedSection>

            {/* Tracking Section */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Lacak Status Pengaduan
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Masukkan nomor tiket untuk melihat status pengaduan Anda
                    </p>
                  </div>
                </div>
                
                {/* Search Section with Staff Style */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    {/* Search Input */}
                    <div className="flex-1 max-w-md">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Masukkan nomor tiket pengaduan..."
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-400 text-gray-800 placeholder-gray-500 transition-all duration-150 ease-out hover:border-teal-300"
                        />
                        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all duration-150 ease-out transform active:scale-95 shadow-sm hover:shadow-md">
                      Lacak Status
                    </button>
                  </div>

                  {/* Info Text */}
                  <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Nomor tiket akan dikirimkan via email setelah pengaduan berhasil dikirim
                    </span>
                  </div>
                </div>

                {/* Status Examples */}
                <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Status Pengaduan
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center hover:bg-blue-100 transition-all duration-150 ease-out">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-blue-800 font-semibold text-sm">Diterima</span>
                      <p className="text-blue-600 text-xs mt-1">Pengaduan telah diterima</p>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center hover:bg-yellow-100 transition-all duration-150 ease-out">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <span className="text-yellow-800 font-semibold text-sm">Diproses</span>
                      <p className="text-yellow-600 text-xs mt-1">Sedang dalam proses</p>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center hover:bg-purple-100 transition-all duration-150 ease-out">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <span className="text-purple-800 font-semibold text-sm">Ditindaklanjuti</span>
                      <p className="text-purple-600 text-xs mt-1">Sedang ditindaklanjuti</p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center hover:bg-green-100 transition-all duration-150 ease-out">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-green-800 font-semibold text-sm">Selesai</span>
                      <p className="text-green-600 text-xs mt-1">Pengaduan selesai</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:sticky lg:top-6 lg:h-fit space-y-6">
            {/* Kategori Pengaduan */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">Kategori Pengaduan</h4>
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'Pelayanan Publik', color: 'bg-blue-50 text-blue-800 border border-blue-200 hover:bg-blue-100' },
                    { name: 'Program Perumahan', color: 'bg-green-50 text-green-800 border border-green-200 hover:bg-green-100' },
                    { name: 'Kawasan Permukiman', color: 'bg-purple-50 text-purple-800 border border-purple-200 hover:bg-purple-100' },
                    { name: 'Pertanahan', color: 'bg-yellow-50 text-yellow-800 border border-yellow-200 hover:bg-yellow-100' },
                    { name: 'Infrastruktur', color: 'bg-indigo-50 text-indigo-800 border border-indigo-200 hover:bg-indigo-100' },
                    { name: 'Lainnya', color: 'bg-gray-50 text-gray-800 border border-gray-200 hover:bg-gray-100' }
                  ].map((category, index) => (
                    <div key={index} className={`p-3 rounded-lg text-sm font-semibold transition-all duration-150 ease-out cursor-pointer ${category.color}`}>
                      {category.name}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Informasi Kontak */}
            <AnimatedSection>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Informasi Kontak
                </h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Unit Pengaduan:</span>
                    <p className="text-gray-600 mt-1">Bagian Umum dan Kepegawaian</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Alamat:</span>
                    <p className="text-gray-600 mt-1">Jl. Khatib Sulaiman No.25, Padang Utara, Kota Padang</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Telepon:</span>
                    <p className="text-gray-600 mt-1">(0751) 40522</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Email:</span>
                    <p className="text-gray-600 mt-1">pengaduan@perkimtan.sumbar.go.id</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Tips */}
            <AnimatedSection>
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-6">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2 text-white">Tips Pengaduan Efektif</h4>
                  <div className="text-blue-50 text-sm space-y-2 font-medium">
                    <p>✓ Sampaikan dengan jelas dan objektif</p>
                    <p>✓ Sertakan bukti pendukung yang valid</p>
                    <p>✓ Berikan data yang akurat dan lengkap</p>
                    <p>✓ Gunakan bahasa yang sopan dan santun</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection>
              <div className="bg-gradient-to-br from-red-600 to-pink-600 text-white rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="font-bold mb-2 text-white">Butuh Bantuan?</h4>
                <p className="text-pink-50 text-sm mb-4 font-medium">
                  Hubungi kami untuk bantuan pengisian form atau informasi lebih lanjut
                </p>
                <a
                  href="/kontak"
                  className="inline-block bg-white text-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-red-50 transition-colors"
                >
                  Hubungi Kami
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  )
}
