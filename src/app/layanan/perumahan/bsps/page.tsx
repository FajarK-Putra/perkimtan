import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Program BSPS | Dinas Perkimtan Sumbar',
  description: 'Bantuan Stimulan Perumahan Swadaya (BSPS) untuk perbaikan rumah tidak layak huni di Sumatera Barat',
}

export default function BSPSPage() {
  const bspsData = {
    name: 'Bantuan Stimulan Perumahan Swadaya (BSPS)',
    description: 'Program bantuan pemerintah untuk perbaikan rumah tidak layak huni bagi masyarakat berpenghasilan rendah',
    bantuan: [
      'Bantuan material bangunan',
      'Bantuan peralatan konstruksi',
      'Pendampingan teknis',
      'Pelatihan konstruksi sederhana'
    ],
    kriteria: [
      'Rumah dalam kondisi tidak layak huni',
      'Pemilik rumah berpenghasilan rendah',
      'Memiliki surat tanah yang sah',
      'Belum pernah menerima bantuan serupa'
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-30"></div>
          </div>
          
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-8 shadow-xl">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-6">
            Bantuan Stimulan Perumahan Swadaya
            <span className="block text-2xl md:text-3xl mt-2">(BSPS)</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {bspsData.description}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Tentang Program BSPS
                </h2>
              </div>
              
              <div className="prose max-w-none text-gray-600 leading-relaxed">
                <p className="mb-6">
                  Program Bantuan Stimulan Perumahan Swadaya (BSPS) merupakan bantuan pemerintah 
                  yang diberikan kepada masyarakat berpenghasilan rendah untuk perbaikan dan 
                  peningkatan kualitas rumah yang tidak layak huni.
                </p>
                <p>
                  Program ini bertujuan untuk meningkatkan kualitas hidup masyarakat melalui 
                  perbaikan kondisi hunian yang layak, sehat, dan aman.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Info Card */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-6 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Bantuan Gratis</h3>
              <p className="text-green-100 text-sm">Program bantuan tanpa biaya untuk masyarakat berpenghasilan rendah</p>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-6 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Pendampingan</h3>
              <p className="text-orange-100 text-sm">Disertai pendampingan teknis dan pelatihan konstruksi</p>
            </div>
          </div>
        </div>

        {/* Jenis Bantuan & Kriteria */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Jenis Bantuan */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Jenis Bantuan BSPS
              </h3>
            </div>
            <div className="space-y-4">
              {bspsData.bantuan.map((bantuan: string, index: number) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 group-hover:bg-green-500 rounded-xl flex items-center justify-center transition-colors duration-200">
                    <svg className="w-4 h-4 text-green-600 group-hover:text-white transition-colors duration-200" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-200 font-medium">{bantuan}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Kriteria */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0h10m-9-2h.01M9 7h.01M7 15h2m2 0h6a2 2 0 002-2V7a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Kriteria Penerima Bantuan
              </h3>
            </div>
            <div className="space-y-4">
              {bspsData.kriteria.map((kriteria: string, index: number) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 group-hover:bg-blue-500 rounded-xl flex items-center justify-center transition-colors duration-200">
                    <span className="text-blue-600 group-hover:text-white font-bold text-sm transition-colors duration-200">{index + 1}</span>
                  </div>
                  <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-200 font-medium">{kriteria}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Prosedur Pengajuan */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 mb-12">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              Prosedur Pengajuan
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white transform group-hover:scale-105 transition-transform duration-200">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h4 className="font-bold mb-2">Pendaftaran</h4>
                <p className="text-blue-100 text-sm">
                  Mendaftar di kelurahan/desa setempat dengan dokumen persyaratan
                </p>
              </div>
            </div>
            
            <div className="relative group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white transform group-hover:scale-105 transition-transform duration-200">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h4 className="font-bold mb-2">Verifikasi</h4>
                <p className="text-green-100 text-sm">
                  Tim melakukan survei lapangan untuk memastikan kondisi rumah
                </p>
              </div>
            </div>
            
            <div className="relative group">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white transform group-hover:scale-105 transition-transform duration-200">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h4 className="font-bold mb-2">Penetapan</h4>
                <p className="text-orange-100 text-sm">
                  Penetapan penerima berdasarkan hasil verifikasi dan anggaran
                </p>
              </div>
            </div>
            
            <div className="relative group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white transform group-hover:scale-105 transition-transform duration-200">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h4 className="font-bold mb-2">Pelaksanaan</h4>
                <p className="text-purple-100 text-sm">
                  Penyaluran bantuan dan pendampingan teknis pembangunan
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Target Program */}
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 text-white relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-28 h-28 bg-white/10 rounded-full blur-2xl"></div>
          
          <div className="relative">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">
                Target Program BSPS 2024
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8 text-green-100">
              <div>
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <p>Unit rumah yang akan diperbaiki di seluruh Sumatera Barat</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">19 Kab/Kota</div>
                <p>Seluruh kabupaten dan kota di Provinsi Sumatera Barat</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              Informasi Lebih Lanjut
            </h3>
          </div>
          <p className="text-gray-600 mb-6">
            Untuk informasi lebih lanjut mengenai Program BSPS, silakan hubungi:
          </p>
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="grid md:grid-cols-3 gap-4 text-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Bidang Perumahan</p>
                  <p className="text-sm text-gray-500">Dinas Perkimtan Sumbar</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">(0751) 123456</p>
                  <p className="text-sm text-gray-500">Telepon</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">perumahan@perkimtan.sumbarprov.go.id</p>
                  <p className="text-sm text-gray-500">Email</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
