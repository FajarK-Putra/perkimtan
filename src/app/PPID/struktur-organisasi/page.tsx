import Image from "next/image";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Struktur Organisasi PPID | Dinas Perkimtan Sumbar',
  description: 'Struktur organisasi Pejabat Pengelola Informasi dan Dokumentasi (PPID) Dinas Perumahan, Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat',
}

export default function PPIDstrukturorganisasi() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Struktur Organisasi PPID</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Struktur organisasi Pejabat Pengelola Informasi dan Dokumentasi Dinas Perumahan, Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">Bagan Struktur Organisasi</h2>
            </div>

            {/* Image Section */}
            <div className="w-full rounded-lg overflow-hidden bg-gray-50">
              <Image
                src="/app/assets/img/struktur-organisasi-PPID.jpeg"
                alt="STRUKTUR ORGANISASI PPID"
                width={2000}
                height={3000}
                className="w-full h-auto"
                priority
                quality={100}
              />
            </div>

            {/* Information Section */}
            <div className="mt-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Struktur Organisasi PPID</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Struktur organisasi PPID terdiri dari PPID Utama, PPID Pelaksana, dan Tim Pertimbangan Pelayanan Informasi yang bekerja sama 
                  dalam memberikan pelayanan informasi publik secara optimal, transparan, dan akuntabel sesuai dengan peraturan perundang-undangan 
                  yang berlaku.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}