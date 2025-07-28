'use client'

import { ReactNode } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface AnimatedSectionProps {
  children: ReactNode
  animation?: 'fadeInUp' | 'slideIn' | 'slideInRight' | 'scaleIn'
  delay?: number
  className?: string
}

export default function AnimatedSection({
  children,
  animation = 'fadeInUp',
  delay = 0,
  className = ''
}: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  })

  const getAnimationClass = () => {
    if (!isIntersecting) return 'opacity-0'
    
    switch (animation) {
      case 'fadeInUp':
        return 'fade-in-up'
      case 'slideIn':
        return 'slide-in'
      case 'slideInRight':
        return 'slide-in-right'
      case 'scaleIn':
        return 'scale-in'
      default:
        return 'fade-in-up'
    }
  }

  return (
    <div
      ref={ref as any}
      className={`transition-all duration-300 ${getAnimationClass()} ${className}`}
      style={{ 
        animationDelay: isIntersecting ? `${delay}ms` : '0ms',
        transitionDelay: isIntersecting ? `${delay}ms` : '0ms'
      }}
    >
      {children}
    </div>
  )
}
