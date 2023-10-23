interface ArticleCardColumnProps {
  img: string
  title: string
  hashtag: string
  day: string
  time: string
}

export const ArticleCardColumn = ({
  img,
  title,
  hashtag,
  day,
  time,
}: ArticleCardColumnProps) => {
  return (
    <div className="w-full">
      <div className="relative">
        <img
          src={img}
          alt="img-card"
          className="object-cover w-full h-full"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 p-1 bg-orange-300">
          <span className="text-white-900 font-normal text-[15px] mr-2.5">
            {day}
          </span>
          <span className="text-white-900 font-normal text-[15px]">{time}</span>
        </div>
      </div>
      <div>
        <p className="text-[15px] font-normal text-black-500 truncate cursor-pointer">
          {title}
        </p>
        <p className="font-light text-xs text-orange-400 cursor-pointer">
          {hashtag}
        </p>
      </div>
    </div>
  )
}
