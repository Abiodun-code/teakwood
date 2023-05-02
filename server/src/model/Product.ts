import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({

});

export const ProductModel =  mongoose.model("products", ProductSchema);