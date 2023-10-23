interface ColumnCardProps {
  title: string
  desc: string
}
export const ColumnCard = ({ title, desc }: ColumnCardProps) => {
  return (
    <div className="bg-black-600 w-full p-2">
      <div className="px-4">
        <h3 className="font-normal text-[22px] text-orange-300 uppercase pb-2.5 text-center ">
          {title}
        </h3>
        <div className="border-t border-white-900 w-[60px] m-auto"></div>
      </div>
      <p className="font-light text-lg text-white-900 text-center mt-2 pb-3.5">
        {desc}
      </p>
    </div>
  )
}
