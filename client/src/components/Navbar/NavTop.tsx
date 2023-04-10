import React from 'react'
import { Link } from 'react-router-dom'
import {BsPerson, BsSearch, BsCart4} from 'react-icons/bs'

type Props = {}

const NavTop = (props: Props) => {
  return (
    <div className='w-full h-full bg-fourth'>
      <div className="container lg:max-w-[97%] lg:px-0 mx-auto py-2 px-3">
        <div className="flex justify-center md:justify-between lg:justify-between">
          <h1 className="text-xs hidden lg:flex text-second">Save & Convernient Delivery 60-Day Return</h1>
          <div className="hidden lg:flex gap-8 justify-center">
            <Link className="text-xs text-second" to={'/'}>Free Delivery</Link>
            <Link className="text-xs text-second" to={'/'}>About Us</Link>
            <Link className="text-xs text-second" to={'/'}>Support</Link>
            <Link className="text-xs text-second" to={'/'}>Register</Link>
          </div>
          <div className="w-auto mx-auto flex lg:hidden gap-8 justify-center">
            <Link className="text-lg text-second" to={'/'}><BsPerson/></Link>
            <Link className="text-lg text-second" to={'/'}><BsSearch/></Link>
            <Link className="text-lg text-second" to={'/'}><BsCart4/></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavTop