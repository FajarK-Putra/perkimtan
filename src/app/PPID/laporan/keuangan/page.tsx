import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laporan Keuangan | PPID Dinas Perkim Sumatera Barat",
  description: "Laporan Keuangan PPID Dinas Perumahan, Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat",
};

export default function LaporanKeuangan() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Laporan Keuangan</h1>
      
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Laporan Keuangan Tahunan</h2>
          <div className="space-y-4">
            <a 
              href="#"
              className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-blue-600">Laporan Keuangan Tahun 2024</h3>
                  <p className="text-sm text-gray-600">Format: PDF | Ukuran: 2.5 MB</p>
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
                  <h3 className="font-semibold text-blue-600">Laporan Keuangan Tahun 2023</h3>
                  <p className="text-sm text-gray-600">Format: PDF | Ukuran: 2.3 MB</p>
                </div>
                <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                  Unduh
                </button>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Laporan Keuangan Semester</h2>
          <div className="space-y-4">
            <a 
              href="#"
              className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-blue-600">Semester I Tahun 2024</h3>
                  <p className="text-sm text-gray-600">Format: PDF | Ukuran: 1.8 MB</p>
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
                  <h3 className="font-semibold text-blue-600">Semester II Tahun 2023</h3>
                  <p className="text-sm text-gray-600">Format: PDF | Ukuran: 1.7 MB</p>
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