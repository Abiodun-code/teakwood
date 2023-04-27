import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Navbar from '../Pages/Navbar'
import Footer from '../Pages/Footer'
import About from '../Pages/About'

type Props = {}

const Routing = (props: Props) => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default Routing