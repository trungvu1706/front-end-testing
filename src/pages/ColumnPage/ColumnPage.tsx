import { COLUMN_CARD, DATA_COLUMNS } from '@/constants'
import { ArticleCardColumn, ColumnCard, SharedButton } from '@/components'

const ColumnPage = () => {
  return (
    <>
      <div className="flex justify-center gap-8 w-full">
        {COLUMN_CARD.map((column) => (
          <ColumnCard key={column.id} title={column.title} desc={column.desc} />
        ))}
      </div>

      <div className="mt-14 grid grid-cols-4 gap-x-2 gap-y-4">
        {DATA_COLUMNS.map((column) => {
          return (
            <ArticleCardColumn
              key={column.id}
              img={column.img}
              title={column.title}
              hashtag={column.hashtag}
              day={column.day}
              time={column.time}
            />
          )
        })}
      </div>

      <SharedButton>コラムをもっと見る</SharedButton>
    </>
  )
}

export default ColumnPage
