'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { createPortal } from 'react-dom'
import Button from '../atoms/Button'

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

interface NavigationItem {
  href?: string
  label: string
  children?: NavigationItem[]
}

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => {
    setIsOpen(false)
    setExpandedItems([])
  }

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const toggleExpanded = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label)
        ? prev.filter(item => item !== label)
        : [...prev, label]
    )
  }

  const renderNavigationItem = (item: NavigationItem, level: number = 0) => {
    const isExpanded = expandedItems.includes(item.label)
    const hasChildren = item.children && item.children.length > 0
    const paddingLeft = level === 0 ? 'pl-4' : level === 1 ? 'pl-8' : 'pl-12'
    
    if (item.href) {
      // Simple link
      return (
        <div key={item.href} className="mb-1">
          <Link
            href={item.href}
            onClick={closeMenu}
            className={`
              block w-full ${paddingLeft} pr-4 py-3 rounded-lg font-medium text-base transition-all duration-200
              ${pathname === item.href
                ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }
            `}
          >
            {item.label}
          </Link>
        </div>
      )
    } else if (hasChildren) {
      // Dropdown menu
      return (
        <div key={item.label} className="mb-1">
          <button
            onClick={() => toggleExpanded(item.label)}
            className={`
              w-full ${paddingLeft} pr-4 py-3 rounded-lg font-medium text-base transition-all duration-200 
              text-gray-700 hover:text-blue-600 hover:bg-gray-50 flex items-center justify-between
            `}
          >
            <span>{item.label}</span>
            {isExpanded ? 
              <ChevronDown className="w-5 h-5 transition-transform duration-200" /> :
              <ChevronRight className="w-5 h-5 transition-transform duration-200" />
            }
          </button>
          
          {isExpanded && (
            <div className="mt-1 space-y-1 bg-gray-50 rounded-lg py-2">
              {item.children?.map(child => renderNavigationItem(child, level + 1))}
            </div>
          )}
        </div>
      )
    }
    
    return null
  }

  return (
    <>
      <div className="lg:hidden relative">
        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="mobile-menu-button p-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 relative"
          style={{ zIndex: 99997 }}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu portal */}
      {mounted && isOpen && createPortal(
        <>
          {/* Mobile menu overlay */}
          <div 
            className="mobile-menu-overlay fixed inset-0 bg-transparent transition-all duration-300" 
            style={{ 
              zIndex: 99998,
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'transparent'
            }}
            onClick={closeMenu} 
          />

          {/* Mobile menu panel */}
          <div 
            className={`
              mobile-menu-panel fixed top-0 right-0 h-full w-80 sm:w-80 xs:w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto
              ${isOpen ? 'translate-x-0' : 'translate-x-full'}
            `}
            style={{ 
              zIndex: 99999,
              position: 'fixed',
              top: 0,
              right: 0,
              height: '100vh'
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-blue-100">
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">Menu Navigasi</span>
                <span className="text-sm text-gray-600">Dinas Perkimtan Sumbar</span>
              </div>
              <button
                onClick={closeMenu}
                className="p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-white/50 transition-colors duration-200"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Navigation */}
            <nav className="p-4">
              <div className="space-y-2">
                {navigationItems.map(item => renderNavigationItem(item))}
              </div>
            </nav>

            {/* CTA Buttons */}
            <div className="p-4 border-t border-gray-100 bg-gray-50">
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  size="md" 
                  className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 rounded-lg transition-all duration-200"
                >
                  Layanan Online
                </Button>
                <Button 
                  variant="primary" 
                  size="md" 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Hubungi Kami
                </Button>
              </div>
            </div>
          </div>
        </>,
        document.getElementById('mobile-menu-portal') || document.body
      )}
    </>
  )
}
