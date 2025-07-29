'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/atoms/AnimatedSection'
import { dinasProfile, statistikKinerja } from '@/lib/data'

export default function StatistikPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('2024')
  const currentYear = new Date().getFullYear()
  
  const statistikData = [
    {
      category: 'Perumahan',
      data: [
        { label: 'Unit Rusunawa Dibangun', value: '2,450', unit: 'unit', trend: '+12%' },
        { label: 'Penerima Program BSPS', value: '8,750', unit: 'KK', trend: '+18%' },
        { label: 'Fasilitas FLPP Disalurkan', value: '3,200', unit: 'unit', trend: '+8%' },
        { label: 'Perizinan Perumahan', value: '1,680', unit: 'izin', trend: '+15%' }
      ]
    },
    {
      category: 'Kawasan Permukiman',
      data: [
        { label: 'Kawasan Kumuh Tertangani', value: '450', unit: 'Ha', trend: '+22%' },
        { label: 'Program KOTAKU', value: '25', unit: 'kelurahan', trend: '+5%' },
        { label: 'Infrastruktur Dibangun', value: '180', unit: 'lokasi', trend: '+14%' },
        { label: 'Penataan Kawasan', value: '320', unit: 'Ha', trend: '+10%' }
      ]
    },
    {
      category: 'Pertanahan',
      data: [
        { label: 'Sertifikat Tanah Diterbitkan', value: '12,500', unit: 'sertifikat', trend: '+25%' },
        { label: 'Legalisasi Aset', value: '3,750', unit: 'aset', trend: '+20%' },
        { label: 'Sengketa Diselesaikan', value: '145', unit: 'kasus', trend: '+8%' },
        { label: 'Konsultasi Pertanahan', value: '2,890', unit: 'konsultasi', trend: '+16%' }
      ]
    }
  ]

  const yearlyProgress = [
    { year: 2020, perumahan: 85, kawasan: 78, pertanahan: 82 },
    { year: 2021, perumahan: 88, kawasan: 82, pertanahan: 85 },
    { year: 2022, perumahan: 92, kawasan: 87, pertanahan: 89 },
    { year: 2023, perumahan: 95, kawasan: 91, pertanahan: 93 },
    { year: 2024, perumahan: 98, kawasan: 94, pertanahan: 96 }
  ]

  const topAchievements = [
    {
      title: 'Sertifikasi Tanah Terbanyak se-Sumbar',
      description: 'Mencapai 12.500 sertifikat dalam 1 tahun',
      icon: '🏆',
      year: '2024'
    },
    {
      title: 'Penanganan Kawasan Kumuh Terbaik',
      description: 'Berhasil menangani 450 Ha kawasan kumuh',
      icon: '🌟',
      year: '2024'
    },
    {
      title: 'Pelayanan Publik Prima',
      description: 'Raih nilai 98% untuk kepuasan masyarakat',
      icon: '⭐',
      year: '2024'
    }
  ]

  const monthlyData = [
    { month: 'Jan', perumahan: 95, kawasan: 88, pertanahan: 92 },
    { month: 'Feb', perumahan: 97, kawasan: 90, pertanahan: 94 },
    { month: 'Mar', perumahan: 94, kawasan: 92, pertanahan: 96 },
    { month: 'Apr', perumahan: 98, kawasan: 94, pertanahan: 97 },
    { month: 'Mei', perumahan: 96, kawasan: 91, pertanahan: 95 },
    { month: 'Jun', perumahan: 99, kawasan: 95, pertanahan: 98 }
  ]

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          * {
            outline: none !important;
          }
          
          input:focus,
          button:focus,
          textarea:focus,
          select:focus,
          div:focus {
            outline: none !important;
            box-shadow: none !important;
          }
          
          input:focus-visible,
          button:focus-visible,
          textarea:focus-visible {
            outline: none !important;
          }
        `
      }} />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <AnimatedSection>
          <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-300/20 rounded-full blur-lg"></div>
              <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-teal-400/15 rounded-full blur-2xl"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Data Statistik <span className="text-emerald-200">&</span> Kinerja
                </h1>
                <p className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto leading-relaxed">
                  Transparansi data dan laporan kinerja Dinas Perkimtan Sumbar tahun {currentYear}
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-sm text-emerald-200">Kepuasan Publik</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                    <div className="text-2xl font-bold">12.5K</div>
                    <div className="text-sm text-emerald-200">Sertifikat Terbit</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                    <div className="text-2xl font-bold">450 Ha</div>
                    <div className="text-sm text-emerald-200">Kawasan Tertangani</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Top Achievements */}
        <AnimatedSection>
          <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Pencapaian Terbaik</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Prestasi dan pencapaian terbaik yang telah diraih pada tahun ini
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {topAchievements.map((achievement, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center 
                                            hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <span className="text-4xl">{achievement.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{achievement.description}</p>
                    <span className="inline-block bg-emerald-100 text-emerald-800 text-sm font-semibold px-4 py-2 rounded-full">
                      Tahun {achievement.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Main Statistics */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Statistik Kinerja</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Data kinerja terkini dari berbagai bidang layanan kami
                </p>
              </div>
            </AnimatedSection>
            
            <div className="space-y-12">
              {statistikData.map((category, categoryIndex) => (
                <AnimatedSection key={categoryIndex}>
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-white/20 p-3 rounded-xl">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold">{category.category}</h2>
                          <p className="text-emerald-100">Data kinerja terkini</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {category.data.map((item, itemIndex) => (
                          <div key={itemIndex} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 
                                                        hover:from-emerald-50 hover:to-teal-50 transition-all duration-300 
                                                        border border-gray-200 hover:border-emerald-200">
                            <div className="text-center">
                              <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">
                                {item.value}
                              </div>
                              <div className="text-sm text-gray-500 mb-1">{item.unit}</div>
                              <div className="text-sm font-medium text-gray-900 mb-3 leading-relaxed">{item.label}</div>
                              <div className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                                item.trend.startsWith('+') 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-red-100 text-red-800'
                              }`}>
                                {item.trend} dari tahun lalu
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Charts and Analytics */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Analisis & Trend</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Grafik dan analisis perkembangan kinerja dari waktu ke waktu
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Yearly Progress Chart */}
              <AnimatedSection>
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-3 rounded-xl">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Progres Tahunan (%)</h3>
                      <p className="text-gray-600 text-sm">Perkembangan 5 tahun terakhir</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    {yearlyProgress.map((year, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-gray-900">{year.year}</span>
                          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                            Rata-rata: {Math.round((year.perumahan + year.kawasan + year.pertanahan) / 3)}%
                          </span>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                              <span>Perumahan</span>
                            </div>
                            <span className="font-medium">{year.perumahan}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${year.perumahan}%` }}
                            ></div>
                          </div>
                          
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              <span>Kawasan</span>
                            </div>
                            <span className="font-medium">{year.kawasan}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${year.kawasan}%` }}
                            ></div>
                          </div>
                          
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                              <span>Pertanahan</span>
                            </div>
                            <span className="font-medium">{year.pertanahan}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${year.pertanahan}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Monthly Performance */}
              <AnimatedSection>
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-3 rounded-xl">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Kinerja Bulanan 2024 (%)</h3>
                      <p className="text-gray-600 text-sm">Performa 6 bulan terakhir</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {monthlyData.map((month, index) => (
                      <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 
                                                 hover:from-emerald-50 hover:to-teal-50 transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div className="font-semibold text-gray-900 text-lg w-16">{month.month}</div>
                          <div className="flex gap-6">
                            <div className="text-center">
                              <div className="text-xs text-blue-600 font-medium mb-1">Perumahan</div>
                              <div className="text-lg font-bold text-blue-600">{month.perumahan}%</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xs text-green-600 font-medium mb-1">Kawasan</div>
                              <div className="text-lg font-bold text-green-600">{month.kawasan}%</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xs text-purple-600 font-medium mb-1">Pertanahan</div>
                              <div className="text-lg font-bold text-purple-600">{month.pertanahan}%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Key Performance Indicators */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Indikator Kinerja Utama</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Pencapaian target-target strategis yang telah ditetapkan
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 
                               hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2v0a2 2 0 012-2h10" />
                      </svg>
                    </div>
                    <div className="text-sm font-medium text-blue-700">Perumahan</div>
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{statistikKinerja.perumahan.persentase}%</div>
                  <div className="text-xs text-blue-600">
                    {statistikKinerja.perumahan.realisasi.toLocaleString()} dari {statistikKinerja.perumahan.target.toLocaleString()}
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 
                               hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="text-sm font-medium text-green-700">Kawasan</div>
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">{statistikKinerja.kawasan.persentase}%</div>
                  <div className="text-xs text-green-600">
                    {statistikKinerja.kawasan.realisasi.toLocaleString()} dari {statistikKinerja.kawasan.target.toLocaleString()}
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-200 
                               hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="text-sm font-medium text-purple-700">Sertifikat</div>
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">{statistikKinerja.sertifikat.persentase}%</div>
                  <div className="text-xs text-purple-600">
                    {statistikKinerja.sertifikat.realisasi.toLocaleString()} dari {statistikKinerja.sertifikat.target.toLocaleString()}
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-200 
                               hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div className="text-sm font-medium text-orange-700">Kepuasan Publik</div>
                  </div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">{statistikKinerja.kepuasan.persentase}%</div>
                  <div className="text-xs text-orange-600">
                    Survei {statistikKinerja.kepuasan.realisasi}% dari target {statistikKinerja.kepuasan.target}%
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Download Section */}
        <AnimatedSection>
          <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-3xl shadow-xl border border-emerald-200 p-12 text-center">
                <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Unduh Laporan Lengkap</h3>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Dapatkan laporan statistik dan kinerja lengkap dalam format PDF untuk analisis mendalam
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="px-8 py-4 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 
                                   transition-colors duration-200 font-semibold shadow-lg hover:shadow-xl
                                   flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Laporan Tahunan 2024
                  </button>
                  <button className="px-8 py-4 bg-white text-emerald-600 border-2 border-emerald-600 rounded-xl 
                                   hover:bg-emerald-50 transition-colors duration-200 font-semibold
                                   flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Laporan Bulanan
                  </button>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection>
          <section className="py-12 bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Butuh Data Tambahan?</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Untuk permintaan data khusus atau informasi statistik lainnya, silakan hubungi kami
                </p>
                <div className="flex flex-wrap justify-center gap-8 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-100 p-2 rounded-lg">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Email:</span>
                      <span className="text-gray-600 ml-2">{dinasProfile.email}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-100 p-2 rounded-lg">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Telepon:</span>
                      <span className="text-gray-600 ml-2">{dinasProfile.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </>
  )
}
