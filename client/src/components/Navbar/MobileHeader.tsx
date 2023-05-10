import React, { useState } from 'react'
import { CgMenuRight, CgMenuLeft } from 'react-icons/cg'
import { NavUl } from '../../Config/NavUl'
import { BsChevronDown } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { motion, Variants } from 'framer-motion'

const CursorAnimate = {
  onScreen: {
    x: 0
  },
  offScreen: {
    y: [0, -10, 0, 10, 0]
  },
  transition:{ type: "bounce",  damping: 10,  stiffness: 100, duration: 100}
}

const BodyAnimate = {
  onScreen: {
    y: 0,
    opacity: 0
  },
  offScreen: {
    x: [0, -10, 0, 10, 0],
    opacity: 1,
  },
  transition: { type: "spring", bounce:0.5, duration: 1 }
}

const MobileHeader = () => {
  const [Open, setOpen] = useState(false)
  
  return (
    <div>
      <motion.div variants={CursorAnimate} initial={"onScreen"} animate={"offScreen"} whileTap={{scale: 1.4}}
       className='py-6' onClick={() => setOpen(!Open)}>
        {Open ? <CgMenuLeft className='cursor-pointer text-2xl' />
          : <CgMenuRight className='cursor-pointer text-2xl' />}
      </motion.div>
      {Open ?
        <motion.div variants={BodyAnimate} initial={"onScreen"} animate={"offScreen"}
         className=' scale-x-100 duration-75 shadow-2xl w-full max-w-sm h-auto absolute z-10 top-[7rem] bg-white left-0'>
          <div>
            {NavUl.map((nav, index) => {
              return (
                <div className='w-full pt-4 group' key={index}>
                  <div className='cursor-pointer w-full flex items-center justify-between py-3 px-4 hover:bg-second hover:text-white'>
                    <Link className=' text-base ' to={nav.path}>{nav.name}</Link>
                    {nav.subMenu ?
                      <BsChevronDown className='text-base' />
                      : ''}
                  </div>
                  {nav.subMenu ? (
                    <div className='w-full hidden group-hover:flex  flex-col items-start bg-white border'>
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
          </div>
        </motion.div>
        : ''}
    </div>
  )
}

export default MobileHeader