import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsPerson, BsSearch, BsCart4, BsChevronDown, BsPersonFillLock } from 'react-icons/bs'
import {NavUl} from '../../Config/NavUl'
import logo from '../../assets/logo.png'
import MobileHeader from './MobileHeader'
import { motion, Variants } from 'framer-motion'
import { useCookies } from 'react-cookie'

const CursorAnimate = {
  onScreen: {
    x: 0
  },
  offScreen: {
    y: [0, -10, 0, 10, 0]
  },
  transition: { type: "bounce", damping: 10, stiffness: 100, duration: 100, delay:1 }
}

type Props = {}

const NavMenu = (props: Props) => {
  const [cookies, setCookies] = useCookies(["access_token"])

  const navigate = useNavigate()

  const logout = () =>{
    setCookies("access_token", "");
    window.localStorage.removeItem("userID")
    navigate("/auth")
  }
  return (
    <div className='w-full h-auto border-b border-b-seventh'>
      <div className="container lg:max-w-[97%] md:max-w-[97%] lg:px-0 mx-auto px-3">
        <div className="flex justify-between">
          <Link to={'/'} className="lg:w-[13rem] w-[11rem] py-5"><motion.img
            variants={CursorAnimate} initial={"onScreen"} animate={"offScreen"} src={logo} alt=""/></Link>
          <div className="flex gap-0 lg:gap-12 justify-between">
            <nav className="w-full">
              <div className='lg:hidden block'>
                <MobileHeader />
              </div>
              <motion.div variants={CursorAnimate} initial={"onScreen"} animate={"offScreen"}
               className='gap-12 lg:flex hidden'>
                {NavUl.map((nav, index) => {
                  return (
                    <div className='relative group'>
                      <div className='relative flex items-center gap-3 py-[1.7rem]'>
                        <Link key={index} className=' text-base' to={nav.path}>{nav.name}</Link>
                        {nav.subMenu ?
                          <BsChevronDown className='text-base' />
                          : ''}
                      </div>
                      {nav.subMenu ? (
                        <div className=' absolute group-hover:flex group-hover:lg:flex hidden flex-col w-[12rem] items-start bg-white border'>
                          {nav.subLink?.map((link, index) => {
                            return (
                              <Link className='py-4 pl-4 transition-all duration-300 w-full hover:bg-second hover:text-white text-base' key={index} to={link.path}>{link.name}</Link>
                            )
                          })}
                        </div>
                      ) : ''}
                    </div>
                  )
                })}
              </motion.div>
            </nav>
            <div className="w-auto mx-auto lg:flex hidden gap-6 py-[1.7rem] justify-center">
              {!cookies.access_token ? (
                <Link className="text-lg text-second" to={'/auth'}><BsPerson /></Link>
              ) : <Link className="text-lg text-second" to={'/'} onClick={logout}><BsPersonFillLock/></Link>}
              <Link className="text-lg text-second" to={'/'}><BsSearch /></Link>
              <Link className="text-lg text-second" to={'/'}><BsCart4 /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavMenu