import React from 'react'

const NavList = () => {
  return (
    <div className='w-full h-full border-b border-b-seventh'>
      <div className='container lg:w-[50%] w-full lg:ml-8 px-4'>
        <div className="flex justify-start items-start gap-11 py-8 overflow-x-auto scrollbar-thin">
          <span className='cursor-pointer text-base text-third font-light hover:text-sixth transition-all duration-75'>Living</span>
          <span className='cursor-pointer text-base text-third font-light hover:text-sixth transition-all duration-75'>Bedroom</span>
          <span className='cursor-pointer text-base text-third font-light hover:text-sixth transition-all duration-75'>Dining</span>
          <span className='cursor-pointer text-base text-third font-light hover:text-sixth transition-all duration-75'>Chair</span>
          <span className='cursor-pointer text-base text-third font-light hover:text-sixth transition-all duration-75'>Table</span>
          <span className='cursor-pointer text-base text-third font-light hover:text-sixth transition-all duration-75'>Lighting</span>
          <span className='cursor-pointer text-base text-third font-light hover:text-sixth transition-all duration-75'>Offices</span>
          <span className='cursor-pointer text-base text-third font-light hover:text-sixth transition-all duration-75'>Rugs</span>
        </div>
      </div>
    </div>
  )
}

export default NavList