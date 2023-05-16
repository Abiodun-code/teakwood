import React, { useContext } from "react";
import {BlogContext} from "../Contexts/BlogContext";
import { useParams } from "react-router-dom";
import moment from "moment"

const SingleBlog = ()=>{
  const {id} = useParams()
  const {datas} = useContext(BlogContext)

  const data: any = datas.filter((item: any)=>{
    return item._id == id
  })

  return (
    <div className="w-full h-auto">
      <div className="container max-w-full lg:max-w-[50%] md:max-w-[60%] mx-auto px-7 lg:px-0 md:px-0 py-14">
        {data.map((content: any, index: any)=>{
          return (
            <div key={index} className="w-full h-auto">
              <h1 className="text-center font-medium text-4xl pb-11">{content.title}</h1>
              <p className="font-medium text-lg pb-4">Updated On:{moment(content.date).format("L")}</p>
              <img className="h-auto" src={`http://localhost:5432/Blogupload/${content.image}`} />
              <h4 className="text-lg pt-4">{content.text}</h4>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SingleBlog