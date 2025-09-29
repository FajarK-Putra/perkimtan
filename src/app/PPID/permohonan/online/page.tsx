import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Permohonan Online | PPID Dinas Perkim Sumatera Barat",
  description: "Form Permohonan Informasi Online PPID Dinas Perumahan, Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat",
};

export default function PermohonanOnline() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Permohonan Informasi Online</h1>
      
      <div className="max-w-2xl mx-auto">
        <form className="bg-white shadow-md rounded-lg p-6 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Data Pemohon</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  placeholder="Masukkan nama lengkap"
                />
              </div>
              <div>
                <label htmlFor="nik" className="block text-sm font-medium text-gray-700 mb-1">
                  NIK
                </label>
                <input
                  type="text"
                  id="nik"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  placeholder="Masukkan NIK"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  placeholder="Masukkan email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  No. Telepon
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  placeholder="Masukkan nomor telepon"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Alamat
                </label>
                <textarea
                  id="address"
                  rows={3}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  placeholder="Masukkan alamat lengkap"
                ></textarea>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Informasi yang Dimohon</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="request" className="block text-sm font-medium text-gray-700 mb-1">
                  Rincian Informasi
                </label>
                <textarea
                  id="request"
                  rows={4}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  placeholder="Jelaskan secara rinci informasi yang Anda butuhkan"
                ></textarea>
              </div>
              <div>
                <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-1">
                  Tujuan Penggunaan Informasi
                </label>
                <textarea
                  id="purpose"
                  rows={3}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  placeholder="Jelaskan tujuan penggunaan informasi"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
              Kirim Permohonan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}