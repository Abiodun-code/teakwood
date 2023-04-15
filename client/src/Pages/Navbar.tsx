import React from 'react'
import NavTop from '../components/Navbar/NavTop'
import NavMenu from '../components/Navbar/NavMenu'
import NavList from '../components/Navbar/NavList'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <>
      <NavTop/>
      <NavMenu/>
      <NavList/>
    </>
  )
}

export default Navbar