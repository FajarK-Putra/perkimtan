import { Metadata } from 'next'
import { programKerja, dinasProfile } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Program Kerja | Dinas Perkimtan Sumbar',
  description: 'Program kerja dan rencana strategis Dinas Perumahan, Kawasan Permukiman dan Pertanahan Sumatera Barat'
}

export default function ProgramKerjaPage() {
  const currentYear = new Date().getFullYear()
  
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
              {programKerja.map((program) => (
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
