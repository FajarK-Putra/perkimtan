import Image from "next/image";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profil PPID | Dinas Perkimtan Sumbar',
  description: 'Profil Pejabat Pengelola Informasi dan Dokumentasi (PPID) Dinas Perumahan, Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat',
}

export default function PPID() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Profil PPID</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Pejabat Pengelola Informasi dan Dokumentasi Dinas Perumahan, Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">Struktur PPID</h2>
            </div>

            {/* Image Section */}
            <div className="w-full rounded-lg overflow-hidden bg-gray-50">
              <Image
                src="/app/assets/img/profil-PPID.png"
                alt="Profil PPID"
                width={2000}
                height={3000}
                className="w-full h-auto"
                priority
                quality={100}
              />
            </div>

            {/* Information Section */}
            <div className="mt-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tentang PPID</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Pejabat Pengelola Informasi dan Dokumentasi (PPID) adalah pejabat yang bertanggung jawab dalam pengumpulan, pendokumentasian, 
                  penyimpanan, pemeliharaan, penyediaan, dan pelayanan informasi publik di lingkungan Dinas Perumahan, Kawasan Permukiman dan Pertanahan 
                  Provinsi Sumatera Barat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}