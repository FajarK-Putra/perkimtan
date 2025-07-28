import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sertifikasi Tanah | Dinas Perkimtan Sumbar',
  description: 'Layanan sertifikasi tanah untuk memberikan kepastian hukum atas tanah di Sumatera Barat',
}

export default function SertifikasiTanahPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Sertifikasi Tanah</h1>
          <p className="text-green-100 text-lg">
            Layanan sertifikasi tanah untuk memberikan kepastian hukum atas tanah di Sumatera Barat
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Tentang Sertifikasi Tanah
          </h2>
          <p className="text-gray-600 mb-6">
            Sertifikasi tanah adalah proses pemberian sertifikat sebagai tanda bukti hak yang sah
            atas bidang tanah tertentu. Program ini memberikan kepastian hukum dan perlindungan
            hak atas tanah bagi masyarakat Sumatera Barat.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 rounded-lg p-6">
              <div className="text-green-600 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Kepastian Hukum
              </h3>
              <p className="text-gray-600 text-sm">
                Memberikan kepastian hukum dan perlindungan terhadap hak atas tanah
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <div className="text-blue-600 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Jaminan Investasi
              </h3>
              <p className="text-gray-600 text-sm">
                Menjamin keamanan investasi properti dan nilai aset tanah
              </p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6">
              <div className="text-yellow-600 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Proses Cepat
              </h3>
              <p className="text-gray-600 text-sm">
                Proses sertifikasi yang efisien dan transparan
              </p>
            </div>
          </div>
        </div>

        {/* Jenis Sertifikat */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Jenis Sertifikat Tanah
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Sertifikat Hak Milik (SHM)</h4>
              <p className="text-gray-600 text-sm mb-4">
                Hak turun temurun, terkuat dan terpenuh yang dapat dipunyai orang atas tanah.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Berlaku selamanya</li>
                <li>• Dapat dipindahtangankan</li>
                <li>• Dapat dijadikan jaminan</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Sertifikat Hak Guna Bangunan (SHGB)</h4>
              <p className="text-gray-600 text-sm mb-4">
                Hak untuk mendirikan dan mempunyai bangunan-bangunan atas tanah.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Berlaku 30 tahun</li>
                <li>• Dapat diperpanjang 20 tahun</li>
                <li>• Dapat dipindahtangankan</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Sertifikat Hak Pakai (SHP)</h4>
              <p className="text-gray-600 text-sm mb-4">
                Hak untuk menggunakan dan/atau memungut hasil dari tanah.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Berlaku 25 tahun</li>
                <li>• Dapat diperpanjang</li>
                <li>• Sesuai ketentuan yang berlaku</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Sertifikat Hak Guna Usaha (SHGU)</h4>
              <p className="text-gray-600 text-sm mb-4">
                Hak untuk mengusahakan tanah yang dikuasai negara untuk pertanian.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Berlaku 25-35 tahun</li>
                <li>• Dapat diperpanjang</li>
                <li>• Untuk usaha pertanian</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Persyaratan */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Persyaratan Sertifikasi
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-4">Dokumen Umum</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-600">Fotokopi KTP yang masih berlaku</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-600">Fotokopi Kartu Keluarga</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-600">Surat permohonan bermaterai</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-600">Surat keterangan tidak sengketa dari kelurahan</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-4">Dokumen Tanah</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-600">Fotokopi bukti kepemilikan tanah</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-600">Surat ukur/gambar situasi</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-600">SPPT PBB tahun berjalan</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-600">Surat pernyataan penguasaan fisik bidang tanah</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Proses */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Alur Proses Sertifikasi
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">1</span>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Pengajuan</h4>
              <p className="text-gray-600 text-sm">Mengajukan permohonan dengan melengkapi dokumen</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Verifikasi</h4>
              <p className="text-gray-600 text-sm">Pemeriksaan kelengkapan dan keabsahan dokumen</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">3</span>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Pengukuran</h4>
              <p className="text-gray-600 text-sm">Pengukuran dan pemetaan bidang tanah</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">4</span>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Penerbitan</h4>
              <p className="text-gray-600 text-sm">Penerbitan sertifikat tanah</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Informasi Lebih Lanjut
          </h3>
          <p className="text-gray-600 mb-4">
            Untuk informasi lebih lanjut mengenai layanan sertifikasi tanah,
            silakan hubungi:
          </p>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-800 font-medium">Bidang Pertanahan</p>
            <p className="text-gray-600">Dinas Perumahan, Kawasan Permukiman dan Pertanahan Sumbar</p>
            <p className="text-gray-600">Telp: (0751) 123456 | Email: pertanahan@perkimtan.sumbar.go.id</p>
          </div>
        </div>
      </div>
    </div>
  )
}
