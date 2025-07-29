import { Metadata } from 'next'
import AnimatedSection from '@/components/atoms/AnimatedSection'

export const metadata: Metadata = {
  title: 'Bantuan Stimulan Perumahan Swadaya (BSPS) | Dinas Perkimtan Sumbar',
  description: 'Bantuan Stimulan Perumahan Swadaya (BSPS) untuk perbaikan rumah tidak layak huni di Sumatera Barat oleh Dinas Perumahan, Kawasan Permukiman dan Pertanahan',
}

export default function BSPSPage() {
  const service = {
    title: 'Bantuan Stimulan Perumahan Swadaya (BSPS)',
    description: 'Program bantuan pemerintah untuk perbaikan rumah tidak layak huni bagi masyarakat berpenghasilan rendah dengan pendampingan teknis komprehensif',
    duration: 'Sesuai ketersediaan anggaran',
    cost: 'Gratis (bantuan pemerintah)',
    location: 'Seluruh Kab/Kota Sumbar',
    output: 'Rumah layak huni'
  }

  const jenisbantuan = [
    'Bantuan material bangunan (semen, batu bata, genteng, dll)',
    'Bantuan peralatan konstruksi dan alat kerja',
    'Pendampingan teknis dari tenaga ahli berpengalaman',
    'Pelatihan konstruksi sederhana untuk pemilik rumah',
    'Monitoring dan evaluasi selama proses pembangunan',
    'Bantuan desain rumah sehat dan layak huni'
  ]

  const kriteria = [
    'Rumah dalam kondisi tidak layak huni berdasarkan survei teknis',
    'Pemilik rumah merupakan masyarakat berpenghasilan rendah (MBR)',
    'Memiliki surat bukti kepemilikan tanah yang sah dan legal',
    'Belum pernah menerima bantuan perbaikan rumah serupa',
    'Bersedia mengikuti program pendampingan yang diberikan',
    'Rumah berada di wilayah Provinsi Sumatera Barat'
  ]

  const prosedur = [
    { 
      step: 1, 
      title: "Pendaftaran di Kelurahan/Desa", 
      desc: "Mengajukan permohonan ke kelurahan/desa setempat dengan membawa dokumen persyaratan lengkap",
      icon: "📝"
    },
    { 
      step: 2, 
      title: "Survei dan Verifikasi", 
      desc: "Tim teknis melakukan survei lapangan untuk memverifikasi kondisi rumah dan kelengkapan data",
      icon: "🔍"
    },
    { 
      step: 3, 
      title: "Seleksi dan Penetapan", 
      desc: "Penetapan penerima bantuan berdasarkan hasil verifikasi dan ketersediaan anggaran",
      icon: "✅"
    },
    { 
      step: 4, 
      title: "Penyaluran Bantuan", 
      desc: "Penyerahan bantuan material dan pelaksanaan pendampingan teknis pembangunan",
      icon: "🏗️"
    },
    { 
      step: 5, 
      title: "Monitoring & Evaluasi", 
      desc: "Pemantauan progres pembangunan dan evaluasi hasil perbaikan rumah",
      icon: "📊"
    }
  ]

  const manfaat = [
    'Rumah menjadi layak huni dengan standar kesehatan dan keamanan',
    'Peningkatan kualitas hidup dan kesehatan keluarga',
    'Pengetahuan dan keterampilan konstruksi sederhana',
    'Nilai aset properti yang meningkat',
    'Lingkungan hunian yang lebih tertata dan sehat',
    'Kemandirian dalam pemeliharaan rumah di masa depan'
  ]

  const targets = [
    {
      number: '500+',
      description: 'Unit rumah target perbaikan tahun 2024',
      icon: '🏠'
    },
    {
      number: '19',
      description: 'Kabupaten/Kota di Sumatera Barat',
      icon: '🗺️'
    },
    {
      number: '100%',
      description: 'Pendampingan teknis untuk setiap penerima',
      icon: '👷'
    },
    {
      number: '24',
      description: 'Bulan masa garansi pendampingan',
      icon: '🛡️'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 border border-white/20">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Bantuan Stimulan Perumahan Swadaya
              </h1>
              <div className="text-2xl md:text-3xl font-semibold text-blue-100 mb-6">
                (BSPS)
              </div>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
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
                    Tentang Program BSPS
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Program Bantuan Stimulan Perumahan Swadaya (BSPS) merupakan bantuan pemerintah 
                    yang diberikan kepada masyarakat berpenghasilan rendah untuk perbaikan dan 
                    peningkatan kualitas rumah yang tidak layak huni. Program ini dilaksanakan dalam 
                    rangka mewujudkan rumah layak huni bagi seluruh masyarakat Indonesia.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    BSPS tidak hanya memberikan bantuan material, tetapi juga pendampingan teknis 
                    yang komprehensif untuk memastikan hasil perbaikan rumah sesuai dengan standar 
                    kesehatan, keamanan, dan kenyamanan yang dibutuhkan keluarga.
                  </p>
                </div>
              </AnimatedSection>

              {/* Jenis Bantuan */}
              <AnimatedSection animation="fadeInUp" delay={200}>
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Jenis Bantuan BSPS</h2>
                  <div className="grid gap-4">
                    {jenisbantuan.map((bantuan, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-200">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 leading-relaxed">{bantuan}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Kriteria */}
              <AnimatedSection animation="fadeInUp" delay={300}>
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Kriteria Penerima Bantuan</h2>
                  <div className="grid gap-4">
                    {kriteria.map((item, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-200">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white font-bold text-sm">{index + 1}</span>
                        </div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Prosedur */}
              <AnimatedSection animation="fadeInUp" delay={400}>
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Prosedur Pengajuan</h2>
                  <div className="space-y-8">
                    {prosedur.map((item, index) => (
                      <div key={index} className="relative">
                        <div className="flex items-start space-x-6">
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                              <span className="text-2xl">{item.icon}</span>
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-3 mb-3">
                              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-blue-600 font-bold text-sm">{item.step}</span>
                              </div>
                              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                        {index < prosedur.length - 1 && (
                          <div className="absolute left-8 top-20 w-0.5 h-12 bg-gray-200"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Manfaat */}
              <AnimatedSection animation="fadeInUp" delay={500}>
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Manfaat Program</h2>
                  <div className="grid gap-4">
                    {manfaat.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 bg-purple-50 rounded-xl">
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
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

              {/* Target Program */}
              <AnimatedSection animation="fadeInUp" delay={600}>
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
                  <h2 className="text-3xl font-bold mb-8">Target Program BSPS 2024</h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {targets.map((target, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                        <div className="text-4xl mb-3">{target.icon}</div>
                        <div className="text-3xl font-bold mb-2">{target.number}</div>
                        <p className="text-green-100 text-sm leading-relaxed">{target.description}</p>
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
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Butuh Informasi?</h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    Tim kami siap memberikan informasi lengkap mengenai Program BSPS
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
                    <p className="text-blue-100 text-sm leading-relaxed">
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
