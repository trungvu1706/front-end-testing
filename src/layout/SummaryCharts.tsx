import { LineChart, ProgressCircle } from '@/components'
import { CHART_DATA } from '@/constants'

const SummaryCharts = () => {
  return (
    <div className="flex items-center">
      <ProgressCircle />

      <LineChart
        data={CHART_DATA}
        hasFilterTime={false}
        bgChartColor="bg-black-600"
      />
    </div>
  )
}

export default SummaryCharts
