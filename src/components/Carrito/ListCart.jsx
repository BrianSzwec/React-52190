import { useState } from 'react';
import { Clicker } from './Clicker';

const Producto = ({ producto }) => {
  const [cantidad, setCantidad] = useState(1);

  const sumar = () => {
    setCantidad(cantidad + 1);
  };

  const restar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const agregarAlCarrito = () => {
    // Aquí iría la lógica para agregar el producto al carrito
    console.log(`Se agregó ${cantidad} unidades del producto ${producto.nombre} al carrito.`);
  };

  return (
    <div className="card">
      <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">{producto.descripcion}</p>
        <p className="card-text">$ {producto.precio}</p>
        <Clicker sumar={sumar} restar={restar} cantidad={cantidad} />
        <button className="btn btn-primary mt-3" onClick={agregarAlCarrito}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Producto;