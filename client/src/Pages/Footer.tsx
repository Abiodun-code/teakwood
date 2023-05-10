import React from 'react'
import foot1 from '../assets/footImage/Visa.png'
import foot2 from '../assets/footImage/PayPal.png'
import foot3 from '../assets/footImage/Mastercard.png'
import foot4 from '../assets/footImage/JCB.png'
import foot5 from '../assets/footImage/Discover.png'
import foot6 from '../assets/footImage/Amex.png'


type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='w-full h-auto bg-fourth relative bottom-0'>
      <div className="container lg:max-w-[98%] md:max-w-[98%] max-w-full mx-auto lg:px-0 md:px-0 px-3">
        <div className="py-4 lg:flex block md:flex lg:justify-between md:justify-between justify-center">
          <h1 className="pt-2 lg:text-lg md:text-sm lg:text-none text-base text-center text-second">Copyright © 2023 Teakwood | Powered by Abiodun-code</h1>
          <div className=" lg:w-[40%] md:w-[50%] w-full lg:flex md:flex flex justify-center flex-wrap lg:gap-9 md:gap-6 gap-11 lg:pt-0 md:pt-0 pt-8">
            <img className="lg:w-[8%] md:w-[10%] max-w-[13%]" src={foot1} alt=""/>
            <img className="lg:w-[8%] md:w-[10%] max-w-[13%]" src={foot2} alt="" />
            <img className="lg:w-[8%] md:w-[10%] max-w-[13%]" src={foot3} alt="" />
            <img className="lg:w-[8%] md:w-[10%] max-w-[13%]" src={foot4} alt="" />
            <img className="lg:w-[8%] md:w-[10%] max-w-[13%]" src={foot5} alt="" />
            <img className="lg:w-[8%] md:w-[10%] max-w-[13%]" src={foot6} alt="" />
          </div>
        </div>
    </div>
  </div>
  )
}

export default Footer