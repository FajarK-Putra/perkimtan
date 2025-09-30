'use client'

import { useState, useEffect } from 'react'
import Logo from '../atoms/Logo'
import NavigationMenu from '../molecules/NavigationMenu'
import MobileMenu from '../molecules/MobileMenu'
import Button from '../atoms/Button'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

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

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-3 flex-shrink-0 w-64 justify-end">
            <Button variant="outline" size="sm" className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium px-3 py-1.5 rounded-md transition-all duration-200 text-sm">
              Layanan
            </Button>
            <Button variant="primary" size="sm" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-3 py-1.5 rounded-md transition-all duration-200 text-sm">
              Kontak
            </Button>
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
