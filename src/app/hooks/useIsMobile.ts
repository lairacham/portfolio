'use client'

import { useEffect, useState } from 'react'

export const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [breakpoint])

  return isMobile
}
