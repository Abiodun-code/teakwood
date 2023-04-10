import { useState } from 'react'
import './App.css'
import Routing from './Routing/Routing'
import Navbar from './Pages/Navbar'

function App() {

  return (
    <div className="w-full h-full">
      <Navbar/>
      <Routing/>
    </div>
  )
}

export default App
