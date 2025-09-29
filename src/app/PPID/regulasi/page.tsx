import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulasi | PPID Dinas Perkim Sumatera Barat",
  description: "Regulasi PPID Dinas Perumahan, Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat",
};

export default function PPIDRegulasi() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Regulasi PPID</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a href="/PPID/regulasi/informasi" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-3">Regulasi Keterbukaan Informasi</h2>
          <p className="text-gray-600">Peraturan dan kebijakan tentang keterbukaan informasi publik</p>
        </a>
        <a href="/PPID/regulasi/sop" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-3">Standar Operasional Prosedur (SOP)</h2>
          <p className="text-gray-600">SOP pelayanan informasi publik</p>
        </a>
      </div>
    </div>
  );
}
