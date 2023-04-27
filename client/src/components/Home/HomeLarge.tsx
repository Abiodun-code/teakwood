import React from 'react'
import {TopImage} from '../../Config/HomeData'
import { motion } from 'framer-motion'

const ImageAnimate={
  initial:{x:0, opacity: 0},
  animate:{x:0, opacity: 1},
  transition: { type: "bounce", duration: 0.4, delay: 0.9}
}

type Props = {}

const HomeLarge = (props: Props) => {
  return (
    <div className='w-full h-auto'>
      <div className="container lg:max-w-[100%] md:max-w-[100%] max-w-full lg:px-0 mx-auto px-0">
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2">
          {TopImage.map((content, index)=>{
            return (
              <div key={index} className=" border-l border-r border-b border-r-seventh border-l-seventh border-b-seventh group">
                <motion.div variants={ImageAnimate} animate="animate" initial="initial"
                 className="transition-all ease-in duration-75 group-hover:bg-seventh py-14">
                  <img 
                   className="lg:max-w-[80%] md:max-w-[60%] max-w-[50%] group-hover:-translate-y-[2rem] duration-300 transition-all mx-auto h-auto object-cover object-center" src={content.image} />
                  <div className="w-full h-full text-center">
                    <h1 className="text-4xl font-semibold">{content.top}</h1>
                    <p className="text-xl font-light pt-2">{content.bottom}</p>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HomeLarge