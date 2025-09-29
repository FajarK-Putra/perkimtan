import Image from 'next/image'

export default function StrukturOrganisasi() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Struktur Organisasi</h1>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              STRUKTUR ORGANISASI
            </h2>
            
            <div className="relative w-full aspect-[16/12] rounded-lg overflow-hidden">
              <Image
                src="/profil/struktur-organisasi/assets/struktur-organisasi.png"
                alt="Struktur Organisasi DPRKPP"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>

            <div className="mt-8 prose max-w-none">
              <h3 className="text-lg font-semibold mb-4">Susunan Organisasi:</h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Kepala Dinas:</strong> AHDIARSYAH ST, MT</li>
                <li><strong>Sekretaris:</strong> VIRDIANA SE, MT</li>
                <li><strong>Kasubbag TU:</strong> EFRIZAL THAMRIN S.Sos, MM</li>
                <li><strong>Kabid Perumahan Rakyat:</strong> YOLLY DETRA ASRAR ST, MT</li>
                <li><strong>Kabid Kawasan Permukiman:</strong> VIKY R. TIANDRA ST</li>
                <li><strong>Kabid Pertanahan:</strong> SANTOS LUKMAN S.STP, MPA</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}