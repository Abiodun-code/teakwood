import React from 'react'
import { Link } from 'react-router-dom'
import {BsChevronRight} from 'react-icons/bs'
import { motion } from 'framer-motion'

type Props = {}

const Bgvariants ={
  initial: { x: 0, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { type: "spring", duration: 0.9, delay: 0.9 }
}

const AboutHeader = (props: Props) => {
  return (
    <div className='w-full h-full'>
      <div className="container max-w-full lg:max-w-[100%] md:max-w-[100%] mx-auto">
        <motion.div variants={Bgvariants} initial="initial" animate="animate"
         className='w-full h-auto bg-aboutImg bg-cover bg-center lg:pl-24 md:pl-20 pl-7 py-24'>
          <div className="flex justify-between lg:max-w-[14%] md:max-w-[19%] max-w-[40%]">
            <Link className='text-lg text-sixth' to={"/"}>Home</Link>
            <p className='text-lg pt-[.2rem]' ><BsChevronRight/></p>
            <h1 className='text-lg' >About</h1>
          </div>
          <h1 className='lg:text-6xl md:text-5xl text-4xl font-bold lg:font-bold md:font-bold w-[70%] lg:w-[40%] md:w-[37%] pt-14'>Made To Be Uniquely Yours Furniture</h1>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutHeader