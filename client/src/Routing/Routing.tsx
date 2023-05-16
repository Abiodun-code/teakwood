import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Navbar from '../Pages/Navbar'
import Footer from '../Pages/Footer'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Shop from '../Pages/Shop'
import CreateProduct from '../Pages/CreateProduct'
import CreateBlog from '../Pages/CreateBlog'
import BlogContent from '../components/Blog/BlogContent'
import SingleBlog from '../Pages/SingleBlog'

type Props = {}

const Routing = (props: Props) => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact />} />
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/create-product" element={<CreateProduct/>} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/blog" element={<BlogContent />} />
        <Route path="blog/:id" element={<SingleBlog />}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default Routing