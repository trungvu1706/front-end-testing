import { PICTURE_LIST } from '@/constants'
import { ButtonScroll } from '@/components'

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

        <ButtonScroll className="absolute -right-[60px] top-[40%] z-50 cursor-pointer" />
      </div>

      <div className="flex justify-center mt-7">
        <button
          style={{
            backgroundImage:
              'linear-gradient(33deg, #FFCC21 8.75%, #FF963C 86.64%)',
          }}
          className="h-[56px] text-white-900 min-w-[300px] mb-6"
        >
          記録をもっと見る
        </button>
      </div>
    </>
  )
}

export default FoodPlan
