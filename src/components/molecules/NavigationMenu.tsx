'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigationItems = [
  { href: '/', label: 'Beranda' },
  {
    label: 'Profil',
    children: [
      { href: '/profil/tentang', label: 'Tentang Kami' },
      { href: '/profil/visi-misi', label: 'Visi & Misi' },
      { href: '/profil/struktur', label: 'Struktur Organisasi' },
      { href: '/profil/program-kerja', label: 'Program Kerja' },
      {
        label: 'Kepegawaian',
        children: [
          { href: '/profil/kepegawaian/pejabat', label: 'Pejabat Struktural' },
          { href: '/profil/kepegawaian/staff', label: 'Staff' },
          { href: '/profil/kepegawaian/honorer', label: 'Tenaga Honorer' }
        ]
      }
    ]
  },
  {
    label: 'Layanan',
    children: [
      {
        label: 'Perumahan',
        children: [
          { href: '/layanan/perumahan/perizinan', label: 'Perizinan Perumahan' },
          { href: '/layanan/perumahan/rusunawa', label: 'Rumah Susun Sederhana' },
          { href: '/layanan/perumahan/bsps', label: 'Program BSPS' },
          { href: '/layanan/perumahan/flpp', label: 'Fasilitas FLPP' }
        ]
      },
      {
        label: 'Kawasan Permukiman',
        children: [
          { href: '/layanan/kawasan/penataan', label: 'Penataan Kawasan' },
          { href: '/layanan/kawasan/kumuh', label: 'Penanganan Kumuh' },
          { href: '/layanan/kawasan/infrastruktur', label: 'Infrastruktur' },
          { href: '/layanan/kawasan/kotaku', label: 'Program KOTAKU' }
        ]
      },
      {
        label: 'Pertanahan',
        children: [
          { href: '/layanan/pertanahan/sertifikasi', label: 'Sertifikasi Tanah' },
          { href: '/layanan/pertanahan/legalisasi', label: 'Legalisasi Aset' },
          { href: '/layanan/pertanahan/sengketa', label: 'Penyelesaian Sengketa' },
          { href: '/layanan/pertanahan/konsultasi', label: 'Konsultasi Pertanahan' }
        ]
      },
      { href: '/layanan/pengaduan', label: 'Pengaduan Masyarakat' }
    ]
  },
  { href: '/berita', label: 'Berita' },
  {
    label: 'Informasi',
    children: [
      { href: '/informasi/pengumuman', label: 'Pengumuman' },
      { href: '/informasi/peraturan', label: 'Peraturan' },
      { href: '/informasi/dokumen', label: 'Dokumen Publik' },
      { href: '/informasi/statistik', label: 'Data Statistik' }
    ]
  },
  { href: '/galeri', label: 'Galeri' },
  { href: '/kontak', label: 'Kontak' }
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
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            pathname === item.href
              ? 'text-blue-600 bg-blue-50'
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
          <button className="px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200 flex items-center">
            {item.label}
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {activeDropdown === item.label && item.children && (
            <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[250px] z-50">
              {item.children.map((child) => (
                <div key={child.label} className="relative">
                  {child.href ? (
                    <Link
                      href={child.href}
                      className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    >
                      {child.label}
                    </Link>
                  ) : (
                    <div
                      className="relative"
                      onMouseEnter={() => handleSubMouseEnter(child.label)}
                    >
                      <button className="w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors flex items-center justify-between">
                        {child.label}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      {activeSubDropdown === child.label && child.children && (
                        <div className="absolute left-full top-0 ml-1 bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[220px] z-50">
                          {child.children.map((subChild) => (
                            <Link
                              key={subChild.href}
                              href={subChild.href!}
                              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
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
    <nav className={`hidden lg:flex items-center space-x-1 ${className}`}>
      {navigationItems.map(renderNavigationItem)}
    </nav>
  )
}
