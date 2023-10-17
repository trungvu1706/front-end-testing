import { buttonScroll } from '@/assets/images'
import React from 'react'

interface ButtonScrollProps {
  className?: string
}
export const ButtonScroll: React.FC<ButtonScrollProps> = ({ className }) => {
  return (
    <div className={className}>
      <img src={buttonScroll} alt="button-scroll" className="w-full h-full" />
    </div>
  )
}
