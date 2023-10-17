import { Circle } from './Circle.tsx'
import { Text } from './Text.tsx'
import { background_01 } from '@/assets/images'

export const ProgressCircle = () => {
  const renderPercentage = (percentage: number) => {
    return `${percentage.toFixed(0)} %`
  }

  return (
    <div
      style={{
        backgroundImage: `url(${background_01})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '40%',
        height: 350,
      }}
      className="flex justify-center items-center"
    >
      <svg width={200} height={200}>
        <g transform={`rotate(-90 ${'100 100'})`}>
          <Circle colour="lightgrey" pct={75} />
          <Circle colour={'#fff'} pct={75} />
        </g>
        <Text children={renderPercentage(75)} fontSize="25px" x="60%" />
        <Text children="5/21" fontSize="18px" x="35%" y="51%" />
      </svg>
    </div>
  )
}
