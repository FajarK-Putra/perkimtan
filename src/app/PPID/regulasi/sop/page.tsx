import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SOP PPID | PPID Dinas Perkim Sumatera Barat",
  description: "Standar Operasional Prosedur PPID Dinas Perumahan, Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat",
};

export default function PPIDSOP() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Standar Operasional Prosedur (SOP)</h1>
      
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">SOP Pelayanan Informasi Publik</h2>
          <div className="space-y-4">
            <a 
              href="#"
              className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-blue-600">SOP Permohonan Informasi</h3>
                  <p className="text-sm text-gray-600">Prosedur standar pengajuan permohonan informasi publik</p>
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
                  <h3 className="font-semibold text-blue-600">SOP Pengajuan Keberatan</h3>
                  <p className="text-sm text-gray-600">Prosedur standar pengajuan keberatan informasi</p>
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
                  <h3 className="font-semibold text-blue-600">SOP Pengelolaan Informasi</h3>
                  <p className="text-sm text-gray-600">Prosedur standar pengelolaan dan dokumentasi informasi</p>
                </div>
                <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                  Unduh
                </button>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Bagan Alur SOP</h2>
          <div className="space-y-4">
            <a 
              href="#"
              className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-blue-600">Alur Permohonan Informasi</h3>
                  <p className="text-sm text-gray-600">Bagan alur proses permohonan informasi publik</p>
                </div>
                <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                  Lihat
                </button>
              </div>
            </a>
            <a 
              href="#"
              className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-blue-600">Alur Penanganan Keberatan</h3>
                  <p className="text-sm text-gray-600">Bagan alur proses penanganan keberatan informasi</p>
                </div>
                <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                  Lihat
                </button>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Formulir Terkait SOP</h2>
          <div className="space-y-4">
            <a 
              href="#"
              className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-blue-600">Form Permohonan Informasi</h3>
                  <p className="text-sm text-gray-600">Formulir pengajuan permohonan informasi publik</p>
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
                  <h3 className="font-semibold text-blue-600">Form Keberatan</h3>
                  <p className="text-sm text-gray-600">Formulir pengajuan keberatan informasi</p>
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
                  <h3 className="font-semibold text-blue-600">Form Tanda Terima</h3>
                  <p className="text-sm text-gray-600">Formulir tanda terima informasi publik</p>
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