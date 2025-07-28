import { Metadata } from 'next'
import { dinasProfile } from '@/lib/data'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Legalisasi Aset | Dinas Perkimtan Sumbar',
  description: 'Layanan legalisasi aset dan tanah oleh Dinas Perumahan, Kawasan Permukiman dan Pertanahan Sumatera Barat'
}

export default function LegalisasiPage() {
  const service = {
    title: 'Legalisasi Aset',
    description: 'Layanan legalisasi aset dan tanah untuk memberikan kepastian hukum bagi masyarakat',
    image: '/app/assets/img/logo-perkimtan.png',
    requirements: [
      'Fotokopi KTP yang masih berlaku',
      'Fotokopi Kartu Keluarga',
      'Surat pernyataan penguasaan fisik bidang tanah (SPORADIK)',
      'Fotokopi akta jual beli atau surat hibah',
      'Surat keterangan dari RT/RW setempat',
      'Peta bidang tanah (jika ada)',
      'Dokumen pendukung lainnya sesuai ketentuan'
    ],
    process: [
      'Pendaftaran dan verifikasi dokumen',
      'Pemeriksaan fisik lapangan',
      'Penelitian data yuridis',
      'Pengumuman data fisik dan data yuridis',
      'Penerbitan surat keputusan',
      'Penyerahan sertifikat hak atas tanah'
    ],
    duration: '60-90 hari kerja',
    cost: 'Sesuai Peraturan Pemerintah yang berlaku',
    benefits: [
      'Kepastian hukum atas kepemilikan aset',
      'Dapat dijadikan jaminan kredit di bank',
      'Memudah proses jual beli tanah',
      'Mencegah sengketa kepemilikan',
      'Meningkatkan nilai ekonomi aset'
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
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
                  Tentang Layanan Legalisasi Aset
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Legalisasi aset adalah proses formal untuk memberikan status hukum yang sah 
                  terhadap kepemilikan tanah dan bangunan. Layanan ini bertujuan untuk memberikan 
                  kepastian hukum bagi pemilik aset serta memfasilitasi pemanfaatan aset secara 
                  optimal dalam kegiatan ekonomi.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Melalui program legalisasi aset, Dinas Perkimtan Sumbar berkomitmen untuk 
                  membantu masyarakat dalam mendapatkan sertifikat hak atas tanah yang sah 
                  dan dapat dipertanggungjawabkan secara hukum.
                </p>
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
                  Alur Proses Legalisasi
                </h3>
                <div className="space-y-4">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
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
                  Manfaat Legalisasi Aset
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
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
                    <p className="text-gray-900">{service.cost}</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-blue-50 rounded-lg p-6">
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

              {/* CTA */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-lg p-6 text-center">
                <h4 className="font-semibold mb-2">Butuh Bantuan?</h4>
                <p className="text-blue-100 text-sm mb-4">
                  Hubungi kami untuk konsultasi lebih lanjut mengenai layanan legalisasi aset
                </p>
                <a
                  href="/kontak"
                  className="inline-block bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-50 transition-colors"
                >
                  Hubungi Kami
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
