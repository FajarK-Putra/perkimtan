export default function LaporPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Layanan Pengaduan</h1>
          <p className="mt-4 text-lg text-gray-600">
            Sampaikan laporan atau pengaduan Anda terkait layanan kami
          </p>
        </div>

        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="p-6">
            <form className="space-y-6">
              <div>
                <label htmlFor="nama" className="block text-sm font-medium text-gray-700">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="kategori" className="block text-sm font-medium text-gray-700">
                  Kategori Laporan
                </label>
                <select
                  id="kategori"
                  name="kategori"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                >
                  <option value="">Pilih kategori</option>
                  <option value="perumahan">Perumahan</option>
                  <option value="kawasan">Kawasan Permukiman</option>
                  <option value="pertanahan">Pertanahan</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>

              <div>
                <label htmlFor="judul" className="block text-sm font-medium text-gray-700">
                  Judul Laporan
                </label>
                <input
                  type="text"
                  id="judul"
                  name="judul"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="isi" className="block text-sm font-medium text-gray-700">
                  Isi Laporan
                </label>
                <textarea
                  id="isi"
                  name="isi"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="lampiran" className="block text-sm font-medium text-gray-700">
                  Lampiran (opsional)
                </label>
                <input
                  type="file"
                  id="lampiran"
                  name="lampiran"
                  className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                <p className="mt-1 text-sm text-gray-500">
                  Format yang didukung: PDF, JPG, PNG (max. 5MB)
                </p>
              </div>

              <div className="bg-gray-50 -mx-6 -mb-6 px-6 py-4">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  Kirim Laporan
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Informasi Penting</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Pastikan data yang Anda masukkan sudah benar dan lengkap
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Laporan akan diproses dalam waktu 3-5 hari kerja
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Tim kami akan menghubungi Anda melalui email atau telepon
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}