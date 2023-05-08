import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { ProductContext } from '../Contexts/ProductContext'

type productProps = {
  name: String,
  image: String,
  amount: String
}

const CreateProduct = () => {

  const { 
    setImageFile,
    addProduct, 
    name,
    setName,
    image,
    setImage,
    amount,
    setAmount } = useContext(ProductContext)

  const { register, handleSubmit, watch, formState: { errors } } = useForm<productProps>();


  return (
    <div className="w-full h-auto">
      <div className="container max-w-full lg:max-w-[50%] md:max-w-[60%] mx-auto px-7 lg:px-0 md:px-0 py-20">
        <div className="text-center">
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold">Create Product</h1>
        </div> 
        <form className="pt-9 w-full" onSubmit={addProduct}>
          <div className="block">
            <label htmlFor="name" className="text-base">Product Name</label>
            <input className="mt-3 p-4 outline-none w-full border border-first bg-white rounded" id="name" type="text"
              value={name}
              onChange={(event)=> setName(event.target.value)}
             />
          </div>
          <div className="block pt-7">
            <label htmlFor="image" className="text-base">Product Image</label>
            <input className="mt-3 p-4 outline-none w-full border border-first bg-white rounded" id="image" type="file"
              onChange={setImageFile}
            />
          </div>
          <div className="block pt-7">
            <label htmlFor="amount" className="text-base">Product Amount</label>
            <input className="mt-3 p-4 outline-none w-full border border-first bg-white rounded" id="amount" type="number"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
          </div>
          <button type="submit" className="py-3 mt-7 w-full bg-second hover:bg-sixth text-white transition-all duration-300 text-center text-base">create</button>
        </form>
      </div>
    </div>
  )
}

export default CreateProduct