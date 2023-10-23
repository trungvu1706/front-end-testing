import { LineChart, MyDiary, MyExercise, RecordCard } from '@/components'
import {
  CARD_LIST,
  CHART_DATA,
  DATA_DIARIES,
  DATA_EXERCISES,
} from '@/constants'

const MyRecord = () => {
  return (
    <div className="relative">
      <div className="flex justify-between">
        {CARD_LIST.map((card) => (
          <RecordCard
            key={card.id}
            title={card.title}
            desc={card.desc}
            bgImg={card.bgImg}
          />
        ))}
      </div>

      <div className="mt-14">
        <LineChart data={CHART_DATA} hasFilterTime hasChartTitle />
      </div>

      <div className="mt-14">
        <MyExercise exercises={DATA_EXERCISES} />
      </div>

      <div className="mt-14">
        <MyDiary diaries={DATA_DIARIES} />
      </div>
    </div>
  )
}

export default MyRecord
