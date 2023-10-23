import classNames from 'classnames'
import {
  CartesianGrid,
  Line,
  LineChart as LineChartComp,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { CHART_TIMES } from '@/constants'
import { useState } from 'react'

interface LineChartProps<T> {
  data: T[]
  hasFilterTime?: boolean
  bgChartColor?: string
  hasChartTitle?: boolean
}

export const LineChart = <T extends {}>({
  data,
  hasFilterTime,
  bgChartColor,
  hasChartTitle,
}: LineChartProps<T>) => {
  const [selectedItem, setSelectedItem] = useState(0)
  const handleSelected = (index: number) => {
    setSelectedItem(index)
  }

  return (
    <div
      className={classNames(
        `${
          bgChartColor ? bgChartColor : 'bg-black-500'
        } w-full h-full p-6 min-h-[350px]`,
      )}
    >
      {hasChartTitle && (
        <div className="leading-5 max-w-[200px] px-2 mb-2.5">
          <span className="text-white-900 uppercase text-[15px] font-normal mr-2">
            body record
          </span>
          <span className="text-white-900 text-[22px] font-normal">
            2021.05.21
          </span>
        </div>
      )}

      <ResponsiveContainer width={'100%'} height={300}>
        <LineChartComp width={500} height={300} data={data}>
          <CartesianGrid horizontal={false} stroke="#777" />
          <YAxis tick={false} axisLine={{ stroke: '#777' }} />
          <XAxis dataKey="name" axisLine={{ stroke: '#414141' }} />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#FFCC21" />
          <Line type="monotone" dataKey="pv" stroke="#8FE9D0" />
        </LineChartComp>
      </ResponsiveContainer>

      {hasFilterTime && (
        <div className="flex gap-4 py-2.5 px-8">
          {CHART_TIMES.map((time, index) => {
            return (
              <div
                key={time.id}
                className={classNames(
                  `${
                    selectedItem === index ? 'bg-orange-300' : 'bg-white-900'
                  } rounded-full h-[24px] px-5 cursor-pointer`,
                )}
                onClick={() => handleSelected(index)}
              >
                <p
                  className={classNames(
                    `${
                      selectedItem === index
                        ? 'text-white-900'
                        : 'text-orange-300'
                    } font-light text-[15px]`,
                  )}
                >
                  {time.title}
                </p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
