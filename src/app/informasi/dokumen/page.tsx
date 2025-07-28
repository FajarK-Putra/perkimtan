import { Metadata } from 'next'
import { dinasProfile } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Dokumen Publik | Dinas Perkimtan Sumbar',
  description: 'Dokumen publik dan formulir layanan Dinas Perumahan, Kawasan Permukiman dan Pertanahan Sumatera Barat'
}

export default function DokumenPage() {
  const documentCategories = [
    {
      name: 'Formulir Layanan',
      description: 'Formulir untuk berbagai layanan dinas',
      documents: [
        {
          title: 'Formulir Permohonan Sertifikasi Tanah',
          description: 'Formulir untuk mengajukan sertifikasi tanah',
          type: 'PDF',
          size: '256 KB',
          downloads: 1234,
          file: '/forms/form-sertifikasi.pdf'
        },
        {
          title: 'Formulir Legalisasi Aset',
          description: 'Formulir permohonan legalisasi aset tanah',
          type: 'PDF',
          size: '189 KB',
          downloads: 856,
          file: '/forms/form-legalisasi.pdf'
        },
        {
          title: 'Formulir Pengaduan Masyarakat',
          description: 'Formulir untuk menyampaikan pengaduan',
          type: 'PDF',
          size: '145 KB',
          downloads: 467,
          file: '/forms/form-pengaduan.pdf'
        }
      ]
    },
    {
      name: 'Panduan & SOP',
      description: 'Panduan dan standar operasional prosedur',
      documents: [
        {
          title: 'Panduan Sertifikasi Tanah',
          description: 'Panduan lengkap proses sertifikasi tanah',
          type: 'PDF',
          size: '2.1 MB',
          downloads: 2134,
          file: '/guides/panduan-sertifikasi.pdf'
        },
        {
          title: 'SOP Penyelesaian Sengketa',
          description: 'Standar operasional penyelesaian sengketa',
          type: 'PDF',
          size: '1.8 MB',
          downloads: 698,
          file: '/guides/sop-sengketa.pdf'
        },
        {
          title: 'Panduan Perizinan Perumahan',
          description: 'Panduan lengkap perizinan pembangunan',
          type: 'PDF',
          size: '3.2 MB',
          downloads: 1567,
          file: '/guides/panduan-perizinan.pdf'
        }
      ]
    },
    {
      name: 'Laporan Kinerja',
      description: 'Laporan kinerja dan pertanggungjawaban',
      documents: [
        {
          title: 'Laporan Kinerja Tahunan 2023',
          description: 'Laporan kinerja dinas tahun 2023',
          type: 'PDF',
          size: '5.4 MB',
          downloads: 892,
          file: '/reports/lakip-2023.pdf'
        },
        {
          title: 'Laporan Keuangan 2023',
          description: 'Laporan pertanggungjawaban keuangan',
          type: 'PDF',
          size: '4.1 MB',
          downloads: 445,
          file: '/reports/lapkeu-2023.pdf'
        },
        {
          title: 'Rencana Strategis 2024-2029',
          description: 'Dokumen perencanaan strategis jangka menengah',
          type: 'PDF',
          size: '6.7 MB',
          downloads: 623,
          file: '/reports/renstra-2024-2029.pdf'
        }
      ]
    },
    {
      name: 'Standar & Spesifikasi',
      description: 'Standar teknis dan spesifikasi',
      documents: [
        {
          title: 'Standar Teknis Perumahan',
          description: 'Standar teknis pembangunan perumahan',
          type: 'PDF',
          size: '2.9 MB',
          downloads: 1123,
          file: '/standards/standar-perumahan.pdf'
        },
        {
          title: 'Spesifikasi Infrastruktur Permukiman',
          description: 'Spesifikasi teknis infrastruktur',
          type: 'PDF',
          size: '3.5 MB',
          downloads: 567,
          file: '/standards/spek-infrastruktur.pdf'
        },
        {
          title: 'Pedoman Tata Ruang',
          description: 'Pedoman penataan ruang wilayah',
          type: 'PDF',
          size: '4.2 MB',
          downloads: 789,
          file: '/standards/pedoman-tataruang.pdf'
        }
      ]
    }
  ]

  const popularDocuments = [
    { title: 'Formulir Sertifikasi Tanah', downloads: 2134 },
    { title: 'Panduan Sertifikasi Tanah', downloads: 2134 },
    { title: 'Panduan Perizinan Perumahan', downloads: 1567 },
    { title: 'Formulir Permohonan Sertifikasi', downloads: 1234 },
    { title: 'Standar Teknis Perumahan', downloads: 1123 }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Dokumen Publik
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto">
              Akses formulir, panduan, dan dokumen resmi untuk berbagai layanan kami
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-teal-600">120+</div>
              <div className="text-sm text-gray-600">Total Dokumen</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-teal-600">15.6K</div>
              <div className="text-sm text-gray-600">Total Unduhan</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-teal-600">25</div>
              <div className="text-sm text-gray-600">Formulir Layanan</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-teal-600">30</div>
              <div className="text-sm text-gray-600">Panduan SOP</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Search */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Cari dokumen..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div className="flex gap-2">
                    <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500">
                      <option value="">Semua Kategori</option>
                      <option value="formulir">Formulir</option>
                      <option value="panduan">Panduan</option>
                      <option value="laporan">Laporan</option>
                      <option value="standar">Standar</option>
                    </select>
                    <button className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors">
                      Cari
                    </button>
                  </div>
                </div>
              </div>

              {/* Document Categories */}
              <div className="space-y-8">
                {documentCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-teal-600 text-white px-6 py-4">
                      <h2 className="text-xl font-bold">{category.name}</h2>
                      <p className="text-teal-100 text-sm">{category.description}</p>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-1 gap-4">
                        {category.documents.map((doc, docIndex) => (
                          <div key={docIndex} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <span className="inline-block bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded">
                                    {doc.type}
                                  </span>
                                  <span className="text-sm text-gray-500">{doc.size}</span>
                                  <span className="text-sm text-gray-500">
                                    {doc.downloads.toLocaleString()} unduhan
                                  </span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                  {doc.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                  {doc.description}
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
              {/* Popular Documents */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Dokumen Populer</h3>
                <div className="space-y-3">
                  {popularDocuments.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{doc.title}</div>
                        <div className="text-xs text-gray-500">{doc.downloads.toLocaleString()} unduhan</div>
                      </div>
                      <button className="text-teal-600 hover:text-teal-800">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Tautan Berguna</h3>
                <div className="space-y-3">
                  <a href="/layanan" className="block p-3 bg-white rounded-md hover:bg-teal-100 transition-colors">
                    <div className="font-medium text-gray-900">Layanan Online</div>
                    <div className="text-sm text-gray-600">Akses layanan digital</div>
                  </a>
                  <a href="/informasi/peraturan" className="block p-3 bg-white rounded-md hover:bg-teal-100 transition-colors">
                    <div className="font-medium text-gray-900">Peraturan</div>
                    <div className="text-sm text-gray-600">Regulasi terkini</div>
                  </a>
                  <a href="/kontak" className="block p-3 bg-white rounded-md hover:bg-teal-100 transition-colors">
                    <div className="font-medium text-gray-900">Bantuan</div>
                    <div className="text-sm text-gray-600">Hubungi kami</div>
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Butuh Bantuan?</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Telepon:</span>
                    <p className="text-gray-600">{dinasProfile.phone}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Email:</span>
                    <p className="text-gray-600">{dinasProfile.email}</p>
                  </div>
                  <div className="pt-2">
                    <p className="text-gray-600 text-xs">
                      Untuk bantuan terkait dokumen atau formulir, silakan hubungi kami pada jam kerja
                    </p>
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
