import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pengaduan Masyarakat | Dinas Perkimtan Sumbar',
  description: 'Layanan pengaduan masyarakat untuk Dinas Perumahan, Kawasan Permukiman dan Pertanahan Sumatera Barat',
}

export default function PengaduanPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Pengaduan Masyarakat
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Sampaikan aspirasi, keluhan, atau laporan Anda mengenai pelayanan 
              dan program Dinas Perkimtan Sumbar
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Info Section */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-3">
            Informasi Layanan Pengaduan
          </h2>
          <div className="text-blue-800 space-y-2">
            <p>• Pengaduan akan ditindaklanjuti maksimal 7 hari kerja</p>
            <p>• Anda akan mendapat nomor tiket untuk tracking pengaduan</p>
            <p>• Semua pengaduan akan ditangani sesuai SOP yang berlaku</p>
            <p>• Data pribadi Anda akan dijaga kerahasiaannya</p>
          </div>
        </div>

        {/* Form Pengaduan */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Form Pengaduan
          </h2>

          <form className="space-y-6">
            {/* Data Pelapor */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Data Pelapor
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nama_pelapor" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="nama_pelapor"
                    name="nama_pelapor"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>

                <div>
                  <label htmlFor="nik" className="block text-sm font-medium text-gray-700 mb-2">
                    NIK (Opsional)
                  </label>
                  <input
                    type="text"
                    id="nik"
                    name="nik"
                    maxLength={16}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="16 digit NIK"
                  />
                </div>

                <div>
                  <label htmlFor="email_pelapor" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email_pelapor"
                    name="email_pelapor"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="contoh@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="telepon_pelapor" className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Telepon *
                  </label>
                  <input
                    type="tel"
                    id="telepon_pelapor"
                    name="telepon_pelapor"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="08xx-xxxx-xxxx"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="alamat_pelapor" className="block text-sm font-medium text-gray-700 mb-2">
                  Alamat *
                </label>
                <textarea
                  id="alamat_pelapor"
                  name="alamat_pelapor"
                  rows={3}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                  placeholder="Alamat lengkap"
                ></textarea>
              </div>
            </div>

            {/* Detail Pengaduan */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Detail Pengaduan
              </h3>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="kategori_pengaduan" className="block text-sm font-medium text-gray-700 mb-2">
                      Kategori Pengaduan *
                    </label>
                    <select
                      id="kategori_pengaduan"
                      name="kategori_pengaduan"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    >
                      <option value="">Pilih kategori</option>
                      <option value="pelayanan">Pelayanan Publik</option>
                      <option value="perumahan">Program Perumahan</option>
                      <option value="kawasan">Kawasan Permukiman</option>
                      <option value="pertanahan">Pertanahan</option>
                      <option value="infrastruktur">Infrastruktur</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="prioritas" className="block text-sm font-medium text-gray-700 mb-2">
                      Tingkat Urgensitas *
                    </label>
                    <select
                      id="prioritas"
                      name="prioritas"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    >
                      <option value="">Pilih tingkat urgensitas</option>
                      <option value="rendah">Rendah</option>
                      <option value="sedang">Sedang</option>
                      <option value="tinggi">Tinggi</option>
                      <option value="darurat">Darurat</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="judul_pengaduan" className="block text-sm font-medium text-gray-700 mb-2">
                    Judul Pengaduan *
                  </label>
                  <input
                    type="text"
                    id="judul_pengaduan"
                    name="judul_pengaduan"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="Ringkasan singkat pengaduan"
                  />
                </div>

                <div>
                  <label htmlFor="lokasi_kejadian" className="block text-sm font-medium text-gray-700 mb-2">
                    Lokasi Kejadian *
                  </label>
                  <input
                    type="text"
                    id="lokasi_kejadian"
                    name="lokasi_kejadian"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="Alamat/lokasi kejadian"
                  />
                </div>

                <div>
                  <label htmlFor="kronologi" className="block text-sm font-medium text-gray-700 mb-2">
                    Kronologi/Uraian Pengaduan *
                  </label>
                  <textarea
                    id="kronologi"
                    name="kronologi"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                    placeholder="Jelaskan secara detail kronologi atau uraian pengaduan Anda..."
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="bukti" className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Bukti (Opsional)
                  </label>
                  <input
                    type="file"
                    id="bukti"
                    name="bukti"
                    multiple
                    accept="image/*,.pdf,.doc,.docx"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Format: JPG, PNG, PDF, DOC, DOCX. Maksimal 5MB per file.
                  </p>
                </div>
              </div>
            </div>

            {/* Pernyataan */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="pernyataan"
                  name="pernyataan"
                  required
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="pernyataan" className="text-sm text-gray-700">
                  Saya menyatakan bahwa data yang saya berikan adalah benar dan dapat dipertanggungjawabkan. 
                  Saya bersedia diproses hukum apabila ternyata data yang saya berikan tidak benar. *
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4">
              <button
                type="reset"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Reset Form
              </button>
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Kirim Pengaduan
              </button>
            </div>
          </form>
        </div>

        {/* Tracking Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Lacak Status Pengaduan
          </h2>
          
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Masukkan nomor tiket pengaduan"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
            <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors">
              Lacak Status
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mt-2">
            Nomor tiket akan dikirimkan via email setelah pengaduan berhasil dikirim
          </p>
        </div>
      </div>
    </div>
  )
}
