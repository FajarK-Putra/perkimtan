import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import AnimatedSection from '@/components/atoms/AnimatedSection'
import DownloadButton from '@/components/atoms/DownloadButton'
import { pengumumanList } from '@/lib/data'

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const pengumuman = pengumumanList.find(item => item.id === parseInt(id))
  
  if (!pengumuman) {
    return {
      title: 'Pengumuman Tidak Ditemukan | Dinas Perkimtan Sumbar',
    }
  }

  return {
    title: `${pengumuman.judul} | Dinas Perkimtan Sumbar`,
    description: pengumuman.ringkasan,
  }
}

export default async function DetailPengumumanPage({ params }: Props) {
  const { id } = await params
  const pengumuman = pengumumanList.find(item => item.id === parseInt(id))

  if (!pengumuman) {
    notFound()
  }

  const formatTanggal = (tanggal: string) => {
    const date = new Date(tanggal)
    return date.toLocaleDateString('id-ID', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  const getTipeBadgeColor = (tipe: string) => {
    switch (tipe) {
      case 'Penting':
        return 'bg-red-500 text-white border-red-600'
      case 'Info':
        return 'bg-blue-500 text-white border-blue-600'
      default:
        return 'bg-gray-500 text-white border-gray-600'
    }
  }

  const getKategoriBadgeColor = (kategori: string) => {
    switch (kategori) {
      case 'Kepegawaian':
        return 'bg-purple-600 text-white'
      case 'Program':
        return 'bg-green-600 text-white'
      case 'Regulasi':
        return 'bg-orange-600 text-white'
      case 'Pertanahan':
        return 'bg-yellow-600 text-white'
      case 'Teknis':
        return 'bg-cyan-600 text-white'
      case 'Umum':
        return 'bg-gray-600 text-white'
      default:
        return 'bg-gray-600 text-white'
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp">
            <Link 
              href="/pengumuman"
              className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-6 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Kembali ke Daftar Pengumuman</span>
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className={`px-4 py-2 rounded-full text-sm font-bold shadow-md ${getTipeBadgeColor(pengumuman.tipe)}`}>
                {pengumuman.tipe}
              </span>
              <span className={`px-4 py-2 rounded-full text-sm font-semibold shadow-md ${getKategoriBadgeColor(pengumuman.kategori)}`}>
                {pengumuman.kategori}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {pengumuman.judul}
            </h1>

            <div className="flex items-center gap-4 text-blue-50 text-base font-medium">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{formatTanggal(pengumuman.tanggal)}</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                {/* Ringkasan */}
                <div className="bg-blue-100 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Ringkasan</h2>
                  <p className="text-gray-800 leading-relaxed text-base">
                    {pengumuman.ringkasan}
                  </p>
                </div>

                {/* Konten */}
                <div 
                  className="prose prose-lg max-w-none 
                    prose-headings:text-gray-900 prose-headings:font-bold
                    prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                    prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3
                    prose-p:text-gray-800 prose-p:text-base prose-p:leading-relaxed prose-p:mb-4
                    prose-ul:text-gray-800 prose-ul:text-base
                    prose-ol:text-gray-800 prose-ol:text-base
                    prose-li:text-gray-800 prose-li:mb-2
                    prose-strong:text-gray-900 prose-strong:font-bold
                    prose-a:text-blue-600 prose-a:font-semibold"
                  dangerouslySetInnerHTML={{ __html: pengumuman.isi }}
                />

                {/* Lampiran */}
                {pengumuman.lampiran && (
                  <div className="mt-12 p-6 bg-gray-100 rounded-lg border-2 border-gray-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                      </svg>
                      Lampiran
                    </h3>
                    <div className="flex flex-wrap items-center justify-between bg-white p-5 rounded-lg border-2 border-gray-200 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center">
                          <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-base">{pengumuman.lampiran}</p>
                          <p className="text-sm text-gray-600 font-medium">Dokumen PDF</p>
                        </div>
                      </div>
                      <DownloadButton fileName={pengumuman.lampiran} />
                    </div>
                  </div>
                )}
              </div>
            </AnimatedSection>

            {/* Related Pengumuman */}
            <AnimatedSection animation="fadeInUp">
              <div className="mt-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Pengumuman Lainnya</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {pengumumanList
                    .filter(item => item.id !== pengumuman.id && item.kategori === pengumuman.kategori)
                    .slice(0, 2)
                    .map(item => (
                      <Link
                        key={item.id}
                        href={`/pengumuman/${item.id}`}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-gray-200 hover:border-blue-400 group"
                      >
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <span className={`px-3 py-1.5 rounded-full text-xs font-bold shadow-sm ${getTipeBadgeColor(item.tipe)}`}>
                              {item.tipe}
                            </span>
                            <span className={`px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm ${getKategoriBadgeColor(item.kategori)}`}>
                              {item.kategori}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {item.judul}
                          </h3>
                          <p className="text-sm text-gray-700 line-clamp-2 font-medium">
                            {item.ringkasan}
                          </p>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ada Pertanyaan?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Hubungi kami untuk informasi lebih lanjut mengenai pengumuman ini
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:07517051234"
                  className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (0751) 7051234
                </a>
                <a
                  href="mailto:info@perkimtan.sumbarprov.go.id"
                  className="px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Kami
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
