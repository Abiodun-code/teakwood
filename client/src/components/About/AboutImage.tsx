import React from 'react'
import { ImageSm } from '../../Config/AboutData'

type Props = {}

const AboutImage = (props: Props) =>{
  return (
    <div className="w-full h-full">
      <div className="container lg:max-w-[95%] md:max-w-[90%] lg:px-0 mx-auto px-0">
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 lg:gap-11 md:gap-11 gap-20 py-20">
          {ImageSm.map((content, index)=>{
            return(
              <div key={index} className="lg:max-w-[100%] md:max-w-[100%] max-w-[90%] mx-auto">
                <img src={content.image}/>
                <div className="pt-4 text-center">
                  <h3 className="text-xl">{content.number}</h3>
                  <h3 className="pt-2 text-xl">{content.text}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default AboutImage