import Image from "next/image";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pejabat Struktural | Dinas Perkimtan Sumbar',
  description: 'Profil pejabat struktural Dinas Perumahan, Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat',
}

export default function PejabatStruktural() {
  const pejabat = [
    {
      nama: "AHDIARSYAH ST, MT",
      jabatan: "Kepala Dinas",
      foto: "/app/assets/img/profil-pejabat-struktural.jpg",
      pendidikan: "Magister Teknik",
      bidang: "Kepala Dinas"
    },
    {
      nama: "VIRDIANA SE, MT",
      jabatan: "Sekretaris",
      foto: "/app/assets/img/profil-pejabat-struktural.jpg",
      pendidikan: "Magister Teknik",
      bidang: "Sekretariat"
    },
    {
      nama: "YOLLY DETRA ASRAR ST, MT",
      jabatan: "Kabid Perumahan Rakyat",
      foto: "/app/assets/img/profil-pejabat-struktural.jpg",
      pendidikan: "Magister Teknik",
      bidang: "Bidang Perumahan Rakyat"
    },
    {
      nama: "VIKY R. TIANDRA ST",
      jabatan: "Kabid Kawasan Permukiman",
      foto: "/app/assets/img/profil-pejabat-struktural.jpg",
      pendidikan: "Sarjana Teknik",
      bidang: "Bidang Kawasan Permukiman"
    },
    {
      nama: "SANTOS LUKMAN S.STP, MPA",
      jabatan: "Kabid Pertanahan",
      foto: "/app/assets/img/profil-pejabat-struktural.jpg",
      pendidikan: "Magister Administrasi Publik",
      bidang: "Bidang Pertanahan"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pejabat Struktural</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Profil dan struktur kepemimpinan Dinas Perumahan, Kawasan Permukiman dan Pertanahan
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Pejabat Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pejabat.map((p, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-64">
                <Image
                  src={p.foto}
                  alt={`Foto ${p.nama}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{p.nama}</h3>
                <p className="text-blue-600 font-medium mb-4">{p.jabatan}</p>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>{p.bidang}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span>{p.pendidikan}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}