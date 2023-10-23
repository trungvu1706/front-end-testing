import React from 'react'

interface SharedButtonProps {
  children: React.ReactNode | string
}
export const SharedButton = ({ children }: SharedButtonProps) => {
  return (
    <div className="flex justify-center mt-7">
      <button
        style={{
          backgroundImage:
            'linear-gradient(33deg, #FFCC21 8.75%, #FF963C 86.64%)',
        }}
        className="h-[56px] text-white-900 min-w-[300px] mb-6 rounded-md"
      >
        {children}
      </button>
    </div>
  )
}
