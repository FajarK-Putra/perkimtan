import { Metadata } from 'next'
import AnimatedSection from '@/components/atoms/AnimatedSection'

export const metadata: Metadata = {
  title: 'Penataan Kawasan | Dinas Perkimtan Sumbar',
  description: 'Program penataan kawasan permukiman untuk menciptakan lingkungan hunian yang tertata dan berkelanjutan',
}

export default function PenataanKawasanPage() {
  const penataanData = {
    name: 'Penataan Kawasan Permukiman',
    description: 'Program penataan dan pengembangan kawasan permukiman untuk menciptakan lingkungan hunian yang tertata, nyaman, dan berkelanjutan',
    tujuan: [
      'Menciptakan kawasan permukiman yang tertata',
      'Meningkatkan kualitas lingkungan hunian', 
      'Mengoptimalkan pemanfaatan ruang',
      'Menyediakan infrastruktur yang memadai'
    ],
    prosedur: [
      'Identifikasi lokasi dan analisis kebutuhan',
      'Penyusunan rencana detail kawasan',
      'Koordinasi dengan stakeholder terkait',
      'Pelaksanaan pembangunan infrastruktur',
      'Pengembangan fasilitas pendukung',
      'Monitoring dan evaluasi hasil'
    ],
    manfaat: [
      'Lingkungan hunian yang tertata dan nyaman',
      'Infrastruktur permukiman yang memadai',
      'Peningkatan nilai properti kawasan',
      'Akses mudah ke fasilitas umum',
      'Kualitas hidup masyarakat yang lebih baik',
      'Kawasan yang ramah lingkungan'
    ],
    fiturUtama: [
      {
        icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
        title: 'Perencanaan Terpadu',
        description: 'Rencana detail kawasan yang terintegrasi dan berkelanjutan'
      },
      {
        icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
        title: 'Infrastruktur Lengkap',
        description: 'Pembangunan jalan, drainase, utilitas, dan fasilitas umum'
      },
      {
        icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064',
        title: 'Ruang Terbuka Hijau',
        description: 'Taman, area bermain, dan ruang publik yang tertata'
      },
      {
        icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        title: 'Berkelanjutan',
        description: 'Pengembangan kawasan ramah lingkungan dan sustainable'
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 border border-white/20">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Penataan Kawasan Permukiman
              </h1>
              <div className="text-2xl md:text-3xl font-semibold text-green-100 mb-6">
                Kawasan Tertata & Berkelanjutan
              </div>
              <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
                {penataanData.description}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-white to-teal-50 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(34,197,94,0.1)_1px,transparent_0)] [background-size:20px_20px] pointer-events-none"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <AnimatedSection>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/50">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Tentang Program Penataan Kawasan
                    </h2>
                  </div>
                  
                  <div className="prose max-w-none text-gray-600">
                    <p className="leading-relaxed">
                      Penataan kawasan permukiman merupakan upaya strategis untuk menciptakan 
                      lingkungan hunian yang berkualitas, tertata, dan berkelanjutan. Program ini 
                      meliputi perencanaan tata ruang, pengembangan infrastruktur, dan peningkatan 
                      kualitas lingkungan permukiman.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Main Features Section */}
              <AnimatedSection>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/50">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Fitur Utama Program
                    </h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {penataanData.fiturUtama.map((fitur, index) => (
                      <div key={index} className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-100">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={fitur.icon} />
                            </svg>
                          </div>
                          <h4 className="font-bold text-gray-900">{fitur.title}</h4>
                        </div>
                        <p className="text-gray-600">{fitur.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Objectives Section */}
              <AnimatedSection>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/50">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Tujuan Program
                    </h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {penataanData.tujuan.map((tujuan: string, index: number) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-blue-50 rounded-xl">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">{tujuan}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Procedure Section */}
              <AnimatedSection>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/50">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Tahapan Pelaksanaan
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {penataanData.prosedur.map((langkah: string, index: number) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-orange-50 rounded-xl">
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">{index + 1}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-700 font-medium">{langkah}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Benefits Section */}
              <AnimatedSection>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/50">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Manfaat Program
                    </h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {penataanData.manfaat.map((manfaat: string, index: number) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-indigo-50 rounded-xl">
                        <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">{manfaat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Service Info */}
                <AnimatedSection>
                  <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl p-6 text-white shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold">Informasi Layanan</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-white/20">
                        <span className="text-sm opacity-90">Waktu Layanan</span>
                        <span className="text-sm font-medium">08:00 - 16:00 WIB</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-white/20">
                        <span className="text-sm opacity-90">Hari Kerja</span>
                        <span className="text-sm font-medium">Senin - Jumat</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-white/20">
                        <span className="text-sm opacity-90">Biaya</span>
                        <span className="text-sm font-medium">Gratis</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-sm opacity-90">Estimasi</span>
                        <span className="text-sm font-medium">60 Hari Kerja</span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Target Program */}
                <AnimatedSection>
                  <div className="bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 rounded-2xl p-6 text-white shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold">Target Program 2024</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                        <h4 className="font-medium text-sm mb-1">Luas Kawasan</h4>
                        <p className="text-xl font-bold">500 Ha</p>
                        <p className="text-xs opacity-90">Kawasan tertata</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                        <h4 className="font-medium text-sm mb-1">Anggaran</h4>
                        <p className="text-xl font-bold">Rp 50 M</p>
                        <p className="text-xs opacity-90">Total anggaran</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                        <h4 className="font-medium text-sm mb-1">Lokasi</h4>
                        <p className="text-xl font-bold">19 Kab/Kota</p>
                        <p className="text-xs opacity-90">Di Sumbar</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Contact Info */}
                <AnimatedSection>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/50">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Hubungi Kami</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      Informasi lebih lanjut tentang Program Penataan Kawasan
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center p-3 bg-blue-50 rounded-xl">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm">Bidang Kawasan</p>
                          <p className="text-xs text-gray-600">Dinas Perkimtan</p>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-green-50 rounded-xl">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm">(0751) 7051711</p>
                          <p className="text-xs text-gray-600">Telepon</p>
                        </div>
                      </div>
                      <div className="flex items-start p-3 bg-purple-50 rounded-xl">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                          <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="min-w-0">
                          <p className="font-medium text-gray-900 text-xs break-words">kawasan@perkimtan.sumbarprov.go.id</p>
                          <p className="text-xs text-gray-600">Email</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
