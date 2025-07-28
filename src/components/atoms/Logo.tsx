import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeClasses = {
  sm: 'h-7',
  md: 'h-8',
  lg: 'h-10'
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center space-x-2 ${className}`}>
      <Image
        src="/app/assets/img/logo-perkimtan.png"
        alt="Logo Perkimtan"
        width={40}
        height={40}
        className={`${sizeClasses[size]} w-auto`}
      />
      <div className="flex flex-col">
        <span className="text-xs font-bold text-blue-900 leading-tight">
          PERKIMTAN
        </span>
        <span className="text-xs text-blue-700 leading-tight">
          SUMBAR
        </span>
      </div>
    </Link>
  )
}
