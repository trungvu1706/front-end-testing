import React from 'react'
import { FOOTER_LIST } from '@/constants'

const Footer: React.FC = () => {
  return (
    <div className="bg-black-500 text-white-900">
      <div className="flex items-center gap-[45px] py-14 max-w-5xl mx-auto">
        {FOOTER_LIST.map((data, index) => (
          <p key={index} className="text-[11px] font-light text-white-900">
            {data}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Footer
