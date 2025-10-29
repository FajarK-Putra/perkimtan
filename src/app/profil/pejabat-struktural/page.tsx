import Image from "next/image";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pejabat Struktural | Dinas Perkimtan Sumbar',
  description: 'Profil pejabat struktural Dinas Perumahan, Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat',
}

export default function PejabatStruktural() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3 animate-fade-in">
            Pejabat Struktural
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dinas Perumahan, Kawasan Permukiman dan Pertanahan
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
          {/* Image Section */}
          <div className="relative w-full h-[600px] md:h-[800px] lg:h-[1000px] transition-all duration-500">
            <Image
              src="/app/assets/img/profil-pejabat-struktural.jpg"
              alt="Pejabat Struktural DPRKPP"
              fill
              style={{ 
                objectFit: 'contain',
                objectPosition: 'top center'
              }}
              className="bg-white transition-opacity duration-300"
              priority
              quality={100}
            />
          </div>

          {/* Information Section */}
          <div className="border-t bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Susunan Pejabat Struktural
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-blue-50">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Kepala Dinas</h3>
                  <p className="text-gray-700">AHDIARSYAH ST, MT</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-blue-50">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Sekretaris</h3>
                  <p className="text-gray-700">VIRDIANA SE, MT</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-blue-50">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Kabid Perumahan Rakyat</h3>
                  <p className="text-gray-700">YOLLY DETRA ASRAR ST, MT</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-blue-50">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Kabid Kawasan Permukiman</h3>
                  <p className="text-gray-700">VIKY R. TIANDRA ST</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-blue-50">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Kabid Pertanahan</h3>
                  <p className="text-gray-700">SANTOS LUKMAN S.STP, MPA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}