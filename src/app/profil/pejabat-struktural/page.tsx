import Image from "next/image";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pejabat Struktural | Dinas Perkimtan Sumbar',
  description: 'Profil pejabat struktural Dinas Perumahan, Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat',
}

export default function PejabatStruktural() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pejabat Struktural</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Profil pejabat struktural Dinas Perumahan, Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">Foto Pejabat Struktural</h2>
            </div>

            {/* Image Section */}
            <div className="w-full max-h-[800px] rounded-lg overflow-auto bg-gray-50 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
              <Image
                src="/app/assets/img/profil-pejabat-struktural.jpg"
                alt="Pejabat Struktural DPRKPP"
                width={2000}
                height={3000}
                className="w-full h-auto"
                priority
                quality={100}
              />
            </div>

            {/* Information Section */}
            <div className="mt-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Susunan Pejabat Struktural:</h3>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex items-start bg-gray-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:scale-105">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">Kepala Dinas</h3>
                    <p className="text-gray-700 text-sm mt-1">AHDIARSYAH ST, MT</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-gray-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:scale-105">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">Sekretaris</h3>
                    <p className="text-gray-700 text-sm mt-1">VIRDIANA SE, MT</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-gray-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:scale-105">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">Kasubbag TU</h3>
                    <p className="text-gray-700 text-sm mt-1">EFRIZAL THAMRIN S.Sos, MM</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-gray-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:scale-105">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">Kabid Perumahan Rakyat</h3>
                    <p className="text-gray-700 text-sm mt-1">YOLLY DETRA ASRAR ST, MT</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-gray-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:scale-105">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">Kabid Kawasan Permukiman</h3>
                    <p className="text-gray-700 text-sm mt-1">VIKY R. TIANDRA ST</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-gray-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:scale-105">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                    6
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">Kabid Pertanahan</h3>
                    <p className="text-gray-700 text-sm mt-1">SANTOS LUKMAN S.STP, MPA</p>
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