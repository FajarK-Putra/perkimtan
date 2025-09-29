import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laporan | PPID Dinas Perkim Sumatera Barat",
  description: "Laporan PPID Dinas Perumahan, Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat",
};

export default function PPIDLaporan() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Laporan PPID</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a href="/PPID/laporan/keuangan" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-3">Laporan Keuangan</h2>
          <p className="text-gray-600">Laporan keuangan tahunan dan semester</p>
        </a>
        <a href="/PPID/laporan/kinerja-2024" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-3">Laporan Kinerja</h2>
          <p className="text-gray-600">Laporan kinerja dan capaian tahun 2024</p>
        </a>
        <a href="/PPID/laporan/rencana-pengadaan" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-3">Rencana Pengadaan</h2>
          <p className="text-gray-600">Rencana pengadaan barang dan jasa</p>
        </a>
      </div>
    </div>
  );
}
