import { useState } from "react";

export const Clicker = (props) => {
  
  const [counter, setCounter] = useState(20)
  const [cantidad, setCantidad] = useState(0)

 

  const sumar = () => {
    if (counter > 0) {
      setCounter(counter - 1)
      setCantidad(cantidad + 1)
      props.actualizarStock(-1)
    }
  }

  return (
    <div className="">
      <button className="btn-clicker" onClick={sumar}>Agregar al carrito</button>
      <div className="Container-Cli">
        <p className="Clickr my-3">Stock disponible: {counter}</p>
        <p>Cantidad en el carrito: {cantidad}</p>
      </div>
    </div>
  )
}