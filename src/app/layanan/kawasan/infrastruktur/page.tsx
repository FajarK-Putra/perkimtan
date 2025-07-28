import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Infrastruktur Permukiman | Dinas Perkimtan Sumbar',
  description: 'Program pembangunan infrastruktur permukiman untuk mendukung kawasan hunian yang berkualitas',
}

export default function InfrastrukturPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Infrastruktur Permukiman
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Program pembangunan dan pemeliharaan infrastruktur permukiman untuk mendukung 
            terciptanya kawasan hunian yang berkualitas dan berkelanjutan
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Program Infrastruktur Permukiman
          </h2>
          
          <div className="prose max-w-none text-gray-600 mb-8">
            <p>
              Infrastruktur permukiman merupakan tulang punggung kehidupan masyarakat di kawasan hunian. 
              Program ini mencakup pembangunan, pemeliharaan, dan peningkatan kualitas infrastruktur 
              dasar seperti jalan, drainase, air bersih, sanitasi, dan utilitas lainnya.
            </p>
          </div>

          {/* Jenis Infrastruktur */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Jenis Infrastruktur
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-medium text-gray-900 mb-3">Infrastruktur Transportasi</h4>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Jalan lingkungan dan akses</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Jembatan dan jalan layang</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Jalur pedestrian</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Area parkir</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="font-medium text-gray-900 mb-3">Infrastruktur Air</h4>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Jaringan air bersih</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Sistem drainase</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Pengolahan air limbah</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Sumur resapan</span>
                  </li>
                </ul>
              </div>
              <div className="bg-yellow-50 rounded-lg p-6">
                <h4 className="font-medium text-gray-900 mb-3">Infrastruktur Sanitasi</h4>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>MCK umum</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Septik tank komunal</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>TPS sampah</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Bank sampah</span>
                  </li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <h4 className="font-medium text-gray-900 mb-3">Infrastruktur Utilitas</h4>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Jaringan listrik</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Jaringan telekomunikasi</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Penerangan jalan</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Jaringan gas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Standard Infrastruktur */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Standar Infrastruktur Permukiman
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Infrastruktur</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Standar</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cakupan Layanan</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Jalan Lingkungan</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Lebar min. 6 meter</td>
                    <td className="px-6 py-4 text-sm text-gray-600">100% kawasan</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Air Bersih</td>
                    <td className="px-6 py-4 text-sm text-gray-600">60 liter/org/hari</td>
                    <td className="px-6 py-4 text-sm text-gray-600">100% rumah</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Drainase</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Dimensi sesuai debit</td>
                    <td className="px-6 py-4 text-sm text-gray-600">100% kawasan</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Sanitasi</td>
                    <td className="px-6 py-4 text-sm text-gray-600">1 MCK per 10 KK</td>
                    <td className="px-6 py-4 text-sm text-gray-600">100% penduduk</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Target Program */}
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Target Pembangunan Infrastruktur 2024
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">50 km</div>
                <p className="text-sm text-gray-600">Jalan lingkungan</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">30 km</div>
                <p className="text-sm text-gray-600">Jaringan drainase</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600 mb-1">25 unit</div>
                <p className="text-sm text-gray-600">MCK komunal</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">40 km</div>
                <p className="text-sm text-gray-600">Jaringan air bersih</p>
              </div>
            </div>
          </div>
        </div>

        {/* Anggaran dan Sumber Dana */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Anggaran dan Sumber Dana
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Sumber Anggaran</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-gray-700">APBD Provinsi</span>
                  <span className="font-medium text-blue-600">40%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-gray-700">APBN</span>
                  <span className="font-medium text-green-600">35%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                  <span className="text-gray-700">APBD Kab/Kota</span>
                  <span className="font-medium text-yellow-600">15%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span className="text-gray-700">Swasta/CSR</span>
                  <span className="font-medium text-purple-600">10%</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Total Anggaran 2024</h4>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-gray-900 mb-2">Rp 85 M</div>
                <p className="text-gray-600">Anggaran infrastruktur permukiman</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Informasi Lebih Lanjut
          </h3>
          <p className="text-gray-600 mb-4">
            Untuk informasi lebih lanjut mengenai Program Infrastruktur Permukiman, silakan hubungi:
          </p>
          <div className="space-y-2 text-gray-600">
            <p><span className="font-medium">Bidang Kawasan Permukiman</span></p>
            <p><span className="font-medium">Telp:</span> (0751) 123457</p>
            <p><span className="font-medium">Email:</span> kawasan@perkimtan.sumbarprov.go.id</p>
          </div>
        </div>
      </div>
    </div>
  )
}
