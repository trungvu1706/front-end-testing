import { MyDiaryType } from '@/Model'
import { SharedButton } from '@/components'

interface MyDiaryProps {
  diaries: MyDiaryType[]
}
export const MyDiary = ({ diaries }: MyDiaryProps) => {
  return (
    <>
      <div>
        <h3 className="font-normal text-[22px] text-black-500 uppercase mb-2">
          my diary
        </h3>
      </div>
      <div className="grid grid-cols-4  gap-3">
        {diaries.map((diary) => {
          return (
            <div
              key={diary.id}
              className="border-2 border-black-400 w-full p-4"
            >
              <p className="font-normal text-lg text-black-500">{diary.day}</p>
              <p className="font-normal text-lg text-black-500 mb-2">
                {diary.time}
              </p>
              <p className="font-light text-xs pb-[27px]">{diary.content}</p>
            </div>
          )
        })}
      </div>

      <SharedButton>自分の日記をもっと見る</SharedButton>
    </>
  )
}
