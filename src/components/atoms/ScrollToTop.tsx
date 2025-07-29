'use client'

import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Show button when page is scrolled down and calculate scroll progress
  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100

      setScrollProgress(scrollPercent)
      
      if (scrollTop > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9980] flex flex-col items-center space-y-2">
      {/* Scroll Progress Indicator */}
      <div className="relative w-14 h-14">
        {/* Progress Circle */}
        <svg className="w-14 h-14 transform -rotate-90" viewBox="0 0 36 36">
          <path
            className="text-gray-200"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            d="M18 2.5 A15.5 15.5 0 1 1 18 33.5 A15.5 15.5 0 1 1 18 2.5"
          />
          <path
            className="text-blue-600"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeDasharray={`${scrollProgress}, 100`}
            d="M18 2.5 A15.5 15.5 0 1 1 18 33.5 A15.5 15.5 0 1 1 18 2.5"
          />
        </svg>
        
        {/* Button */}
        <button
          onClick={scrollToTop}
          className="absolute inset-0 w-14 h-14 bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group border-2 border-blue-100 hover:border-blue-300"
          aria-label="Scroll to top"
        >
          <svg 
            className="w-5 h-5 mx-auto group-hover:scale-110 transition-transform duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2.5} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </button>
      </div>

      {/* Scroll Percentage Text */}
      <div className="bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-semibold px-2 py-1 rounded-full shadow-sm border border-blue-100">
        {Math.round(scrollProgress)}%
      </div>
    </div>
  )
}
