import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

type Props = {
  children: React.ReactNode
}

type defaultState = {
  getBlog: (event: any) => void,
  setImageFile: (event: any) => void,
  addBlog: (event: any) => Promise<void>,
  title: string,
  setTitle: React.Dispatch<React.SetStateAction<string>>,
  image: string,
  setImage: React.Dispatch<React.SetStateAction<string>>,
  text: string,
  setText: React.Dispatch<React.SetStateAction<string>>,
  datas: never[],
}

export const BlogContext = createContext<defaultState>({
  getBlog: function (event: any): void {
    throw new Error('Function not implemented.')
  },
  setImageFile: function (event: any): void {
    throw new Error('Function not implemented.')
  },
  addBlog: function (event: any): Promise<void> {
    throw new Error('Function not implemented.')
  },
  title: '',
  setTitle: function (value: React.SetStateAction<string>): void {
    throw new Error('Function not implemented.')
  },
  image: '',
  setImage: function (value: React.SetStateAction<string>): void {
    throw new Error('Function not implemented.')
  },
  text: '',
  setText: function (value: React.SetStateAction<string>): void {
    throw new Error('Function not implemented.')
  },
  datas: [],
})

const BlogProvider = ({children}: Props) => {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [text, setText] = useState("")
  const [datas, setDatas] = useState([])

  // setImageFile is pass to image
  const setImageFile = (event: any) => {
    setImage(event.target.files[0])
  }

  // Add product fuction
  const addBlog = async (event: any) => {
    event.preventDefault()

    var formData = new FormData()
    formData.append("title", title)
    formData.append("photo", image)
    formData.append("text", text)

    const response = await axios.post("http://localhost:5432/blog", formData);
    console.log(response)
    window.location.pathname = "/blog";
  }

  // Get all product function
  const getBlog = async () => {
    try {
      const response = await axios.get("http://localhost:5432/blog", {
        headers: {
          "Content-Type": "application/json"
        }
      })
      setDatas(response.data.allBlog)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getBlog()
  }, [])

  return (
    <BlogContext.Provider value={{
      setImageFile,
      addBlog,
      title,
      setTitle,
      image,
      setImage,
      text,
      setText,
      datas,
      getBlog   
    }}>
      {children}
    </BlogContext.Provider>
  )
}

export default BlogProvider