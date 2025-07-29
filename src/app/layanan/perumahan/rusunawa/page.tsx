import { Metadata } from 'next'
import AnimatedSection from '@/components/atoms/AnimatedSection'

export const metadata: Metadata = {
  title: 'Rumah Susun Sederhana (Rusunawa) | Dinas Perkimtan Sumbar',
  description: 'Informasi mengenai Program Rumah Susun Sederhana dari Dinas Perumahan, Kawasan Permukiman dan Pertanahan Sumatera Barat',
}

export default function RusunawaPage() {
  const service = {
    title: 'Rumah Susun Sederhana (Rusunawa)',
    description: 'Program pembangunan rumah susun sederhana untuk masyarakat berpenghasilan rendah dengan lokasi strategis dan fasilitas lengkap',
    duration: 'Sesuai ketersediaan unit',
    cost: 'Terjangkau (sesuai ketentuan)',
    location: 'Berbagai kota di Sumbar',
    output: 'Hunian Rusunawa'
  }

  const benefits = [
    'Hunian terjangkau bagi masyarakat berpenghasilan rendah',
    'Lokasi strategis dekat fasilitas umum dan transportasi',
    'Standar bangunan yang memenuhi syarat teknis keamanan',
    'Fasilitas lengkap: parkir, taman, dan ruang bersama',
    'Sistem keamanan dan petugas jaga 24 jam',
    'Desain modern dan fungsional sesuai kebutuhan keluarga'
  ]

  const requirements = [
    'Warga Negara Indonesia (WNI) berusia minimal 21 tahun',
    'Masyarakat berpenghasilan rendah sesuai kriteria yang ditetapkan',
    'Belum pernah memiliki rumah atau hunian tetap',
    'Berdomisili di wilayah Sumatera Barat minimal 2 tahun',
    'Memiliki pekerjaan tetap atau penghasilan yang dapat dipertanggungjawabkan',
    'Sanggup mematuhi peraturan dan tata tertib penghuni rusunawa'
  ]

  const locations = [
    {
      city: 'Kota Padang',
      buildings: [
        'Rusunawa Lambung Bukit',
        'Rusunawa Kampung Pondok',
        'Rusunawa Air Tawar',
        'Rusunawa Ulak Karang'
      ],
      color: 'blue'
    },
    {
      city: 'Kota Bukittinggi',
      buildings: [
        'Rusunawa Aur Kuning',
        'Rusunawa Benteng',
        'Rusunawa Guguk Panjang'
      ],
      color: 'purple'
    },
    {
      city: 'Kabupaten Padang Pariaman',
      buildings: [
        'Rusunawa Parit Malintang',
        'Rusunawa Lubuk Alung'
      ],
      color: 'green'
    }
  ]

  const features = [
    {
      title: 'Desain Modern',
      description: 'Bangunan dengan desain yang modern, fungsional dan ramah lingkungan',
      icon: '🏗️'
    },
    {
      title: 'Keamanan 24 Jam',
      description: 'Sistem keamanan terpadu dengan petugas jaga 24 jam',
      icon: '🔒'
    },
    {
      title: 'Lokasi Strategis',
      description: 'Dekat dengan pusat kota, sekolah, rumah sakit, dan fasilitas umum',
      icon: '📍'
    },
    {
      title: 'Fasilitas Lengkap',
      description: 'Area parkir luas, taman bermain, ruang serbaguna, dan mushola',
      icon: '🏢'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 border border-white/20">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto leading-relaxed">
                {service.description}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <AnimatedSection animation="fadeInUp" delay={100}>
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Tentang Program Rusunawa
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Program Rumah Susun Sederhana (Rusunawa) merupakan salah satu upaya pemerintah dalam 
                    menyediakan hunian yang layak dan terjangkau bagi masyarakat berpenghasilan rendah. 
                    Program ini bertujuan untuk mengatasi kebutuhan perumahan di daerah perkotaan yang 
                    semakin meningkat dengan keterbatasan lahan.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Rusunawa dirancang dengan konsep hunian vertikal yang efisien, dilengkapi dengan 
                    fasilitas penunjang dan sistem pengelolaan yang profesional untuk menciptakan 
                    lingkungan hunian yang nyaman dan berkelanjutan.
                  </p>
                </div>
              </AnimatedSection>

              {/* Manfaat */}
              <AnimatedSection animation="fadeInUp" delay={200}>
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Keuntungan Program Rusunawa</h2>
                  <div className="grid gap-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 bg-emerald-50 rounded-xl">
                        <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Persyaratan */}
              <AnimatedSection animation="fadeInUp" delay={300}>
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Persyaratan Calon Penghuni</h2>
                  <div className="grid gap-4">
                    {requirements.map((requirement, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-200">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white font-bold text-sm">{index + 1}</span>
                        </div>
                        <span className="text-gray-700 leading-relaxed">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Lokasi */}
              <AnimatedSection animation="fadeInUp" delay={400}>
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Lokasi Rusunawa di Sumatera Barat</h2>
                  <div className="grid gap-8">
                    {locations.map((location, index) => (
                      <div key={index} className={`bg-gradient-to-br from-${location.color}-50 to-${location.color}-100 rounded-xl p-6 border border-${location.color}-200`}>
                        <div className="flex items-center mb-4">
                          <div className={`w-12 h-12 bg-${location.color}-500 rounded-xl flex items-center justify-center mr-4`}>
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">{location.city}</h3>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {location.buildings.map((building, buildingIndex) => (
                            <div key={buildingIndex} className="flex items-center space-x-3">
                              <span className={`w-2 h-2 bg-${location.color}-500 rounded-full`}></span>
                              <span className="text-gray-700">{building}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Fitur */}
              <AnimatedSection animation="fadeInUp" delay={500}>
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Fitur dan Fasilitas</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                      <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                            <span className="text-2xl">{feature.icon}</span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Info Layanan */}
              <AnimatedSection animation="slideInRight" delay={100}>
                <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Layanan</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Ketersediaan</div>
                        <div className="text-gray-600">{service.duration}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Biaya</div>
                        <div className="text-gray-600">{service.cost}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Lokasi</div>
                        <div className="text-gray-600">{service.location}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Hasil</div>
                        <div className="text-gray-600">{service.output}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Contact */}
              <AnimatedSection animation="slideInRight" delay={200}>
                <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Butuh Informasi?</h3>
                  <p className="text-emerald-100 mb-6 leading-relaxed">
                    Tim kami siap memberikan informasi lengkap mengenai Program Rusunawa
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <span className="text-white">(0751) 7051234</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-white text-xs">perumahan@perkimtan.sumbarprov.go.id</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-emerald-100 text-sm leading-relaxed">
                      <strong>Jam Pelayanan:</strong><br />
                      Senin - Jumat: 08:00 - 16:00 WIB<br />
                      Istirahat: 12:00 - 13:00 WIB
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
