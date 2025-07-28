import { Metadata } from 'next'
import { dinasProfile } from '@/lib/data'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Konsultasi Pertanahan | Dinas Perkimtan Sumbar',
  description: 'Layanan konsultasi pertanahan oleh Dinas Perumahan, Kawasan Permukiman dan Pertanahan Sumatera Barat'
}

export default function KonsultasiPage() {
  const service = {
    title: 'Konsultasi Pertanahan',
    description: 'Layanan konsultasi dan bimbingan teknis terkait masalah pertanahan bagi masyarakat',
    image: '/app/assets/img/logo-perkimtan.png',
    topics: [
      'Proses sertifikasi tanah',
      'Persyaratan legalisasi aset',
      'Penyelesaian sengketa tanah',
      'Peralihan hak atas tanah',
      'Perpajakan pertanahan',
      'Zonasi dan tata ruang',
      'Hak guna bangunan',
      'Wakaf dan hibah tanah'
    ],
    methods: [
      {
        name: 'Konsultasi Langsung',
        description: 'Datang langsung ke kantor dinas pada jam kerja',
        schedule: 'Senin - Jumat: 08:00 - 16:00 WIB',
        location: 'Kantor Dinas Perkimtan Sumbar'
      },
      {
        name: 'Konsultasi Telepon',
        description: 'Konsultasi melalui telepon dengan petugas ahli',
        schedule: 'Senin - Jumat: 08:00 - 15:00 WIB',
        location: 'Telepon: (0751) 7051234'
      },
      {
        name: 'Konsultasi Online',
        description: 'Konsultasi melalui email atau website resmi',
        schedule: '24 Jam (Respon 1x24 jam)',
        location: 'Email: info@perkimtan.sumbarprov.go.id'
      }
    ],
    requirements: [
      'Identitas diri (KTP/SIM)',
      'Dokumen pertanahan yang dimiliki',
      'Deskripsi masalah yang dihadapi',
      'Lokasi tanah (alamat lengkap)',
      'Dokumen pendukung lainnya (jika ada)'
    ],
    benefits: [
      'Mendapat informasi akurat dan terpercaya',
      'Penjelasan prosedur yang jelas',
      'Arahan solusi yang tepat',
      'Mencegah kesalahan dalam proses',
      'Menghemat waktu dan biaya',
      'Layanan gratis dan profesional'
    ],
    experts: [
      {
        name: 'Tim Pertanahan',
        expertise: 'Sertifikasi dan legalisasi',
        contact: 'Ext. 101'
      },
      {
        name: 'Tim Mediasi',
        expertise: 'Penyelesaian sengketa',
        contact: 'Ext. 102'
      },
      {
        name: 'Tim Tata Ruang',
        expertise: 'Zonasi dan perencanaan',
        contact: 'Ext. 103'
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
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
                  Tentang Layanan Konsultasi
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Layanan konsultasi pertanahan merupakan fasilitas yang disediakan oleh 
                  Dinas Perkimtan Sumbar untuk memberikan bimbingan, arahan, dan solusi 
                  terkait berbagai permasalahan pertanahan yang dihadapi masyarakat.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Tim ahli kami siap membantu Anda memahami regulasi, prosedur, dan 
                  langkah-langkah yang diperlukan untuk menyelesaikan urusan pertanahan 
                  dengan benar dan sesuai ketentuan yang berlaku.
                </p>
              </div>

              {/* Topics */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Topik Konsultasi
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.topics.map((topic, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation Methods */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Metode Konsultasi
                </h3>
                <div className="space-y-6">
                  {service.methods.map((method, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        {method.name}
                      </h4>
                      <p className="text-gray-600 mb-4">{method.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-700">Jadwal:</span>
                          <p className="text-gray-600">{method.schedule}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Lokasi/Kontak:</span>
                          <p className="text-gray-600">{method.location}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Yang Perlu Disiapkan
                </h3>
                <div className="space-y-3">
                  {service.requirements.map((req, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Manfaat Konsultasi
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
                  <h4 className="font-semibold text-gray-900">Layanan Konsultasi</h4>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600 mb-1">GRATIS</div>
                  <p className="text-sm text-gray-600">Layanan konsultasi tidak dipungut biaya</p>
                </div>
              </div>

              {/* Expert Team */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Tim Ahli</h4>
                <div className="space-y-4">
                  {service.experts.map((expert, index) => (
                    <div key={index} className="border-l-4 border-purple-400 pl-4">
                      <h5 className="font-medium text-gray-900">{expert.name}</h5>
                      <p className="text-sm text-gray-600">{expert.expertise}</p>
                      <p className="text-sm text-purple-600">{expert.contact}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-purple-50 rounded-lg p-6">
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

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-lg p-6 text-center">
                <h4 className="font-semibold mb-2">Konsultasi Sekarang</h4>
                <p className="text-purple-100 text-sm mb-4">
                  Dapatkan solusi terbaik untuk masalah pertanahan Anda
                </p>
                <a
                  href="tel:075170512345"
                  className="inline-block bg-white text-purple-600 px-4 py-2 rounded-md font-medium hover:bg-purple-50 transition-colors mb-2 w-full"
                >
                  Telepon Sekarang
                </a>
                <a
                  href="/kontak"
                  className="inline-block border border-white text-white px-4 py-2 rounded-md font-medium hover:bg-white hover:text-purple-600 transition-colors w-full"
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
