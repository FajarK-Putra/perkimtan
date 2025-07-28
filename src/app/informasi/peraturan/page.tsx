import { Metadata } from 'next'
import { dinasProfile } from '@/lib/data'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Peraturan | Dinas Perkimtan Sumbar',
  description: 'Peraturan dan regulasi terkait perumahan, kawasan permukiman dan pertanahan di Sumatera Barat'
}

export default function PeraturanPage() {
  const regulations = [
    {
      category: 'Undang-Undang',
      items: [
        {
          title: 'UU No. 1 Tahun 2011 tentang Perumahan dan Kawasan Permukiman',
          description: 'Undang-undang yang mengatur tentang perumahan dan kawasan permukiman',
          year: '2011',
          type: 'UU',
          file: '/documents/uu-1-2011.pdf'
        },
        {
          title: 'UU No. 5 Tahun 1960 tentang Peraturan Dasar Pokok-Pokok Agraria',
          description: 'Undang-undang dasar mengenai pertanahan di Indonesia',
          year: '1960',
          type: 'UU',
          file: '/documents/uu-5-1960.pdf'
        }
      ]
    },
    {
      category: 'Peraturan Pemerintah',
      items: [
        {
          title: 'PP No. 14 Tahun 2016 tentang Penyelenggaraan Perumahan dan Kawasan Permukiman',
          description: 'Peraturan pelaksanaan penyelenggaraan perumahan dan kawasan permukiman',
          year: '2016',
          type: 'PP',
          file: '/documents/pp-14-2016.pdf'
        },
        {
          title: 'PP No. 18 Tahun 2021 tentang Hak Pengelolaan, Hak atas Tanah, Satuan Rumah Susun',
          description: 'Peraturan tentang hak-hak atas tanah dan pengelolaannya',
          year: '2021',
          type: 'PP',
          file: '/documents/pp-18-2021.pdf'
        }
      ]
    },
    {
      category: 'Peraturan Menteri',
      items: [
        {
          title: 'Permen PUPR No. 5 Tahun 2016 tentang Izin Mendirikan Bangunan Gedung',
          description: 'Peraturan tentang perizinan mendirikan bangunan gedung',
          year: '2016',
          type: 'Permen',
          file: '/documents/permen-pupr-5-2016.pdf'
        },
        {
          title: 'Permen ATR/BPN No. 8 Tahun 2021 tentang Tata Cara Pemberian SHGB',
          description: 'Tata cara pemberian Sertifikat Hak Guna Bangunan',
          year: '2021',
          type: 'Permen',
          file: '/documents/permen-atr-8-2021.pdf'
        }
      ]
    },
    {
      category: 'Peraturan Daerah',
      items: [
        {
          title: 'Perda Sumbar No. 3 Tahun 2020 tentang Rencana Tata Ruang Wilayah',
          description: 'Peraturan daerah tentang tata ruang wilayah Sumatera Barat',
          year: '2020',
          type: 'Perda',
          file: '/documents/perda-sumbar-3-2020.pdf'
        },
        {
          title: 'Perda Sumbar No. 7 Tahun 2019 tentang Penyelenggaraan Perumahan',
          description: 'Peraturan daerah penyelenggaraan perumahan di Sumatera Barat',
          year: '2019',
          type: 'Perda',
          file: '/documents/perda-sumbar-7-2019.pdf'
        }
      ]
    }
  ]

  const recentUpdates = [
    {
      title: 'Perpres No. 18 Tahun 2024 tentang Percepatan Sertifikasi Tanah',
      date: '15 Januari 2024',
      status: 'Baru'
    },
    {
      title: 'Permen PUPR No. 12 Tahun 2024 tentang Standar Konstruksi',
      date: '08 Januari 2024',
      status: 'Update'
    },
    {
      title: 'SE Dirjen No. 02/SE/2024 tentang Implementasi Digitalisasi',
      date: '03 Januari 2024',
      status: 'Baru'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Peraturan & Regulasi
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
              Kumpulan peraturan dan regulasi terkait perumahan, kawasan permukiman dan pertanahan
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Search and Filter */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Cari peraturan..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="flex gap-2">
                    <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option value="">Semua Kategori</option>
                      <option value="uu">Undang-Undang</option>
                      <option value="pp">Peraturan Pemerintah</option>
                      <option value="permen">Peraturan Menteri</option>
                      <option value="perda">Peraturan Daerah</option>
                    </select>
                    <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option value="">Semua Tahun</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Regulations List */}
              <div className="space-y-8">
                {regulations.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-indigo-600 text-white px-6 py-4">
                      <h2 className="text-xl font-bold">{category.category}</h2>
                    </div>
                    <div className="p-6">
                      <div className="space-y-4">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded">
                                    {item.type}
                                  </span>
                                  <span className="text-sm text-gray-500">{item.year}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                  {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-3">
                                  {item.description}
                                </p>
                              </div>
                              <div className="flex gap-2 ml-4">
                                <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors">
                                  Lihat
                                </button>
                                <button className="px-3 py-1 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors">
                                  Unduh
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Updates */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Update Terbaru</h3>
                <div className="space-y-4">
                  {recentUpdates.map((update, index) => (
                    <div key={index} className="border-l-4 border-green-400 pl-4">
                      <div className="flex items-start justify-between mb-1">
                        <span className={`text-xs font-semibold px-2 py-1 rounded ${
                          update.status === 'Baru' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {update.status}
                        </span>
                      </div>
                      <h4 className="font-medium text-gray-900 text-sm mb-1">
                        {update.title}
                      </h4>
                      <p className="text-xs text-gray-500">{update.date}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Access */}
              <div className="bg-indigo-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Akses Cepat</h3>
                <div className="space-y-3">
                  <Link 
                    href="/informasi/dokumen"
                    className="block p-3 bg-white rounded-md hover:bg-indigo-100 transition-colors"
                  >
                    <div className="font-medium text-gray-900">Dokumen Publik</div>
                    <div className="text-sm text-gray-600">Formulir dan dokumen</div>
                  </Link>
                  <Link 
                    href="/informasi/statistik"
                    className="block p-3 bg-white rounded-md hover:bg-indigo-100 transition-colors"
                  >
                    <div className="font-medium text-gray-900">Data Statistik</div>
                    <div className="text-sm text-gray-600">Data dan laporan</div>
                  </Link>
                  <Link 
                    href="/kontak"
                    className="block p-3 bg-white rounded-md hover:bg-indigo-100 transition-colors"
                  >
                    <div className="font-medium text-gray-900">Bantuan</div>
                    <div className="text-sm text-gray-600">Hubungi kami</div>
                  </Link>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Informasi Kontak</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Alamat:</span>
                    <p className="text-gray-600">{dinasProfile.address}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Telepon:</span>
                    <p className="text-gray-600">{dinasProfile.phone}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Email:</span>
                    <p className="text-gray-600">{dinasProfile.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
