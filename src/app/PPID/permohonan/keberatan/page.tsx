import Image from "next/image";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Permohonan Keberatan | Dinas Perkimtan Sumbar',
  description: 'Tata cara dan prosedur pengajuan keberatan informasi publik PPID Dinas Perumahan, Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat',
}

export default function TataCaraPermohonanKeberatan() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Permohonan Keberatan</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Tata cara dan prosedur pengajuan keberatan atas permohonan informasi publik yang ditolak atau tidak ditanggapi
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">Alur Pengajuan Keberatan</h2>
            </div>

            {/* Image Section */}
            <div className="w-full rounded-lg overflow-hidden bg-gray-50">
              <Image
                src="/app/assets/img/permohonan-keberatan.jpg"
                alt="Tata Cara Permohonan Keberatan"
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