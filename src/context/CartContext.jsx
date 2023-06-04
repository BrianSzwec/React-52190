import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const[ cart, setCart] = useState([])
  const agregarAlCarrito = (item) =>{
    setCart([...cart,item])
    console.log(cart)
  }

    const removeItem = (id) =>{
      setCart( cart.filter( (item) => item.id !==id))
    }

    const total = () => {
    return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)}
  
  const isInCart = (id) =>{
return cart.some((item) => item.id === id)
  }

  
  const emptyCart= () =>{
    setCart([])
  }

  const totalCantidad = () =>{
    return cart.reduce((acc, item) => acc + item.cantidad, 0)
  }

    return(
        
            <CartContext.Provider value={{
                cart,
                agregarAlCarrito,
                isInCart,
                emptyCart,
                totalCantidad,
                removeItem,
                total
            }}>
                {children}
            </CartContext.Provider>
    )
}