import { Request, Response } from "express"
import {ProductModel} from "../model/Product";

// Function to get all products from database
export const getProduct = async (req:Request, res:Response) => {
  try{
    const allProduct = await ProductModel.find({})

    res.json(allProduct)
  }catch (error) {
    res.json(error)
  }
}

export const postProduct = async(req: Request, res: Response)=>{
  const {filename} = req.file;
  const {name, amount} = req.body;

  if (!name || !filename || !amount){
    res.json({message: "No Record Inpput"})
  }

  try{
    const newProduct = new ProductModel({
      name: name,
      image: filename,
      amount: amount
    });

    const saveNewProduct = newProduct;
    await saveNewProduct.save()
    res.json(saveNewProduct);
  }catch (error) {
    res.json(error)
  }
}