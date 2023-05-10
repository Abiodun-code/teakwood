import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { BlogContext } from '../Contexts/BlogContext'

type productProps = {
  title: String,
  image: String,
  text: String,
  date: String
}

const CreateBlog = () => {

  const { setImageFile,
    addBlog,
    title,
    setTitle,
    image,
    setImage,
    text,
    setText } = useContext(BlogContext)

  const { register, handleSubmit, watch, formState: { errors } } = useForm<productProps>();

  return (
    <div className="w-full h-auto">
      <div className="container max-w-full lg:max-w-[50%] md:max-w-[60%] mx-auto px-7 lg:px-0 md:px-0 py-20">
        <div className="text-center">
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold">Create Blog</h1>
        </div>
        <form className="pt-9 w-full" onSubmit={addBlog}>
          <div className="block">
            <label htmlFor="name" className="text-base">Blog Title</label>
            <input className="mt-3 p-4 outline-none w-full border border-first bg-white rounded" id="name" type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="block pt-7">
            <label htmlFor="image" className="text-base">Blog Image</label>
            <input className="mt-3 p-4 outline-none w-full border border-first bg-white rounded" id="image" type="file"
              onChange={setImageFile}
            />
          </div>
          <div className="block pt-7">
            <label htmlFor="text" className="text-base">Blog Text</label>
            <textarea className="mt-3 p-4 outline-none w-full border border-first bg-white rounded" id="text" row="10"
              value={text}
              onChange={(event) => setText(event.target.value)}></textarea>
          </div>
          <button type="submit" className="py-3 mt-7 w-full bg-second hover:bg-sixth text-white transition-all duration-300 text-center text-base">create</button>
        </form>
      </div>
    </div>
  )
}

export default CreateBlog