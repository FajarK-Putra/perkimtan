'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigationItems = [
  { href: '/', label: 'Beranda' },
  {
    label: 'Profil',
    children: [
      { href: '/profil/visi-misi', label: 'Visi & Misi' },
      { href: '/profil/sejarah-singkat', label: 'Sejarah Singkat' },
      { href: '/profil/struktur-organisasi', label: 'Struktur Organisasi' },
      { href: '/profil/tugas-dan-fungsi', label: 'Tugas dan Fungsi' },
      { href: '/profil/pejabat-struktural', label: 'Profil Pejabat Struktural' }
    ]
  },
  {
    label: 'Informasi',
    children: [
      { href: '/informasi/berita', label: 'Berita' },
      { href: '/informasi/foto', label: 'Foto' },
      { href: '/informasi/agenda', label: 'Agenda' },
      { href: '/informasi/infografis', label: 'Infografis' },
      { href: '/informasi/video', label: 'Video' }
    ]
  },
  { href: '/pengumuman', label: 'Pengumuman' },
  {
    label: 'PPID',
    children: [
      { href: '/PPID/profil-ppid', label: 'Profil PPID' },
      { href: '/PPID/tugas-dan-fungsi', label: 'Tugas dan Fungsi PPID' },
      { href: '/PPID/struktur-organisasi', label: 'Struktur Organisasi PPID' },
      { href: '/PPID/visi-misi', label: 'Visi Misi PPID' },
      { href: '/PPID/informasi/berkala', label: 'Informasi Berkala' },
      { href: '/PPID/informasi/setiap-saat', label: 'Informasi Tersedia Setiap Saat' },
      { href: '/PPID/informasi/serta-merta', label: 'Informasi Serta Merta' },
      { href: '/PPID/informasi/dikecualikan', label: 'Informasi Dikecualikan' },
      { href: '/PPID/regulasi/sop', label: 'Regulasi dan Standar Operasional Prosedur' },
      { href: '/PPID/regulasi/informasi', label: 'Regulasi Informasi' },
      { href: '/PPID/permohonan/tata-cara', label: 'Tata Cara Permohonan Informasi' },
      { href: '/PPID/permohonan/keberatan', label: 'Tata Cara Permohonan Keberatan' },
      { href: '/PPID/permohonan/sengketa', label: 'Tata Cara Pengajuan Sengketa' },
      { href: '/PPID/informasi/daftar-2025', label: 'Daftar Informasi Publik 2025' },
      { href: '/PPID/permohonan/online', label: 'Keberatan Permohonan Online' },
      { href: '/PPID/laporan/rencana-pengadaan', label: 'Rencana Umum Pengadaan' },
      { href: '/PPID/laporan/keuangan', label: 'Laporan Keuangan' },
      { href: '/PPID/laporan/kinerja-2024', label: 'Laporan Kinerja 2024' }
    ]
  },
  { href: '/layanan', label: 'Informasi Layanan' },
  { href: '/lapor', label: 'Lapor' }
]

interface NavigationMenuProps {
  className?: string
}

interface NavigationItem {
  href?: string
  label: string
  children?: NavigationItem[]
}

export default function NavigationMenu({ className = '' }: NavigationMenuProps) {
  const pathname = usePathname()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null)

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
    setActiveSubDropdown(null)
  }

  const handleSubMouseEnter = (label: string) => {
    setActiveSubDropdown(label)
  }

  const renderNavigationItem = (item: NavigationItem) => {
    if (item.href) {
      // Simple link
      return (
        <Link
          key={item.href}
          href={item.href}
          className={`px-4 py-3 rounded-lg font-semibold transition-all duration-200 text-base ${
            pathname === item.href
              ? 'text-blue-600 bg-blue-50 shadow-sm'
              : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
          }`}
        >
          {item.label}
        </Link>
      )
    } else {
      // Dropdown menu
      return (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => handleMouseEnter(item.label)}
          onMouseLeave={handleMouseLeave}
        >
          <button className="px-4 py-3 rounded-lg font-semibold text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200 flex items-center text-base">
            {item.label}
            <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {activeDropdown === item.label && item.children && (
            <div className={`absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 ${item.label === 'PPID' ? 'grid grid-cols-2 gap-x-4 min-w-[480px]' : 'min-w-[240px]'} z-[9995]`}>
              {item.children.map((child) => (
                <div key={child.label} className="relative">
                  {child.href ? (
                    <Link
                      href={child.href}
                      className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors text-sm font-medium border-l-4 border-transparent hover:border-blue-600"
                    >
                      {child.label}
                    </Link>
                  ) : (
                    <div
                      className="relative"
                      onMouseEnter={() => handleSubMouseEnter(child.label)}
                    >
                      <button className="w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors flex items-center justify-between text-sm font-medium border-l-4 border-transparent hover:border-blue-600">
                        {child.label}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      {activeSubDropdown === child.label && child.children && (
                        <div className="absolute left-full top-0 ml-2 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 min-w-[220px] z-[9996]">
                          {child.children.map((subChild) => (
                            <Link
                              key={subChild.href}
                              href={subChild.href!}
                              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors text-base font-medium border-l-4 border-transparent hover:border-blue-600"
                            >
                              {subChild.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )
    }
  }

  return (
    <nav className={`hidden lg:flex items-center space-x-2 ${className}`}>
      {navigationItems.map(renderNavigationItem)}
    </nav>
  )
}
