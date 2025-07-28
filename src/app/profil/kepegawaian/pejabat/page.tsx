import { Metadata } from 'next'
import { strukturOrganisasi } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Pejabat Struktural | Dinas Perkimtan Sumbar',
  description: 'Profil pejabat struktural Dinas Perumahan, Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat',
}

export default function PejabatPage() {
  const kepalaDinas = strukturOrganisasi.find(item => item.jabatan === 'Kepala Dinas')
  const sekretaris = strukturOrganisasi.find(item => item.jabatan === 'Sekretaris')
  const kabid = strukturOrganisasi.filter(item => item.jabatan.includes('Kabid'))

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-slate-600 to-slate-700 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-lg mb-4">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold mb-3">Pejabat Struktural</h1>
            <p className="text-lg text-slate-200 max-w-2xl mx-auto">
              Struktur kepemimpinan Dinas Perkimtan Sumbar
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Kepala Dinas */}
        {kepalaDinas && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Pimpinan Dinas</h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm border-l-4 border-blue-500 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                      <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{kepalaDinas.nama}</h3>
                      <p className="text-blue-600 font-semibold mb-2">{kepalaDinas.jabatan}</p>
                      <div className="bg-gray-50 rounded px-3 py-2 inline-block">
                        <p className="text-gray-700 text-sm">NIP: {kepalaDinas.nip}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Sekretaris */}
        {sekretaris && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Sekretariat</h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm border-l-4 border-green-500">
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="w-18 h-18 bg-green-100 rounded-full flex items-center justify-center mr-5 flex-shrink-0">
                      <svg className="w-9 h-9 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{sekretaris.nama}</h3>
                      <p className="text-green-600 font-semibold mb-2">{sekretaris.jabatan}</p>
                      <div className="bg-gray-50 rounded px-3 py-1">
                        <p className="text-gray-700 text-sm">NIP: {sekretaris.nip}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Kepala Bidang */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Kepala Bidang</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {kabid.map((pejabat, index) => {
              const colors = [
                { bg: 'purple-100', text: 'purple-600', border: 'purple-500' },
                { bg: 'orange-100', text: 'orange-600', border: 'orange-500' },
                { bg: 'teal-100', text: 'teal-600', border: 'teal-500' }
              ]
              const color = colors[index % colors.length]
              
              return (
                <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4" 
                     style={{ borderLeftColor: `var(--${color.border})` }}>
                  <div className="p-5">
                    <div className="text-center">
                      <div className={`w-16 h-16 bg-${color.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <svg className={`w-8 h-8 text-${color.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{pejabat.nama}</h3>
                      <p className={`text-${color.text} font-semibold mb-3 text-sm`}>{pejabat.jabatan}</p>
                      <div className="bg-gray-50 rounded px-3 py-2">
                        <p className="text-gray-600 text-sm">NIP: {pejabat.nip}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Info Summary */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold text-gray-900 text-center mb-6">Ringkasan Struktur</h3>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-1">1</div>
              <div className="text-gray-700 text-sm">Kepala Dinas</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-1">1</div>
              <div className="text-gray-700 text-sm">Sekretaris</div>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 mb-1">3</div>
              <div className="text-gray-700 text-sm">Kepala Bidang</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-600 mb-1">5+</div>
              <div className="text-gray-700 text-sm">Total Pejabat</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
