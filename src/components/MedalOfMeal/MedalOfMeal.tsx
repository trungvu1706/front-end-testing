import { MEDALS } from '@/constants'

export const MedalOfMeal = () => {
  return (
    <div className="flex items-center justify-center gap-[64px] mt-5">
      {MEDALS.map((metal, index) => (
        <img src={metal} alt="medal" key={index} width={136} height={136} />
      ))}
    </div>
  )
}
