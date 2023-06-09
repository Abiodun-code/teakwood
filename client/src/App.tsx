import { useState } from 'react'
import './App.css'
import Routing from './Routing/Routing'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'

function App() {

  return (
    <div className="w-full h-full">
      <Routes>
        <Route path="*" element={<Routing />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
