import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Program KOTAKU | Dinas Perkimtan Sumbar',
  description: 'Program Kota Tanpa Kumuh (KOTAKU) untuk menciptakan kota layak huni, produktif, dan berkelanjutan',
}

export default function KOTAKUPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Program Kota Tanpa Kumuh (KOTAKU)
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Program nasional untuk menciptakan kota layak huni, produktif, dan berkelanjutan 
            melalui penanganan permukiman kumuh secara komprehensif
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Tentang Program KOTAKU
          </h2>
          
          <div className="prose max-w-none text-gray-600 mb-8">
            <p>
              Program Kota Tanpa Kumuh (KOTAKU) adalah program nasional yang bertujuan untuk 
              mewujudkan permukiman perkotaan yang layak huni, produktif, dan berkelanjutan. 
              Program ini mengintegrasikan pendekatan pencegahan dan peningkatan kualitas 
              permukiman kumuh melalui kolaborasi multi-stakeholder.
            </p>
          </div>

          {/* Tujuan Program */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Tujuan Program KOTAKU
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-medium">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Mencegah tumbuhnya kumuh baru</h4>
                  <p className="text-gray-600 text-sm">Melalui penataan ruang dan pengendalian pembangunan</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-medium">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Meningkatkan kualitas permukiman kumuh</h4>
                  <p className="text-gray-600 text-sm">Perbaikan infrastruktur dan fasilitas hunian</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 font-medium">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Memperkuat kelembagaan</h4>
                  <p className="text-gray-600 text-sm">Membangun kapasitas pemerintah dan masyarakat</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-medium">4</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Mengembangkan ekonomi lokal</h4>
                  <p className="text-gray-600 text-sm">Pemberdayaan ekonomi masyarakat setempat</p>
                </div>
              </div>
            </div>
          </div>

          {/* Komponen Program */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Komponen Program
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-medium text-gray-900 mb-3">Komponen Infrastruktur</h4>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Pembangunan jalan lingkungan</li>
                  <li>• Sistem drainase kawasan</li>
                  <li>• Jaringan air bersih</li>
                  <li>• Sanitasi komunal</li>
                  <li>• Pengelolaan sampah</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="font-medium text-gray-900 mb-3">Komponen Sosial Ekonomi</h4>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Pelatihan keterampilan</li>
                  <li>• Pengembangan UMKM</li>
                  <li>• Program mikro kredit</li>
                  <li>• Penguatan kelembagaan</li>
                  <li>• Pendampingan masyarakat</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pendekatan Program */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Pendekatan Program
            </h3>
            <div className="space-y-4">
              <div className="bg-indigo-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Community Driven Development (CDD)</h4>
                <p className="text-gray-600 text-sm">
                  Pembangunan yang dipimpin oleh masyarakat dengan melibatkan partisipasi aktif 
                  warga dalam perencanaan, pelaksanaan, dan monitoring program.
                </p>
              </div>
              <div className="bg-teal-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Area Based Approach</h4>
                <p className="text-gray-600 text-sm">
                  Pendekatan berbasis kawasan yang mengintegrasikan berbagai intervensi 
                  dalam satu wilayah untuk hasil yang komprehensif.
                </p>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Multi-Stakeholder Partnership</h4>
                <p className="text-gray-600 text-sm">
                  Kerjasama multi-pihak antara pemerintah, masyarakat, swasta, dan 
                  lembaga non-pemerintah untuk keberlanjutan program.
                </p>
              </div>
            </div>
          </div>

          {/* Lokasi KOTAKU */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Lokasi Program KOTAKU di Sumbar
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Kota Padang</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Kelurahan Air Tawar</span>
                    <span className="font-medium text-blue-600">45 Ha</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Kelurahan Kampung Pondok</span>
                    <span className="font-medium text-blue-600">38 Ha</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Kelurahan Lambung Bukit</span>
                    <span className="font-medium text-blue-600">32 Ha</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Kota Bukittinggi</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Kelurahan Aur Kuning</span>
                    <span className="font-medium text-green-600">25 Ha</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Kelurahan Benteng</span>
                    <span className="font-medium text-green-600">20 Ha</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Kelurahan Guguk Panjang</span>
                    <span className="font-medium text-green-600">18 Ha</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Target dan Capaian */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Target dan Capaian Program
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">200 Ha</div>
              <p className="text-gray-600 text-sm">Target kawasan kumuh tertangani</p>
              <div className="mt-2 bg-blue-100 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">75% tercapai</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">15.000</div>
              <p className="text-gray-600 text-sm">Jiwa terlayani</p>
              <div className="mt-2 bg-green-100 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{width: '80%'}}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">80% tercapai</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">3.500</div>
              <p className="text-gray-600 text-sm">Rumah diperbaiki</p>
              <div className="mt-2 bg-yellow-100 rounded-full h-2">
                <div className="bg-yellow-600 h-2 rounded-full" style={{width: '70%'}}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">70% tercapai</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">25 km</div>
              <p className="text-gray-600 text-sm">Infrastruktur dibangun</p>
              <div className="mt-2 bg-purple-100 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{width: '85%'}}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">85% tercapai</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Informasi Lebih Lanjut
          </h3>
          <p className="text-gray-600 mb-4">
            Untuk informasi lebih lanjut mengenai Program KOTAKU, silakan hubungi:
          </p>
          <div className="space-y-2 text-gray-600">
            <p><span className="font-medium">Bidang Kawasan Permukiman</span></p>
            <p><span className="font-medium">Telp:</span> (0751) 123457</p>
            <p><span className="font-medium">Email:</span> kotaku@perkimtan.sumbarprov.go.id</p>
          </div>
        </div>
      </div>
    </div>
  )
}
