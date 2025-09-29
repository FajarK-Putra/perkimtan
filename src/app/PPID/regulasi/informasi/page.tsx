import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulasi Informasi | PPID Dinas Perkim Sumatera Barat",
  description: "Regulasi Keterbukaan Informasi PPID Dinas Perumahan, Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat",
};

export default function RegulasiInformasi() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Regulasi Keterbukaan Informasi</h1>
      
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Undang-Undang</h2>
          <div className="space-y-4">
            <a 
              href="#"
              className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-blue-600">UU No. 14 Tahun 2008</h3>
                  <p className="text-sm text-gray-600">Tentang Keterbukaan Informasi Publik</p>
                </div>
                <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                  Unduh
                </button>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Peraturan Pemerintah</h2>
          <div className="space-y-4">
            <a 
              href="#"
              className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-blue-600">PP No. 61 Tahun 2010</h3>
                  <p className="text-sm text-gray-600">Tentang Pelaksanaan UU No. 14 Tahun 2008</p>
                </div>
                <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                  Unduh
                </button>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Peraturan Komisi Informasi</h2>
          <div className="space-y-4">
            <a 
              href="#"
              className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-blue-600">PERKI No. 1 Tahun 2010</h3>
                  <p className="text-sm text-gray-600">Tentang Standar Layanan Informasi Publik</p>
                </div>
                <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                  Unduh
                </button>
              </div>
            </a>
            <a 
              href="#"
              className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-blue-600">PERKI No. 1 Tahun 2013</h3>
                  <p className="text-sm text-gray-600">Tentang Prosedur Penyelesaian Sengketa Informasi Publik</p>
                </div>
                <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                  Unduh
                </button>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Peraturan Daerah</h2>
          <div className="space-y-4">
            <a 
              href="#"
              className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-blue-600">Perda Provinsi Sumatera Barat</h3>
                  <p className="text-sm text-gray-600">Tentang Keterbukaan Informasi Publik</p>
                </div>
                <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                  Unduh
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}