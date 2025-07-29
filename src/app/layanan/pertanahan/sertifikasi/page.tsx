import { Metadata } from 'next'
import AnimatedSection from '@/components/atoms/AnimatedSection'

export const metadata: Metadata = {
  title: 'Sertifikasi Tanah | Dinas Perkimtan Sumbar',
  description: 'Layanan sertifikasi tanah untuk memberikan kepastian hukum atas tanah di Sumatera Barat'
}

export default function SertifikasiTanahPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-green-700 to-teal-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 sm:py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Sertifikasi <span className="text-yellow-300">Tanah</span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
              Layanan sertifikasi tanah untuk memberikan kepastian hukum atas tanah di Sumatera Barat
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
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      Tentang Sertifikasi Tanah
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Sertifikasi tanah adalah proses pemberian sertifikat sebagai tanda bukti hak yang sah
                      atas bidang tanah tertentu. Program ini memberikan kepastian hukum dan perlindungan
                      hak atas tanah bagi masyarakat Sumatera Barat.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <div className="bg-emerald-50 rounded-lg p-4 text-center">
                        <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-1">Kepastian Hukum</h4>
                        <p className="text-xs text-gray-600">Perlindungan hak atas tanah</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4 text-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-1">Jaminan Investasi</h4>
                        <p className="text-xs text-gray-600">Keamanan investasi properti</p>
                      </div>
                      <div className="bg-yellow-50 rounded-lg p-4 text-center">
                        <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-1">Proses Cepat</h4>
                        <p className="text-xs text-gray-600">Efisien dan transparan</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Jenis Sertifikat */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Jenis Sertifikat Tanah
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 border border-emerald-200">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">SHM</span>
                          </div>
                          <h4 className="font-bold text-gray-900">Sertifikat Hak Milik</h4>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">
                          Hak turun temurun, terkuat dan terpenuh yang dapat dipunyai orang atas tanah.
                        </p>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                            Berlaku selamanya
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                            Dapat dipindahtangankan
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                            Dapat dijadikan jaminan
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">SHGB</span>
                          </div>
                          <h4 className="font-bold text-gray-900">Sertifikat Hak Guna Bangunan</h4>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">
                          Hak untuk mendirikan dan mempunyai bangunan-bangunan atas tanah.
                        </p>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            Berlaku 30 tahun
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            Dapat diperpanjang 20 tahun
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            Dapat dipindahtangankan
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">SHP</span>
                          </div>
                          <h4 className="font-bold text-gray-900">Sertifikat Hak Pakai</h4>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">
                          Hak untuk menggunakan dan/atau memungut hasil dari tanah.
                        </p>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            Berlaku 25 tahun
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            Dapat diperpanjang
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            Sesuai ketentuan yang berlaku
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">SHGU</span>
                          </div>
                          <h4 className="font-bold text-gray-900">Sertifikat Hak Guna Usaha</h4>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">
                          Hak untuk mengusahakan tanah yang dikuasai negara untuk pertanian.
                        </p>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            Berlaku 25-35 tahun
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            Dapat diperpanjang
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            Untuk usaha pertanian
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Persyaratan */}
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
                      Persyaratan Sertifikasi
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          Dokumen Umum
                        </h4>
                        <div className="space-y-3">
                          {[
                            'Fotokopi KTP yang masih berlaku',
                            'Fotokopi Kartu Keluarga',
                            'Surat permohonan bermaterai',
                            'Surat keterangan tidak sengketa dari kelurahan'
                          ].map((doc, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600 text-sm">{doc}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-emerald-50 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                          </svg>
                          Dokumen Tanah
                        </h4>
                        <div className="space-y-3">
                          {[
                            'Fotokopi bukti kepemilikan tanah',
                            'Surat ukur/gambar situasi',
                            'SPPT PBB tahun berjalan',
                            'Surat pernyataan penguasaan fisik bidang tanah'
                          ].map((doc, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600 text-sm">{doc}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Alur Proses */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Alur Proses Sertifikasi
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {[
                        { title: 'Pengajuan', desc: 'Mengajukan permohonan dengan melengkapi dokumen', color: 'green' },
                        { title: 'Verifikasi', desc: 'Pemeriksaan kelengkapan dan keabsahan dokumen', color: 'blue' },
                        { title: 'Pengukuran', desc: 'Pengukuran dan pemetaan bidang tanah', color: 'purple' },
                        { title: 'Penerbitan', desc: 'Penerbitan sertifikat tanah', color: 'orange' }
                      ].map((step, index) => (
                        <div key={index} className="text-center">
                          <div className={`w-16 h-16 bg-${step.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                            <span className={`text-${step.color}-600 font-bold text-xl`}>{index + 1}</span>
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                          <p className="text-gray-600 text-sm">{step.desc}</p>
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
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">Informasi Layanan</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-600">Waktu Proses:</span>
                    <span className="text-gray-900 font-semibold">60-90 hari kerja</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-600">Biaya:</span>
                    <span className="text-emerald-600 font-bold">Sesuai Ketentuan</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Informasi Kontak */}
            <AnimatedSection>
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Informasi Kontak
                </h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Bidang Pertanahan:</span>
                    <p className="text-gray-600 mt-1">Dinas Perumahan, Kawasan Permukiman dan Pertanahan Sumbar</p>
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
                    <p className="text-gray-600 mt-1">pertanahan@perkimtan.sumbar.go.id</p>
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
                  <h4 className="font-bold mb-2">Tips Penting</h4>
                  <p className="text-blue-100 text-sm mb-4">
                    Pastikan semua dokumen lengkap dan sah untuk mempercepat proses sertifikasi
                  </p>
                  <div className="text-blue-100 text-xs">
                    ✓ Siapkan dokumen asli untuk verifikasi<br/>
                    ✓ Pastikan data PBB up to date<br/>
                    ✓ Koordinasi dengan RT/RW setempat
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection>
              <div className="bg-gradient-to-br from-emerald-600 to-green-600 text-white rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="font-bold mb-2">Mulai Sertifikasi</h4>
                <p className="text-emerald-100 text-sm mb-4">
                  Dapatkan kepastian hukum atas tanah Anda dengan layanan sertifikasi kami
                </p>
                <a
                  href="/kontak"
                  className="inline-block bg-white text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-colors"
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
