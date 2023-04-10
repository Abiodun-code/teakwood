import React from 'react'
import NavTop from '../components/Navbar/NavTop'
import NavMenu from '../components/Navbar/NavMenu'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <>
      <NavTop/>
      <NavMenu/>
    </>
  )
}

export default Navbar