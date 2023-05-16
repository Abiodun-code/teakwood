import React, { createContext, useState, useEffect } from 'react'

type Props = {
  children: React.ReactNode
}

type defaultState = {
  cart: never[],
  setCart: React.Dispatch<React.SetStateAction<never[]>>,
  itemAmount: number,
  setItemAmount: React.Dispatch<React.SetStateAction<number>>,
  total: number,
  setTotal: React.Dispatch<React.SetStateAction<number>>,
  addToCart: (product: any, id: any) => void,
  decreaseAmount: (id: any) => void,
  removeFromCart: (id: any) => void,
  clearCart: () => void,
  increaseAmount: (id: any) => void,
}

export const CartContext = createContext<defaultState>({
  cart: [],
  setCart: function (value: React.SetStateAction<never[]>): void {
    throw new Error('Function not implemented.')
  },
  itemAmount: 0,
  setItemAmount: function (value: React.SetStateAction<number>): void {
    throw new Error('Function not implemented.')
  },
  total: 0,
  setTotal: function (value: React.SetStateAction<number>): void {
    throw new Error('Function not implemented.')
  },
  addToCart: function (product: any, id: any): void {
    throw new Error('Function not implemented.')
  },
  decreaseAmount: function (id: any): void {
    throw new Error('Function not implemented.')
  },
  removeFromCart: function (id: any): void {
    throw new Error('Function not implemented.')
  },
  clearCart: function (): void {
    throw new Error('Function not implemented.')
  },
  increaseAmount: function (id: any): void {
    throw new Error('Function not implemented.')
  }
})

const CartProvider = ({ children }: Props) => {
  const [cart, setCart] = useState([])
  const addToCart = (product: any, id: number) => {
    const newItem: any = { ...product, amount: 1 }

    const cartItem: any = cart.find((item: any )=> {
      return item.id === id
    });
    if (cartItem) {
      const newCart:any = [...cart].map((item: any )=> {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item
        }
      })
      setCart(newCart)
    } else {
      setCart({...cart})
    }
  }

  const removeFromCart = (id: any) => {
    const newCart = cart.filter((item: any) => {
      return item.id !== id
    })
    setCart(newCart)
  }

  const clearCart = () => {
    setCart([])
  }

  const increaseAmount = (id: any) => {
    const cartItem = cart.find((item:any) => item.id === id);
    addToCart(cartItem, id)
  }

  const decreaseAmount = (id: any) => {
    const cartItem:any = cart.find((item: any) => {
      return item.id === id
    })
    if (cartItem) {
      const newCart: any = cart.map((item: any) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
    }
    if (cartItem.amount < 2) {
      removeFromCart(id)
    }
  }


  const [itemAmount, setItemAmount] = useState(0)
  const [total, setTotal] = useState(0)

  // useEffect(() => {
  //   const total: number = cart.reduce((accumulator, current) => {
  //     return accumulator + current.price * current.amount
  //   }, 0);
  //   setTotal(total)
  // })

  // useEffect(() => {
  //   if (cart) {
  //     const amount: number = cart.reduce((accumulator, current) => {
  //       return accumulator + current.amount
  //     }, 0)
  //     setItemAmount(amount)
  //   }
  // }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        itemAmount,
        setItemAmount,
        total,
        setTotal,
        decreaseAmount,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount
      }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider