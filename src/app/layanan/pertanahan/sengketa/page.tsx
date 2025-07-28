import { Metadata } from 'next'
import { dinasProfile } from '@/lib/data'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Penyelesaian Sengketa | Dinas Perkimtan Sumbar',
  description: 'Layanan penyelesaian sengketa pertanahan oleh Dinas Perumahan, Kawasan Permukiman dan Pertanahan Sumatera Barat'
}

export default function SengketaPage() {
  const service = {
    title: 'Penyelesaian Sengketa Pertanahan',
    description: 'Layanan mediasi dan penyelesaian sengketa pertanahan untuk menciptakan kepastian hukum',
    image: '/app/assets/img/logo-perkimtan.png',
    types: [
      'Sengketa batas tanah',
      'Sengketa kepemilikan',
      'Sengketa hak milik',
      'Sengketa warisan tanah',
      'Sengketa ganti rugi',
      'Sengketa penggunaan tanah'
    ],
    process: [
      'Pendaftaran permohonan mediasi',
      'Verifikasi dokumen dan identitas',
      'Penjadwalan mediasi',
      'Pelaksanaan mediasi oleh tim ahli',
      'Kesepakatan para pihak',
      'Penerbitan berita acara kesepakatan'
    ],
    requirements: [
      'Surat permohonan mediasi',
      'Fotokopi KTP semua pihak',
      'Dokumen bukti kepemilikan tanah',
      'Surat keterangan dari RT/RW',
      'Sketsa/denah lokasi sengketa',
      'Kronologi sengketa',
      'Bukti-bukti pendukung lainnya'
    ],
    benefits: [
      'Penyelesaian sengketa secara damai',
      'Biaya lebih murah dibanding jalur hukum',
      'Proses lebih cepat dan efisien',
      'Mempertahankan hubungan baik antar pihak',
      'Kepastian hukum bagi semua pihak',
      'Mencegah eskalasi konflik'
    ],
    duration: '30-60 hari kerja',
    cost: 'Gratis'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Tentang Layanan Penyelesaian Sengketa
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
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

              {/* Types of Disputes */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Jenis Sengketa yang Ditangani
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.types.map((type, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{type}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Persyaratan Dokumen
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.requirements.map((req, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Alur Proses Penyelesaian Sengketa
                </h3>
                <div className="space-y-4">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-600">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Keuntungan Mediasi
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Service Info */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-center mb-6">
                  <Image
                    src={service.image}
                    alt="Logo Dinas Perkimtan"
                    width={80}
                    height={80}
                    className="mx-auto mb-4"
                  />
                  <h4 className="font-semibold text-gray-900">Informasi Layanan</h4>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-medium text-gray-500">Waktu Proses:</span>
                    <p className="text-gray-900">{service.duration}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Biaya:</span>
                    <p className="text-gray-900 text-green-600 font-semibold">{service.cost}</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Informasi Kontak</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">Alamat:</span>
                    <span className="text-gray-600">{dinasProfile.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">Telepon:</span>
                    <span className="text-gray-600">{dinasProfile.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">Email:</span>
                    <span className="text-gray-600">{dinasProfile.email}</span>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="font-semibold text-red-800 mb-2">Layanan Darurat</h4>
                <p className="text-red-700 text-sm mb-4">
                  Untuk sengketa mendesak yang memerlukan penanganan segera
                </p>
                <div className="text-red-800 font-semibold">
                  Hotline: 0751-7051234 (24 Jam)
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-green-600 to-green-800 text-white rounded-lg p-6 text-center">
                <h4 className="font-semibold mb-2">Butuh Mediasi?</h4>
                <p className="text-green-100 text-sm mb-4">
                  Hubungi kami untuk konsultasi dan penyelesaian sengketa pertanahan
                </p>
                <a
                  href="/kontak"
                  className="inline-block bg-white text-green-600 px-4 py-2 rounded-md font-medium hover:bg-green-50 transition-colors"
                >
                  Konsultasi Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
