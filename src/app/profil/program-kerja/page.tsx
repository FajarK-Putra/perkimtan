'use client'

import { programKerja, dinasProfile } from '@/lib/data'
import { useState, useEffect } from 'react'

export default function ProgramKerjaPage() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const [animatedProgress, setAnimatedProgress] = useState(0)
  const currentYear = new Date().getFullYear()
  
  // Set document title for client component
  useEffect(() => {
    document.title = 'Program Kerja | Dinas Perkimtan Sumbar'
  }, [])
  
  const strategiProgram = [
    {
      strategi: "Peningkatan Akses Perumahan",
      deskripsi: "Memperluas akses masyarakat terhadap perumahan yang layak dan terjangkau",
      indikator: ["Jumlah unit rumah terbangun", "Tingkat akses perumahan", "Kepuasan penghuni"]
    },
    {
      strategi: "Pengembangan Kawasan Berkelanjutan",
      deskripsi: "Mengembangkan kawasan permukiman yang tertata, aman, dan berkelanjutan",
      indikator: ["Luas kawasan tertata", "Kualitas infrastruktur", "Indeks livability"]
    },
    {
      strategi: "Kepastian Hukum Pertanahan",
      deskripsi: "Memberikan kepastian hukum melalui sertifikasi dan legalisasi tanah",
      indikator: ["Jumlah sertifikat terbit", "Waktu penyelesaian", "Tingkat kepuasan"]
    }
  ]

  // Progress animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(75) // Contoh progress 75%
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500'
    if (progress >= 60) return 'bg-blue-500'
    if (progress >= 40) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  const timeline = [
    {
      tahun: "2024",
      fokus: "Percepatan Sertifikasi dan Pembangunan Rusunawa",
      target: "12.500 sertifikat, 2.500 unit rusunawa"
    },
    {
      tahun: "2025",
      fokus: "Penataan Kawasan Kumuh dan Infrastruktur",
      target: "500 Ha kawasan, 180 lokasi infrastruktur"
    },
    {
      tahun: "2026",
      fokus: "Konsolidasi Program dan Digitalisasi Layanan",
      target: "100% layanan digital, 95% kepuasan publik"
    }
  ]

  const kemitraan = [
    {
      partner: "Bank BTN",
      kerjasama: "Program FLPP dan KPR Subsidi",
      manfaat: "Akses pembiayaan perumahan murah"
    },
    {
      partner: "Kementerian PUPR",
      kerjasama: "Program KOTAKU dan Infrastruktur",
      manfaat: "Dukungan anggaran dan teknis"
    },
    {
      partner: "BPN Sumbar",
      kerjasama: "Sertifikasi Tanah Massal",
      manfaat: "Percepatan proses sertifikasi"
    },
    {
      partner: "Universitas",
      kerjasama: "Penelitian dan Pengembangan",
      manfaat: "Inovasi teknologi dan metode"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Program Kerja
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
              Rencana strategis dan program kerja {dinasProfile.shortName} {currentYear}
            </p>
          </div>
        </div>
      </section>

      {/* Vision Mission Quick */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Visi</h2>
          <p className="text-gray-600 max-w-4xl mx-auto">{dinasProfile.visi}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Program Utama */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Program Utama {currentYear}
            </h2>
            <div className="space-y-8">
              {programKerja.map((program, index) => (
                <div key={program.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-indigo-600 text-white px-6 py-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">{program.program}</h3>
                      <span className="bg-indigo-800 px-3 py-1 rounded-full text-sm">
                        Program {program.id}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <h4 className="font-semibold text-gray-900 mb-4">Kegiatan Utama:</h4>
                        <ul className="space-y-2">
                          {program.kegiatan.map((kegiatan, kegiatanIndex) => (
                            <li key={kegiatanIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600">{kegiatan}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="text-sm font-medium text-gray-500">Target</div>
                          <div className="text-lg font-bold text-gray-900">{program.target}</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="text-sm font-medium text-gray-500">Anggaran</div>
                          <div className="text-lg font-bold text-green-600">{program.anggaran}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Strategi Program */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Strategi Pencapaian
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {strategiProgram.map((strategi, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-indigo-600">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{strategi.strategi}</h3>
                  </div>
                  <p className="text-gray-600 text-center mb-6">{strategi.deskripsi}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Indikator Kinerja:</h4>
                    <ul className="space-y-2">
                      {strategi.indikator.map((indikator, indikatorIndex) => (
                        <li key={indikatorIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{indikator}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Roadmap Strategis
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                        {item.tahun}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.fokus}</h3>
                      <p className="text-gray-600">{item.target}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Kemitraan */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Kemitraan Strategis
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {kemitraan.map((partner, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-indigo-600 font-bold text-lg">
                        {partner.partner.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{partner.partner}</h3>
                      <p className="text-indigo-600 text-sm font-medium mb-2">{partner.kerjasama}</p>
                      <p className="text-gray-600 text-sm">{partner.manfaat}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Berpartisipasilah dalam Program Kami</h3>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Dapatkan informasi lebih lanjut tentang program kerja kami dan cara berpartisipasi 
              dalam pembangunan perumahan, kawasan permukiman, dan pertanahan di Sumatera Barat.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="/kontak"
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              >
                Hubungi Kami
              </a>
              <a
                href="/layanan"
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Lihat Layanan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Monitoring Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Monitoring Capaian Program</h2>
            <p className="text-gray-600">Pantau progres realisasi program kerja tahun {selectedYear}</p>
          </div>

          {/* Year Selector */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-white rounded-lg p-1 shadow-lg">
              {[2024, 2025, 2026].map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedYear === year
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* Progress Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { program: 'Perumahan', target: 2500, realisasi: 1875, satuan: 'unit' },
              { program: 'Sertifikasi', target: 12500, realisasi: 9375, satuan: 'sertifikat' },
              { program: 'Infrastruktur', target: 180, realisasi: 135, satuan: 'lokasi' }
            ].map((item, index) => {
              const progress = Math.round((item.realisasi / item.target) * 100)
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{item.program}</h3>
                    <span className={`text-sm font-bold px-3 py-1 rounded-full text-white ${getProgressColor(progress)}`}>
                      {progress}%
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Realisasi: {item.realisasi.toLocaleString()} {item.satuan}</span>
                      <span>Target: {item.target.toLocaleString()} {item.satuan}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full transition-all duration-1000 ease-out ${getProgressColor(progress)}`}
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="text-xs text-gray-500">
                    Status: {progress >= 80 ? 'Sangat Baik' : progress >= 60 ? 'Baik' : progress >= 40 ? 'Cukup' : 'Perlu Perhatian'}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Overall Progress */}
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Capaian Keseluruhan</h3>
            <div className="flex items-center justify-center">
              <div className="relative w-32 h-32">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#3b82f6"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${animatedProgress * 2.51} 251`}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-900">{animatedProgress}%</span>
                </div>
              </div>
              <div className="ml-8">
                <p className="text-gray-600">
                  Realisasi program kerja tahun {selectedYear} mencapai <strong>{animatedProgress}%</strong> dari target yang ditetapkan.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Data terakhir diperbarui: {new Date().toLocaleDateString('id-ID')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Informasi Lebih Lanjut</h3>
          <div className="flex justify-center gap-8 text-sm">
            <div>
              <span className="font-medium">Email:</span>
              <span className="text-gray-600 ml-1">{dinasProfile.email}</span>
            </div>
            <div>
              <span className="font-medium">Telepon:</span>
              <span className="text-gray-600 ml-1">{dinasProfile.phone}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
