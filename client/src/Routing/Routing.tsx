import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'

type Props = {}

const Routing = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  )
}

export default Routing