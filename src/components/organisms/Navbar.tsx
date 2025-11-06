'use client'

import { useState, useEffect } from 'react'
import Logo from '../atoms/Logo'
import NavigationMenu from '../molecules/NavigationMenu'
import MobileMenu from '../molecules/MobileMenu'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    // Ensure navbar elements are clickable and responsive
    const ensureClickable = () => {
      const navElements = document.querySelectorAll('.navbar-menu-item') as NodeListOf<HTMLElement>
      const dropdownElements = document.querySelectorAll('.dropdown-menu') as NodeListOf<HTMLElement>
      
      navElements.forEach(el => {
        el.style.pointerEvents = 'auto'
        el.style.cursor = 'pointer'
        el.style.zIndex = '15'
        el.style.position = 'relative'
        
        // Add click event as fallback
        el.addEventListener('click', (e) => {
          const link = el.getAttribute('href') || el.closest('a')?.getAttribute('href')
          if (link && !e.defaultPrevented) {
            window.location.href = link
          }
        })
      })
      
      dropdownElements.forEach(el => {
        el.style.pointerEvents = 'auto'
        el.style.zIndex = '9998'
      })
      
      // Force re-render hover states
      const navbar = document.querySelector('header')
      if (navbar) {
        navbar.style.zIndex = '9999'
        navbar.style.position = 'fixed'
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    // Run multiple times to ensure it works
    setTimeout(ensureClickable, 50)
    setTimeout(ensureClickable, 200)
    setTimeout(ensureClickable, 500)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 transition-all duration-300
        ${isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-100' 
          : 'bg-white shadow-sm border-b border-gray-50'
        }
      `}
      style={{ zIndex: 9999 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 navbar-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 w-64">
            <Logo size="md" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center flex-1 justify-center mx-8">
            <NavigationMenu />
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center flex-shrink-0 w-80 justify-end">
            <div className="relative w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari berita, pengumuman..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && searchQuery.trim()) {
                      window.location.href = `/informasi/berita?search=${encodeURIComponent(searchQuery)}`
                    }
                  }}
                  className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-300 hover:border-gray-400 focus:outline-none focus:border-gray-400 transition-colors duration-200 text-sm text-gray-900 placeholder-gray-500 bg-white"
                />
                <svg 
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                    aria-label="Hapus pencarian"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Search Suggestions Dropdown */}
              {isSearchFocused && searchQuery && (
                <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <div className="px-4 py-2 text-xs text-gray-600 font-semibold uppercase tracking-wide">
                    Tekan Enter untuk mencari
                  </div>
                  <div className="border-t border-gray-200 my-1"></div>
                  <button
                    onClick={() => window.location.href = `/informasi/berita?search=${encodeURIComponent(searchQuery)}`}
                    className="w-full px-4 py-2.5 text-left hover:bg-gray-50 transition-colors flex items-center gap-3 text-sm"
                  >
                    <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    <span className="text-gray-900">Cari di <strong className="font-bold">Berita</strong></span>
                  </button>
                  <button
                    onClick={() => window.location.href = `/pengumuman?search=${encodeURIComponent(searchQuery)}`}
                    className="w-full px-4 py-2.5 text-left hover:bg-gray-50 transition-colors flex items-center gap-3 text-sm"
                  >
                    <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                    <span className="text-gray-900">Cari di <strong className="font-bold">Pengumuman</strong></span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
