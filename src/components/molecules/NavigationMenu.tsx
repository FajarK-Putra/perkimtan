'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
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
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const subTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const lastActiveRef = useRef<string | null>(null)

  const clearTimeouts = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    if (subTimeoutRef.current) {
      clearTimeout(subTimeoutRef.current)
      subTimeoutRef.current = null
    }
  }, [])

  const handleMouseEnter = useCallback((label: string) => {
    clearTimeouts()
    
    // Prevent duplicate dropdowns
    if (lastActiveRef.current === label && activeDropdown === label) {
      return
    }
    
    // Close any other dropdown first
    if (activeDropdown && activeDropdown !== label) {
      setActiveDropdown(null)
      setActiveSubDropdown(null)
    }
    
    // Set new active dropdown
    lastActiveRef.current = label
    setActiveDropdown(label)
  }, [clearTimeouts, activeDropdown])

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
      setActiveSubDropdown(null)
      lastActiveRef.current = null
    }, 200)
  }, [])

  const handleSubMouseEnter = useCallback((label: string) => {
    clearTimeouts()
    setActiveSubDropdown(label)
  }, [clearTimeouts])

  const handleDropdownMouseEnter = useCallback(() => {
    clearTimeouts()
  }, [clearTimeouts])

  const handleDropdownMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
      setActiveSubDropdown(null)
    }, 150)
  }, [])

  const handleItemClick = useCallback(() => {
    // Delay closing to allow navigation
    setTimeout(() => {
      setActiveDropdown(null)
      setActiveSubDropdown(null)
      lastActiveRef.current = null
    }, 100)
  }, [])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearTimeouts()
      lastActiveRef.current = null
    }
  }, [clearTimeouts])

  const renderNavigationItem = (item: NavigationItem) => {
    if (item.href) {
      // Simple link
      return (
        <Link
          key={item.href}
          href={item.href}
          className={`block px-4 py-2 rounded-md font-medium transition-all duration-200 text-sm cursor-pointer navbar-menu-item ${
            pathname === item.href
              ? 'text-blue-600 bg-blue-50'
              : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
          }`}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            minWidth: '90px',
            whiteSpace: 'nowrap'
          }}
        >
          {item.label}
        </Link>
      )
    } else {
      // Dropdown menu
      return (
        <div
          key={`dropdown-${item.label}`}
          className="relative"
          onMouseEnter={() => handleMouseEnter(item.label)}
          onMouseLeave={handleMouseLeave}
        >
          <button 
            className="px-4 py-2 rounded-md font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 flex items-center justify-center text-sm cursor-pointer select-none navbar-menu-item"
            style={{
              minWidth: '90px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              whiteSpace: 'nowrap'
            }}
          >
            {item.label}
            <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {activeDropdown === item.label && item.children && item.children.length > 0 && (
            <div 
              key={`menu-${item.label}`}
              className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-white rounded-lg shadow-xl border border-gray-200 py-4 dropdown-menu z-[9998] ${
                item.label === 'PPID' 
                  ? 'grid grid-cols-3 gap-4 w-[750px]' 
                  : 'min-w-[200px]'
              }`}
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
              style={{
                display: 'block',
                visibility: 'visible',
                opacity: '1',
                backdropFilter: 'blur(8px)',
                backgroundColor: 'rgba(255, 255, 255, 0.98)',
                maxHeight: 'none',
                overflow: 'visible'
              }}
            >
              {item.children.map((child) => (
                <div key={child.label} className="relative">
                  {child.href ? (
                    <Link
                      href={child.href}
                      onClick={handleItemClick}
                      className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-xs font-medium border-l-3 border-transparent hover:border-blue-500 cursor-pointer dropdown-menu-item rounded-md"
                      style={{
                        display: 'block',
                        width: '100%',
                        lineHeight: '1.4',
                        whiteSpace: 'normal',
                        wordWrap: 'break-word'
                      }}
                    >
                      {child.label}
                    </Link>
                  ) : (
                    <div
                      className="relative"
                      onMouseEnter={() => handleSubMouseEnter(child.label)}
                    >
                      <button 
                        className="w-full text-left px-6 py-5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:shadow-sm transition-all duration-200 flex items-center justify-between text-sm font-medium border-l-4 border-transparent hover:border-blue-600 cursor-pointer select-none min-h-[52px]"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          width: '100%'
                        }}
                      >
                        {child.label}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      {activeSubDropdown === child.label && child.children && (
                        <div 
                          className="absolute left-full top-0 ml-2 bg-white rounded-xl shadow-2xl border border-gray-100 py-4 min-w-[260px] z-[9999]"
                          style={{
                            backdropFilter: 'blur(8px)',
                            backgroundColor: 'rgba(255, 255, 255, 0.95)'
                          }}
                        >
                          {child.children.map((subChild) => (
                            <Link
                              key={subChild.href}
                              href={subChild.href!}
                              onClick={handleItemClick}
                              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm font-medium border-l-3 border-transparent hover:border-blue-500 cursor-pointer min-h-[44px]"
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                width: '100%'
                              }}
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
