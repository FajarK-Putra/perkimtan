import Link from 'next/link'
import { ReactNode } from 'react'

interface NavLinkProps {
  href: string
  children: ReactNode
  className?: string
  isActive?: boolean
}

export default function NavLink({ 
  href, 
  children, 
  className = '', 
  isActive = false 
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`
        relative px-3 py-2 text-sm font-medium transition-colors duration-200
        hover:text-blue-600
        ${isActive 
          ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600' 
          : 'text-gray-700 hover:text-blue-600'
        }
        ${className}
      `}
    >
      {children}
    </Link>
  )
}
