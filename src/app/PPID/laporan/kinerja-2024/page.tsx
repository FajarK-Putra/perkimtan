import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laporan Kinerja | PPID Dinas Perkim Sumatera Barat",
  description: "Laporan Kinerja PPID Dinas Perumahan, Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat",
};

export default function LaporanKinerja() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Laporan Kinerja 2024</h1>
      
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Laporan Kinerja Triwulan</h2>
          <div className="space-y-4">
            <a 
              href="#"
              className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-blue-600">Laporan Kinerja Triwulan I 2024</h3>
                  <p className="text-sm text-gray-600">Format: PDF | Ukuran: 1.5 MB</p>
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
                  <h3 className="font-semibold text-blue-600">Laporan Kinerja Triwulan II 2024</h3>
                  <p className="text-sm text-gray-600">Format: PDF | Ukuran: 1.6 MB</p>
                </div>
                <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                  Unduh
                </button>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Laporan Capaian Kinerja</h2>
          <div className="space-y-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Capaian Kinerja Semester I 2024</h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Realisasi Program</span>
                    <span className="font-semibold">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "85%"}}></div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Penyerapan Anggaran</span>
                    <span className="font-semibold">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{width: "78%"}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}