import React, { useContext } from 'react'
import {ProductContext} from '../../Contexts/ProductContext'

type Props = {}

const ShopForm = (props: Props) => {
  const {datas} = useContext(ProductContext)
  return (
    <div className='w-full h-auto'>
      <div className="container py-7 lg:max-w-[95%] md:max-w-[95%] max-w-full lg:px-0 md:px-0 mx-auto px-3">
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-7">
          {datas.length > 0 ? datas.map((content, index) => {
            return (
              <div key={index}>
                <div className="border rounded-sm w-full">
                  <img src={`upload/${content.image}`} />
                  <div className="text-center">
                    <h3 className="text-lg text-second font-bold">{content.name}</h3>
                    <h4 className="text-base text-sixth pt-2 font-bold">$ {content.amount}.00</h4>
                  </div>
                  <button className="bg-second hover:bg-sixth duration-75 transition-all text-white text-lg my-3 mx-2 w-[95%] p-3 rounded" type="submit">Cart</button>
                </div>
              </div>
            )
          }) : ""}
        </div>
      </div>
    </div>
  )
}

export default ShopForm