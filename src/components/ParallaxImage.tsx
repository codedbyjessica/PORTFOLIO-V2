'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

interface ParallaxImageProps {
  src: any
  alt: string
  width?: number
  height?: number
  className?: string
  triggerRef?: React.RefObject<HTMLElement>
}

export default function ParallaxImage({ 
  src, 
  alt, 
  width = 800, 
  height = 800, 
  className,
  triggerRef 
}: ParallaxImageProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (triggerRef?.current) {
        const triggerRect = triggerRef.current.getBoundingClientRect()
        // Hide image when trigger element is completely out of view
        setIsVisible(triggerRect.bottom > 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [triggerRef])

  return (
    <div 
      className={`fixed z-0 transition-opacity duration-300 ${className} ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        transform: 'translateZ(0)', // Hardware acceleration for smooth parallax
      }}
    >
      <Image 
        src={src} 
        alt={alt} 
        width={width} 
        height={height} 
        className={className}
        priority
      />
    </div>
  )
}
