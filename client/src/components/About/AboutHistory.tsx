import React from 'react'
import about from '../../assets/about1.jpg'

type Props = {}

const AboutHistory = (props: Props) =>{
  return(
    <div className="w-full h-auto">
      <div className="container lg:max-w-[95%] md:max-w-[95%] max-w-full mx-auto">
        <div className="lg:pt-0 md:pt-0 pt-20 pb-20 flex lg:justify-between md:flex-wrap flex-wrap">
          <img className="lg:max-w-[45%] md:max-w-[90%] mx-auto max-w-[95%]" src={about} alt=""/>
          <div className="lg:max-w-[50%] md:max-w-[90%] max-w-[95%] mx-auto">
            <h1 className="lg:text-4xl lg:pt-9 md:text-4xl md:pt-9 text-3xl font-semibold pt-9 text-center">History About Teakwood</h1>
            <h4 className="lg:text-lg md:text-lg text-lg font-medium pt-6 text-center">Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos dictum per cras justo natoque cubilia tristique, tellus fusce sagittis potenti interdum lectus viverra libero nunc euismod augue tempus tempor.</h4>
            <h4 className="lg:text-lg md:text-lg text-lg font-medium pt-6 text-center">Diam bibendum vehicula lacus inceptos sem suscipit pharetra tristique imperdiet vitae, augue sapien aenean litora fringilla aliquet a justo cursus curabitur dignissim, viverra gravida torquent dictum volutpat congue proin ridiculus morbi.</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutHistory