import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Penanganan Kumuh | Dinas Perkimtan Sumbar',
  description: 'Program penanganan kawasan permukiman kumuh untuk meningkatkan kualitas hidup masyarakat',
}

export default function KumuhPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Penataan Kawasan Kumuh</h1>
          <p className="text-red-100 text-lg">
            Program penataan dan peningkatan kualitas kawasan kumuh di Sumatera Barat
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Tentang Program Penataan Kawasan Kumuh
          </h2>
          <p className="text-gray-600 mb-6">
            Program penataan kawasan kumuh merupakan upaya terpadu untuk meningkatkan
            kualitas hidup masyarakat di kawasan kumuh melalui penyediaan infrastruktur
            dasar, peningkatan kualitas perumahan, dan pemberdayaan masyarakat.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 rounded-lg p-6">
              <div className="text-red-600 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Infrastruktur
              </h3>
              <p className="text-gray-600 text-sm">
                Pembangunan dan perbaikan infrastruktur dasar seperti jalan, drainase, dan utilitas
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <div className="text-blue-600 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Perumahan
              </h3>
              <p className="text-gray-600 text-sm">
                Peningkatan kualitas hunian dan pembangunan rumah layak huni
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <div className="text-green-600 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Pemberdayaan
              </h3>
              <p className="text-gray-600 text-sm">
                Program pemberdayaan masyarakat dan peningkatan ekonomi lokal
              </p>
            </div>
          </div>
        </div>

        {/* Definition and Criteria */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Definisi dan Kriteria Kawasan Kumuh
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium text-gray-900 mb-3">
              Definisi Kawasan Kumuh
            </h4>
            <p className="text-gray-600 mb-4">
              Kawasan kumuh adalah kawasan yang tidak layak huni karena ketidakteraturan bangunan,
              tingkat kepadatan bangunan yang tinggi, dan kualitas bangunan serta sarana dan
              prasarana yang tidak memenuhi syarat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-red-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">1. Bangunan</h4>
              <p className="text-gray-600 text-sm">
                Ketidakteraturan bangunan, tingkat kepadatan bangunan yang tinggi,
                dan kualitas bangunan yang tidak memenuhi syarat
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">2. Jalan Lingkungan</h4>
              <p className="text-gray-600 text-sm">
                Jaringan jalan lingkungan yang tidak memadai berupa jalan lingkungan
                yang tidak diperkeras
              </p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">3. Drainase Lingkungan</h4>
              <p className="text-gray-600 text-sm">
                Drainase lingkungan yang tidak memadai berupa tidak tersedianya
                drainase atau kondisi drainase tidak memenuhi syarat teknis
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">4. Penyediaan Air Minum</h4>
              <p className="text-gray-600 text-sm">
                Keterbatasan akses aman terhadap air minum berupa tidak terpenuhinya
                akses air minum yang aman
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">5. Pengelolaan Air Limbah</h4>
              <p className="text-gray-600 text-sm">
                Pengelolaan air limbah yang tidak memadai berupa sistem pengelolaan
                air limbah yang tidak sesuai standar teknis
              </p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">6. Pengelolaan Persampahan</h4>
              <p className="text-gray-600 text-sm">
                Pengelolaan persampahan yang tidak memadai berupa sistem pengelolaan
                persampahan yang tidak sesuai standar teknis
              </p>
            </div>
            <div className="bg-pink-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">7. Proteksi Kebakaran</h4>
              <p className="text-gray-600 text-sm">
                Ketidakmampuan dalam mencegah bahaya kebakaran berupa keterbatasan
                sarana dan prasarana proteksi kebakaran
              </p>
            </div>
          </div>

          {/* Program Intervensi */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Program Intervensi
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-red-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Infrastruktur Dasar</h4>
                <p className="text-gray-600 text-sm">
                  Pembangunan jalan lingkungan, drainase, sanitasi, dan utilitas dasar
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Penataan Hunian</h4>
                <p className="text-gray-600 text-sm">
                  Rehabilitasi dan pembangunan rumah layak huni bagi masyarakat
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Pemberdayaan Ekonomi</h4>
                <p className="text-gray-600 text-sm">
                  Program pelatihan keterampilan dan pengembangan ekonomi masyarakat
                </p>
              </div>
            </div>
          </div>

          {/* Data Sebaran */}
          <div className="mt-8 bg-orange-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Sebaran Kawasan Kumuh di Sumbar
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Kota Padang</h4>
                <p className="text-gray-600 text-sm mb-2">Total: 1.247,32 Ha</p>
                <p className="text-gray-600 text-sm">21 lokasi kawasan kumuh tersebar di berbagai kecamatan</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Kota Bukittinggi</h4>
                <p className="text-gray-600 text-sm mb-2">Total: 89,14 Ha</p>
                <p className="text-gray-600 text-sm">8 lokasi kawasan kumuh di pusat kota</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Kota Payakumbuh</h4>
                <p className="text-gray-600 text-sm mb-2">Total: 76,85 Ha</p>
                <p className="text-gray-600 text-sm">5 lokasi kawasan kumuh</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Kabupaten Lainnya</h4>
                <p className="text-gray-600 text-sm mb-2">Total: 523,69 Ha</p>
                <p className="text-gray-600 text-sm">Tersebar di 19 kabupaten</p>
              </div>
            </div>
          </div>
        </div>

        {/* Target Program */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Target Program 2024
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center bg-red-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-red-600 mb-2">15</div>
              <p className="text-gray-600">Kawasan Kumuh Ditangani</p>
            </div>
            <div className="text-center bg-blue-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">850</div>
              <p className="text-gray-600">Keluarga Penerima Manfaat</p>
            </div>
            <div className="text-center bg-green-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">425</div>
              <p className="text-gray-600">Hektar Kawasan Diperbaiki</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Informasi Lebih Lanjut
          </h3>
          <p className="text-gray-600 mb-4">
            Untuk informasi lebih lanjut mengenai program penataan kawasan kumuh,
            silakan hubungi:
          </p>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-800 font-medium">Bidang Penataan Bangunan dan Lingkungan</p>
            <p className="text-gray-600">Dinas Perumahan, Kawasan Permukiman dan Pertanahan Sumbar</p>
            <p className="text-gray-600">Telp: (0751) 123456 | Email: kumuh@perkimtan.sumbar.go.id</p>
          </div>
        </div>
      </div>
    </div>
  )
}
