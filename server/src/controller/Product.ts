import { Request, Response } from "express"
// import {productModel} from "../model/Product";

// Function to get all products from database
export const getProduct = async (req:Request, res:Response) => {
  res.json("Working with Product")
}