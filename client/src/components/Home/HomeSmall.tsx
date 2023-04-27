import React from 'react'
import { TopSec } from '../../Config/HomeData'
import {motion} from 'framer-motion'

const ImageAnimate={
  initial:{
    y: 100,
    opacity: 0
  },
  animate:{
    y:[0, 20, 0, -20, 0],
    opacity: 1
  },
  transition:{type: "bounce", duration: 0.5, delay: 0.5, ease:1.5}
}

type Props = {}

const HomeSmall = (props: Props) => {
  return (
    <div className='w-full h-auto'>
      <div className="container lg:max-w-[100%] md:max-w-[100%] lg:px-0 mx-auto px-0">
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2">
          {TopSec.map((content, index)=>{
            return (
              <div key={index} className=" border-l border-r border-b border-r-seventh border-l-seventh border-b-seventh group">
                <motion.div initial="initial" animate="animate" variants={ImageAnimate}
                 className=" py-9 overflow-hidden">
                  <img className="lg:max-w-[90%] md:max-w-[70%] max-w-[50%] group-hover:object-cover mx-auto h-auto object-cover object-center" src={content.image} />
                  <p className="text-xl font-light pt-2 text-center">{content.text}</p>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HomeSmall