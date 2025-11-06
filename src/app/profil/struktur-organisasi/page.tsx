import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Struktur Organisasi | Dinas Perkimtan Sumbar',
  description: 'Struktur organisasi Dinas Perumahan, Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat',
}

export default function StrukturOrganisasi() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Struktur Organisasi</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Susunan organisasi Dinas Perumahan, Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">Bagan Struktur Organisasi</h2>
            </div>
            
            <div className="relative w-full aspect-[16/12] rounded-lg overflow-hidden bg-gray-50">
              <Image
                src="/profil/struktur-organisasi/assets/struktur-organisasi.png"
                alt="Struktur Organisasi DPRKPP"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>

            <div className="mt-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Susunan Organisasi:</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start bg-gray-50 rounded-lg p-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Kepala Dinas:</span>
                    <span className="text-gray-700 ml-2">AHDIARSYAH ST, MT</span>
                  </div>
                </div>
                <div className="flex items-start bg-gray-50 rounded-lg p-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Sekretaris:</span>
                    <span className="text-gray-700 ml-2">VIRDIANA SE, MT</span>
                  </div>
                </div>
                <div className="flex items-start bg-gray-50 rounded-lg p-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Kasubbag TU:</span>
                    <span className="text-gray-700 ml-2">EFRIZAL THAMRIN S.Sos, MM</span>
                  </div>
                </div>
                <div className="flex items-start bg-gray-50 rounded-lg p-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Kabid Perumahan Rakyat:</span>
                    <span className="text-gray-700 ml-2">YOLLY DETRA ASRAR ST, MT</span>
                  </div>
                </div>
                <div className="flex items-start bg-gray-50 rounded-lg p-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                    5
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Kabid Kawasan Permukiman:</span>
                    <span className="text-gray-700 ml-2">VIKY R. TIANDRA ST</span>
                  </div>
                </div>
                <div className="flex items-start bg-gray-50 rounded-lg p-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                    6
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Kabid Pertanahan:</span>
                    <span className="text-gray-700 ml-2">SANTOS LUKMAN S.STP, MPA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}