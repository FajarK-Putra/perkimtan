'use client'

import { useState, useRef, useEffect } from 'react'
import { Metadata } from 'next'
import { dinasProfile } from '@/lib/data'
import AnimatedSection from '@/components/atoms/AnimatedSection'

// export const metadata: Metadata = {
//   title: 'Kontak Kami | Dinas Perkimtan Sumbar',
//   description: 'Hubungi Dinas Perumahan, Kawasan Permukiman dan Pertanahan Sumatera Barat untuk informasi dan layanan',
// }

export default function KontakPage() {
  const [selectedSubjek, setSelectedSubjek] = useState('')
  const [isSubjekOpen, setIsSubjekOpen] = useState(false)
  const subjekRef = useRef<HTMLDivElement>(null)

  const subjekOptions = [
    { value: 'perumahan', label: 'Perumahan dan Rumah Subsidi' },
    { value: 'kawasan', label: 'Kawasan Permukiman' },
    { value: 'pertanahan', label: 'Pertanahan dan Sertifikat' },
    { value: 'pengaduan', label: 'Pengaduan Layanan' },
    { value: 'informasi', label: 'Permintaan Informasi' },
    { value: 'lainnya', label: 'Lainnya' }
  ]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (subjekRef.current && !subjekRef.current.contains(event.target as Node)) {
        setIsSubjekOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

      return (
    <div className="min-h-screen bg-gray-50">
      <style dangerouslySetInnerHTML={{
        __html: `
          * {
            outline: none !important;
          }
          input:focus, select:focus, textarea:focus, button:focus {
            outline: none !important;
            box-shadow: none !important;
          }
        `
      }} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 sm:py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hubungi <span className="text-yellow-300">Kami</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Kami siap membantu Anda dengan informasi dan layanan terbaik
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Info Layanan */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      Informasi Layanan Kontak
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
                        <p className="text-blue-800 text-sm font-medium">Maksimal 3 hari kerja</p>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 hover:bg-green-100 transition-all duration-150 ease-out">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center">
                            <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <span className="text-green-900 font-semibold text-sm">Kerahasiaan</span>
                        </div>
                        <p className="text-green-800 text-sm font-medium">Data pribadi terlindungi</p>
                      </div>
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 hover:bg-purple-100 transition-all duration-150 ease-out">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center">
                            <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <span className="text-purple-900 font-semibold text-sm">Email Notifikasi</span>
                        </div>
                        <p className="text-purple-800 text-sm font-medium">Konfirmasi otomatis</p>
                      </div>
                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 hover:bg-orange-100 transition-all duration-150 ease-out">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-6 h-6 bg-orange-100 rounded-lg flex items-center justify-center">
                            <svg className="w-3 h-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <span className="text-orange-900 font-semibold text-sm">Layanan 24/7</span>
                        </div>
                        <p className="text-orange-800 text-sm font-medium">Form tersedia setiap saat</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            {/* Form Kirim Pesan */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-start gap-4 mb-8">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Form Kirim Pesan
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Lengkapi formulir di bawah ini dengan data yang benar dan jelas
                    </p>
                  </div>
                </div>

                <form className="space-y-8">
                  {/* Data Pengirim */}
                  <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      Data Pengirim
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="nama_lengkap" className="block text-sm font-semibold text-gray-700 mb-2">
                          Nama Lengkap *
                        </label>
                        <input
                          type="text"
                          id="nama_lengkap"
                          name="nama_lengkap"
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-400 text-gray-800 placeholder-gray-500 transition-all duration-150 ease-out hover:border-teal-300"
                          placeholder="Masukkan nama lengkap"
                        />
                      </div>

                      <div>
                        <label htmlFor="email_pengirim" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email_pengirim"
                          name="email_pengirim"
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-400 text-gray-800 placeholder-gray-500 transition-all duration-150 ease-out hover:border-teal-300"
                          placeholder="contoh@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="telepon_pengirim" className="block text-sm font-semibold text-gray-700 mb-2">
                          Nomor Telepon
                        </label>
                        <input
                          type="tel"
                          id="telepon_pengirim"
                          name="telepon_pengirim"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-400 text-gray-800 placeholder-gray-500 transition-all duration-150 ease-out hover:border-teal-300"
                          placeholder="08xx-xxxx-xxxx"
                        />
                      </div>

                      <div>
                        <label htmlFor="instansi" className="block text-sm font-semibold text-gray-700 mb-2">
                          Instansi/Organisasi
                        </label>
                        <input
                          type="text"
                          id="instansi"
                          name="instansi"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-400 text-gray-800 placeholder-gray-500 transition-all duration-150 ease-out hover:border-teal-300"
                          placeholder="Nama instansi (opsional)"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Detail Pesan */}
                  <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      Detail Pesan
                    </h4>

                    <div className="space-y-6">
                      <div>
                        <label htmlFor="subjek_pesan" className="block text-sm font-semibold text-gray-700 mb-2">
                          Subjek Pesan *
                        </label>
                        <div ref={subjekRef} className="relative">
                          <button
                            type="button"
                            onClick={() => setIsSubjekOpen(!isSubjekOpen)}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-400 text-gray-800 transition-all duration-150 ease-out hover:border-teal-300 cursor-pointer bg-white flex items-center justify-between"
                          >
                            <span className={selectedSubjek ? 'text-gray-800' : 'text-gray-500'}>
                              {selectedSubjek ? subjekOptions.find(opt => opt.value === selectedSubjek)?.label : 'Pilih subjek pesan'}
                            </span>
                            <svg className={`w-4 h-4 transition-transform duration-150 ${isSubjekOpen ? 'rotate-180' : ''} text-gray-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          
                          {isSubjekOpen && (
                            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
                              {subjekOptions.map((option) => (
                                <button
                                  key={option.value}
                                  type="button"
                                  className="w-full px-4 py-3 text-left hover:bg-teal-50 hover:text-teal-700 transition-all duration-150 ease-out text-gray-800 first:rounded-t-lg last:rounded-b-lg"
                                  onClick={() => {
                                    setSelectedSubjek(option.value)
                                    setIsSubjekOpen(false)
                                  }}
                                >
                                  {option.label}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                        <input type="hidden" name="subjek_pesan" value={selectedSubjek} />
                      </div>

                      <div>
                        <label htmlFor="isi_pesan" className="block text-sm font-semibold text-gray-700 mb-2">
                          Isi Pesan *
                        </label>
                        <textarea
                          id="isi_pesan"
                          name="isi_pesan"
                          rows={6}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-400 text-gray-800 placeholder-gray-500 transition-all duration-150 ease-out hover:border-teal-300 resize-none"
                          placeholder="Tuliskan pesan, pertanyaan, atau informasi yang ingin Anda sampaikan..."
                        ></textarea>
                      </div>

                      <div>
                        <label htmlFor="lampiran" className="block text-sm font-semibold text-gray-700 mb-2">
                          Lampiran (Opsional)
                        </label>
                        <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center hover:border-teal-300 transition-all duration-150 ease-out">
                          <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <p className="text-gray-600 text-sm mb-2">
                            Klik untuk memilih file atau drag & drop
                          </p>
                          <p className="text-xs text-gray-500">
                            File maksimal 10MB (PDF, DOC, JPG, PNG)
                          </p>
                          <input
                            type="file"
                            id="lampiran"
                            name="lampiran"
                            multiple
                            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                            className="hidden"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Checkbox Persetujuan */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <input
                        id="persetujuan"
                        name="persetujuan"
                        type="checkbox"
                        required
                        className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-2 mt-1"
                      />
                      <label htmlFor="persetujuan" className="text-sm text-gray-700">
                        Saya setuju bahwa data yang saya berikan akan digunakan untuk merespons pesan ini sesuai dengan 
                        <span className="font-semibold text-blue-600"> kebijakan privasi</span> dan tidak akan dibagikan kepada pihak ketiga tanpa persetujuan. *
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                    >
                      <span className="flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Kirim Pesan
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </AnimatedSection>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:sticky lg:top-6 lg:h-fit space-y-6">
            {/* Kategori Layanan */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">Subjek Pesan</h4>
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'Perumahan & Subsidi', color: 'bg-blue-50 text-blue-800 border border-blue-200 hover:bg-blue-100' },
                    { name: 'Kawasan Permukiman', color: 'bg-green-50 text-green-800 border border-green-200 hover:bg-green-100' },
                    { name: 'Pertanahan & Sertifikat', color: 'bg-purple-50 text-purple-800 border border-purple-200 hover:bg-purple-100' },
                    { name: 'Pengaduan Layanan', color: 'bg-red-50 text-red-800 border border-red-200 hover:bg-red-100' },
                    { name: 'Permintaan Informasi', color: 'bg-yellow-50 text-yellow-800 border border-yellow-200 hover:bg-yellow-100' },
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
              <div className="bg-gradient-to-br from-blue-50 to-green-50 border border-blue-100 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Informasi Kontak
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Telepon</p>
                      <p className="text-gray-600">(0751) 7051711</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">info@perkimtan.sumbar.go.id</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Alamat</p>
                      <p className="text-gray-600">Jl. Raya By Pass KM. 10 Padang, Sumatera Barat</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Jam Layanan */}
            <AnimatedSection>
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Jam Layanan
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-medium">Senin - Jumat</span>
                    <span className="text-gray-900 font-semibold">08:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-medium">Istirahat</span>
                    <span className="text-gray-900 font-semibold">12:00 - 13:00</span>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-2 mt-3">
                    <p className="text-red-800 text-xs font-medium">
                      Form online tersedia 24/7 untuk kemudahan Anda
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Lokasi Kantor Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kunjungi kantor kami untuk konsultasi langsung atau pengajuan dokumen
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl p-4 border border-gray-100">
            <div className="aspect-video bg-gray-100 rounded-2xl flex items-center justify-center">
              <div className="text-center text-gray-500">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="text-lg font-medium">Peta Lokasi</p>
                <p className="text-sm">Integrasi peta akan ditambahkan di sini</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
