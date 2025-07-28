export default function HonorerPage() {
  const tenagaHonorer = [
    { nama: "Ahmad Fauzi", bidang: "Perumahan", posisi: "Staf Teknis Perumahan", pendidikan: "D3 Teknik Sipil", masa_kerja: "3 tahun" },
    { nama: "Siti Rahma", bidang: "Kawasan Permukiman", posisi: "Staf Administrasi", pendidikan: "S1 Administrasi", masa_kerja: "2 tahun" },
    { nama: "Budi Pratama", bidang: "Pertanahan", posisi: "Surveyor", pendidikan: "D3 Pertanahan", masa_kerja: "4 tahun" },
    { nama: "Rina Sari", bidang: "Sekretariat", posisi: "Operator Komputer", pendidikan: "SMK TKJ", masa_kerja: "1 tahun" },
    { nama: "Dedi Kurniawan", bidang: "Perumahan", posisi: "Driver", pendidikan: "SMA", masa_kerja: "5 tahun" },
    { nama: "Maya Sari", bidang: "Sekretariat", posisi: "Cleaning Service", pendidikan: "SMP", masa_kerja: "2 tahun" },
    { nama: "Roni Saputra", bidang: "Kawasan Permukiman", posisi: "Security", pendidikan: "SMA", masa_kerja: "3 tahun" },
    { nama: "Indah Permata", bidang: "Pertanahan", posisi: "Staf Data Entry", pendidikan: "SMK", masa_kerja: "1 tahun" },
  ]

  const getBidangColor = (bidang: string) => {
    switch (bidang) {
      case 'Perumahan':
        return 'bg-blue-500'
      case 'Kawasan Permukiman':
        return 'bg-green-500'
      case 'Pertanahan':
        return 'bg-orange-500'
      case 'Sekretariat':
        return 'bg-purple-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-8a2 2 0 012-2V8" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-orange-800 to-gray-900 bg-clip-text text-transparent mb-4">
            Tenaga Honorer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Para tenaga honorer yang turut mendukung kelancaran operasional dan pelayanan dinas
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-blue-500/10 backdrop-blur-sm rounded-xl p-6 text-center border border-blue-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
            <div className="text-blue-700 font-medium">Perumahan</div>
          </div>
          <div className="bg-green-500/10 backdrop-blur-sm rounded-xl p-6 text-center border border-green-200">
            <div className="text-3xl font-bold text-green-600 mb-2">2</div>
            <div className="text-green-700 font-medium">Kawasan</div>
          </div>
          <div className="bg-orange-500/10 backdrop-blur-sm rounded-xl p-6 text-center border border-orange-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">2</div>
            <div className="text-orange-700 font-medium">Pertanahan</div>
          </div>
          <div className="bg-purple-500/10 backdrop-blur-sm rounded-xl p-6 text-center border border-purple-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
            <div className="text-purple-700 font-medium">Sekretariat</div>
          </div>
        </div>

        {/* Tenaga Honorer Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {tenagaHonorer.map((honorer, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                {/* Avatar */}
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                        {honorer.nama}
                      </h3>
                      <p className="text-gray-600 font-medium">{honorer.posisi}</p>
                    </div>
                    <span className={`${getBidangColor(honorer.bidang)} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                      {honorer.bidang}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Pendidikan:</span>
                        <span className="font-medium text-gray-900">{honorer.pendidikan}</span>
                      </div>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Masa Kerja:</span>
                        <span className="font-medium text-orange-700">{honorer.masa_kerja}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Appreciation Section */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Apresiasi Kerja</h3>
            <p className="text-orange-100 max-w-2xl mx-auto">
              Kami mengapresiasi dedikasi dan kontribusi para tenaga honorer yang telah mendukung 
              kelancaran operasional dinas dengan penuh komitmen.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-2xl font-bold mb-1">8</div>
              <div className="text-orange-100 text-sm">Total Tenaga</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div className="text-2xl font-bold mb-1">4</div>
              <div className="text-orange-100 text-sm">Bidang Kerja</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-2xl font-bold mb-1">100%</div>
              <div className="text-orange-100 text-sm">Dedikasi</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="text-2xl font-bold mb-1">24/7</div>
              <div className="text-orange-100 text-sm">Siap Melayani</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
