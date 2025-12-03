import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tugas dan Fungsi | Dinas Perkimtan Sumbar',
  description: 'Tugas dan fungsi Dinas Perumahan, Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat',
}

export default function TugasDanFungsi() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tugas dan Fungsi</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Tugas pokok dan fungsi Dinas Perumahan, Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="space-y-8">
          {/* Tugas Pokok Section */}
          <section className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">Tugas Pokok</h2>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                <p className="text-gray-800 leading-relaxed text-center">
                  Dinas Perumahan Rakyat, Kawasan Permukiman dan Pertanahan mempunyai Tugas Pokok 
                  melaksanakan Urusan Perumahan Rakyat dan Kawasan Permukiman serta Urusan Pertanahan.
                </p>
              </div>
            </div>
          </section>

          {/* Fungsi Section */}
          <section className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">Fungsi</h2>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 mb-6">
                <p className="text-gray-800 leading-relaxed">
                  Untuk menyelenggaran Tugas Pokok tersebut diatas Dinas Perumahan Rakyat, 
                  Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat mempunyai fungsi:
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-start bg-gray-50 rounded-lg p-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                    1
                  </div>
                  <p className="text-gray-700 leading-relaxed">Perumusan kebijakan teknis bidang Perumahan Rakyat, Kawasan Permukiman dan Pertanahan;</p>
                </div>
                <div className="flex items-start bg-gray-50 rounded-lg p-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                    2
                  </div>
                  <p className="text-gray-700 leading-relaxed">Penyelenggaraan urusan pemerintahan dan pelayanan umum bidang Perumahan Rakyat, Kawasan Permukiman dan Pertanahan;</p>
                </div>
                <div className="flex items-start bg-gray-50 rounded-lg p-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                    3
                  </div>
                  <p className="text-gray-700 leading-relaxed">Pembinaan dan fasilitasi bidang Perumahan Rakyat, Kawasan Permukiman dan Pertanahan, lingkup provinsi dan kabupaten/kota;</p>
                </div>
                <div className="flex items-start bg-gray-50 rounded-lg p-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                    4
                  </div>
                  <p className="text-gray-700 leading-relaxed">Pelaksanaan kesekretariatan dinas;</p>
                </div>
              </div>
            </div>
          </section>

          {/* Sekretariat Section */}
          <section className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-8">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">A. Sekretariat</h2>
                <p className="text-gray-800 leading-relaxed">
                  Sekretariat mempunyai tugas pokok merencanakan, melaksanakan, mengkoordinasikan 
                  dan mengendalikan kegiatan administrasi umum, kepegawaian, perlengkapan, 
                  hubungan masyarakat, protokol, penyusunan program dan keuangan.
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Rincian Tugas:</h3>
                <div className="space-y-3">
                  <div className="flex items-start bg-gray-50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                      1
                    </div>
                    <p className="text-gray-700 leading-relaxed">Penyiapan bahan koordinasi kegiatan di lingkungan Dinas;</p>
                  </div>
                  <div className="flex items-start bg-gray-50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                      2
                    </div>
                    <p className="text-gray-700 leading-relaxed">Penyiapan bahan koordinasi dan penyusunan rencana program dan kegiatan di lingkungan Dinas;</p>
                  </div>
                  <div className="flex items-start bg-gray-50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                      3
                    </div>
                    <p className="text-gray-700 leading-relaxed">Penyiapan bahan pembinaan dan pemberian dukungan administrasi yang meliputi ketatausahaan, kepegawaian, hukum, keuangan, kerumahtanggaan, aset, kerja sama, kehumasan, kearsipan dan Dokumentasi di lingkungan Dinas;</p>
                  </div>
                  <div className="flex items-start bg-gray-50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                      4
                    </div>
                    <p className="text-gray-700 leading-relaxed">Penyiapan bahan koordinasi, pembinaan dan penataan organisasi dan tatalaksana di lingkungan Dinas;</p>
                  </div>
                  <div className="flex items-start bg-gray-50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                      5
                    </div>
                    <p className="text-gray-700 leading-relaxed">Penyiapan bahan koordinasi pelaksanaan sistem pengendalian intern Pemerintah dan pengelolaan informasi;</p>
                  </div>
                  <div className="flex items-start bg-gray-50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                      6
                    </div>
                    <p className="text-gray-700 leading-relaxed">Penyiapan bahan pengelolaan barang milik/kekayaan Daerah dan pelayanan pengadaan barang/jasa di lingkungan Dinas;</p>
                  </div>
                  <div className="flex items-start bg-gray-50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                      7
                    </div>
                    <p className="text-gray-700 leading-relaxed">Penyiapan bahan evaluasi dan pelaporan di lingkungan Dinas;</p>
                  </div>
                  <div className="flex items-start bg-gray-50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                      8
                    </div>
                    <p className="text-gray-700 leading-relaxed">Pelaksanaan tugas lain yang diberikan oleh Kepala Dinas sesuai dengan tugas dan fungsinya.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bidang Perumahan Rakyat Section */}
          <section className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-8">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-6 mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">B. Bidang Perumahan Rakyat</h2>
                <p className="text-gray-800 leading-relaxed">
                  Bidang Perumahan Rakyat mempunyai tugas pokok merencanakan, melaksanakan, 
                  mengkoordinasikan, memfasilitasi, mengendalikan dan pelaporan kegiatan yang 
                  meliputi Penyediaan dan Pembiayaan Perumahan, Rehabilitasi Perumahan dan 
                  Bangunan Gedung dan Rumah Negara.
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tugas Pokok dan Fungsi:</h3>
                <div className="space-y-3">
                  <div className="flex items-start bg-gray-50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                      1
                    </div>
                    <p className="text-gray-700 leading-relaxed">Menyiapkan bahan perumusan kebijakan teknis penyediaan dan pembiayaan perumahan, rehabilitasi perumahan dan Bangunan Gedung dan Rumah Negara;</p>
                  </div>
                  <div className="flex items-start bg-gray-50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                      2
                    </div>
                    <p className="text-gray-700 leading-relaxed">Melakukan pembinaan penyelenggaraan perumahan kepada Kabupaten/kota yang meliputi perencanaan, pengaturan, pengendalian dan pengawasan;</p>
                  </div>
                  <div className="flex items-start bg-gray-50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                      3
                    </div>
                    <p className="text-gray-700 leading-relaxed">Melaksanakan penyelenggaran perumahan yang meliputi perencanaan, pembangunan, pemanfaatan dan pengendalian perumahan;</p>
                  </div>
                  <div className="flex items-start bg-gray-50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                      4
                    </div>
                    <p className="text-gray-700 leading-relaxed">Melakukan pencegahan dan peningkatan kualitas terhadap perumahan kumuh;</p>
                  </div>
                  <div className="flex items-start bg-gray-50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                      5
                    </div>
                    <p className="text-gray-700 leading-relaxed">Menyiapkan bahan pemantauan, evaluasi dan pelaporan pelaksanaan tugas dukungan teknis di Bidang Perumahan Rakyat;</p>
                  </div>
                  <div className="flex items-start bg-gray-50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                      6
                    </div>
                    <p className="text-gray-700 leading-relaxed">Melaksanakan tugas kedinasan lain yang diberikan oleh pimpinan.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bidang Kawasan Permukiman Section */}
          <section className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-8">
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-6 mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">C. Bidang Kawasan Permukiman</h2>
                <p className="text-gray-800 leading-relaxed">
                  Bidang Kawasan Permukiman mempunyai tugas pokok merencanakan, melaksanakan, 
                  mengkoordinasikan, memfasilitasi, mengendalikan dan pelaporan kegiatan yang 
                  meliputi Prasarana, Sarana, Utilitas Umum Kawasan Permukiman, Penataan 
                  Permukiman Kumuh dan Permukiman Khusus.
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tugas Pokok dan Fungsi:</h3>
                <div className="space-y-3">
                  <div className="flex items-start bg-gray-50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                      1
                    </div>
                    <p className="text-gray-700 leading-relaxed">Menyiapkan bahan perumusan kebijakan teknis Prasarana, Sarana, Utilitas Umum kawasan permukiman, penataan permukiman kumuh dan permukiman khusus;</p>
                  </div>
                  <div className="flex items-start bg-gray-50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                      2
                    </div>
                    <p className="text-gray-700 leading-relaxed">Menyelenggarakan pembinaan, fasilitasi dan koordinasi terkait kebijakan bidang kawasan permukiman;</p>
                  </div>
                  <div className="flex items-start bg-gray-50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                      3
                    </div>
                    <p className="text-gray-700 leading-relaxed">Menyelenggarakan perencanaan dan pembangunan terkait bidang kawasan permukiman;</p>
                  </div>
                  <div className="flex items-start bg-gray-50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                      4
                    </div>
                    <p className="text-gray-700 leading-relaxed">Menyiapkan bahan pemantauan, evaluasi dan pelaporan pelaksanaan tugas dukungan teknis di bidang kawasan pemukiman;</p>
                  </div>
                  <div className="flex items-start bg-gray-50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                      5
                    </div>
                    <p className="text-gray-700 leading-relaxed">Melaksanakan tugas kedinasan lain yang diberikan oleh pimpinan.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bidang Pertanahan Section */}
          <section className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-8">
              <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-lg p-6 mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">D. Bidang Pertanahan</h2>
                <p className="text-gray-800 leading-relaxed">
                  Bidang Pertanahan mempunyai tugas pokok merencanakan, melaksanakan, 
                  mengkoordinasikan, memfasilitasi, mengendalikan dan pelaporan kegiatan yang 
                  meliputi pengadaan tanah, perencanaan dan penetapan penggunaan tanah dan 
                  penyelesaian masalah tanah dan izin lokasi lintas daerah.
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tugas Pokok dan Fungsi:</h3>
                <div className="space-y-3">
                  <div className="flex items-start bg-gray-50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                      1
                    </div>
                    <p className="text-gray-700 leading-relaxed">Menyiapkan bahan perumusan kebijakan teknis pengadaan tanah yang menjadi kewenangan daerah provinsi;</p>
                  </div>
                  <div className="flex items-start bg-gray-50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                      2
                    </div>
                    <p className="text-gray-700 leading-relaxed">Menyiapkan perumusan kebijakan teknis dan koordinasi, pelaksanaan kebijakan pemantauan, analisis, evaluasi, dan penyusunan laporan mengenai urusan perencanaan dan penetapan penggunaan tanah lintas daerah kabupaten/kota dalam 1 (satu) daerah Provinsi;</p>
                  </div>
                  <div className="flex items-start bg-gray-50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                      3
                    </div>
                    <p className="text-gray-700 leading-relaxed">Penyiapan perumusan kebijakan teknis, koordinasi, pelaksanaan kebijakan, pemantauan, analisis, evaluasi dan penyusunan laporan mengenai urusan penyelesaian masalah tanah dan izin lokasi lintas daerah kabupaten/kota dalam 1 (satu) daerah Provinsi;</p>
                  </div>
                  <div className="flex items-start bg-gray-50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                      4
                    </div>
                    <p className="text-gray-700 leading-relaxed">Menyiapkan bahan pemantauan, evaluasi dan pelaporan pelaksanaan tugas dukungan teknis di bidang kawasan pertanahan;</p>
                  </div>
                  <div className="flex items-start bg-gray-50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                      5
                    </div>
                    <p className="text-gray-700 leading-relaxed">Melaksanakan tugas kedinasan lain yang diberikan oleh pimpinan.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Publication Info */}
          <div className="text-center text-sm text-gray-500 mt-8 pb-4">
            Publikasi Oleh: Admin Perkimtan
          </div>
        </div>
      </div>
    </div>
  );
}