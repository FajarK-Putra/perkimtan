import { beritaTerkini } from '@/lib/data'
import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Params = Promise<{ id: string }>

type SearchParams = { [key: string]: string | string[] | undefined }

export async function generateMetadata({ 
  params 
}: { 
  params: Params 
}): Promise<Metadata> {
  const { id } = await params
  const berita = beritaTerkini.find(b => b.id === parseInt(id))
  
  if (!berita) {
    return {
      title: 'Berita Tidak Ditemukan | Dinas Perkimtan Sumbar'
    }
  }

  return {
    title: `${berita.judul} | Dinas Perkimtan Sumbar`,
    description: berita.ringkasan
  }
}

export default async function BeritaDetailPage({ 
  params 
}: { 
  params: Params 
}) {
  const { id } = await params
  const berita = beritaTerkini.find(b => b.id === parseInt(id))
  
  if (!berita) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
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
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Beranda
              </Link>
            </li>
            <li>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li>
              <Link href="/informasi/berita" className="hover:text-blue-600">
                Berita
              </Link>
            </li>
            <li>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li className="text-gray-900 font-medium truncate">
              {berita.judul}
            </li>
          </ol>
        </nav>

        {/* Article */}
        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Hero Header */}
          <div className="relative bg-gradient-to-br from-blue-800 to-blue-900 px-8 py-16 text-white">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-16 left-16 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-12 right-16 w-40 h-40 bg-blue-200 rounded-full blur-3xl animate-pulse" 
                style={{ animationDelay: '1s' }}></div>
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <span className={`${getCategoryColor(berita.kategori)} text-white text-sm font-semibold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm`}>
                  {berita.kategori}
                </span>
                <time className="text-sm text-blue-200 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm" dateTime={berita.tanggal}>
                  {formatDate(berita.tanggal)}
                </time>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {berita.judul}
              </h1>

              <div className="flex items-center justify-center text-sm text-blue-200">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {berita.penulis}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <div className="prose prose-lg prose-blue max-w-none">
              <p className="text-gray-600 leading-relaxed text-lg">
                {berita.konten || berita.ringkasan}
              </p>
            </div>

            <div className="border-t border-gray-100 pt-6 mt-8">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Ditulis oleh <span className="font-medium">{berita.penulis}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="text-gray-400 hover:text-blue-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-blue-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between">
          <Link 
            href="/informasi/berita"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Daftar Berita
          </Link>
        </div>
      </div>
    </div>
  )
}