import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visi dan Misi PPID | PPID Dinas Perkim Sumatera Barat",
  description: "Visi dan Misi PPID Dinas Perumahan, Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat",
};

export default function PPIDVisiMisi() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Visi dan Misi PPID</h1>
      
      <div className="space-y-8">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Visi</h2>
          <p className="text-gray-700">
            Terwujudnya pelayanan informasi yang transparan dan akuntabel untuk memenuhi hak pemohon informasi sesuai dengan ketentuan peraturan perundang-undangan.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Misi</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
             Meningkatkan pengelolaan dan pelayanan informasi yang berkualitas
            </li>
            <li>
              Membangun dan mengembangkan sistem penyediaan dan layanan informasi
            </li>
            <li>
              Meningkatkan kompetensi sumber daya manusia
            </li>
            <li>
              Mewujudkan keterbukaan informasi publik yang bertanggung jawab dan sesuai dengan ketentuan peraturan perundang-undangan
            </li>
            <li>
              Meningkatkan kapasitas sumber daya manusia dalam pelayanan informasi publik
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
