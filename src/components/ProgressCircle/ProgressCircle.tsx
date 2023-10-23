import { Circle } from './Circle.tsx'
import { Text } from './Text.tsx'
import { background_01 } from '@/assets/images'

export const ProgressCircle = () => {
  const renderPercentage = (percentage: number) => {
    return `${percentage.toFixed(0)} %`
  }

  return (
    <div className="relative w-[500px] h-[350px]">
      <img
        src={background_01}
        alt="circle-chart"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg width={200} height={200}>
          <g transform={`rotate(-90 ${'100 100'})`}>
            <Circle colour="lightgrey" pct={75} />
            <Circle colour={'#fff'} pct={75} />
          </g>
          <Text children={renderPercentage(75)} fontSize="25px" x="60%" />
          <Text children="5/21" fontSize="18px" x="35%" y="51%" />
        </svg>
      </div>
    </div>
  )
}
