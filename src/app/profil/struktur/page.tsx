import { Metadata } from 'next'
import { strukturOrganisasi, dinasProfile } from '@/lib/data'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Struktur Organisasi | Dinas Perkimtan Sumbar',
  description: 'Struktur organisasi Dinas Perumahan, Kawasan Permukiman dan Pertanahan Sumatera Barat'
}

export default function StrukturPage() {
  const organogramData = {
    kepala: strukturOrganisasi.find(p => p.jabatan === "Kepala Dinas"),
    sekretaris: strukturOrganisasi.find(p => p.jabatan === "Sekretaris"),
    kabid: strukturOrganisasi.filter(p => p.jabatan.includes("Kabid"))
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
                <div key={index} className="bg-purple-600 text-white rounded-lg p-6 text-center">
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
    </div>
  )
}
