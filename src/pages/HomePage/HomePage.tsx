import { MedalOfMeal } from '@/components'
import FoodPlan from '@/pages/HomePage/FoodPlan.tsx'

const HomePage = () => {
  return (
    <div className="flex-1 mb-10">
      <MedalOfMeal />
      <FoodPlan />
    </div>
  )
}

export default HomePage
