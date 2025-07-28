import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Penanganan Kumuh | Dinas Perkimtan Sumbar',
  description: 'Program penanganan kawasan permukiman kumuh untuk meningkatkan kualitas hidup masyarakat',
}

export default function KumuhPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Penanganan Kawasan Permukiman Kumuh
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Program pencegahan dan peningkatan kualitas permukiman kumuh untuk mewujudkan 
            &quot;Kota Tanpa Kumuh&quot; di Sumatera Barat
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Program Penanganan Kumuh
          </h2>
          
          <div className="prose max-w-none text-gray-600 mb-8">
            <p>
              Program penanganan kawasan permukiman kumuh bertujuan untuk meningkatkan kualitas 
              hidup masyarakat yang tinggal di kawasan kumuh melalui perbaikan infrastruktur, 
              fasilitas umum, dan kualitas hunian. Program ini merupakan bagian dari upaya 
              mewujudkan &quot;Kota Tanpa Kumuh&quot; di Sumatera Barat.
            </p>
          </div>

          {/* Strategi Penanganan */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Strategi Penanganan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Pencegahan</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Penataan ruang yang baik</li>
                  <li>• Penyediaan perumahan layak</li>
                  <li>• Pengendalian pembangunan</li>
                  <li>• Edukasi masyarakat</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Peningkatan Kualitas</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Perbaikan infrastruktur</li>
                  <li>• Peningkatan fasilitas umum</li>
                  <li>• Perbaikan kualitas hunian</li>
                  <li>• Pemberdayaan masyarakat</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Kriteria Kumuh */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Kriteria Kawasan Kumuh
            </h3>
            <div className="space-y-4">
              <div className="bg-yellow-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">1. Kondisi Bangunan</h4>
                <p className="text-gray-600 text-sm">
                  Bangunan tidak memenuhi standar teknis (struktur, material, ventilasi)
                </p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">2. Infrastruktur</h4>
                <p className="text-gray-600 text-sm">
                  Keterbatasan akses jalan, air bersih, sanitasi, dan pengelolaan sampah
                </p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">3. Kepadatan</h4>
                <p className="text-gray-600 text-sm">
                  Kepadatan bangunan tinggi dengan jarak antar bangunan tidak sesuai standar
                </p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">4. Legalitas</h4>
                <p className="text-gray-600 text-sm">
                  Status lahan tidak jelas atau tidak sesuai dengan peruntukannya
                </p>
              </div>
            </div>
          </div>

          {/* Program Intervensi */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Program Intervensi
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Perbaikan Hunian</h4>
                <p className="text-gray-600 text-sm">Rehabilitasi dan renovasi rumah tidak layak huni</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Infrastruktur</h4>
                <p className="text-gray-600 text-sm">Pembangunan jalan, drainase, air bersih, sanitasi</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Pemberdayaan</h4>
                <p className="text-gray-600 text-sm">Pelatihan keterampilan dan pengembangan ekonomi</p>
              </div>
            </div>
          </div>

          {/* Lokasi Kumuh */}
          <div className="bg-orange-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Sebaran Kawasan Kumuh di Sumbar
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Kota Padang</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Kelurahan Air Tawar - 25 Ha</li>
                  <li>• Kelurahan Kampung Pondok - 18 Ha</li>
                  <li>• Kelurahan Lambung Bukit - 15 Ha</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Kota Bukittinggi</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Kelurahan Aur Kuning - 12 Ha</li>
                  <li>• Kelurahan Benteng - 10 Ha</li>
                  <li>• Kelurahan Guguk Panjang - 8 Ha</li>
                </ul>
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
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">150 Ha</div>
              <p className="text-gray-600">Kawasan kumuh tertangani</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2.000</div>
              <p className="text-gray-600">Rumah yang diperbaiki</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">10.000</div>
              <p className="text-gray-600">Jiwa terlayani</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Informasi Lebih Lanjut
          </h3>
          <p className="text-gray-600 mb-4">
            Untuk informasi lebih lanjut mengenai Program Penanganan Kumuh, silakan hubungi:
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
