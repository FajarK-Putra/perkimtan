import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sertifikasi Tanah | Dinas Perkimtan Sumbar',
  description: 'Layanan sertifikasi tanah untuk memberikan kepastian hukum atas tanah di Sumatera Barat',
}

export default function SertifikasiTanahPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Sertifikasi Tanah
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Layanan sertifikasi tanah untuk memberikan kepastian hukum dan perlindungan 
            hak atas tanah bagi masyarakat Sumatera Barat
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Tentang Sertifikasi Tanah
          </h2>
          
          <div className="prose max-w-none text-gray-600 mb-8">
            <p>
              Sertifikasi tanah adalah proses pemberian sertifikat hak atas tanah yang dilakukan 
              oleh Badan Pertanahan Nasional sebagai bukti kuat dan memberikan kepastian hukum 
              atas kepemilikan tanah. Program ini bertujuan untuk memberikan perlindungan hukum 
              dan rasa aman bagi pemilik tanah.
            </p>
          </div>

          {/* Jenis Sertifikat */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Jenis Sertifikat Tanah
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Hak Milik (HM)</h4>
                <p className="text-gray-600 text-sm mb-2">
                  Hak turun-temurun, terkuat, dan terpenuh yang dapat dipunyai orang atas tanah.
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Berlaku selamanya</li>
                  <li>• Dapat dialihkan dan dijadikan jaminan</li>
                  <li>• Hanya untuk WNI</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Hak Guna Bangunan (HGB)</h4>
                <p className="text-gray-600 text-sm mb-2">
                  Hak untuk mendirikan dan mempunyai bangunan di atas tanah yang bukan miliknya.
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Berlaku 30 tahun, dapat diperpanjang</li>
                  <li>• Dapat dialihkan dan dijadikan jaminan</li>
                  <li>• Untuk WNI dan badan hukum Indonesia</li>
                </ul>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Hak Pakai (HP)</h4>
                <p className="text-gray-600 text-sm mb-2">
                  Hak untuk menggunakan dan/atau memungut hasil dari tanah yang dikuasai langsung oleh negara.
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Berlaku 25 tahun, dapat diperpanjang</li>
                  <li>• Dapat dialihkan dengan syarat</li>
                  <li>• Untuk WNI, WNA, dan badan hukum</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Hak Guna Usaha (HGU)</h4>
                <p className="text-gray-600 text-sm mb-2">
                  Hak untuk mengusahakan tanah yang dikuasai langsung oleh negara untuk pertanian, perkebunan.
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Berlaku 35 tahun, dapat diperpanjang</li>
                  <li>• Untuk usaha pertanian/perkebunan</li>
                  <li>• Untuk WNI dan badan hukum Indonesia</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Persyaratan */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Persyaratan Sertifikasi Tanah
            </h3>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Dokumen Umum</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Fotokopi KTP pemohon yang masih berlaku</li>
                  <li>• Fotokopi Kartu Keluarga</li>
                  <li>• Surat permohonan bermaterai</li>
                  <li>• Surat kuasa (jika dikuasakan)</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Dokumen Tanah</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Dokumen kepemilikan tanah (girik/letter C/akta jual beli)</li>
                  <li>• Surat keterangan tanah dari kelurahan/desa</li>
                  <li>• Surat pernyataan penguasaan fisik bidang tanah (SPPT)</li>
                  <li>• Fotokopi SPPT PBB tahun terakhir</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Dokumen Pendukung</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Surat keterangan tidak sengketa dari RT/RW</li>
                  <li>• Peta/sketsa lokasi tanah</li>
                  <li>• Foto bidang tanah dari berbagai arah</li>
                  <li>• Surat pernyataan tidak dalam sengketa</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Alur Proses */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Alur Proses Sertifikasi
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-medium">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Pendaftaran</h4>
                  <p className="text-gray-600 text-sm">
                    Pemohon mengajukan permohonan dengan melengkapi berkas persyaratan
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-medium">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Penelitian Data Yuridis</h4>
                  <p className="text-gray-600 text-sm">
                    Pemeriksaan kelengkapan dan keabsahan dokumen-dokumen tanah
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 font-medium">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Pengukuran Tanah</h4>
                  <p className="text-gray-600 text-sm">
                    Pengukuran dan pemetaan bidang tanah oleh petugas ukur
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-medium">4</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Pemeriksaan Tanah</h4>
                  <p className="text-gray-600 text-sm">
                    Pemeriksaan fisik kondisi tanah dan batas-batas bidang tanah
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-medium">5</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Pengumuman</h4>
                  <p className="text-gray-600 text-sm">
                    Pengumuman data fisik dan yuridis selama 60 hari kalender
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-medium">6</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Penerbitan Sertifikat</h4>
                  <p className="text-gray-600 text-sm">
                    Penandatanganan dan penerbitan sertifikat hak atas tanah
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Biaya dan Waktu */}
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Biaya dan Waktu Proses
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Estimasi Biaya</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Biaya pendaftaran</span>
                    <span className="font-medium">Rp 50.000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Biaya pengukuran</span>
                    <span className="font-medium">Rp 200.000 - 500.000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">PNBP sertifikat</span>
                    <span className="font-medium">Rp 100.000 - 300.000</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-gray-900">Total estimasi</span>
                    <span className="text-green-600">Rp 350.000 - 850.000</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Waktu Proses</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Proses normal</span>
                    <span className="font-medium">105 hari kerja</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Proses khusus (PTSL)</span>
                    <span className="font-medium">30 hari kerja</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Pengumuman</span>
                    <span className="font-medium">60 hari kalender</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Program PTSL */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Program Pendaftaran Tanah Sistematis Lengkap (PTSL)
          </h3>
          <div className="prose max-w-none text-gray-600 mb-6">
            <p>
              PTSL adalah program percepatan pendaftaran tanah yang dilakukan secara serentak 
              di seluruh wilayah desa/kelurahan dalam satu hamparan yang meliputi semua objek 
              pendaftaran tanah yang belum didaftar dan yang sudah didaftar tetapi belum diterbitkan sertifikatnya.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Keunggulan PTSL</h4>
              <ul className="text-gray-600 text-sm space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Proses lebih cepat (30 hari kerja)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Biaya lebih murah (disubsidi pemerintah)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Pelayanan sampai ke desa</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Gratis untuk masyarakat kurang mampu</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Target PTSL 2024</h4>
              <div className="space-y-3">
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="text-lg font-bold text-blue-600">5.000 bidang</div>
                  <p className="text-sm text-gray-600">Target sertifikat yang diterbitkan</p>
                </div>
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="text-lg font-bold text-green-600">50 desa</div>
                  <p className="text-sm text-gray-600">Lokasi pelaksanaan PTSL</p>
                </div>
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
            Untuk informasi lebih lanjut mengenai Sertifikasi Tanah, silakan hubungi:
          </p>
          <div className="space-y-2 text-gray-600">
            <p><span className="font-medium">Bidang Pertanahan</span></p>
            <p><span className="font-medium">Telp:</span> (0751) 123458</p>
            <p><span className="font-medium">Email:</span> pertanahan@perkimtan.sumbarprov.go.id</p>
            <p><span className="font-medium">Alamat:</span> Jl. Khatib Sulaiman No. 52, Padang</p>
          </div>
        </div>
      </div>
    </div>
  )
}
