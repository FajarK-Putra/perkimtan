import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeClasses = {
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-12'
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center space-x-3 ${className} group`}>
      <Image
        src="/app/assets/img/logo-perkimtan.png"
        alt="Logo Perkimtan"
        width={48}
        height={48}
        className={`${sizeClasses[size]} w-auto transition-transform duration-200 group-hover:scale-105`}
      />
      <div className="flex flex-col">
        <span className={`font-bold text-blue-900 leading-tight ${
          size === 'lg' ? 'text-base' : size === 'md' ? 'text-sm' : 'text-xs'
        }`}>
          PERKIMTAN
        </span>
        <span className={`text-blue-700 leading-tight ${
          size === 'lg' ? 'text-sm' : size === 'md' ? 'text-xs' : 'text-xs'
        }`}>
          SUMATERA BARAT
        </span>
      </div>
    </Link>
  )
}
