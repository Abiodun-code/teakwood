import mongoose from "mongoose"

const BlogSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  image:{
    type:String,
    required:true
  },
  text:{
    type:String,
    required: true
  },
  date: {
    type: Date
  }
})

export const BlogModel = mongoose.model("Blog", BlogSchema)