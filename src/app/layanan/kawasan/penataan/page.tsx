import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Penataan Kawasan | Dinas Perkimtan Sumbar',
  description: 'Program penataan kawasan permukiman untuk menciptakan lingkungan hunian yang tertata dan berkelanjutan',
}

export default function PenataanKawasanPage() {
  const penataanData = {
    name: 'Penataan Kawasan Permukiman',
    description: 'Program penataan dan pengembangan kawasan permukiman untuk menciptakan lingkungan hunian yang tertata, nyaman, dan berkelanjutan',
    tujuan: [
      'Menciptakan kawasan permukiman yang tertata',
      'Meningkatkan kualitas lingkungan hunian',
      'Mengoptimalkan pemanfaatan ruang',
      'Menyediakan infrastruktur yang memadai'
    ],
    kegiatan: [
      'Penyusunan rencana tata ruang kawasan',
      'Pembangunan infrastruktur permukiman',
      'Penataan ruang terbuka hijau',
      'Pengembangan fasilitas umum'
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Penataan Kawasan Permukiman
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {penataanData.description}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Program Penataan Kawasan
          </h2>
          
          <div className="prose max-w-none text-gray-600 mb-8">
            <p>
              Penataan kawasan permukiman merupakan upaya strategis untuk menciptakan 
              lingkungan hunian yang berkualitas, tertata, dan berkelanjutan. Program ini 
              meliputi perencanaan tata ruang, pengembangan infrastruktur, dan peningkatan 
              kualitas lingkungan permukiman.
            </p>
          </div>

          {/* Tujuan */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Tujuan Program
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {penataanData.tujuan.map((tujuan: string, index: number) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-600">{tujuan}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Kegiatan */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Kegiatan Utama
            </h3>
            <div className="space-y-4">
              {penataanData.kegiatan.map((kegiatan: string, index: number) => (
                <div key={index} className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-medium">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">{kegiatan}</h4>
                      <p className="text-gray-600 text-sm">
                        {index === 0 && "Penyusunan masterplan dan detail planning kawasan permukiman"}
                        {index === 1 && "Pembangunan jalan, drainase, air bersih, dan utilitas lainnya"}
                        {index === 2 && "Pengembangan taman, ruang publik, dan area hijau"}
                        {index === 3 && "Pembangunan sekolah, puskesmas, dan fasilitas sosial"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Komponen Penataan */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Komponen Penataan Kawasan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Infrastruktur</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Jalan lingkungan</li>
                  <li>• Sistem drainase</li>
                  <li>• Jaringan air bersih</li>
                  <li>• Jaringan listrik</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Fasilitas Umum</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Fasilitas pendidikan</li>
                  <li>• Fasilitas kesehatan</li>
                  <li>• Fasilitas peribadatan</li>
                  <li>• Fasilitas olahraga</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Ruang Terbuka</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Taman lingkungan</li>
                  <li>• Area bermain anak</li>
                  <li>• Ruang publik</li>
                  <li>• Jalur pedestrian</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Target Program */}
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Target Penataan Kawasan 2024
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Luas Kawasan</h4>
                <p className="text-2xl font-bold text-green-600">500 Ha</p>
                <p className="text-sm text-gray-600">Kawasan permukiman tertata</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Anggaran</h4>
                <p className="text-2xl font-bold text-green-600">Rp 50 M</p>
                <p className="text-sm text-gray-600">Total anggaran program</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lokasi Prioritas */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Lokasi Prioritas Penataan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Kawasan Perkotaan</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Kawasan Padang Utara - 150 Ha</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Kawasan Bukittinggi Timur - 100 Ha</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Kawasan Payakumbuh - 80 Ha</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Kawasan Perdesaan</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Kawasan Padang Pariaman - 70 Ha</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Kawasan Tanah Datar - 60 Ha</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Kawasan Lima Puluh Kota - 40 Ha</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Informasi Lebih Lanjut
          </h3>
          <p className="text-gray-600 mb-4">
            Untuk informasi lebih lanjut mengenai Program Penataan Kawasan, silakan hubungi:
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
