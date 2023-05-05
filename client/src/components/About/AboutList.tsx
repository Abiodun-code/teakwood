import React from 'react'
import { ImageSm, ListContent } from '../../Config/AboutData'
import { Link } from 'react-router-dom'

type Props = {}

const AboutList = (props: Props) => {
  return (
    <div className="w-full h-full">
      <div className="container lg:max-w-[50%] md:max-w-[50%] lg:px-0 mx-auto px-0">
        <div className="lg:flex md:flex lg:gap-16 md:gap-9 md:flex-wrap hidden py-9 ">
          {ListContent.map((content, index) => {
            return (
              <Link to={content.link} key={index} className="cursor-pointer text-base text-third font-light hover:text-sixth transition-all duration-75">
                {content.name}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default AboutList