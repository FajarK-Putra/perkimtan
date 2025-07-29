import Link from 'next/link'
import { beritaTerkini } from '@/lib/data'

export default function NewsSection() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Perumahan':
        return 'bg-blue-500'
      case 'Kawasan Permukiman':
        return 'bg-green-500'
      case 'Pertanahan':
        return 'bg-orange-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-16 left-12 w-32 h-32 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 right-12 w-36 h-36 bg-green-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-orange-200 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 shadow-xl">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-4">
            Berita & Informasi Terkini
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dapatkan update terbaru tentang program dan kegiatan Dinas Perumahan, 
            Kawasan Permukiman dan Pertanahan Provinsi Sumatera Barat
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {beritaTerkini.map((berita) => (
            <article key={berita.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              {/* Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-gray-100 via-gray-50 to-blue-50 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`${getCategoryColor(berita.kategori)} text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-lg backdrop-blur-sm`}>
                    {berita.kategori}
                  </span>
                </div>

                {/* Date Badge */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">
                  {formatDate(berita.tanggal)}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2.5 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                  <Link href={`/berita/${berita.id}`}>
                    {berita.judul}
                  </Link>
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {berita.ringkasan}
                </p>
                
                <Link 
                  href={`/berita/${berita.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm group-hover:translate-x-2 transition-all duration-200 bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-lg"
                >
                  Baca Selengkapnya
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-6 mb-10 shadow-2xl border border-blue-500/20 relative overflow-hidden">
          {/* Background Pattern for Stats */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-white rounded-full blur-2xl"></div>
          </div>
          
          <div className="text-center text-white mb-6 relative">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Pencapaian Dinas Perkimtan Sumbar</h3>
            <p className="text-blue-100 text-base">Data statistik kinerja tahun 2024</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="text-center group">
              <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">1,200+</div>
              <div className="text-blue-100 text-sm font-medium">Unit Rumah Dibangun</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">500 Ha</div>
              <div className="text-blue-100 text-sm font-medium">Kawasan Tertata</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">2,000</div>
              <div className="text-blue-100 text-sm font-medium">Sertifikat Tanah</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
              <div className="text-blue-100 text-sm font-medium">Kepuasan Masyarakat</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            href="/berita" 
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-2xl font-semibold text-base transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
          >
            Lihat Semua Berita
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
