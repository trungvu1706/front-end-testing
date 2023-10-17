import React from 'react'
import { myBodyImg } from '@/assets/images'

interface RecordCardProps {
  title: string
  desc: string
  bgImg: string
}
export const RecordCard: React.FC<RecordCardProps> = ({
  title,
  desc,
  bgImg,
}) => {
  console.log(myBodyImg)
  return (
    <div className="border-[24px] border-orange-300 w-[280px] h-[280px] bg-black-600">
      {/*<div className="bg-black-600">*/}
      {/*  <img src={myBodyImg} alt="my-body" className="w-full h-full" />*/}
      {/*</div>*/}
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '100%',
          height: '100%',
        }}
        className="flex flex-col justify-center"
      >
        <div className="max-w-fit m-auto">
          <h3 className="text-[25px] font-normal text-orange-300 uppercase mb-2.5">
            {title}
          </h3>
          <p className="text-sm font-light bg-orange-400 p-1 text-white-900 text-center">
            {desc}
          </p>
        </div>
      </div>
    </div>
  )
}
