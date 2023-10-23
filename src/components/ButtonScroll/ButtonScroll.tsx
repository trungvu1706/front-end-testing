import { buttonScroll } from '@/assets/images'
import React from 'react'

interface ButtonScrollProps {
  className?: string
}
export const ButtonScroll: React.FC<ButtonScrollProps> = ({ className }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <div className={className}>
      <img
        src={buttonScroll}
        alt="button-scroll"
        className="w-full h-full"
        onClick={scrollToTop}
      />
    </div>
  )
}
