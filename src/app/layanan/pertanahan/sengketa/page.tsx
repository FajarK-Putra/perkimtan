import { Metadata } from 'next'
import AnimatedSection from '@/components/atoms/AnimatedSection'

export const metadata: Metadata = {
  title: 'Penyelesaian Sengketa | Dinas Perkimtan Sumbar',
  description: 'Layanan penyelesaian sengketa pertanahan oleh Dinas Perumahan, Kawasan Permukiman dan Pertanahan Sumatera Barat'
}

export default function SengketaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-red-700 to-orange-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 sm:py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Penyelesaian <span className="text-yellow-300">Sengketa Pertanahan</span>
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
              Layanan mediasi dan penyelesaian sengketa pertanahan untuk menciptakan kepastian hukum
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tentang Layanan */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      Tentang Layanan Penyelesaian Sengketa
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Sengketa pertanahan merupakan permasalahan yang sering terjadi di masyarakat. 
                      Untuk itu, Dinas Perkimtan Sumbar menyediakan layanan mediasi dan penyelesaian 
                      sengketa pertanahan sebagai alternatif penyelesaian di luar pengadilan.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Layanan ini bertujuan untuk menyelesaikan konflik pertanahan secara damai, 
                      adil, dan berkelanjutan dengan melibatkan semua pihak yang berkepentingan 
                      melalui proses mediasi yang profesional.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Jenis Sengketa */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Jenis Sengketa yang Ditangani
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        'Sengketa batas tanah',
                        'Sengketa kepemilikan',
                        'Sengketa hak milik',
                        'Sengketa warisan tanah',
                        'Sengketa ganti rugi',
                        'Sengketa penggunaan tanah'
                      ].map((type, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 font-medium">{type}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Alur Proses */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Alur Proses Penyelesaian Sengketa
                    </h3>
                    <div className="space-y-4">
                      {[
                        'Pendaftaran permohonan mediasi',
                        'Verifikasi dokumen dan identitas',
                        'Penjadwalan mediasi',
                        'Pelaksanaan mediasi oleh tim ahli',
                        'Kesepakatan para pihak',
                        'Penerbitan berita acara kesepakatan'
                      ].map((step, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-700 font-medium">{step}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Persyaratan Dokumen */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Persyaratan Dokumen
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        'Surat permohonan mediasi',
                        'Fotokopi KTP semua pihak',
                        'Dokumen bukti kepemilikan tanah',
                        'Surat keterangan dari RT/RW',
                        'Sketsa/denah lokasi sengketa',
                        'Kronologi sengketa',
                        'Bukti-bukti pendukung lainnya'
                      ].map((req, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 font-medium">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Keuntungan Mediasi */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Keuntungan Mediasi
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        'Penyelesaian sengketa secara damai',
                        'Biaya lebih murah dibanding jalur hukum',
                        'Proses lebih cepat dan efisien',
                        'Mempertahankan hubungan baik antar pihak',
                        'Kepastian hukum bagi semua pihak',
                        'Mencegah eskalasi konflik'
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                          <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:sticky lg:top-6 lg:h-fit space-y-6">
            {/* Info Layanan */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">Informasi Layanan</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-600">Waktu Proses:</span>
                    <span className="text-gray-900 font-semibold">30-60 hari kerja</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-600">Biaya:</span>
                    <span className="text-green-600 font-bold">GRATIS</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Informasi Kontak */}
            <AnimatedSection>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Informasi Kontak
                </h4>
                <div className="space-y-3 text-sm">
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
                    <p className="text-gray-600 mt-1">perkimtan@sumbarprov.go.id</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Layanan Darurat */}
            <AnimatedSection>
              <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-2xl p-6">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2">Layanan Darurat</h4>
                  <p className="text-red-100 text-sm mb-4">
                    Untuk sengketa mendesak yang memerlukan penanganan segera
                  </p>
                  <div className="text-white font-bold text-lg">
                    Hotline: 0751-7051234
                  </div>
                  <p className="text-red-100 text-xs mt-1">(24 Jam)</p>
                </div>
              </div>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection>
              <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="font-bold mb-2">Butuh Mediasi?</h4>
                <p className="text-orange-100 text-sm mb-4">
                  Hubungi kami untuk konsultasi dan penyelesaian sengketa pertanahan
                </p>
                <a
                  href="/kontak"
                  className="inline-block bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-colors"
                >
                  Konsultasi Sekarang
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  )
}
