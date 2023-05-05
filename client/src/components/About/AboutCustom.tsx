import React from 'react'
import image from '../../assets/image2.png'

type Props = {}

const AboutCustom = (props: Props) => {
  return (
    <div className='w-full h-auto bg-fourth'>
      <div className="container lg:max-w-[95%] md:max-w-[95%] lg:px-0 mx-auto py-16 px-3">
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1">
          <div className="lg:max-w-[70%] max-w-full lg:pt-9 pt-0">
            <h1 className="lg:text-5xl font-semibold text-4xl text-center lg:text-start">Custom Made, Not Pre-Made</h1>
            <p className="lg:text-base font-light text-lg text-center lg:text-start pt-3">Lorem ipsum dolor sit amet consectetur adipiscing, elit imperdiet cursus fringilla tempor. Taciti  volutpat odio est tellus non vehicula neque congue leo. </p>
            <p className="pt-2 text-center lg:text-start hover:text-sixth transition-all duration-75 cursor-pointer underline">Read More</p>
          </div>
          <div className="lg:max-w-[100%] h-auto max-w-full lg:pt-0 pt-7">
            <img className="lg:max-w-[100%] h-auto max-w-full image" src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCustom