import { Chart, ProgressCircle } from '@/components'

const Dashboard = () => {
  return (
    <div className="flex justify-between">
      <ProgressCircle />
      <Chart />
    </div>
  )
}

export default Dashboard
