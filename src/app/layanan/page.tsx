export default function LayananPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Layanan</h1>
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Informasi Layanan</h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-6">
                Kami menyediakan berbagai layanan untuk membantu masyarakat dalam bidang perumahan, 
                kawasan permukiman, dan pertanahan. Silakan pilih layanan yang Anda butuhkan.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold mb-2">Perumahan</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Perizinan Perumahan</li>
                    <li>Rumah Susun Sederhana</li>
                    <li>Program BSPS</li>
                    <li>Fasilitas FLPP</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold mb-2">Kawasan Permukiman</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Penataan Kawasan</li>
                    <li>Penanganan Kumuh</li>
                    <li>Infrastruktur</li>
                    <li>Program KOTAKU</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold mb-2">Pertanahan</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Sertifikasi Tanah</li>
                    <li>Legalisasi Aset</li>
                    <li>Penyelesaian Sengketa</li>
                    <li>Konsultasi Pertanahan</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Pengaduan Masyarakat</h3>
                <p className="text-gray-600 mb-4">
                  Jika Anda memiliki keluhan atau pengaduan terkait layanan kami, 
                  silakan sampaikan melalui form pengaduan yang tersedia.
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Form Pengaduan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}