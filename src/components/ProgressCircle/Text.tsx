import React from 'react'

interface TextInsideProps {
  x?: string | number
  y?: string | number
  children: string | number
  fontSize?: string | number
}
export const Text: React.FC<TextInsideProps> = ({
  x = '50%',
  y = '50%',
  children,
  fontSize,
}) => {
  return (
    <text
      x={x}
      y={y}
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={fontSize}
      fontWeight={400}
      fill="#fff"
      filter={'drop-shadow(0px 0px 6px #FC7400)'}
    >
      {children}
    </text>
  )
}
