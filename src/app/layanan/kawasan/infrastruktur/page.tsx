import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Infrastruktur Permukiman | Dinas Perkimtan Sumbar',
  description: 'Program pembangunan infrastruktur permukiman untuk mendukung kawasan hunian yang berkualitas',
}

export default function InfrastrukturPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Infrastruktur Permukiman</h1>
      
      <div className="prose max-w-none">
        <p className="mb-4">
          Program pembangunan infrastruktur permukiman bertujuan untuk meningkatkan 
          kualitas hidup masyarakat melalui penyediaan infrastruktur dasar yang memadai.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Jenis Infrastruktur</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Jalan lingkungan</li>
          <li>Drainase</li>
          <li>Air bersih</li>
          <li>Sanitasi</li>
          <li>Penerangan jalan</li>
          <li>Ruang terbuka hijau</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Program Unggulan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">PISEW</h3>
            <p className="text-sm text-gray-600">
              Program Infrastruktur Sosial Ekonomi Wilayah
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">KOTAKU</h3>
            <p className="text-sm text-gray-600">
              Kota Tanpa Kumuh
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">DAK Fisik</h3>
            <p className="text-sm text-gray-600">
              Dana Alokasi Khusus Fisik
            </p>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Informasi Lebih Lanjut</h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="font-medium">Bidang Kawasan Permukiman</p>
          <p>Dinas Perumahan, Kawasan Permukiman dan Pertanahan Sumbar</p>
          <p>Telp: (0751) 123456</p>
        </div>
      </div>
    </div>
  )
}
