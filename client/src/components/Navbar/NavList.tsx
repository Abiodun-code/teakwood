import { motion } from 'framer-motion'
import React from 'react'

const Variants ={
  initial: { x: 0 },
  animate: { x: [0, 10, 0, -10, 0], opacity: 1 },
  transition: { type: "spring", duration: 0.5, delay: 1 }
}

const NavList = () => {
  return (
    <div className='w-full h-full border-b border-b-seventh'>
      <div className='container lg:w-[50%] w-full lg:ml-8 px-4'>
        <motion.div variants={Variants} animate="animate" initial="initial"
        className="flex justify-start items-start gap-11 py-8 overflow-x-auto scrollbar-thin">
          <span className='cursor-pointer text-base text-third font-light hover:text-sixth transition-all duration-75'>Living</span>
          <span className='cursor-pointer text-base text-third font-light hover:text-sixth transition-all duration-75'>Bedroom</span>
          <span className='cursor-pointer text-base text-third font-light hover:text-sixth transition-all duration-75'>Dining</span>
          <span className='cursor-pointer text-base text-third font-light hover:text-sixth transition-all duration-75'>Chair</span>
          <span className='cursor-pointer text-base text-third font-light hover:text-sixth transition-all duration-75'>Table</span>
          <span className='cursor-pointer text-base text-third font-light hover:text-sixth transition-all duration-75'>Lighting</span>
          <span className='cursor-pointer text-base text-third font-light hover:text-sixth transition-all duration-75'>Offices</span>
          <span className='cursor-pointer text-base text-third font-light hover:text-sixth transition-all duration-75'>Rugs</span>
        </motion.div>
      </div>
    </div>
  )
}

export default NavList