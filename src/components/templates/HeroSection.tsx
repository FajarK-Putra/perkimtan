import Link from 'next/link'
import { dinasProfile } from '@/lib/data'

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-12 left-12 w-48 h-48 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-12 right-12 w-64 h-64 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-green-300 rounded-full blur-3xl"></div>
      </div>

      {/* Background Buildings Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-900/45 to-transparent">
        <svg className="absolute bottom-0 w-full h-20 text-blue-800/25" fill="currentColor" viewBox="0 0 1200 120">
          <path d="M0,120 L0,80 L200,80 L200,40 L400,40 L400,60 L600,60 L600,20 L800,20 L800,80 L1000,80 L1000,100 L1200,100 L1200,120 Z"></path>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-5">
              <svg className="w-3.5 h-3.5 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-white font-medium text-sm">Pemerintah Provinsi Sumatera Barat</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              Dinas Perumahan,{' '}
              <span className="bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent">
                Kawasan Permukiman
              </span>{' '}
              dan Pertanahan
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-blue-100 mb-5 leading-relaxed max-w-lg">
              {dinasProfile.visi}
            </p>

            {/* Description */}
            <p className="text-sm text-blue-200 mb-6 leading-relaxed max-w-lg">
              Melayani masyarakat Sumatera Barat dalam bidang perumahan, kawasan permukiman, 
              dan pertanahan dengan profesional, transparan, dan berkelanjutan.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link 
                href="/layanan" 
                className="inline-flex items-center bg-white text-blue-800 px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
              >
                Layanan Kami
                <svg className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link 
                href="/profil" 
                className="inline-flex items-center bg-transparent border-2 border-white text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-white hover:text-blue-800 transition-all duration-300 group"
              >
                Tentang Kami
                <svg className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-5 border-t border-white/20">
              <div className="text-center">
                <div className="text-lg font-bold text-white mb-1">2,500+</div>
                <div className="text-blue-200 text-xs">Unit Rumah</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-white mb-1">500 Ha</div>
                <div className="text-blue-200 text-xs">Kawasan Tertata</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-white mb-1">5,000</div>
                <div className="text-blue-200 text-xs">Sertifikat Tanah</div>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative lg:pl-6">
            {/* Main Image Placeholder */}
            <div className="relative">
              <div className="w-full h-80 lg:h-[420px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center relative overflow-hidden">
                {/* Building Icon */}
                <div className="text-center">
                  <svg className="w-28 h-28 text-white/30 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <p className="text-white/50 text-base">Gedung Dinas Perkimtan Sumbar</p>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-6 right-6 w-14 h-14 bg-blue-400/20 rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                <div className="absolute bottom-6 left-6 w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-3 -left-3 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-white/20">
                <div className="flex items-center space-x-2">
                  <div className="w-9 h-9 bg-blue-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Layanan Online</div>
                    <div className="text-xs text-gray-600">24/7 Tersedia</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-3 -right-3 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-white/20">
                <div className="flex items-center space-x-2">
                  <div className="w-9 h-9 bg-green-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Terpercaya</div>
                    <div className="text-xs text-gray-600">ISO 9001:2015</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
