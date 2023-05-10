import React, { useContext } from 'react'
import { BlogContext } from '../../Contexts/BlogContext'
import { Link } from 'react-router-dom'

type Props = {}

const BlogContent = (props: Props) => {
  const { datas } = useContext(BlogContext)

  return (
    <div className='w-full h-auto'>
      <div className="container py-7 lg:max-w-[95%] md:max-w-[95%] max-w-full lg:px-0 md:px-0 mx-auto px-3">
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-7">
          {datas.length > 0 ? datas.map((content, index) => {
            return (
              <div key={index}>
                <div className="border rounded-sm w-full group">
                  <div className="py-4 w-full">
                    <img className="max-w-[95%] mx-auto max-h-[40vh]" src={`http://localhost:5432/Blogupload/${content.image}`} />
                  </div>
                  <div className="text-center">
                    <Link to={"/"} className="text-2xl text-second font-bold">{content.title}</Link>
                    <h4 className="px-2 text-base text-black py-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde ea ex illum iste soluta repudiandae?...</h4>
                  </div>
                </div>
              </div>
            )
          }) : ""}
        </div>
      </div>
    </div>
  )
}

export default BlogContent