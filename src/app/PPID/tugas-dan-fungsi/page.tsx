import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tugas dan Fungsi PPID | PPID Dinas Perkim Sumatera Barat",
  description: "Tugas dan Fungsi PPID Dinas Perumahan, Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat",
};

export default function PPIDTugasFungsi() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tugas dan Fungsi PPID</h1>
      
      <div className="mb-8">
        <Image
          src="/app/assets/img/tugas-fungsi-PPID.jpg"
          alt="Tugas dan Fungsi PPID"
          width={1200}
          height={800}
          className="w-full h-auto rounded-lg shadow-lg"
          priority
        />
      </div>

      <div className="space-y-8">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Tugas PPID Provinsi Sumatera Barat</h2>
          <p className="mb-4 text-gray-700">
            Pejabat Pengelola Informasi dan Dokumentasi Pembantu (PPID Pembantu) adalah pejabat yang melaksanakan tugas dan fungsi sebagai PPID pada Satuan Organisasi Perangkat Daerah di lingkungan Pemerintah Daerah, berupa:
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Pengklasifikasian informasi yang terdiri dari:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Informasi yang wajib disediakan dan diumumkan secara berkala</li>
                <li>Informasi yang wajib diumumkan secara serta merta</li>
                <li>Informasi yang wajib tersedia setiap saat</li>
                <li>Informasi yang dikecualikan</li>
              </ul>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Mengkoordinasikan dan mengkonsolidasikan pengumpulan bahan informasi dan dokumentasi yang ada dilingkungannya</li>
              <li>Menyimpan, mendokumentasikan, menyediakan dan memberi pelayanan informasi kepada publik</li>
              <li>Melakukan verifikasi bahan informasi publik</li>
              <li>Melakukan pemutakhiran informasi dan dokumentasi</li>
              <li>Menyediakan informasi dan dokumentasi untuk akses oleh masyarakat</li>
              <li>Melakukan inventerisasi informasi yang dikecualikan untuk disampaikan kepada PPID Utama</li>
              <li>Memberikan laporan tentang pengelolaan informasi kepada PPID Utama secara berkala</li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Pengertian</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Informasi</h3>
              <p className="text-gray-700">Keterangan, pernyataan, gagasan, dan tanda-tanda yang mengandung nilai, makna, dan pesan, baik data, fakta, maupun penjelasannya yang dapat dilihat, didengar, dan dibaca yang disajikan dalam berbagai kemasan dan format sesuai dengan perkembangan teknologi informasi dan komunikasi secara elektronik atau non elektronik.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Informasi Publik</h3>
              <p className="text-gray-700">Informasi yang dihasilkan, disimpan, dikelola, dikirim, dan/atau diterima oleh suatu badan publik yang berkaitan dengan penyelenggara dan penyelenggaraan negara dan/atau penyelenggara dan penyelenggaraan badan publik lainnya sesuai dengan UU No. 14 Tahun 2008.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Badan Publik</h3>
              <p className="text-gray-700">Lembaga eksekutif, legislatif, yudikatif, dan badan lain yang fungsi dan tugas pokoknya berkaitan dengan penyelenggaraan negara, yang dananya bersumber dari APBN/APBD atau organisasi nonpemerintah yang dananya dari APBN/APBD, sumbangan masyarakat, dan/atau luar negeri.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Kewajiban Badan Publik</h2>
          <p className="mb-4 text-gray-700">Berdasarkan Pasal 7 UU No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik:</p>
          <ul className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>Menyediakan, memberikan dan/atau menerbitkan Informasi Publik</li>
            <li>Menyediakan Informasi Publik yang akurat, benar, dan tidak menyesatkan</li>
            <li>Membangun dan mengembangkan sistem informasi dan dokumentasi</li>
            <li>Membuat pertimbangan tertulis untuk setiap kebijakan</li>
            <li>Memanfaatkan sarana dan/atau media elektronik dan nonelektronik</li>
            <li>Menetapkan standar prosedur operasional layanan Informasi Publik</li>
            <li>Menunjuk dan mengangkat PPID</li>
            <li>Menganggarkan pembiayaan layanan Informasi Publik</li>
            <li>Menyediakan sarana dan prasarana layanan Informasi Publik</li>
            <li>Menetapkan standar biaya perolehan salinan Informasi Publik</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Jenis Informasi Publik</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">1. Informasi Berkala</h3>
              <p className="text-gray-700">Informasi yang telah dikuasai dan didokumentasikan oleh Badan Publik untuk diumumkan secara teratur dan rutin tanpa ada permintaan.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">2. Informasi Serta Merta</h3>
              <p className="text-gray-700">Informasi yang apabila tidak disampaikan dapat mengancam hajat hidup orang banyak dan ketertiban umum yang berhubungan dengan tupoksi Badan Publik.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">3. Informasi Setiap Saat</h3>
              <p className="text-gray-700">Informasi yang telah dikuasasi dan didokumentasikan oleh Badan Publik serta telah dinyatakan terbuka sebagai informasi yang dapat diakses oleh pengguna informasi.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">4. Informasi yang Dikecualikan</h3>
              <p className="text-gray-700">Informasi yang dikuasai dan didokumentasikan oleh Badan Publik yang tidak dapat diakses oleh pemohon informasi berdasarkan alasan-alasan pengecualian.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
