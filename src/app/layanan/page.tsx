'use client'

import AnimatedSection from '@/components/atoms/AnimatedSection'

export default function LayananPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Layanan Kami
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Berbagai layanan terpadu untuk masyarakat Sumatera Barat
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Under Development Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-blue-200">
                {/* Status Banner */}
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 px-6 py-4">
                  <div className="flex items-center justify-center gap-3">
                    <svg className="w-6 h-6 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-white font-bold text-lg">Dalam Pengembangan</span>
                  </div>
                </div>

                {/* Main Content */}
                <div className="p-8 md:p-12">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full mb-6">
                      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Sistem Layanan Sedang Dikembangkan
                    </h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
                      Kami sedang mengembangkan sistem layanan digital yang lebih baik untuk melayani masyarakat 
                      dengan lebih cepat, mudah, dan transparan.
                    </p>
                  </div>

                  {/* Coming Soon Features */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Layanan yang Akan Hadir</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Layanan Perumahan</h4>
                            <ul className="space-y-2 text-gray-700">
                              <li className="flex items-start gap-2 font-medium">
                                <span className="text-blue-600 font-bold mt-1">•</span>
                                <span>Perizinan Pembangunan Perumahan</span>
                              </li>
                              <li className="flex items-start gap-2 font-medium">
                                <span className="text-blue-600 font-bold mt-1">•</span>
                                <span>Program Bantuan Stimulan Perumahan (BSPS)</span>
                              </li>
                              <li className="flex items-start gap-2 font-medium">
                                <span className="text-blue-600 font-bold mt-1">•</span>
                                <span>Fasilitas Likuiditas Pembiayaan Perumahan (FLPP)</span>
                              </li>
                              <li className="flex items-start gap-2 font-medium">
                                <span className="text-blue-600 font-bold mt-1">•</span>
                                <span>Rumah Susun Sederhana Sewa (Rusunawa)</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-200">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Kawasan Permukiman</h4>
                            <ul className="space-y-2 text-gray-700">
                              <li className="flex items-start gap-2 font-medium">
                                <span className="text-green-600 font-bold mt-1">•</span>
                                <span>Penataan dan Revitalisasi Kawasan</span>
                              </li>
                              <li className="flex items-start gap-2 font-medium">
                                <span className="text-green-600 font-bold mt-1">•</span>
                                <span>Program Penanganan Kawasan Kumuh</span>
                              </li>
                              <li className="flex items-start gap-2 font-medium">
                                <span className="text-green-600 font-bold mt-1">•</span>
                                <span>Pembangunan Infrastruktur Permukiman</span>
                              </li>
                              <li className="flex items-start gap-2 font-medium">
                                <span className="text-green-600 font-bold mt-1">•</span>
                                <span>Program KOTAKU (Kota Tanpa Kumuh)</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-200">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Pertanahan</h4>
                            <ul className="space-y-2 text-gray-700">
                              <li className="flex items-start gap-2 font-medium">
                                <span className="text-purple-600 font-bold mt-1">•</span>
                                <span>Sertifikasi Tanah untuk Masyarakat</span>
                              </li>
                              <li className="flex items-start gap-2 font-medium">
                                <span className="text-purple-600 font-bold mt-1">•</span>
                                <span>Program Legalisasi Aset Tanah</span>
                              </li>
                              <li className="flex items-start gap-2 font-medium">
                                <span className="text-purple-600 font-bold mt-1">•</span>
                                <span>Mediasi Penyelesaian Sengketa Tanah</span>
                              </li>
                              <li className="flex items-start gap-2 font-medium">
                                <span className="text-purple-600 font-bold mt-1">•</span>
                                <span>Konsultasi Hukum Pertanahan</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-2 border-orange-200">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Layanan Digital</h4>
                            <ul className="space-y-2 text-gray-700">
                              <li className="flex items-start gap-2 font-medium">
                                <span className="text-orange-600 font-bold mt-1">•</span>
                                <span>Pengajuan Permohonan Online</span>
                              </li>
                              <li className="flex items-start gap-2 font-medium">
                                <span className="text-orange-600 font-bold mt-1">•</span>
                                <span>Tracking Status Permohonan</span>
                              </li>
                              <li className="flex items-start gap-2 font-medium">
                                <span className="text-orange-600 font-bold mt-1">•</span>
                                <span>Konsultasi Online dengan Petugas</span>
                              </li>
                              <li className="flex items-start gap-2 font-medium">
                                <span className="text-orange-600 font-bold mt-1">•</span>
                                <span>Download Dokumen & Formulir</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Estimasi Waktu Peluncuran</h3>
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-2 border-blue-200">
                      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-2xl font-bold text-white">Q4</span>
                          </div>
                          <div className="font-bold text-gray-900 text-lg">2025</div>
                          <div className="text-sm text-gray-600 font-medium">Target Peluncuran</div>
                        </div>
                        <div className="hidden md:block">
                          <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                        <div className="text-center">
                          <div className="text-gray-700 font-medium">
                            <p className="text-base mb-2 font-bold">Fitur yang akan hadir:</p>
                            <p className="text-sm">✅ Registrasi & Login</p>
                            <p className="text-sm">✅ Dashboard Pengguna</p>
                            <p className="text-sm">✅ Pengajuan Layanan</p>
                            <p className="text-sm">✅ Notifikasi Real-time</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                      Butuh Bantuan Sekarang?
                    </h3>
                    <p className="text-center text-gray-700 mb-6 font-medium">
                      Sementara sistem digital sedang dikembangkan, Anda dapat menghubungi kami melalui:
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <a
                        href="tel:07517051234"
                        className="flex flex-col items-center gap-3 bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all"
                      >
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-500 font-medium mb-1">Telepon</div>
                          <div className="font-bold text-gray-900">(0751) 7051234</div>
                        </div>
                      </a>

                      <a
                        href="mailto:info@perkimtan.sumbarprov.go.id"
                        className="flex flex-col items-center gap-3 bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all"
                      >
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-500 font-medium mb-1">Email</div>
                          <div className="font-bold text-gray-900 text-sm">info@perkimtan...</div>
                        </div>
                      </a>

                      <div className="flex flex-col items-center gap-3 bg-white p-6 rounded-lg border-2 border-gray-200">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-500 font-medium mb-1">Kunjungi Kantor</div>
                          <div className="font-bold text-gray-900 text-sm">Jl. Khatib Sulaiman</div>
                          <div className="text-xs text-gray-600 font-medium">Padang, Sumatera Barat</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  )
}