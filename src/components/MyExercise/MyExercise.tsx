import { MyExerciseType } from '@/Model'

interface MyExerciseProps {
  exercises: MyExerciseType[]
}
export const MyExercise = ({ exercises }: MyExerciseProps) => {
  return (
    <div className="bg-black-500 px-6 pt-4 pb-6">
      <div className="leading-5 max-w-[200px] px-2 mb-2.5 flex items-center gap-6">
        <span className="text-white-900 uppercase text-[15px] font-normal">
          my exercise
        </span>
        <span className="text-white-900 text-[22px] font-normal">
          2021.05.21
        </span>
      </div>

      <ul className="grid grid-cols-2 gap-x-10 gap-y-2 px-4 scroll-bar-list">
        {exercises.map((exercise) => (
          <li
            className="flex justify-between border-b-2 border-black-400 mb-2"
            key={exercise.id}
          >
            <div className="flex-1 flex items-baseline">
              <div className="bg-white-900 p-1 rounded-full mr-2.5"></div>
              <div className="text-white-900 font-light text-[15px] flex flex-col pb-0.5">
                <p>{exercise.title}</p>
                <p className="text-orange-300 font-light text-[15px]">
                  {exercise.cal}kcal
                </p>
              </div>
            </div>
            <p className="text-orange-300 text-lg font-normal">
              {exercise.time} min
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
