import { Metadata } from 'next'
import { dinasProfile, statistikKinerja } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Data Statistik | Dinas Perkimtan Sumbar',
  description: 'Data statistik dan laporan kinerja Dinas Perumahan, Kawasan Permukiman dan Pertanahan Sumatera Barat'
}

export default function StatistikPage() {
  const currentYear = new Date().getFullYear()
  
  const statistikData = [
    {
      category: 'Perumahan',
      data: [
        { label: 'Unit Rusunawa Dibangun', value: '2,450', unit: 'unit', trend: '+12%' },
        { label: 'Penerima Program BSPS', value: '8,750', unit: 'KK', trend: '+18%' },
        { label: 'Fasilitas FLPP Disalurkan', value: '3,200', unit: 'unit', trend: '+8%' },
        { label: 'Perizinan Perumahan', value: '1,680', unit: 'izin', trend: '+15%' }
      ]
    },
    {
      category: 'Kawasan Permukiman',
      data: [
        { label: 'Kawasan Kumuh Tertangani', value: '450', unit: 'Ha', trend: '+22%' },
        { label: 'Program KOTAKU', value: '25', unit: 'kelurahan', trend: '+5%' },
        { label: 'Infrastruktur Dibangun', value: '180', unit: 'lokasi', trend: '+14%' },
        { label: 'Penataan Kawasan', value: '320', unit: 'Ha', trend: '+10%' }
      ]
    },
    {
      category: 'Pertanahan',
      data: [
        { label: 'Sertifikat Tanah Diterbitkan', value: '12,500', unit: 'sertifikat', trend: '+25%' },
        { label: 'Legalisasi Aset', value: '3,750', unit: 'aset', trend: '+20%' },
        { label: 'Sengketa Diselesaikan', value: '145', unit: 'kasus', trend: '+8%' },
        { label: 'Konsultasi Pertanahan', value: '2,890', unit: 'konsultasi', trend: '+16%' }
      ]
    }
  ]

  const yearlyProgress = [
    { year: 2020, perumahan: 85, kawasan: 78, pertanahan: 82 },
    { year: 2021, perumahan: 88, kawasan: 82, pertanahan: 85 },
    { year: 2022, perumahan: 92, kawasan: 87, pertanahan: 89 },
    { year: 2023, perumahan: 95, kawasan: 91, pertanahan: 93 },
    { year: 2024, perumahan: 98, kawasan: 94, pertanahan: 96 }
  ]

  const topAchievements = [
    {
      title: 'Sertifikasi Tanah Terbanyak se-Sumbar',
      description: 'Mencapai 12.500 sertifikat dalam 1 tahun',
      icon: '🏆',
      year: '2024'
    },
    {
      title: 'Penanganan Kawasan Kumuh Terbaik',
      description: 'Berhasil menangani 450 Ha kawasan kumuh',
      icon: '🌟',
      year: '2024'
    },
    {
      title: 'Pelayanan Publik Prima',
      description: 'Raih nilai 98% untuk kepuasan masyarakat',
      icon: '⭐',
      year: '2024'
    }
  ]

  const monthlyData = [
    { month: 'Jan', perumahan: 95, kawasan: 88, pertanahan: 92 },
    { month: 'Feb', perumahan: 97, kawasan: 90, pertanahan: 94 },
    { month: 'Mar', perumahan: 94, kawasan: 92, pertanahan: 96 },
    { month: 'Apr', perumahan: 98, kawasan: 94, pertanahan: 97 },
    { month: 'Mei', perumahan: 96, kawasan: 91, pertanahan: 95 },
    { month: 'Jun', perumahan: 99, kawasan: 95, pertanahan: 98 }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Data Statistik & Kinerja
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
              Transparansi data dan laporan kinerja Dinas Perkimtan Sumbar tahun {currentYear}
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {topAchievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{achievement.description}</p>
                <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-1 rounded">
                  {achievement.year}
                </span>
              </div>
            ))}
          </div>

          {/* Main Statistics */}
          <div className="space-y-8">
            {statistikData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-emerald-600 text-white px-6 py-4">
                  <h2 className="text-xl font-bold">{category.category}</h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.data.map((item, itemIndex) => (
                      <div key={itemIndex} className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-3xl font-bold text-emerald-600 mb-2">
                          {item.value}
                        </div>
                        <div className="text-sm text-gray-500 mb-1">{item.unit}</div>
                        <div className="text-sm font-medium text-gray-900 mb-2">{item.label}</div>
                        <div className={`text-xs font-semibold px-2 py-1 rounded ${
                          item.trend.startsWith('+') 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {item.trend}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Yearly Progress Chart */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Progres Tahunan (%)</h3>
              <div className="space-y-4">
                {yearlyProgress.map((year, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{year.year}</span>
                      <span className="text-gray-500">Rata-rata: {Math.round((year.perumahan + year.kawasan + year.pertanahan) / 3)}%</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span>Perumahan</span>
                        <span>{year.perumahan}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${year.perumahan}%` }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span>Kawasan</span>
                        <span>{year.kawasan}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${year.kawasan}%` }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span>Pertanahan</span>
                        <span>{year.pertanahan}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${year.pertanahan}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly Performance */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Kinerja Bulanan 2024 (%)</h3>
              <div className="space-y-4">
                {monthlyData.map((month, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="font-medium text-gray-900 w-12">{month.month}</div>
                    <div className="flex space-x-4 flex-1 justify-end">
                      <div className="text-right">
                        <div className="text-xs text-blue-600">Perumahan</div>
                        <div className="text-sm font-semibold">{month.perumahan}%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-green-600">Kawasan</div>
                        <div className="text-sm font-semibold">{month.kawasan}%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-purple-600">Pertanahan</div>
                        <div className="text-sm font-semibold">{month.pertanahan}%</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Performance Indicators */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Indikator Kinerja Utama</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">{statistikKinerja.perumahan.persentase}%</div>
                <div className="text-sm text-gray-600">Perumahan</div>
                <div className="text-xs text-gray-500">{statistikKinerja.perumahan.realisasi.toLocaleString()} dari {statistikKinerja.perumahan.target.toLocaleString()}</div>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">{statistikKinerja.kawasan.persentase}%</div>
                <div className="text-sm text-gray-600">Kawasan</div>
                <div className="text-xs text-gray-500">{statistikKinerja.kawasan.realisasi.toLocaleString()} dari {statistikKinerja.kawasan.target.toLocaleString()}</div>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-2">{statistikKinerja.sertifikat.persentase}%</div>
                <div className="text-sm text-gray-600">Sertifikat</div>
                <div className="text-xs text-gray-500">{statistikKinerja.sertifikat.realisasi.toLocaleString()} dari {statistikKinerja.sertifikat.target.toLocaleString()}</div>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="text-2xl font-bold text-orange-600 mb-2">{statistikKinerja.kepuasan.persentase}%</div>
                <div className="text-sm text-gray-600">Kepuasan Publik</div>
                <div className="text-xs text-gray-500">Survei {statistikKinerja.kepuasan.realisasi}% dari target {statistikKinerja.kepuasan.target}%</div>
              </div>
            </div>
          </div>

          {/* Download Section */}
          <div className="mt-12 bg-emerald-50 rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Unduh Laporan Lengkap</h3>
            <p className="text-gray-600 mb-6">
              Dapatkan laporan statistik dan kinerja lengkap dalam format PDF
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                Laporan Tahunan 2024
              </button>
              <button className="px-6 py-3 bg-white text-emerald-600 border border-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors">
                Laporan Bulanan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Butuh Data Tambahan?</h3>
          <p className="text-gray-600 mb-4">
            Untuk permintaan data khusus atau informasi statistik lainnya, silakan hubungi kami
          </p>
          <div className="flex justify-center gap-6 text-sm">
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
