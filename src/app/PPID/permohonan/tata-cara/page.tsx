import Image from "next/image";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tata Cara Permohonan Informasi | Dinas Perkimtan Sumbar',
  description: 'Tata cara dan prosedur permohonan informasi publik PPID Dinas Perumahan, Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat',
}

export default function TataCaraPermohonan() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tata Cara Permohonan Informasi</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Prosedur dan langkah-langkah untuk mengajukan permohonan informasi publik di PPID Dinas Perkimtan Provinsi Sumatera Barat
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">Alur Permohonan Informasi</h2>
            </div>

            {/* Image Section */}
            <div className="w-full rounded-lg overflow-hidden bg-gray-50">
              <Image
                src="/app/assets/img/Tata-cara-permohonan-informasi-PPID.jpeg"
                alt="Tata Cara Permohonan"
                width={2000}
                height={3000}
                className="w-full h-auto"
                priority
                quality={100}
              />
            </div>
            </div>
          </div>
        </div>
      </div>
  );
}