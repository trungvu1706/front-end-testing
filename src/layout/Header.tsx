import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { closeIcon, healthyLogo, iconMenu } from '@/assets/images'
import { DRAW_MENUS, MENU_LIST } from '@/constants'
import { PATH_TOP_PAGE } from '@/routes'

const Header: React.FC = () => {
  const navigate = useNavigate()
  const menuRef = useRef<HTMLDivElement | null>(null)

  const [openDraw, setOpenDraw] = useState(false)

  const handleNavigate = (path?: string) => {
    if (path) {
      navigate(path)
    }
  }

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        openDraw &&
        menuRef &&
        !menuRef.current?.contains(e?.target as Node)
      ) {
        setOpenDraw(false)
      }
    }

    document.addEventListener('mousedown', handler)

    return () => document.removeEventListener('mousedown', handler)
  }, [openDraw])

  return (
    <div className="w-full bg-black-500 py-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link to={PATH_TOP_PAGE}>
          <img src={healthyLogo} alt="logo-header" />
        </Link>
        <div className="flex gap-6 items-center">
          {MENU_LIST.map((item, index) => {
            return (
              <div key={index} className="flex items-center gap-2">
                <div className="relative">
                  <img src={item.icon} alt="menu-list" />
                  {item.notification && (
                    <div className="absolute -top-[10%] left-[70%] bg-orange-500 rounded-full p-2 w-4 h-4 flex items-center justify-center text-white-900 text-[10px] font-normal">
                      {item.notification}
                    </div>
                  )}
                </div>
                <p
                  className="text-white-900 hover:text-orange-400 hover:cursor-pointer"
                  onClick={() => handleNavigate(item.path)}
                >
                  {item.title}
                </p>
              </div>
            )
          })}
          <div
            className="relative"
            onClick={() => setOpenDraw(!openDraw)}
            ref={menuRef}
          >
            <img
              src={openDraw ? closeIcon : iconMenu}
              alt="icon-men"
              className="ml-4 cursor-pointer w-[32px] h-[32px]"
            />

            {openDraw && (
              <div className="w-[280px] absolute right-0 z-50">
                {DRAW_MENUS.map((menu) => {
                  return (
                    <div
                      key={menu.id}
                      className="bg-black-400 p-5 border-b border-black-600"
                    >
                      <p
                        className="text-lg font-light text-white-900 cursor-pointer"
                        onClick={() => handleNavigate(menu.path)}
                      >
                        {menu.title}
                      </p>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
