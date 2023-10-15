import React from 'react'
import { healthyLogo, iconMenu } from '@/assets/images'
import { MENU_LIST } from '@/constants'

const Header: React.FC = () => {
  return (
    <div className="w-full text-orange-400 bg-black-500 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <img src={healthyLogo} alt="logo-header" />
        <div className="flex gap-6 items-center">
          {MENU_LIST.map((item, index) => {
            return (
              <div key={index} className="flex items-center gap-2">
                <img src={item.icon} alt="menu-list" />
                <p>{item.title}</p>
              </div>
            )
          })}
          <img src={iconMenu} alt="icon-men" />
        </div>
      </div>
    </div>
  )
}

export default Header
