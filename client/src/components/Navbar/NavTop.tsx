import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {BsPerson, BsSearch, BsCart4, BsPersonFillLock} from 'react-icons/bs'
import { useCookies } from 'react-cookie'
import { motion } from 'framer-motion'

type Props = {}

const Variants = {
  initial: { x:0},
  animate: { y: [0, 10, 0, -10, 0] },
  transition: { type: "spring", duration: 100, delay: 1, damping:50 }
}

const NavTop = (props: Props) => {
  const [cookies, setCookies] = useCookies(["access_token"])

  const navigate = useNavigate()

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID")
    navigate("/auth")
  }
  return (
    <div className='w-full h-full bg-fourth'>
      <div className="container lg:max-w-[97%] lg:px-0 mx-auto py-2 px-3">
        <motion.div variants={Variants} animate="animate" initial="initial"
        className="flex justify-center md:justify-between lg:justify-between">
          <h1 className="text-xs hidden lg:flex text-second">Save & Convernient Delivery 60-Day Return</h1>
          <div className="hidden lg:flex gap-8 justify-center">
            <Link className="text-xs text-second" to={'/'}>Free Delivery</Link>
            <Link className="text-xs text-second" to={'/'}>About Us</Link>
            <Link className="text-xs text-second" to={'/'}>Support</Link>
            <Link className="text-xs text-second" to={'/'}>Register</Link>
          </div>
          <div className="w-auto mx-auto flex lg:hidden gap-8 justify-center">
            {!cookies.access_token ? (
              <Link className="text-lg text-second" to={'/auth'}><BsPerson /></Link>
            ) : <Link className="text-lg text-second" to={'/'} onClick={logout}><BsPersonFillLock/></Link>}
            <Link className="text-lg text-second" to={'/'}><BsSearch/></Link>
            <Link className="text-lg text-second" to={'/'}><BsCart4/></Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default NavTop