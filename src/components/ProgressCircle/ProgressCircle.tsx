import { Circle } from './Circle.tsx'
import React from 'react'

interface TextInsideProps {
  percentage: number
}
const Text: React.FC<TextInsideProps> = ({ percentage }) => {
  return (
    <text
      x="50%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={'1.5em'}
    >
      {percentage.toFixed(0)}%
    </text>
  )
}
export const ProgressCircle = () => {
  return (
    <div>
      <svg width={200} height={200}>
        <g transform={`rotate(-90 ${'100 100'})`}>
          <Circle colour="lightgrey" pct={100} />
          <Circle colour={'blue'} pct={70} />
        </g>
        <Text percentage={70} />
      </svg>
    </div>
  )
}
