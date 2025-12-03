import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tugas dan Fungsi PPID | PPID Dinas Perkim Sumatera Barat",
  description: "Tugas dan Fungsi PPID Dinas Perumahan, Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat",
};

export default function PPIDTugasFungsi() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tugas dan Fungsi PPID</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Tugas, Fungsi, dan Kewajiban Pejabat Pengelola Informasi dan Dokumentasi
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <Image
            src="/app/assets/img/tugas-fungsi-PPID.jpg"
            alt="Tugas dan Fungsi PPID"
            width={1200}
            height={800}
            className="w-full h-auto"
            priority
          />
        </div>

        <div className="space-y-8">
          <section className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Tugas PPID Provinsi Sumatera Barat</h2>
            </div>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Pejabat Pengelola Informasi dan Dokumentasi Pembantu (PPID Pembantu) adalah pejabat yang melaksanakan tugas dan fungsi sebagai PPID pada Satuan Organisasi Perangkat Daerah di lingkungan Pemerintah Daerah, berupa:
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Pengklasifikasian informasi yang terdiri dari:</h3>
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

          <section className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Pengertian</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900">Informasi</h3>
                <p className="text-gray-700">Keterangan, pernyataan, gagasan, dan tanda-tanda yang mengandung nilai, makna, dan pesan, baik data, fakta, maupun penjelasannya yang dapat dilihat, didengar, dan dibaca yang disajikan dalam berbagai kemasan dan format sesuai dengan perkembangan teknologi informasi dan komunikasi secara elektronik atau non elektronik.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900">Informasi Publik</h3>
                <p className="text-gray-700">Informasi yang dihasilkan, disimpan, dikelola, dikirim, dan/atau diterima oleh suatu badan publik yang berkaitan dengan penyelenggara dan penyelenggaraan negara dan/atau penyelenggara dan penyelenggaraan badan publik lainnya sesuai dengan UU No. 14 Tahun 2008.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900">Badan Publik</h3>
                <p className="text-gray-700">Lembaga eksekutif, legislatif, yudikatif, dan badan lain yang fungsi dan tugas pokoknya berkaitan dengan penyelenggaraan negara, yang dananya bersumber dari APBN/APBD atau organisasi nonpemerintah yang dananya dari APBN/APBD, sumbangan masyarakat, dan/atau luar negeri.</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Kewajiban Badan Publik</h2>
            </div>
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

          <section className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Jenis Informasi Publik</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-900">1. Informasi Berkala</h3>
                <p className="text-gray-700">Informasi yang telah dikuasai dan didokumentasikan oleh Badan Publik untuk diumumkan secara teratur dan rutin tanpa ada permintaan.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900">2. Informasi Serta Merta</h3>
                <p className="text-gray-700">Informasi yang apabila tidak disampaikan dapat mengancam hajat hidup orang banyak dan ketertiban umum yang berhubungan dengan tupoksi Badan Publik.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900">3. Informasi Setiap Saat</h3>
                <p className="text-gray-700">Informasi yang telah dikuasasi dan didokumentasikan oleh Badan Publik serta telah dinyatakan terbuka sebagai informasi yang dapat diakses oleh pengguna informasi.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-900">4. Informasi yang Dikecualikan</h3>
                <p className="text-gray-700">Informasi yang dikuasai dan didokumentasikan oleh Badan Publik yang tidak dapat diakses oleh pemohon informasi berdasarkan alasan-alasan pengecualian.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
