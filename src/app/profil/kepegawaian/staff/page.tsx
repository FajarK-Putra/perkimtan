export default function StaffPage() {
  const staffData = [
    { nama: "Dra. Siti Aminah, M.Si", bidang: "Perumahan", posisi: "Kepala Seksi Perencanaan Perumahan", nip: "196801151994032008" },
    { nama: "Ir. Budi Santoso, M.T", bidang: "Perumahan", posisi: "Kepala Seksi Pembangunan Perumahan", nip: "197203101997031005" },
    { nama: "Ir. Hj. Nurul Fitri, M.T", bidang: "Kawasan Permukiman", posisi: "Kepala Seksi Penataan Kawasan", nip: "196907081995032007" },
    { nama: "Drs. Ahmad Rizki, M.Si", bidang: "Kawasan Permukiman", posisi: "Kepala Seksi Infrastruktur Permukiman", nip: "197105151996031008" },
    { nama: "Ir. Dewi Sartika, M.T", bidang: "Pertanahan", posisi: "Kepala Seksi Pengelolaan Tanah", nip: "196812201994032009" },
    { nama: "Drs. H. Syafrizal Anwar", bidang: "Pertanahan", posisi: "Kepala Seksi Sengketa Tanah", nip: "196604121993031007" },
    { nama: "Sri Wahyuni, S.E", bidang: "Sekretariat", posisi: "Kepala Sub Bagian Umum", nip: "197408151998032012" },
    { nama: "Hendra Gunawan, S.Kom", bidang: "Sekretariat", posisi: "Kepala Sub Bagian Keuangan", nip: "198209182008011007" },
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 bg-clip-text text-transparent mb-4">
            Staff Dinas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Para staff profesional yang mendukung operasional dan pelayanan di setiap bidang
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-blue-500/10 backdrop-blur-sm rounded-xl p-6 text-center border border-blue-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
            <div className="text-blue-700 font-medium">Staff Perumahan</div>
          </div>
          <div className="bg-green-500/10 backdrop-blur-sm rounded-xl p-6 text-center border border-green-200">
            <div className="text-3xl font-bold text-green-600 mb-2">2</div>
            <div className="text-green-700 font-medium">Staff Kawasan</div>
          </div>
          <div className="bg-orange-500/10 backdrop-blur-sm rounded-xl p-6 text-center border border-orange-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">2</div>
            <div className="text-orange-700 font-medium">Staff Pertanahan</div>
          </div>
          <div className="bg-purple-500/10 backdrop-blur-sm rounded-xl p-6 text-center border border-purple-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
            <div className="text-purple-700 font-medium">Staff Sekretariat</div>
          </div>
        </div>

        {/* Staff List */}
        <div className="grid lg:grid-cols-2 gap-6">
          {staffData.map((staff, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                {/* Avatar */}
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {staff.nama}
                      </h3>
                      <p className="text-gray-600 font-medium">{staff.posisi}</p>
                    </div>
                    <span className={`${getBidangColor(staff.bidang)} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                      {staff.bidang}
                    </span>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-600">NIP: {staff.nip}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Tim Profesional</h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Didukung oleh para profesional yang berpengalaman dan berkomitmen untuk memberikan 
            pelayanan terbaik kepada masyarakat Sumatera Barat.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">8</div>
              <div className="text-green-100">Total Staff</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">4</div>
              <div className="text-green-100">Bidang Kerja</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-green-100">Profesional</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
