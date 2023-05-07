import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  image:{
    type: String,
    required: true
  },
  amount:{
    type: String,
    required: true
  }
});

export const ProductModel =  mongoose.model("products", ProductSchema);