import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Permohonan Informasi | PPID Dinas Perkim Sumatera Barat",
  description: "Permohonan Informasi Publik PPID Dinas Perumahan, Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat",
};

export default function PPIDPermohonan() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Permohonan Informasi</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a href="/PPID/permohonan/online" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-3">Permohonan Online</h2>
          <p className="text-gray-600">Form permohonan informasi secara online</p>
        </a>
        <a href="/PPID/permohonan/tata-cara" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-3">Tata Cara Permohonan</h2>
          <p className="text-gray-600">Prosedur dan tata cara permohonan informasi</p>
        </a>
        <a href="/PPID/permohonan/keberatan" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-3">Pengajuan Keberatan</h2>
          <p className="text-gray-600">Prosedur pengajuan keberatan informasi</p>
        </a>
        <a href="/PPID/permohonan/sengketa" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-3">Sengketa Informasi</h2>
          <p className="text-gray-600">Informasi tentang penyelesaian sengketa</p>
        </a>
      </div>
    </div>
  );
}
