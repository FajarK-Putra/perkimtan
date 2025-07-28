'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import NavLink from '../atoms/NavLink'
import { usePathname } from 'next/navigation'

const navigationItems = [
  { href: '/', label: 'Beranda' },
  { href: '/profil', label: 'Profil' },
  { href: '/berita', label: 'Berita' },
  { href: '/layanan', label: 'Layanan' },
  { href: '/galeri', label: 'Galeri' },
  { href: '/kontak', label: 'Kontak' }
]

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className="md:hidden">
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={closeMenu} />
      )}

      {/* Mobile menu panel */}
      <div className={`
        fixed top-0 right-0 z-50 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-lg font-semibold text-gray-900">Menu</span>
          <button
            onClick={closeMenu}
            className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>
        
        <nav className="p-4">
          <div className="space-y-2">
            {navigationItems.map((item) => (
              <div key={item.href} onClick={closeMenu}>
                <NavLink
                  href={item.href}
                  isActive={pathname === item.href}
                  className="block w-full px-3 py-3 rounded-md hover:bg-gray-50"
                >
                  {item.label}
                </NavLink>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </div>
  )
}
