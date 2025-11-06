'use client'

import { useState } from 'react'
import Toast from './Toast'

interface DownloadButtonProps {
  fileName: string
  fileUrl?: string
}

type ToastConfig = {
  message: string
  type: 'info' | 'success' | 'error'
} | null

export default function DownloadButton({ fileName, fileUrl }: DownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false)
  const [toast, setToast] = useState<ToastConfig>(null)

  const handleDownload = async () => {
    setIsDownloading(true)
    
    try {
      // Jika fileUrl tersedia (nantinya dari API), download file tersebut
      if (fileUrl) {
        const response = await fetch(fileUrl)
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = fileName
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)
        
        setToast({
          message: `File "${fileName}" berhasil diunduh!`,
          type: 'success'
        })
      } else {
        // Untuk sementara (dummy), tampilkan info
        setToast({
          message: `Download "${fileName}" - Fitur ini akan aktif saat terintegrasi dengan API`,
          type: 'info'
        })
        
        // Simulasi download delay
        await new Promise(resolve => setTimeout(resolve, 1500))
      }
    } catch (error) {
      console.error('Error downloading file:', error)
      setToast({
        message: 'Terjadi kesalahan saat mengunduh file',
        type: 'error'
      })
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <>
      <button 
        onClick={handleDownload}
        disabled={isDownloading}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-bold transition-colors flex items-center gap-2 shadow-md disabled:cursor-not-allowed"
      >
        {isDownloading ? (
          <>
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Mengunduh...</span>
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Unduh</span>
          </>
        )}
      </button>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          duration={4000}
          onClose={() => setToast(null)}
        />
      )}
    </>
  )
}
