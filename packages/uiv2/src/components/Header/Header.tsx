import { NavLink } from 'react-router-dom'
import { Logo } from '../Logo/Logo'
import { Social } from '../Social/Social'
import { ITEMS } from './data/items'
import { useEffect, useState } from 'react'

const ClassesItem = 'vers-border-b-4 vers-border-solid vers-p-1 hover:vers-border-b-4 hover:vers-border-solid hover:vers-border-primary'

export const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1300)
  const [navActive, setNavActive] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1300)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const alternateNav = () => setNavActive(!navActive)

  return (
    <header className='vers-relative vers-bg-white vers-border-b-4 vers-border-solid vers-border-primary vers-px-4 vers-flex vers-justify-between vers-items-center vers-h-header'>
      <div className='vers-flex vers-justify-center vers-items-center vers-gap-2'>
        {
          isMobile && (
            <div className='vers-bg-xxxxxxgreen vers-w-[30px] vers-h-[50px] vers-flex vers-items-center vers-justify-center' onClick={alternateNav}>
              {
                !navActive
                  ? <i className='fa-solid fa-bars vers-text-3xl'></i>
                  : <i className='fa-solid fa-xmark vers-text-4xl'></i>
              }
            </div>
          )
        }
        <Logo variant='purple' />
      </div>
      <div className='vers-flex vers-gap-3 vers-items-center'>
        {
          !isMobile && (
            <ul className='vers-flex vers-gap-1'>
              {
                ITEMS.map((item, index) => (
                  <NavLink key={ index} to={item.url} className={ ({ isActive }) => isActive ? `vers-border-primary ${ClassesItem}` : `vers-border-white ${ClassesItem}`}>
                    <p className='vers-font-medium vers-uppercase vers-text-center '>
                      {item.name}
                    </p>
                  </NavLink>
                ))
              }
            </ul>
          )
        }
        <div className='vers-hidden xsm:vers-block'>
          <Social variant='purple'/>
        </div>
      </div>

      {/* NAV MOBILE */}
      {
        (isMobile && navActive) && (
          <div className='vers-absolute vers-top-[6rem] vers-left-[5px] vers-bg-white vers-z-10 vers-p-2 vers-flex vers-flex-col vers-w-[250px] vers-rounded-md vers-gap-[1px] vers-border-solid vers-border-2 vers-border-purple-300' onClick={alternateNav}>
            {
              ITEMS.map((item, index) => (
                <NavLink key={ index} to={item.url} className={ ({ isActive }) => isActive ? 'vers-bg-purple-300 vers-rounded-md vers-text-white' : 'vers-border-white '}>
                  <p className=' vers-p-1 hover:vers-bg-purple-300 hover:vers-text-white vers-rounded-md vers-uppercase vers-font-semibold'>{item.name}</p>
                </NavLink>
              ))
            }
          </div>
        )
      }
    </header>
  )
}