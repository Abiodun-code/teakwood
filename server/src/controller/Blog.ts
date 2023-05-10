import {Request, Response} from "express"
import {BlogModel} from "../model/Blog"
import moment from "moment"

// Function to get all products from database
export const getBlog = async (req:Request, res:Response)=>{
  try{
    const allBlog = await BlogModel.find()
    res.json({allBlog})
  }catch(error){
    console.log(error)
  }
}

// Function to create new products to the database
export const postBlog = async (req: Request, res: Response)=>{
  const { filename } = req.file;
  const { text, title, date } = req.body;

  if (!text || !filename || !title || !date) {
    res.json({ message: "No Record Input" })
  }

  try{

    const date = moment(new Date()).format("YYYY-MM-DD")
    const newBlog = new BlogModel({
      title:title,
      image: filename,
      text: text,
      date: date
    })
    const saveBlog = newBlog;
    await saveBlog.save()
    res.json(saveBlog)
  }catch(error){
    console.log(error)
  }
}