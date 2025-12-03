'use client'

import { useEffect } from 'react'

export default function LaporPage() {
  useEffect(() => {
    // Gunakan replace agar tidak menambah history (tidak ada loop saat back)
    window.location.replace('https://lapor.go.id/')
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center pt-24">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mb-6 shadow-xl animate-pulse">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Mengarahkan ke LAPOR!
        </h1>
        <p className="text-gray-600 mb-6">
          Mohon tunggu sebentar...
        </p>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div className="flex items-start text-left">
            <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Jika halaman tidak terbuka secara otomatis, silakan 
                <a 
                  href="https://lapor.go.id/" 
                  className="text-blue-600 hover:text-blue-700 font-semibold ml-1"
                >
                  klik di sini
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
