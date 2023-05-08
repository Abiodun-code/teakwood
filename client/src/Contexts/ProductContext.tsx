import React, {createContext, useEffect, useState} from "react";
import axios from "axios"

type defaultState = {
  getProduct: (event: any) => void,
  setImageFile: (event: any) => void,
  addProduct: (event: any) => Promise<void>,
  name: string,
  setName: React.Dispatch<React.SetStateAction<string>>,
  image: string,
  setImage: React.Dispatch<React.SetStateAction<string>>,
  amount: string,
  setAmount: React.Dispatch<React.SetStateAction<string>>,
  datas: never[],
}

export const ProductContext = createContext<defaultState>({
  getProduct: function (event: any): Promise<void> {
    throw new Error('Function not implemented.');
  },
  setImageFile: function (event: any): void {
    throw new Error('Function not implemented.');
  },
  addProduct: function (event: any): Promise<void> {
    throw new Error('Function not implemented.');
  },
  name: '',
  setName: function (value: React.SetStateAction<string>): void {
    throw new Error('Function not implemented.');
  },
  image: '',
  setImage: function (value: React.SetStateAction<string>): void {
    throw new Error('Function not implemented.');
  },
  amount: '',
  setAmount: function (value: React.SetStateAction<string>): void {
    throw new Error('Function not implemented.');
  },
  datas: [],
})

type Props = {
  children: React.ReactNode
}

const ProductProvider = ({children}: Props)=>{
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [amount, setAmount] = useState("")
  const [datas, setDatas] = useState([])

  const setImageFile = (event: any) => {
    setImage(event.target.files[0])
  }

  const addProduct = async(event: any) =>{
    event.preventDefault()

    var formData = new FormData()
    formData.append("name", name)
    formData.append("photo", image)
    formData.append("amount", amount)

    const response = await axios.post("http://localhost:5432/product", formData)
    console.log(response)
    window.location.pathname = "/shop";
  }

  const getProduct = async()=>{
    try{
      const response = await axios.get("http://localhost:5432/product", {
        headers:{
          "Content-Type" : "application/json"
        }
      })
      setDatas(response.data.allProduct)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    getProduct()
  }, [])

  return(
    <ProductContext.Provider value={{
    datas,
    getProduct,
    setImageFile,
    addProduct, 
    name, 
    setName, 
    image, 
    setImage, 
    amount, 
    setAmount}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider