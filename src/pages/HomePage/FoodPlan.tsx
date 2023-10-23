import { PICTURE_LIST } from '@/constants'
import { SharedButton } from '@/components'

const FoodPlan = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-2 max-w-5xl mx-auto mt-6 relative">
        {PICTURE_LIST.map((picture) => {
          return (
            <div key={picture.id} className="w-[250px] h-[250px] relative">
              <span className=" bg-orange-300 absolute bottom-0 left-0 text-sm font-normal p-1 text-white-900">
                {picture.date}
              </span>

              <img
                src={picture.img}
                alt="list-food"
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          )
        })}
      </div>

      <SharedButton>記録をもっと見る</SharedButton>
    </>
  )
}

export default FoodPlan
