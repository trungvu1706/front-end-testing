import React from 'react'

interface CircleProps {
  colour: string
  pct: number
}

export const Circle: React.FC<CircleProps> = ({ colour, pct }) => {
  const r = 70
  const circ = 2 * Math.PI * r
  const strokePct = ((100 - pct) * circ) / 100
  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ''}
      strokeWidth={'4px'}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="round"
      filter="drop-shadow(0px 0px 6px #FC7400)"
    ></circle>
  )
}
