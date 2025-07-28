'use client'

import { strukturOrganisasi, dinasProfile } from '@/lib/data'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface Pejabat {
  id: number
  nama: string
  jabatan: string
  foto: string
  nip?: string
  pendidikan?: string
  pengalaman?: string[]
}

export default function StrukturPage() {
  const [selectedPejabat, setSelectedPejabat] = useState<Pejabat | null>(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    document.title = 'Struktur Organisasi | Dinas Perkimtan Sumbar'
  }, [])
  
  const organogramData = {
    kepala: strukturOrganisasi.find(p => p.jabatan === "Kepala Dinas"),
    sekretaris: strukturOrganisasi.find(p => p.jabatan === "Sekretaris"),
    kabid: strukturOrganisasi.filter(p => p.jabatan.includes("Kabid"))
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedPejabat(null)
  }

  const tugasFungsi = [
    {
      jabatan: "Kepala Dinas",
      tugas: [
        "Memimpin dan mengoordinasikan seluruh kegiatan dinas",
        "Menetapkan kebijakan teknis di bidang perumahan, kawasan permukiman dan pertanahan",
        "Melaksanakan pembinaan dan pengawasan",
        "Melakukan evaluasi dan pelaporan kinerja"
      ]
    },
    {
      jabatan: "Sekretaris",
      tugas: [
        "Mengoordinasikan kegiatan administrasi dan kesekretariatan",
        "Mengelola administrasi kepegawaian, keuangan dan umum",
        "Menyiapkan bahan koordinasi dan sinkronisasi program",
        "Melaksanakan hubungan masyarakat dan protokol"
      ]
    },
    {
      jabatan: "Kabid Perumahan",
      tugas: [
        "Melaksanakan urusan bidang perumahan",
        "Mengoordinasikan program pembangunan perumahan",
        "Melakukan pembinaan teknis pembangunan perumahan",
        "Mengawasi pelaksanaan standar konstruksi perumahan"
      ]
    },
    {
      jabatan: "Kabid Kawasan Permukiman",
      tugas: [
        "Melaksanakan urusan bidang kawasan permukiman",
        "Mengoordinasikan penataan kawasan permukiman",
        "Melakukan pembinaan infrastruktur permukiman",
        "Mengawasi pelaksanaan program KOTAKU"
      ]
    },
    {
      jabatan: "Kabid Pertanahan",
      tugas: [
        "Melaksanakan urusan bidang pertanahan",
        "Mengoordinasikan program sertifikasi tanah",
        "Melakukan mediasi sengketa pertanahan",
        "Mengawasi pelaksanaan legalisasi aset"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-600 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Struktur Organisasi
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 max-w-3xl mx-auto">
              {dinasProfile.name} Provinsi Sumatera Barat
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Organogram */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Bagan Organisasi
            </h2>
            
            {/* Kepala Dinas */}
            <div className="flex justify-center mb-8">
              <div className="bg-blue-600 text-white rounded-lg p-6 text-center max-w-xs">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Image
                    src="/app/assets/img/logo-perkimtan.png"
                    alt="Avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <h3 className="font-bold text-lg">{organogramData.kepala?.jabatan}</h3>
                <p className="text-blue-100 text-sm">{organogramData.kepala?.nama}</p>
                <p className="text-blue-200 text-xs">NIP: {organogramData.kepala?.nip}</p>
              </div>
            </div>

            {/* Line Down */}
            <div className="flex justify-center mb-8">
              <div className="w-0.5 h-8 bg-gray-400"></div>
            </div>

            {/* Sekretaris */}
            <div className="flex justify-center mb-8">
              <div className="bg-green-600 text-white rounded-lg p-6 text-center max-w-xs">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Image
                    src="/app/assets/img/logo-perkimtan.png"
                    alt="Avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <h3 className="font-bold text-lg">{organogramData.sekretaris?.jabatan}</h3>
                <p className="text-green-100 text-sm">{organogramData.sekretaris?.nama}</p>
                <p className="text-green-200 text-xs">NIP: {organogramData.sekretaris?.nip}</p>
              </div>
            </div>

            {/* Line Down */}
            <div className="flex justify-center mb-8">
              <div className="w-0.5 h-8 bg-gray-400"></div>
            </div>

            {/* Horizontal Line */}
            <div className="flex justify-center mb-8">
              <div className="w-80 h-0.5 bg-gray-400"></div>
            </div>

            {/* Kabid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {organogramData.kabid?.map((kabid, index) => (
                <div key={index} className="bg-purple-600 text-white rounded-lg p-6 text-center group">
                  <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Image
                      src="/app/assets/img/logo-perkimtan.png"
                      alt="Avatar"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="font-bold text-lg">{kabid.jabatan}</h3>
                  <p className="text-purple-100 text-sm">{kabid.nama}</p>
                  <p className="text-purple-200 text-xs">NIP: {kabid.nip}</p>

                  {/* Tooltip */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-gray-800 text-white text-sm rounded-lg p-2 opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100`}>
                    <div className="font-semibold">{kabid.jabatan}</div>
                    <div className="mt-1">{kabid.nama}</div>
                    <div className="text-gray-400">{kabid.nip}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tugas dan Fungsi */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Tugas dan Fungsi
            </h2>
            <div className="space-y-8">
              {tugasFungsi.map((tf, index) => (
                <div key={index} className="border-l-4 border-slate-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{tf.jabatan}</h3>
                  <ul className="space-y-2">
                    {tf.tugas.map((tugas, tugasIndex) => (
                      <li key={tugasIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{tugas}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Informasi Kontak */}
          <div className="mt-12 bg-slate-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Informasi Kontak Dinas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-slate-600 font-semibold">Alamat</div>
                <div className="text-gray-600 text-sm">{dinasProfile.address}</div>
              </div>
              <div className="space-y-2">
                <div className="text-slate-600 font-semibold">Telepon</div>
                <div className="text-gray-600 text-sm">{dinasProfile.phone}</div>
              </div>
              <div className="space-y-2">
                <div className="text-slate-600 font-semibold">Email</div>
                <div className="text-gray-600 text-sm">{dinasProfile.email}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Detail Pejabat */}
      {showModal && selectedPejabat && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 transform transition-all duration-300 scale-100">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900">Detail Pejabat</h3>
              <button 
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">
                  {selectedPejabat.nama.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
                </span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900">{selectedPejabat.nama}</h4>
              <p className="text-blue-600 font-medium">{selectedPejabat.jabatan}</p>
            </div>

            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Informasi</h5>
                <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">NIP:</span>
                    <span className="font-medium">{selectedPejabat.nip || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pendidikan:</span>
                    <span className="font-medium">{selectedPejabat.pendidikan || 'N/A'}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Kontak</h5>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-gray-600 text-sm">
                    Untuk informasi lebih lanjut, hubungi sekretariat dinas.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button 
                onClick={closeModal}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
