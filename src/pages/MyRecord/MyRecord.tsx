import { RecordCard } from '@/components'
import { CARD_LIST } from '@/constants'

const MyRecord = () => {
  return (
    <div className="flex justify-center gap-12">
      {CARD_LIST.map((card) => (
        <RecordCard
          key={card.id}
          title={card.title}
          desc={card.desc}
          bgImg={card.bgImg}
        />
      ))}
    </div>
  )
}

export default MyRecord
