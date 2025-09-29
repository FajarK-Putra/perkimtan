import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Informasi | PPID Dinas Perkim Sumatera Barat",
  description: "Informasi Publik PPID Dinas Perumahan, Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat",
};

export default function PPIDInformasi() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Informasi Publik</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a href="/PPID/informasi/berkala" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-3">Informasi Berkala</h2>
          <p className="text-gray-600">Informasi yang wajib disediakan dan diumumkan secara berkala</p>
        </a>
        <a href="/PPID/informasi/serta-merta" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-3">Informasi Serta Merta</h2>
          <p className="text-gray-600">Informasi yang wajib diumumkan secara serta merta</p>
        </a>
        <a href="/PPID/informasi/setiap-saat" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-3">Informasi Setiap Saat</h2>
          <p className="text-gray-600">Informasi yang wajib tersedia setiap saat</p>
        </a>
        <a href="/PPID/informasi/dikecualikan" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-3">Informasi Dikecualikan</h2>
          <p className="text-gray-600">Informasi yang dikecualikan</p>
        </a>
      </div>
    </div>
  );
}
