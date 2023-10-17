import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { healthyLogo, iconMenu } from '@/assets/images'
import { MENU_LIST } from '@/constants'
import { PATH_RECORD, PATH_TOP_PAGE } from '@/routes'
import { MenuList } from '@/Model'

const Header: React.FC = () => {
  const navigate = useNavigate()

  const handleNavigate = (value: MenuList) => {
    if (value.path) {
      navigate(PATH_RECORD)
    }
  }
  return (
    <div className="w-full bg-black-500 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to={PATH_TOP_PAGE}>
          <img src={healthyLogo} alt="logo-header" />
        </Link>
        <div className="flex gap-6 items-center">
          {MENU_LIST.map((item, index) => {
            return (
              <div key={index} className="flex items-center gap-2">
                <img src={item.icon} alt="menu-list" />
                <p
                  className="text-white-900 hover:text-orange-400 hover:cursor-pointer"
                  onClick={() => handleNavigate(item)}
                >
                  {item.title}
                </p>
              </div>
            )
          })}
          <img src={iconMenu} alt="icon-men" className="ml-4" />
        </div>
      </div>
    </div>
  )
}

export default Header
