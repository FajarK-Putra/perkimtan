import { strukturOrganisasi } from '@/lib/data'

export default function PejabatPage() {
  const pejabatStruktural = strukturOrganisasi.filter(item => 
    item.jabatan.includes('Kepala') || item.jabatan.includes('Sekretaris') || item.jabatan.includes('Kabid')
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-4">
            Pejabat Struktural
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Struktur kepemimpinan Dinas Perumahan, Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat
          </p>
        </div>

        {/* Pejabat Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pejabatStruktural.map((pejabat, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 hover:shadow-2xl transition-all duration-300 group">
              {/* Photo Placeholder */}
              <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {pejabat.nama}
                </h3>
                <p className="text-blue-600 font-semibold mb-3">{pejabat.jabatan}</p>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-600">NIP: {pejabat.nip}</p>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-blue-600">{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Struktur Organisasi</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Dinas Perkimtan Sumbar dipimpin oleh Kepala Dinas yang dibantu oleh Sekretaris dan 
              3 Kepala Bidang sesuai dengan tugas pokok dan fungsi masing-masing.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">1</div>
                <div className="text-blue-100">Kepala Dinas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">1</div>
                <div className="text-blue-100">Sekretaris</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">3</div>
                <div className="text-blue-100">Kepala Bidang</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
